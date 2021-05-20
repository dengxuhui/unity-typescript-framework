using UnityEngine;
using UnityTs.Framework.Conf;
using UnityTs.Js;

namespace UnityTs
{
    /// <summary>
    /// 游戏启动脚本
    /// </summary>
    public sealed class Main : MonoBehaviour
    {
        //调试模式开关
        [SerializeField] private JsDebugger jsDebugger;

        #region unity
        //启动
        private void Start()
        {
            Config.JsDebugger = jsDebugger;
            JsManager.Instance.StartGame();
        }
        #endregion
    }
}