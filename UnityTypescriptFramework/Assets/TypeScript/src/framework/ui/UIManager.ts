import EventDispatcher from "../utils/EventDispatcher";
import {ISingleton} from "../interface/ISingleton";
import {UnityEngine} from "csharp";
import {UILayers} from "./config/UILayers";
import {UIWindow} from "./UIWindow";

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
    static MaxOrderPerWindow:number = 10;
    
    //所有窗口记录
    private _allWindows: Array<UIWindow>;
    //打开中的弹窗
    private _openingDialogArray:Array<UIWindow>;
    //ui摄像机
    private _uiCamera:UnityEngine.Camera;
    // _layers
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
        this._allWindows = new Array<any>();
    }
}