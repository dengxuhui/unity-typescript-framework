import UnityTs from './framework/UnityTs';
import {CS} from "csharp";
import {SceneManager} from "./framework/scene/SceneManager";
import {SceneConfigs} from "./game/scenes/config/SceneConfig";
import {ModuleCenter} from "./framework/module/ModuleCenter";
import {CommonModule} from "./game/module/common/CommonModule";
import {UserDataModule} from "./game/module/userData/UserDataModule";

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
        this.StartGame().then(() => {
            CS.Logger.Log("game start!!");
        });
    }

    /**
     * 游戏启动
     * @constructor
     */
    async StartGame() {
        ModuleCenter.Instance.add(UserDataModule);
        ModuleCenter.Instance.add(CommonModule);
        SceneManager.Instance.switchScene(SceneConfigs.HomeScene);

        // let res = await ResourceManager.Instance.CoLoadImageAsync("box_a.png", AtlasConfig.Base);
        // CS.Logger.Log("res:" + typeof (res));
    }
}

new GameMain();