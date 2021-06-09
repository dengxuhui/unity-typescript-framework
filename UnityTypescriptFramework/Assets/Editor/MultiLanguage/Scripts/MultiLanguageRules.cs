using System;
using System.Collections.Generic;
using UnityEditor;
using UnityEngine;

// ReSharper disable All

namespace MultiLanguage.Scripts
{
    /// <summary>
    /// 多语言配置文件
    /// </summary>
    public class MultiLanguageRules : ScriptableObject
    {
        [Header("文件目录相关设置（相对Assets父级目录）")] [Tooltip("ui根目录")]
        public string prefabDirectory = "";

        [Tooltip("配置根目录")] public string xlsxDirectory = "";
        /// <summary>
        /// 自定义csv文件
        /// </summary>
        public string[] customCsvs = new string[0];

        /// <summary>
        ///运行时资源存储目录
        /// </summary>
        public string runtimeAssetsDirectory = "";

        /// <summary>
        /// 忽略数据
        /// </summary>
        public IgnoreData[] ignoreXlsxs = new IgnoreData[0];
        /// <summary>
        /// 默认字符配置
        /// </summary>
        public TMP_DefaultChar[] defaultChars = new TMP_DefaultChar[0];
        [Header("支持语言列表配置")] public SupportLanguage[] supports = new SupportLanguage[0];
        [Header("基础语言在Supports数组中索引")] public int basicSupportIndex = 0;
        #region 隐藏属性

        /// <summary>
        /// 当前翻译的版本号，用于回写文件时进行比对，高版本号可以冲掉低版本号的翻译
        /// </summary>
        [HideInInspector] public int translateVersion = 0;

        [HideInInspector] public string rawDirectory = "Editor/MultiLanguage/Assets/Raw/";
        [HideInInspector] public string buildDirectory = "Editor/MultiLanguage/Assets/Build/";
        /// <summary>
        /// 
        /// </summary>
        [HideInInspector] public string summaryDirectory = "Editor/MultiLanguage/Assets/Summary/";
        [HideInInspector] public string translatingDirectory = "Editor/MultiLanguage/Assets/Translating/";
        [HideInInspector] public string fontDirectory = "Editor/MultiLanguage/Assets/Font/";

        #endregion
    }

    [CustomEditor(typeof(MultiLanguageRules))]
    public class MultiLanguageRuleEditor : Editor
    {
        public override void OnInspectorGUI()
        {
            var t = (MultiLanguageRules) target;
            base.OnInspectorGUI();
            if (GUILayout.Button("保存"))
            {
                if (GUI.changed)
                {
                    AssetDatabase.SaveAssets();       
                }
            }
        }
    }
    /// <summary>
    /// 支持语言
    /// </summary>
    [Serializable]
    public class SupportLanguage
    {
        /// <summary>
        /// 语言类型
        /// </summary>
        [Tooltip("支持语言")] public Language language = Language.Chinese;

        /// <summary>
        /// 导出文件后缀
        /// </summary>
        [Tooltip("简写用于导出文件后缀,如果为空字符串就直接用语言名字为文件后缀")]
        public string abbr = "";

        /// <summary>
        /// 导出的font  xxx.asset
        /// </summary>
        [Tooltip("分类字体，新增字体需要定义宏，然后在Config中配置sdf字体文件名")]
        public TMP_Font tmpFont;
    }

    /// <summary>
    /// 文件忽略
    /// </summary>
    [Serializable]
    public class IgnoreData
    {
        /// <summary>
        /// 类型
        /// </summary>
        public IgnoreType ignoreType;

        /// <summary>
        /// 路径
        /// </summary>
        public string path;
    }

    /// <summary>
    /// 忽略类型
    /// </summary>
    public enum IgnoreType
    {
        /// <summary>
        /// 按目录忽略
        /// </summary>
        Directory,

        /// <summary>
        /// 按文件忽略
        /// </summary>
        File,
    }

    /// <summary>
    /// sdf字体导出文件
    /// </summary>
    public enum TMP_Font
    {
        /// <summary>
        /// 通用字体
        /// </summary>
        Common,

        /// <summary>
        /// 泰语
        /// </summary>
        Thai,
    }

    [Serializable]
    public class TMP_DefaultChar
    {
        /// <summary>
        /// 字体
        /// </summary>
        public TMP_Font Font;
        /// <summary>
        /// 路径名，与Assets同级目录，App.dataPath父级目录
        /// </summary>
        public string Path;
    }
}