using UnityEngine;

/**
 * refer: https://github.com/Aaaaaaaty/bezierMaker.js
 */
public class BezierMaker
{
    /** 控制点 */
    private Vector3[] _ctrlNodes;

    /**
     * 构造
     * @param ctrlNodes: 控制点数组
     */
    public BezierMaker(Vector3[] ctrlNodes)
    {
        _ctrlNodes = ctrlNodes;
    }

    /**
     * 获取制定进度对应的点
     * @param progress: [0,1]贝塞尔进度
     */
    public Vector3 Bezier(float progress)
    {
        if (progress <= 0)
        {
            return _ctrlNodes[0];
        }

        if (progress >= 1)
        {
            return _ctrlNodes[_ctrlNodes.Length - 1];
        }

        float x = 0;
        float y = 0;
        float z = 0;
        var n = _ctrlNodes.Length - 1;
        for (var index = 0; index < _ctrlNodes.Length; ++index)
        {
            var item = _ctrlNodes[index];
            if (index == 0)
            {
                x += item.x * Mathf.Pow((1f - progress), n - index) * Mathf.Pow(progress, index);
                y += item.y * Mathf.Pow((1f - progress), n - index) * Mathf.Pow(progress, index);
                z += item.z * Mathf.Pow((1f - progress), n - index) * Mathf.Pow(progress, index);
            }
            else
            {
                var ratio = Factorial(n) / Factorial(index) / Factorial(n - index) *
                            Mathf.Pow((1 - progress), n - index) * Mathf.Pow(progress, index);
                x += item.x * ratio;
                y += item.y * ratio;
                z += item.z * ratio;
            }
        }

        return new Vector3(x, y, z);
    }

    /**
     * 递归阶乘
     */
    private float Factorial(float num)
    {
        if (num <= 1)
        {
            return 1;
        }
        else
        {
            return num * Factorial(num - 1);
        }
    }
}