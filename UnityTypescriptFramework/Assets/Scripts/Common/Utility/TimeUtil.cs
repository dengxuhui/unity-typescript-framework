using System;

public class TimeUtil
{
    /// <summary>
    /// 获取时间戳
    /// </summary>
    /// <returns></returns>
    public static int GetTimestamp()
    {
        var span = DateTime.UtcNow - new DateTime(1970, 1, 1, 0, 0, 0);
        return Convert.ToInt32(span.TotalSeconds);
    }

    /// <summary>
    /// 获取本地时间戳
    /// </summary>
    /// <returns></returns>
    public static int GetLocalTimestamp()
    {
        var span = DateTime.Now - new DateTime(1970, 1, 1, 0, 0, 0);
        return Convert.ToInt32(span.TotalSeconds);
    }

    /// <summary>
    /// 时间戳转本地
    /// </summary>
    /// <param name="timestamp"></param>
    /// <returns></returns>
    public static int TimestampToLocal(int timestamp)
    {
        var tz = DateTime.Now - DateTime.UtcNow;
        var offset = (int)tz.TotalSeconds;
        return timestamp + offset;
    }
}