/**
 * ui状态宏定义
 */
export enum EUIState {
    /**
     * 默认状态
     */
    None,
    /**
     * 初始化中
     */
    Initing,
    /**
     * 加载中
     */
    Loading,
    /**
     * 打开过程中
     */
    Opening,
    /**
     * 已经打开
     */
    Opened,
    /**
     * 关闭中
     */
    Closing,
    /**
     * 已关闭
     */
    Closed,
    /**
     * 已销毁
     */
    Destroyed,
}