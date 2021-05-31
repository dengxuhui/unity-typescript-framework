import EventDispatcher from "../utils/EventDispatcher";
import {ISingleton} from "../interface/ISingleton";
import {UnityEngine} from "csharp";
import {EUILayer, UILayerInfo, UILayers} from "./config/UILayers";
import {UIWindow} from "./UIWindow";
import {UILayer} from "./component/UILayer";
import {$typeof} from "puerts";
import Handler from "../utils/Handler";
import {UIWindowNames} from "./config/UIWindowNames";
import {EUIState} from "./config/EUIState";
import {UIConfigs} from "./config/UIConfigs";

/**
 * ui管理器系统：提供UI操作，UI层级管理
 */
export default class UIManager extends EventDispatcher implements ISingleton {
    get uiCamera(): UnityEngine.Camera {
        return this._uiCamera;
    }

    public static Instance: UIManager = new UIManager();
    //ui场景根目录
    static UIRootPath: string = "UIRoot";
    //事件路径
    static EventSystemPath: string = "EventSystem";
    //camera路径
    static UICameraPath = UIManager.UIRootPath + "/UICamera";
    //分辨率
    static Resolution = new UnityEngine.Vector2(750, 1334);
    //窗口最大可使用的相对order_in_layer
    static MaxOrderPerWindow: number = 10;

    //所有窗口记录
    private _allWindows: Map<UIWindowNames, UIWindow>;
    //打开中的弹窗
    private _openingDialogs: Map<UIWindowNames, UIWindow>;
    //ui摄像机
    private _uiCamera: UnityEngine.Camera;
    //层级map
    private _layerMap: Map<EUILayer, UILayer>;
    //根节点obj
    private _gameObject: UnityEngine.GameObject;
    //根节点trans
    private _transform: UnityEngine.Transform;

    /**
     * 密封构造函数
     */
    private constructor() {
        super();
    }

    /**
     * 初始化
     */
    public initialize(): void {
        UILayers.set();
        this._allWindows = new Map<UIWindowNames, UIWindow>();
        this._openingDialogs = new Map<UIWindowNames, UIWindow>();
        this._layerMap = new Map<EUILayer, UILayer>();
        this._gameObject = UnityEngine.GameObject.Find(UIManager.UIRootPath);
        this._transform = this._gameObject.transform;
        let cameraRoot = UnityEngine.GameObject.Find(UIManager.UICameraPath);
        this._uiCamera = cameraRoot.GetComponent($typeof(UnityEngine.Camera)) as UnityEngine.Camera;
        UnityEngine.Object.DontDestroyOnLoad(this._gameObject);
        let eventSys = UnityEngine.GameObject.Find(UIManager.EventSystemPath);
        UnityEngine.Object.DontDestroyOnLoad(eventSys);
        UILayers.walk(Handler.create(this, (layer_info: UILayerInfo) => {
            let go = new UnityEngine.GameObject(layer_info.name);
            let trans = go.transform;
            trans.SetParent(this._transform);
            let newLayer = new UILayer(this, layer_info.name);
            newLayer.onCreate(layer_info);
            this._layerMap.set(layer_info.type, newLayer);
        }, null, false));
    }

    /**
     * 获取层级
     * @param layer
     */
    public getLayer(layer: EUILayer) {
        return this._layerMap.get(layer);
    }

    /**
     * 获取ui状态
     * @param uiName
     */
    public getWindowState(uiName: UIWindowNames) {
        let window = this._allWindows.get(uiName);
        if (window == null) {
            return EUIState.None;
        } else {
            return window.state;
        }
    }

    /**
     * 打开界面
     * @param uiName 界面名
     * @param args 参数列表
     */
    public openWindow(uiName: UIWindowNames, ...args: any[]): boolean {
        let cur_state = this.getWindowState(uiName);
        // 还没有记录就是不存在
        if (cur_state == EUIState.None) {
            let window = new UIWindow();
            this._allWindows.set(uiName, window);
            this.initWindow(uiName, window);
        } else if (cur_state == EUIState.Loading || cur_state == EUIState.Opening) {
            return false;
        }
        let window = this._allWindows.get(uiName);

        return true;
    }

    //-------------------------------private----------------------

    /**
     * 初始化界面
     * @param uiName
     * @param window
     */
    private initWindow(uiName: UIWindowNames, window: UIWindow) {
        window.state = EUIState.Initing;
    }

    private innerCloseWindow() {

    }

    private innerOpenWindow() {

    }

    private activateWindow() {

    }

    private deactivateWindow(window: UIWindow) {
    }
}