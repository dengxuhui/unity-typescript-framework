using System;
using System.Threading.Tasks;
using Puerts;
using UnityEngine.SceneManagement;
using UnityTs.Utils;

namespace UnityTs.Js
{
    /// <summary>
    /// js脚本管理器
    /// </summary>
    public sealed class JsManager : MonoSingleton<JsManager>
    {
        private JsEnv jsEnv = null;

        private void Update()
        {
            jsEnv?.Tick();
        }

        async Task InitJsEnv()
        {
            //调试端口：8080
            jsEnv = new JsEnv(new JsLoader(), 8080);
            jsEnv.WaitDebugger();
            jsEnv.ExecuteFile("puerts/flatbuffers.js");
            //声明Action： 值类型才需要这样添加
            jsEnv.UsingAction<float>();
            jsEnv.UsingAction<float, float>();
            jsEnv.UsingAction<string, byte[]>();
            jsEnv.UsingAction<Scene, LoadSceneMode>();
        }

        public async void StartGame()
        {
            await InitJsEnv();

            if (jsEnv != null)
            {
                try
                {
                    jsEnv.Eval(@"require('bundle')");
                }
                catch (Exception e)
                {
                    // Log.Error(LogGroups.Engine, e.ToString());
                }
            }
        }

        public async void Restart()
        {
            Dispose();

            await InitJsEnv();
            StartGame();
        }

        private void OnApplicationQuit()
        {
        }

        public override void Dispose()
        {
            base.Dispose();
            if (jsEnv != null)
            {
                jsEnv.Dispose();
                jsEnv = null;
            }
        }
    }
}