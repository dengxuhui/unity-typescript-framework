using System.Threading.Tasks;
using Puerts;
using UnityEngine.SceneManagement;
using UnityTs.Framework.Conf;

namespace UnityTs.Js
{
    /// <summary>
    /// js脚本管理器
    /// </summary>
    public sealed class JsManager : MonoSingleton<JsManager>
    {
        //js环境
        private JsEnv jsEnv = null;

        #region unity

        private void Update()
        {
            jsEnv?.Tick();
        }

        #endregion

        #region private

        //初始化js环境
        private async Task InitJsEnv()
        {
            if (Config.JsDebugger == JsDebugger.Block)
            {
                jsEnv = new JsEnv(new JsLoader(), 8080);
                jsEnv.WaitDebugger();
            }
            else if (Config.JsDebugger == JsDebugger.Async)
            {
                jsEnv = new JsEnv(new JsLoader(), 8080);
                await jsEnv.WaitDebuggerAsync();
            }
            else
            {
                jsEnv = new JsEnv(new JsLoader());
            }

            jsEnv.ExecuteFile("puerts/flatbuffers.js");
            //声明Action： 值类型才需要这样添加
            jsEnv.UsingAction<float>();
            jsEnv.UsingAction<float, float>();
            jsEnv.UsingAction<string, byte[]>();
            jsEnv.UsingAction<Scene, LoadSceneMode>();
        }

        #endregion

        #region public

        /// <summary>
        /// 启动
        /// </summary>
        /// <param name="debug"></param>
        public async void StartGame()
        {
            await InitJsEnv();
            jsEnv?.Eval(@"require('bundle')");
        }

        /// <summary>
        /// 重启
        /// </summary>
        public async void Restart()
        {
            Dispose();
            await InitJsEnv();
            StartGame();
        }

        /// <summary>
        /// 释放
        /// </summary>
        public override void Dispose()
        {
            if (jsEnv != null)
            {
                jsEnv.Dispose();
                jsEnv = null;
            }

            base.Dispose();
        }

        #endregion
    }
}