/**
 * 序列化数据
 * @author by dengxuhui
 * @create time 2021/6/9 14:52
 **/
import {CS} from "csharp";

export class Serialize {
    /**
     * 解析json数据
     * @param data
     */
    public decodeData(data: any) {
        CS.Logger.LogError("must override this function");
    }

    /**
     * 打包数据
     * @param data
     */
    public encodeData(data: any) {
        CS.Logger.LogError("must override this function");
    }
}