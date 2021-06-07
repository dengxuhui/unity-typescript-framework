import UnityTs from './framework/UnityTs';
import {CS} from "csharp";
import {Timer} from "./framework/utils/timer/Timer";
import {SceneConfig, SceneConfigs} from "./game/scenes/config/SceneConfig";

class GameMain {
    constructor() {
        //初始化框架
        UnityTs.init();
        CS.Logger.Log("js start up newer!!");
        // let homeView = new UIHomeView(null, null, null, null, null);
        // let isTrue = homeView instanceof UIBaseView;
        // CS.Logger.Log("home view instance is :" + isTrue);
        CS.Logger.Log("1current frame:" + Timer.timer.currFrame);
        this.AsyncTest().then(r=>{
            CS.Logger.Log("5current frame:" + Timer.timer.currFrame);    
        });
        CS.Logger.Log("3current frame:" + Timer.timer.currFrame);
    }

    async AsyncTest() {
        CS.Logger.Log("2current frame:" + Timer.timer.currFrame);
        await Timer.timer.waitFrame(10);
        CS.Logger.Log("4current frame:" + Timer.timer.currFrame);
    }
}

new GameMain();