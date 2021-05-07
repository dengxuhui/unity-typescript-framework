/**
 * ui类型
 */
export enum UIType{
    /**
     * 界面
     */
    View,
    /**
     * 弹窗
     */
    Dialog,
}

/**
 * 界面事件 
 */
 export class UIEvent {
    /**
     * 打开
     */
    public static readonly OPEN: string = "OPEN";
    /**
     * 关闭
     */
    public static readonly CLOSE: string = "CLOSE";
}