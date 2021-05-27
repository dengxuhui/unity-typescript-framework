using System.Collections;
using UnityEngine;
using UnityEngine.UI;

/// <summary>
/// 序列帧动画
/// </summary>
public class FrameSequenceAnim : MonoBehaviour
{
    [SerializeField] private Sprite[] _sprites;

    /// <summary>
    /// 开始
    /// </summary>
    void Start()
    {
        StartCoroutine(Play());
    }

    IEnumerator Play()
    {
        var image = GetComponent<Image>();
        if (image == null)
        {
           yield break;
        }
        
        var interval = new WaitForSecondsRealtime(0.1f);
        var count = _sprites.Length;
        var i = 0;
        while (true)
        {
            image.sprite = _sprites[i];
            
            i = (++i) % count;
            yield return interval;
        }        
    }
}