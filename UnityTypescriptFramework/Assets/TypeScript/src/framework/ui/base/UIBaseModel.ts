/**
 * ui数据基类
 */
import EventDispatcher from "../../utils/EventDispatcher";
import {UIWindowNames} from "../config/UIWindowNames";
import IDestroyable from "../../interface/IDestroyable";
import {IComponent} from "../../interface/IComponent";

export default class UIBaseModel implements IDestroyable, IComponent {
    /**
     * ui内部之间的事件传递
     */
    _main: EventDispatcher;
    /**
     * ui名字
     */
    _uiName: UIWindowNames;

    constructor(main: EventDispatcher, uiName: UIWindowNames) {
        this._main = main;
        this._uiName = uiName;
        this.onCreate();
    }

    destroy(): void {
        this.onDestroy();
        this._main.offAllCaller(this);
        this._main = null;
        this._uiName = null;
    }

    onCreate() {
    }
    
    onDestroy(): void {
        
    }

    onEnable(): void {
    }
    
    onDisable(): void {
    }
}