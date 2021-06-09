using System;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using Excel;
using MultiLanguage.Scripts.tool;
using UnityEngine;

namespace MultiLanguage.Scripts.func.collector
{
    /// <summary>
    /// 配置表收集器
    /// </summary>
    public static class CollectXlsxs
    {
        public static Dictionary<string, string> Collect(Action<float, string> progressCallBack = null)
        {
            var rules = MultiLanguageAssetsManager.GetRules();
            var rootDir = Path.GetDirectoryName(Application.dataPath);
            if (string.IsNullOrEmpty(rootDir) || string.IsNullOrEmpty(rules.xlsxDirectory))
            {
                return null;
            }

            var dir = Path.Combine(rootDir, rules.xlsxDirectory);
            if (!Directory.Exists(dir))
            {
                return null;
            }

            var xlsxStrDic = new Dictionary<string, string>();
            var allXlsxArray = FileTool.GetXlsxs(dir);
            var allXlsxList = allXlsxArray.ToList();
            FilterXlsxPaths(ref allXlsxList, rootDir);
            for (var i = 0; i < allXlsxList.Count; i++)
            {
                var path = allXlsxList[i];
                progressCallBack?.Invoke(0.8f, $"读取配置档文件：{path}");
                ReadXlsxFile(ref xlsxStrDic, path);
            }

            return xlsxStrDic;
        }

        /// <summary>
        /// 更新xlsx原始导出文件
        /// </summary>
        /// <param name="progressCallBack">进度回调</param>
        public static void UpdateRawFile(Action<float, string> progressCallBack = null)
        {
            var xlsxStrDic = CollectXlsxs.Collect(progressCallBack);
            if (xlsxStrDic == null || xlsxStrDic.Count <= 0)
            {
                return;
            }

            var rules = MultiLanguageAssetsManager.GetRules();
            var fullRawDir = FileTool.GetFullPath(rules.rawDirectory);


            var savePath = Path.Combine(fullRawDir, MultiLanguageConfig.CsvNameRawConfig);
            var table = new CsvTable();
            var baseSupport = rules.supports[rules.basicSupportIndex];
            foreach (var kv in xlsxStrDic)
            {
                var field = new CsvFieldInfo {Name = kv.Key};
                field.SetValue(baseSupport.language, kv.Value);
                table.AddField(field);
            }

            CsvOperater.WriteSingleFile(table, savePath);
        }

        #region private method

        /// <summary>
        /// 读取xlsx字段到path路径
        /// </summary>
        /// <param name="saveDic"></param>
        /// <param name="path"></param>
        private static void ReadXlsxFile(ref Dictionary<string, string> saveDic, string path)
        {
            using (var stream = File.Open(path, FileMode.Open, FileAccess.Read))
            {
                var excelReader = ExcelReaderFactory.CreateOpenXmlReader(stream);
                if (!string.IsNullOrEmpty(excelReader.ExceptionMessage))
                {
                    Debug.LogError($"excel read fail,path=>{path}");
                    return;
                }

                var name = Path.GetFileNameWithoutExtension(path);
                var result = excelReader.AsDataSet();
                var count = result.Tables.Count;
                for (int i = 0; i < count; i++)
                {
                    var table = result.Tables[i];
                    if (table != null)
                    {
                        ReadXlsxTable(ref saveDic, table, name);
                    }
                }
            }
        }

        /// <summary>
        /// 读取xlsx中的表结构，写入本地化字段到字典
        /// </summary>
        /// <param name="saveDic"></param>
        /// <param name="table"></param>
        /// <param name="fileName"></param>
        private static void ReadXlsxTable(ref Dictionary<string, string> saveDic, DataTable table, string fileName)
        {
            int colCnt = table.Columns.Count;
            int rowCnt = table.Rows.Count;
            var rows = table.Rows;
            //配置档基本：1行注释 1行类型定义
            if (rowCnt <= 2)
            {
                return;
            }

            int idColIndex = 0;
            //1.找到ID列
            for (int i = 0; i < colCnt; i++)
            {
                string colName = rows[1][i].ToString();
                if (string.Equals(colName, "#id:int"))
                {
                    idColIndex = i;
                    break;
                }
            }

            for (int i = 0; i < colCnt; i++)
            {
                string colName = rows[1][i].ToString();
                // if(colName.StartsWith("#m_"))
                string[] colNameAry = colName.Split(':');
                //类型是string类型，以#m_开头 才需要写入本地化文件
                if (colNameAry.Length < 2
                    || (colNameAry[1] != MultiLanguageConfig.XlsxMultiLanguageKey &&
                        colNameAry[1] != MultiLanguageConfig.XlsxMultiLanguageKeyList))
                {
                    continue;
                }
                string keyName = colNameAry[0].Substring(1);
                for (int j = 2; j < rowCnt; j++)
                {
                    var value = rows[j][i].ToString();
                    var id = rows[j][idColIndex].ToString();
                    if (!string.IsNullOrEmpty(value) && !string.IsNullOrEmpty(id))
                    {
                        //与excel转lua工具中new_transform.py转出格式一致
                        var saveKey = string.Empty;
                        if (string.Equals(colNameAry[1], MultiLanguageConfig.XlsxMultiLanguageKey))
                        {
                            saveKey = $"{fileName}_{keyName}_{id}";
                        }
                        else if (string.Equals(colNameAry[1], MultiLanguageConfig.XlsxMultiLanguageKeyList))
                        {
                            saveKey = $"{fileName}_{keyName}_{id}_{i}";
                        }

                        if (!saveDic.ContainsKey(saveKey))
                        {
                            saveDic.Add(saveKey, value);
                        }
                    }
                }
            }
        }

        /// <summary>
        /// 过滤筛选出忽略的文件路径
        /// </summary>
        /// <param name="files"></param>
        /// <param name="root"></param>
        private static void FilterXlsxPaths(ref List<string> files, string root)
        {
            var rules = MultiLanguageAssetsManager.GetRules();
            var ignoreArray = rules.ignoreXlsxs;
            var pathIgnoreList = new List<string>();
            var dirIgnoreList = new List<string>();
            for (var i = 0; i < ignoreArray.Length; i++)
            {
                var data = ignoreArray[i];
                var path = Path.Combine(root, data.path);
                path = path.Replace("\\", "/");
                if (data.ignoreType == IgnoreType.Directory)
                {
                    if (path.LastIndexOf("/") == path.Length - 1)
                    {
                        path = path.Remove(path.Length - 1);
                    }

                    dirIgnoreList.Add(path);
                }
                else if (data.ignoreType == IgnoreType.File)
                {
                    pathIgnoreList.Add(path);
                }
            }

            for (var i = 0; i < files.Count; i++)
            {
                var xlsxPath = files[i];
                var xlsxDir = Path.GetDirectoryName(xlsxPath);
                if (string.IsNullOrEmpty(xlsxDir))
                {
                    continue;
                }

                xlsxDir = xlsxDir.Replace("\\", "/");
                xlsxPath = xlsxPath.Replace("\\", "/");

                var valid = true;
                //按具体文件名忽略
                for (var j = 0; j < pathIgnoreList.Count; j++)
                {
                    if (xlsxPath == pathIgnoreList[j])
                    {
                        valid = false;
                        break;
                    }
                }

                //按路径忽略
                for (var j = 0; j < dirIgnoreList.Count; j++)
                {
                    if (xlsxDir.IndexOf(dirIgnoreList[j], StringComparison.Ordinal) >= 0)
                    {
                        valid = false;
                        break;
                    }
                }

                if (!valid)
                {
                    files.RemoveAt(i);
                    i--;
                }
            }
        }

        #endregion
    }
}