using System.Collections.Generic;
using UnityEditor;
using UnityEngine;
using UnityEngine.SceneManagement;

class PickTool : EditorWindow
{
    [MenuItem("ArtHelper/PickTool")]
    static void ShowDialog()
    {
        var win = EditorWindow.GetWindow<PickTool>();
        win.Show();
    }
    Vector2 s1 = Vector2.zero;
    class FilterOption
    {
        public int heightmode = 1;//0 =custom 
        public float heightCustomMin = float.MinValue;
        public float heightCustomMax = 0.02f;

        public int gridmode = 0;//0 no grid //1 split4 //2 split 9
        public bool[,] gridtag = new bool[3, 3];
    }
    FilterOption foption = new FilterOption();
    bool singlepick = true;
    private void OnGUI()
    {
        GUILayout.Label("PickTool V0.1");
        s1 = GUILayout.BeginScrollView(s1, GUILayout.Height(300));
        {

            GUILayout.Label("==显示隐藏工具==");
            #region "show"
            GUILayout.BeginHorizontal();
            if (GUILayout.Button("全部显示"))
            {
                var picks = PickMesh_All();
                Show(picks);
            }
            if (GUILayout.Button("全部隐藏"))
            {
                var picks = PickMesh_All();
                Hide(picks);
            }
            if (GUILayout.Button("显示选中"))
            {
                var picks = PickMesh_Select();
                Show(picks);
            }
            if (GUILayout.Button("隐藏选中"))
            {
                var picks = PickMesh_Select();
                Hide(picks);
            }
            GUILayout.EndHorizontal();
            GUILayout.BeginHorizontal();
            if (GUILayout.Button("仅显示选中隐藏其它物体"))
            {
                var picks = PickMesh_Select();
                var pickall = PickMesh_All();
                Hide(pickall);
                Show(picks);
            }
            if (GUILayout.Button("仅隐藏选中显示其它物体"))
            {
                var picks = PickMesh_Select();
                var pickall = PickMesh_All();
                Show(pickall);
                Hide(picks);
            }
            GUILayout.EndHorizontal();
            #endregion
            {
                GUILayout.Label("==条件选择工具==");
                GUILayout.BeginHorizontal();
                if (GUILayout.Button("All"))
                {
                    ClearSelect();
                    var picks = PickMesh_All();
                    Select(picks);
                }
                if (GUILayout.Button("None"))
                {
                    ClearSelect();
                    var picks = PickMesh_All();
                    Selection.objects = new UnityEngine.Object[0];
                }
                if (GUILayout.Button("条件"))
                {
                    DoPick();
                }
                GUILayout.EndHorizontal();
                GUILayout.Label("  条件：按高度==");
                #region 高度
                GUILayout.BeginHorizontal();
                {
                    GUILayout.FlexibleSpace();
                    if (GUILayout.Toggle(foption.heightmode == 5, "全部高度"))
                    {
                        if (foption.heightmode != 5)
                        {
                            foption.heightmode = 5;
                            DoPick();
                        }
                    }
                    if (GUILayout.Toggle(foption.heightmode == 1, "0.02以下"))
                    {
                        if (foption.heightmode != 1)
                        {
                            foption.heightmode = 1;
                            DoPick();
                        }
                    }
                    if (GUILayout.Toggle(foption.heightmode == 2, "0.02到0.3"))
                    {
                        if (foption.heightmode != 2)
                        {
                            foption.heightmode = 2;
                            DoPick();
                        }
                    }
                    if (GUILayout.Toggle(foption.heightmode == 3, "0.3到1.1"))
                    {
                        if (foption.heightmode != 3)
                        {
                            foption.heightmode = 3;
                            DoPick();
                        }
                    }
                    if (GUILayout.Toggle(foption.heightmode == 4, "1.1以上"))
                    {
                        if (foption.heightmode != 4)
                        {
                            foption.heightmode = 4;
                            DoPick();
                        }
                    }
                    if (GUILayout.Toggle(foption.heightmode == 0, "自定义"))
                    {
                        if (foption.heightmode != 0)
                        {
                            foption.heightmode = 0;
                            DoPick();
                        }
                    }

                }
                GUILayout.EndHorizontal();
                if (foption.heightmode == 0)
                {
                    GUILayout.BeginHorizontal();
                    GUILayout.FlexibleSpace();
                    foption.heightCustomMin = EditorGUILayout.FloatField("自定义min:", foption.heightCustomMin);
                    foption.heightCustomMax = EditorGUILayout.FloatField("自定义max:", foption.heightCustomMax);
                    GUILayout.EndHorizontal();
                }
                #endregion
                GUILayout.Label("  条件：按格子==");
                #region "格子"
                GUILayout.BeginHorizontal();
                GUILayout.FlexibleSpace();
                if (GUILayout.Toggle(foption.gridmode == 0, "整体"))
                {
                    if (foption.gridmode != 0)
                    {
                        foption.gridmode = 0;
                        DoPick();
                    }
                }
                if (GUILayout.Toggle(foption.gridmode == 1, "顶面四分"))
                {
                    if (foption.gridmode != 1)
                    {
                        foption.gridmode = 1;
                        DoPick();
                    }
                }
                if (GUILayout.Toggle(foption.gridmode == 2, "顶面九分"))
                {
                    if (foption.gridmode != 2)
                    {
                        foption.gridmode = 2;
                        DoPick();
                    }
                }
                GUILayout.EndHorizontal();
                if (foption.gridmode > 0)
                {
                    GUILayout.BeginHorizontal();
                    GUILayout.FlexibleSpace();
                    if (foption.gridmode == 1)
                    {
                        GUILayout.Label("  ==2X2==", GUILayout.Width(80));
                    }
                    if (foption.gridmode == 2)
                    {
                        GUILayout.Label("  ==3X3==", GUILayout.Width(80));
                    }
                    singlepick = GUILayout.Toggle(singlepick, "单选模式", GUILayout.Width(80));
                    GUILayout.EndHorizontal();
                    for (var y = 0; y < foption.gridmode + 1; y++)
                    {
                        GUILayout.BeginHorizontal();
                        GUILayout.FlexibleSpace();
                        for (var x = 0; x < foption.gridmode + 1; x++)
                        {
                            var b = GUILayout.Toggle(foption.gridtag[x, y], "Grid", GUILayout.Width(64));
                            if (b != foption.gridtag[x, y])
                            {
                                if (singlepick)
                                {
                                    for (var _x = 0; _x < 3; _x++)
                                        for (var _y = 0; _y < 3; _y++)
                                        {
                                            foption.gridtag[_x, _y] = false;
                                        }
                                }
                                foption.gridtag[x, y] = b;
                                DoPick();
                            }
                        }
                        GUILayout.EndHorizontal();
                    }
                }
                #endregion
            }

        }
        GUILayout.TextArea("这个工具主要的功能是辅助选择，他选择的依据是MeshRenderer组件\n"
            +
            "首先将预设拖进场景,放置到0,0,0位置\n"
            +
            "高度选择是基于0，0 来做的\n"
            +
            "顶面分割是基于所有物体的位置来算的，所以有飞在地图外部的物体请删除\n"
            +
            "");
        GUILayout.EndScrollView();
    }
    void DoPick()
    {
        ClearSelect();
        var picks = PickMesh_All();
        Bounds bounds = new Bounds();
        if (foption.gridmode > 0)
        {
            if (picks.Count == 0)
            {
                Debug.LogError("找不到顶层boxcollider，不能确定，尺寸，不能切分。");
                return;
            }
            bounds = new Bounds();
            bounds.center = picks[0].transform.position;
            //var c = bounds.center;
            ////c.x *= picks[0].transform.lossyScale.x;
            ////c.z *= picks[0].transform.lossyScale.z;
            ////c = picks[0].transform.position; 
            //bounds.center = c; 
            //var s = bounds.size;
            ////s.x *= picks[0].transform.lossyScale.x;
            ////s.z *= picks[0].transform.lossyScale.z;
            //bounds.size = s; 
            for (var i = 0; i < picks.Count - 1; i++)
            {
                //var b = picks[i].bounds;
                //var cb = b.center;
                ////cb.x *= picks[i].transform.lossyScale.x;
                ////cb.z *= picks[i].transform.lossyScale.z;
                ////cb = picks[i].transform.position;
                //b.center = cb;
                //var sb = b.size;
                ////sb.x *= picks[i].transform.lossyScale.x;
                ////sb.z *= picks[i].transform.lossyScale.z;
                //b.size = sb;
                bounds.Encapsulate(picks[i].transform.position);
            }
            Debug.LogWarning("box=" + bounds.min + "---" + bounds.max);

        }
        if (foption.heightmode == 1)
        {
            FilterHeight(picks, float.MinValue, 0.02f);
        }
        else if (foption.heightmode == 2)
        {
            FilterHeight(picks, 0.02f, 0.3f);
        }
        else if (foption.heightmode == 3)
        {
            FilterHeight(picks, 0.3f, 1.1f);
        }
        else if (foption.heightmode == 4)
        {
            FilterHeight(picks, 1.1f, float.MaxValue);
        }
        else if (foption.heightmode == 0)
        {
            FilterHeight(picks, foption.heightCustomMin, foption.heightCustomMax);
        }
        else
        {

        }
        if (foption.gridmode > 0)
        {
            if (picks.Count > 0)
            {

                var center = bounds.center;
                if (foption.gridmode == 1)
                {
                    if (!foption.gridtag[0, 0])
                        FilterXZRerevt(picks, float.MinValue, center.x, center.z, float.MaxValue);
                    if (!foption.gridtag[0, 1])
                        FilterXZRerevt(picks, float.MinValue, center.x, float.MinValue, center.z);
                    if (!foption.gridtag[1, 0])
                        FilterXZRerevt(picks, center.x, float.MaxValue, center.z, float.MaxValue);
                    if (!foption.gridtag[1, 1])
                        FilterXZRerevt(picks, center.x, float.MaxValue, float.MinValue, center.z);
                }
                if (foption.gridmode == 2)
                {
                    float[] xvalues = new float[4];
                    float[] zvalues = new float[4];
                    xvalues[0] = float.MinValue;
                    xvalues[1] = bounds.min.x * (2.0f / 3.0f) + (bounds.max.x * (1.0f / 3.0f));
                    xvalues[2] = bounds.min.x * (1.0f / 3.0f) + (bounds.max.x * (2.0f / 3.0f));
                    xvalues[3] = float.MaxValue;

                    Debug.Log(bounds.min.x + "," + xvalues[1] + "," + xvalues[2] + "," + bounds.max.x);
                    zvalues[0] = float.MinValue;
                    zvalues[1] = bounds.min.z * (2.0f / 3.0f) + (bounds.max.z * (1.0f / 3.0f));
                    zvalues[2] = bounds.min.z * (1.0f / 3.0f) + (bounds.max.z * (2.0f / 3.0f));
                    zvalues[3] = float.MaxValue;
                    for (var x = 0; x < 3; x++)
                    {
                        for (var z = 0; z < 3; z++)
                        {
                            if (!foption.gridtag[x, 2 - z])
                            {
                                FilterXZRerevt(picks, xvalues[x], xvalues[x + 1], zvalues[z], zvalues[z + 1]);
                            }
                        }
                    }
                }
            }

            int gridsize = foption.gridmode + 1;

        }
        Select(picks);

    }
    BoxCollider GetRootBox(Transform t)
    {
        BoxCollider p = t.GetComponentInParent<BoxCollider>();
        if (p == null)
        {
            return t.GetComponent<BoxCollider>();
        }
        else if (t.parent == null)
        {
            return p;
        }
        else
        {
            var p2 = GetRootBox(t.parent);
            if (p2 == null)
                return p;
            else
                return p2;
        }
    }
    static void ClearSelect()
    {
        Selection.objects = new UnityEngine.Object[0];
    }
    static void Select(IList<MeshRenderer> meshes)
    {
        var objs = new List<UnityEngine.Object>(Selection.objects);
        foreach (var m in meshes)
        {
            if (objs.Contains(m.gameObject) == false)
            {
                objs.Add(m.gameObject);
            }
        }
        Selection.objects = objs.ToArray();
    }
    static void UnSelect(IList<MeshRenderer> meshes)
    {
        var objs = new List<UnityEngine.Object>(Selection.objects);
        foreach (var m in meshes)
        {
            if (objs.Contains(m.gameObject))
            {
                objs.Remove(m.gameObject);
            }
        }
        Selection.objects = objs.ToArray();

    }
    static void Active(GameObject obj, bool active, bool withParent)
    {
        obj.SetActive(active);
        if (withParent && obj.transform.parent != null)
        {
            Active(obj.transform.parent.gameObject, active, withParent);
        }
    }
    static void Show(IList<MeshRenderer> meshes)
    {
        foreach (var m in meshes)
        {
            Active(m.gameObject, true, true);
            m.enabled = true;
        }
    }
    static void Hide(IList<MeshRenderer> meshes)
    {
        foreach (var m in meshes)
        {
            Active(m.gameObject, false, false);
            m.enabled = false;
        }
    }
    static IList<MeshRenderer> PickMesh_Select()
    {
        List<MeshRenderer> ms = new List<MeshRenderer>();
        foreach (GameObject o in Selection.objects)
        {
            if (o != null)
            {
                var m = o.GetComponent<MeshRenderer>();
                if (m != null)
                {
                    ms.Add(m);
                }
            }
        }
        return ms;
    }

    static IList<MeshRenderer> PickMesh_All()
    {
        var objs = SceneManager.GetActiveScene().GetRootGameObjects();
        List<MeshRenderer> ms = new List<MeshRenderer>();
        foreach (var o in objs)
        {
            var meshes = o.GetComponents<MeshRenderer>();
            foreach (var m in meshes)
            {
                ms.Add(m);
            }
            PickMesh_Depth(o.transform, ms);
        }
        return ms;
    }
    static void FilterHeight(IList<MeshRenderer> list, float min, float max)
    {
        for (var i = list.Count - 1; i >= 0; i--)
        {
            var m = list[i];
            var v = m.bounds.max.y + m.transform.position.y;
            if (min < v && v <= max)
            {
                //ms.Add(m);
            }
            else
            {
                list.RemoveAt(i);
                continue;
            }
        }
    }
    static void FilterXZ(IList<MeshRenderer> list, float minx, float maxx, float minz, float maxz)
    {
        for (var i = list.Count - 1; i >= 0; i--)
        {
            var m = list[i];
            var vx = m.transform.position.x;
            var vz = m.transform.position.z;
            if (minx < vx && vx <= maxx && minz < vz && vz <= maxz)
            {
                //ms.Add(m);
            }
            else
            {
                list.RemoveAt(i);
                continue;
            }
        }
    }
    static void FilterXZRerevt(IList<MeshRenderer> list, float minx, float maxx, float minz, float maxz)
    {
        for (var i = list.Count - 1; i >= 0; i--)
        {
            var m = list[i];
            var vx = m.transform.position.x;
            var vz = m.transform.position.z;
            if (minx < vx && vx <= maxx && minz < vz && vz <= maxz)
            {
                list.RemoveAt(i);
                continue;
            }
            else
            {

            }
        }
    }
    static void PickMesh_Depth(Transform tran, IList<MeshRenderer> list)
    {
        foreach (Transform t in tran)
        {
            var meshes = t.gameObject.GetComponents<MeshRenderer>();
            foreach (var m in meshes)
            {
                list.Add(m);
            }
            PickMesh_Depth(t, list);
        }
    }
}

