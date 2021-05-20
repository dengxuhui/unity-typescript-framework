namespace UnityTs.Framework.Conf
{
    /// <summary>
    /// 全局配置
    /// </summary>
    public static class Config
    {
        /// <summary>
        /// 是否开启调试模式
        /// </summary>
#if UNITY_EDITOR
        public static readonly bool Debug = true;
#else
        public static readonly bool Debug = false;
#endif
        /// <summary>
        /// 调试模式
        /// </summary>
        public static JsDebugger JsDebugger = JsDebugger.None;
    }

    /// <summary>
    /// js调试器模式
    /// </summary>
    public enum JsDebugger
    {
        /// <summary>
        /// 没有调试
        /// </summary>
        None,

        /// <summary>
        /// 阻塞模式
        /// </summary>
        Block,

        /// <summary>
        /// 异步模式
        /// </summary>
        Async,
    }
}