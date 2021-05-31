import {UIWindowNames} from "../../../framework/ui/config/UIWindowNames";
import {EUILayer} from "../../../framework/ui/config/UILayers";
import {EUIType} from "../../../framework/ui/config/EUIType";
import {UIConfigInfo} from "../../../framework/ui/config/UIConfigs";
import {UIBaseComponent} from "../../../framework/ui/component/UIBaseComponent";

/**
 * 这里定义所有Home场景中使用的UI配置，
 */

let UIHome: UIConfigInfo = {
    name: UIWindowNames.UIHome,
    layer: EUILayer.NormalLayer,
    model: null,
    ctrl: null,
    view: UIBaseComponent,
    prefabPath: "",
    type: EUIType.View,
    objName: "UIHome"
};

export {
    UIHome
};