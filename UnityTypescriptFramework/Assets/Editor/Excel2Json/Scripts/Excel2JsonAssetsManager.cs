using UnityEditor;
using UnityEngine;

namespace Excel2Json
{
    /// <summary>
    /// excel 转json资源管理器
    /// </summary>
    public static class Excel2JsonAssetsManager
    {
        /// <summary>
        /// 规则
        /// </summary>
        private static readonly Excel2JsonRules Rules;

        static Excel2JsonAssetsManager()
        {
            Rules = GetAsset<Excel2JsonRules>("Assets/Editor/Excel2Json/Excel2JsonRules.asset");
        }

        /// <summary>
        /// 获取规则
        /// </summary>
        /// <returns></returns>
        internal static Excel2JsonRules GetRules()
        {
            return Rules;
        }

        private static T GetAsset<T>(string path) where T : ScriptableObject
        {
            var asset = AssetDatabase.LoadAssetAtPath<T>(path);
            //没有就创建一个资源出来
            if (asset != null) return asset;
            asset = ScriptableObject.CreateInstance<T>();
            AssetDatabase.CreateAsset(asset, path);
            AssetDatabase.SaveAssets();

            return asset;
        }
    }
}