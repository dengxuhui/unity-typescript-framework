import {UIBaseView} from "../../../../framework/ui/base/UIBaseView";
import {UIText} from "../../../../framework/ui/component/UIText";
import {UIImage} from "../../../../framework/ui/component/UIImage";

/**
 * 通用loading界面
 */
export class UILoadingView extends UIBaseView {
    //加载文本
    private _txtLoading: UIText;
    //加载进度条
    private _imgLoadingSlider: UIImage;

    onCreate(): void {
        super.onCreate();
        this._txtLoading = this.addComponent(UIText, "content/m_desc") as UIText;
        // this._imgLoadingSlider = this.addComponent<UIImage>("");
    }
}