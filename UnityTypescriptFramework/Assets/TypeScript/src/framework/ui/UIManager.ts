import EventDispatcher from "../utils/EventDispatcher";
import {ISingleton} from "../interface/ISingleton";

/**
 * ui管理器系统：提供UI操作，UI层级管理
 */
export default class UIManager extends EventDispatcher implements ISingleton{
    public static Instance:UIManager = new UIManager();
    //ui场景根目录
    static UIRootPath: string = "UIRoot";
    //事件路径
    static EventSystemPath: string = "EventSystem";

    //所有窗口记录
    allWindows:Array<any>;
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
        
    }
}