/**
 * ui基类
 */
import IDestroyable from "../../interface/IDestroyable";
import {IComponent} from "../../interface/IComponent";
import {UnityEngine} from "csharp";

export class UIBaseComponent implements IDestroyable, IComponent {
    // _view:
    
    // _unityCanvasGroup:UnityEngine.
    constructor() {
        
    }
    
    destroy(): void {
        this.onDestroy();
    }
    
    onDestroy(): void {
    }

    onCreate(): void {
        
    }
    
    onDisable(): void {
    }
    
    onEnable(): void {
    }
}