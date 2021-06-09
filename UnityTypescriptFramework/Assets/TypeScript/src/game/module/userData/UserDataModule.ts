import {BaseModule} from "../../../framework/module/BaseModule";
import {ModuleCenter} from "../../../framework/module/ModuleCenter";

/**
 * 玩家数据模块
 * @author by dengxuhui
 * @create time 2021/6/9 13:58
 **/
export class UserDataModule extends BaseModule {

    /**
     * 获取实例
     * @constructor
     */
    public static get Instance(): UserDataModule {
        return ModuleCenter.Instance.get(UserDataModule);
    }
    
    public onAdd(): void {
        super.onAdd();
    }
    
    public onRemove(): void {
        super.onRemove();
    }
    
    public onAddListener(): void {
        super.onAddListener();
    }
    
    public onRemoveListener(): void {
        super.onRemoveListener();
    }
}