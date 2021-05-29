import UnityTs from './framework/UnityTs';
import {CS} from "csharp";
class GameMain{
    constructor(){
        //初始化框架
        UnityTs.init();
        CS.Logger.Log("js start up newer!!");
    }
}

new GameMain();