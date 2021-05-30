import IDestroyable from "../../interface/IDestroyable";
import {IComponent} from "../../interface/IComponent";
import EventDispatcher from "../../utils/EventDispatcher";
import UIBaseModel from "./UIBaseModel";
import {UILayer} from "../component/UILayer";

export default class UIBaseCtrl implements IDestroyable, IComponent {
    /**
     * 数据基类
     */
    _main: EventDispatcher;
    /**
     * 数据
     */
    _model:UIBaseModel;
    
    constructor(main: EventDispatcher, model: UIBaseModel) {
        this._main = main;
        this._model = model;
        this.onCreate();
    }

    destroy(): void {
        this.onDestroy();
        this._main = null;
        this._model = null;
    }

    onCreate(): void {
    }

    onDestroy(): void {
    }

    onEnable(): void {
    }

    onDisable(): void {
    }
}