import {UIBaseComponent} from "./UIBaseComponent";
import {UnityEngine} from "csharp";

/**
 * ts侧layer层级管理器
 */
export class UILayer extends UIBaseComponent {
    //canvas组件
    private _canvas:UnityEngine.Canvas;
    //canvas缩放
    private _canvasScaler:UnityEngine.UI.CanvasScaler;
    //图形射线检测
    private _graphicRaycater:UnityEngine.UI.GraphicRaycaster;
    onCreate(): void {
        super.onCreate();
        
    }
}