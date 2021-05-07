import IDestroyable from "framework/interface/IDestroyable";
import EventDispatcher from "Framework/utils/EventDispatcher";
import MVCDataManager from "./MVCDataManager";
import MVCView from "./MVCView";

/**
 * 视图管理器
 */
export default class MVCViewManager implements IDestroyable {
    /**
     * Main  of mvcview manager
     */
    private _main: EventDispatcher = null;
    /**
     * Data mgr of mvcview manager
     */
    private _dataMgr: MVCDataManager = null;
    /**
     * View map of mvcview manager
     */
    private _viewMap: Map<any, any> = null;

    /**
     * 构造函数
     * @param main 
     * @param dataMgr 
     */
    constructor(main: EventDispatcher, dataMgr: MVCDataManager) {
        this._main = main;
        this._dataMgr = dataMgr;
        this._viewMap = new Map<any, any>();
    }

    /**
     * 释放
     */
    public destroy(): void {
        this._main = null;
        this._dataMgr = null;
        if (this._viewMap != null) {
            this._viewMap.forEach((key, value: MVCView) => {
                if (value != null) {
                    value.destroy();
                }
            });
            this._viewMap.clear();
            this._viewMap = null;
        }
    }

    /**
     * 初始
     */
    public initialize(): void {
        this._viewMap.forEach((key, value: MVCView) => {
            if (value != null) {
                value.initialize();
            }
        });
    }

    public uninitialize(): void {
        this._viewMap.forEach((key, value: MVCView) => {
            if (value != null) {
                value.uninitialize();
            }
        });
    }

    /**
     * 获取MVCView实例
     * @param cls 
     */
    public get<T extends MVCView>(cls: { new(): T }): T {
        if (null == this._viewMap) {
            return null;
        }
        return this._viewMap.get(cls);
    }

    /**
     * 添加MVCView，并实例化
     * @param cls 
     */
    public add<T extends MVCView>(cls: { new(): T }): T {
        if (null == this._viewMap) {
            return null;
        }
        if (this._viewMap.has(cls)) {
            return this._viewMap.get(cls);
        }
        let view = new cls();
        view.assemble(this._main, this._dataMgr);
        this._viewMap.set(cls, view);
        return view;
    }
}