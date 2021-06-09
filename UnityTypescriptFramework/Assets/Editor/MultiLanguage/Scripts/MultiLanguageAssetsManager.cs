using UnityEditor;
using UnityEngine;

//
// author:Aer
// https://github.com/dengxuhui/MultiLanguage

namespace MultiLanguage.Scripts
{
    /// <summary>
    /// 多语言资源管理器
    /// </summary>
    public static class MultiLanguageAssetsManager
    {
        /// <summary>
        /// 多语言规则
        /// </summary>
        private static readonly MultiLanguageRules Rules;
        
        static MultiLanguageAssetsManager()
        {
            //初始化检验目录
            Rules = GetAsset<MultiLanguageRules>("Assets/Editor/MultiLanguage/MultiLangRules.asset");
        }

        internal static MultiLanguageRules GetRules()
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