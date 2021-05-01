import Handler from "../Framework/Utils/Handler";

const CS = require("csharp");

/*
* Handler回调示例
* */
export class ExHandler {
    public static Run() {
        let Debug = CS.UnityEngine.Debug;
        let handler = Handler.create(null, (name) => {
            Debug.LogFormat("get name is=>{0}", name);
        }, ["Aer"], true);
        handler.run()
    }
}