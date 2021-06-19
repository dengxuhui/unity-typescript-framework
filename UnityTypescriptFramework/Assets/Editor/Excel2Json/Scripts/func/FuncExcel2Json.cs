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

        private static readonly Dictionary<string, Action<object, BaseHandleData, Dictionary<string, object>>>
            _handleDic;

        //静态构造方式初始化Action
        static FuncExcel2Json()
        {
            //处理int值
            var handle_int =
                new Action<object, BaseHandleData, Dictionary<string, object>>(
                    (rawData, handleData, addDic) =>
                    {
                        addDic.Add(handleData.attrName, rawData is DBNull ? 0 : Convert.ToInt32(rawData));
                    });
            //处理int数组
            var handle_int_array =
                new Action<object, BaseHandleData, Dictionary<string, object>>((rawData, handleData, addDic) =>
                {
                    if (rawData is DBNull)
                    {
                        addDic.Add(handleData.attrName, new int[0]);
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
                                $"try convert to int32 error,file name{handleData.fileNameWithoutEX},field name:{handleData.attrName}");
                        }
                    }

                    addDic.Add(handleData.attrName, intArray);
                });
            //处理float
            var handle_float = new Action<object, BaseHandleData, Dictionary<string, object>>(
                (rawData, handleData, addDic) =>
                {
                    if (rawData is DBNull)
                    {
                        addDic.Add(handleData.attrName, 0.0f);
                        return;
                    }

                    addDic.Add(handleData.attrName, Convert.ToSingle(rawData));
                });
            //处理浮点数数组
            var handle_float_array =
                new Action<object, BaseHandleData, Dictionary<string, object>>((rawData, handleData, addDic) =>
                {
                    if (rawData is DBNull)
                    {
                        addDic.Add(handleData.attrName, new float[0]);
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
                                $"try convert to float error,file name{handleData.fileNameWithoutEX},field name:{handleData.attrName}");
                        }
                    }

                    addDic.Add(handleData.attrName, floatArray);
                });
            //处理字符串
            var handle_string =
                new Action<object, BaseHandleData, Dictionary<string, object>>((rawData, handleData, addDic) =>
                {
                    if (rawData is DBNull)
                    {
                        addDic.Add(handleData.attrName, string.Empty);
                        return;
                    }

                    addDic.Add(handleData.attrName, Convert.ToString(rawData));
                });
            //处理字符串数组
            var handle_string_array =
                new Action<object, BaseHandleData, Dictionary<string, object>>((rawData, handleData, addDic) =>
                {
                    if (rawData is DBNull)
                    {
                        addDic.Add(handleData.attrName, new string[0]);
                        return;
                    }

                    var dataArray = Convert.ToString(rawData).Split('|');
                    addDic.Add(handleData.attrName, dataArray);
                });
            //处理多语言类型
            var handle_lang =
                new Action<object, BaseHandleData, Dictionary<string, object>>((rawData, handleData, addDic) =>
                {
                    if (rawData is DBNull)
                    {
                        addDic.Add(handleData.attrName, string.Empty);
                        return;
                    }

                    //简便处理，直接从addDic中获取id字段，没有显示为error
                    addDic.TryGetValue("id", out var id);
                    id = id is string ? Convert.ToString(id) : "_error";
                    var save = $"{handleData.fileNameWithoutEX}_{handleData.attrName}_{id}";
                    addDic.Add(handleData.attrName, save);
                });
            //处理函数初始化
            _handleDic = new Dictionary<string, Action<object, BaseHandleData, Dictionary<string, object>>>
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
            var baseHandleMap = new Dictionary<string, BaseHandleData>();

            var xlsxFileName = Path.GetFileNameWithoutExtension(fullPath);
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
                    if (kv.Length != 2)
                    {
                        continue;
                    }

                    //简单类型
                    if (_handleDic.ContainsKey(kv[1]))
                    {
                        if (baseHandleMap.ContainsKey(kv[0]))
                        {
                            var error =
                                $"export2json error ,fount repeat colName=>{colName} at xlsx file=>{xlsxFileName}";
                            EditorUtility.DisplayDialog(displayTitle,
                                error,
                                "OK");
                            Debug.LogWarning(error);
                            continue;
                        }

                        baseHandleMap.Add(kv[0], new BaseHandleData
                        {
                            action = _handleDic[kv[1]],
                            attrName = kv[0],
                            colIndex = i,
                            fileNameWithoutEX = xlsxFileName
                        });
                    }
                    else
                    {
                        var msg = $"export2json error,not found the handle func=>{colName},file=>{xlsxFileName}";
                        EditorUtility.DisplayDialog(displayTitle,
                            msg,
                            "OK");
                        Debug.LogWarning(msg);
                    }
                }
            }

            if (idColIndex < 0)
            {
                var msg = $"sheet can not found the id column which is #id:string,fullPath=>{fullPath}";
                EditorUtility.DisplayDialog(displayTitle,
                    msg,
                    "OK");
                Debug.LogWarning(msg);
                return;
            }

            //表数据
            var sheetDataDic = new Dictionary<string, object>();
            //按行导出
            for (var i = 2; i < rowCnt; i++)
            {
                var idObj = rows[i][idColIndex];
                //空行
                if (idObj is DBNull)
                {
                    continue;
                }

                var id = Convert.ToString(idObj);
                if (sheetDataDic.ContainsKey(id))
                {
                    var error = $"export2json error, exist repeat id in file=>{xlsxFileName},id=>{id}";
                    EditorUtility.DisplayDialog(displayTitle,
                        error,
                        "OK");
                    Debug.LogWarning(error);
                    continue;
                }

                //行数据
                var rowDataDic = new Dictionary<string, object>();
                foreach (var kv in baseHandleMap)
                {
                    var handleData = kv.Value;
                    var colIndex = handleData.colIndex;
                    var rawData = rows[i][colIndex];
                    var handle = kv.Value;
                    handle.action.Invoke(rawData, handleData, rowDataDic);
                }

                sheetDataDic.Add(id, rowDataDic);
            }

            if (sheetDataDic.Count > 0)
            {
                //保存
                var setting = new JsonSerializerSettings
                {
                    Formatting = Formatting.Indented
                };
                var jsonStr = JsonConvert.SerializeObject(sheetDataDic);
                var jsonFileName = Path.GetFileNameWithoutExtension(fullPath) + ".json";
                var outputDir = Excel2JsonAssetsManager.GetRules().outputPath;
                outputDir = FileTool.GetFullPath(outputDir, RelativeType.Assets);
                FileTool.TryMakeDir(outputDir);
                var savePath = Path.Combine(outputDir, jsonFileName);
                using (var file = new FileStream(savePath, FileMode.Create, FileAccess.Write))
                {
                    using (TextWriter writer = new StreamWriter(file, Encoding.UTF8))
                    {
                        writer.Write(jsonStr);
                    }
                }
            }
        }
    }

    /// <summary>
    /// 简单类型数据处理类型
    /// </summary>
    internal struct BaseHandleData
    {
        //列
        public int colIndex;

        //字段名
        public string attrName;

        //文件名没有后缀
        public string fileNameWithoutEX;

        //数据处理函数
        public Action<object, BaseHandleData, Dictionary<string, object>> action;
    }

    // /// <summary>
    // /// 复杂处理类型
    // /// </summary>
    // internal struct StructHandleData
    // {
    //     public List<BaseHandleData> handleDataList;
    // }
    //
    // internal struct StructListHandleData
    // {
    //     public List<StructHandleData> structList;
    // }
}