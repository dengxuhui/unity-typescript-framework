import Module from '../../Framework/module/Module';
import GameCenter from '../../framework/GameCenter';
/**
 * 玩家数据模块
 */
export default class UserDataModule extends Module {

    /**
     * 获取实例
     */
    public static get instance(): UserDataModule {
        return GameCenter.Instance.get(UserDataModule);
    }

    constructor() {
        super();
    }

    private addData<T>(T: { new(): T }) {
        
    }
}