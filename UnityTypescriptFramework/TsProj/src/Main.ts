import { CS } from "csharp";
import UnityTs from "./framework/UnityTs";
import { TimerMgr } from './framework/utils/timer/Timer';
class Main {
    constructor() {
        //初始化框架
        UnityTs.init();
        TimerMgr.timer.frameOnce(1, this, () => {
            CS.Logger.Log("js start up!! after a frame");
        });
        let timeStart = Date.now;
        TimerMgr.timer.loop(1000, this, () => {
            CS.Logger.Log("js call every 1 sec");
        });
        CS.Logger.Log("js start,time:" + timeStart);        
    }
}

new Main();