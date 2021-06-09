using System.Collections.Generic;

namespace MultiLanguage.Scripts
{
    /// <summary>
    /// 多语言工具静态配置
    /// </summary>
    public static class MultiLanguageConfig
    {
        /// <summary>
        /// 默认的翻译表文件夹路径
        /// </summary>
        public const string TranslateFolderPrefsKey = "TranslateFBPrefsKey";

        /// <summary>
        /// 与text mesh pro存储的设置对齐，导出asset先复写，再调用window
        /// </summary>
        public const string TMP_AssetCreationPrefsKey =
            "TextMeshPro.FontAssetCreator.RecentFontAssetCreationSettings.Container";

        #region 导出文件相关设置

        /// <summary>
        /// 当前使用中的语言总档
        /// </summary>
        public const string CsvNameSummaryUsing = "Using@Summary.csv";

        /// <summary>
        /// 已翻译的语言总档
        /// </summary>
        public const string CsvNameSummaryTranslated = "Translated@Summary.csv";

        /// <summary>
        /// 被丢弃字段缓存
        /// </summary>
        public const string CsvNameDiscardCache = "DiscardCache@Summary.csv";

        /// <summary>
        /// 翻译需求表
        /// </summary>
        public const string CsvNameSummaryTranslating = "翻译需求_Version@{0}.csv";

        /// <summary>
        /// 生成多语言文件名格式
        /// </summary>
        public const string BuildLanguageFormat = "AllLanguage{0}.csv";

        /// <summary>
        /// ui csv源文件
        /// </summary>
        public const string CsvNameRawUi = "UILanguage.csv";

        /// <summary>
        /// xlsx 配置表源文件
        /// </summary>
        public const string CsvNameRawConfig = "AllConfLanguage.csv";

        /// <summary>
        /// 字体名
        /// </summary>
        public static readonly Dictionary<TMP_Font, string> SdfCharFileNameDic = new Dictionary<TMP_Font, string>()
        {
            {
                TMP_Font.Common, "sdf_common"
            },
            {
                TMP_Font.Thai, "sdf_thai"
            }
        };

        /// <summary>
        /// sdf字符集扩展名
        /// </summary>
        public static readonly string SdfCharFileExtension = ".txt";

        /// <summary>
        /// sdf字符集资源扩展名
        /// </summary>
        public static readonly string SdfAssetFileExtension = ".asset";

        #endregion

        #region 前后缀设置

        /// <summary>
        /// 字段格式化字符串，主要用于兼用老版本的多语言导出工具
        /// </summary>
        public static readonly Dictionary<string, string> FieldFormatDic = new Dictionary<string, string>()
        {
            {
                "AllConfLanguage", "AllConfLanguage_mKeyValue_{0}"
            },
            {
                "ShowMessage", "ShowMessage_mMessage_{0}"
            },
            {
                "UILanguage", "UILanguage_mKeyValue_{0}"
            }
        };

        /// <summary>
        /// 历史遗留问题 创建一个黑名单来排除原始文件中出现这几个key值直接删除
        /// </summary>
        public static readonly List<string> BlackRawKey = new List<string>()
        {
            "Key Name", "KeyName", "string"
        };

        /// <summary>
        /// 配置档中的多语言key值
        /// </summary>
        public const string XlsxMultiLanguageKey = "lang";
        /// <summary>
        /// 配置档中的多语言list key值
        /// </summary>
        public const string XlsxMultiLanguageKeyList = "lang_list";
        #endregion
    }
}