using System;
using System.IO;
using MultiLanguage.Scripts.tool;

namespace MultiLanguage.Scripts.func.builder
{
    /// <summary>
    /// 所有语言导出工具
    /// </summary>
    public static class AllLanguageBuilder
    {
        /// <summary>
        /// 导出所有语言
        /// </summary>
        /// <param name="summaryUsingTbl">使用中的总表</param>
        /// <param name="progressCallBack">进度回调</param>
        public static void Build(CsvTable summaryUsingTbl, Action<float, string> progressCallBack = null)
        {
            if (summaryUsingTbl == null || summaryUsingTbl.Count <= 0)
            {
                return;
            }

            var rules = MultiLanguageAssetsManager.GetRules();
            var fullBuildDir = FileTool.GetFullPath(rules.buildDirectory);

            var supports = rules.supports;
            for (var i = 0; i < supports.Length; i++)
            {
                var langTbl = new CsvTable();
                var support = supports[i];
                for (var i1 = 0; i1 < summaryUsingTbl.Count; i1++)
                {
                    var src = summaryUsingTbl[i1];
                    var field = new CsvFieldInfo
                    {
                        Name = src.Name
                    };
                    field.SetValue(support.language, src.GetValue(support.language));
                    langTbl.AddField(field);
                }

                var savePath = Path.Combine(fullBuildDir,
                    string.Format(MultiLanguageConfig.BuildLanguageFormat,
                        string.IsNullOrEmpty(support.abbr) ? support.language.ToString() : support.abbr));
                CsvOperater.WriteSingleFile(langTbl, savePath);
            }
        }
    }
}