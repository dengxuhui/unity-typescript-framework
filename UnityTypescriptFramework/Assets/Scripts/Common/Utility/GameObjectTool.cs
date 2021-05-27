using UnityEngine;


/// <summary>
/// 游戏对象工具
/// </summary>
public class GameObjectTool
{
    /// <summary>
    /// 实例化
    /// </summary>
    /// <param name="url"></param>
    /// <returns></returns>
    public static GameObject Instantiate(string url)
    {
        var templateObject = Resources.Load<GameObject>(url);
        if (null == templateObject)
        {
            return null;
        }

        var gameObject = GameObject.Instantiate(templateObject);
        if (null == gameObject)
        {
            return null;
        }

        GameObject.DontDestroyOnLoad(gameObject);
        return gameObject;
    }

    /// <summary>
    /// 查询指定节点的子节点
    /// </summary>
    /// <param name="gameobject">父节点</param>
    /// <param name="url">相对于父节点的url</param>
    /// <returns>子节点</returns>
    public static GameObject Find(GameObject parent, string url)
    {
        if (null == parent ||
            null == parent.transform)
        {
            return null;
        }

        var names = url.Split('/');
        if (names.Length == 0)
        {
            return parent;
        }

        if (names.Length == 1)
        {
            var target = parent.transform.Find(names[0]);
            return target == null ? null : target.gameObject;
        }

        var cur = parent.transform;
        foreach (var name in names)
        {
            cur = cur.transform.Find(name);
        }

        return null == cur ? null : cur.gameObject;
    }
}