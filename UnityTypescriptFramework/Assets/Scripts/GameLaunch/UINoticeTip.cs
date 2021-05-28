using System;
using System.Collections;
using UnityEngine;
using UnityEngine.UI;
using Logger = CS.Logger;


/// <summary>
/// 启动期间的功能弹窗 TODO：删除单例
/// </summary>
public class UINoticeTip : MonoSingleton<UINoticeTip>
{
    GameObject go;
    Text titleText;
    Text noticeText;
    Text buttonOneText;
    Text buttonTwoText;
    Text buttonThreeText;
    Button buttonOne;
    Button buttonTwo;
    Button buttonThree;
    GameObject buttonOneGo;
    GameObject buttonTwoGo;
    GameObject buttonThreeGo;

    static public int LastClickIndex
    {
        get;
        protected set;
    }
    
    public bool IsShowing
    {
        get;
        protected set;
    }

    public GameObject UIGameObject
    {
        get => go;
        set
        {
            if (value != go)
            {
                go = value;
                InitGo(go);
            }
        }
    }

    private void InitGo(GameObject go)
    {
        if (go == null)
        {
            return;
        }

        titleText = go.transform.Find("BgRoot/BgParent/m_WinTitle").GetComponent<Text>();
        noticeText = go.transform.Find("ContentRoot/m_NoticeInfo").GetComponent<Text>();
        buttonOneText = go.transform.Find("ContentRoot/ButtonOne/Button/m_text").GetComponent<Text>();
        buttonTwoText = go.transform.Find("ContentRoot/ButtonTwo/Button/m_text").GetComponent<Text>();
        buttonThreeText = go.transform.Find("ContentRoot/ButtonThree/Button/m_text").GetComponent<Text>();

        buttonOneGo = go.transform.Find("ContentRoot/ButtonOne").gameObject;
        buttonTwoGo = go.transform.Find("ContentRoot/ButtonTwo").gameObject;
        buttonThreeGo = go.transform.Find("ContentRoot/ButtonThree").gameObject;
        buttonOne = go.transform.Find("ContentRoot/ButtonOne/Button").GetComponent<Button>();
        buttonTwo = go.transform.Find("ContentRoot/ButtonTwo/Button").GetComponent<Button>();
        buttonThree = go.transform.Find("ContentRoot/ButtonThree/Button").GetComponent<Button>();

        ResetView(IsShowing);
    }
    
    private void ResetView(bool isShow)
    {
        IsShowing = isShow;
        if (isShow)
        {
            LastClickIndex = -1;
        }

        if (go != null)
        {
            go.SetActive(isShow);
            buttonOneGo.SetActive(false);
            buttonTwoGo.SetActive(false);
            buttonThreeGo.SetActive(false);
            buttonOne.onClick.RemoveAllListeners();
            buttonTwo.onClick.RemoveAllListeners();
            buttonThree.onClick.RemoveAllListeners();
        }
    }

    void BindCallback(int index, Button button, Action callback)
    {
        button.onClick.AddListener(() =>
        {
            callback?.Invoke();
            LastClickIndex = index;
            ResetView(false);
        });
    }
    
    public void ShowOneButtonTip(string title, string content, string btnText, Action callback)
    {
        if (go == null)
        {
            Logger.LogError("You should set UIGameObject first!");
            return;
        }

        ResetView(true);
        buttonTwoGo.SetActive(true);

        titleText.text = title;
        noticeText.text = content;
        buttonTwoText.text = btnText;
        BindCallback(0, buttonTwo, callback);
    }

    public void ShowTwoButtonTip(string title, string content, string btnText1, string btnText2, Action callback1, Action callback2)
    {
        if (go == null)
        {
            Logger.LogError("You should set UIGameObject first!");
            return;
        }

        ResetView(true);
        buttonOneGo.SetActive(true);
        buttonThreeGo.SetActive(true);

        titleText.text = title;
        noticeText.text = content;
        buttonOneText.text = btnText1;
        buttonThreeText.text = btnText2;

        BindCallback(0, buttonOne, callback1);
        BindCallback(1, buttonThree, callback2);
    }

    public void ShowThreeButtonTip(string title, string content, string btnText1, string btnText2, string btnText3, Action callback1, Action callback2, Action callback3)
    {
        if (go == null)
        {
            Logger.LogError("You should set UIGameObject first!");
            return;
        }

        ResetView(true);
        buttonOneGo.SetActive(true);
        buttonTwoGo.SetActive(true);
        buttonThreeGo.SetActive(true);

        titleText.text = title;
        noticeText.text = content;
        buttonOneText.text = btnText1;
        buttonTwoText.text = btnText2;
        buttonThreeText.text = btnText3;

        BindCallback(0, buttonOne, callback1);
        BindCallback(1, buttonTwo, callback2);
        BindCallback(2, buttonThree, callback3);
    }

    public void HideTip()
    {
        if (go != null)
        {
            go.SetActive(false);
        }
    }

    public IEnumerator WaitForResponse()
    {
        yield return new WaitUntil(() => LastClickIndex != -1);
    }
    
    public float progress => 0.0f;

    public bool isDone => go != null && (LastClickIndex != -1);

    public override void Dispose()
    {
        if (go != null)
        {
            Destroy(go);
        }

        base.Dispose();
    }
}
