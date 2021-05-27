using System;
using UnityEngine;

/// <summary>
/// 颜色工具
/// </summary>
public class ColorUtil
{
    public static Color ToColor(string colorName)
    {
        colorName = colorName.Trim();
        if (colorName.Length < 6)
        {
            return Color.black; // 设为黑色
        }

        if (colorName.StartsWith("#"))
        {
            colorName = colorName.Replace("#", string.Empty);
        }

        if (colorName.Length == 6)
        {
            colorName = "FF" + colorName;
        }

        string alpha = colorName.Substring(0, 2);
        string red = colorName.Substring(2, 2);
        string green = colorName.Substring(4, 2);
        string blue = colorName.Substring(6, 2);
        byte alphaByte = Convert.ToByte(alpha, 16);
        byte redByte = Convert.ToByte(red, 16);
        byte greenByte = Convert.ToByte(green, 16);
        byte blueByte = Convert.ToByte(blue, 16);
        return new Color(redByte / 255f, greenByte / 255f, blueByte / 255f, alphaByte / 255f);
    }

    /// <summary>
    /// 解析html color
    /// </summary>
    /// <param name="htmlColor"></param>
    /// <returns></returns>
    public static Color TryParseHtmlString(string htmlColor)
    {
        Color color;
        ColorUtility.TryParseHtmlString(htmlColor, out color);
        return color;
    }
}