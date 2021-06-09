using System;
using System.Collections.Generic;
using System.IO;
using MultiLanguage.Scripts.tool;
using UnityEditor;

namespace MultiLanguage.Scripts.func.builder
{
    /// <summary>
    /// 翻译需求构建器
    /// 通过using与translated表差量导出翻译需求表，得出的翻译需求表减去已经存在的translating表就是新的翻译需求表
    /// 
    /// </summary>
    public static class TranslationNeedsBuilder
    {
        /// <summary>
        /// 构建翻译需求
        /// 1.删除存在于翻译需求表中已经翻译的字段
        /// 2.筛选出还没翻译的字段并且不存在于任何翻译需求表，写新的翻译需求表
        /// </summary>
        /// <param name="usingTbl"></param>
        /// <param name="translatedTbl"></param>
        /// <param name="progressCallBack"></param>
        public static void Build(CsvTable usingTbl = null, CsvTable translatedTbl = null,
            Action<float, string> progressCallBack = null)
        {
            var rules = MultiLanguageAssetsManager.GetRules();
            if (usingTbl == null)
            {
                var usingPath = Path.Combine(FileTool.GetFullPath(rules.summaryDirectory), MultiLanguageConfig.CsvNameSummaryUsing);
                usingTbl = CsvOperater.ReadSummaryFile(usingPath);
            }

            if (usingTbl == null || usingTbl.Count <= 0)
            {
                return;
            }

            if (translatedTbl == null)
            {
                var translatedPath = Path.Combine(FileTool.GetFullPath(rules.summaryDirectory),
                    MultiLanguageConfig.CsvNameSummaryTranslated);
                translatedTbl = CsvOperater.ReadSummaryFile(translatedPath);
            }

            var needs = new List<CsvFieldInfo>();

            var supports = rules.supports;
            var usingDic = usingTbl.ToDictionary();
            var translatedDic = translatedTbl.ToDictionary();

            var translatingDir = FileTool.GetFullPath(rules.translatingDirectory);
            var existNeedsFiles = Directory.GetFiles(translatingDir,
                string.Format(MultiLanguageConfig.CsvNameSummaryTranslating, "*"),
                SearchOption.AllDirectories);
            //1.找出翻译需求
            foreach (var kv in usingDic)
            {
                if (translatedDic.ContainsKey(kv.Key) && translatedDic[kv.Key].IsMatchSupports(supports,false))
                {
                    continue;
                }

                needs.Add(kv.Value);
            }

            //2.删除已翻译，删除重复翻译
            for (var i = 0; i < existNeedsFiles.Length; i++)
            {
                var csvTbl = CsvOperater.ReadSummaryFile(existNeedsFiles[i]);
                var csvDic = csvTbl.ToDictionary();
                for (var i1 = 0; i1 < csvTbl.Count; i1++)
                {
                    if (translatedDic.ContainsKey(csvTbl[i1].Name))
                    {
                        csvTbl.RemoveAt(i1);
                        i1--;
                    }
                    else if (!usingDic.ContainsKey(csvTbl[i1].Name))
                    {
                        csvTbl.RemoveAt(i1);
                        i1--;
                    }
                }

                for (var i1 = 0; i1 < needs.Count; i1++)
                {
                    if (csvDic.ContainsKey(needs[i1].Name))
                    {
                        needs.RemoveAt(i1);
                        i1--;
                    }
                }

                if (csvTbl.Count <= 0)
                {
                    if (File.Exists(existNeedsFiles[i]))
                    {
                        File.Delete(existNeedsFiles[i]);
                    }
                }
                else
                {
                    //回写翻译需求
                    CsvOperater.WriteSummaryFile(csvTbl, existNeedsFiles[i]);       
                }
            }

            //3.写新的翻译需求
            if (needs.Count > 0)
            {
                var version = rules.translateVersion;
                var writeFilePath = Path.Combine(FileTool.GetFullPath(rules.translatingDirectory), MultiLanguageConfig.CsvNameSummaryTranslating);
                writeFilePath = string.Format(writeFilePath, version);
                if (!File.Exists(writeFilePath))
                {
                    // needs = SortTool.SortCsvFieldList(needs);
                    var writeTable = new CsvTable();
                    for (var i = 0; i < needs.Count; i++)
                    {
                        writeTable.AddField(needs[i]);
                    }

                    CsvOperater.WriteSummaryFile(writeTable, writeFilePath);
                    rules.translateVersion++;
                    EditorUtility.SetDirty(rules);
                    AssetDatabase.SaveAssets();
                }
                else
                {
                    var content = $"翻译需求的version发生错误，已存在：{writeFilePath}文件，请检查，是否需要手动升级version";
                    EditorUtility.DisplayDialog("Version冲突，请检查", content, "OK");
                }
            }
        }
    }
}