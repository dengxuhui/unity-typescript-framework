import IDestroyable from "../../interface/IDestroyable";
import {SceneConfig} from "../../../game/scenes/config/SceneConfig";
import {System} from "csharp";

/**
 * 场景基类
 */
export class BaseScene implements IDestroyable {
    /**
     * 场景配置
     */
    protected _config: SceneConfig;
    /**
     * 预加载的资源
     */
    protected _preloadResources: Map<string, System.Type>;
    /**
     * 预加载的prefab
     */
    protected _preloadPrefab: Array<string>;

    /**
     * 构造函数
     * @param config
     */
    constructor(config: SceneConfig) {
        this._config = config;
        this._preloadResources = new Map<string, System.Type>();
        this._preloadPrefab = new Array<string>();
        this.OnCreate();
    }

    public destroy(): void {
        this.OnDestroy();
    }

    /**
     * 创建时
     * @constructor
     */
    protected OnCreate() {

    }

    /**
     * 释放时
     * @constructor
     */
    protected OnDestroy() {
        this._config = null;
        this._preloadPrefab = null;
        this._preloadResources = null;
    }

    /**
     * 进入时
     * @constructor
     */
    public OnEnter(){
        
    }
    
    /**
     * 离开时
     * @constructor
     */
    public OnLeave() {
        this._preloadResources.clear();
        this._preloadPrefab.length = 0;
    }

    /**
     * 加载完成时
     * @constructor
     */
    public OnComplete(){
        
    }


    /**
     * get config
     */
    public get config(): SceneConfig {
        return this._config;
    }
}