import IDestroyable from '../interface/IDestroyable';
import UIable from './UIable';
import { Logger } from '../Utils/Logger';
import { UIEvent } from './UIConfig';
import UIModule from '../module/UIModule';
/**
 * ui中心
 */
export default class UICenter implements IDestroyable {
    /**
     * ui集合
     */
    private _uis: Map<any, any> = null;

    constructor() {
        this._uis = new Map<any, any>();
    }

    /**
     * 销毁
     */
    public destroy() {
        if (this._uis != null) {
            this._uis.forEach((key, value: UIable) => {
                value && value.destroy();
            });
        }
    }

    /**
     * 打开UI
     * @param uiClass UI类
     */
    public openUI<T extends UIable>(uiClass: { new(): T }): T {
        let ui: T = this._uis.get(uiClass);
        if (null == ui) {
            ui = new uiClass();
            this._uis.set(uiClass, ui);
            ui.open();
        } else {
            Logger.LogWarningFormat("UI已打开：{0}", uiClass.prototype.constructor.name);
        }
        return ui;
    }

    /**
     * 关闭UI
     * @param uiClass UI类
     */
    public closeUI<T extends UIable>(uiClass: { new(): T; }): void {
        let ui: UIable = this._uis.get(uiClass);
        if (ui != null) {
            UIModule.instance.event(UIEvent.CLOSE, ui);
            ui.close();
            ui.destroy();
            this._uis.delete(uiClass);
        }
        else {
            Logger.LogWarningFormat("要关闭的UI未打开：{0}", uiClass.prototype.constructor.name);
        }
    }

    /**
    * UI是否打开
    * @param uiClass UI类
    */
    public isOpen<T extends UIable>(uiClass: { new(): T; }): boolean {
        return this._uis.has(uiClass);
    }

    /**
     * 获取打开了的UI，未打开则返回null
     * @param uiClass UI类
     */
    public getUI<T extends UIable>(uiClass: { new(): T; }): T {
        return this._uis.get(uiClass);
    }
}