import MVCable from "framework/mvc/MVCable";
import UIBasicData from './UIBasicData';
import Handler from '../utils/Handler';
import { UIType } from './UIType';
import { TimerMgr } from '../utils/timer/Timer';

/**
 * 可作为UI的对象 
 */
export default class UIable extends MVCable {
    /**
     * 需要加载的AB路径
     */
    private _bundleUrls: Array<string> = null;
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
        this._bundleUrls = new Array<string>();
    }

    public destroy(): void {
        if (this._bundleUrls != null) {
            //TODO 取消正在加载的AB包的加载进程
            // loader.cancelLoadByUrls(this._bundleUrls);
            this._bundleUrls = null;
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

    public open():void{
        if(this._basicData.isLoading || this._basicData.isOpened){
            return;
        }
        if(this._basicData.isLoaded){
            
        }
    }
}