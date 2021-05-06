import EventDispatcher from "../Utils/EventDispatcher";
import {UIWindow} from "./UIWindow";

/*
* UI管理器 单例类
* */
export default class UIManager extends EventDispatcher {
    private static _instance: UIManager;
    private _windows: Map<string, UIWindow>;
    private constructor() {
        super();
        
        this._windows = new Map<string, UIWindow>();
    }

    public static GetInstance(): UIManager {
        if (!this._instance) {
            this._instance = new UIManager();
        }
        return this._instance;
    }

    private _getWindow(uiName: string):UIWindow {
        return this._windows.get(uiName);
    }

    public OpenWindow(uiName: string, args: []) {
        let window = this._getWindow(uiName);
        if(!window){
            window = new UIWindow();
            
        }
    }
}