import {UIWindowNames} from "./config/UIWindowNames";
import UIBaseModel from "./base/UIBaseModel";
import UIBaseCtrl from "./base/UIBaseCtrl";
import {EUIType} from "./config/EUIType";
import {EUILayer} from "./config/UILayers";
import {UIBaseView} from "./base/UIBaseView";
import EventDispatcher from "../utils/EventDispatcher";
import {EUIState} from "./config/EUIState";

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
    layer:EUILayer = EUILayer.BackgroundLayer;
    /**
     * 数据
     */
    model:UIBaseModel;
    /**
     * 控制器
     */
    ctrl:UIBaseCtrl;
    /**
     * 界面
     */
    view:UIBaseView;
    /**
     * 事件句柄
     */
    eventHandle:EventDispatcher;
    /**
     * 预设路径
     */
    prefabPath:string = "";
    /**
     * ui类型
     */
    type:EUIType;
    /**
     * 状态
     */
    state:EUIState = EUIState.None;
}