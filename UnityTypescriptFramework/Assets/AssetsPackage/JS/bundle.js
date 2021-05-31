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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/GameMain.ts");
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

/***/ "./src/GameMain.ts":
/*!*************************!*\
  !*** ./src/GameMain.ts ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _framework_UnityTs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./framework/UnityTs */ "./src/framework/UnityTs.ts");
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! csharp */ "csharp");
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(csharp__WEBPACK_IMPORTED_MODULE_1__);


var GameMain = /** @class */ (function () {
    function GameMain() {
        //初始化框架
        _framework_UnityTs__WEBPACK_IMPORTED_MODULE_0__["default"].init();
        csharp__WEBPACK_IMPORTED_MODULE_1__["CS"].Logger.Log("js start up newer!!");
    }
    return GameMain;
}());
new GameMain();


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
/* harmony import */ var _ui_UIManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/UIManager */ "./src/framework/ui/UIManager.ts");
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
        _resource_GameObjectPool__WEBPACK_IMPORTED_MODULE_1__["GameObjectPool"].Instance.initialize();
        _ui_UIManager__WEBPACK_IMPORTED_MODULE_2__["default"].Instance.initialize();
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
    GameObjectPool.Instance = new GameObjectPool();
    return GameObjectPool;
}());



/***/ }),

/***/ "./src/framework/ui/UIManager.ts":
/*!***************************************!*\
  !*** ./src/framework/ui/UIManager.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_EventDispatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/EventDispatcher */ "./src/framework/utils/EventDispatcher.ts");
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! csharp */ "csharp");
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(csharp__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_UILayers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config/UILayers */ "./src/framework/ui/config/UILayers.ts");
/* harmony import */ var _component_UILayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/UILayer */ "./src/framework/ui/component/UILayer.ts");
/* harmony import */ var puerts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! puerts */ "puerts");
/* harmony import */ var puerts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(puerts__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_Handler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/Handler */ "./src/framework/utils/Handler.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






/**
 * ui管理器系统：提供UI操作，UI层级管理
 */
var UIManager = /** @class */ (function (_super) {
    __extends(UIManager, _super);
    // _layers
    /**
     * 密封构造函数
     */
    function UIManager() {
        return _super.call(this) || this;
    }
    Object.defineProperty(UIManager.prototype, "uiCamera", {
        get: function () {
            return this._uiCamera;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 初始化
     */
    UIManager.prototype.initialize = function () {
        var _this = this;
        _config_UILayers__WEBPACK_IMPORTED_MODULE_2__["UILayers"].set();
        this._allWindows = new Array();
        this._openingDialogArray = new Array();
        this._layerMap = new Map();
        this._gameObject = csharp__WEBPACK_IMPORTED_MODULE_1__["UnityEngine"].GameObject.Find(UIManager.UIRootPath);
        this._transform = this._gameObject.transform;
        var cameraRoot = csharp__WEBPACK_IMPORTED_MODULE_1__["UnityEngine"].GameObject.Find(UIManager.UICameraPath);
        this._uiCamera = cameraRoot.GetComponent(Object(puerts__WEBPACK_IMPORTED_MODULE_4__["$typeof"])(csharp__WEBPACK_IMPORTED_MODULE_1__["UnityEngine"].Camera));
        csharp__WEBPACK_IMPORTED_MODULE_1__["UnityEngine"].Object.DontDestroyOnLoad(this._gameObject);
        var eventSys = csharp__WEBPACK_IMPORTED_MODULE_1__["UnityEngine"].GameObject.Find(UIManager.EventSystemPath);
        csharp__WEBPACK_IMPORTED_MODULE_1__["UnityEngine"].Object.DontDestroyOnLoad(eventSys);
        _config_UILayers__WEBPACK_IMPORTED_MODULE_2__["UILayers"].walk(_utils_Handler__WEBPACK_IMPORTED_MODULE_5__["default"].create(this, function (layer_info) {
            var go = new csharp__WEBPACK_IMPORTED_MODULE_1__["UnityEngine"].GameObject(layer_info.name);
            var trans = go.transform;
            trans.SetParent(_this._transform);
            var newLayer = new _component_UILayer__WEBPACK_IMPORTED_MODULE_3__["UILayer"](_this, layer_info.name);
            newLayer.onCreate(layer_info);
            _this._layerMap.set(layer_info.type, newLayer);
        }, null, false));
    };
    UIManager.Instance = new UIManager();
    //ui场景根目录
    UIManager.UIRootPath = "UIRoot";
    //事件路径
    UIManager.EventSystemPath = "EventSystem";
    //camera路径
    UIManager.UICameraPath = UIManager.UIRootPath + "/UICamera";
    //分辨率
    UIManager.Resolution = new csharp__WEBPACK_IMPORTED_MODULE_1__["UnityEngine"].Vector2(750, 1334);
    //窗口最大可使用的相对order_in_layer
    UIManager.MaxOrderPerWindow = 10;
    return UIManager;
}(_utils_EventDispatcher__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (UIManager);


/***/ }),

/***/ "./src/framework/ui/component/UIBaseComponent.ts":
/*!*******************************************************!*\
  !*** ./src/framework/ui/component/UIBaseComponent.ts ***!
  \*******************************************************/
/*! exports provided: UIBaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIBaseComponent", function() { return UIBaseComponent; });
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! csharp */ "csharp");
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(csharp__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UILayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UILayer */ "./src/framework/ui/component/UILayer.ts");
/* harmony import */ var _util_UIUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/UIUtil */ "./src/framework/ui/util/UIUtil.ts");
/* harmony import */ var puerts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! puerts */ "puerts");
/* harmony import */ var puerts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(puerts__WEBPACK_IMPORTED_MODULE_3__);
/**
 * ui基类
 */




var UIBaseComponent = /** @class */ (function () {
    /**
     * 添加组件
     * @param holder
     * @param var_arg
     */
    function UIBaseComponent(holder, var_arg) {
        this._holder = holder;
        this._var_arg = var_arg;
    }
    UIBaseComponent.prototype.destroy = function () {
        this.onDestroy();
    };
    UIBaseComponent.prototype.onDestroy = function () {
        this._holder = null;
        this._gameObject = null;
        this._name = null;
        this._view = null;
        this._transform = null;
    };
    UIBaseComponent.prototype.onCreate = function () {
        if (this instanceof _UILayer__WEBPACK_IMPORTED_MODULE_1__["UILayer"]) {
            this._view = null;
        }
        else {
            var now_holder = this._holder;
            while (now_holder != null) {
                if (now_holder instanceof _UILayer__WEBPACK_IMPORTED_MODULE_1__["UILayer"]) {
                    this._view = this;
                    break;
                }
                else if (now_holder._view != null) {
                    this._view = now_holder._view;
                    break;
                }
                now_holder = now_holder._holder;
            }
        }
        if (this._var_arg != null) {
            if (typeof this._var_arg === "string") {
                this._transform = _util_UIUtil__WEBPACK_IMPORTED_MODULE_2__["UIUtil"].findTrans(this._holder._transform, this._var_arg);
                this._gameObject = this._transform.gameObject;
            }
            else if (typeof this._var_arg === "number") {
                this._transform = _util_UIUtil__WEBPACK_IMPORTED_MODULE_2__["UIUtil"].getChild(this._holder._transform, this._var_arg);
                this._gameObject = this._transform.gameObject;
            }
            else if (this._var_arg instanceof csharp__WEBPACK_IMPORTED_MODULE_0__["UnityEngine"].GameObject) {
                this._gameObject = this._var_arg;
                this._transform = this._gameObject.transform;
            }
            else {
                csharp__WEBPACK_IMPORTED_MODULE_0__["CS"].Logger.LogError("OnCreate:error params list!");
            }
        }
        this._var_arg = null;
        this._name = this._gameObject.name;
        this._rectTransform = _util_UIUtil__WEBPACK_IMPORTED_MODULE_2__["UIUtil"].findComponent(this._transform, Object(puerts__WEBPACK_IMPORTED_MODULE_3__["$typeof"])(csharp__WEBPACK_IMPORTED_MODULE_0__["UnityEngine"].RectTransform));
    };
    UIBaseComponent.prototype.onDisable = function () {
    };
    UIBaseComponent.prototype.onEnable = function () {
    };
    /**
     * 设置激活与反激活
     * @param active
     */
    UIBaseComponent.prototype.setActive = function (active) {
        if (this._active == active) {
            return;
        }
        this._active = active;
        if (active) {
            this._gameObject.SetActive(active);
            this.onEnable();
        }
        else {
            this.onDisable();
            this._gameObject.SetActive(active);
        }
    };
    /**
     * 获取是否激活
     * @return boolean 是否激活
     */
    UIBaseComponent.prototype.getActive = function () {
        return this._active;
    };
    /**
     * 获取组件名字
     */
    UIBaseComponent.prototype.getName = function () {
        return this._name;
    };
    return UIBaseComponent;
}());



/***/ }),

/***/ "./src/framework/ui/component/UILayer.ts":
/*!***********************************************!*\
  !*** ./src/framework/ui/component/UILayer.ts ***!
  \***********************************************/
/*! exports provided: UILayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UILayer", function() { return UILayer; });
/* harmony import */ var _UIBaseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UIBaseComponent */ "./src/framework/ui/component/UIBaseComponent.ts");
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! csharp */ "csharp");
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(csharp__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _unity_UnityTagsAndLayers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../unity/UnityTagsAndLayers */ "./src/framework/unity/UnityTagsAndLayers.ts");
/* harmony import */ var _util_UIUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/UIUtil */ "./src/framework/ui/util/UIUtil.ts");
/* harmony import */ var puerts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! puerts */ "puerts");
/* harmony import */ var puerts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(puerts__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _UIManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../UIManager */ "./src/framework/ui/UIManager.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






/**
 * ts侧layer层级管理器
 */
var UILayer = /** @class */ (function (_super) {
    __extends(UILayer, _super);
    function UILayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UILayer.prototype.onCreate = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        _super.prototype.onCreate.call(this);
        this._gameObject.layer = _unity_UnityTagsAndLayers__WEBPACK_IMPORTED_MODULE_2__["EUnityLayers"].UI;
        this._canvas = this._gameObject.AddComponent(Object(puerts__WEBPACK_IMPORTED_MODULE_4__["$typeof"])(csharp__WEBPACK_IMPORTED_MODULE_1__["UnityEngine"].Canvas));
        this._transform = this._canvas.transform;
        this._gameObject = this._canvas.gameObject;
        var layer = args[0];
        var canvas = this._canvas;
        canvas.renderMode = csharp__WEBPACK_IMPORTED_MODULE_1__["UnityEngine"].RenderMode.ScreenSpaceCamera;
        canvas.worldCamera = _UIManager__WEBPACK_IMPORTED_MODULE_5__["default"].Instance.uiCamera;
        canvas.planeDistance = layer.planeDistance;
        canvas.sortingLayerName = _unity_UnityTagsAndLayers__WEBPACK_IMPORTED_MODULE_2__["EUnitySortingLayers"].UI;
        canvas.sortingOrder = layer.orderInLayer;
        canvas.pixelPerfect = true;
        //scaler
        this._canvasScaler = _util_UIUtil__WEBPACK_IMPORTED_MODULE_3__["UIUtil"].findComponent(this._transform, Object(puerts__WEBPACK_IMPORTED_MODULE_4__["$typeof"])(csharp__WEBPACK_IMPORTED_MODULE_1__["UnityEngine"].UI.CanvasScaler));
        if (this._canvasScaler == null) {
            this._canvasScaler = this._gameObject.AddComponent(Object(puerts__WEBPACK_IMPORTED_MODULE_4__["$typeof"])(csharp__WEBPACK_IMPORTED_MODULE_1__["UnityEngine"].UI.CanvasScaler));
        }
        var canvasScaler = this._canvasScaler;
        canvasScaler.uiScaleMode = csharp__WEBPACK_IMPORTED_MODULE_1__["UnityEngine"].UI.CanvasScaler.ScaleMode.ScaleWithScreenSize;
        canvasScaler.referenceResolution = _UIManager__WEBPACK_IMPORTED_MODULE_5__["default"].Resolution;
        canvasScaler.screenMatchMode = csharp__WEBPACK_IMPORTED_MODULE_1__["UnityEngine"].UI.CanvasScaler.ScreenMatchMode.MatchWidthOrHeight;
        //raycater
        this._graphicRaycater = _util_UIUtil__WEBPACK_IMPORTED_MODULE_3__["UIUtil"].findComponent(this._transform, Object(puerts__WEBPACK_IMPORTED_MODULE_4__["$typeof"])(csharp__WEBPACK_IMPORTED_MODULE_1__["UnityEngine"].UI.GraphicRaycaster));
        if (this._graphicRaycater == null) {
            this._graphicRaycater = this._gameObject.AddComponent(Object(puerts__WEBPACK_IMPORTED_MODULE_4__["$typeof"])(csharp__WEBPACK_IMPORTED_MODULE_1__["UnityEngine"].UI.GraphicRaycaster));
        }
        this._topWindowOrder = layer.orderInLayer;
        this._minWindowOrder = layer.orderInLayer;
    };
    UILayer.prototype.onDestroy = function () {
        this._canvas = null;
        this._canvasScaler = null;
        this._graphicRaycater = null;
        _super.prototype.onDestroy.call(this);
    };
    UILayer.prototype.pushWindowOrder = function () {
        this._topWindowOrder -= _UIManager__WEBPACK_IMPORTED_MODULE_5__["default"].MaxOrderPerWindow;
    };
    UILayer.prototype.popWindowOrder = function () {
        var c = this._topWindowOrder;
        this._topWindowOrder += _UIManager__WEBPACK_IMPORTED_MODULE_5__["default"].MaxOrderPerWindow;
        return c;
    };
    return UILayer;
}(_UIBaseComponent__WEBPACK_IMPORTED_MODULE_0__["UIBaseComponent"]));



/***/ }),

/***/ "./src/framework/ui/config/UILayers.ts":
/*!*********************************************!*\
  !*** ./src/framework/ui/config/UILayers.ts ***!
  \*********************************************/
/*! exports provided: UILayerInfo, EUILayer, UILayers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UILayerInfo", function() { return UILayerInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EUILayer", function() { return EUILayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UILayers", function() { return UILayers; });
var UILayerInfo = /** @class */ (function () {
    function UILayerInfo() {
    }
    return UILayerInfo;
}());

var EUILayer;
(function (EUILayer) {
    //场景UI
    EUILayer[EUILayer["SceneLayer"] = 0] = "SceneLayer";
    //背景UI
    EUILayer[EUILayer["BackgroundLayer"] = 1] = "BackgroundLayer";
    //普通ui，多级窗口等
    EUILayer[EUILayer["NormalLayer"] = 2] = "NormalLayer";
    //信息ui
    EUILayer[EUILayer["InfoLayer"] = 3] = "InfoLayer";
    //弹窗提示
    EUILayer[EUILayer["TipLayer"] = 4] = "TipLayer";
    //顶层ui，场景加载
    EUILayer[EUILayer["TopLayer"] = 5] = "TopLayer";
})(EUILayer || (EUILayer = {}));
/**
 * 层级数据
 */
var UILayers = /** @class */ (function () {
    function UILayers() {
    }
    UILayers.set = function () {
        this._layers.set(EUILayer.SceneLayer, {
            type: EUILayer.SceneLayer,
            name: "SceneLayer",
            planeDistance: 1000,
            orderInLayer: 0
        });
        this._layers.set(EUILayer.BackgroundLayer, {
            type: EUILayer.BackgroundLayer,
            name: "BackgroundLayer",
            planeDistance: 900,
            orderInLayer: 1000
        });
        this._layers.set(EUILayer.NormalLayer, {
            type: EUILayer.NormalLayer,
            name: "NormalLayer",
            planeDistance: 800,
            orderInLayer: 2000
        });
        this._layers.set(EUILayer.InfoLayer, {
            type: EUILayer.NormalLayer,
            name: "InfoLayer",
            planeDistance: 700,
            orderInLayer: 3000
        });
        this._layers.set(EUILayer.TipLayer, {
            type: EUILayer.TipLayer,
            name: "TipLayer",
            planeDistance: 600,
            orderInLayer: 4000
        });
        this._layers.set(EUILayer.TopLayer, {
            type: EUILayer.TopLayer,
            name: "TopLayer",
            planeDistance: 500,
            orderInLayer: 5000
        });
    };
    /**
     * 获取层级数据
     * @param layer_type 层级定义
     */
    UILayers.get = function (layer_type) {
        return UILayers._layers.get(layer_type);
    };
    /**
     * 遍历
     * @param callback
     */
    UILayers.walk = function (callback) {
        this._layers.forEach(function (v) {
            callback.runWith(v);
        });
    };
    UILayers._layers = new Map();
    return UILayers;
}());



/***/ }),

/***/ "./src/framework/ui/util/UIUtil.ts":
/*!*****************************************!*\
  !*** ./src/framework/ui/util/UIUtil.ts ***!
  \*****************************************/
/*! exports provided: UIUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIUtil", function() { return UIUtil; });
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! csharp */ "csharp");
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(csharp__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var puerts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! puerts */ "puerts");
/* harmony import */ var puerts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(puerts__WEBPACK_IMPORTED_MODULE_1__);


/**
 * ui查询工具
 */
var UIUtil = /** @class */ (function () {
    function UIUtil() {
    }
    /**
     * 获取子节点
     * @param trans
     * @param index
     */
    UIUtil.getChild = function (trans, index) {
        return trans.GetChild(index);
    };
    /**
     * 查组件
     * @param trans
     * @param ctype
     * @param path
     */
    UIUtil.findComponent = function (trans, ctype, path) {
        var targetTrans = trans;
        if (path != null) {
            targetTrans = trans.Find(path);
        }
        if (targetTrans == null) {
            return null;
        }
        var cmp = targetTrans.GetComponent(ctype);
        if (cmp != null) {
            return cmp;
        }
        return targetTrans.GetComponentInChildren(ctype);
    };
    /**
     * 获取transform
     * @param trans
     * @param path
     */
    UIUtil.findTrans = function (trans, path) {
        return trans.Find(path);
    };
    /**
     * 查询文本
     * @param trans
     * @param path
     */
    UIUtil.findText = function (trans, path) {
        return this.findComponent(trans, Object(puerts__WEBPACK_IMPORTED_MODULE_1__["$typeof"])(csharp__WEBPACK_IMPORTED_MODULE_0__["UnityEngine"].UI.Text), path);
    };
    /**
     * 查询tmp文本
     * @param trans
     * @param path
     */
    UIUtil.findTmpText = function (trans, path) {
        return this.findComponent(trans, Object(puerts__WEBPACK_IMPORTED_MODULE_1__["$typeof"])(csharp__WEBPACK_IMPORTED_MODULE_0__["TMPro"].TMP_Text), path);
    };
    /**
     * 查询图片
     * @param trans
     * @param path
     */
    UIUtil.findImage = function (trans, path) {
        return this.findComponent(trans, Object(puerts__WEBPACK_IMPORTED_MODULE_1__["$typeof"])(csharp__WEBPACK_IMPORTED_MODULE_0__["UnityEngine"].UI.Image), path);
    };
    /**
     * 查需按钮
     * @param trans
     * @param path
     */
    UIUtil.findButton = function (trans, path) {
        return this.findComponent(trans, Object(puerts__WEBPACK_IMPORTED_MODULE_1__["$typeof"])(csharp__WEBPACK_IMPORTED_MODULE_0__["UnityEngine"].UI.Button), path);
    };
    /**
     * 查询input
     * @param trans
     * @param path
     */
    UIUtil.findInput = function (trans, path) {
        return this.findComponent(trans, Object(puerts__WEBPACK_IMPORTED_MODULE_1__["$typeof"])(csharp__WEBPACK_IMPORTED_MODULE_0__["UnityEngine"].UI.InputField), path);
    };
    /**
     * 查询slider
     * @param trans
     * @param path
     */
    UIUtil.findSlider = function (trans, path) {
        return this.findComponent(trans, Object(puerts__WEBPACK_IMPORTED_MODULE_1__["$typeof"])(csharp__WEBPACK_IMPORTED_MODULE_0__["UnityEngine"].UI.Slider), path);
    };
    /**
     * 查询scrollRect
     * @param trans
     * @param path
     */
    UIUtil.findScrollRect = function (trans, path) {
        return this.findComponent(trans, Object(puerts__WEBPACK_IMPORTED_MODULE_1__["$typeof"])(csharp__WEBPACK_IMPORTED_MODULE_0__["UnityEngine"].UI.ScrollRect), path);
    };
    /**
     * 获取toggle
     * @param trans
     * @param path
     */
    UIUtil.findToggle = function (trans, path) {
        return this.findComponent(trans, Object(puerts__WEBPACK_IMPORTED_MODULE_1__["$typeof"])(csharp__WEBPACK_IMPORTED_MODULE_0__["UnityEngine"].UI.Toggle), path);
    };
    /**
     * 查询canvasGroup
     * @param trans
     * @param path
     */
    UIUtil.findCanvasGroup = function (trans, path) {
        return this.findComponent(trans, Object(puerts__WEBPACK_IMPORTED_MODULE_1__["$typeof"])(csharp__WEBPACK_IMPORTED_MODULE_0__["UnityEngine"].CanvasGroup), path);
    };
    return UIUtil;
}());



/***/ }),

/***/ "./src/framework/unity/UnityTagsAndLayers.ts":
/*!***************************************************!*\
  !*** ./src/framework/unity/UnityTagsAndLayers.ts ***!
  \***************************************************/
/*! exports provided: EUnityLayers, EUnitySortingLayers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EUnityLayers", function() { return EUnityLayers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EUnitySortingLayers", function() { return EUnitySortingLayers; });
/**
 * unity侧layer定义映射到ts侧
 */
var EUnityLayers;
(function (EUnityLayers) {
    EUnityLayers[EUnityLayers["Default"] = 0] = "Default";
    /**
     * 透明特效
     */
    EUnityLayers[EUnityLayers["TransparentFX"] = 1] = "TransparentFX";
    /**
     * 忽略射线检测层
     */
    EUnityLayers[EUnityLayers["IgnoreRaycast"] = 2] = "IgnoreRaycast";
    /**
     * 水
     */
    EUnityLayers[EUnityLayers["Water"] = 4] = "Water";
    /**
     * ui层
     */
    EUnityLayers[EUnityLayers["UI"] = 5] = "UI";
})(EUnityLayers || (EUnityLayers = {}));
/**
 * unity侧sortingLayers定义
 */
var EUnitySortingLayers;
(function (EUnitySortingLayers) {
    /**
     * 默认层
     */
    EUnitySortingLayers["Default"] = "Default";
    /**
     * ui层
     */
    EUnitySortingLayers["UI"] = "UI";
})(EUnitySortingLayers || (EUnitySortingLayers = {}));


/***/ }),

/***/ "./src/framework/utils/EventDispatcher.ts":
/*!************************************************!*\
  !*** ./src/framework/utils/EventDispatcher.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Handler */ "./src/framework/utils/Handler.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/*
* 可派发事件基类
* */
var EventDispatcher = /** @class */ (function () {
    function EventDispatcher() {
    }
    EventDispatcher.prototype.hasListener = function (type) {
        var listener = this._events && this._events[type];
        return !!listener;
    };
    /**
     * 派发事件。
     * @param type    事件类型。
     * @param data    （可选）回调数据。<b>注意：</b>如果是需要传递多个参数 p1,p2,p3,...可以使用数组结构如：[p1,p2,p3,...] ；如果需要回调单个参数 p ，且 p 是一个数组，则需要使用结构如：[p]，其他的单个参数 p ，可以直接传入参数 p。
     * @return 此事件类型是否有侦听者，如果有侦听者则值为 true，否则值为 false。
     */
    EventDispatcher.prototype.event = function (type, data) {
        if (data === void 0) { data = null; }
        if (!this._events || !this._events[type])
            return false;
        var listeners = this._events[type];
        if (listeners.run) {
            if (listeners.once)
                delete this._events[type];
            data != null ? listeners.runWith(data) : listeners.run();
        }
        else {
            for (var i = 0, n = listeners.length; i < n; i++) {
                var listener = listeners[i];
                if (listener) {
                    (data != null) ? listener.runWith(data) : listener.run();
                }
                if (!listener || listener.once) {
                    listeners.splice(i, 1);
                    i--;
                    n--;
                }
            }
            if (listeners.length === 0 && this._events)
                delete this._events[type];
        }
        return true;
    };
    /**
     * 使用 EventDispatcher 对象注册指定类型的事件侦听器对象，以使侦听器能够接收事件通知。
     * @param type        事件的类型。
     * @param caller    事件侦听函数的执行域。
     * @param listener    事件侦听函数。
     * @param args        （可选）事件侦听函数的回调参数。
     * @return 此 EventDispatcher 对象。
     */
    EventDispatcher.prototype.on = function (type, caller, listener, args) {
        if (args === void 0) { args = null; }
        return this._createListener(type, caller, listener, args, false);
    };
    /**
     * 使用 EventDispatcher 对象注册指定类型的事件侦听器对象，以使侦听器能够接收事件通知，此侦听事件响应一次后自动移除。
     * @param type        事件的类型。
     * @param caller    事件侦听函数的执行域。
     * @param listener    事件侦听函数。
     * @param args        （可选）事件侦听函数的回调参数。
     * @return 此 EventDispatcher 对象。
     */
    EventDispatcher.prototype.once = function (type, caller, listener, args) {
        if (args === void 0) { args = null; }
        return this._createListener(type, caller, listener, args, true);
    };
    /**@internal */
    EventDispatcher.prototype._createListener = function (type, caller, listener, args, once, offBefore) {
        if (offBefore === void 0) { offBefore = true; }
        //移除之前相同的监听
        offBefore && this.off(type, caller, listener, once);
        //使用对象池进行创建回收
        var handler = EventHandler.create(caller || this, listener, args, once);
        this._events || (this._events = {});
        var events = this._events;
        //默认单个，每个对象只有多个监听才用数组，节省一个数组的消耗
        if (!events[type])
            events[type] = handler;
        else {
            if (!events[type].run)
                events[type].push(handler);
            else
                events[type] = [events[type], handler];
        }
        return this;
    };
    /**
     * 从 EventDispatcher 对象中删除侦听器。
     * @param type        事件的类型。
     * @param caller    事件侦听函数的执行域。
     * @param listener    事件侦听函数。
     * @param onceOnly    （可选）如果值为 true ,则只移除通过 once 方法添加的侦听器。
     * @return 此 EventDispatcher 对象。
     */
    EventDispatcher.prototype.off = function (type, caller, listener, onceOnly) {
        if (onceOnly === void 0) { onceOnly = false; }
        if (!this._events || !this._events[type])
            return this;
        var listeners = this._events[type];
        if (listeners != null) {
            if (listeners.run) {
                if ((!caller || listeners.caller === caller) && (listener == null || listeners.method === listener) && (!onceOnly || listeners.once)) {
                    delete this._events[type];
                    listeners.recover();
                }
            }
            else {
                var count = 0;
                var n = listeners.length;
                for (var i = 0; i < n; i++) {
                    var item = listeners[i];
                    if (!item) {
                        count++;
                        continue;
                    }
                    if (item && (!caller || item.caller === caller) && (listener == null || item.method === listener) && (!onceOnly || item.once)) {
                        count++;
                        listeners[i] = null;
                        item.recover();
                    }
                }
                //如果全部移除，则删除索引
                if (count === n)
                    delete this._events[type];
            }
        }
        return this;
    };
    /**
     * 从 EventDispatcher 对象中删除指定事件类型的所有侦听器。
     * @param type    （可选）事件类型，如果值为 null，则移除本对象所有类型的侦听器。
     * @return 此 EventDispatcher 对象。
     */
    EventDispatcher.prototype.offAll = function (type) {
        if (type === void 0) { type = null; }
        var events = this._events;
        if (!events)
            return this;
        if (type) {
            this._recoverHandlers(events[type]);
            delete events[type];
        }
        else {
            for (var name in events) {
                this._recoverHandlers(events[name]);
            }
            this._events = null;
        }
        return this;
    };
    /**
     * 移除caller为target的所有事件监听
     * @param    caller caller对象
     */
    EventDispatcher.prototype.offAllCaller = function (caller) {
        if (caller && this._events) {
            for (var name in this._events) {
                this.off(name, caller, null);
            }
        }
        return this;
    };
    EventDispatcher.prototype._recoverHandlers = function (arr) {
        if (!arr)
            return;
        if (arr.run) {
            arr.recover();
        }
        else {
            for (var i = arr.length - 1; i > -1; i--) {
                if (arr[i]) {
                    arr[i].recover();
                    arr[i] = null;
                }
            }
        }
    };
    return EventDispatcher;
}());
/* harmony default export */ __webpack_exports__["default"] = (EventDispatcher);
/**@private */
var EventHandler = /** @class */ (function (_super) {
    __extends(EventHandler, _super);
    function EventHandler(caller, method, args, once) {
        return _super.call(this, caller, method, args, once) || this;
    }
    /**
     * @override
     */
    EventHandler.prototype.recover = function () {
        if (this._id > 0) {
            this._id = 0;
            EventHandler._pool.push(this.clear());
        }
    };
    /**
     * 从对象池内创建一个Handler，默认会执行一次回收，如果不需要自动回收，设置once参数为false。
     * @param caller    执行域(this)。
     * @param method    回调方法。
     * @param args        （可选）携带的参数。
     * @param once        （可选）是否只执行一次，如果为true，回调后执行recover()进行回收，默认为true。
     * @return 返回创建的handler实例。
     */
    EventHandler.create = function (caller, method, args, once) {
        if (args === void 0) { args = null; }
        if (once === void 0) { once = true; }
        if (EventHandler._pool.length)
            return EventHandler._pool.pop().setTo(caller, method, args, once);
        return new EventHandler(caller, method, args, once);
    };
    /**@private handler对象池*/
    EventHandler._pool = [];
    return EventHandler;
}(_Handler__WEBPACK_IMPORTED_MODULE_0__["default"]));


/***/ }),

/***/ "./src/framework/utils/Handler.ts":
/*!****************************************!*\
  !*** ./src/framework/utils/Handler.ts ***!
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

/***/ }),

/***/ "puerts":
/*!*************************!*\
  !*** external "puerts" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("puerts");

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map