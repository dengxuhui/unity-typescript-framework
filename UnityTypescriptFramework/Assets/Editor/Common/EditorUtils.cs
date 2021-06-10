using UnityEngine;

public static class EditorUtils
{
    public static void ExplorerFolder(string folder)
    {
        folder = $"\"{folder}\"";
        switch (Application.platform)
        {
            case RuntimePlatform.WindowsEditor:
                System.Diagnostics.Process.Start("Explorer.exe", folder.Replace('/', '\\'));
                break;
            case RuntimePlatform.OSXEditor:
                System.Diagnostics.Process.Start("open", folder);
                break;
            default:
                Debug.LogError($"Not support open folder on '{Application.platform.ToString()}' platform.");
                break;
        }
    }

}
