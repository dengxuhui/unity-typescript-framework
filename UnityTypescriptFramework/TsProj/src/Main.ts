import {ExHandler} from "./Example/ExHandler";
import Uts from "./Framework/Uts";

const CS = require("csharp");
let Debug = CS.UnityEngine.Debug;

class Main {
    constructor() {
        Uts.init();
        //
        ExHandler.Run();
        Uts.timer.loop(2000, this, () => {
            Debug.Log("timer call back")
        }, [1], true, false);
    }
}

new Main();