import { UnityEngine } from "csharp";
import Handler from "../framework/Utils/Handler";

/*
* Handler回调示例
* */
export class ExHandler {
    public static Run() {
        
        let handler = Handler.create(null, (name) => {
            UnityEngine.Debug.LogFormat("get name is=>{0}", name);
        }, ["AerTims"], true);
        handler.run()
    }
}