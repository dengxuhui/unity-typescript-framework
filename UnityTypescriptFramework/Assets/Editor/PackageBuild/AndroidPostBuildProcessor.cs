using UnityEditor.Android;
using System.IO;
using System;

public class AndroidPostBuildProcessor : IPostGenerateGradleAndroidProject
{
    public int callbackOrder
    {
        get
        {
            return 999;
        }
    }


    void IPostGenerateGradleAndroidProject.OnPostGenerateGradleAndroidProject(string path)
    {
        // 解决Topon展示广告过程中按home键退到后台，再点击应用logo回来，广告不见了或者没有回调
        string androidManifestFile = path + "/src/main/AndroidManifest.xml";
        if (File.Exists(androidManifestFile))
        {
            StreamReader reader = File.OpenText(androidManifestFile);
            String content = reader.ReadToEnd();
            reader.Close();
            File.Delete(androidManifestFile);
            //将singleTask替换为standard。
            content = content.Replace("singleTask", "standard");
            StreamWriter androidManifestWriter = File.AppendText(androidManifestFile);
            androidManifestWriter.WriteLine(content);
            androidManifestWriter.Flush();
            androidManifestWriter.Close();
        }
        
        string gradlePropertiesFile = path + "/gradle.properties";
        if (File.Exists(gradlePropertiesFile))
        {
            File.Delete(gradlePropertiesFile);
        }
        StreamWriter writer = File.AppendText(gradlePropertiesFile);
        writer.WriteLine("android.overridePathCheck=true");
        writer.WriteLine("org.gradle.jvmargs='-Dfile.encoding=UTF-8'");
        writer.Flush();
        writer.Close();
    }
}