import UnityTs from './framework/UnityTs';
import {CS} from "csharp";
import {SceneManager} from "./framework/scene/SceneManager";
import {SceneConfigs} from "./game/scenes/config/SceneConfig";

class GameMain {
    constructor() {
        //初始化框架
        UnityTs.init();
        CS.Logger.Log("js start up newer!!");
        SceneManager.Instance.switchScene(SceneConfigs.HomeScene);
    }
}

new GameMain();