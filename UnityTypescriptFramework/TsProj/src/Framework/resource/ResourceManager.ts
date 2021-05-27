import EventDispatcher from "../utils/EventDispatcher";
import { ISingleton } from '../interface/ISingleton';
import Handler from "framework/utils/Handler";
import { libx, System } from "csharp";

/**
 * 资源管理器
 */
export class ResourceManager extends EventDispatcher implements ISingleton {
    public static I: ResourceManager = new ResourceManager();
    /**
     * 密封构造函数
     */
    private constructor() {
        super();
    }

    /**
     * 初始化
     */
    public initialize(): void {

    }

    public async loadPrefabAsync(path: string) {
        //TODO 加载资源，在CS侧有一个中介加载器去管理引用
        // libx.Assets.LoadAssetAsync(path,$typeof(UnityEngine.GameObject));
    }

    public async loadSpriteAsync(path: string) {
        //TODO
    }

    public async laodTextAssetAsync(path: string) {
        //TODO
    }

    /**
     * 异步加载资源
     * @param path 
     */
    public loadAssetAsync(path: string, type: System.Type, cb: Handler) {
        // let request = libx.Assets.LoadAssetAsync(path, type);                
    }
}