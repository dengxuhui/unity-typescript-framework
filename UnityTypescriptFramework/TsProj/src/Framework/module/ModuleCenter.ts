import { Logger } from "Framework/utils/Logger";
import IDestroyable from "../interface/IDestroyable";
import { TimerMgr } from "../utils/timer/Timer";
import Module from "./Module";

/**
 * 模块管理中心 持有各种模块
 */
export default class ModuleCenter implements IDestroyable {
    private _modules: Map<any, any> = null;

    constructor() {
        this._modules = new Map<any, any>();
    }

    public destroy(): void {
        this._modules.clear();
        this._modules = null;
    }

    public initialize(): void {
        this._modules.forEach((key, value: Module) => {
            value.initialize();
        });
        TimerMgr.timer.frameLoop(1, this, this.update);
    }

    /**
     * 反初始化
     */
    public uninitialize(): void {
        TimerMgr.timer.clear(this, this.update);
        this._modules.forEach((key, value: Module) => {
            value.uninitialize();
        });
    }

    public update(): void {
        let delta = TimerMgr.timer.delta;
        this._modules.forEach((key, value: Module) => {
            value.update(delta);
        })
    }

    /**
     * 获取模块
     * @param cls 模块类
     * @returns 返回模块实例，如果没有模块则返回undefined
     */
    public get<T extends Module>(cls: { new(): T }): T {
        if (null == this._modules) {
            return null;
        }
        return this._modules.get(cls);
    }

    /**
     * 添加模块
     * @param cls 模块类     
     */
    public add<T extends Module>(cls: { new(): T }) {
        if (null == this._modules) {
            return;
        }
        if (this._modules.get(cls) != undefined) {
            Logger.LogErrorFormat("重复添加模块：{0}", cls.prototype.constructor.name)
            return;
        }
        this._modules.set(cls, new cls());
    }
}