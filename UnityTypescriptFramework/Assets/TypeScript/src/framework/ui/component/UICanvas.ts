import {UIBaseComponent} from "./UIBaseComponent";

/**
 * ts侧canvas组件
 * -- 1、为了调整UI层级，所以这里的overrideSorting设置为true
 -- 2、如果只是类似NGUI的Panel那样划分drawcall管理，直接在预设上添加Canvas，并设置overrideSorting为false
 -- 3、这里的order是相对于window.view中base_order的差量，窗口内的order最多为10个---UIManager中配置
 -- 4、旧窗口内所有canvas的real_order都应该在新窗口之下，即保证旧窗口内包括UI特效在内的所有组件，不会跑到新窗口之上
 -- 5、UI逻辑代码禁止手动直接设置Unity侧Cavans组件的orderInLayer，全部使用本脚本接口调整层级，避免层级混乱
 */
export class UICanvas extends UIBaseComponent {
    onCreate(args?: any[]): void {
        super.onCreate();
        let relative_order = args[0];
    }
}