using System.Collections.Generic;
using System.Data;
using System.IO;
using Excel;
using UnityEditor;
using UnityEngine;

namespace Excel2Json.func
{
    /// <summary>
    /// 导出工具
    /// </summary>
    public static class FuncExcel2Json
    {
        /**
         * 单路径导出
         */
        public static void Export(string path, bool exportInterface)
        {
            if (string.IsNullOrEmpty(path) || (!File.Exists(path) && !Directory.Exists(path)))
            {
                EditorUtility.DisplayDialog("error", $"path error ,not exist=>{path}", "OK");
                return;
            }
            Dictionary<string,DataSet> dataSetDic = new Dictionary<string, DataSet>();
            if (File.Exists(path) && Path.GetExtension(path) == ".xlsx")
            {
                CollectXlsx(path);
            }
        }

        private static void CollectXlsx(string path)
        {
            using (var stream = File.Open(path,FileMode.Open,FileAccess.Read))
            {
                var excelReader = ExcelReaderFactory.CreateOpenXmlReader(stream);
                if (!string.IsNullOrEmpty(excelReader.ExceptionMessage))
                {
                    Debug.LogError($"excel read fail,path=>{path}");
                    return;
                }

                var dataSet = excelReader.AsDataSet();
                var tableCount = dataSet.Tables.Count;
            }
        }
    }
}