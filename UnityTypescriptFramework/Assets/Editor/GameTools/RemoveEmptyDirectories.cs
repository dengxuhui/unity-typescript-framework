using UnityEditor;
using System.Collections.Generic;
using System.IO;

/// <summary>
/// 删除空目录
/// </summary>
public static class RemoveEmptyDirectories
{
    const string title = "Remove Empty Directories";

    [MenuItem("Tools/" + title)]
    public static void CleanEmptyDirectories()
    {
        var di = new DirectoryInfo("Assets/");
        var dis = new List<DirectoryInfo>();

        DoRemoveEmptyDirectory(di, dis);

        if (dis.Count == 0)
        {
            EditorUtility.DisplayDialog(title, "No Empty Directory", "OK");
            return;
        }

        var sb = new System.Text.StringBuilder();
        for (int i = 0; i < dis.Count; ++i)
        {
            int index = i + 1;
            sb.AppendLine(index.ToString() + " " + dis[i].FullName);
        }

        if (EditorUtility.DisplayDialog(title, sb.ToString(), "OK", "Cancel"))
        {
            foreach (var target in dis)
            {
                if (File.Exists(target.FullName + ".meta"))
                    File.Delete(target.FullName + ".meta");

                target.Delete(true);
            }
            AssetDatabase.Refresh();
        }
    }

    public static bool DoRemoveEmptyDirectory(DirectoryInfo target, List<DirectoryInfo> dis)
    {
        bool hasDirOrFile = false;
        foreach (var di in target.GetDirectories())
        {
            bool result = DoRemoveEmptyDirectory(di, dis);
            if (result) hasDirOrFile = true;
        }

        foreach(var fi in target.GetFiles())
        {
            if (!fi.Name.StartsWith(".") && !fi.FullName.EndsWith(".meta"))
            {
                hasDirOrFile = true;
            }
        }

        if (hasDirOrFile == false)
        {
            if (dis.Contains(target) == false)
                dis.Add(target);
        }

        return hasDirOrFile;
    }
}