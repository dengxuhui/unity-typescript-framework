import { UnityEngine } from "csharp";
import Handler from "Framework/Utils/Handler";
import { ResourceManager } from "./ResourceManager";
/*
* GameObject资源池
* */
export class GameObjectPool {
    private static _instance: GameObjectPool;

    private readonly _cacheTransRoot = null;
    private _goPool = new Map();
    private _instCache: Map<string, Array<any>> = new Map<string, Array<any>>();

    public static get instance(): GameObjectPool {
        if (!this._instance) {
            this._instance = new GameObjectPool();
        }
        return this._instance;
    }

    private constructor() {
        let go = UnityEngine.GameObject.Find("GameObjectCacheRoot");
        if (go == (void 0)) {
            go = new UnityEngine.GameObject("GameObjectCacheRoot");
            UnityEngine.Object.DontDestroyOnLoad(go);
        }
        this._cacheTransRoot = go.transform;
    }

    /**
     * 
     * @param path 
     * @returns bool
     */
    public checkHasCached(path: string): boolean {
        let cachedInst: Array<any> = this._instCache.get(path);
        if (cachedInst && cachedInst.length > 0) {
            return true;
        }
        let pooledGo = this._goPool.get(path);
        return pooledGo != (void 0);
    }

    /**
     * 缓存并实例化GameObject
     * @param path 
     * @param go 
     * @param inst_count 
     */
    public cacheAndInstGameObject(path: string, go: any, inst_count: number = 1) {
        //TODO 添加GameObject对于资源的引用
        this._goPool.set(path, go);
        if (inst_count > 0) {
            let cachedInst: Array<any> = this._instCache.get(path);
            for (let i: number = 0; i < inst_count; i++) {
                let inst = UnityEngine.GameObject.Instantiate(go) as UnityEngine.GameObject;
                inst.transform.SetParent(this._cacheTransRoot);
                inst.SetActive(false);
                cachedInst.push(inst);
            }
        }
    }

    /**
     * 从缓存获取对象
     * @param path
     */
    public tryGetFromCache(path: string): any {
        if (!this.checkHasCached(path)) {
            return null;
        }
        let cachedInst: Array<any> = this._instCache.get(path);
        if (cachedInst != (void 0) && cachedInst.length > 0) {
            let inst = cachedInst.pop();
            return inst;
        }
        let pooledGo = this._goPool.get(path);
        if (pooledGo != void 0) {
            let inst = UnityEngine.GameObject.Instantiate(pooledGo);
            return inst;
        }
        return null;
    }

    /**
     * 预加载GameObject
     * @param path 
     * @param inst_count 
     * @param callback 
     * @returns 
     */
    public async preLoadGameObjectAsync(path: string, inst_count: number, callback: Handler) {
        if (this.checkHasCached(path)) {
            callback && callback.run();
            return;
        }
        let go = await ResourceManager.instance.loadPrefabAsync(path);
        if (go != (void 0)) {
            this.cacheAndInstGameObject(path, go, inst_count);
        }
        callback && callback.run();
    }

    /**
     * 异步加载资源
     * @param path 
     * @param callback 
     */
    public async loadGameObjetAsync(path: string) {
        let inst = this.tryGetFromCache(path);
        if (inst == (void 0)) {
            await this.preLoadGameObjectAsync(path, 1, null);
        }
        inst = this.tryGetFromCache(path);
        inst.SetActive(true);
        return inst;
    }

    /**
     * 回收GameObject
     * @param path 
     * @param inst 
     * @returns 
     */
    public recycleGameObject(path: string, inst: UnityEngine.GameObject) {
        if (inst == (void 0)) {
            return;
        }
        inst.transform.SetParent(this._cacheTransRoot);
        inst.SetActive(false);
        let cachedInst = this._instCache.get(path) || [];
        cachedInst.push(inst);
        this._instCache.set(path, cachedInst);
    }

    public cleanup() {
        this._instCache.forEach((arr: Array<any>, path: string) => {
            for (let obj of arr) {
                if (obj != (void 0)) {
                    UnityEngine.GameObject.Destroy(obj);
                }
            }
        });
        this._instCache.clear();
        //清除cachePool中的GameObject引用
    }
}