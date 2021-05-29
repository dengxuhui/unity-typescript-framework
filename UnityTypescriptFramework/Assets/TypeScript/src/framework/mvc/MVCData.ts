import IObjectable from "framework/interface/IObjectable";
import EventDispatcher from "framework/utils/EventDispatcher";

/**
 * MVC数据对象 
 */
export default class MVCData implements IObjectable {
    /**
         * MVC主对象
         */
    private _main: EventDispatcher = null;

    /**
     * 构造函数
     */
    constructor() {

    }

    /**
     * 销毁
     */
    public destroy(): void {
        this._main = null;
    }

    /**
     * 清理数据
     */
    public clear(): void {

    }

    /**
     * 部署对象
     * @param MVC主对象
     */
    public assemble(main: EventDispatcher): void {
        //MVC主对象
        this._main = main;
    }

    /**
     * 初始化
     */
    public initialize(): void {

    }

    /**
     * 反初始化
     */
    public uninitialize(): void {

    }

    /**
     * 获得消息发送对象
     * @returns 消息发送对象
     */
    protected get main(): EventDispatcher {
        return this._main;
    }
}
