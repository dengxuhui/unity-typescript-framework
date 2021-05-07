import EventDispatcher from "../Utils/EventDispatcher";
import { UIWindow } from "./UIWindow";

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

    //--------------------------static---------------------//

    public static get instance(): UIManager {
        if (!this._instance) {
            this._instance = new UIManager();
        }
        return this._instance;
    }

    //--------------------------private---------------------//

    private _getWindow(uiName: string): UIWindow {
        return this._windows.get(uiName);
    }

    /**
     * 创建新的窗体
     * @param uiName 
     * @returns 
     */
    private _createWindow(uiName: string): UIWindow {
        let window = new UIWindow();
        return window;
    }

    //--------------------------public---------------------//

    public openWindow(uiName: string, args: []) {
        let window = this._getWindow(uiName);
        if (!window) {
            window = this._createWindow(uiName);
        }
    }
}