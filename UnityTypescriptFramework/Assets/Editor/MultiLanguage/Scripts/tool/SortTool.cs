using System.Collections.Generic;

namespace MultiLanguage.Scripts.tool
{
    
    public struct Jaccard
    {
        public CsvFieldInfo Field;
        public short Score;
    }
    
    public static class SortTool
    {
        /// <summary>
        /// 根据csvField中的key值进行排序
        /// </summary>
        /// <param name="list"></param>
        public static List<CsvFieldInfo> SortCsvFieldList(List<CsvFieldInfo> list)
        {
            if (list.Count <= 1)
            {
                return list;
            }
            var sortList = new List<CsvFieldInfo>(list.Count);
            var cloneList = new List<CsvFieldInfo>(list.ToArray());
            //相似度匹配
            while (cloneList.Count > 0)
            {
                var baseC = cloneList[0];
                var baseCharArray = baseC.Name.ToCharArray();
                cloneList.RemoveAt(0);
                sortList.Add(baseC);

                List<Jaccard> jArray = new List<Jaccard>();
                for (int i = 0; i < cloneList.Count; i++)
                {
                    var csvFieldInfo = cloneList[i];
                    var compareCharArray = csvFieldInfo.Name.ToCharArray();
                    var compareLength = compareCharArray.Length;
                    short score = 0;
                    for (var i1 = 0; i1 < baseCharArray.Length; i1++)
                    {
                        if (i1 < compareLength && baseCharArray[i1] == compareCharArray[i1])
                        {
                            score++;
                        }
                    }

                    if (score > 0)
                    {
                        var find = cloneList[i];
                        var ja = new Jaccard
                        {
                            Field = find,
                            Score = score
                        };
                        jArray.Add(ja);
                        cloneList.RemoveAt(i);
                        i--;
                    }
                }

                if (jArray.Count <= 0)
                {
                    break;
                }
                jArray.Sort((a, b) => a.Score > b.Score ? 0 : 1);
                for (int i = 0; i < jArray.Count; i++)
                {
                    sortList.Add(jArray[i].Field);
                }
            }

            return sortList;
        }
    }
}