using System;
using System.Collections;
using CS.Framework.Conf;
using UnityEngine;

namespace CS
{
    /// <summary>
    /// 游戏全局入口
    /// </summary>
    public class GameLaunch : MonoBehaviour
    {
        //调试模式开关
        [SerializeField] private JsDebugger jsDebugger;
        
        /// <summary>
        /// 启动
        /// </summary>
        /// <returns></returns>
        IEnumerator Start()
        {
            //帧率设置
            Application.targetFrameRate = 60;
            //js调试器模式
            Config.JsDebugger = jsDebugger;
            
            LoggerHelper.Instance.Startup();
            
            var start = DateTime.Now;
            //js管理器启动
            JsManager.Instance.StartGame();
            yield break;
        }
    }
}