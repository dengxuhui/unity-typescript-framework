import {ISingleton} from "../interface/ISingleton";
import {BaseScene} from "./base/BaseScene";
import UIManager from "../ui/UIManager";
import IDestroyable from "../interface/IDestroyable";
import {Timer} from "../utils/timer/Timer";

export class SceneManager implements ISingleton, IDestroyable {
    /**
     * 当前场景
     */
    private _currentScene: BaseScene;
    /**
     * 是否加载中
     */
    private _busing: boolean;
    /**
     * 场景map
     */
    private _sceneMap: Map<string, BaseScene>;

    public initialize(): void {
        this._sceneMap = new Map<string, BaseScene>();
        this._busing = false;
        this._currentScene = null;
    }

    public destroy(): void {
        this._currentScene = null;
        if (this._sceneMap) {
            this._sceneMap.forEach((scene, name) => {
                scene && scene.destroy();
            });
            this._sceneMap = null;
        }
    }

    /**
     * 切换场景
     * @param sceneConfig
     */
    public switchScene(sceneConfig) {
        if (this._busing) {
            return;
        }
        if (this._currentScene && this._currentScene.getConfig() == sceneConfig) {
            return;
        }
        this._busing = true;
        // this.innerSwitchScene();
    }
    
    private innerSwitchScene(){
        Timer.timer.frameOnce(1,this,()=>{
            
        },null);
    }
}