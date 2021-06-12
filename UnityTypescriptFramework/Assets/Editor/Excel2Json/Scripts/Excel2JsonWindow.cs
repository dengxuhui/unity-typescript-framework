using System.IO;
using Excel2Json.func;
using UnityEditor;
using UnityEngine;

namespace Excel2Json
{
    enum FileType
    {
        File,
        Directory,
    }

    /// <summary>
    /// excel转json unity中的操作界面
    /// </summary>
    public class Excel2JsonWindow : EditorWindow
    {
        [MenuItem("Tools/Excel2Json", false, 0)]
        static void Init()
        {
            var window = GetWindow(typeof(Excel2JsonWindow));
            window.titleContent = new GUIContent("Excel2Json");
        }

        #region ui逻辑

        #region 属性

        //xlsx路径
        private static string xlsxFolderOrPath = string.Empty;

        //生成接口
        private static bool _exportInterface = false;

        #endregion

        private void OnGUI()
        {
            #region 转json

            EditorGUILayout.LabelField("---------------1.excel转json工具---------------");
            EditorGUILayout.LabelField("说明：选择Excel目录或文件夹导出json文件，导出路径需要在Excel2JsonRules.asset中配置");
            GUILayout.BeginHorizontal();

            GUILayout.Label("选择xlsx文件或目录：", GUILayout.MaxWidth(120));
            xlsxFolderOrPath = GUILayout.TextField(xlsxFolderOrPath, GUILayout.MaxWidth(360));
            if (GUILayout.Button("文件夹", GUILayout.MaxWidth((80))))
            {
                SelectXlsxFolder(FileType.Directory);
            }

            if (GUILayout.Button("文件", GUILayout.MaxWidth(80)))
            {
                SelectXlsxFolder(FileType.File);
            }

            GUILayout.EndHorizontal();
            _exportInterface = EditorGUILayout.ToggleLeft("是否生成ts接口", _exportInterface);
            if (GUILayout.Button("excel转json"))
            {
                Debug.Log("Excel2Json:::start export json");
                FuncExcel2Json.Export(xlsxFolderOrPath, _exportInterface);
                Debug.Log("Excel2Json:::complete export json");
            }

            #endregion

            #region 转typescript接口

            #endregion
        }
        
        

        private void SelectXlsxFolder(FileType type)
        {
            string selectXlsxPath = string.Empty;
            if (type == FileType.File)
            {
                selectXlsxPath =
                    EditorUtility.OpenFilePanelWithFilters("Select xlsx file", xlsxFolderOrPath,
                        new[] {"xlsx", "xlsx"});
            }
            else if (type == FileType.Directory)
            {
                selectXlsxPath = EditorUtility.OpenFolderPanel("Select xlsx folder", "", "");
            }

            xlsxFolderOrPath = selectXlsxPath;
        }

        #endregion
    }
}