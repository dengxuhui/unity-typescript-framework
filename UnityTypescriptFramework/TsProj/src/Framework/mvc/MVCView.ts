import IDestroyable from "framework/interface/IDestroyable";
import EventDispatcher from "framework/utils/EventDispatcher";
import MVCData from "./MVCData";
import MVCDataManager from "./MVCDataManager";

/**
 * MVC视图对象
 */
export default class MVCView implements IDestroyable {
    /**
     * Main  of mvcview
     */
    private _main: EventDispatcher = null;
    /**
     * Data mgr of mvcview
     */
    private _dataMgr: MVCDataManager = null;

    /**
     * 构造函数
     */
    constructor() {
    }

    /**
     * 销毁函数
     */
    public destroy(): void {
        this._dataMgr = null;
        this._main = null;
    }

    /**
     * 部署对象
     * @param MVC主对象
     * @returns 数据管理器
     */
    public assemble(main: EventDispatcher, dataMgr: MVCDataManager) {
        this._main = main;
        this._dataMgr = dataMgr;
    }

    /**
     * 获得数据对象
     * @param 数据对象类型
     * @returns 数据对象
     */
    protected getData<T extends MVCData>(cls: { new(): T; }): T {
        if (null == this._dataMgr) {
            return null;
        }

        return this._dataMgr.get<T>(cls);
    }

    /**
     * 初始化
     */
    public initialize(): void {
    }

    /**
     * 反初始化
     * @param 初始化参数
     */
    public uninitialize(): void {
    }

    /**
     * 获得消息发送对象
     * @returns 消息发送对象
     */
    public get main(): EventDispatcher {
        return this._main;
    }
}
