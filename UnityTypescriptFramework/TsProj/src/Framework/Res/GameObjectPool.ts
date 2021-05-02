import {Singleton} from "../Utils/Singleton";

const CS = require("csharp");

/*
* GameObject资源池
* */
export class GameObjectPool extends Singleton<GameObjectPool> {
    private _cacheTransRoot = null;
    private _goPool = new Map();
    private _instCache: Map<string, Array<any>> = new Map<string, Array<any>>();

    constructor() {
        super();

        let go = CS.UnityEngine.GameObject.Find("GameObjectCacheRoot");
        if (go == undefined) {
            go = new CS.UnityEngine.GameObject("GameObjectCacheRoot")
            CS.UnityEngine.Object.DontDestroyOnLoad(go);
        }
        this._cacheTransRoot = go.transform;
    }

    public checkHasCached(path: string): boolean {
        let cachedInst: Array<any> = this._instCache.get(path);
        if (cachedInst && cachedInst.length > 0) {
            return true;
        }
        let pooledGo = this._goPool.get(path);
        return pooledGo != undefined;
    }
}