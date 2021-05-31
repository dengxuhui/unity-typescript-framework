import {UIBaseComponent} from "./UIBaseComponent";
import {TMPro} from "csharp";
import {UIUtil} from "../util/UIUtil";

/**
 * ts侧Unity TMP_Text实现
 */
export class UITMPText extends UIBaseComponent {
    private _unityText: TMPro.TMP_Text;
    /**
     * 显示内容
     */
    private _text: string;

    onCreate(): void {
        super.onCreate();
        this._unityText = UIUtil.findTmpText(this._transform);
        this._text = null;
    }

    onDestroy(): void {
        this._unityText = null;
        super.onDestroy();
    }


    public setText(text: string) {
        if (this._text == text) {
            return;
        }
        this._text = text;
        this._unityText.text = text;
    }

    public getText(text: string) {
        return this._unityText.text;
    }
}