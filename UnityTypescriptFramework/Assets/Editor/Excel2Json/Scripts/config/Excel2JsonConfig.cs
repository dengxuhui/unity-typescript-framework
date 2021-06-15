using System.Collections.Generic;

namespace Excel2Json
{
    /// <summary>
    /// 配置
    /// </summary>
    public static class Excel2JsonConfig
    {
        /// <summary>
        /// 支持后缀
        /// </summary>
        public static readonly List<string> SupportExtensions = new List<string>()
        {
            ".xlsx"
        };
    }
}