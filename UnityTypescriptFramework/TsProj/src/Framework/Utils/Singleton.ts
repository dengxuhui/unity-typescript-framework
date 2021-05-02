/*
* 单例
* */
export class Singleton<T> {
    /*
    * 实例
    * */
    private static _instance: any = null;

    /*
    * 获取实例
    * */
    public static Instance<T>(classT: { new(): T }): T {
        if (this._instance == null) {
            this._instance = new classT();
        }
        return this._instance;
    }
}