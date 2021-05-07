import IDestroyable from "framework/interface/IDestroyable";
import EventDispatcher from "Framework/utils/EventDispatcher";
import MVCControl from "./MVCControl";
import MVCDataManager from "./MVCDataManager";
import MVCViewManager from "./MVCViewManager";

/**
 * MVC控制器管理器对象
 */
export default class MVCControlManager implements IDestroyable {
    /**
         * MVC主对象
         */
    private _main: EventDispatcher = null;
    /**
     * 数据管理器
     */
    private _dataMgr: MVCDataManager = null;
    /**
     * 视图管理器
     */
    private _viewMgr: MVCViewManager = null;
    /**
     * 控制器管理器
     */
    private _controlMgr: MVCControlManager = null;

    /**
     * 控制器对象映射表
     */
    private _controlMap: Map<any, any> = null;

    /**
     * 构造函数
     */
    public constructor(main: EventDispatcher, dataMgr: MVCDataManager, viewMgr: MVCViewManager) {
        //MVC主对象
        this._main = main;
        //数据管理器
        this._dataMgr = dataMgr;
        //视图管理器
        this._viewMgr = viewMgr;
        //控制器对象映射表
        this._controlMap = new Map<any, any>();
    }

    /**
     * 销毁函数
     */
    public destroy(): void {
        //MVC主对象
        this._main = null;
        //数据管理器
        this._dataMgr = null;
        //视图管理器
        this._viewMgr = null;

        this._controlMap.forEach((key: any, value: MVCControl) => {
            if (value != null) {
                value.destroy();
            }
        });
        this._controlMap.clear();
        this._controlMap = null;
    }

    /**
     * 初始化
     */
    public initialize(): void {
        this._controlMap.forEach((key: any, value: MVCControl) => {
            if (value != null) {
                value.initialize();
            }
        });
    }

    /**
     * 反初始化
     * @param 初始化参数
     */
    public uninitialize(): void {
        this._controlMap.forEach((key: any, value: MVCControl) => {
            if (value != null) {
                value.uninitialize();
            }
        });
    }

    /**
     * 更新
     * @param deltaTime 两帧之间的时间间隔,单位毫秒
     */
    public update(deltaTime: number): void {
        this._controlMap.forEach((key: any, value: MVCControl) => {
            if (value != null) {
                value.update(deltaTime);
            }
        });
    }

    /**
     * 获得控制器对象
     * @param 控制器对象类型
     * @returns 控制器对象
     */
    public get<T extends MVCControl>(cls: { new(): T; }): T {
        if (null == this._controlMap) {
            return null;
        }

        return this._controlMap.get(cls);
    }

    /**
     * 添加控制器对象
     * @param 控制器对象类型
     * @returns 控制器对象
     */
    public add<T extends MVCControl>(cls: { new(): T; }): T {
        if (null == this._controlMap) {
            return null;
        }

        //查询是否已经存在
        if (this._controlMap.has(cls)) {
            return this._controlMap.get(cls);
        }

        //创建对象
        let ctrl: T = new cls();
        ctrl.assemble(this._main, this._dataMgr, this._viewMgr);
        this._controlMap.set(cls, ctrl);
        return ctrl;
    }
}