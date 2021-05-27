using UnityEngine;

/// <summary>
/// 数学工具
/// </summary>
public class MathUtil
{
    /**
     * 获取交点
     * @param p1 
     * @param p2 
     * @param p3 
     * @param p4 
     * @param out 
     */
    public static bool getCrossPoint(Vector2 p1, Vector2 p2, Vector2 p3, Vector2 p4, out Vector2 result)
    {
        result.x = 0;
        result.y = 0;
        float s02_x, s02_y, s10_x, s10_y, s32_x, s32_y, s_numer, t_numer, denom, t;
        s10_x = p2.x - p1.x;
        s10_y = p2.y - p1.y;
        s32_x = p4.x - p3.x;
        s32_y = p4.y - p3.y;

        denom = s10_x * s32_y - s32_x * s10_y;
        //平行或共线
        if (denom == 0)
        {
            return false;
        }
        bool denomPositive = denom > 0;

        s02_x = p1.x - p3.x;
        s02_y = p1.y - p3.y;
        s_numer = s10_x * s02_y - s10_y * s02_x;
        // 参数是大于等于0且小于等于1的，分子分母必须同号且分子小于等于分母
        if ((s_numer < 0) == denomPositive)
        {
            return false;
        }

        t_numer = s32_x * s02_y - s32_y * s02_x;
        if ((t_numer < 0) == denomPositive)
        {
            return false;
        }

        if (Mathf.Abs(s_numer) > Mathf.Abs(denom) || Mathf.Abs(t_numer) > Mathf.Abs(denom))
        {
            return false;
        }

        t = t_numer / denom;
        result.x = p1.x + (t * s10_x);
        result.y = p1.y + (t * s10_y);
        return true;
    }
}