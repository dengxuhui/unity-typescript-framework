using UnityEngine;
using UnityTs.Js;

namespace UnityTs
{
    /// <summary>
    /// 游戏启动脚本
    /// </summary>
    public sealed class Main : MonoBehaviour
    {
        private void Start()
        {
            JsManager.Instance.StartGame();
        }
    }
}