/**
* @author by dengxuhui
* @create time 2021/6/1
**/
let string = {
    /**
     * 字符串是否是null或者空字符串
     * @param s
     * @constructor
     */
    IsNullOrEmpty: function (s: string) {
        return s == null || s == "";
    }
};

export {string}