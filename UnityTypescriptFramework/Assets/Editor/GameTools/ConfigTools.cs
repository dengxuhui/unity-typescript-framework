using System;
using UnityEngine;
using UnityEditor;
using System.IO;
using System.Diagnostics;
using Debug = UnityEngine.Debug;

/// <summary>
/// modify by zfc @ 2018.11.16
/// 说明：此处xlsx生成lua 以及proto 生成lua配置工具
/// 如果生成失败 配置下protobuf环境 已经python环境 备注：python版本最好是2 以及安装读取excel库 xlrd
/// </summary>
public class ConfigTools : EditorWindow
{
    private static string xlsxFolder = string.Empty;
    private static string protoFolder = string.Empty;

    private bool xlsxGenLuaFinished = false;
    private bool protoGenLuaFinished = false;
    private static string PythonToolsDir;

    void OnEnable()
    {
        if (string.IsNullOrEmpty(PythonToolsDir))
        {
            PythonToolsDir = Path.GetDirectoryName(Application.dataPath) + "/ConfigData/tools/";
        }

        ReadPath();
    }

    [MenuItem("Tools/LuaConfig")]
    static void Init()
    {
        GetWindow(typeof(ConfigTools));
        ReadPath();
    }

    private void OnGUI()
    {
        GUILayout.Space(10);
        GUILayout.BeginHorizontal();
        GUILayout.Label("1.单文件导出：添加Excel文件全路径");
        GUILayout.EndHorizontal();

        GUILayout.BeginHorizontal();
        GUILayout.Label("2.全文件导出：路径指向tools上级目录（目前任意目录都会默认使用全文件导出）");
        GUILayout.EndHorizontal();

        GUILayout.BeginHorizontal();
        GUILayout.Label("xlsx path : ", EditorStyles.boldLabel, GUILayout.Width(80));
        xlsxFolder = GUILayout.TextField(xlsxFolder, GUILayout.Width(240));
        if (GUILayout.Button("文件夹", GUILayout.Width(60)))
        {
            SelectXlsxFolder("Folder");
        }

        if (GUILayout.Button("文件", GUILayout.Width(60)))
        {
            SelectXlsxFolder("File");
        }

        GUILayout.EndHorizontal();

        GUILayout.Space(10);
        GUILayout.BeginHorizontal();
        GUILayout.Label("proto path : ", EditorStyles.boldLabel, GUILayout.Width(80));
        protoFolder = GUILayout.TextField(protoFolder, GUILayout.Width(240));
        if (GUILayout.Button("...", GUILayout.Width(40)))
        {
            SelectProtoFolder();
        }

        GUILayout.EndHorizontal();

        GUILayout.Space(20);
        GUILayout.BeginHorizontal();
        GUILayout.Label("---------------------");
        if (GUILayout.Button("excel转lua", GUILayout.Width(160)))
        {
            XlsxGenLua("toconfigs.py");
        }
        GUILayout.Label("---------------------");
        GUILayout.EndHorizontal();

        GUILayout.BeginHorizontal();
        GUILayout.Label("---------------------");
        if (GUILayout.Button("excel转lua(排除地图)", GUILayout.Width(160)))
        {
            XlsxGenLua("toconfigs_no_map.py");
        }
        GUILayout.Label("---------------------");
        GUILayout.EndHorizontal();

        GUILayout.Space(20);
        GUILayout.BeginHorizontal();
        GUILayout.Label("---------------------");
        if (GUILayout.Button("验证配置", GUILayout.Width(100)))
        {
            FindConfigInvalidPrefab();
            FindConfigInvalidPng();
        }

        GUILayout.Label("---------------------");
        GUILayout.EndHorizontal();
    }

    private void XlsxGenLua(string pyName)
    {
        if (!CheckXlsxPath(xlsxFolder))
        {
            return;
        }

        Process p = new Process();
        p.StartInfo.FileName = @"python";
        string arg0 = PythonToolsDir + $"./{pyName}";
        string arg1 = xlsxFolder;
        p.StartInfo.Arguments = arg0 + " " + arg1;
        p.StartInfo.UseShellExecute = false;
        p.StartInfo.RedirectStandardOutput = true;
        p.StartInfo.RedirectStandardInput = true;
        p.StartInfo.RedirectStandardError = true;
        p.StartInfo.CreateNoWindow = true;
        p.StartInfo.WorkingDirectory = PythonToolsDir;
        p.Start();
        p.BeginOutputReadLine();
        p.BeginErrorReadLine();
        p.OutputDataReceived += new DataReceivedEventHandler((object sender, DataReceivedEventArgs e) =>
        {
            if (!string.IsNullOrEmpty(e.Data))
            {
                UnityEngine.Debug.Log(e.Data);
                if (e.Data.Contains("SUCCEEDED"))
                {
                    Process pr = sender as Process;
                    if (pr != null)
                    {
                        pr.Close();
                    }

                    xlsxGenLuaFinished = true;
                }
            }
        });
        p.ErrorDataReceived += new DataReceivedEventHandler((object sender, DataReceivedEventArgs e) =>
        {
            if (!string.IsNullOrEmpty(e.Data))
            {
                UnityEngine.Debug.LogError(e.Data);
            }
        });
    }

    private void ProtoGenLua()
    {
        if (!CheckProtoPath(protoFolder))
        {
            return;
        }

        Process p = new Process();
        p.StartInfo.FileName = protoFolder + "/make_proto.bat";
        p.StartInfo.Arguments = "";
        p.StartInfo.UseShellExecute = false;
        p.StartInfo.RedirectStandardOutput = true;
        p.StartInfo.RedirectStandardInput = true;
        p.StartInfo.RedirectStandardError = true;
        p.StartInfo.CreateNoWindow = true;
        p.StartInfo.WorkingDirectory = protoFolder;
        p.Start();
        p.BeginOutputReadLine();
        p.OutputDataReceived += new DataReceivedEventHandler((object sender, DataReceivedEventArgs e) =>
        {
            if (!string.IsNullOrEmpty(e.Data))
            {
                UnityEngine.Debug.Log(e.Data);
                if (e.Data.Contains("DONE"))
                {
                    Process pr = sender as Process;
                    if (pr != null)
                    {
                        pr.Close();
                    }

                    protoGenLuaFinished = true;
                }
            }
        });
    }

    void Update()
    {
        if (protoGenLuaFinished)
        {
            protoGenLuaFinished = false;
            AssetDatabase.Refresh();
            EditorUtility.DisplayDialog("Succee", "Proto gen lua finished!", "Conform");
        }

        if (xlsxGenLuaFinished)
        {
            xlsxGenLuaFinished = false;

            // copy files
            string destPath = Application.dataPath + "/LuaScripts/Config/Data";
            if (!Directory.Exists(destPath))
            {
                // Directory.Delete(destPath, true);
                Directory.CreateDirectory(destPath);
            }

            string[] luaFiles = Directory.GetFiles(PythonToolsDir + "/sconfig");
            foreach (var oneFile in luaFiles)
            {
                string destFileName = Path.Combine(destPath, Path.GetFileName(oneFile));
                // UnityEngine.Debug.Log("Copy : " + destFileName);
                File.Copy(oneFile, destFileName, true);
            }

            AssetDatabase.Refresh();
            EditorUtility.DisplayDialog("Succee", "Xlsx gen lua finished!", "Conform");
        }
    }

    private bool CheckXlsxPath(string xlsxPath)
    {
        if (string.IsNullOrEmpty(xlsxPath))
        {
            return false;
        }

        if (!File.Exists(xlsxPath) && !Directory.Exists(xlsxPath))
        {
            EditorUtility.DisplayDialog("Error", "Err path :not exist the path", "Conform");
            //不是目录 也不存在
            return false;
        }

        if (!File.Exists(PythonToolsDir + "/client_batch_csv.py"))
        {
            EditorUtility.DisplayDialog("Error", $"Err path :\nNo find {PythonToolsDir}/client_batch_csv.py", "Conform");
            return false;
        }

        return true;
    }

    private bool CheckProtoPath(string protoPath)
    {
        if (string.IsNullOrEmpty(protoPath))
        {
            return false;
        }

        if (!File.Exists(protoPath + "/make_proto.bat"))
        {
            EditorUtility.DisplayDialog("Error", "Err path :\nNo find ./make_proto.bat", "Conform");
            return false;
        }

        return true;
    }

    private void SelectXlsxFolder(string type)
    {
        string selXlsxPath = "";
        if (type == "Folder")
        {
            selXlsxPath = EditorUtility.OpenFolderPanel("Select xlsx folder", "", "");
        }
        else if (type == "File")
        {
            selXlsxPath =
                EditorUtility.OpenFilePanelWithFilters("Select xlsx file", xlsxFolder,
                    new string[] { "xlsx", "xlsx" });
        }

        if (!CheckXlsxPath(selXlsxPath))
        {
            return;
        }

        xlsxFolder = selXlsxPath;
        SavePath();
    }

    private void SelectProtoFolder()
    {
        var selProtoPath = EditorUtility.OpenFolderPanel("Select proto folder", "", "");
        if (!CheckProtoPath(selProtoPath))
        {
            return;
        }

        protoFolder = selProtoPath;
        SavePath();
    }

    static private void SavePath()
    {
        EditorPrefs.SetString("xlsxFolder", xlsxFolder);
        EditorPrefs.SetString("protoFolder", protoFolder);
    }

    static private void ReadPath()
    {
        xlsxFolder = EditorPrefs.GetString("xlsxFolder");
        protoFolder = EditorPrefs.GetString("protoFolder");
    }

    /// <summary>
    /// 查找资源错误
    /// </summary>
    public static void FindConfigInvalidPrefab()
    {
        string strUI = Application.dataPath + "/AssetsPackage";
        var allAssetPaths = Directory.GetFiles(strUI, "*.prefab", SearchOption.AllDirectories);
        for (int i = 0; i < allAssetPaths.Length; i++)
        {
            allAssetPaths[i] = allAssetPaths[i].Remove(0, strUI.Length + 1);
            allAssetPaths[i] = allAssetPaths[i].Replace("\\", "/");
        }

        string dataPath = Application.dataPath + "/LuaScripts/Config/Data";
        var dataFiles = Directory.GetFiles(dataPath, "*.lua", SearchOption.AllDirectories);
        int errCount = 0;
        foreach (var fileName in dataFiles)
        {
            var lines = File.ReadLines(fileName);
            foreach (var line in lines)
            {
                if (line.IndexOf(".prefab", StringComparison.Ordinal) < 0)
                {
                    continue;
                }

                var configs = line.Split('=');
                var path = configs[1].Remove(0, 2);    // 去掉空格
                path = path.Remove(path.Length - 2); // 去掉引号和逗号

                var exist = false;
                for (int i = 0; i < allAssetPaths.Length; i++)
                {
                    if (allAssetPaths[i] == path)
                    {
                        exist = true;
                        break;
                    }
                }

                if (!exist)
                {
                    errCount++;
                    Debug.LogError($"资源未找到:文件 {fileName} 资源 {path}");
                }
            }
        }

        string msg = "验证结束: 错误数 " + errCount;
        EditorUtility.DisplayDialog("验证配置资源", msg, "OK");
    }

    public static void FindConfigInvalidPng()
    {
        string strUI = Application.dataPath + "/AssetsPackage/UI/Atlas";
        var allAssetPaths = Directory.GetFiles(strUI, "*.png", SearchOption.AllDirectories);
        for (int i = 0; i < allAssetPaths.Length; i++)
        {
            allAssetPaths[i] = allAssetPaths[i].Remove(0, strUI.Length + 1);
        }

        string dataPath = Application.dataPath + "/LuaScripts/Config/Data";
        var dataFiles = Directory.GetFiles(dataPath, "*.lua", SearchOption.AllDirectories);
        int errCount = 0;
        foreach (var fileName in dataFiles)
        {
            var lines = File.ReadLines(fileName);
            foreach (var line in lines)
            {
                if (line.IndexOf(".png", StringComparison.Ordinal) < 0)
                {
                    continue;
                }

                var configs = line.Split('=');
                var path = configs[1].Remove(0, 2);    // 去掉空格
                path = path.Remove(path.Length - 2); // 去掉引号和逗号

                var exist = false;
                for (int i = 0; i < allAssetPaths.Length; i++)
                {
                    if (allAssetPaths[i].IndexOf(path) >= 0)
                    {
                        exist = true;
                        break;
                    }
                }

                if (!exist)
                {
                    errCount++;
                    Debug.LogError($"资源未找到:文件 {fileName} 资源 {path}");
                }
            }
        }

        string msg = "验证png结束: 错误数 " + errCount;
        EditorUtility.DisplayDialog("验证png配置资源", msg, "OK");
    }
}