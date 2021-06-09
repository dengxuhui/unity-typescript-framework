import {UIBaseView} from "../../../../framework/ui/base/UIBaseView";
import {UIText} from "../../../../framework/ui/component/UIText";

/**
 * 通用loading界面
 */
export class UILoadingView extends UIBaseView {
    //加载文本
    private _txtLoading: UIText;
    onCreate(): void {
        super.onCreate();
        this._txtLoading = this.addComponent(UIText, "content/m_desc") as UIText;
    }
}