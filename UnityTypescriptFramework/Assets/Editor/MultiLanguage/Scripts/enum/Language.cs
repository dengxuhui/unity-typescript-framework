using System;
using System.Collections.Generic;

namespace MultiLanguage.Scripts
{
    /// <summary>
    /// 语言类型定义
    /// </summary>
    public enum Language
    {
        /// <summary>
        /// 中文
        /// </summary>
        Chinese,

        /// <summary>
        /// 中文繁体
        /// </summary>
        ChineseTraditional,

        /// <summary>
        /// 英语
        /// </summary>
        English,

        /// <summary>
        /// 俄语
        /// </summary>
        Russian,

        /// <summary>
        /// 日语
        /// </summary>
        Japan,

        /// <summary>
        /// 泰语
        /// </summary>
        Thai,

        /// <summary>
        /// 意大利语
        /// </summary>
        Italian,

        /// <summary>
        /// 土耳其语
        /// </summary>
        Turkish,

        /// <summary>
        /// 西班牙语
        /// </summary>
        Spanish,

        /// <summary>
        /// 法语
        /// </summary>
        French,

        /// <summary>
        /// 韩语
        /// </summary>
        Korean,

        /// <summary>
        /// 印度尼西亚
        /// </summary>
        Indonesian,

        /// <summary>
        /// 匈牙利
        /// </summary>
        Hugarian,

        /// <summary>
        /// 他加禄语
        /// </summary>
        Tagalog,

        /// <summary>
        /// 越南文
        /// </summary>
        Vietnamese,

        /// <summary>
        /// 马来语
        /// </summary>
        BahasaMelayu,

        /// <summary>
        /// 捷克文
        /// </summary>
        Czech,

        /// <summary>
        /// 罗马尼亚语
        /// </summary>
        Romanian,

        /// <summary>
        /// 阿拉伯
        /// </summary>
        Arabic,

        /// <summary>
        /// 缅甸
        /// </summary>
        Burmese,

        /// <summary>
        /// 印地语
        /// </summary>
        Hindi,

        /// <summary>
        /// 葡萄牙语
        /// </summary>
        POR,

        /// <summary>
        /// 德语
        /// </summary>
        German,

        /// <summary>
        /// 波兰语
        /// </summary>
        Polish,

        /// <summary>
        /// 高棉语
        /// </summary>
        Khmer,

        /// <summary>
        /// 荷兰语
        /// </summary>
        Dutch
    }

    /// <summary>
    /// csv中字段信息
    /// </summary>
    public class CsvFieldInfo
    {
        /// <summary>
        /// 键
        /// </summary>
        public string Name;

        /// <summary>
        /// 列，有多少语言就有多少列
        /// </summary>
        private readonly Dictionary<Language, string> _contents = new Dictionary<Language, string>();

        /// <summary>
        /// 添加字段
        /// </summary>
        /// <param name="language"></param>
        /// <param name="content"></param>
        public void SetValue(Language language, string content)
        {
            _contents[language] = content;
        }

        public void TryGetValue(Language language, out string content)
        {
            _contents.TryGetValue(language, out content);
        }

        public string GetValue(Language language)
        {
            return _contents[language];
        }

        public void Walk(Action<Language, string> action)
        {
            if (action == null)
            {
                return;
            }

            foreach (var kv in _contents)
            {
                action.Invoke(kv.Key, kv.Value);
            }
        }

        /// <summary>
        /// 当前语言数量
        /// </summary>
        /// <returns></returns>
        public int Count()
        {
            return _contents.Count;
        }

        /// <summary>
        /// 是否与当前支持语言列表匹配
        /// </summary>
        /// <param name="supports"></param>
        /// <param name="compareCount">是否比较Content数量</param>
        /// <returns></returns>
        public bool IsMatchSupports(SupportLanguage[] supports,bool compareCount)
        {
            if (compareCount && _contents.Count != supports.Length)
            {
                return false;
            }
            for (var i = 0; i < supports.Length; i++)
            {
                if (!_contents.ContainsKey(supports[i].language))
                {
                    return false;
                }
            }

            return true;
        }
    }
}