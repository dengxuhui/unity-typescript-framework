import { CS } from "csharp";
import UnityTs from "./framework/UnityTs";
class Main {
    constructor() {
        //初始化框架
        UnityTs.init();     
        CS.Logger.Log("js start up!!");    
    }
}

new Main();