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
            var puertsDir = Path.Combine(Application.dataPath, "AssetsPackage/Js");
            var jsPath = Path.Combine(puertsDir, filepath);

            var txt = File.ReadAllText(jsPath);
            debugpath = jsPath.Replace("/", "\\");

            return txt;
            
            
// #if UNITY_EDITOR
//             var puertsDir = Path.Combine(Application.dataPath, "AssetsPackage/Js");
//             var jsPath = Path.Combine(puertsDir, filepath);
//
//             var txt = File.ReadAllText(jsPath);
//             debugpath = jsPath.Replace("/", "\\");
//
//             return txt;
// #else
//         debugpath = "";
//         var jscache = JsManager.Instance.jscache;
//         string jsName = filepath.Replace("puerts/", "");
//
//         string txt;
//         jscache.TryGetValue(jsName, out txt);
//
//         if (txt == null) txt = "";
//         return txt;
// #endif
        }
    }
}