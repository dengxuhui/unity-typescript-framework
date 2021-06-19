using System;
using System.Data;
using System.IO;
using Excel;
using UnityEditor;
using UnityEngine;

namespace Excel2Json
{
    /// <summary>
    /// 导出工具
    ///
    /// 导出规则：
    /// 1.可以导出指定目录或指定*.xlsx文件
    /// 2.excel文件只会导出第一个以#xxx#格式命名的table表，因此请确保每个excel文件只会有一个表是正在的配置数据，其余表均为说明类型的table
    /// 3.导出table命名格式
    ///     - 以#xx开头,:分割字段名及类型
    ///   支持的数据类型：
    ///     string
    ///     number
    ///     number_array
    ///     string_array
    ///     更多类型可以自定义
    /// </summary>
    public static class FuncExcel2Json
    {
        private static readonly string displayTitle = "excel2json";

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

            var progressInfo = "collect path:{0}";
            EditorUtility.DisplayProgressBar(displayTitle, "开始转换..", 0.1f);
            //以文件方式导出
            if (File.Exists(path) && Path.GetExtension(path) == ".xlsx")
            {
                EditorUtility.DisplayProgressBar(displayTitle, string.Format(progressInfo, path), 0.5f);
                CollectXlsx(path, exportInterface);
            }
            //以目录方式导出
            else if (Directory.Exists(path))
            {
                var xlsxFileArray = Directory.GetFiles(path, "*.xlsx", SearchOption.AllDirectories);
                var totalCount = xlsxFileArray.Length;
                for (var i = 0; i < xlsxFileArray.Length; i++)
                {
                    var xlsxPath = xlsxFileArray[i];
                    var progress = ((i + 1) / totalCount);
                    EditorUtility.DisplayProgressBar(displayTitle, string.Format(progressInfo, xlsxPath), progress);
                    CollectXlsx(xlsxPath, exportInterface);
                }
            }

            EditorUtility.ClearProgressBar();
        }

        /// <summary>
        /// 收集excel文件
        /// </summary>
        /// <param name="path"></param>
        /// <param name="exportInterface"></param>
        private static void CollectXlsx(string path, bool exportInterface)
        {
            using (var stream = File.Open(path, FileMode.Open, FileAccess.Read))
            {
                var excelReader = ExcelReaderFactory.CreateOpenXmlReader(stream);
                if (!string.IsNullOrEmpty(excelReader.ExceptionMessage))
                {
                    Debug.LogError($"excel read fail,path=>{path}");
                    return;
                }

                var dataSet = excelReader.AsDataSet();
                var tableCount = dataSet.Tables.Count;
                for (var i = 0; i < tableCount; i++)
                {
                    var table = dataSet.Tables[i];
                    //可以被导出的table名
                    if (table.TableName.StartsWith("#") && table.TableName.EndsWith("#"))
                    {
                        CollectTable(path, table, exportInterface);
                        break;
                    }
                }
            }
        }

        /// <summary>
        /// 收集table
        /// </summary>
        /// <param name="path"></param>
        /// <param name="table"></param>
        /// <param name="exportInterface"></param>
        private static void CollectTable(string path, DataTable table, bool exportInterface)
        {
            //第一行为注释行，第二行为数据格式行
            var rules = Excel2JsonAssetsManager.GetRules();
            var outputPath = rules.outputPath;
            int colCnt = table.Columns.Count;
            int rowCnt = table.Rows.Count;
            var rows = table.Rows;
            if (rowCnt <= 2)
            {
                var msg = $"table row count less than 2,path=>{path}";
                EditorUtility.DisplayDialog(displayTitle, msg,
                    "OK");
                Debug.LogWarning(msg);
                return;
            }

            //先找到id列
            int idColIndex = -1;
            for (var i = 0; i < colCnt; i++)
            {
                string colName = rows[1][i].ToString();
                if (string.Equals(colName, "#id:string"))
                {
                    idColIndex = i;
                    break;
                }
            }

            if (idColIndex < 0)
            {
                var msg = $"table can not found the id column which is #id:string,path=>{path}";
                EditorUtility.DisplayDialog(displayTitle,
                    msg,
                    "OK");
                Debug.LogWarning(msg);
                return;
            }
            
            //按行导出
            
        }
    }
}