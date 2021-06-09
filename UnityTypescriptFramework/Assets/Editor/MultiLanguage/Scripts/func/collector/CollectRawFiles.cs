using System.Collections.Generic;
using System.IO;
using MultiLanguage.Scripts.tool;

namespace MultiLanguage.Scripts.func.collector
{
    /// <summary>
    /// 原始raw文件字符收集器
    /// </summary>
    public static class CollectRawFiles
    {
        /// <summary>
        /// 收集
        /// </summary>
        /// <returns></returns>
        public static Dictionary<string, string> Collect()
        {
            var rawDic = new Dictionary<string, string>();
            var rules = MultiLanguageAssetsManager.GetRules();
            var dir = FileTool.GetFullPath(rules.rawDirectory);
            var baseSupport = rules.supports[rules.basicSupportIndex];
            var rawFiles = FileTool.GetCSVs(dir);
            for (var i = 0; i < rawFiles.Length; i++)
            {
                var tbl = CsvOperater.ReadSingleFile(rawFiles[i], baseSupport.language);
                var fileName = Path.GetFileNameWithoutExtension(rawFiles[i]);
                for (var i1 = 0; i1 < tbl.Count; i1++)
                {
                    var fieldInfo = tbl[i1];
                    var key = FileTool.FromRawKeyToSummaryKey(fileName, fieldInfo.Name);
                    if (!rawDic.ContainsKey(key))
                    {
                        rawDic.Add(key, fieldInfo.GetValue(baseSupport.language));
                    }
                }
            }

            return rawDic;
        }

        /// <summary>
        /// 将原始文件拷贝到使用中的总表文件
        /// </summary>
        /// <returns></returns>
        public static CsvTable CopyToSummaryUsingFile()
        {
            var rule = MultiLanguageAssetsManager.GetRules();
            var usingFilePath = Path.Combine(FileTool.GetFullPath(rule.summaryDirectory),
                MultiLanguageConfig.CsvNameSummaryUsing);
            var translatedFilePath = Path.Combine(FileTool.GetFullPath(rule.summaryDirectory),
                MultiLanguageConfig.CsvNameSummaryTranslated);
            var usingDic = CsvOperater.ReadSummaryFile(usingFilePath).ToDictionary();
            var translatedDic = CsvOperater.ReadSummaryFile(translatedFilePath).ToDictionary();
            var allRawFieldDic = Collect();
            var supports = rule.supports;
            var rTbl = new CsvTable();

            #region 先删除在Raw文件没有用到的字段
            var delete = new List<string>();
            foreach (var kv in usingDic)
            {
                if (allRawFieldDic.ContainsKey(kv.Key))
                {
                    continue;
                }
                delete.Add(kv.Key);
            }
            if (delete.Count > 0)
            {
                for (var i = 0; i < delete.Count; i++)
                {
                    usingDic.Remove(delete[i]);
                }
            }
            #endregion
            foreach (var kv in allRawFieldDic)
            {
                if (usingDic.ContainsKey(kv.Key) && translatedDic.ContainsKey(kv.Key))
                {
                    var usingField = usingDic[kv.Key];
                    if (usingField.IsMatchSupports(supports,true))
                    {
                        rTbl.AddField(usingField);
                    }
                    else
                    {
                        //添加了新的语言，只把新增语言替换为基础语言
                        var c = new CsvFieldInfo {Name = kv.Key};
                        for (int i = 0; i < supports.Length; i++)
                        {
                            usingField.TryGetValue(supports[i].language,out var v);
                            if (string.IsNullOrEmpty(v))
                            {
                                v = kv.Value;
                            }

                            c.SetValue(supports[i].language, v);
                        }

                        rTbl.AddField(c);
                    }
                }
                else
                {
                    //全新
                    var a = new CsvFieldInfo {Name = kv.Key};
                    for (var i = 0; i < supports.Length; i++)
                    {
                        a.SetValue(supports[i].language, kv.Value);
                    }
                    rTbl.AddField(a);
                }
            }
            CsvOperater.WriteSummaryFile(rTbl, usingFilePath);
            return rTbl;
        }
    }
}