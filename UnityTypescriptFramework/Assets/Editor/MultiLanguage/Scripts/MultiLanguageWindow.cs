using MultiLanguage.Scripts.func;
using UnityEditor;
using UnityEngine;

// ReSharper disable All

namespace MultiLanguage.Scripts
{
    /// <summary>
    /// 多语言控制面板
    /// author by Aer @2021.04.02
    /// </summary>
    public class MultiLanguageWindow : EditorWindow
    {
        //------------------功能模块标志位
        //功能导出
        private bool _funcBuild = false;

        //更新翻译
        private bool _funcTranslateReplace = false;

        //拷贝资源
        private bool _funcCopyAssets = false;
        //-------------------

        #region 翻译导入相关

        private string _translateFeedbackPath;

        #endregion

        /// <summary>
        /// 是否导出翻译表
        /// </summary>
        private bool _exportTranslate = false;

        /// <summary>
        /// 是否更新tmp字符
        /// </summary>
        private bool _updateTMP_Asset = false;

        /// <summary>
        /// 更新ui
        /// </summary>
        private bool _updateFromPrefab = true;

        /// <summary>
        /// 更新配置
        /// </summary>
        private bool _updateFromXlsx = true;

        /// <summary>
        /// 打开入口
        /// </summary>
        [MenuItem("Tools/MultiLanguage", false, 0)]
        static void Init()
        {
            var window = GetWindow(typeof(MultiLanguageWindow));
            window.titleContent = new GUIContent("MultiLanguage");
        }

        #region ui逻辑

        private void SelectTranslateFile()
        {
            _translateFeedbackPath = EditorUtility.OpenFilePanelWithFilters("选择翻译反馈总表（.csv文件）", null,
                new string[] {"csv", "csv"});
            EditorPrefs.SetString(MultiLanguageConfig.TranslateFolderPrefsKey, _translateFeedbackPath);
        }

        private void OnGUI()
        {
            //----------------------------------------------------------

            #region 导出本地化

            _funcBuild = EditorGUILayout.BeginToggleGroup("------------1.语言导出------------", _funcBuild);
            _updateFromPrefab = EditorGUILayout.ToggleLeft("是否更新Prefab源文件", _updateFromPrefab);
            _updateFromXlsx = EditorGUILayout.ToggleLeft("是否更新Xlsx源文件", _updateFromXlsx);
            //翻译需求
            _exportTranslate = EditorGUILayout.ToggleLeft("是否导出翻译需求表", _exportTranslate);
            //TMP字符更新
            _updateTMP_Asset = EditorGUILayout.ToggleLeft("是否更新TMP", _updateTMP_Asset);

            if (GUILayout.Button("一键导出并拷贝资源到Runtime"))
            {
                Debug.Log("start build language....");
                FuncBuild.Start(_exportTranslate, _updateTMP_Asset, _updateFromPrefab, _updateFromXlsx);
                FuncCopyAssets.Start();
                Debug.Log("complete build language....");
            }

            EditorGUILayout.EndToggleGroup();

            #endregion

            #region 翻译回写

            _funcTranslateReplace =
                EditorGUILayout.BeginToggleGroup("------------2.更新翻译------------", _funcTranslateReplace);
            EditorGUILayout.LabelField("说明：以翻译中的字段为准，包括基础语言也直接覆盖，回写完成会输出一个未翻译列表到指定目录下");
            //选择总表
            GUILayout.BeginHorizontal();
            GUILayout.Label("反馈的翻译总表路径：", GUILayout.MaxWidth(120));
            _translateFeedbackPath = GUILayout.TextField(_translateFeedbackPath);
            if (GUILayout.Button("文件", GUILayout.MaxWidth(60)))
            {
                Debug.Log("start select feedback file");
                SelectTranslateFile();
            }

            GUILayout.EndHorizontal();


            if (GUILayout.Button("更新翻译"))
            {
                Debug.Log("start update translate....");
                FuncTranslateReplace.Start(_translateFeedbackPath);
                Debug.Log("complete replace translate....");
            }

            EditorGUILayout.EndToggleGroup();

            #endregion

            #region 拷贝到AssetPackage目录下

            // _funcCopyAssets =
            //     EditorGUILayout.BeginToggleGroup("------------3.拷贝到运行时------------", _funcCopyAssets);
            // EditorGUILayout.LabelField("说明：每次导出或更新翻译后需要执行一次拷贝到AssetPackage下，这样运行时才能正确加载到资源");
            // if (GUILayout.Button("一键拷贝"))
            // {
            //     Debug.Log("start copy csv 2 assetpackage....");
            //     FuncCopyAssets.Start();
            //     Debug.Log("complete copy csv 2 assetpackage....");
            // }
            //
            // EditorGUILayout.EndToggleGroup();

            #endregion
        }

        #endregion
    }
}