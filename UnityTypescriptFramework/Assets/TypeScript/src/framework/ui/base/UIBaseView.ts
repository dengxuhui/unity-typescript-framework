import {UIBaseContainer} from "../component/UIBaseContainer";
import EventDispatcher from "../../utils/EventDispatcher";
import UIBaseModel from "./UIBaseModel";
import UIBaseCtrl from "./UIBaseCtrl";
import {UIBaseComponent} from "../component/UIBaseComponent";
import {UICanvas} from "../component/UICanvas";
import {UILayer} from "../component/UILayer";

/**
 * ui基类
 */
export class UIBaseView extends UIBaseContainer {
    private _main: EventDispatcher;
    private _canvas: UICanvas;
    private _model: UIBaseModel;
    private _ctrl: UIBaseCtrl;
    private _baseOrder: number;

    constructor(holder: UIBaseComponent, var_arg: any, main: EventDispatcher, model: UIBaseModel, ctrl: UIBaseCtrl) {
        super(holder, var_arg);
        this._baseOrder = 0;
        this._model = model;
        this._ctrl = ctrl;
    }

    onCreate(): void {
        super.onCreate();
        this._canvas = this.addComponent(UICanvas, "", 0);
        this._rectTransform.offsetMax = Vector2.zero;
        this._rectTransform.offsetMin = Vector2.zero;
        this._rectTransform.localScale = Vector3.zero;
        this._rectTransform.localPosition = Vector3.zero;
    }

    onDestroy(): void {
        this._model = null;
        this._ctrl = null;
        this._canvas = null;
        this._main = null;
        super.onDestroy();
    }

    onEnable(): void {
        this._baseOrder = (this._holder as UILayer).popWindowOrder();
        super.onEnable();
    }

    onDisable(): void {
        super.onDisable();
        (this._holder as UILayer).pushWindowOrder();
    }

    /**
     * 基础层级
     */
    public get baseOrder(): number {
        return this._baseOrder;
    }

    /**
     * 获取控制器
     */
    public get ctrl():UIBaseCtrl{
        return this._ctrl;
    }

    /**
     * 获取数据
     */
    public get model():UIBaseModel{
        return this._model;
    }
}