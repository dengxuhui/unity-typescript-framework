using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Text;
using Excel;
using Excel2Json.tool;
using Newtonsoft.Json;
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

        /// <summary>
        /// 基础类型。基础类型只会存在这么多，更复杂的结构也无非是将这些基础类型进行组合
        /// </summary>
        private static readonly Dictionary<string, Type> BaseTypeDic = new Dictionary<string, Type>()
        {
            {
                "string", typeof(string)
            },
            {
                "string_array", typeof(string[])
            },
            {
                "int_array", typeof(int[])
            },
            {
                "int", typeof(int)
            },
            {
                "float", typeof(float)
            },
            {
                "float_array", typeof(float[])
            },
            {
                //多语言类型，与多语言工具搭配使用
                "lang", typeof(string)
            }
        };

        /// <summary>
        /// 全路径导出，可按照文件路径或者目录路径导出
        /// </summary>
        /// <param name="fullPath"></param>
        /// <param name="exportInterface"></param>
        public static void Export(string fullPath, bool exportInterface)
        {
            if (string.IsNullOrEmpty(fullPath) || (!File.Exists(fullPath) && !Directory.Exists(fullPath)))
            {
                EditorUtility.DisplayDialog("error", $"fullPath error ,not exist=>{fullPath}", "OK");
                return;
            }

            var progressInfo = "collect fullPath:{0}";
            EditorUtility.DisplayProgressBar(displayTitle, "开始转换..", 0.1f);
            //以文件方式导出
            if (File.Exists(fullPath) && Path.GetExtension(fullPath) == ".xlsx")
            {
                EditorUtility.DisplayProgressBar(displayTitle, string.Format(progressInfo, fullPath), 0.5f);
                CollectXlsx(fullPath, exportInterface);
            }
            //以目录方式导出
            else if (Directory.Exists(fullPath))
            {
                var xlsxFileArray = Directory.GetFiles(fullPath, "*.xlsx", SearchOption.AllDirectories);
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
        /// <param name="fullPath"></param>
        /// <param name="exportInterface"></param>
        private static void CollectXlsx(string fullPath, bool exportInterface)
        {
            using (var stream = File.Open(fullPath, FileMode.Open, FileAccess.Read))
            {
                var excelReader = ExcelReaderFactory.CreateOpenXmlReader(stream);
                if (!string.IsNullOrEmpty(excelReader.ExceptionMessage))
                {
                    Debug.LogError($"excel read fail,fullPath=>{fullPath}");
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
                        CollectTable(fullPath, table, exportInterface);
                        break;
                    }
                }
            }
        }

        /// <summary>
        /// 收集table
        /// </summary>
        /// <param name="fullPath"></param>
        /// <param name="table"></param>
        /// <param name="exportInterface"></param>
        private static void CollectTable(string fullPath, DataTable table, bool exportInterface)
        {
            //第一行为注释行，第二行为数据格式行
            int colCnt = table.Columns.Count;
            int rowCnt = table.Rows.Count;
            var rows = table.Rows;
            if (rowCnt <= 2)
            {
                var msg = $"table row count less than 2,fullPath=>{fullPath}";
                EditorUtility.DisplayDialog(displayTitle, msg,
                    "OK");
                Debug.LogWarning(msg);
                return;
            }

            //先找到id列
            int idColIndex = -1;
            var validColDic = new Dictionary<int, FieldInfo>();
            for (var i = 0; i < colCnt; i++)
            {
                string colName = rows[1][i].ToString();
                if (string.Equals(colName, "#id:string"))
                {
                    idColIndex = i;
                }

                //以#开始为需要导出的字段
                if (colName.StartsWith("#"))
                {
                    colName = colName.Substring(1);
                    var kv = colName.Split(':');
                    BaseTypeDic.TryGetValue(kv[1], out var ot);
                    if (ot == null)
                    {
                        var msg = $"table can define type not support ,type string is=>{kv[1]},fullPath=>{fullPath}";
                        EditorUtility.DisplayDialog(displayTitle,
                            msg,
                            "OK");
                        Debug.LogWarning(msg);
                        return;
                    }

                    validColDic.Add(i, new FieldInfo {fieldName = kv[0], type = ot});
                }
            }

            //TODO 如果后续需要支持Array类型的Json导出，没有找到id就按Array导出
            if (idColIndex < 0)
            {
                var msg = $"table can not found the id column which is #id:string,fullPath=>{fullPath}";
                EditorUtility.DisplayDialog(displayTitle,
                    msg,
                    "OK");
                Debug.LogWarning(msg);
                return;
            }

            var data = new Dictionary<string, object>();

            //按行导出
            for (var i = 2; i < rowCnt; i++)
            {
                var rowDic = new Dictionary<string, object>();
                var id = rows[i][idColIndex].ToString();
                foreach (var kv in validColDic)
                {
                    var colIndex = kv.Key;
                    var fieldInfo = kv.Value;
                    var exportType = fieldInfo.type;
                    var rawData = rows[i][colIndex];
                    if (rawData is DBNull)
                    {
                        rowDic.Add(fieldInfo.fieldName, GetDefaultValue(fieldInfo.type));
                    }
                    else
                    {
                        if (exportType == typeof(string))
                        {
                            rowDic.Add(fieldInfo.fieldName, Convert.ToString(rawData));
                        }
                        else if (exportType == typeof(string[]))
                        {
                            var dataArray = Convert.ToString(rawData).Split('|');
                            rowDic.Add(fieldInfo.fieldName, dataArray);
                        }
                        else if (exportType == typeof(int))
                        {
                            rowDic.Add(fieldInfo.fieldName, Convert.ToInt32(rawData));
                        }
                        else if (exportType == typeof(int[]))
                        {
                            var dataArray = Convert.ToString(rawData).Split('|');
                            var intArray = new int[dataArray.Length];
                            for (var i1 = 0; i1 < dataArray.Length; i1++)
                            {
                                intArray[i1] = Convert.ToInt32(dataArray[i1]);
                            }

                            rowDic.Add(fieldInfo.fieldName, intArray);
                        }
                        else if (exportType == typeof(float))
                        {
                            rowDic.Add(fieldInfo.fieldName, Convert.ToSingle(rawData));
                        }
                        else if (exportType == typeof(float[]))
                        {
                            var dataArray = Convert.ToString(rawData).Split('|');
                            var floatArray = new float[dataArray.Length];
                            for (var i1 = 0; i1 < dataArray.Length; i1++)
                            {
                                floatArray[i1] = Convert.ToSingle(dataArray[i1]);
                            }

                            rowDic.Add(fieldInfo.fieldName, floatArray);
                        }
                    }
                }

                data.Add(id, rowDic);
            }

            if (data.Count > 0)
            {
                //保存
                var setting = new JsonSerializerSettings
                {
                    Formatting = Formatting.Indented
                };
                var jsonStr = JsonConvert.SerializeObject(data);
                var fileName = Path.GetFileNameWithoutExtension(fullPath) + ".json";
                var outputDir = Excel2JsonAssetsManager.GetRules().outputPath;
                outputDir = FileTool.GetFullPath(outputDir, RelativeType.Assets);
                FileTool.TryMakeDir(outputDir);
                var savePath = Path.Combine(outputDir, fileName);
                using (var file = new FileStream(savePath, FileMode.Create, FileAccess.Write))
                {
                    using (TextWriter writer = new StreamWriter(file, Encoding.UTF8))
                    {
                        writer.Write(jsonStr);
                    }
                }
            }
        }

        private static object GetDefaultValue(Type exportType)
        {
            if (exportType == typeof(int))
            {
                return 0;
            }
            else if (exportType == typeof(int[]))
            {
                return new int[0];
            }
            else if (exportType == typeof(float))
            {
                return 0.0f;
            }
            else if (exportType == typeof(float[]))
            {
                return new float[0];
            }
            else if (exportType == typeof(string))
            {
                return string.Empty;
            }
            else if (exportType == typeof(string[]))
            {
                return new string[0];
            }

            Debug.LogError("can not find default type=>" + exportType.Name);
            return null;
        }
    }


    internal struct FieldInfo
    {
        public string fieldName;
        public Type type;
    }
}