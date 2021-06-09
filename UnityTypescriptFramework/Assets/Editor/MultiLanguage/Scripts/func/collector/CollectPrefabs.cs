using System;
using System.Collections.Generic;
using System.IO;
using MultiLanguage.Scripts.tool;
using TMPro;
using UnityEditor;
using UnityEngine;

namespace MultiLanguage.Scripts.func.collector
{
    /// <summary>
    /// prefab收集器
    /// </summary>
    public static class CollectPrefabs
    {
        /// <summary>
        /// 搜集prefab中需要本地化的字段
        /// </summary>
        /// <param name="progressCallBack"></param>
        /// <returns></returns>
        public static Dictionary<string, string> Collect(Action<float, string> progressCallBack = null)
        {
            var rules = MultiLanguageAssetsManager.GetRules();
            var directory = Path.GetDirectoryName(Application.dataPath);
            if (string.IsNullOrEmpty(directory) || string.IsNullOrEmpty(rules.prefabDirectory))
            {
                return null;
            }

            var prefabDir = Path.Combine(directory, rules.prefabDirectory);
            if (!Directory.Exists(prefabDir))
            {
                return null;
            }

            var uiStrDic = new Dictionary<string, string>();
            var uiFiles = FileTool.GetPrefabs(prefabDir);
            for (var i = 0; i < uiFiles.Length; i++)
            {
                var filePath = uiFiles[i];
                if (filePath == null) continue;
                var uiName = Path.GetFileNameWithoutExtension(filePath);
                filePath = filePath.Replace("\\", "/");
                var szBuildFileSrc = filePath.Replace(Application.dataPath, "Assets");
                var go = AssetDatabase.LoadAssetAtPath(szBuildFileSrc, typeof(object)) as GameObject;
                progressCallBack?.Invoke(0.6f, $"导出ui字符串中，检索:{uiName}...");

                if (go == null)
                {
                    Debug.LogErrorFormat("failed to load asset:{0}", szBuildFileSrc);
                    continue;
                }

                var tfs = go.GetComponentsInChildren<TMP_Text>(true);
                foreach (var t in tfs)
                {
                    if (t.name.Length > 2 &&
                        ((t.name.Substring(0, 2) == "m_") && (t.name.Substring(0, 3) != "m_z"))) continue;
                    var keyName = go.name + "_" + t.name;
                    if (string.IsNullOrEmpty(t.text)) continue;
                    t.text = t.text.Trim('\n', '\r');
                    if (!uiStrDic.ContainsKey(keyName))
                    {
                        uiStrDic.Add(keyName, t.text);
                        Debug.LogFormat("-> 搜集 {0} = {1}", keyName, t.text);
                    }
                    else
                    {
                        Debug.LogWarningFormat("-> 字符串名冲突 key = {0} , string = {1}", keyName, t.text);
                    }
                }
            }

            return uiStrDic;
        }

        /// <summary>
        /// 更新原始文件
        /// </summary>
        /// <param name="progressCallBack"></param>
        public static void UpdateRawFile(Action<float, string> progressCallBack = null)
        {
            var uiStrDic = CollectPrefabs.Collect(progressCallBack);
            if (uiStrDic == null || uiStrDic.Count <= 0)
            {
                return;
            }

            var rules = MultiLanguageAssetsManager.GetRules();
            var fullRawDir = FileTool.GetFullPath(rules.rawDirectory);

            var savePath = Path.Combine(fullRawDir, MultiLanguageConfig.CsvNameRawUi);
            var table = new CsvTable();
            var basicSupport = rules.supports[rules.basicSupportIndex];
            foreach (var kv in uiStrDic)
            {
                var field = new CsvFieldInfo {Name = kv.Key};
                field.SetValue(basicSupport.language, kv.Value);
                table.AddField(field);
            }

            CsvOperater.WriteSingleFile(table, savePath);
        }
    }
}