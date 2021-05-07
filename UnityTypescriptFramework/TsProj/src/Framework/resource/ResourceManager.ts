import EventDispatcher from "../utils/EventDispatcher";

/**
 * 资源管理器
 */
export class ResourceManager extends EventDispatcher{
    private static _instance:ResourceManager;
    
    public static get instance():ResourceManager{
        if(this._instance == null){
            this._instance = new ResourceManager()
        }
        return this._instance;
    }
    
    private constructor() {
        super();
    }
    
    public async loadPrefabAsync(path:string){
        //TODO 加载资源，在CS侧有一个中介加载器去管理引用
        // libx.Assets.LoadAssetAsync(path,$typeof(UnityEngine.GameObject));
    }

    public async loadSpriteAsync(path:string){
        //TODO
    }

    public async laodTextAssetAsync(path:string){
        //TODO
    }
}