import {ISingleton} from "../interface/ISingleton";
import {AssetBundles, System} from "csharp";
import Handler from "../utils/Handler";
import {TimerMgr} from "../utils/timer/Timer";

export class ResourceManager implements ISingleton {
    public static Instance: ResourceManager = new ResourceManager();
    /**
     * cs侧资源接口
     */
    private _api: AssetBundles.AssetBundleManager;
    private _requestHandler: Map<AssetBundles.BaseAssetAsyncLoader, Handler>;

    private constructor() {
    }

    private onUpdate() {
        if (this._requestHandler.size <= 0) {
            return;
        }

        this._requestHandler.forEach((handler, loader) => {
            if (loader.isDone) {
                handler && handler.runWith(loader.asset);
                loader.Dispose();
                this._requestHandler.delete(loader);
            }
        });
    }


    public initialize(): void {
        this._api = AssetBundles.AssetBundleManager.Instance;
        this._requestHandler = new Map<AssetBundles.BaseAssetAsyncLoader, Handler>();
        TimerMgr.timer.frameLoop(1, this, this.onUpdate, null, true);
    }

    public loadAssetAsync(path: string, res_type: System.Type, callback: Handler) {
        let request = this._api.LoadAssetAsync(path, res_type);
        this._requestHandler.set(request, callback);
    }
}