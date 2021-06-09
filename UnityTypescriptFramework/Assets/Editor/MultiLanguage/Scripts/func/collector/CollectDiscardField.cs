using System;
using System.Collections.Generic;
using System.IO;
using MultiLanguage.Scripts.tool;

namespace MultiLanguage.Scripts.func.collector
{
    /// <summary>
    /// 搜集废弃字段
    /// </summary>
    public static class CollectDiscardField
    {
        /// <summary>
        /// 搜集废弃字段
        /// </summary>
        /// <param name="usingTbl"></param>
        /// <param name="progressCallBack"></param>
        public static void Collect(CsvTable usingTbl = null, Action<float, string> progressCallBack = null)
        {
            var rules = MultiLanguageAssetsManager.GetRules();
            if (usingTbl == null)
            {
                var usingPath = Path.Combine(FileTool.GetFullPath(rules.summaryDirectory), MultiLanguageConfig.CsvNameSummaryUsing);
                usingTbl = CsvOperater.ReadSummaryFile(usingPath);
            }

            var translatedPath = Path.Combine(FileTool.GetFullPath(rules.summaryDirectory),
                MultiLanguageConfig.CsvNameSummaryTranslated);
            var translatedTbl = CsvOperater.ReadSummaryFile(translatedPath);

            if (translatedTbl == null || translatedTbl.Count <= 0)
            {
                //没有废弃的字段
                return;
            }

            var discardList = new List<CsvFieldInfo>();
            var usingDic = usingTbl.ToDictionary();

            for (var i = 0; i < translatedTbl.Count; i++)
            {
                var field = translatedTbl[i];
                if (!usingDic.ContainsKey(field.Name))
                {
                    translatedTbl.RemoveAt(i);
                    i--;
                    discardList.Add(field);
                }
            }

            if (discardList.Count > 0)
            {
                CsvOperater.WriteSummaryFile(translatedTbl, translatedPath);
                var discardPath =
                    Path.Combine(FileTool.GetFullPath(rules.summaryDirectory), MultiLanguageConfig.CsvNameDiscardCache);
                var discardTbl = CsvOperater.ReadSummaryFile(discardPath);
                for (var i = 0; i < discardList.Count; i++)
                {
                    discardTbl.AddField(discardList[i]);
                }

                CsvOperater.WriteSummaryFile(discardTbl, discardPath);
            }
        }
    }
}