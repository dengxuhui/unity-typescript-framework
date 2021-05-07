import UnityTs from "./Framework/UnityTs";
import {ExHandler} from "./Example/ExHandler";

class Main {
    constructor() {
        //初始化框架
        UnityTs.init();

        ExHandler.Run();
    }
}

new Main();