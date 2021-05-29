import EventDispatcher from "../utils/EventDispatcher";
import {ISingleton} from "../interface/ISingleton";
import {UnityEngine} from "csharp";
import {UILayers} from "./config/UILayers";

/**
 * ui管理器系统：提供UI操作，UI层级管理
 */
export default class UIManager extends EventDispatcher implements ISingleton {
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
    _allWindows: Array<any>;

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