/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/Example/ExHandler.ts":
/*!**********************************!*\
  !*** ./src/Example/ExHandler.ts ***!
  \**********************************/
/*! exports provided: ExHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExHandler", function() { return ExHandler; });
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! csharp */ "csharp");
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(csharp__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Framework_Utils_Handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Framework/Utils/Handler */ "./src/Framework/Utils/Handler.ts");


/*
* Handler回调示例
* */
var ExHandler = /** @class */ (function () {
    function ExHandler() {
    }
    ExHandler.Run = function () {
        var handler = _Framework_Utils_Handler__WEBPACK_IMPORTED_MODULE_1__["default"].create(null, function (name) {
            csharp__WEBPACK_IMPORTED_MODULE_0__["UnityEngine"].Debug.LogFormat("get name is=>{0}", name);
        }, ["Aer"], true);
        handler.run();
    };
    return ExHandler;
}());



/***/ }),

/***/ "./src/Framework/UnityTs.ts":
/*!**********************************!*\
  !*** ./src/Framework/UnityTs.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _Utils_Timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils/Timer */ "./src/Framework/Utils/Timer.ts");
/* 全局类入口*/

var Utils = /** @class */ (function () {
    function Utils() {
    }
    /*
    * 角度转弧度
    * */
    Utils.toRadian = function (angle) {
        return angle * Utils._pi2;
    };
    /*
    * 弧度转角度
    * */
    Utils.toAngle = function (radian) {
        return radian * Utils._pi;
    };
    /*
    * 获取唯一id
    * */
    Utils.getGID = function () {
        return Utils._gid++;
    };
    /**
     * @private
     * <p>连接数组。和array的concat相比，此方法不创建新对象</p>
     * <b>注意：</b>若 参数 a 不为空，则会改变参数 source 的值为连接后的数组。
     * @param    source 待连接的数组目标对象。
     * @param    array 待连接的数组对象。
     * @return 连接后的数组。
     */
    Utils.concatArray = function (source, array) {
        if (!array)
            return source;
        if (!source)
            return array;
        var i, len = array.length;
        for (i = 0; i < len; i++) {
            source.push(array[i]);
        }
        return source;
    };
    /*id*/
    Utils._gid = 1;
    Utils._pi = 180 / Math.PI;
    Utils._pi2 = Math.PI / 180;
    Utils._extReg = /\.(\w+)\??/g;
    return Utils;
}());
var UnityTs = /** @class */ (function () {
    function UnityTs() {
    }
    UnityTs.init = function () {
        this.timer = new _Utils_Timer__WEBPACK_IMPORTED_MODULE_0__["default"]();
        // @ts-ignore
        global.__tgjsRegisterTickHandler(this._timerUpdate);
        // @ts-ignore
        delete global.__tgjsRegisterTickHandler;
    };
    UnityTs._timerUpdate = function () {
        UnityTs.timer._update();
    };
    /* 工具类*/
    UnityTs.utils = Utils;
    return UnityTs;
}());
/* harmony default export */ __webpack_exports__["default"] = (UnityTs);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/Framework/Utils/Handler.ts":
/*!****************************************!*\
  !*** ./src/Framework/Utils/Handler.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Handler = /** @class */ (function () {
    /**
     * 根据指定的属性值，创建一个 <code>Handler</code> 类的实例。
     * @param    caller 执行域。
     * @param    method 处理函数。
     * @param    args 函数参数。
     * @param    once 是否只执行一次。
     */
    function Handler(caller, method, args, once) {
        if (caller === void 0) { caller = null; }
        if (method === void 0) { method = null; }
        if (once === void 0) { once = false; }
        this.once = false;
        this._id = 0;
        this.set(caller, method, args, once);
    }
    /*
    * @return 返回Handler实例
    * */
    Handler.prototype.set = function (caller, method, args, once) {
        if (once === void 0) { once = false; }
        this._id = Handler._guid++;
        this.caller = caller;
        this.method = method;
        this.args = args;
        this.once = once;
        return this;
    };
    /*
    * 直接执行
    * */
    Handler.prototype.run = function () {
        if (this.method == null)
            return null;
        var id = this._id;
        var result = this.method.apply(this.caller, this.args);
        this._id === id && this.once && this.recover();
        return result;
    };
    /*
    * 带参数的执行 自定义参数在后
    * */
    Handler.prototype.runWith = function (data) {
        if (this.method == null)
            return null;
        var id = this._id;
        var result;
        if (data == null) {
            result = this.method.apply(this.caller, this.args);
        }
        else if (!this.args && !data.unshift) {
            result = this.method.call(this.caller, data);
        }
        else if (this.args) {
            result = this.method.apply(this.caller, this.args.concat(data));
        }
        else {
            result = this.method.apply(this.caller, data);
        }
        this._id === id && this.once && this.recover();
        return result;
    };
    /*
    * 清理对象
    * */
    Handler.prototype.clear = function () {
        this.caller = null;
        this.method = null;
        this.args = null;
        return this;
    };
    /*
    * 回收对象
    * */
    Handler.prototype.recover = function () {
        if (this._id > 0) {
            this._id = 0;
            Handler._pool.push(this.clear());
        }
    };
    /**
     * 从对象池内创建一个Handler，默认会执行一次并立即回收，如果不需要自动回收，设置once参数为false。
     * @param    caller 执行域(this)。
     * @param    method 回调方法。
     * @param    args 携带的参数。
     * @param    once 是否只执行一次，如果为true，回调后执行recover()进行回收，默认为true。
     * @return  返回创建的handler实例。
     */
    Handler.create = function (caller, method, args, once) {
        if (args === void 0) { args = null; }
        if (once === void 0) { once = true; }
        if (Handler._pool.length)
            return Handler._pool.pop().set(caller, method, args, once);
        return new Handler(caller, method, args, once);
    };
    /*资源池*/
    Handler._pool = [];
    Handler._guid = 1;
    return Handler;
}());
/* harmony default export */ __webpack_exports__["default"] = (Handler);


/***/ }),

/***/ "./src/Framework/Utils/Timer.ts":
/*!**************************************!*\
  !*** ./src/Framework/Utils/Timer.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UnityTs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../UnityTs */ "./src/Framework/UnityTs.ts");
/*
*
* 时钟管理器 使用Utf.timer访问
* */

var Timer = /** @class */ (function () {
    function Timer(autoActive) {
        if (autoActive === void 0) { autoActive = true; }
        this.scale = 1;
        this.currTimer = Date.now();
        this.currFrame = 0;
        /*两帧之间的时间间隔，单位：毫秒*/
        this._delta = 0;
        this._lastTimer = Date.now();
        this._map = [];
        this._handlers = [];
        this._temp = [];
        this._count = 0;
        autoActive && Timer.gSysTimer && Timer.gSysTimer.frameLoop(1, this, this._update);
    }
    Object.defineProperty(Timer.prototype, "delta", {
        /* 获取两帧之间的时间间隔，单位毫秒*/
        get: function () {
            return this._delta;
        },
        enumerable: false,
        configurable: true
    });
    /* 帧循环*/
    Timer.prototype._update = function () {
        if (this.scale <= 0) {
            this._lastTimer = Date.now();
            this._delta = 0;
            return;
        }
        var frame = this.currFrame = this.currFrame + this.scale;
        var now = Date.now();
        var awake = (now - this._lastTimer) > 30000;
        this._delta = (now - this._lastTimer) * this.scale;
        var timer = this.currTimer = this.currTimer + this._delta;
        this._lastTimer = now;
        var handlers = this._handlers;
        this._count = 0;
        for (var i = 0, n = handlers.length; i < n; i++) {
            var handler = handlers[i];
            if (handler.method !== null) {
                var t = handler.useFrame ? frame : timer;
                if (t >= handler.exeTime) {
                    if (handler.repeat) {
                        if (!handler.jumpFrame || awake) {
                            handler.exeTime += handler.delay;
                            handler.run(false);
                            if (t > handler.exeTime) {
                                handler.exeTime += Math.ceil((t - handler.exeTime) / handler.delay) * handler.delay;
                            }
                        }
                        else {
                            // 一帧可多次执行的情况。
                            while (t >= handler.exeTime) {
                                handler.exeTime += handler.delay;
                                handler.run(false);
                            }
                        }
                    }
                    else {
                        handler.run(true);
                    }
                }
            }
            else {
                this._count++;
            }
        }
        if (this._count > 30 || frame % 200 === 0)
            this._clearHandlers();
    };
    /*整理handlers数组*/
    Timer.prototype._clearHandlers = function () {
        var handlers = this._handlers;
        for (var i = 0, n = handlers.length; i < n; i++) {
            var handler = handlers[i];
            if (handler.method !== null)
                this._temp.push(handler);
            else
                this._recoverHandler(handler);
        }
        this._handlers = this._temp;
        handlers.length = 0;
        this._temp = handlers;
    };
    /*回收handler*/
    Timer.prototype._recoverHandler = function (handler) {
        if (this._map[handler.key] == handler)
            this._map[handler.key] = null;
        handler.clear();
        Timer._pool.push(handler);
    };
    /* 创建TimerHandler实例*/
    Timer.prototype._create = function (useFrame, repeat, delay, caller, method, args, coverBefore) {
        if (!delay) {
            method.apply(caller, args);
            return null;
        }
        var handler;
        if (coverBefore) {
            handler = this._getHandler(caller, method);
            if (handler) {
                handler.repeat = repeat;
                handler.useFrame = useFrame;
                handler.delay = delay;
                handler.caller = caller;
                handler.method = method;
                handler.args = args;
                handler.exeTime = delay + (useFrame ? this.currFrame : this.currTimer + Date.now() - this._lastTimer);
                return handler;
            }
        }
        handler = Timer._pool.length > 0 ? Timer._pool.pop() : new TimerHandler();
        handler.repeat = repeat;
        handler.useFrame = useFrame;
        handler.delay = delay;
        handler.caller = caller;
        handler.method = method;
        handler.args = args;
        handler.exeTime = delay + (useFrame ? this.currFrame : this.currTimer + Date.now() - this._lastTimer);
        this._indexHandler(handler);
        this._handlers.push(handler);
        return handler;
    };
    /*获取handler*/
    Timer.prototype._getHandler = function (caller, method) {
        var cid = caller ? caller.$_GID || (caller.$_GID = _UnityTs__WEBPACK_IMPORTED_MODULE_0__["default"].utils.getGID()) : 0;
        var mid = method.$_TID || (method.$_TID = (Timer._mid++) * 100000);
        return this._map[cid + mid];
    };
    /*
    * 索引handler
    * */
    Timer.prototype._indexHandler = function (handler) {
        var caller = handler.caller;
        var method = handler.method;
        var cid = caller ? caller.$_GID || (caller.$_GID = _UnityTs__WEBPACK_IMPORTED_MODULE_0__["default"].utils.getGID()) : 0;
        var mid = method.$_TID || (method.$_TID = (Timer._mid++) * 100000);
        handler.key = cid + mid;
        this._map[handler.key] = handler;
    };
    /**
     * 定时执行一次。
     * @param    delay    延迟时间(单位为毫秒)。
     * @param    caller    执行域(this)。
     * @param    method    定时器回调函数。
     * @param    args    回调参数。
     * @param    coverBefore    是否覆盖之前的延迟执行，默认为 true 。
     */
    Timer.prototype.once = function (delay, caller, method, args, coverBefore) {
        if (args === void 0) { args = null; }
        if (coverBefore === void 0) { coverBefore = true; }
        this._create(false, false, delay, caller, method, args, coverBefore);
    };
    /**
     * 定时重复执行。
     * @param    delay    间隔时间(单位毫秒)。
     * @param    caller    执行域(this)。
     * @param    method    定时器回调函数。
     * @param    args    回调参数。
     * @param    coverBefore    是否覆盖之前的延迟执行，默认为 true 。
     * @param    jumpFrame 时钟是否跳帧。基于时间的循环回调，单位时间间隔内，如能执行多次回调，出于性能考虑，引擎默认只执行一次，设置jumpFrame=true后，则回调会连续执行多次
     */
    Timer.prototype.loop = function (delay, caller, method, args, coverBefore, jumpFrame) {
        if (args === void 0) { args = null; }
        if (coverBefore === void 0) { coverBefore = true; }
        if (jumpFrame === void 0) { jumpFrame = false; }
        var handler = this._create(false, true, delay, caller, method, args, coverBefore);
        if (handler)
            handler.jumpFrame = jumpFrame;
    };
    /**
     * 定时执行一次(基于帧率)。
     * @param    delay    延迟几帧(单位为帧)。
     * @param    caller    执行域(this)。
     * @param    method    定时器回调函数。
     * @param    args    回调参数。
     * @param    coverBefore    是否覆盖之前的延迟执行，默认为 true 。
     */
    Timer.prototype.frameOnce = function (delay, caller, method, args, coverBefore) {
        if (args === void 0) { args = null; }
        if (coverBefore === void 0) { coverBefore = true; }
        this._create(true, false, delay, caller, method, args, coverBefore);
    };
    /**
     * 定时重复执行(基于帧率)。
     * @param    delay    间隔几帧(单位为帧)。
     * @param    caller    执行域(this)。
     * @param    method    定时器回调函数。
     * @param    args    回调参数。
     * @param    coverBefore    是否覆盖之前的延迟执行，默认为 true 。
     */
    Timer.prototype.frameLoop = function (delay, caller, method, args, coverBefore) {
        if (args === void 0) { args = null; }
        if (coverBefore === void 0) { coverBefore = true; }
        this._create(true, true, delay, caller, method, args, coverBefore);
    };
    /** 返回统计信息。*/
    Timer.prototype.toString = function () {
        return " handlers:" + this._handlers.length + " pool:" + Timer._pool.length;
    };
    /**
     * 清理定时器。
     * @param    caller 执行域(this)。
     * @param    method 定时器回调函数。
     */
    Timer.prototype.clear = function (caller, method) {
        var handler = this._getHandler(caller, method);
        if (handler) {
            this._map[handler.key] = null;
            handler.key = 0;
            handler.clear();
        }
    };
    /**
     * 清理对象身上的所有定时器。
     * @param    caller 执行域(this)。
     */
    Timer.prototype.clearAll = function (caller) {
        if (!caller)
            return;
        var i = 0;
        var n = this._handlers.length;
        for (; i < n; i++) {
            var handler = this._handlers[i];
            if (handler.caller === caller) {
                this._map[handler.key] = null;
                handler.key = 0;
                handler.clear();
            }
        }
    };
    /**
     * 立即提前执行定时器，执行之后从队列中删除
     * @param    caller 执行域(this)。
     * @param    method 定时器回调函数。
     */
    Timer.prototype.runTimer = function (caller, method) {
        var handler = this._getHandler(caller, method);
        if (handler && handler.method != null) {
            this._map[handler.key] = null;
            handler.run(true);
        }
    };
    /**
     * 暂停时钟
     */
    Timer.prototype.pause = function () {
        this.scale = 0;
    };
    /**
     * 恢复时钟
     */
    Timer.prototype.resume = function () {
        this.scale = 1;
    };
    /*timer入口*/
    Timer.gSysTimer = null;
    /*对象池*/
    Timer._pool = [];
    Timer._mid = 1;
    return Timer;
}());
/* harmony default export */ __webpack_exports__["default"] = (Timer);
/* 私有timer函数类*/
var TimerHandler = /** @class */ (function () {
    function TimerHandler() {
    }
    TimerHandler.prototype.clear = function () {
        this.caller = null;
        this.method = null;
        this.args = null;
    };
    TimerHandler.prototype.run = function (withClear) {
        var caller = this.caller;
        if (caller && caller.destroyed)
            return this.clear();
        var method = this.method;
        var args = this.args;
        withClear && this.clear();
        if (method == null)
            return;
        args ? method.apply(caller, args) : method.call(caller);
    };
    return TimerHandler;
}());


/***/ }),

/***/ "./src/Main.ts":
/*!*********************!*\
  !*** ./src/Main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Framework_UnityTs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Framework/UnityTs */ "./src/Framework/UnityTs.ts");
/* harmony import */ var _Example_ExHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Example/ExHandler */ "./src/Example/ExHandler.ts");


var Main = /** @class */ (function () {
    function Main() {
        //初始化框架
        _Framework_UnityTs__WEBPACK_IMPORTED_MODULE_0__["default"].init();
        _Example_ExHandler__WEBPACK_IMPORTED_MODULE_1__["ExHandler"].Run();
    }
    return Main;
}());
new Main();


/***/ }),

/***/ "csharp":
/*!*************************!*\
  !*** external "csharp" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("csharp");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRXhhbXBsZS9FeEhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0ZyYW1ld29yay9Vbml0eVRzLnRzIiwid2VicGFjazovLy8uL3NyYy9GcmFtZXdvcmsvVXRpbHMvSGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRnJhbWV3b3JrL1V0aWxzL1RpbWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9NYWluLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImNzaGFycFwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUM7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFxQztBQUNZO0FBRWpEOztJQUVJO0FBQ0o7SUFBQTtJQVFBLENBQUM7SUFQaUIsYUFBRyxHQUFqQjtRQUVJLElBQUksT0FBTyxHQUFHLGdFQUFPLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxVQUFDLElBQUk7WUFDcEMsa0RBQVcsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzFELENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2xCLE9BQU8sQ0FBQyxHQUFHLEVBQUU7SUFDakIsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUNkRDtBQUFBO0FBQUEsVUFBVTtBQUN3QjtBQUlsQztJQUFBO0lBNkNBLENBQUM7SUF0Q0c7O1FBRUk7SUFDVSxjQUFRLEdBQXRCLFVBQXVCLEtBQWE7UUFDaEMsT0FBTyxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztJQUM5QixDQUFDO0lBRUQ7O1FBRUk7SUFDVSxhQUFPLEdBQXJCLFVBQXNCLE1BQWM7UUFDaEMsT0FBTyxNQUFNLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUM5QixDQUFDO0lBRUQ7O1FBRUk7SUFDVSxZQUFNLEdBQXBCO1FBQ0ksT0FBTyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDVyxpQkFBVyxHQUF6QixVQUEwQixNQUFhLEVBQUUsS0FBWTtRQUNqRCxJQUFJLENBQUMsS0FBSztZQUFFLE9BQU8sTUFBTSxDQUFDO1FBQzFCLElBQUksQ0FBQyxNQUFNO1lBQUUsT0FBTyxLQUFLLENBQUM7UUFDMUIsSUFBSSxDQUFTLEVBQUUsR0FBRyxHQUFXLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDMUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN6QjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUEzQ0QsTUFBTTtJQUNDLFVBQUksR0FBVyxDQUFDLENBQUM7SUFDakIsU0FBRyxHQUFXLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQzVCLFVBQUksR0FBVyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQztJQUM3QixhQUFPLEdBQVcsYUFBYSxDQUFDO0lBd0MzQyxZQUFDO0NBQUE7QUFFRDtJQUFBO0lBaUJBLENBQUM7SUFYVSxZQUFJLEdBQVg7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksb0RBQUssRUFBRSxDQUFDO1FBQ3pCLGFBQWE7UUFDYixNQUFNLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3BELGFBQWE7UUFDYixPQUFPLE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQztJQUM1QyxDQUFDO0lBRWMsb0JBQVksR0FBM0I7UUFDSSxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFmRCxRQUFRO0lBQ0QsYUFBSyxHQUFpQixLQUFLLENBQUM7SUFldkMsY0FBQztDQUFBO0FBakJvQixzRUFBTzs7Ozs7Ozs7Ozs7Ozs7QUNwRDVCO0FBQUE7SUFZSTs7Ozs7O09BTUc7SUFDSCxpQkFBWSxNQUE0QixFQUFFLE1BQThCLEVBQUUsSUFBa0IsRUFBRSxJQUFxQjtRQUF2RyxzQ0FBNEI7UUFBRSxzQ0FBOEI7UUFBc0IsbUNBQXFCO1FBWG5ILFNBQUksR0FBWSxLQUFLLENBQUM7UUFDWixRQUFHLEdBQUcsQ0FBQyxDQUFDO1FBV2QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQ7O1FBRUk7SUFDSSxxQkFBRyxHQUFYLFVBQVksTUFBVyxFQUFFLE1BQXVCLEVBQUUsSUFBa0IsRUFBRSxJQUFZO1FBQVosbUNBQVk7UUFDOUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVEOztRQUVJO0lBQ0oscUJBQUcsR0FBSDtRQUNJLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFDckMsSUFBSSxFQUFFLEdBQVcsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUMxQixJQUFJLE1BQU0sR0FBUSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsR0FBRyxLQUFLLEVBQUUsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMvQyxPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRUQ7O1FBRUk7SUFDSix5QkFBTyxHQUFQLFVBQVEsSUFBUztRQUNiLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJO1lBQUUsT0FBTyxJQUFJLENBQUM7UUFDckMsSUFBSSxFQUFFLEdBQVcsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUMxQixJQUFJLE1BQVcsQ0FBQztRQUNoQixJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFDZCxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdEQ7YUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDcEMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDaEQ7YUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDbEIsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUNuRTthQUFNO1lBQ0gsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDO1NBQ2hEO1FBQ0QsSUFBSSxDQUFDLEdBQUcsS0FBSyxFQUFFLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDL0MsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVEOztRQUVJO0lBQ0osdUJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRDs7UUFFSTtJQUNKLHlCQUFPLEdBQVA7UUFDSSxJQUFJLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFO1lBQ2QsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDYixPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztTQUNwQztJQUNMLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0ksY0FBTSxHQUFiLFVBQWMsTUFBVyxFQUFFLE1BQXVCLEVBQUUsSUFBeUIsRUFBRSxJQUFvQjtRQUEvQyxrQ0FBeUI7UUFBRSxrQ0FBb0I7UUFDL0YsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU07WUFDcEIsT0FBUSxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBYyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM1RSxPQUFPLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFqR0QsT0FBTztJQUNVLGFBQUssR0FBYyxFQUFFLENBQUM7SUFDeEIsYUFBSyxHQUFXLENBQUMsQ0FBQztJQWdHckMsY0FBQztDQUFBO0FBbkdvQixzRUFBTzs7Ozs7Ozs7Ozs7OztBQ0E1QjtBQUFBO0FBQUE7OztJQUdJO0FBQzZCO0FBRWpDO0lBb0JJLGVBQVksVUFBMEI7UUFBMUIsOENBQTBCO1FBWnRDLFVBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsY0FBUyxHQUFXLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUMvQixjQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLG1CQUFtQjtRQUNuQixXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQ25CLGVBQVUsR0FBVyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFFeEIsU0FBSSxHQUFVLEVBQUUsQ0FBQztRQUNqQixjQUFTLEdBQVUsRUFBRSxDQUFDO1FBQ3RCLFVBQUssR0FBVSxFQUFFLENBQUM7UUFDbEIsV0FBTSxHQUFXLENBQUMsQ0FBQztRQUd2QixVQUFVLElBQUksS0FBSyxDQUFDLFNBQVMsSUFBSSxLQUFLLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0RixDQUFDO0lBR0Qsc0JBQUksd0JBQUs7UUFEVCxxQkFBcUI7YUFDckI7WUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7SUFFRCxRQUFRO0lBQ1IsdUJBQU8sR0FBUDtRQUNJLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEVBQUU7WUFDakIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDaEIsT0FBTztTQUNWO1FBQ0QsSUFBSSxLQUFLLEdBQVcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDakUsSUFBSSxHQUFHLEdBQVcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzdCLElBQUksS0FBSyxHQUFZLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDckQsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNuRCxJQUFJLEtBQUssR0FBVyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNsRSxJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQztRQUV0QixJQUFJLFFBQVEsR0FBVSxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBVyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDN0QsSUFBSSxPQUFPLEdBQWlCLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssSUFBSSxFQUFFO2dCQUN6QixJQUFJLENBQUMsR0FBVyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztnQkFDakQsSUFBSSxDQUFDLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTtvQkFDdEIsSUFBSSxPQUFPLENBQUMsTUFBTSxFQUFFO3dCQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsSUFBSSxLQUFLLEVBQUU7NEJBQzdCLE9BQU8sQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQzs0QkFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQzs0QkFDbkIsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDLE9BQU8sRUFBRTtnQ0FDckIsT0FBTyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQzs2QkFDdkY7eUJBQ0o7NkJBQU07NEJBQ0gsY0FBYzs0QkFDZCxPQUFPLENBQUMsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFO2dDQUN6QixPQUFPLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUM7Z0NBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDOzZCQUNyQjt5QkFDSjtxQkFDSjt5QkFBTTt3QkFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO3FCQUNyQjtpQkFDSjthQUNKO2lCQUFNO2dCQUNILElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUNqQjtTQUNKO1FBRUQsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsSUFBSSxLQUFLLEdBQUcsR0FBRyxLQUFLLENBQUM7WUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDckUsQ0FBQztJQUVELGdCQUFnQjtJQUNoQiw4QkFBYyxHQUFkO1FBQ0ksSUFBSSxRQUFRLEdBQVUsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNyQyxLQUFLLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQVcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzdELElBQUksT0FBTyxHQUFpQixRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEMsSUFBSSxPQUFPLENBQUMsTUFBTSxLQUFLLElBQUk7Z0JBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7O2dCQUNqRCxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3RDO1FBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzVCLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO0lBQzFCLENBQUM7SUFFRCxhQUFhO0lBQ2IsK0JBQWUsR0FBZixVQUFnQixPQUFxQjtRQUNqQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLE9BQU87WUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDckUsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2hCLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxxQkFBcUI7SUFDckIsdUJBQU8sR0FBUCxVQUFRLFFBQWlCLEVBQUUsTUFBZSxFQUFFLEtBQWEsRUFBRSxNQUFXLEVBQUUsTUFBZ0IsRUFBRSxJQUFXLEVBQUUsV0FBb0I7UUFDdkgsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNSLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzNCLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFDRCxJQUFJLE9BQXFCLENBQUM7UUFDMUIsSUFBSSxXQUFXLEVBQUU7WUFDYixPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDM0MsSUFBSSxPQUFPLEVBQUU7Z0JBQ1QsT0FBTyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7Z0JBQ3hCLE9BQU8sQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO2dCQUM1QixPQUFPLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztnQkFDdEIsT0FBTyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7Z0JBQ3hCLE9BQU8sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO2dCQUN4QixPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztnQkFDcEIsT0FBTyxDQUFDLE9BQU8sR0FBRyxLQUFLLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDdEcsT0FBTyxPQUFPLENBQUM7YUFDbEI7U0FDSjtRQUNELE9BQU8sR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksWUFBWSxFQUFFLENBQUM7UUFDMUUsT0FBTyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDeEIsT0FBTyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDNUIsT0FBTyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDdEIsT0FBTyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDeEIsT0FBTyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDeEIsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDcEIsT0FBTyxDQUFDLE9BQU8sR0FBRyxLQUFLLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUV0RyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFFRCxhQUFhO0lBQ2IsMkJBQVcsR0FBWCxVQUFZLE1BQVcsRUFBRSxNQUFXO1FBQ2hDLElBQUksR0FBRyxHQUFXLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsZ0RBQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZGLElBQUksR0FBRyxHQUFXLE1BQU0sQ0FBQyxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7UUFDM0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQ7O1FBRUk7SUFDSiw2QkFBYSxHQUFiLFVBQWMsT0FBcUI7UUFDL0IsSUFBSSxNQUFNLEdBQVEsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUNqQyxJQUFJLE1BQU0sR0FBUSxPQUFPLENBQUMsTUFBTSxDQUFDO1FBQ2pDLElBQUksR0FBRyxHQUFXLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsZ0RBQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZGLElBQUksR0FBRyxHQUFXLE1BQU0sQ0FBQyxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7UUFDM0UsT0FBTyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQztJQUNyQyxDQUFDO0lBR0Q7Ozs7Ozs7T0FPRztJQUNILG9CQUFJLEdBQUosVUFBSyxLQUFhLEVBQUUsTUFBVyxFQUFFLE1BQWdCLEVBQUUsSUFBa0IsRUFBRSxXQUEyQjtRQUEvQyxrQ0FBa0I7UUFBRSxnREFBMkI7UUFDOUYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDSCxvQkFBSSxHQUFKLFVBQUssS0FBYSxFQUFFLE1BQVcsRUFBRSxNQUFnQixFQUFFLElBQWtCLEVBQUUsV0FBMkIsRUFBRSxTQUEwQjtRQUEzRSxrQ0FBa0I7UUFBRSxnREFBMkI7UUFBRSw2Q0FBMEI7UUFDMUgsSUFBTSxPQUFPLEdBQWlCLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDbEcsSUFBSSxPQUFPO1lBQUUsT0FBTyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7SUFDL0MsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSCx5QkFBUyxHQUFULFVBQVUsS0FBYSxFQUFFLE1BQVcsRUFBRSxNQUFnQixFQUFFLElBQWtCLEVBQUUsV0FBMkI7UUFBL0Msa0NBQWtCO1FBQUUsZ0RBQTJCO1FBQ25HLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSCx5QkFBUyxHQUFULFVBQVUsS0FBYSxFQUFFLE1BQVcsRUFBRSxNQUFnQixFQUFFLElBQWtCLEVBQUUsV0FBMkI7UUFBL0Msa0NBQWtCO1FBQUUsZ0RBQTJCO1FBQ25HLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVELGFBQWE7SUFDYix3QkFBUSxHQUFSO1FBQ0ksT0FBTyxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsUUFBUSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQ2hGLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gscUJBQUssR0FBTCxVQUFNLE1BQVcsRUFBRSxNQUFnQjtRQUMvQixJQUFJLE9BQU8sR0FBaUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDN0QsSUFBSSxPQUFPLEVBQUU7WUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDOUIsT0FBTyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDaEIsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ25CO0lBQ0wsQ0FBQztJQUVEOzs7T0FHRztJQUNILHdCQUFRLEdBQVIsVUFBUyxNQUFXO1FBQ2hCLElBQUksQ0FBQyxNQUFNO1lBQUUsT0FBTztRQUNwQixJQUFJLENBQUMsR0FBVyxDQUFDLENBQUM7UUFDbEIsSUFBTSxDQUFDLEdBQVcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7UUFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2YsSUFBTSxPQUFPLEdBQWlCLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEQsSUFBSSxPQUFPLENBQUMsTUFBTSxLQUFLLE1BQU0sRUFBRTtnQkFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO2dCQUM5QixPQUFPLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztnQkFDaEIsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ25CO1NBQ0o7SUFDTCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILHdCQUFRLEdBQVIsVUFBUyxNQUFXLEVBQUUsTUFBZ0I7UUFDbEMsSUFBTSxPQUFPLEdBQWlCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQy9ELElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxNQUFNLElBQUksSUFBSSxFQUFFO1lBQ25DLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztZQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3JCO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0gscUJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFFRDs7T0FFRztJQUNILHNCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBclFELFdBQVc7SUFDSixlQUFTLEdBQVUsSUFBSSxDQUFDO0lBRS9CLE9BQU87SUFDUSxXQUFLLEdBQVUsRUFBRSxDQUFDO0lBQ2xCLFVBQUksR0FBVyxDQUFDLENBQUM7SUFpUXBDLFlBQUM7Q0FBQTtBQXZRb0Isb0VBQUs7QUF5UTFCLGVBQWU7QUFDZjtJQUFBO0lBMEJBLENBQUM7SUFmRyw0QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztJQUVELDBCQUFHLEdBQUgsVUFBSSxTQUFrQjtRQUNsQixJQUFJLE1BQU0sR0FBUSxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzlCLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxTQUFTO1lBQUUsT0FBTyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDcEQsSUFBSSxNQUFNLEdBQWEsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNuQyxJQUFJLElBQUksR0FBVSxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzVCLFNBQVMsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDMUIsSUFBSSxNQUFNLElBQUksSUFBSTtZQUFFLE9BQU87UUFDM0IsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7O0FDMVNEO0FBQUE7QUFBQTtBQUEwQztBQUNJO0FBRTlDO0lBQ0k7UUFDSSxPQUFPO1FBQ1AsMERBQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUVmLDREQUFTLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUNMLFdBQUM7QUFBRCxDQUFDO0FBRUQsSUFBSSxJQUFJLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7O0FDWlgsbUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvTWFpbi50c1wiKTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImltcG9ydCB7IFVuaXR5RW5naW5lIH0gZnJvbSBcImNzaGFycFwiO1xyXG5pbXBvcnQgSGFuZGxlciBmcm9tIFwiLi4vRnJhbWV3b3JrL1V0aWxzL0hhbmRsZXJcIjtcclxuXHJcbi8qXHJcbiogSGFuZGxlcuWbnuiwg+ekuuS+i1xyXG4qICovXHJcbmV4cG9ydCBjbGFzcyBFeEhhbmRsZXIge1xyXG4gICAgcHVibGljIHN0YXRpYyBSdW4oKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGhhbmRsZXIgPSBIYW5kbGVyLmNyZWF0ZShudWxsLCAobmFtZSkgPT4ge1xyXG4gICAgICAgICAgICBVbml0eUVuZ2luZS5EZWJ1Zy5Mb2dGb3JtYXQoXCJnZXQgbmFtZSBpcz0+ezB9XCIsIG5hbWUpO1xyXG4gICAgICAgIH0sIFtcIkFlclwiXSwgdHJ1ZSk7XHJcbiAgICAgICAgaGFuZGxlci5ydW4oKVxyXG4gICAgfVxyXG59IiwiLyog5YWo5bGA57G75YWl5Y+jKi9cclxuaW1wb3J0IFRpbWVyIGZyb20gXCIuL1V0aWxzL1RpbWVyXCI7XHJcbmltcG9ydCBVSU1hbmFnZXIgZnJvbSBcIi4vVUkvVUlNYW5hZ2VyXCI7XHJcbmltcG9ydCB7R2FtZU9iamVjdFBvb2x9IGZyb20gXCIuL1Jlcy9HYW1lT2JqZWN0UG9vbFwiO1xyXG5cclxuY2xhc3MgVXRpbHMge1xyXG4gICAgLyppZCovXHJcbiAgICBzdGF0aWMgX2dpZDogbnVtYmVyID0gMTtcclxuICAgIHN0YXRpYyBfcGk6IG51bWJlciA9IDE4MCAvIE1hdGguUEk7XHJcbiAgICBzdGF0aWMgX3BpMjogbnVtYmVyID0gTWF0aC5QSSAvIDE4MDtcclxuICAgIHN0YXRpYyBfZXh0UmVnOiBSZWdFeHAgPSAvXFwuKFxcdyspXFw/Py9nO1xyXG5cclxuICAgIC8qXHJcbiAgICAqIOinkuW6pui9rOW8p+W6plxyXG4gICAgKiAqL1xyXG4gICAgcHVibGljIHN0YXRpYyB0b1JhZGlhbihhbmdsZTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gYW5nbGUgKiBVdGlscy5fcGkyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIFxyXG4gICAgKiDlvKfluqbovazop5LluqZcclxuICAgICogKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgdG9BbmdsZShyYWRpYW46IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHJhZGlhbiAqIFV0aWxzLl9waTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgKiDojrflj5bllK/kuIBpZFxyXG4gICAgKiAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRHSUQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gVXRpbHMuX2dpZCsrO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIDxwPui/nuaOpeaVsOe7hOOAguWSjGFycmF555qEY29uY2F055u45q+U77yM5q2k5pa55rOV5LiN5Yib5bu65paw5a+56LGhPC9wPlxyXG4gICAgICogPGI+5rOo5oSP77yaPC9iPuiLpSDlj4LmlbAgYSDkuI3kuLrnqbrvvIzliJnkvJrmlLnlj5jlj4LmlbAgc291cmNlIOeahOWAvOS4uui/nuaOpeWQjueahOaVsOe7hOOAglxyXG4gICAgICogQHBhcmFtICAgIHNvdXJjZSDlvoXov57mjqXnmoTmlbDnu4Tnm67moIflr7nosaHjgIJcclxuICAgICAqIEBwYXJhbSAgICBhcnJheSDlvoXov57mjqXnmoTmlbDnu4Tlr7nosaHjgIJcclxuICAgICAqIEByZXR1cm4g6L+e5o6l5ZCO55qE5pWw57uE44CCXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgY29uY2F0QXJyYXkoc291cmNlOiBhbnlbXSwgYXJyYXk6IGFueVtdKTogYW55W10ge1xyXG4gICAgICAgIGlmICghYXJyYXkpIHJldHVybiBzb3VyY2U7XHJcbiAgICAgICAgaWYgKCFzb3VyY2UpIHJldHVybiBhcnJheTtcclxuICAgICAgICBsZXQgaTogbnVtYmVyLCBsZW46IG51bWJlciA9IGFycmF5Lmxlbmd0aDtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgc291cmNlLnB1c2goYXJyYXlbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc291cmNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVbml0eVRzIHtcclxuICAgIC8qIOW3peWFt+exuyovXHJcbiAgICBzdGF0aWMgdXRpbHM6IHR5cGVvZiBVdGlscyA9IFV0aWxzO1xyXG4gICAgLyog6K6h5pe25ZmoKi9cclxuICAgIHN0YXRpYyB0aW1lcjogVGltZXI7XHJcblxyXG4gICAgc3RhdGljIGluaXQoKSB7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IG5ldyBUaW1lcigpO1xyXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICBnbG9iYWwuX190Z2pzUmVnaXN0ZXJUaWNrSGFuZGxlcih0aGlzLl90aW1lclVwZGF0ZSk7XHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgIGRlbGV0ZSBnbG9iYWwuX190Z2pzUmVnaXN0ZXJUaWNrSGFuZGxlcjtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfdGltZXJVcGRhdGUoKSB7XHJcbiAgICAgICAgVW5pdHlUcy50aW1lci5fdXBkYXRlKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGFuZGxlciB7XHJcbiAgICAvKui1hOa6kOaxoCovXHJcbiAgICBwcm90ZWN0ZWQgc3RhdGljIF9wb29sOiBIYW5kbGVyW10gPSBbXTtcclxuICAgIHByaXZhdGUgc3RhdGljIF9ndWlkOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIGNhbGxlcjogb2JqZWN0IHwgbnVsbDtcclxuICAgIG1ldGhvZDogRnVuY3Rpb24gfCBudWxsO1xyXG4gICAgYXJnczogYW55W10gfCBudWxsO1xyXG4gICAgb25jZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJvdGVjdGVkIF9pZCA9IDA7XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5qC55o2u5oyH5a6a55qE5bGe5oCn5YC877yM5Yib5bu65LiA5LiqIDxjb2RlPkhhbmRsZXI8L2NvZGU+IOexu+eahOWunuS+i+OAglxyXG4gICAgICogQHBhcmFtICAgIGNhbGxlciDmiafooYzln5/jgIJcclxuICAgICAqIEBwYXJhbSAgICBtZXRob2Qg5aSE55CG5Ye95pWw44CCXHJcbiAgICAgKiBAcGFyYW0gICAgYXJncyDlh73mlbDlj4LmlbDjgIJcclxuICAgICAqIEBwYXJhbSAgICBvbmNlIOaYr+WQpuWPquaJp+ihjOS4gOasoeOAglxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihjYWxsZXI6IG9iamVjdCB8IG51bGwgPSBudWxsLCBtZXRob2Q6IEZ1bmN0aW9uIHwgbnVsbCA9IG51bGwsIGFyZ3M6IGFueVtdIHwgbnVsbCwgb25jZTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgdGhpcy5zZXQoY2FsbGVyLCBtZXRob2QsIGFyZ3MsIG9uY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAqIEByZXR1cm4g6L+U5ZueSGFuZGxlcuWunuS+i1xyXG4gICAgKiAqL1xyXG4gICAgcHJpdmF0ZSBzZXQoY2FsbGVyOiBhbnksIG1ldGhvZDogRnVuY3Rpb24gfCBudWxsLCBhcmdzOiBhbnlbXSB8IG51bGwsIG9uY2UgPSBmYWxzZSk6IEhhbmRsZXIge1xyXG4gICAgICAgIHRoaXMuX2lkID0gSGFuZGxlci5fZ3VpZCsrO1xyXG4gICAgICAgIHRoaXMuY2FsbGVyID0gY2FsbGVyO1xyXG4gICAgICAgIHRoaXMubWV0aG9kID0gbWV0aG9kO1xyXG4gICAgICAgIHRoaXMuYXJncyA9IGFyZ3M7XHJcbiAgICAgICAgdGhpcy5vbmNlID0gb25jZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgKiDnm7TmjqXmiafooYxcclxuICAgICogKi9cclxuICAgIHJ1bigpOiBhbnkge1xyXG4gICAgICAgIGlmICh0aGlzLm1ldGhvZCA9PSBudWxsKSByZXR1cm4gbnVsbDtcclxuICAgICAgICBsZXQgaWQ6IG51bWJlciA9IHRoaXMuX2lkO1xyXG4gICAgICAgIGxldCByZXN1bHQ6IGFueSA9IHRoaXMubWV0aG9kLmFwcGx5KHRoaXMuY2FsbGVyLCB0aGlzLmFyZ3MpO1xyXG4gICAgICAgIHRoaXMuX2lkID09PSBpZCAmJiB0aGlzLm9uY2UgJiYgdGhpcy5yZWNvdmVyKCk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgKiDluKblj4LmlbDnmoTmiafooYwg6Ieq5a6a5LmJ5Y+C5pWw5Zyo5ZCOXHJcbiAgICAqICovXHJcbiAgICBydW5XaXRoKGRhdGE6IGFueSk6IGFueSB7XHJcbiAgICAgICAgaWYgKHRoaXMubWV0aG9kID09IG51bGwpIHJldHVybiBudWxsO1xyXG4gICAgICAgIGxldCBpZDogbnVtYmVyID0gdGhpcy5faWQ7XHJcbiAgICAgICAgbGV0IHJlc3VsdDogYW55O1xyXG4gICAgICAgIGlmIChkYXRhID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5tZXRob2QuYXBwbHkodGhpcy5jYWxsZXIsIHRoaXMuYXJncyk7XHJcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy5hcmdzICYmICFkYXRhLnVuc2hpZnQpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5tZXRob2QuY2FsbCh0aGlzLmNhbGxlciwgZGF0YSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmFyZ3MpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5tZXRob2QuYXBwbHkodGhpcy5jYWxsZXIsIHRoaXMuYXJncy5jb25jYXQoZGF0YSkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMubWV0aG9kLmFwcGx5KHRoaXMuY2FsbGVyLCBkYXRhKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9pZCA9PT0gaWQgJiYgdGhpcy5vbmNlICYmIHRoaXMucmVjb3ZlcigpO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICog5riF55CG5a+56LGhXHJcbiAgICAqICovXHJcbiAgICBjbGVhcigpOiBIYW5kbGVyIHtcclxuICAgICAgICB0aGlzLmNhbGxlciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5tZXRob2QgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuYXJncyA9IG51bGw7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICog5Zue5pS25a+56LGhXHJcbiAgICAqICovXHJcbiAgICByZWNvdmVyKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl9pZCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5faWQgPSAwO1xyXG4gICAgICAgICAgICBIYW5kbGVyLl9wb29sLnB1c2godGhpcy5jbGVhcigpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDku47lr7nosaHmsaDlhoXliJvlu7rkuIDkuKpIYW5kbGVy77yM6buY6K6k5Lya5omn6KGM5LiA5qyh5bm256uL5Y2z5Zue5pS277yM5aaC5p6c5LiN6ZyA6KaB6Ieq5Yqo5Zue5pS277yM6K6+572ub25jZeWPguaVsOS4umZhbHNl44CCXHJcbiAgICAgKiBAcGFyYW0gICAgY2FsbGVyIOaJp+ihjOWfnyh0aGlzKeOAglxyXG4gICAgICogQHBhcmFtICAgIG1ldGhvZCDlm57osIPmlrnms5XjgIJcclxuICAgICAqIEBwYXJhbSAgICBhcmdzIOaQuuW4pueahOWPguaVsOOAglxyXG4gICAgICogQHBhcmFtICAgIG9uY2Ug5piv5ZCm5Y+q5omn6KGM5LiA5qyh77yM5aaC5p6c5Li6dHJ1Ze+8jOWbnuiwg+WQjuaJp+ihjHJlY292ZXIoKei/m+ihjOWbnuaUtu+8jOm7mOiupOS4unRydWXjgIJcclxuICAgICAqIEByZXR1cm4gIOi/lOWbnuWIm+W7uueahGhhbmRsZXLlrp7kvovjgIJcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNyZWF0ZShjYWxsZXI6IGFueSwgbWV0aG9kOiBGdW5jdGlvbiB8IG51bGwsIGFyZ3M6IGFueVtdIHwgbnVsbCA9IG51bGwsIG9uY2U6IGJvb2xlYW4gPSB0cnVlKTogSGFuZGxlciB7XHJcbiAgICAgICAgaWYgKEhhbmRsZXIuX3Bvb2wubGVuZ3RoKVxyXG4gICAgICAgICAgICByZXR1cm4gKEhhbmRsZXIuX3Bvb2wucG9wKCkgYXMgSGFuZGxlcikuc2V0KGNhbGxlciwgbWV0aG9kLCBhcmdzLCBvbmNlKTtcclxuICAgICAgICByZXR1cm4gbmV3IEhhbmRsZXIoY2FsbGVyLCBtZXRob2QsIGFyZ3MsIG9uY2UpO1xyXG4gICAgfVxyXG59IiwiLypcclxuKiBcclxuKiDml7bpkp/nrqHnkIblmagg5L2/55SoVXRmLnRpbWVy6K6/6ZeuXHJcbiogKi9cclxuaW1wb3J0IFVuaXR5VHMgZnJvbSBcIi4uL1VuaXR5VHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVyIHtcclxuICAgIC8qdGltZXLlhaXlj6MqL1xyXG4gICAgc3RhdGljIGdTeXNUaW1lcjogVGltZXIgPSBudWxsO1xyXG5cclxuICAgIC8q5a+56LGh5rGgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIF9wb29sOiBhbnlbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX21pZDogbnVtYmVyID0gMTtcclxuXHJcbiAgICBzY2FsZTogbnVtYmVyID0gMTtcclxuICAgIGN1cnJUaW1lcjogbnVtYmVyID0gRGF0ZS5ub3coKTtcclxuICAgIGN1cnJGcmFtZTogbnVtYmVyID0gMDtcclxuICAgIC8q5Lik5bin5LmL6Ze055qE5pe26Ze06Ze06ZqU77yM5Y2V5L2N77ya5q+r56eSKi9cclxuICAgIF9kZWx0YTogbnVtYmVyID0gMDtcclxuICAgIF9sYXN0VGltZXI6IG51bWJlciA9IERhdGUubm93KCk7XHJcblxyXG4gICAgcHJpdmF0ZSBfbWFwOiBhbnlbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBfaGFuZGxlcnM6IGFueVtdID0gW107XHJcbiAgICBwcml2YXRlIF90ZW1wOiBhbnlbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBfY291bnQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgY29uc3RydWN0b3IoYXV0b0FjdGl2ZTogYm9vbGVhbiA9IHRydWUpIHtcclxuICAgICAgICBhdXRvQWN0aXZlICYmIFRpbWVyLmdTeXNUaW1lciAmJiBUaW1lci5nU3lzVGltZXIuZnJhbWVMb29wKDEsIHRoaXMsIHRoaXMuX3VwZGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyog6I635Y+W5Lik5bin5LmL6Ze055qE5pe26Ze06Ze06ZqU77yM5Y2V5L2N5q+r56eSKi9cclxuICAgIGdldCBkZWx0YSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kZWx0YTtcclxuICAgIH1cclxuXHJcbiAgICAvKiDluKflvqrnjq8qL1xyXG4gICAgX3VwZGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5zY2FsZSA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xhc3RUaW1lciA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2RlbHRhID0gMDtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZnJhbWU6IG51bWJlciA9IHRoaXMuY3VyckZyYW1lID0gdGhpcy5jdXJyRnJhbWUgKyB0aGlzLnNjYWxlO1xyXG4gICAgICAgIGxldCBub3c6IG51bWJlciA9IERhdGUubm93KCk7XHJcbiAgICAgICAgbGV0IGF3YWtlOiBib29sZWFuID0gKG5vdyAtIHRoaXMuX2xhc3RUaW1lcikgPiAzMDAwMDtcclxuICAgICAgICB0aGlzLl9kZWx0YSA9IChub3cgLSB0aGlzLl9sYXN0VGltZXIpICogdGhpcy5zY2FsZTtcclxuICAgICAgICBsZXQgdGltZXI6IG51bWJlciA9IHRoaXMuY3VyclRpbWVyID0gdGhpcy5jdXJyVGltZXIgKyB0aGlzLl9kZWx0YTtcclxuICAgICAgICB0aGlzLl9sYXN0VGltZXIgPSBub3c7XHJcblxyXG4gICAgICAgIGxldCBoYW5kbGVyczogYW55W10gPSB0aGlzLl9oYW5kbGVycztcclxuICAgICAgICB0aGlzLl9jb3VudCA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMCwgbjogbnVtYmVyID0gaGFuZGxlcnMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBoYW5kbGVyOiBUaW1lckhhbmRsZXIgPSBoYW5kbGVyc1tpXTtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZXIubWV0aG9kICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdDogbnVtYmVyID0gaGFuZGxlci51c2VGcmFtZSA/IGZyYW1lIDogdGltZXI7XHJcbiAgICAgICAgICAgICAgICBpZiAodCA+PSBoYW5kbGVyLmV4ZVRpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaGFuZGxlci5yZXBlYXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFoYW5kbGVyLmp1bXBGcmFtZSB8fCBhd2FrZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlci5leGVUaW1lICs9IGhhbmRsZXIuZGVsYXk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyLnJ1bihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodCA+IGhhbmRsZXIuZXhlVGltZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXIuZXhlVGltZSArPSBNYXRoLmNlaWwoKHQgLSBoYW5kbGVyLmV4ZVRpbWUpIC8gaGFuZGxlci5kZWxheSkgKiBoYW5kbGVyLmRlbGF5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5LiA5bin5Y+v5aSa5qyh5omn6KGM55qE5oOF5Ya144CCXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAodCA+PSBoYW5kbGVyLmV4ZVRpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyLmV4ZVRpbWUgKz0gaGFuZGxlci5kZWxheTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyLnJ1bihmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXIucnVuKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NvdW50Kys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9jb3VudCA+IDMwIHx8IGZyYW1lICUgMjAwID09PSAwKSB0aGlzLl9jbGVhckhhbmRsZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyrmlbTnkIZoYW5kbGVyc+aVsOe7hCovXHJcbiAgICBfY2xlYXJIYW5kbGVycygpOiB2b2lkIHtcclxuICAgICAgICBsZXQgaGFuZGxlcnM6IGFueVtdID0gdGhpcy5faGFuZGxlcnM7XHJcbiAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMCwgbjogbnVtYmVyID0gaGFuZGxlcnMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBoYW5kbGVyOiBUaW1lckhhbmRsZXIgPSBoYW5kbGVyc1tpXTtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZXIubWV0aG9kICE9PSBudWxsKSB0aGlzLl90ZW1wLnB1c2goaGFuZGxlcik7XHJcbiAgICAgICAgICAgIGVsc2UgdGhpcy5fcmVjb3ZlckhhbmRsZXIoaGFuZGxlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2hhbmRsZXJzID0gdGhpcy5fdGVtcDtcclxuICAgICAgICBoYW5kbGVycy5sZW5ndGggPSAwO1xyXG4gICAgICAgIHRoaXMuX3RlbXAgPSBoYW5kbGVycztcclxuICAgIH1cclxuXHJcbiAgICAvKuWbnuaUtmhhbmRsZXIqL1xyXG4gICAgX3JlY292ZXJIYW5kbGVyKGhhbmRsZXI6IFRpbWVySGFuZGxlcik6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl9tYXBbaGFuZGxlci5rZXldID09IGhhbmRsZXIpIHRoaXMuX21hcFtoYW5kbGVyLmtleV0gPSBudWxsO1xyXG4gICAgICAgIGhhbmRsZXIuY2xlYXIoKTtcclxuICAgICAgICBUaW1lci5fcG9vbC5wdXNoKGhhbmRsZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIOWIm+W7ulRpbWVySGFuZGxlcuWunuS+iyovXHJcbiAgICBfY3JlYXRlKHVzZUZyYW1lOiBib29sZWFuLCByZXBlYXQ6IGJvb2xlYW4sIGRlbGF5OiBudW1iZXIsIGNhbGxlcjogYW55LCBtZXRob2Q6IEZ1bmN0aW9uLCBhcmdzOiBhbnlbXSwgY292ZXJCZWZvcmU6IGJvb2xlYW4pOiBUaW1lckhhbmRsZXIge1xyXG4gICAgICAgIGlmICghZGVsYXkpIHtcclxuICAgICAgICAgICAgbWV0aG9kLmFwcGx5KGNhbGxlciwgYXJncyk7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaGFuZGxlcjogVGltZXJIYW5kbGVyO1xyXG4gICAgICAgIGlmIChjb3ZlckJlZm9yZSkge1xyXG4gICAgICAgICAgICBoYW5kbGVyID0gdGhpcy5fZ2V0SGFuZGxlcihjYWxsZXIsIG1ldGhvZCk7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGVyKSB7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVyLnJlcGVhdCA9IHJlcGVhdDtcclxuICAgICAgICAgICAgICAgIGhhbmRsZXIudXNlRnJhbWUgPSB1c2VGcmFtZTtcclxuICAgICAgICAgICAgICAgIGhhbmRsZXIuZGVsYXkgPSBkZWxheTtcclxuICAgICAgICAgICAgICAgIGhhbmRsZXIuY2FsbGVyID0gY2FsbGVyO1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlci5tZXRob2QgPSBtZXRob2Q7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVyLmFyZ3MgPSBhcmdzO1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlci5leGVUaW1lID0gZGVsYXkgKyAodXNlRnJhbWUgPyB0aGlzLmN1cnJGcmFtZSA6IHRoaXMuY3VyclRpbWVyICsgRGF0ZS5ub3coKSAtIHRoaXMuX2xhc3RUaW1lcik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBoYW5kbGVyID0gVGltZXIuX3Bvb2wubGVuZ3RoID4gMCA/IFRpbWVyLl9wb29sLnBvcCgpIDogbmV3IFRpbWVySGFuZGxlcigpO1xyXG4gICAgICAgIGhhbmRsZXIucmVwZWF0ID0gcmVwZWF0O1xyXG4gICAgICAgIGhhbmRsZXIudXNlRnJhbWUgPSB1c2VGcmFtZTtcclxuICAgICAgICBoYW5kbGVyLmRlbGF5ID0gZGVsYXk7XHJcbiAgICAgICAgaGFuZGxlci5jYWxsZXIgPSBjYWxsZXI7XHJcbiAgICAgICAgaGFuZGxlci5tZXRob2QgPSBtZXRob2Q7XHJcbiAgICAgICAgaGFuZGxlci5hcmdzID0gYXJncztcclxuICAgICAgICBoYW5kbGVyLmV4ZVRpbWUgPSBkZWxheSArICh1c2VGcmFtZSA/IHRoaXMuY3VyckZyYW1lIDogdGhpcy5jdXJyVGltZXIgKyBEYXRlLm5vdygpIC0gdGhpcy5fbGFzdFRpbWVyKTtcclxuXHJcbiAgICAgICAgdGhpcy5faW5kZXhIYW5kbGVyKGhhbmRsZXIpO1xyXG4gICAgICAgIHRoaXMuX2hhbmRsZXJzLnB1c2goaGFuZGxlcik7XHJcbiAgICAgICAgcmV0dXJuIGhhbmRsZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLyrojrflj5ZoYW5kbGVyKi9cclxuICAgIF9nZXRIYW5kbGVyKGNhbGxlcjogYW55LCBtZXRob2Q6IGFueSk6IFRpbWVySGFuZGxlciB7XHJcbiAgICAgICAgbGV0IGNpZDogbnVtYmVyID0gY2FsbGVyID8gY2FsbGVyLiRfR0lEIHx8IChjYWxsZXIuJF9HSUQgPSBVbml0eVRzLnV0aWxzLmdldEdJRCgpKSA6IDA7XHJcbiAgICAgICAgbGV0IG1pZDogbnVtYmVyID0gbWV0aG9kLiRfVElEIHx8IChtZXRob2QuJF9USUQgPSAoVGltZXIuX21pZCsrKSAqIDEwMDAwMCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcFtjaWQgKyBtaWRdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAqIOe0ouW8lWhhbmRsZXJcclxuICAgICogKi9cclxuICAgIF9pbmRleEhhbmRsZXIoaGFuZGxlcjogVGltZXJIYW5kbGVyKSB7XHJcbiAgICAgICAgbGV0IGNhbGxlcjogYW55ID0gaGFuZGxlci5jYWxsZXI7XHJcbiAgICAgICAgbGV0IG1ldGhvZDogYW55ID0gaGFuZGxlci5tZXRob2Q7XHJcbiAgICAgICAgbGV0IGNpZDogbnVtYmVyID0gY2FsbGVyID8gY2FsbGVyLiRfR0lEIHx8IChjYWxsZXIuJF9HSUQgPSBVbml0eVRzLnV0aWxzLmdldEdJRCgpKSA6IDA7XHJcbiAgICAgICAgbGV0IG1pZDogbnVtYmVyID0gbWV0aG9kLiRfVElEIHx8IChtZXRob2QuJF9USUQgPSAoVGltZXIuX21pZCsrKSAqIDEwMDAwMCk7XHJcbiAgICAgICAgaGFuZGxlci5rZXkgPSBjaWQgKyBtaWQ7XHJcbiAgICAgICAgdGhpcy5fbWFwW2hhbmRsZXIua2V5XSA9IGhhbmRsZXI7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5a6a5pe25omn6KGM5LiA5qyh44CCXHJcbiAgICAgKiBAcGFyYW0gICAgZGVsYXkgICAg5bu26L+f5pe26Ze0KOWNleS9jeS4uuavq+enkinjgIJcclxuICAgICAqIEBwYXJhbSAgICBjYWxsZXIgICAg5omn6KGM5Z+fKHRoaXMp44CCXHJcbiAgICAgKiBAcGFyYW0gICAgbWV0aG9kICAgIOWumuaXtuWZqOWbnuiwg+WHveaVsOOAglxyXG4gICAgICogQHBhcmFtICAgIGFyZ3MgICAg5Zue6LCD5Y+C5pWw44CCXHJcbiAgICAgKiBAcGFyYW0gICAgY292ZXJCZWZvcmUgICAg5piv5ZCm6KaG55uW5LmL5YmN55qE5bu26L+f5omn6KGM77yM6buY6K6k5Li6IHRydWUg44CCXHJcbiAgICAgKi9cclxuICAgIG9uY2UoZGVsYXk6IG51bWJlciwgY2FsbGVyOiBhbnksIG1ldGhvZDogRnVuY3Rpb24sIGFyZ3M6IGFueVtdID0gbnVsbCwgY292ZXJCZWZvcmU6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fY3JlYXRlKGZhbHNlLCBmYWxzZSwgZGVsYXksIGNhbGxlciwgbWV0aG9kLCBhcmdzLCBjb3ZlckJlZm9yZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlrprml7bph43lpI3miafooYzjgIJcclxuICAgICAqIEBwYXJhbSAgICBkZWxheSAgICDpl7TpmpTml7bpl7Qo5Y2V5L2N5q+r56eSKeOAglxyXG4gICAgICogQHBhcmFtICAgIGNhbGxlciAgICDmiafooYzln58odGhpcynjgIJcclxuICAgICAqIEBwYXJhbSAgICBtZXRob2QgICAg5a6a5pe25Zmo5Zue6LCD5Ye95pWw44CCXHJcbiAgICAgKiBAcGFyYW0gICAgYXJncyAgICDlm57osIPlj4LmlbDjgIJcclxuICAgICAqIEBwYXJhbSAgICBjb3ZlckJlZm9yZSAgICDmmK/lkKbopobnm5bkuYvliY3nmoTlu7bov5/miafooYzvvIzpu5jorqTkuLogdHJ1ZSDjgIJcclxuICAgICAqIEBwYXJhbSAgICBqdW1wRnJhbWUg5pe26ZKf5piv5ZCm6Lez5bin44CC5Z+65LqO5pe26Ze055qE5b6q546v5Zue6LCD77yM5Y2V5L2N5pe26Ze06Ze06ZqU5YaF77yM5aaC6IO95omn6KGM5aSa5qyh5Zue6LCD77yM5Ye65LqO5oCn6IO96ICD6JmR77yM5byV5pOO6buY6K6k5Y+q5omn6KGM5LiA5qyh77yM6K6+572uanVtcEZyYW1lPXRydWXlkI7vvIzliJnlm57osIPkvJrov57nu63miafooYzlpJrmrKFcclxuICAgICAqL1xyXG4gICAgbG9vcChkZWxheTogbnVtYmVyLCBjYWxsZXI6IGFueSwgbWV0aG9kOiBGdW5jdGlvbiwgYXJnczogYW55W10gPSBudWxsLCBjb3ZlckJlZm9yZTogYm9vbGVhbiA9IHRydWUsIGp1bXBGcmFtZTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgaGFuZGxlcjogVGltZXJIYW5kbGVyID0gdGhpcy5fY3JlYXRlKGZhbHNlLCB0cnVlLCBkZWxheSwgY2FsbGVyLCBtZXRob2QsIGFyZ3MsIGNvdmVyQmVmb3JlKTtcclxuICAgICAgICBpZiAoaGFuZGxlcikgaGFuZGxlci5qdW1wRnJhbWUgPSBqdW1wRnJhbWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlrprml7bmiafooYzkuIDmrKEo5Z+65LqO5bin546HKeOAglxyXG4gICAgICogQHBhcmFtICAgIGRlbGF5ICAgIOW7tui/n+WHoOW4pyjljZXkvY3kuLrluKcp44CCXHJcbiAgICAgKiBAcGFyYW0gICAgY2FsbGVyICAgIOaJp+ihjOWfnyh0aGlzKeOAglxyXG4gICAgICogQHBhcmFtICAgIG1ldGhvZCAgICDlrprml7blmajlm57osIPlh73mlbDjgIJcclxuICAgICAqIEBwYXJhbSAgICBhcmdzICAgIOWbnuiwg+WPguaVsOOAglxyXG4gICAgICogQHBhcmFtICAgIGNvdmVyQmVmb3JlICAgIOaYr+WQpuimhuebluS5i+WJjeeahOW7tui/n+aJp+ihjO+8jOm7mOiupOS4uiB0cnVlIOOAglxyXG4gICAgICovXHJcbiAgICBmcmFtZU9uY2UoZGVsYXk6IG51bWJlciwgY2FsbGVyOiBhbnksIG1ldGhvZDogRnVuY3Rpb24sIGFyZ3M6IGFueVtdID0gbnVsbCwgY292ZXJCZWZvcmU6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fY3JlYXRlKHRydWUsIGZhbHNlLCBkZWxheSwgY2FsbGVyLCBtZXRob2QsIGFyZ3MsIGNvdmVyQmVmb3JlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWumuaXtumHjeWkjeaJp+ihjCjln7rkuo7luKfnjocp44CCXHJcbiAgICAgKiBAcGFyYW0gICAgZGVsYXkgICAg6Ze06ZqU5Yeg5binKOWNleS9jeS4uuW4pynjgIJcclxuICAgICAqIEBwYXJhbSAgICBjYWxsZXIgICAg5omn6KGM5Z+fKHRoaXMp44CCXHJcbiAgICAgKiBAcGFyYW0gICAgbWV0aG9kICAgIOWumuaXtuWZqOWbnuiwg+WHveaVsOOAglxyXG4gICAgICogQHBhcmFtICAgIGFyZ3MgICAg5Zue6LCD5Y+C5pWw44CCXHJcbiAgICAgKiBAcGFyYW0gICAgY292ZXJCZWZvcmUgICAg5piv5ZCm6KaG55uW5LmL5YmN55qE5bu26L+f5omn6KGM77yM6buY6K6k5Li6IHRydWUg44CCXHJcbiAgICAgKi9cclxuICAgIGZyYW1lTG9vcChkZWxheTogbnVtYmVyLCBjYWxsZXI6IGFueSwgbWV0aG9kOiBGdW5jdGlvbiwgYXJnczogYW55W10gPSBudWxsLCBjb3ZlckJlZm9yZTogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9jcmVhdGUodHJ1ZSwgdHJ1ZSwgZGVsYXksIGNhbGxlciwgbWV0aG9kLCBhcmdzLCBjb3ZlckJlZm9yZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIOi/lOWbnue7n+iuoeS/oeaBr+OAgiovXHJcbiAgICB0b1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBcIiBoYW5kbGVyczpcIiArIHRoaXMuX2hhbmRsZXJzLmxlbmd0aCArIFwiIHBvb2w6XCIgKyBUaW1lci5fcG9vbC5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmuIXnkIblrprml7blmajjgIJcclxuICAgICAqIEBwYXJhbSAgICBjYWxsZXIg5omn6KGM5Z+fKHRoaXMp44CCXHJcbiAgICAgKiBAcGFyYW0gICAgbWV0aG9kIOWumuaXtuWZqOWbnuiwg+WHveaVsOOAglxyXG4gICAgICovXHJcbiAgICBjbGVhcihjYWxsZXI6IGFueSwgbWV0aG9kOiBGdW5jdGlvbik6IHZvaWQge1xyXG4gICAgICAgIGxldCBoYW5kbGVyOiBUaW1lckhhbmRsZXIgPSB0aGlzLl9nZXRIYW5kbGVyKGNhbGxlciwgbWV0aG9kKTtcclxuICAgICAgICBpZiAoaGFuZGxlcikge1xyXG4gICAgICAgICAgICB0aGlzLl9tYXBbaGFuZGxlci5rZXldID0gbnVsbDtcclxuICAgICAgICAgICAgaGFuZGxlci5rZXkgPSAwO1xyXG4gICAgICAgICAgICBoYW5kbGVyLmNsZWFyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5riF55CG5a+56LGh6Lqr5LiK55qE5omA5pyJ5a6a5pe25Zmo44CCXHJcbiAgICAgKiBAcGFyYW0gICAgY2FsbGVyIOaJp+ihjOWfnyh0aGlzKeOAglxyXG4gICAgICovXHJcbiAgICBjbGVhckFsbChjYWxsZXI6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGlmICghY2FsbGVyKSByZXR1cm47XHJcbiAgICAgICAgbGV0IGk6IG51bWJlciA9IDA7XHJcbiAgICAgICAgY29uc3QgbjogbnVtYmVyID0gdGhpcy5faGFuZGxlcnMubGVuZ3RoO1xyXG4gICAgICAgIGZvciAoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZXI6IFRpbWVySGFuZGxlciA9IHRoaXMuX2hhbmRsZXJzW2ldO1xyXG4gICAgICAgICAgICBpZiAoaGFuZGxlci5jYWxsZXIgPT09IGNhbGxlcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbWFwW2hhbmRsZXIua2V5XSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVyLmtleSA9IDA7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVyLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDnq4vljbPmj5DliY3miafooYzlrprml7blmajvvIzmiafooYzkuYvlkI7ku47pmJ/liJfkuK3liKDpmaRcclxuICAgICAqIEBwYXJhbSAgICBjYWxsZXIg5omn6KGM5Z+fKHRoaXMp44CCXHJcbiAgICAgKiBAcGFyYW0gICAgbWV0aG9kIOWumuaXtuWZqOWbnuiwg+WHveaVsOOAglxyXG4gICAgICovXHJcbiAgICBydW5UaW1lcihjYWxsZXI6IGFueSwgbWV0aG9kOiBGdW5jdGlvbik6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGhhbmRsZXI6IFRpbWVySGFuZGxlciA9IHRoaXMuX2dldEhhbmRsZXIoY2FsbGVyLCBtZXRob2QpO1xyXG4gICAgICAgIGlmIChoYW5kbGVyICYmIGhhbmRsZXIubWV0aG9kICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5fbWFwW2hhbmRsZXIua2V5XSA9IG51bGw7XHJcbiAgICAgICAgICAgIGhhbmRsZXIucnVuKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaaguWBnOaXtumSn1xyXG4gICAgICovXHJcbiAgICBwYXVzZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNjYWxlID0gMDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaBouWkjeaXtumSn1xyXG4gICAgICovXHJcbiAgICByZXN1bWUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zY2FsZSA9IDE7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIOengeaciXRpbWVy5Ye95pWw57G7Ki9cclxuY2xhc3MgVGltZXJIYW5kbGVyIHtcclxuICAgIGtleTogbnVtYmVyO1xyXG4gICAgcmVwZWF0OiBib29sZWFuO1xyXG4gICAgZGVsYXk6IG51bWJlcjtcclxuICAgIHVzZUZyYW1lOiBib29sZWFuO1xyXG4gICAgZXhlVGltZTogbnVtYmVyO1xyXG4gICAgY2FsbGVyOiBhbnk7XHJcbiAgICBtZXRob2Q6IEZ1bmN0aW9uO1xyXG4gICAgYXJnczogYW55W107XHJcbiAgICBqdW1wRnJhbWU6IGJvb2xlYW47XHJcblxyXG4gICAgY2xlYXIoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jYWxsZXIgPSBudWxsO1xyXG4gICAgICAgIHRoaXMubWV0aG9kID0gbnVsbDtcclxuICAgICAgICB0aGlzLmFyZ3MgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHJ1bih3aXRoQ2xlYXI6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICBsZXQgY2FsbGVyOiBhbnkgPSB0aGlzLmNhbGxlcjtcclxuICAgICAgICBpZiAoY2FsbGVyICYmIGNhbGxlci5kZXN0cm95ZWQpIHJldHVybiB0aGlzLmNsZWFyKCk7XHJcbiAgICAgICAgbGV0IG1ldGhvZDogRnVuY3Rpb24gPSB0aGlzLm1ldGhvZDtcclxuICAgICAgICBsZXQgYXJnczogYW55W10gPSB0aGlzLmFyZ3M7XHJcbiAgICAgICAgd2l0aENsZWFyICYmIHRoaXMuY2xlYXIoKTtcclxuICAgICAgICBpZiAobWV0aG9kID09IG51bGwpIHJldHVybjtcclxuICAgICAgICBhcmdzID8gbWV0aG9kLmFwcGx5KGNhbGxlciwgYXJncykgOiBtZXRob2QuY2FsbChjYWxsZXIpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFVuaXR5VHMgZnJvbSBcIi4vRnJhbWV3b3JrL1VuaXR5VHNcIjtcclxuaW1wb3J0IHtFeEhhbmRsZXJ9IGZyb20gXCIuL0V4YW1wbGUvRXhIYW5kbGVyXCI7XHJcblxyXG5jbGFzcyBNYWluIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8v5Yid5aeL5YyW5qGG5p62XHJcbiAgICAgICAgVW5pdHlUcy5pbml0KCk7XHJcblxyXG4gICAgICAgIEV4SGFuZGxlci5SdW4oKTtcclxuICAgIH1cclxufVxyXG5cclxubmV3IE1haW4oKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjc2hhcnBcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==