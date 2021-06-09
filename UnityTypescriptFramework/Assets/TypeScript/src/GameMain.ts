import UnityTs from './framework/UnityTs';
import {CS} from "csharp";
import {SceneManager} from "./framework/scene/SceneManager";
import {SceneConfigs} from "./game/scenes/config/SceneConfig";
import {ModuleCenter} from "./framework/module/ModuleCenter";
import {CommonModule} from "./game/module/common/CommonModule";

/**
 * 游戏入口
 * @author by dengxuhui 
 * @create time 2021/6/9 11:39
**/
class GameMain {
    constructor() {
        CS.Logger.Log("JavaScript start running!!");
        //初始化框架
        UnityTs.init();
        ModuleCenter.Instance.add(CommonModule);
        SceneManager.Instance.switchScene(SceneConfigs.HomeScene);
    }
}

new GameMain();