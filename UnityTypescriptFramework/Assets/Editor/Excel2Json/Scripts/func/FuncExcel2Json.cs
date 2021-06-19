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

// ReSharper disable InconsistentNaming

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

        private static readonly Dictionary<string, Action<object, HandleData, Dictionary<string, object>>> _handleDic;

        //静态构造方式初始化Action
        static FuncExcel2Json()
        {
            //处理int值
            var handle_int =
                new Action<object, HandleData, Dictionary<string, object>>(
                    (rawData, handleData, addDic) =>
                    {
                        addDic.Add(handleData.name, rawData is DBNull ? 0 : Convert.ToInt32(rawData));
                    });
            //处理int数组
            var handle_int_array =
                new Action<object, HandleData, Dictionary<string, object>>((rawData, handleData, addDic) =>
                {
                    if (rawData is DBNull)
                    {
                        addDic.Add(handleData.name, new int[0]);
                        return;
                    }

                    var dataArray = Convert.ToString(rawData).Split('|');
                    var intArray = new int[dataArray.Length];
                    for (var i = 0; i < dataArray.Length; i++)
                    {
                        try
                        {
                            intArray[i] = Convert.ToInt32(dataArray[i]);
                        }
                        catch (Exception e)
                        {
                            intArray[i] = 0;
                            Debug.LogError(
                                $"try convert to int32 error,file name{handleData.fileName},field name:{handleData.name}");
                        }
                    }

                    addDic.Add(handleData.name, intArray);
                });
            //处理float
            var handle_float = new Action<object, HandleData, Dictionary<string, object>>(
                (rawData, handleData, addDic) =>
                {
                    if (rawData is DBNull)
                    {
                        addDic.Add(handleData.name, 0.0f);
                        return;
                    }

                    addDic.Add(handleData.name, Convert.ToSingle(rawData));
                });
            //处理浮点数数组
            var handle_float_array =
                new Action<object, HandleData, Dictionary<string, object>>((rawData, handleData, addDic) =>
                {
                    if (rawData is DBNull)
                    {
                        addDic.Add(handleData.name, new float[0]);
                        return;
                    }

                    var dataArray = Convert.ToString(rawData).Split('|');
                    var floatArray = new float[dataArray.Length];
                    for (var i = 0; i < dataArray.Length; i++)
                    {
                        try
                        {
                            floatArray[i] = Convert.ToSingle(dataArray[i]);
                        }
                        catch (Exception e)
                        {
                            floatArray[i] = 0.0f;
                            Debug.LogError(
                                $"try convert to float error,file name{handleData.fileName},field name:{handleData.name}");
                        }
                    }

                    addDic.Add(handleData.name, floatArray);
                });
            //处理字符串
            var handle_string =
                new Action<object, HandleData, Dictionary<string, object>>((rawData, handleData, addDic) =>
                {
                    if (rawData is DBNull)
                    {
                        addDic.Add(handleData.name, string.Empty);
                        return;
                    }

                    addDic.Add(handleData.name, Convert.ToString(rawData));
                });
            //处理字符串数组
            var handle_string_array =
                new Action<object, HandleData, Dictionary<string, object>>((rawData, handleData, addDic) =>
                {
                    if (rawData is DBNull)
                    {
                        addDic.Add(handleData.name, new string[0]);
                        return;
                    }

                    var dataArray = Convert.ToString(rawData).Split('|');
                    addDic.Add(handleData.name, dataArray);
                });
            //处理多语言类型
            var handle_lang =
                new Action<object, HandleData, Dictionary<string, object>>((rawData, handleData, addDic) =>
                {
                    if (rawData is DBNull)
                    {
                        addDic.Add(handleData.name, string.Empty);
                        return;
                    }

                    addDic.Add(handleData.name, handleData.langKey);
                });
            //处理函数初始化
            _handleDic = new Dictionary<string, Action<object, HandleData, Dictionary<string, object>>>
            {
                {"int", handle_int}, {"int_array", handle_int_array}, {"float", handle_float},
                {"float_array", handle_float_array}, {"string", handle_string}, {"string_array", handle_string_array},
                {"lang", handle_lang}
            };
        }

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

        private static object GetDefaultValue(Type type)
        {
            if (type == typeof(int))
            {
                return 0;
            }
            else if (type == typeof(int[]))
            {
                return new int[0];
            }
            else if (type == typeof(float))
            {
                return 0.0f;
            }
            else if (type == typeof(float[]))
            {
                return new float[0];
            }
            else if (type == typeof(string))
            {
                return string.Empty;
            }
            else if (type == typeof(string[]))
            {
                return new string[0];
            }

            Debug.LogError("can not find default type=>" + type.Name);
            return null;
        }
    }

    /// <summary>
    /// 处理数据
    /// </summary>
    internal struct HandleData
    {
        //字段名
        public string name;

        //当字段是lang类型时赋值
        public string langKey;

        //文件名，主要用于报错时打印信息使用
        public string fileName;

        //数据处理函数
        public Action<object, HandleData, Dictionary<string, object>> action;
    }

    internal struct FieldInfo
    {
        public string fieldName;
        public Type type;
    }
}