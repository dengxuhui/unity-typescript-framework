using UnityTs.Framework.Conf;

/// <summary>
/// C#全局配置
/// </summary>
public static class Config
{
#if UNITY_CLIENT || LOGGER_ON
    public static bool Debug = true;
#else
    public static bool Debug = false;
#endif

    public static JsDebugger JsDebugger = JsDebugger.None;
}