using System;
using System.Collections;
using AssetBundles;
using CS.Framework.Conf;
using GameChannel;
using UnityEngine;

namespace CS
{
    /// <summary>
    /// 游戏全局入口
    /// </summary>
    public class GameLaunch : MonoBehaviour
    {
        //调试模式开关
        [SerializeField] private JsDebugger jsDebugger;
        
        /// <summary>
        /// 启动
        /// </summary>
        /// <returns></returns>
        IEnumerator Start()
        {
            //帧率设置
            Application.targetFrameRate = 60;
            //js调试器模式
            Config.JsDebugger = jsDebugger;

            LoggerHelper.Instance.Startup();

            yield return InitAppVersion();

            yield return InitChannel(); 

            //ab管理器启动
            yield return AssetBundleManager.Instance.Initialize();
            //js管理器启动
            JsManager.Instance.StartGame();
            yield break;
        }

        //初始化app版本
        IEnumerator InitAppVersion()
        {
            var appVersionRequest = AssetBundleManager.Instance.RequestAssetFileAsync(BuildUtils.AppVersionFileName);
            yield return appVersionRequest;
            var streamingAppVersion = appVersionRequest.text;
            appVersionRequest.Dispose();

            var appVersionPath = AssetBundleUtility.GetPersistentDataPath(BuildUtils.AppVersionFileName);
            var persistentAppVersion = GameUtility.SafeReadAllText(appVersionPath);
            Logger.Log($"streamingAppVersion = {streamingAppVersion}, persistentAppVersion = {persistentAppVersion}");
            // 如果persistent目录版本比streamingAssets目录app版本低，说明是大版本覆盖安装，清理过时的缓存
            if (!string.IsNullOrEmpty(persistentAppVersion) &&
                BuildUtils.CheckIsNewVersion(persistentAppVersion, streamingAppVersion))
            {
                var path = AssetBundleUtility.GetPersistentDataPath();
                GameUtility.SafeDeleteDir(path);
            }

            GameUtility.SafeWriteAllText(appVersionPath, streamingAppVersion);
            ChannelManager.instance.appVersion = streamingAppVersion;
            yield break;
        }

        //初始渠道
        IEnumerator InitChannel()
        {
#if UNITY_EDITOR
            if (AssetBundleConfig.IsEditorMode)
            {
                yield break;
            }
#endif
            var channelNameRequest = AssetBundleManager.Instance.RequestAssetFileAsync(BuildUtils.ChannelNameFileName);
            yield return channelNameRequest;
            var channelName = channelNameRequest.text;
            channelNameRequest.Dispose();
            ChannelManager.instance.Init(channelName);
            Logger.Log($"channelName = {channelName}");
            yield break;
        }
    }
}