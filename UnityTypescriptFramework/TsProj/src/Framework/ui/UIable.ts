import MVCable from "framework/mvc/MVCable";
import UIBasicData from './UIBasicData';
import Handler from '../utils/Handler';
import { UIType, UIEvent } from './UIConfig';
import { TimerMgr } from '../utils/timer/Timer';
import { Logger } from '../utils/Logger';
import UIModule from '../module/UIModule';

/**
 * 可作为UI的对象 
 */
export default class UIable extends MVCable {
    /**
     * 需要加载的AB路径
     */
    private _bundles: Array<string> = null;
    /**
     * 基础数据
     */
    private _basicData: UIBasicData = null;
    /**
     * 进度回调
     */
    private _progressHandler: Handler = null;
    /**
     * ui类型
     */
    private _type: UIType = UIType.View;

    constructor(type: UIType) {
        super();
        this._type = type;
        this._basicData = this.addData(UIBasicData);
        this._bundles = new Array<string>();
    }

    public destroy(): void {
        if (this._bundles != null) {
            //TODO 取消正在加载的AB包的加载进程
            // loader.cancelLoadByUrls(this._bundles);
            this._bundles = null;
        }
        if (this._progressHandler != null) {
            this._progressHandler.recover();
            this._progressHandler = null;
        }
        if (this._basicData) {
            this._basicData.destroy();
            this._basicData = null;
        }
        super.destroy();
    }

    public open(): void {
        if (this._basicData.isLoading || this._basicData.isOpened) {
            return;
        }
        if (this._basicData.isLoaded) {
            TimerMgr.timer.callLater(this, this.doOpen);
        } else {
            TimerMgr.timer.callLater(this, this.doLoad)
        }
    }

    public close(): void {
        if (this._basicData.isLoading || !this._basicData.isOpened) {
            return;
        }
        this.doHide();
    }

    /**
     * 添加预加载的AB包路径
     * @param bundleName 
     */
    public addBundle(bundleName: string) {
        this._bundles.push(bundleName);
    }

    /**
     * 是否打开
     */
    public get isOpen(): boolean {
        return this._basicData.isOpened;
    }

    /**
     * 被打开时
     */
    protected onOpen(): void {

    }

    /**
     * 加载进度
     * @param progress 
     */
    protected onLoadProgress(progress: number): void {

    }

    /**
     * 加载完成
     * @param result 
     */
    protected onLoadComplete(result: boolean): void {
        if (this._progressHandler != null) {
            this._progressHandler.recover();
            this._progressHandler = null;
        }
        if (!result) {
            Logger.LogError("load error!!");
            return;
        }
        this._basicData.isLoading = false;
        this._basicData.isLoaded = true;
        this.doOpen();
    }

    private doLoad(): void {
        if (null == this._basicData) {
            return;
        }
        this._basicData.isLoading = true;
        this._progressHandler = Handler.create(this, this.onLoadProgress, null, false);
        if (this._bundles.length > 0) {
            //TODO 资源管理器加载

            //temp code
            this.onLoadComplete(true);
        } else {
            this.onLoadComplete(true);
        }
    }

    private doOpen(): void {
        if (null == this._dataMgr ||
            null == this._viewMgr ||
            null == this._controlMgr ||
            null == this._basicData) {
            return;
        }
        this._basicData.isOpened = true;
        this._dataMgr.initialize();
        this._viewMgr.initialize();
        this._controlMgr.initialize();

        this.onOpen();

        UIModule.instance.event(UIEvent.OPEN, this);
    }

    private doHide(): void {
        if (null == this._dataMgr || null == this._viewMgr || null == this._controlMgr || !this._basicData.isOpened) {
            return;
        }
        this._controlMgr.uninitialize();
        this._viewMgr.uninitialize();
        this._dataMgr.uninitialize();
        this._basicData.isOpened = false;
    }
}