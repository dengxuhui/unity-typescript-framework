using System.IO;
using MultiLanguage.Scripts.func.builder;
using MultiLanguage.Scripts.func.checker;
using MultiLanguage.Scripts.func.collector;
using MultiLanguage.Scripts.tool;
using UnityEditor;
using UnityEngine;

namespace MultiLanguage.Scripts.func
{
    /// <summary>
    /// 导出翻译到csv文件
    /// </summary>
    public static class FuncBuild
    {
        public static void Start(bool exportTranslate, bool updateTmp, bool updateFromPrefab, bool updateFromXlsx)
        {
            Progress(0.1f,"检查资源");
            //执行检查
            Checker.DoCheck();
            Progress(0.2f,"更新原始Raw文件");
            if (updateFromPrefab)
            {
                CollectPrefabs.UpdateRawFile(Progress);
            }

            if (updateFromXlsx)
            {
                CollectXlsxs.UpdateRawFile(Progress);
            }

            CollectCustomCsv();

            Progress(0.5f,"更新Summary总表文件");
            var usingTbl = CollectRawFiles.CopyToSummaryUsingFile();
            //更新翻译需求表
            if (exportTranslate)
            {
                TranslationNeedsBuilder.Build(usingTbl, null, null);
                CollectDiscardField.Collect(usingTbl, null);
            }
            Progress(0.8f,"从Summary Using表Build文件");

            AllLanguageBuilder.Build(usingTbl);

            Progress(0.9f,"build完成，报错文件，更新TMP");
            //如果需要更新tmp
            if (updateTmp)
            {
                TMP_AssetTool.UpdateTMP_Asset(usingTbl, Progress);
            }

            //最后刷新一下资源
            AssetDatabase.Refresh();
            EditorUtility.ClearProgressBar();
            EditorUtility.DisplayDialog("完成", "一键导出完成", "OK");
        }

        private static void Progress(float progress, string info = "")
        {
            EditorUtility.DisplayProgressBar("Building Language", info, progress);
        }

        private static void CollectCustomCsv()
        {
            var rules = MultiLanguageAssetsManager.GetRules();
            var sDir = Path.GetDirectoryName(Application.dataPath);
            if (string.IsNullOrEmpty(sDir))
            {
                return;
            }

            var tDir = FileTool.GetFullPath(rules.rawDirectory);
            FileTool.TryMakeDir(tDir);
            //拷贝自定义csv
            for (var i = 0; i < rules.customCsvs.Length; i++)
            {
                var srcPath = rules.customCsvs[i];
                var extension = Path.GetExtension(srcPath);
                if (extension != ".csv")
                {
                    continue;
                }

                srcPath = Path.Combine(sDir, srcPath);
                if (!File.Exists(srcPath))
                {
                    continue;
                }

                var tarPath = Path.Combine(tDir, Path.GetFileName(srcPath));
                if (File.Exists(tarPath))
                {
                    File.Delete(tarPath);
                }
                File.Copy(srcPath,tarPath);
            }
        }
    }
}