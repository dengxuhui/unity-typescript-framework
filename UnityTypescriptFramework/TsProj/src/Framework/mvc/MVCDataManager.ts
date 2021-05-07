import IDestroyable from "framework/interface/IDestroyable";
import EventDispatcher from "Framework/utils/EventDispatcher";
import MVCData from "./MVCData";

/**
 * MVC数据管理对象
 */
export default class MVCDataManager implements IDestroyable {

    /**
     * Main  of mvcdata manager
     */
    private _main: EventDispatcher = null;
    /**
     * Data map of mvcdata manager
     */
    private _dataMap: Map<any, any> = null;

    constructor(main: EventDispatcher) {
        this._main = main;
        this._dataMap = new Map<any, any>();
    }

    /**
     * 释放
     */
    public destroy(): void {
        this._main = null;
        if (this._dataMap != null) {
            this._dataMap.forEach((key, value: MVCData) => {
                if (value != null) {
                    value.destroy();
                }
            });
            this._dataMap.clear();
            this._dataMap = null;
        }
    }

    /**
     * 初始
     */
    public initialize(): void {
        this._dataMap.forEach((key, value: MVCData) => {
            if (value != null) {
                value.initialize();
            }
        });
    }

    /**
     * 反初始
     */
    public uninitialize(): void {
        this._dataMap.forEach((key, value: MVCData) => {
            if (value != null) {
                value.uninitialize();
            }
        });
    }

    /**
     * 获取MVCData实例
     * @param cls MVCData子类
     * @returns 
     */
    public get<T extends MVCData>(cls: { new(): T }): T {
        if (null == this._dataMap) {
            return null;
        }
        return this._dataMap.get(cls);
    }

    /**
     * 添加数据对象
     * @param cls 
     */
    public add<T extends MVCData>(cls: { new(): T }): T {
        if (null == this._dataMap) {
            return null;
        }
        if (this._dataMap.has(cls)) {
            return this._dataMap.get(cls);
        }
        let data = new cls();
        data.assemble(this._main);
        this._dataMap.set(cls, data);
        return data;
    }
}