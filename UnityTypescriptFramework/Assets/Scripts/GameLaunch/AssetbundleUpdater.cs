using System;
using System.Collections;
using System.Collections.Generic;
using AssetBundles;
using CS;
using GameChannel;
using UnityEditor;
using UnityEngine;
using UnityEngine.UI;
using Logger = CS.Logger;

/// <summary>
/// added by wsh @ 2017.12.29
/// 功能：Assetbundle更新器
/// </summary>
public class AssetbundleUpdater : MonoBehaviour
{
    public static string UPDATE_FAIL_KEY = "update_fail_key";
    static int MAX_DOWNLOAD_NUM = 5;
    static int UPDATE_SIZE_LIMIT = 5 * 1024 * 1024;
    static string APK_FILE_PATH = "/xluaframework_{0}_{1}.apk";

    string resVersionPath = null;
    string noticeVersionPath = null;
    string clientAppVersion = null;
    string serverAppVersion = null;
    string clientResVersion = null;
    string streamingResVersion = null;
    string serverResVersion = null;

    bool needDownloadGame = false;
    bool needUpdateGame = false;

    /// <summary>
    /// 热更新需要的最低版本号
    /// </summary>
    string needAppVersionToUpdate = null;

    double timeStamp = 0;
    bool isDownloading = false;
    bool hasError = false;
    Manifest localManifest = null;
    Manifest hostManifest = null;
    List<string> needDownloadList = new List<string>();
    List<ResourceWebRequester> downloadingRequest = new List<ResourceWebRequester>();

    int downloadSize = 0;
    int totalDownloadCount = 0;
    int finishedDownloadCount = 0;

    Text statusText;
    Slider slider;

    void Awake()
    {
        statusText = transform.Find("content/m_loading_desc").GetComponent<Text>();
        slider = transform.Find("content/slider_bar").GetComponent<Slider>();
        slider.gameObject.SetActive(false);
    }

    void Start()
    {
        resVersionPath = AssetBundleUtility.GetPersistentDataPath(BuildUtils.ResVersionFileName);
        noticeVersionPath = AssetBundleUtility.GetPersistentDataPath(BuildUtils.NoticeVersionFileName);
        DateTime startDate = new DateTime(1970, 1, 1);
        timeStamp = (DateTime.Now - startDate).TotalMilliseconds;
        statusText.text = "检查中...";
    }

    #region 主流程

    public void StartCheckUpdate()
    {
        StartCoroutine(CheckUpdateOrDownloadGame());
    }

    public IEnumerator CheckUpdateOrDownloadGame()
    {
        // 初始化本地版本信息
        var start = DateTime.Now;
        yield return InitLocalVersion();
        Logger.Log("InitLocalVersion use {0}ms", (DateTime.Now - start).Milliseconds);

#if UNITY_EDITOR
        serverAppVersion = clientAppVersion;
        serverResVersion = clientResVersion;
        if (AssetBundleConfig.IsEditorMode)
        {
            // EditorMode总是跳过资源更新
            yield return StartGame();
            yield break;
        }
        else
        {
#if UNITY_5_5
            // 说明：亲测在Unity5.5版本本地服务器根本无法连接，倒是在手机上正常
            Logger.Log("No support simulate in Unity5.5 in windows...");
            yield return StartGame();
            yield break;
#endif
        }
#endif

        // 获取服务器地址，并检测资源更新
        serverAppVersion = clientAppVersion;
        serverResVersion = clientResVersion;
        yield return GetUrlListAndCheckUpdate();

        // 执行资源更新
        if (needUpdateGame)
        {
            yield return CheckGameUpdate(true);
            yield return StartGame();
        }
        else
        {
            yield return StartGame();
        }

        yield break;
    }

    IEnumerator StartGame()
    {
        statusText.text = "加载中...";
        Logger.clientVerstion = clientAppVersion;
        ChannelManager.instance.resVersion = clientResVersion;
        JsManager.Instance.StartGame();
        UINoticeTip.Instance.DestroySelf();
        Destroy(gameObject, 0.5f);
        yield break;
    }

    #endregion

    #region 初始化工作

    IEnumerator InitLocalVersion()
    {
        clientAppVersion = ChannelManager.instance.appVersion;

        var resVersionRequest = AssetBundleManager.Instance.RequestAssetFileAsync(BuildUtils.ResVersionFileName);
        yield return resVersionRequest;
        streamingResVersion = resVersionRequest.text;
        resVersionRequest.Dispose();
        var persistentResVersion = GameUtility.SafeReadAllText(resVersionPath);

        if (string.IsNullOrEmpty(persistentResVersion))
        {
            clientResVersion = streamingResVersion;
        }
        else
        {
            clientResVersion = BuildUtils.CheckIsNewVersion(streamingResVersion, persistentResVersion)
                ? persistentResVersion
                : streamingResVersion;
        }

        GameUtility.SafeWriteAllText(resVersionPath, clientResVersion);

        var persistentNoticeVersion = GameUtility.SafeReadAllText(noticeVersionPath);
        if (!string.IsNullOrEmpty(persistentNoticeVersion))
        {
            ChannelManager.instance.noticeVersion = persistentNoticeVersion;
        }
        else
        {
            ChannelManager.instance.noticeVersion = "1.0.0";
        }

        Logger.Log("streamingResVersion = {0}, persistentResVersion = {1}, persistentNoticeVersion = {2}",
            streamingResVersion, persistentResVersion, persistentNoticeVersion);
        yield break;
    }

    IEnumerator InitSDK()
    {
#if UNITY_EDITOR
        yield break;
#else
        bool SDKInitComplete = false;
        ChannelManager.instance.InitSDK(() =>
        {
            SDKInitComplete = true;
        });
        yield return new WaitUntil(()=> {
            return SDKInitComplete;
        });
        yield break;
#endif
    }

    #endregion

    #region 资源地址获取以及检测版本更新

    IEnumerator GetUrlListAndCheckUpdate()
    {
        // 获取资源地址
        yield return GetUrlList();

        // 外部版本对比版本号更新
        needUpdateGame = ((clientAppVersion == needAppVersionToUpdate) ||
                          BuildUtils.CheckIsNewVersion(needAppVersionToUpdate, clientAppVersion)) &&
                         BuildUtils.CheckIsNewVersion(clientResVersion, serverResVersion);

#if UNITY_CLIENT || LOGGER_ON
        System.Text.StringBuilder sb = new System.Text.StringBuilder();
        sb.AppendFormat("SERVER_LIST_URL = {0}\n", URLSetting.SERVER_LIST_URL);
        sb.AppendFormat("LOGIN_URL = {0}\n", URLSetting.LOGIN_URL);
        sb.AppendFormat("REPORT_ERROR_URL = {0}\n", URLSetting.REPORT_ERROR_URL);
        sb.AppendFormat("NOTIFY_URL = {0}\n", URLSetting.NOTICE_URL);
        sb.AppendFormat("APP_DOWNLOAD_URL = {0}\n", URLSetting.APP_DOWNLOAD_URL);
        sb.AppendFormat("SERVER_RESOURCE_ADDR = {0}\n", URLSetting.SERVER_RESOURCE_URL);
        sb.AppendFormat("noticeVersion = {0}\n", ChannelManager.instance.noticeVersion);
        sb.AppendFormat("serverAppVersion = {0}\n", serverAppVersion);
        sb.AppendFormat("serverResVersion = {0}\n", serverResVersion);
        sb.AppendFormat("needAppVersionToUpdate = {0}\n", needAppVersionToUpdate);
        Logger.Log(sb.ToString());
#endif

        yield break;
    }

    IEnumerator DownloadLocalServerResVersion()
    {
        var request = AssetBundleManager.Instance.DownloadAssetFileAsync(BuildUtils.ResVersionFileName);
        yield return request;
        if (request.error != null)
        {
            Logger.Log("Download :  {0}\n from url : {1}\n err : {2}", request.assetbundleName, request.url,
                request.error);
            request.Dispose();
            // 本地服务器有问题直接跳过，不要卡住游戏
            yield break;
        }

        serverResVersion = request.text.Trim().Replace("\r", "");
        request.Dispose();

        yield break;
    }

    IEnumerator GetUrlList()
    {
        // 服务器地址设置
        var url = URLSetting.START_UP_URL + "/" + AssetBundleConfig.AssetBundleServerUrlFileName + "?" + timeStamp;
        var localSerUrlRequest = AssetBundleManager.Instance.DownloadWebResourceAsync(url, 3);
        yield return localSerUrlRequest;
        if (localSerUrlRequest.error == null)
        {
            //TODO 修改解析json方式
            var result = JsonUtility.FromJson<object>(localSerUrlRequest.text);
            if (result != null)
            {
                Dictionary<string, object> dictJson = result as Dictionary<string, object>;
                needAppVersionToUpdate = Convert.ToString(dictJson["NeedVersion"]);
                URLSetting.SERVER_RESOURCE_URL =
                    Convert.ToString(dictJson["Url"]) + BuildUtils.ManifestBundleName + "/";
            }
        }
        else
        {
            needAppVersionToUpdate = "1.0.000";
            URLSetting.SERVER_RESOURCE_URL = BuildUtils.ManifestBundleName + "/";
        }

        localSerUrlRequest.Dispose();

        // 从本地服务器拉一下资源版本号
        yield return DownloadLocalServerResVersion();

        yield break;
    }

    #endregion

    #region 游戏下载

    IEnumerator DownloadGame()
    {
#if UNITY_ANDROID
        if (Application.internetReachability != NetworkReachability.ReachableViaLocalAreaNetwork)
        {
            UINoticeTip.Instance.ShowOneButtonTip("游戏下载", "当前为非Wifi网络环境，下载需要消耗手机流量，继续下载？", "确定", null);
            yield return UINoticeTip.Instance.WaitForResponse();
        }

        DownloadGameForAndroid();
#elif UNITY_IPHONE
        ChannelManager.instance.StartDownLoadGame(URLSetting.APP_DOWNLOAD_URL);
#endif
        yield break;
    }

#if UNITY_ANDROID
    void DownloadGameForAndroid()
    {
        slider.normalizedValue = 0;
        slider.gameObject.SetActive(true);
        statusText.text = "下载中...";

        string saveName = string.Format(APK_FILE_PATH, ChannelManager.instance.channelName, serverAppVersion);
        Logger.Log("Download game : {0}", saveName);
        ChannelManager.instance.StartDownloadGame(URLSetting.APP_DOWNLOAD_URL, DownloadGameSuccess, DownloadGameFail,
            (int progress) => { slider.normalizedValue = progress; }, saveName);
    }

    void DownloadGameSuccess()
    {
        UINoticeTip.Instance.ShowOneButtonTip("下载完毕", "游戏下载完毕，确认安装？", "安装",
            () => { ChannelManager.instance.InstallGame(DownloadGameSuccess, DownloadGameFail); });
    }

    void DownloadGameFail()
    {
        UINoticeTip.Instance.ShowOneButtonTip("下载失败", "游戏下载失败！", "重试", () => { DownloadGameForAndroid(); });
    }
#endif

    private bool ShowUpdatePrompt(int downloadSize)
    {
        if (UPDATE_SIZE_LIMIT <= 0 &&
            Application.internetReachability == NetworkReachability.ReachableViaLocalAreaNetwork)
        {
            // wifi不提示更新了
            return false;
        }

        if (downloadSize < UPDATE_SIZE_LIMIT)
        {
            return false;
        }

        return true;
    }

    #endregion

    #region 资源更新

    IEnumerator CheckGameUpdate(bool isInternal)
    {
        // 检测资源更新
        Logger.Log("Resource download url : {0}", URLSetting.SERVER_RESOURCE_URL);
        var start = DateTime.Now;
        yield return CheckIfNeededUpdate(isInternal);
        Logger.Log("CheckIfNeededUpdate use {0}ms", (DateTime.Now - start).Milliseconds);

        // Unity有个Bug会给空的名字，不记得在哪个版本修复了，这里强行过滤下
        for (int i = needDownloadList.Count - 1; i >= 0; i--)
        {
            if (string.IsNullOrEmpty(needDownloadList[i]))
            {
                needDownloadList.RemoveAt(i);
            }
        }

        if (needDownloadList.Count <= 0)
        {
            Logger.Log("No resources to update...");
            yield return UpdateFinish();
            yield break;
        }

        start = DateTime.Now;
        yield return GetDownloadAssetBundlesSize();
        Logger.Log("GetDownloadAssetBundlesSize : {0}, use {1}ms", KBSizeToString(downloadSize),
            (DateTime.Now - start).Milliseconds);
        if (ShowUpdatePrompt(downloadSize) || isInternal)
        {
            UINoticeTip.Instance.ShowOneButtonTip("更新提示", string.Format("本次更新需要消耗{0}流量！", KBSizeToString(downloadSize)),
                "确定", null);
            yield return UINoticeTip.Instance.WaitForResponse();
        }

        statusText.text = "更新中...";
        slider.normalizedValue = 0f;
        slider.gameObject.SetActive(true);
        totalDownloadCount = needDownloadList.Count;
        finishedDownloadCount = 0;
        Logger.Log("{0} resources to update...", totalDownloadCount);

        start = DateTime.Now;
        yield return StartUpdate();
        Logger.Log("Update use {0}ms", (DateTime.Now - start).Milliseconds);

        slider.normalizedValue = 1.0f;
        start = DateTime.Now;
        yield return UpdateFinish();
        Logger.Log("UpdateFinish use {0}ms", (DateTime.Now - start).Milliseconds);

        string noticeUrl = URLSetting.NOTICE_URL;
        if (!string.IsNullOrEmpty(noticeUrl))
        {
            var url = noticeUrl + "?v" + timeStamp;
            var request = AssetBundleManager.Instance.DownloadWebResourceAsync(url);
            yield return request;
            if (request.error == null)
            {
                var path = AssetBundleUtility.GetPersistentDataPath(BuildUtils.UpdateNoticeFileName);
                GameUtility.SafeWriteAllText(path, request.text);
            }

            request.Dispose();
        }

        yield break;
    }

    IEnumerator CheckIfNeededUpdate(bool isInternal)
    {
        localManifest = AssetBundleManager.Instance.curManifest;
        hostManifest = new Manifest();

        string downloadManifestUrl = hostManifest.AssetbundleName;
        downloadManifestUrl += ("?v" + timeStamp);
        yield return DownloadHostManifest(downloadManifestUrl, isInternal);

        needDownloadList = localManifest.CompareTo(hostManifest);
        yield break;
    }

    IEnumerator DownloadHostManifest(string downloadManifestUrl, bool isInternal)
    {
        var request = AssetBundleManager.Instance.DownloadAssetBundleAsync(downloadManifestUrl);
        yield return request;
        if (!string.IsNullOrEmpty(request.error))
        {
            UINoticeTip.Instance.ShowOneButtonTip("网络错误", "检测更新失败，请确认网络已经连接！", "重试", null);
            yield return UINoticeTip.Instance.WaitForResponse();
            Logger.LogError("Download host manifest :  " + request.assetbundleName + "\n from url : " + request.url +
                            "\n err : " + request.error);
            request.Dispose();
            if (isInternal)
            {
                // 直接跳过，不要卡住游戏
                yield break;
            }

            yield return DownloadHostManifest(downloadManifestUrl, isInternal);
        }

        var bytes = request.bytes;
        var assetbundle = AssetBundle.LoadFromMemory(bytes);
        hostManifest.LoadFromAssetbundle(assetbundle);
        hostManifest.SaveBytes(bytes);
        assetbundle.Unload(false);
        request.Dispose();
        yield break;
    }

    IEnumerator GetDownloadAssetBundlesSize()
    {
        var request = AssetBundleManager.Instance.DownloadAssetFileAsync(BuildUtils.AssetBundlesSizeFileName);
        yield return request;
        if (request.error != null)
        {
            UINoticeTip.Instance.ShowOneButtonTip("网络错误", "检测更新失败，请确认网络已经连接！", "重试", null);
            yield return UINoticeTip.Instance.WaitForResponse();
            Logger.LogError("Download assetbundls_size :  " + request.assetbundleName + "\n from url : " + request.url +
                            "\n err : " + request.error);
            request.Dispose();
            yield return GetDownloadAssetBundlesSize();
        }

        var content = request.text.Trim().Replace("\r", "");
        request.Dispose();

        downloadSize = 0;
        var lines = content.Split('\n');
        var lookup = new Dictionary<string, int>();
        var separator = new[] {AssetBundleConfig.CommonMapPattren};
        foreach (var line in lines)
        {
            if (string.IsNullOrEmpty(line))
            {
                Logger.LogError("line empty!");
                continue;
            }

            var slices = line.Split(separator, StringSplitOptions.None);
            if (slices.Length < 2)
            {
                Logger.LogError("line split err : " + line);
                continue;
            }

            int size = 0;
            if (!int.TryParse(slices[1], out size))
            {
                Logger.LogError("size TryParse err : " + line);
            }

            lookup.Add(slices[0], size);
        }

        foreach (var assetbundle in needDownloadList)
        {
            int size = 0;
            if (!lookup.TryGetValue(assetbundle, out size))
            {
                Logger.LogError("no assetbundle size info : " + assetbundle);
            }

            downloadSize += size;
        }

        yield break;
    }

    IEnumerator StartUpdate()
    {
        downloadingRequest.Clear();
        isDownloading = true;
        hasError = false;
        yield return new WaitUntil(() => { return isDownloading == false; });
        if (needDownloadList.Count > 0)
        {
            // 失败标记
            PlayerPrefs.SetInt(UPDATE_FAIL_KEY, 1);
            PlayerPrefs.Save();
            // 回滚版本号
            GameUtility.SafeWriteAllText(resVersionPath, streamingResVersion);
            UINoticeTip.Instance.ShowOneButtonTip("网络错误", "游戏更新失败，请确认网络已经连接！", "重试", null);
            yield return UINoticeTip.Instance.WaitForResponse();
#if UNITY_EDITOR
            EditorApplication.isPlaying = false;
#elif UNITY_ANDROID
            Application.Quit();
#endif
            yield return StartUpdate();
        }

        yield break;
    }

    IEnumerator UpdateFinish()
    {
        statusText.text = "正在准备资源...";

        // 更新成功后关闭测试模式
        PlayerPrefs.SetInt(URLSetting.TEST_MODE_KEY, 0);

        // 保存服务器资源版本号与Manifest
        GameUtility.SafeWriteAllText(resVersionPath, serverResVersion);
        clientResVersion = serverResVersion;
        hostManifest.SaveToDiskCahce();

        // 去掉更新失败标记
        PlayerPrefs.SetInt(UPDATE_FAIL_KEY, 0);
        // 重启资源管理器
        yield return AssetBundleManager.Instance.Cleanup();
        yield return AssetBundleManager.Instance.Initialize();
    }

    void Update()
    {
        if (!isDownloading)
        {
            return;
        }

        for (int i = downloadingRequest.Count - 1; i >= 0; i--)
        {
            var request = downloadingRequest[i];
            if (request.isDone)
            {
                if (!string.IsNullOrEmpty(request.error))
                {
                    Logger.LogError("Error when downloading file : " + request.assetbundleName + "\n from url : " +
                                    request.url + "\n err : " + request.error);
                    hasError = true;
                    needDownloadList.Add(request.assetbundleName);
                }
                else
                {
                    // TODO：是否需要显示下载流量进度？
                    Logger.Log("Finish downloading file : {0}\n from url : {1}", request.assetbundleName, request.url);
                    downloadingRequest.RemoveAt(i);
                    var filePath = AssetBundleUtility.GetPersistentDataPath(request.assetbundleName);
                    bool result = GameUtility.SafeWriteAllBytes(filePath, request.bytes);
                    if (result)
                    {
                        finishedDownloadCount++;
                    }
                    else
                    {
                        GameUtility.SafeDeleteFile(filePath);
                        hasError = true;
                        needDownloadList.Add(request.assetbundleName);
                    }
                }

                request.Dispose();
            }
        }

        if (!hasError)
        {
            while (downloadingRequest.Count < MAX_DOWNLOAD_NUM && needDownloadList.Count > 0)
            {
                var fileName = needDownloadList[needDownloadList.Count - 1];
                needDownloadList.RemoveAt(needDownloadList.Count - 1);
                var request = AssetBundleManager.Instance.DownloadAssetBundleAsync(fileName);
                downloadingRequest.Add(request);
            }
        }
        else
        {
            // 只要有错误，就打更新失败标记，如果更新成功，则去掉
            PlayerPrefs.SetInt(UPDATE_FAIL_KEY, 1);
        }

        if (downloadingRequest.Count == 0)
        {
            isDownloading = false;
        }

        float progressSlice = 1.0f / totalDownloadCount;
        float progressValue = finishedDownloadCount * progressSlice;
        for (int i = 0; i < downloadingRequest.Count; i++)
        {
            progressValue += (progressSlice * downloadingRequest[i].progress);
        }

        slider.normalizedValue = progressValue;
    }

    private string KBSizeToString(int kbSize)
    {
        string sizeStr = string.Empty;
        if (kbSize >= 1024)
        {
            sizeStr = (kbSize / 1024.0f).ToString("0.0") + "M";
        }
        else
        {
            sizeStr = kbSize + "K";
        }

        return sizeStr;
    }

    #endregion
}