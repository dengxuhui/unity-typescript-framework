using UnityEngine;

/// <summary>
/// 路径配置
/// </summary>
public class URLSetting
{
    // 测试模式存的key值
    public static string TEST_MODE_KEY
    {
        get
        {
            return "TestMode";
        }
    }
    public static string START_UP_URL
    {
        get 
        {if (PlayerPrefs.GetInt(TEST_MODE_KEY, 0) > 0)
            {
                return "https://cdn-origin-1256071769.cos.ap-chengdu.myqcloud.com/eden/test";
            }
            else
            {
                return "https://cdn-origin-1256071769.cos.ap-chengdu.myqcloud.com/eden/release";
            }
        }
    }

    public static string SERVER_RESOURCE_URL
    {
        get;
        set;
    }

    public static string APP_DOWNLOAD_URL
    {
        get;
        set;
    }

    public static string LOGIN_URL
    {
        get;
        set;
    }

    public static string REPORT_ERROR_URL
    {
        get;
        set;
    }

    public static string SERVER_LIST_URL
    {
        get;
        set;
    }

    public static string NOTICE_URL
    {
        get;
        set;
    }
}
