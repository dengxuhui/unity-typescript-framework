import {CS, UnityEngine} from "csharp";
import Handler from "framework/utils/Handler";
import {ISingleton} from '../interface/ISingleton';

/*
* GameObject资源池
* */
export class GameObjectPool implements ISingleton {
    public static Instance: GameObjectPool = new GameObjectPool();

    private _cacheTransRoot = null;
    private _goPool = new Map();
    private _instCache: Map<string, Array<any>> = new Map<string, Array<any>>();

    /**
     * 密封构造函数
     */
    private constructor() {
    }

    /**
     * 从缓存获取对象
     * @param path
     */
    private tryGetFromCache(path: string): UnityEngine.Object {
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
     * 启用gameObject
     * @param gameObject
     */
    private activeGO(gameObject: UnityEngine.GameObject) {
        gameObject && gameObject.SetActive(true);
    }

    /**
     * 初始化
     */
    public initialize(): void {
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
     * 预加载资源
     * @param pathArray
     * @param callback
     */
    public preLoadGameObjectAsync(pathArray:Array<string>,callback:Handler){
        
    }

    /**
     * 获取已经加载好的GameObject对象
     * @param path
     * @param active
     */
    public getLoadedGameObject(path: string, active: boolean = true): UnityEngine.GameObject {
        let inst = this.tryGetFromCache(path) as UnityEngine.GameObject;
        if (inst == null) {
            CS.Logger.LogError(`GameObjectPool=>getLoadedGameObject which is not loaded:${path}`);
        }
        active && this.activeGO(inst);
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

    //TODO
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