using UnityEditor;
using UnityEngine;

namespace Excel2Json
{
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
        private static string xlsxFolder = string.Empty;

        #endregion

        private void OnGUI()
        {
            #region 转json

            GUILayout.BeginHorizontal();

            GUILayout.Label("选择xlsx文件或目录：");
            xlsxFolder = GUILayout.TextField(xlsxFolder);
            if (GUILayout.Button("文件夹"))
            {
            }

            if (GUILayout.Button("文件"))
            {
            }

            GUILayout.EndHorizontal();

            #endregion

            #region 转typescript接口

            #endregion
        }

        #endregion
    }
}