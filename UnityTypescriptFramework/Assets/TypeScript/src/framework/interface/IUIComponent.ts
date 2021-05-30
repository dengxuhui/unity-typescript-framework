import {IComponent} from "./IComponent";

/**
 * ui组件接口
 */
export interface IUIComponent extends IComponent{
    /**
     * 获取名字
     */
    getName():string;
}