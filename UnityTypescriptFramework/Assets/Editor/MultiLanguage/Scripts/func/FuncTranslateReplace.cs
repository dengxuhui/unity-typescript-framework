using System.IO;
using MultiLanguage.Scripts.func.builder;
using MultiLanguage.Scripts.tool;
using UnityEditor;
using UnityEngine;

namespace MultiLanguage.Scripts.func
{
    /// <summary>
    /// 更新翻译
    /// </summary>
    public static class FuncTranslateReplace
    {
        /// <summary>
        /// 开始更新翻译
        /// </summary>
        /// <param name="translateFilePath"></param>
        public static void Start(string translateFilePath)
        {
            if (string.IsNullOrEmpty(translateFilePath))
            {
                EditorUtility.DisplayDialog("文件出错", "翻译表路径传入为空，请选择文件后再点击导入翻译", "OK");
                return;
            }

            if (!File.Exists(translateFilePath))
            {
                EditorUtility.DisplayDialog("文件出错", $"翻译表文件不存在,Path:{translateFilePath}", "OK");
                return;
            }

            var extension = Path.GetExtension(translateFilePath);
            if (extension != ".csv")
            {
                EditorUtility.DisplayDialog("文件出错", "反馈翻译表只支持csv文件，请选择CSV文件", "OK");
                return;
            }
            //将反馈的文件写入已翻译文档中，如果已翻译文档中存在字段，覆盖。再将使用中的字段覆盖。Build语言分表,删除翻译中的字段
            var rules = MultiLanguageAssetsManager.GetRules();
            var fullTranslatedPath = Path.Combine(FileTool.GetFullPath(rules.summaryDirectory),
                MultiLanguageConfig.CsvNameSummaryTranslated);
            var fullUsingPath = Path.Combine(FileTool.GetFullPath(rules.summaryDirectory),
                MultiLanguageConfig.CsvNameSummaryUsing);
            //反馈table
            var feedbackTbl = CsvOperater.ReadSummaryFile(translateFilePath);
            //转换为dic来查询，写的时候还是用tal写 CsvTable引用类型

            //已翻译table
            var translatedTbl = CsvOperater.ReadSummaryFile(fullTranslatedPath);
            var translatedDic = translatedTbl.ToDictionary();
            //using table
            var usingTbl = CsvOperater.ReadSummaryFile(fullUsingPath);
            var usingDic = usingTbl.ToDictionary();
            //获取所有翻译中的文件，删除其中已经翻译的字段
            for (var i = 0; i < feedbackTbl.Count; i++)
            {
                var feedbackField = feedbackTbl[i];
                usingDic.TryGetValue(feedbackField.Name, out var usingField);
                if (usingField == null)
                {
                    Debug.LogWarning(
                        $"feedback field can not find in using summary file,field name is:{feedbackField.Name}");
                    continue;
                }

                translatedDic.TryGetValue(feedbackField.Name, out var translatedField);
                if (translatedField == null)
                {
                    translatedField = new CsvFieldInfo {Name = feedbackField.Name};
                    translatedTbl.AddField(translatedField);
                    translatedDic.Add(feedbackField.Name, translatedField);
                }

                feedbackField.Walk((lang, content) =>
                {
                    if (string.IsNullOrEmpty(content))
                    {
                        return;
                    }

                    translatedField.SetValue(lang, content);
                    usingField.SetValue(lang, content);
                });
            }

            CsvOperater.WriteSummaryFile(usingTbl, fullUsingPath);
            CsvOperater.WriteSummaryFile(translatedTbl, fullTranslatedPath);

            //构建新的翻译需求表
            TranslationNeedsBuilder.Build(usingTbl, translatedTbl);

            //导出使用表
            AllLanguageBuilder.Build(usingTbl);
            
            AssetDatabase.Refresh();
            EditorUtility.DisplayDialog("更新翻译", "更新完成", "OK");
        }
    }
}