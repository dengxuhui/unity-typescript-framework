/**
 * 数据基类
 * @author by dengxuhui
 * @create time 2021/6/9 14:45
 **/
import {CS} from "csharp";

export class BaseData {
    public onCreate() {
        CS.Logger.LogError(this.constructor.name + "::must override this function=>onCreate()");
    }
}

/**
 * 类型接口
 */
export interface IBaseDataCtor {
    new(): BaseData;
}