/**
 * ui基类
 */
import {CS, UnityEngine} from "csharp";
import {UILayer} from "./UILayer";
import {UIUtil} from "../util/UIUtil";
import {$typeof} from "puerts";
import {IUIComponent} from "../../interface/IUIComponent";

export class UIBaseComponent implements IUIComponent {
    /**
     * 窗口view层脚本
     */
    _view: UIBaseComponent;
    /**
     * 持有者
     */
    _holder: UIBaseComponent;
    /**
     * transform对应的gameObject
     */
    _gameObject: UnityEngine.GameObject;
    /**
     * transform组件
     */
    _transform: UnityEngine.Transform;
    /**
     * ui rectTrans组件
     */
    _rectTransform: UnityEngine.RectTransform;
    /**
     * 组件名字
     */
    _name: string;
    /**
     * 是否激活
     */
    _active: boolean;
    /**
     * 多重参数
     * path,index,gameObject
     */
    _var_arg: any;

    /**
     * 添加组件
     * @param holder
     * @param var_arg
     */
    constructor(holder: UIBaseComponent, var_arg: any) {
        this._holder = holder;
        this._var_arg = var_arg;
    }

    destroy(): void {
        this.onDestroy();
    }

    onDestroy(): void {
        this._holder = null;
        this._gameObject = null;
        this._name = null;
        this._view = null;
        this._transform = null;
    }

    onCreate(): void {
        if (this instanceof UILayer) {
            this._view = null;
        } else {
            let now_holder = this._holder;
            while (now_holder != null) {
                if (now_holder instanceof UILayer) {
                    this._view = this;
                    break
                } else if (now_holder._view != null) {
                    this._view = now_holder._view;
                    break
                }
                now_holder = now_holder._holder;
            }
        }
        if (this._var_arg != null) {
            if (typeof this._var_arg === "string") {
                this._transform = UIUtil.findTrans(this._holder._transform, this._var_arg);
                this._gameObject = this._transform.gameObject;
            } else if (typeof this._var_arg === "number") {
                this._transform = UIUtil.getChild(this._holder._transform, this._var_arg);
                this._gameObject = this._transform.gameObject;
            } else if (this._var_arg instanceof UnityEngine.GameObject) {
                this._gameObject = this._var_arg;
                this._transform = this._gameObject.transform;
            } else {
                CS.Logger.LogError("OnCreate:error params list!");
            }
        }
        this._var_arg = null;
        this._name = this._gameObject.name;
        this._rectTransform = UIUtil.findComponent(this._transform, $typeof(UnityEngine.RectTransform));
    }

    onDisable(): void {
    }

    onEnable(): void {
    }

    /**
     * 设置激活与反激活
     * @param active
     */
    public setActive(active: boolean) {
        if (this._active == active) {
            return;
        }
        this._active = active;
        if (active) {
            this._gameObject.SetActive(active);
            this.onEnable();
        } else {
            this.onDisable();
            this._gameObject.SetActive(active);
        }
    }

    /**
     * 获取是否激活
     * @return boolean 是否激活
     */
    public getActive(): boolean {
        return this._active;
    }

    /**
     * 获取组件名字
     */
    public getName(): string {
        return this._name;
    }
}