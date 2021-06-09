using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using UnityEditor;

namespace MultiLanguage.Scripts.tool
{
    /// <summary>
    /// csv文件操作工具
    /// 说明：SingleFile指的是单独的语言文件，MergeFile是合并多个语言的文件，包含文件头，单独文件只有键值对组成的文件
    /// </summary>
    public static class CsvOperater
    {
        /// <summary>
        /// 读取单个语言表
        /// </summary>
        /// <param name="path"></param>
        /// <param name="language"></param>
        /// <returns>CsvTable</returns>
        public static CsvTable ReadSingleFile(string path, Language language)
        {
            if (!File.Exists(path))
            {
                return new CsvTable();
            }

            using (var stream = File.Open(path, FileMode.Open, FileAccess.Read, FileShare.ReadWrite))
            {
                var sr = new StreamReader(stream);
                var text = sr.ReadToEnd();
                //关闭流的时候会自动关闭stream
                sr.Close();
                sr.Dispose();

                CsvTable tbl = new CsvTable();
                string[] rows = text.Split(new string[] {Environment.NewLine}, StringSplitOptions.RemoveEmptyEntries);
                if (rows.Length <= 0)
                {
                    return tbl;
                }


                for (var i = 0; i < rows.Length; i++)
                {
                    var row = rows[i];
                    var kv = row.Split('\t');
                    //字段名为空
                    if (kv.Length < 2 || string.IsNullOrEmpty(kv[0]))
                    {
                        continue;
                    }

                    var name = kv[0];
                    var content = kv[1];
                    var fieldInfo = new CsvFieldInfo {Name = name};
                    fieldInfo.SetValue(language, content);

                    tbl.AddField(fieldInfo);
                }

                return tbl;
            }
        }

        /// <summary>
        /// 读取合并后的所有语言合并档
        /// </summary>
        /// <param name="path"></param>
        /// <returns></returns>
        public static CsvTable ReadSummaryFile(string path)
        {
            if (!File.Exists(path))
            {
                return new CsvTable();
            }

            using (var stream = File.Open(path, FileMode.Open, FileAccess.Read, FileShare.ReadWrite))
            {
                var sr = new StreamReader(stream);
                var text = sr.ReadToEnd();
                sr.Close();
                sr.Dispose();
                string[] rows = text.Split(new string[] {Environment.NewLine}, StringSplitOptions.RemoveEmptyEntries);

                CsvTable tbl = new CsvTable();
                //第一行为文件头
                if (rows.Length <= 1)
                {
                    return tbl;
                }

                //文件头

                #region 解析文件头

                var header = rows[0];
                var headerKv = header.Split('\t');
                Language[] paresLangSeq = new Language[headerKv.Length - 1];
                for (int i = 1; i < headerKv.Length; i++)
                {
                    Enum.TryParse<Language>(headerKv[i], out var result);
                    paresLangSeq[i - 1] = result;
                }

                #endregion

                for (var i = 1; i < rows.Length; i++)
                {
                    var row = rows[i];
                    var kv = row.Split('\t');
                    //字段名为空
                    if (kv.Length < 2 || string.IsNullOrEmpty(kv[0]))
                    {
                        continue;
                    }

                    var fieldInfo = new CsvFieldInfo();
                    var name = kv[0];
                    fieldInfo.Name = name;
                    for (int j = 1; j < kv.Length; j++)
                    {
                        var index = j - 1;
                        if (index >= paresLangSeq.Length)
                        {
                            break;
                        }
                        var lang = paresLangSeq[index];
                        fieldInfo.SetValue(lang, kv[j]);
                    }

                    tbl.AddField(fieldInfo);
                }

                return tbl;
            }
        }

        /// <summary>
        /// 在指定路径写csv文件，如果存在直接覆盖
        /// </summary>
        /// <param name="tbl"></param>
        /// <param name="path"></param>
        public static void WriteSingleFile(CsvTable tbl, string path)
        {
            using (var sw = new StreamWriter(path, false, Encoding.Unicode))
            {
                for (var i = 0; i < tbl.Count; i++)
                {
                    sw.WriteLine(tbl.ToString(i));
                }

                sw.Flush();
                sw.Close();
                sw.Dispose();
            }
        }

        /// <summary>
        /// 写总表数据，总表有文件头
        /// </summary>
        /// <param name="tbl"></param>
        /// <param name="path"></param>
        public static void WriteSummaryFile(CsvTable tbl, string path)
        {
            if (tbl.Count <= 0)
            {
                return;
            }

            using (var sw = new StreamWriter(path, false, Encoding.Unicode))
            {
                #region 写文件头

                var src = tbl[0];
                var sb = new StringBuilder();
                sb.Append("多语言Key");
                var rules = MultiLanguageAssetsManager.GetRules();
                var supports = rules.supports;
                src.Walk((Language lang, string content) =>
                {
                    SupportLanguage supportLang = null;
                    for (var i = 0; i < supports.Length; i++)
                    {
                        if (supports[i].language == lang)
                        {
                            supportLang = supports[i];
                            break;
                        }
                    }

                    if (supportLang == null)
                    {
                        EditorUtility.DisplayDialog("写入错误", "支持语言与写入table字段数不匹配，请检查", "OK");
                        return;
                    }

                    var header = supportLang.language.ToString();
                    sb.Append("\t");
                    sb.Append(header);
                });

                var headerStr = sb.ToString();
                if (!string.IsNullOrEmpty(headerStr))
                {
                    sw.WriteLine(headerStr);
                }

                #endregion

                for (var i = 0; i < tbl.Count; i++)
                {
                    sw.WriteLine(tbl.ToString(i));
                }

                sw.Flush();
                sw.Close();
                sw.Dispose();
            }
        }

        /// <summary>
        /// 向指定目录写一个空的总表
        /// </summary>
        /// <param name="path"></param>
        public static void WriteEmptySummaryFile(string path)
        {
            using (var sw = new StreamWriter(path, false, Encoding.Unicode))
            {
                var sb = new StringBuilder();
                sb.Append("多语言Key");
                var rules = MultiLanguageAssetsManager.GetRules();
                var supports = rules.supports;
                for (var i = 0; i < supports.Length; i++)
                {
                    sb.Append("\t");
                    sb.Append(supports[i].language.ToString());
                }

                sw.WriteLine(sb);

                sw.Flush();
                sw.Close();
                sw.Dispose();
            }
        }
    }

    /// <summary>
    /// csv表数据结构
    /// </summary>
    public class CsvTable
    {
        /// <summary>
        /// 所有字段信息
        /// </summary>
        private readonly List<CsvFieldInfo> _fieldInfos = new List<CsvFieldInfo>();

        /// <summary>
        /// 获取字段信息
        /// </summary>
        /// <param name="index"></param>
        public CsvFieldInfo this[int index]
        {
            get
            {
                if (index >= 0 && index < _fieldInfos.Count)
                {
                    return _fieldInfos[index];
                }
                else
                {
                    return null;
                }
            }
            set => _fieldInfos[index] = value;
        }

        /// <summary>
        /// 是否包含字段
        /// </summary>
        /// <param name="field"></param>
        /// <returns></returns>
        public bool Contains(CsvFieldInfo field)
        {
            for (var i = 0; i < _fieldInfos.Count; i++)
            {
                if (_fieldInfos[i].Name == field.Name)
                {
                    return true;
                }
            }

            return false;
        }


        /// <summary>
        /// 获取行数
        /// </summary>
        public int Count => _fieldInfos?.Count ?? 0;

        /// <summary>
        /// 添加字段
        /// </summary>
        /// <param name="fieldInfo"></param>
        public void AddField(CsvFieldInfo fieldInfo)
        {
            _fieldInfos.Add(fieldInfo);
        }

        public void RemoveAt(int index)
        {
            _fieldInfos.RemoveAt(index);
        }

        /// <summary>
        /// 转换为字典
        /// </summary>
        /// <returns></returns>
        public Dictionary<string, CsvFieldInfo> ToDictionary()
        {
            var fieldDic = new Dictionary<string, CsvFieldInfo>();
            for (var i = 0; i < _fieldInfos.Count; i++)
            {
                var fieldInfo = _fieldInfos[i];
                if (!fieldDic.ContainsKey(fieldInfo.Name))
                {
                    fieldDic.Add(fieldInfo.Name, fieldInfo);
                }
            }

            return fieldDic;
        }

        /// <summary>
        /// 将行转换为字符串格式
        /// </summary>
        /// <param name="index"></param>
        /// <returns></returns>
        public string ToString(int index)
        {
            var sb = new StringBuilder();
            var fieldInfo = _fieldInfos[index];
            sb.Append(fieldInfo.Name);
            fieldInfo.Walk((Language lang, string content) =>
            {
                sb.Append("\t");
                sb.Append(content);
            });

            return sb.ToString();
        }
    }
}