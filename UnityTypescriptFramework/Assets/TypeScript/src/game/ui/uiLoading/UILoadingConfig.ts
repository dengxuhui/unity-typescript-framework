import {UIConfigInfo} from "../../../framework/ui/config/UIConfigs";
import {UIWindowNames} from "../../../framework/ui/config/UIWindowNames";
import {EUILayer} from "../../../framework/ui/config/UILayers";
import {UILoadingModel} from "./uiLoading/UILoadingModel";
import {UILoadingCtrl} from "./uiLoading/UILoadingCtrl";
import {UILoadingView} from "./uiLoading/UILoadingView";
import {EUIType} from "../../../framework/ui/config/EUIType";

/**
 * 通用加载界面
 */
let UILoading: UIConfigInfo = {
    name: UIWindowNames.UILoading,
    layer: EUILayer.TopLayer,
    model: UILoadingModel,
    ctrl: UILoadingCtrl,
    view: UILoadingView,
    prefabPath: "",
    components: [],
    type: EUIType.View
};

export {UILoading}