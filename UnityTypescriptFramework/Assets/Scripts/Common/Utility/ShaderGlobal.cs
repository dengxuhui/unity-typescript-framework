using UnityEngine;

public class ShaderGlobal : MonoBehaviour
{
    private void Update()
    {
        Shader.SetGlobalFloat("_UnscaledTime", Time.unscaledTime);
    }
}