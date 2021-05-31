import {UIConfigInfo} from "../../../framework/ui/config/UIConfigs";
import {UIWindowNames} from "../../../framework/ui/config/UIWindowNames";
import {EUILayer} from "../../../framework/ui/config/UILayers";
import {UIBaseComponent} from "../../../framework/ui/component/UIBaseComponent";
import {EUIType} from "../../../framework/ui/config/EUIType";

let UIBattleMain: UIConfigInfo = {
    name: UIWindowNames.UIBattleMain,
    layer: EUILayer.NormalLayer,
    model: null,
    ctrl: null,
    view: UIBaseComponent,
    prefabPath: "",
    type: EUIType.View,
    objName: "UIBattleMain",
};

export {
    UIBattleMain
};