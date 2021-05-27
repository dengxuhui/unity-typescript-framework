/// <summary>
/// 编译设置
/// </summary>
public class BuildSetting
{
    // 版本号
    public string Version = "";
    // 编译版本号
    public string BuildVersion = "";
    // 资源版本号
    public string ResVersion = "";
    // 密钥路径名字
    public string KeystoreName = "";
    // 密钥密码
    public string KeystorePass = "";
    // alias名字
    public string KeyaliasName = "";
    // alias密码
    public string KeyaliasPass = "";
    // 是否打包aab包
    public bool BuildAppBundle = false;
    // 是否开发板
    public bool Development = false;
    // 编译库
    public int Architecture = 1;
}