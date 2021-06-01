import {CS} from "csharp";
import {UIWindowNames} from "./UIWindowNames";
import {EUILayer} from "./UILayers";
import {EUIType} from "./EUIType";
import {IUIBaseCtrlCtor} from "../base/UIBaseCtrl";
import {IUIBaseModelCtor} from "../base/UIBaseModel";
import {IUIBaseViewCtor} from "../base/UIBaseView";

/**
 * 所有模块
 */
let UIModule = {
    UIHome: require("../../../game/ui/uiHome/UIHomeConfig"),
    UIBattle: require("../../../game/ui/uiBattle/UIBattleConfig"),
};

/**
 * ui配置结构体
 */
export class UIConfigInfo {
    /**
     * ui名
     */
    name: UIWindowNames;
    /**
     * 层级
     */
    layer: EUILayer;
    /**
     * 数据类
     */
    model: IUIBaseModelCtor;
    /**
     * 控制器类
     */
    ctrl: IUIBaseCtrlCtor;
    /**
     * 视图类
     */
    view: IUIBaseViewCtor;
    /**
     * prefab路径集合
     */
    prefabPath:string;
    /**
     * 预加载prefabs路径
     */
    components:Array<string>;
    /**
     * ui类型
     */
    type: EUIType;
    /**
     * ui对象在场景中的名字
     */
    objName: string;
}

let UIConfigs: Map<UIWindowNames, UIConfigInfo> = new Map<UIWindowNames, UIConfigInfo>();
for (let moduleName in UIModule) {
    let module = UIModule[moduleName];
    for (let cfgName in module) {
        let config: UIConfigInfo = module[cfgName];
        if (UIConfigs[config.name] != null) {
            CS.Logger.LogError("Already exist ::" + cfgName);
        }
        UIConfigs[config.name] = config;
    }
}

export {UIConfigs}