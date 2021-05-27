using UnityEngine;
using System;
using System.Collections.Generic;

/// <summary>
/// 设备工具
/// </summary>

public class DeviceUtil
{
    /// <summary>
    /// 安卓震动时间定义
    /// </summary>
    /// <value></value>
    public static Dictionary<int, int> AndroidVibrateTimes =
        new Dictionary<int, int> { { 1, 50 }, { 2, 100 }, { 3, 100 } };
    /// <summary>
    /// 获取安卓版本号
    /// </summary>
    /// <returns></returns>
    public static int GetAndroidVersion()
    {
        try
        {
#if (!UNITY_EDITOR && UNITY_ANDROID)
            using (var version = new AndroidJavaClass("android.os.Build$VERSION"))
            {
                return version.GetStatic<int>("SDK_INT");
            }
#endif
        }
        catch (Exception e)
        {
            CS.Logger.Log("GetAndroidVersion error {0}", e.Message);
        }

        return 0;
    }
}
