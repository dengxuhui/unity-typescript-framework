using UnityEditor;
using UnityEngine;

namespace Excel2Json
{
    /// <summary>
    /// excel转json配置文件
    /// </summary>
    public class Excel2JsonRules : ScriptableObject
    {
        [Tooltip("输出路径")] public string outputPath = "";
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