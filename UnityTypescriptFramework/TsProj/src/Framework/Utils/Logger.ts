import { UnityEngine } from "csharp";

const Debug = UnityEngine.Debug;
/**
 * ts侧引用到Unity Log对象
 */
export class Logger {

    /**
     * 普通日志
     * @param message 
     */
    public static Log(message: any) {
        Debug.Log(message);
    }

    /**
     * 普通日志
     * @param message 
     * @param args 
     */
    public static LogFormat(message: any, ...args: any[]) {
        Debug.LogFormat(message, args);
    }

    /**
     * 错误日志
     * @param message 消息内容
     */
    public static LogError(message: any) {
        Debug.LogError(message);
    }

    /**
     * 错误日志
     * @param message 消息内容
     * @param args 参数
     */
    public static LogErrorFormat(message: any, ...args: any[]) {
        Debug.LogErrorFormat(message, args);
    }

    /**
     * 警告消息
     * @param message 
     */
    public static LogWarning(message: any) {
        Debug.LogWarning(message);
    }

    /**
     * 警告消息
     * @param message 
     * @param args 
     */
    public static LogWarningFormat(message: any, ...args: any[]) {
        Debug.LogWarningFormat(message, args);
    }
}