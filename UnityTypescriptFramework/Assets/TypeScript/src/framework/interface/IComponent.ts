export interface IComponent {
    /**
     * 创建
     */
    onCreate():void;

    /**
     * 销毁
     */
    onDestroy():void;

    /**
     * 启用
     */
    onEnable():void;

    /**
     * 禁用
     */
    onDisable():void;
}