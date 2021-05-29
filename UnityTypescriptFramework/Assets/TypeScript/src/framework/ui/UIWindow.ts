import {UIWindowNames} from "./config/UIWindowNames";
import UIBaseModel from "./base/UIBaseModel";
import UIBaseCtrl from "./base/UIBaseCtrl";
import {EUIType} from "./config/EUIType";
import {EUILayer} from "./config/UILayers";

/**
 * 窗口包装器
 */
export class UIWindow {
    /**
     * ui名
     */
    name:UIWindowNames;
    /**
     * 层级
     */
    layer:EUILayer.NormalLayer;
    /**
     * 数据
     */
    model:UIBaseModel;
    /**
     * 控制器
     */
    ctrl:UIBaseCtrl;
    /**
     * 预设路径
     */
    prefabPath:string = "";
    /**
     * ui类型
     */
    type:EUIType;
}