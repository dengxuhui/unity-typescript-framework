import ModuleCenter from './module/ModuleCenter';
import { ISingleton } from './interface/ISingleton';
import UIModule from './module/UIModule';
import UserDataModule from '../game/userData/UserDataModule';

/**
 * 游戏中心
 */
export default class GameCenter extends ModuleCenter implements ISingleton {

    public static Instance:GameCenter = new GameCenter();
    /**
     * 密封构造函数
     */
    private constructor() {
        super();
    }
    
    public initialize(): void {
        //----start 注册各种模块
        this.add(UIModule);
        this.add(UserDataModule);
        //----end
        super.initialize();
    }
}