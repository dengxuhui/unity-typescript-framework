import {UIBaseComponent} from "./UIBaseComponent";
import {UnityEngine} from "csharp";
import {IAtlasConfig} from "../../resource/config/AtlasConfig";

/**
 * image组件
 * @author by dengxuhui
 * @create time 2021/6/9 16:12
 **/
export class UIImage extends UIBaseComponent {
    //unity侧image组件
    private _unityImage: UnityEngine.UI.Image;
    //图集数据
    private _atlas: IAtlasConfig;

    onCreate(...args: any[]): void {
        super.onCreate();
    }

    onDestroy(): void {
        super.onDestroy();
    }
}