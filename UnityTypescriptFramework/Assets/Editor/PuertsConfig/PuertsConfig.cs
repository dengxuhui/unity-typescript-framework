using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Reflection.Emit;
using AssetBundles;
using CS;
using Puerts;
using TMPro;
using UnityEngine;
using UnityEngine.Events;
using UnityEngine.EventSystems;
using UnityEngine.SceneManagement;
using UnityEngine.UI;
using Logger = CS.Logger;
using Object = UnityEngine.Object;

//1、配置类必须打[Configure]标签
//2、必须放Editor目录
[Configure]
public class PuertsConfig
{
    [Binding]
    static IEnumerable<Type> Bindings
    {
        get
        {
            var list = new List<Type>()
            {
                typeof(Debug),
                typeof(Vector3),
                typeof(Vector2),
                typeof(List<int>),
                //typeof(Dictionary<string, int>),
                typeof(Time),
                typeof(Transform),
                typeof(Component),
                typeof(GameObject),
                typeof(Object),
                typeof(Delegate),
                typeof(System.Object),
                typeof(Type),
                typeof(ParticleSystem),
                typeof(Canvas),
                typeof(CanvasGroup),
                typeof(RenderMode),
                typeof(Behaviour),
                typeof(MonoBehaviour),

                typeof(RectTransform),
                typeof(UIBehaviour),
                typeof(Selectable),
                typeof(Button),
                typeof(Button.ButtonClickedEvent),
                typeof(UnityEvent),
                typeof(InputField),
                typeof(Slider),
                typeof(Toggle),
                typeof(Toggle.ToggleEvent),
                typeof(ScrollRect),
                typeof(CanvasScaler),
                typeof(GraphicRaycaster),
                typeof(UnityEvent<bool>),
                typeof(Resources),
                typeof(Application),
                typeof(TextAsset),
                typeof(TMP_Text),
                typeof(MonoSingleton<AssetBundleManager>),
                typeof(PlayerPrefs),

                typeof(SceneManager),
                typeof(Scene),
                typeof(LoadSceneMode),
                typeof(AsyncOperation),

                typeof(JsManager),
                typeof(GameLaunch),
                typeof(Logger),
                typeof(AssetBundleManager),
                typeof(BaseAssetAsyncLoader),
                typeof(ResourceAsyncOperation),
            };

            List<string> namespaces = new List<string>()
            {
            };

            Assembly[] ass = AppDomain.CurrentDomain.GetAssemblies();
            list.AddRange((from assembly in ass
                where !(assembly.ManifestModule is ModuleBuilder)
                from type in assembly.GetExportedTypes()
                where type.Namespace != null && namespaces.Contains(type.Namespace) && !isExcluded(type)
                      && type.BaseType != typeof(MulticastDelegate) && !type.IsEnum
                select type));
            return list;
        }
    }

    static bool isExcluded(Type type)
    {
        return false;
    }

    [BlittableCopy]
    static IEnumerable<Type> Blittables
    {
        get
        {
            return new List<Type>()
            {
                //打开这个可以优化Vector3的GC，但需要开启unsafe编译
                //typeof(Vector3),
            };
        }
    }

    [Filter]
    static bool Filter(MemberInfo memberInfo)
    {
        return memberInfo.Name == "runInEditMode" ||
               memberInfo.Name == "get_runInEditMode" ||
               memberInfo.Name == "set_runInEditMode";
    }
}