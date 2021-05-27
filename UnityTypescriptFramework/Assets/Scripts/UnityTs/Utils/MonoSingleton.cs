using UnityEngine;

namespace CS.Utils
{
    public abstract class MonoSingleton<T> : MonoBehaviour where T : MonoSingleton<T>
    {
        private static T m_Instance = null;

        public static T Instance
        {
            get
            {
                if (m_Instance == null)
                {
                    m_Instance = GameObject.FindObjectOfType(typeof(T)) as T;
                    if (m_Instance == null)
                    {
                        GameObject go = new GameObject(typeof(T).Name);
                        m_Instance = go.AddComponent<T>();
                        GameObject parent = GameObject.Find("Boot");
                        if (parent == null)
                        {
                            parent = new GameObject("Boot");
                            GameObject.DontDestroyOnLoad(parent);
                        }

                        if (parent != null)
                        {
                            go.transform.parent = parent.transform;
                        }
                    }
                }

                return m_Instance;
            }
        }

        /*
         * 没有任何实现的函数，用于保证MonoSingleton在使用前已创建
         */
        public void Startup()
        {
        }

        private void Awake()
        {
            if (m_Instance == null)
            {
                m_Instance = this as T;
            }

            DontDestroyOnLoad(gameObject);
            Init();
        }

        protected virtual void Init()
        {
        }

        public void DestroySelf()
        {
            Dispose();
            MonoSingleton<T>.m_Instance = null;
            UnityEngine.Object.Destroy(gameObject);
        }

        public virtual void Dispose()
        {
        }
    }
}