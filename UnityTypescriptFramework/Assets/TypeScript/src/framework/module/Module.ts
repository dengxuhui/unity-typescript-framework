import EventDispatcher from "../utils/EventDispatcher";
import IDestroyable from "../interface/IDestroyable";

export default class Module extends EventDispatcher implements IDestroyable {
    /**
     * 构造函数
     */
    constructor() {
        super();
    }

    /**
     * 销毁
     */
    public destroy(): void {

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
     * 更新
     * @param deltaTime 两帧之间的时间间隔,单位毫秒
     */
    public update(deltaTime: number): void {

    }
}