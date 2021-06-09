using System.IO;
using MultiLanguage.Scripts.tool;
using UnityEditor;
using UnityEngine;

namespace MultiLanguage.Scripts.func
{
    /// <summary>
    /// 拷贝资源到运行时
    /// </summary>
    public static class FuncCopyAssets
    {
        public static void Start()
        {
            var rules = MultiLanguageAssetsManager.GetRules();
            var supports = rules.supports;
            var tDir = Path.GetDirectoryName(Application.dataPath);
            if (string.IsNullOrEmpty(tDir))
            {
                return;
            }

            EditorUtility.DisplayProgressBar("拷贝资源", "开始拷贝", 0.1f);

            tDir = Path.Combine(tDir, rules.runtimeAssetsDirectory);
            for (var i = 0; i < supports.Length; i++)
            {
                var support = supports[i];
                var abbr = string.IsNullOrEmpty(support.abbr) ? support.language.ToString() : support.abbr;
                var name = string.Format(MultiLanguageConfig.BuildLanguageFormat, abbr);
                var srcPath = Path.Combine(FileTool.GetFullPath(rules.buildDirectory), name);
                var targetPath = Path.Combine(tDir, name);
                
                EditorUtility.DisplayProgressBar("拷贝资源",$"{srcPath}",(0.9f * i + 0.1f));
                
                if (!File.Exists(srcPath))
                {
                    continue;
                }

                if (File.Exists(targetPath))
                {
                    File.Delete(targetPath);
                }
                FileTool.TryMakeDir(Path.GetDirectoryName(targetPath));
                File.Copy(srcPath,targetPath);
            }
            AssetDatabase.Refresh();
            EditorUtility.ClearProgressBar();
            EditorUtility.DisplayDialog("拷贝到运行时", "拷贝完成", "OK");
        }
    }
}