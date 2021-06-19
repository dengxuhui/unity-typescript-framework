using System;
using System.IO;
using UnityEditor;
using UnityEngine;

namespace Excel2Json.tool
{
    /// <summary>
    /// 文件工具
    /// </summary>
    internal static class FileTool
    {
        /// <summary>
        /// 根据全路径创建目录
        /// </summary>
        /// <param name="fullDirectory">全路径目录</param>
        public static void TryMakeDir(string fullDirectory)
        {
            try
            {
                var parent = Directory.GetParent(fullDirectory).FullName;
                if (!Directory.Exists(parent))
                {
                    TryMakeDir(parent);
                }

                if (Directory.Exists(fullDirectory))
                {
                    return;
                }

                Directory.CreateDirectory(fullDirectory);
            }
            catch (Exception)
            {
                EditorUtility.DisplayDialog("创建目录时出错", "创建目录时出错", "OK");
            }
        }

        /// <summary>
        /// 获取全路径
        /// </summary>
        /// <param name="relativePath"></param>
        /// <param name="type"></param>
        /// <returns></returns>
        public static string GetFullPath(string relativePath,RelativeType type = RelativeType.Assets)
        {
            if (type == RelativeType.Assets)
            {
                return Path.Combine(Application.dataPath, relativePath);       
            }
            else if(type == RelativeType.Project)
            {
                var tDir = Path.GetDirectoryName(Application.dataPath);
                if (string.IsNullOrEmpty(tDir))
                {
                    Debug.LogError("error?????");
                }
                return Path.Combine(tDir, relativePath);   
            }
            else
            {
                Debug.LogError("relative type can not identify");
                return String.Empty;
            }
        }

        /// <summary>
        /// 转换斜杠
        /// </summary>
        /// <param name="path"></param>
        /// <returns></returns>
        public static string ConvertSlash(string path)
        {
            return path.Replace("\\", "/");
        }
    }

    /// <summary>
    /// 相对路径类型
    /// </summary>
    public enum RelativeType
    {
        /// <summary>
        /// 相对Unity默认Assets目录
        /// </summary>
        Assets,
        /// <summary>
        /// 相对于工程目录
        /// </summary>
        Project,
    }
}