using System.IO;
using Puerts;
using UnityEngine;

namespace UnityTs.Js
{
    /// <summary>
    /// js加载器
    /// </summary>
    public sealed class JsLoader : ILoader
    {
        private string root = "";

        public JsLoader()
        {
        }

        public JsLoader(string root)
        {
            this.root = root;
        }

        public bool FileExists(string filepath)
        {
            return true;
        }

        public string ReadFile(string filepath, out string debugpath)
        {
#if UNITY_EDITOR
            //这里bundle.js使用TsProj下的js文件
            var dir = string.Empty;
            if (filepath.Contains("bundle.js"))
            {
                dir = Path.Combine(new DirectoryInfo(Application.dataPath).Parent.FullName, "TsProj/libs/");
            }
            else
            {
                dir = Path.Combine(Application.dataPath, "AssetsPackage/Js");
            }

            var jsPath = Path.Combine(dir, filepath);
            var txt = File.ReadAllText(jsPath);
            debugpath = jsPath.Replace("/", "\\");

            return txt;
#else
        //TODO 正式环境加载JS的方式
#endif
        }
    }
}