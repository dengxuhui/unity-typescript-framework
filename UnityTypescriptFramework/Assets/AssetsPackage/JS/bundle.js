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

/***/ "./src/Main.ts":
/*!*********************!*\
  !*** ./src/Main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! csharp */ "csharp");
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(csharp__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _framework_UnityTs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./framework/UnityTs */ "./src/framework/UnityTs.ts");
/* harmony import */ var _framework_utils_timer_Timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./framework/utils/timer/Timer */ "./src/framework/utils/timer/Timer.ts");



var Main = /** @class */ (function () {
    function Main() {
        //初始化框架
        _framework_UnityTs__WEBPACK_IMPORTED_MODULE_1__["default"].init();
        _framework_utils_timer_Timer__WEBPACK_IMPORTED_MODULE_2__["TimerMgr"].timer.frameOnce(1, this, function () {
            csharp__WEBPACK_IMPORTED_MODULE_0__["CS"].Logger.Log("js start up!! after a frame");
        });
        var timeStart = Date.now;
        _framework_utils_timer_Timer__WEBPACK_IMPORTED_MODULE_2__["TimerMgr"].timer.loop(1000, this, function () {
            csharp__WEBPACK_IMPORTED_MODULE_0__["CS"].Logger.Log("js call every 1 sec");
        });
        csharp__WEBPACK_IMPORTED_MODULE_0__["CS"].Logger.Log("js start,time:" + timeStart);
    }
    return Main;
}());
new Main();


/***/ }),

/***/ "./src/framework/UnityTs.ts":
/*!**********************************!*\
  !*** ./src/framework/UnityTs.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_timer_Timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/timer/Timer */ "./src/framework/utils/timer/Timer.ts");
/* harmony import */ var _resource_GameObjectPool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resource/GameObjectPool */ "./src/framework/resource/GameObjectPool.ts");
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
        _utils_timer_Timer__WEBPACK_IMPORTED_MODULE_0__["TimerMgr"].init();
        _resource_GameObjectPool__WEBPACK_IMPORTED_MODULE_1__["GameObjectPool"].I.initialize();
    };
    /* 工具类*/
    UnityTs.utils = Utils;
    return UnityTs;
}());
/* harmony default export */ __webpack_exports__["default"] = (UnityTs);


/***/ }),

/***/ "./src/framework/resource/GameObjectPool.ts":
/*!**************************************************!*\
  !*** ./src/framework/resource/GameObjectPool.ts ***!
  \**************************************************/
/*! exports provided: GameObjectPool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameObjectPool", function() { return GameObjectPool; });
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! csharp */ "csharp");
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(csharp__WEBPACK_IMPORTED_MODULE_0__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

/*
* GameObject资源池
* */
var GameObjectPool = /** @class */ (function () {
    /**
     * 密封构造函数
     */
    function GameObjectPool() {
        this._cacheTransRoot = null;
        this._goPool = new Map();
        this._instCache = new Map();
    }
    /**
     * 初始化
     */
    GameObjectPool.prototype.initialize = function () {
        var go = csharp__WEBPACK_IMPORTED_MODULE_0__["UnityEngine"].GameObject.Find("GameObjectCacheRoot");
        if (go == (void 0)) {
            go = new csharp__WEBPACK_IMPORTED_MODULE_0__["UnityEngine"].GameObject("GameObjectCacheRoot");
            csharp__WEBPACK_IMPORTED_MODULE_0__["UnityEngine"].Object.DontDestroyOnLoad(go);
        }
        this._cacheTransRoot = go.transform;
    };
    /**
     *
     * @param path
     * @returns bool
     */
    GameObjectPool.prototype.checkHasCached = function (path) {
        var cachedInst = this._instCache.get(path);
        if (cachedInst && cachedInst.length > 0) {
            return true;
        }
        var pooledGo = this._goPool.get(path);
        return pooledGo != (void 0);
    };
    /**
     * 缓存并实例化GameObject
     * @param path
     * @param go
     * @param inst_count
     */
    GameObjectPool.prototype.cacheAndInstGameObject = function (path, go, inst_count) {
        if (inst_count === void 0) { inst_count = 1; }
        //TODO 添加GameObject对于资源的引用
        this._goPool.set(path, go);
        if (inst_count > 0) {
            var cachedInst = this._instCache.get(path);
            for (var i = 0; i < inst_count; i++) {
                var inst = csharp__WEBPACK_IMPORTED_MODULE_0__["UnityEngine"].GameObject.Instantiate(go);
                inst.transform.SetParent(this._cacheTransRoot);
                inst.SetActive(false);
                cachedInst.push(inst);
            }
        }
    };
    /**
     * 从缓存获取对象
     * @param path
     */
    GameObjectPool.prototype.tryGetFromCache = function (path) {
        if (!this.checkHasCached(path)) {
            return null;
        }
        var cachedInst = this._instCache.get(path);
        if (cachedInst != (void 0) && cachedInst.length > 0) {
            var inst = cachedInst.pop();
            return inst;
        }
        var pooledGo = this._goPool.get(path);
        if (pooledGo != void 0) {
            var inst = csharp__WEBPACK_IMPORTED_MODULE_0__["UnityEngine"].GameObject.Instantiate(pooledGo);
            return inst;
        }
        return null;
    };
    /**
     * 预加载GameObject
     * @param path
     * @param inst_count
     * @param callback
     * @returns
     */
    GameObjectPool.prototype.preLoadGameObjectAsync = function (path, inst_count, callback) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.checkHasCached(path)) {
                    callback && callback.run();
                    return [2 /*return*/];
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * 异步加载资源
     * @param path
     * @param callback
     */
    GameObjectPool.prototype.loadGameObjetAsync = function (path) {
        return __awaiter(this, void 0, void 0, function () {
            var inst;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        inst = this.tryGetFromCache(path);
                        if (!(inst == (void 0))) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.preLoadGameObjectAsync(path, 1, null)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        inst = this.tryGetFromCache(path);
                        inst.SetActive(true);
                        return [2 /*return*/, inst];
                }
            });
        });
    };
    /**
     * 回收GameObject
     * @param path
     * @param inst
     * @returns
     */
    GameObjectPool.prototype.recycleGameObject = function (path, inst) {
        if (inst == (void 0)) {
            return;
        }
        inst.transform.SetParent(this._cacheTransRoot);
        inst.SetActive(false);
        var cachedInst = this._instCache.get(path) || [];
        cachedInst.push(inst);
        this._instCache.set(path, cachedInst);
    };
    GameObjectPool.prototype.cleanup = function () {
        this._instCache.forEach(function (arr, path) {
            for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
                var obj = arr_1[_i];
                if (obj != (void 0)) {
                    csharp__WEBPACK_IMPORTED_MODULE_0__["UnityEngine"].GameObject.Destroy(obj);
                }
            }
        });
        this._instCache.clear();
        //清除cachePool中的GameObject引用
    };
    GameObjectPool.I = new GameObjectPool();
    return GameObjectPool;
}());



/***/ }),

/***/ "./src/framework/utils/timer/CallLater.ts":
/*!************************************************!*\
  !*** ./src/framework/utils/timer/CallLater.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UnityTs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../UnityTs */ "./src/framework/UnityTs.ts");

/**
 * 延迟一帧执行
 */
var CallLater = /** @class */ (function () {
    function CallLater() {
        this._pool = [];
        this._map = {};
        this._laters = [];
    }
    /**
     * @internal
     * 帧循环处理函数。
     */
    CallLater.prototype._update = function () {
        var laters = this._laters;
        var len = laters.length;
        if (len > 0) {
            for (var i = 0, n = len - 1; i <= n; i++) {
                var handler = laters[i];
                this._map[handler.key] = null;
                if (handler.method !== null) {
                    handler.run();
                    handler.clear();
                }
                this._pool.push(handler);
                i === n && (n = laters.length - 1);
            }
            laters.length = 0;
        }
    };
    /** @private */
    CallLater.prototype._getHandler = function (caller, method) {
        var cid = caller ? caller.$_GID || (caller.$_GID = _UnityTs__WEBPACK_IMPORTED_MODULE_0__["default"].utils.getGID()) : 0;
        var mid = method.$_TID || (method.$_TID = (CallLater._mid++));
        return this._map[cid + '.' + mid];
    };
    /**
     * 延迟执行。
     * @param	caller 执行域(this)。
     * @param	method 定时器回调函数。
     * @param	args 回调参数。
     */
    CallLater.prototype.callLater = function (caller, method, args) {
        if (args === void 0) { args = null; }
        if (this._getHandler(caller, method) == null) {
            var handler = void 0;
            if (this._pool.length)
                handler = this._pool.pop();
            else
                handler = new LaterHandler();
            //设置属性
            handler.caller = caller;
            handler.method = method;
            handler.args = args;
            //索引handler
            var cid = caller ? caller.$_GID : 0;
            var mid = method["$_TID"];
            handler.key = cid + '.' + mid;
            this._map[handler.key] = handler;
            //插入队列
            this._laters.push(handler);
        }
    };
    /**
     * 立即执行 callLater 。
     * @param	caller 执行域(this)。
     * @param	method 定时器回调函数。
     */
    CallLater.prototype.runCallLater = function (caller, method) {
        var handler = this._getHandler(caller, method);
        if (handler && handler.method != null) {
            this._map[handler.key] = null;
            handler.run();
            handler.clear();
        }
    };
    CallLater.I = new CallLater();
    CallLater._mid = 1;
    return CallLater;
}());
/* harmony default export */ __webpack_exports__["default"] = (CallLater);
/** @private */
var LaterHandler = /** @class */ (function () {
    function LaterHandler() {
    }
    LaterHandler.prototype.clear = function () {
        this.caller = null;
        this.method = null;
        this.args = null;
    };
    LaterHandler.prototype.run = function () {
        var caller = this.caller;
        if (caller && caller.destroyed)
            return this.clear();
        var method = this.method;
        var args = this.args;
        if (method == null)
            return;
        args ? method.apply(caller, args) : method.call(caller);
    };
    return LaterHandler;
}());


/***/ }),

/***/ "./src/framework/utils/timer/Timer.ts":
/*!********************************************!*\
  !*** ./src/framework/utils/timer/Timer.ts ***!
  \********************************************/
/*! exports provided: TimerMgr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerMgr", function() { return TimerMgr; });
/* harmony import */ var _UnityTs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../UnityTs */ "./src/framework/UnityTs.ts");
/* harmony import */ var _CallLater__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CallLater */ "./src/framework/utils/timer/CallLater.ts");
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
    //-----------延迟执行
    /**
     * 延迟执行。
     * @param	caller 执行域(this)。
     * @param	method 定时器回调函数。
     * @param	args 回调参数。
     */
    Timer.prototype.callLater = function (caller, method, args) {
        _CallLater__WEBPACK_IMPORTED_MODULE_1__["default"].I.callLater(caller, method, args);
    };
    /**
     * 立即执行 callLater 。
     * @param	caller 执行域(this)。
     * @param	method 定时器回调函数。
     */
    Timer.prototype.runCallLater = function (caller, method) {
        _CallLater__WEBPACK_IMPORTED_MODULE_1__["default"].I.runCallLater(caller, method);
    };
    /*timer入口*/
    Timer.gSysTimer = null;
    /*对象池*/
    Timer._pool = [];
    Timer._mid = 1;
    return Timer;
}());
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
/*
*
* timer管理器 如果需要新增timer，在这里新建实例，一般一个就够用了。
* */
var TimerMgr = /** @class */ (function () {
    //私有构造函数
    function TimerMgr() {
    }
    Object.defineProperty(TimerMgr, "timer", {
        /*
        * 获取timer唯一实例
        * */
        get: function () {
            return this._timer;
        },
        enumerable: false,
        configurable: true
    });
    TimerMgr.init = function () {
        if (this._inited) {
            return;
        }
        this._inited = true;
        this._timer = new Timer();
        // @ts-ignore
        global.__tgjsRegisterTickHandler(uts_timerUpdate);
        // @ts-ignore
        delete global.__tgjsRegisterTickHandler;
    };
    TimerMgr._inited = false;
    return TimerMgr;
}());

function uts_timerUpdate() {
    TimerMgr._timer._update();
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

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
//# sourceMappingURL=bundle.js.map