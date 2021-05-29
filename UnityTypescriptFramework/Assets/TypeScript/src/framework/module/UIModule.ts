import GameCenter from '../GameCenter';
import UIable from '../ui/UIable';
import UICenter from '../ui/UICenter';
import Module from './Module';

/**
 * ui模块
 */
export default class UIModule extends Module {
    /**
     * ui中心
     */
    private _uiCenter: UICenter = null;

    constructor() {
        super();    
        //Do other something
        this._uiCenter = new UICenter();
    }

    public destroy(): void {
        this._uiCenter.destroy();
        this._uiCenter = null;
        super.destroy();
    }

    /**
     * 获取实例
     */
    public static get instance(): UIModule {
        return GameCenter.Instance.get(UIModule);
    }

    /**
     * 打开UI
     * @param uiClass UI类
     */
    public openUI<T extends UIable>(uiClass: { new(): T; }): T {
        return this._uiCenter.openUI(uiClass);
    }

    /**
     * 关闭UI
     * @param uiClass UI类
     */
    public closeUI<T extends UIable>(uiClass: { new(): T; }): void {
        this._uiCenter.closeUI(uiClass);
    }

    /**
     * UI是否打开
     * @param uiClass UI类
     */
    public isOpen<T extends UIable>(uiClass: { new(): T; }): boolean {
        return this._uiCenter.isOpen(uiClass);
    }

    /**
     * 获取打开了的UI，未打开则返回null
     * @param uiClass UI类
     */
    public getUI<T extends UIable>(uiClass: { new(): T; }): T {
        return this._uiCenter.getUI(uiClass);
    }
}