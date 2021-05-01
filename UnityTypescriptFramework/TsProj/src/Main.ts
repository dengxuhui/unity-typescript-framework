import Handler from "./Framework/Utils/Handler";
import {ExHandler} from "./Example/ExHandler";

const CS = require("csharp");
let Debug = CS.UnityEngine.Debug;

class Main {
    constructor() {
        
        //
        ExHandler.Run();
    }
}

new Main();