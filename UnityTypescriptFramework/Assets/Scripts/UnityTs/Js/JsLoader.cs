using System.IO;
using AssetBundles;
using Puerts;
using UnityEngine;

namespace CS
{
    /// <summary>
    /// js加载器
    /// </summary>
    public sealed class JsLoader : ILoader
    {
        private static readonly string JavaScriptFolder = "AssetsPackage/JS";

        public bool FileExists(string filepath)
        {
            return true;
        }

        public string ReadFile(string fileName, out string debugPath)
        {
            var jsPath = string.Empty;
#if UNITY_EDITOR
            if (AssetBundleConfig.IsEditorMode)
            {
                var dir = Path.Combine(Application.dataPath, JavaScriptFolder);
                jsPath = Path.Combine(dir, fileName);
                debugPath = jsPath.Replace("/", "\\");
                return GameUtility.SafeReadAllText(jsPath);
            }
#endif
            debugPath = string.Empty;
            jsPath = $"{JsManager.jsAssetbundleAssetName}/{fileName}";
            string assetbundleName = null;
            string assetName = null;
            bool status = AssetBundleManager.Instance.MapAssetPath(jsPath, out assetbundleName, out assetName);
            if (!status)
            {
                Logger.LogError("MapAssetPath failed : " + jsPath);
                return string.Empty;
            }

            var asset = AssetBundleManager.Instance.GetAssetCache(assetName) as TextAsset;
            var content = asset.text;
            AssetBundleManager.Instance.ClearAssetsCacheByName(assetName);
            return content;
        }
    }
}