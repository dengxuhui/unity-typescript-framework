using System;
using System.IO;
using UnityEditor;
using UnityEngine;
// ReSharper disable All

namespace MultiLanguage.Scripts.tool
{
    /// <summary>
    /// 文件操作工具
    /// </summary>
    public static class FileTool
    {
        /// <summary>
        /// 创建目录
        /// </summary>
        /// <param name="directory">全路径目录</param>
        public static void TryMakeDir(string directory)
        {
            try
            {
                var parent = Directory.GetParent(directory).FullName;
                if (!Directory.Exists(parent))
                {
                    TryMakeDir(parent);
                }

                if (Directory.Exists(directory))
                {
                    return;
                }

                Directory.CreateDirectory(directory);
            }
            catch (Exception)
            {
                EditorUtility.DisplayDialog("创建目录时出错", "创建目录时出错", "OK");
            }
        }

        /// <summary>
        /// 将原始文件key生成转换为总表key
        /// </summary>
        /// <param name="rawFileName"></param>
        /// <param name="rawKey"></param>
        /// <returns></returns>
        public static string FromRawKeyToSummaryKey(string rawFileName, string rawKey)
        {
            MultiLanguageConfig.FieldFormatDic.TryGetValue(rawFileName, out var format);
            if (string.IsNullOrEmpty(format))
            {
                return rawFileName + "_" + rawKey;
            }
            else
            {
                return string.Format(format, rawKey);
            }
        }
        
        /// <summary>
        /// 获取全路径
        /// </summary>
        /// <param name="path"></param>
        /// <returns></returns>
        public static string GetFullPath(string path)
        {
            return Path.Combine(Application.dataPath, path);
        }

        /// <summary>
        /// 获取目录下所有csv文件
        /// </summary>
        /// <param name="rootDirectory"></param>
        /// <returns></returns>
        public static string[] GetCSVs(string rootDirectory)
        {
            return Directory.GetFiles(rootDirectory, "*.csv", SearchOption.AllDirectories);
        }

        /// <summary>
        /// 获取所有ui prefab文件
        /// </summary>
        /// <param name="rootDirectory"></param>
        /// <returns></returns>
        public static string[] GetPrefabs(string rootDirectory)
        {
            return Directory.GetFiles(rootDirectory, "*.prefab", SearchOption.AllDirectories);
        }

        /// <summary>
        /// 获取所有配置文件集合
        /// </summary>
        /// <param name="rootDirectory"></param>
        /// <returns></returns>
        public static string[] GetXlsxs(string rootDirectory)
        {
            return Directory.GetFiles(rootDirectory, "*.xlsx", SearchOption.AllDirectories);
        }
    }
}