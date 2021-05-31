import {UIConfigInfo} from "../../../framework/ui/config/UIConfigs";
import {UIWindowNames} from "../../../framework/ui/config/UIWindowNames";
import {EUILayer} from "../../../framework/ui/config/UILayers";
import {EUIType} from "../../../framework/ui/config/EUIType";
import {UIBattleModel} from "./uiBattle/UIBattleModel";
import {UIBattleCtrl} from "./uiBattle/UIBattleCtrl";
import {UIBattleView} from "./uiBattle/UIBattleView";

let UIBattleMain: UIConfigInfo = {
    name: UIWindowNames.UIBattleMain,
    layer: EUILayer.NormalLayer,
    model: UIBattleModel,
    ctrl: UIBattleCtrl,
    view: UIBattleView,
    prefabPath: "",
    type: EUIType.View,
    objName: "UIBattleMain",
};

export {
    UIBattleMain
};