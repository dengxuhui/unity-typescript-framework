import UnityTs from './framework/UnityTs';
import {CS} from "csharp";
import {UIHomeView} from "./game/ui/uiHome/uiHome/UIHomeView";
import {UIBaseView} from "./framework/ui/base/UIBaseView";

class GameMain {
    constructor() {
        //初始化框架
        UnityTs.init();
        CS.Logger.Log("js start up newer!!");
        let homeView = new UIHomeView(null, null, null, null, null);
        let isTrue = homeView instanceof UIBaseView;
        CS.Logger.Log("home view instance is :" + isTrue);
    }
}

new GameMain();