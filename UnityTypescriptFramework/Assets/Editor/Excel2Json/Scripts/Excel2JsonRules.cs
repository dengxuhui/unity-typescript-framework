using UnityEditor;
using UnityEngine;

namespace Excel2Json
{
    /// <summary>
    /// excel转json配置文件
    /// </summary>
    public class Excel2JsonRules : ScriptableObject
    {
        [Tooltip("输出json路径")] public string outputJsonPath = "";
        [Tooltip("输出接口路径")] public string outputInterfaceDir = "";
    }

    [CustomEditor(typeof(Excel2JsonRules))]
    public class Excel2JsonRulesEditor : Editor
    {
        public override void OnInspectorGUI()
        {
            base.OnInspectorGUI();
            if (GUILayout.Button("保存") && GUI.changed)
            {
                AssetDatabase.SaveAssets();
            }
        }
    }
}