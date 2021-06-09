import {IModule} from "../interface/IModule";
import EventDispatcher from "../utils/EventDispatcher";
import {CS} from "csharp";

/**
 * 模块基类
 * @author by dengxuhui 
 * @create time 2021/6/9 11:38
**/
export class BaseModule extends EventDispatcher implements IModule {
    /**
     * 是否可更新
     */
    protected _updatable:boolean = true;
    
    public onAdd(): void {
        this.onAddListener();
    }

    public onRemove(): void {
        this.onRemoveListener();
    }

    public onAddListener(): void {

    }

    public onRemoveListener(): void {
        
    }
    
    public setUpdatable(value: boolean): void {
        
    }

    /**
     * 获取是否可更新
     */
    public getUpdatable(): boolean {
        return this._updatable;
    }

    public onUpdate(): void {
        CS.Logger.LogError("please override BaseModule::update function");
    }
}

/**
 * 类型构造器
 */
export interface IBaseModuleCtor {
    new():IModule;
}