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
    public static Create<T>(classT: { new(): T }){
        if (this._instance == null) {
            this._instance = new classT();
        }
    }
    
    public static get Instance(){
        return this._instance;
    }
}