import {ISingleton} from "../interface/ISingleton";
import {AssetBundles, CS, System} from "csharp";
import Handler from "../utils/Handler";
import {Timer} from "../utils/timer/Timer";
import {string} from "../utils/StringUtil";

export class ResourceManager implements ISingleton {
    public static Instance: ResourceManager = new ResourceManager();
    /**
     * cs侧资源接口
     */
    private _api: AssetBundles.AssetBundleManager;
    private _requestAssetsHandler: Map<AssetBundles.BaseAssetAsyncLoader, Handler>;
    private _requestABHandler: Map<AssetBundles.BaseAssetBundleAsyncLoader, Handler>;

    private constructor() {
    }

    private onUpdate() {
        if (this._requestAssetsHandler.size > 0) {
            this._requestAssetsHandler.forEach((handler, loader) => {
                if (loader.isDone) {
                    handler && handler.runWith(loader.asset);
                    loader.Dispose();
                    this._requestAssetsHandler.delete(loader);
                }
            });
        }

        if (this._requestABHandler.size > 0) {
            this._requestABHandler.forEach((handler, loader) => {
                if (loader.isDone) {
                    handler && handler.runWith(true);
                    loader.Dispose();
                    this._requestABHandler.delete(loader);
                }
            });
        }
    }


    public initialize(): void {
        this._api = AssetBundles.AssetBundleManager.Instance;
        this._requestAssetsHandler = new Map<AssetBundles.BaseAssetAsyncLoader, Handler>();
        this._requestABHandler = new Map<AssetBundles.BaseAssetBundleAsyncLoader, Handler>();
        Timer.timer.frameLoop(2, this, this.onUpdate, null, true);
    }

    /**
     * 异步加载资源
     * @param path
     * @param res_type
     * @param callback
     */
    public loadAssetAsync(path: string, res_type: System.Type, callback: Handler): boolean {
        if (string.IsNullOrEmpty(path)) {
            CS.Logger.LogError("ResourceManager::loadAssetAsync params error,path is empty");
            return false;
        }
        let request = this._api.LoadAssetAsync(path, res_type);
        this._requestAssetsHandler.set(request, callback);
        return true;
    }

    /**
     * 异步加载AB包
     * @param path
     * @param callBack
     */
    public loadAssetBundleAsync(path: string, callBack: Handler) {
        if (string.IsNullOrEmpty(path)) {
            CS.Logger.LogError("ResourceManager::loadAssetBundleAsync params error,path is empty");
            return;
        }
        let request = this._api.LoadAssetBundleAsync(path);
        this._requestABHandler.set(request, callBack);
        return true;
    }
}