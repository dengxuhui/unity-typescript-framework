/*
* 窗体
* */
import {UIBaseView} from "./Base/UIBaseView";
import {UIBaseCtrl} from "./Base/UIBaseCtrl";
import {UIBaseModel} from "./Base/UIBaseModel";

export class UIWindow {
    /*
    * 当前状态
    * */
    public state: WindowState = WindowState.None;
    /*
    * 视图
    * */
    public view: UIBaseView;
    /*
    * control
    * */
    public ctrl: UIBaseCtrl;
    /*
    * 数据
    * */
    public model: UIBaseModel;
    /*
    * prefab路径
    * */
    public prefabPath: string;
    /*
    * ui类型
    * */
    public type: UIType;
    /*
    * ui名
    * */
    public name: string;

    // public GetView<T>(): T {
    //     return this.view as T;
    // }
}


/*
* 窗口状态
* */
export enum WindowState {
    None,
    Loading,
    Opening,
    Opened,
    Closing,
    Closed,
    Destroyed,
}

export enum UIType {
    View,
    Dialog
}