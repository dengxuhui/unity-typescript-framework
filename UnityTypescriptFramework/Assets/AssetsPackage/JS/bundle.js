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
/* harmony import */ var _framework_scene_SceneManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./framework/scene/SceneManager */ "./src/framework/scene/SceneManager.ts");
/* harmony import */ var _game_scenes_config_SceneConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game/scenes/config/SceneConfig */ "./src/game/scenes/config/SceneConfig.ts");
/* harmony import */ var _framework_module_ModuleCenter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./framework/module/ModuleCenter */ "./src/framework/module/ModuleCenter.ts");
/* harmony import */ var _game_module_common_CommonModule__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game/module/common/CommonModule */ "./src/game/module/common/CommonModule.ts");






/**
 * 游戏入口
 * @author by dengxuhui
 * @create time 2021/6/9 11:39
**/
var GameMain = /** @class */ (function () {
    function GameMain() {
        csharp__WEBPACK_IMPORTED_MODULE_1__["CS"].Logger.Log("JavaScript start running!!");
        //初始化框架
        _framework_UnityTs__WEBPACK_IMPORTED_MODULE_0__["default"].init();
        _framework_module_ModuleCenter__WEBPACK_IMPORTED_MODULE_4__["ModuleCenter"].Instance.add(_game_module_common_CommonModule__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]);
        _framework_scene_SceneManager__WEBPACK_IMPORTED_MODULE_2__["SceneManager"].Instance.switchScene(_game_scenes_config_SceneConfig__WEBPACK_IMPORTED_MODULE_3__["SceneConfigs"].HomeScene);
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
/* harmony import */ var _scene_SceneManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scene/SceneManager */ "./src/framework/scene/SceneManager.ts");
/* harmony import */ var _module_ModuleCenter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./module/ModuleCenter */ "./src/framework/module/ModuleCenter.ts");
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
/**
 * 全局初始化入口
 * @author by dengxuhui
 * @create time 2021/6/9 11:38
**/
var UnityTs = /** @class */ (function () {
    function UnityTs() {
    }
    UnityTs.init = function () {
        _utils_timer_Timer__WEBPACK_IMPORTED_MODULE_0__["Timer"].init();
        _resource_GameObjectPool__WEBPACK_IMPORTED_MODULE_1__["GameObjectPool"].Instance.initialize();
        _ui_UIManager__WEBPACK_IMPORTED_MODULE_2__["default"].Instance.initialize();
        _scene_SceneManager__WEBPACK_IMPORTED_MODULE_3__["SceneManager"].Instance.initialize();
        _module_ModuleCenter__WEBPACK_IMPORTED_MODULE_4__["ModuleCenter"].Instance.initialize();
    };
    /* 工具类*/
    UnityTs.utils = Utils;
    return UnityTs;
}());
/* harmony default export */ __webpack_exports__["default"] = (UnityTs);


/***/ }),

/***/ "./src/framework/module/BaseModule.ts":
/*!********************************************!*\
  !*** ./src/framework/module/BaseModule.ts ***!
  \********************************************/
/*! exports provided: BaseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseModule", function() { return BaseModule; });
/* harmony import */ var _utils_EventDispatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/EventDispatcher */ "./src/framework/utils/EventDispatcher.ts");
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! csharp */ "csharp");
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(csharp__WEBPACK_IMPORTED_MODULE_1__);
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
 * 模块基类
 * @author by dengxuhui
 * @create time 2021/6/9 11:38
**/
var BaseModule = /** @class */ (function (_super) {
    __extends(BaseModule, _super);
    function BaseModule() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * 是否可更新
         */
        _this._updatable = true;
        return _this;
    }
    BaseModule.prototype.onAdd = function () {
        this.onAddListener();
    };
    BaseModule.prototype.onRemove = function () {
        this.onRemoveListener();
    };
    BaseModule.prototype.onAddListener = function () {
    };
    BaseModule.prototype.onRemoveListener = function () {
    };
    BaseModule.prototype.setUpdatable = function (value) {
    };
    /**
     * 获取是否可更新
     */
    BaseModule.prototype.getUpdatable = function () {
        return this._updatable;
    };
    BaseModule.prototype.onUpdate = function () {
        csharp__WEBPACK_IMPORTED_MODULE_1__["CS"].Logger.LogError("please override BaseModule::update function");
    };
    return BaseModule;
}(_utils_EventDispatcher__WEBPACK_IMPORTED_MODULE_0__["default"]));



/***/ }),

/***/ "./src/framework/module/ModuleCenter.ts":
/*!**********************************************!*\
  !*** ./src/framework/module/ModuleCenter.ts ***!
  \**********************************************/
/*! exports provided: ModuleCenter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleCenter", function() { return ModuleCenter; });
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! csharp */ "csharp");
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(csharp__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_timer_Timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/timer/Timer */ "./src/framework/utils/timer/Timer.ts");


/**
 * 模块中心
 * @author by dengxuhui
 * @create time 2021/6/9 11:39
**/
var ModuleCenter = /** @class */ (function () {
    function ModuleCenter() {
    }
    /**
     * 初始化
     */
    ModuleCenter.prototype.initialize = function () {
        this._moduleMap = new Map();
        _utils_timer_Timer__WEBPACK_IMPORTED_MODULE_1__["Timer"].timer.frameLoop(1, this, this._update, null, true);
    };
    /**
     * 添加模块
     * @param moduleClass
     */
    ModuleCenter.prototype.add = function (moduleClass) {
        if (this._moduleMap.has(moduleClass)) {
            csharp__WEBPACK_IMPORTED_MODULE_0__["CS"].Logger.LogError("Cannot add modules repeatedly,module name:" + moduleClass.name);
            return;
        }
        var inst = new moduleClass();
        this._moduleMap.set(moduleClass, inst);
        inst.onAdd();
        return inst;
    };
    /**
     * 移除模块
     * @param moduleClass
     */
    ModuleCenter.prototype.remove = function (moduleClass) {
        if (!this._moduleMap.has(moduleClass)) {
            return false;
        }
        var module = this._moduleMap.get(moduleClass);
        module.onRemove();
        this._moduleMap.delete(moduleClass);
        return true;
    };
    /**
     * 获取模块实例
     * @param moduleClass
     */
    ModuleCenter.prototype.get = function (moduleClass) {
        return this._moduleMap.get(moduleClass);
    };
    //----------------private------------------
    /**
     * 更新
     * @private
     */
    ModuleCenter.prototype._update = function () {
        this._moduleMap.forEach(function (module, _) {
            module && module.getUpdatable() && module.onUpdate();
        });
    };
    //实例
    ModuleCenter.Instance = new ModuleCenter();
    return ModuleCenter;
}());



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
/* harmony import */ var _utils_StringUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/StringUtil */ "./src/framework/utils/StringUtil.ts");
/* harmony import */ var _ResourceManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ResourceManager */ "./src/framework/resource/ResourceManager.ts");
/* harmony import */ var puerts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! puerts */ "puerts");
/* harmony import */ var puerts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(puerts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_Handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/Handler */ "./src/framework/utils/Handler.ts");





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
     * 从缓存获取对象
     * @param path
     */
    GameObjectPool.prototype.tryGetFromCache = function (path) {
        if (!this.checkHasCached(path)) {
            return null;
        }
        var cachedInst = this._instCache.get(path);
        if (cachedInst != null && cachedInst.length > 0) {
            return cachedInst.pop();
        }
        var pooledGo = this._goPool.get(path);
        if (pooledGo != null) {
            return csharp__WEBPACK_IMPORTED_MODULE_0__["UnityEngine"].GameObject.Instantiate(pooledGo);
        }
        return null;
    };
    /**
     * 启用gameObject
     * @param gameObject
     */
    GameObjectPool.prototype.activeGO = function (gameObject) {
        gameObject && gameObject.SetActive(true);
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
        return pooledGo != null;
    };
    /**
     * 缓存并实例化GameObject
     * @param path
     * @param go
     * @param inst_count
     */
    GameObjectPool.prototype.cacheAndInstGameObject = function (path, go, inst_count) {
        if (inst_count === void 0) { inst_count = 1; }
        this._goPool.set(path, go);
        if (inst_count > 0) {
            var cachedInst = this._instCache.get(path) || [];
            for (var i = 0; i < inst_count; i++) {
                var inst = csharp__WEBPACK_IMPORTED_MODULE_0__["UnityEngine"].GameObject.Instantiate(go);
                inst.transform.SetParent(this._cacheTransRoot);
                inst.SetActive(false);
                cachedInst.push(inst);
            }
            this._instCache.set(path, cachedInst);
        }
    };
    //----------------------------------public function ------------------------
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
        this._typeGameObject = Object(puerts__WEBPACK_IMPORTED_MODULE_3__["$typeof"])(csharp__WEBPACK_IMPORTED_MODULE_0__["UnityEngine"].GameObject);
    };
    /**
     * 预加载资源，回调里面不返回加载的资源
     * @param pathArray
     * @param callback
     * @param instCount
     */
    GameObjectPool.prototype.preLoadGameObjectAsync = function (pathArray, callback, instCount) {
        var _this = this;
        if (instCount === void 0) { instCount = 1; }
        var len = pathArray.length;
        var loadCount = len;
        for (var i = 0; i < len; i++) {
            var path = pathArray[i];
            _ResourceManager__WEBPACK_IMPORTED_MODULE_2__["ResourceManager"].Instance.loadAssetAsync(path, this._typeGameObject, _utils_Handler__WEBPACK_IMPORTED_MODULE_4__["default"].create(this, function (p, gameObject) {
                if (gameObject != null) {
                    _this.cacheAndInstGameObject(p, gameObject, instCount);
                }
                if (--loadCount <= 0) {
                    callback && callback.run();
                }
            }, [path], true));
        }
    };
    /**
     * 异步加载GameObject，会把加载好的GameObject传给回调
     * @param path
     * @param callback
     */
    GameObjectPool.prototype.loadGameObjectAsync = function (path, callback) {
        var _this = this;
        var inst = this.tryGetFromCache(path);
        if (inst != null) {
            this.activeGO(inst);
            return;
        }
        this.preLoadGameObjectAsync([path], _utils_Handler__WEBPACK_IMPORTED_MODULE_4__["default"].create(this, function () {
            var inst = _this.tryGetFromCache(path);
            _this.activeGO(inst);
            callback && callback.runWith(inst);
        }));
    };
    /**
     * 获取已经加载好的GameObject对象
     * @param path
     * @param active
     */
    GameObjectPool.prototype.getLoadedGameObject = function (path, active) {
        if (active === void 0) { active = true; }
        var inst = this.tryGetFromCache(path);
        if (inst == null) {
            csharp__WEBPACK_IMPORTED_MODULE_0__["CS"].Logger.LogError("GameObjectPool=>getLoadedGameObject which is not loaded:" + path);
        }
        active && this.activeGO(inst);
        return inst;
    };
    /**
     * 回收GameObject
     * @param path
     * @param inst
     * @returns
     */
    GameObjectPool.prototype.recycleGameObject = function (path, inst) {
        if (inst == null || _utils_StringUtil__WEBPACK_IMPORTED_MODULE_1__["string"].IsNullOrEmpty(path)) {
            csharp__WEBPACK_IMPORTED_MODULE_0__["CS"].Logger.LogError("GameObjectPool::recycleGameObject params error,path or game object inst is null or empty");
            return;
        }
        inst.transform.SetParent(this._cacheTransRoot);
        inst.SetActive(false);
        var cachedInst = this._instCache.get(path) || [];
        cachedInst.push(inst);
        this._instCache.set(path, cachedInst);
    };
    /**
     * 清理
     */
    GameObjectPool.prototype.cleanup = function () {
        this._instCache.forEach(function (arr, path) {
            if (arr.length) {
                var len = arr.length;
                for (var i = 0; i < len; i++) {
                    var go = arr[i];
                    if (go != null) {
                        csharp__WEBPACK_IMPORTED_MODULE_0__["UnityEngine"].GameObject.Destroy(go);
                    }
                }
            }
        });
        this._instCache.clear();
        this._goPool.clear();
    };
    GameObjectPool.Instance = new GameObjectPool();
    return GameObjectPool;
}());



/***/ }),

/***/ "./src/framework/resource/ResourceManager.ts":
/*!***************************************************!*\
  !*** ./src/framework/resource/ResourceManager.ts ***!
  \***************************************************/
/*! exports provided: ResourceManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceManager", function() { return ResourceManager; });
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! csharp */ "csharp");
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(csharp__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_timer_Timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/timer/Timer */ "./src/framework/utils/timer/Timer.ts");
/* harmony import */ var _utils_StringUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/StringUtil */ "./src/framework/utils/StringUtil.ts");
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



var ResourceManager = /** @class */ (function () {
    function ResourceManager() {
    }
    ResourceManager.prototype.onUpdate = function () {
        var _this = this;
        if (this._requestAssetsHandler.size > 0) {
            this._requestAssetsHandler.forEach(function (handler, loader) {
                if (loader.isDone) {
                    handler && handler.runWith(loader.asset);
                    loader.Dispose();
                    _this._requestAssetsHandler.delete(loader);
                }
            });
        }
        if (this._requestABHandler.size > 0) {
            this._requestABHandler.forEach(function (handler, loader) {
                if (loader.isDone) {
                    handler && handler.runWith(true);
                    loader.Dispose();
                    _this._requestABHandler.delete(loader);
                }
            });
        }
    };
    ResourceManager.prototype.initialize = function () {
        this._api = csharp__WEBPACK_IMPORTED_MODULE_0__["AssetBundles"].AssetBundleManager.Instance;
        this._requestAssetsHandler = new Map();
        this._requestABHandler = new Map();
        _utils_timer_Timer__WEBPACK_IMPORTED_MODULE_1__["Timer"].timer.frameLoop(2, this, this.onUpdate, null, true);
    };
    /**
     * 异步加载资源
     * @param path
     * @param res_type
     * @param callback
     */
    ResourceManager.prototype.loadAssetAsync = function (path, res_type, callback) {
        if (_utils_StringUtil__WEBPACK_IMPORTED_MODULE_2__["string"].IsNullOrEmpty(path)) {
            csharp__WEBPACK_IMPORTED_MODULE_0__["CS"].Logger.LogError("ResourceManager::loadAssetAsync params error,path is empty");
            return false;
        }
        var request = this._api.LoadAssetAsync(path, res_type);
        this._requestAssetsHandler.set(request, callback);
        return true;
    };
    /**
     * 异步加载AB包
     * @param path
     * @param callBack
     */
    ResourceManager.prototype.loadAssetBundleAsync = function (path, callBack) {
        if (_utils_StringUtil__WEBPACK_IMPORTED_MODULE_2__["string"].IsNullOrEmpty(path)) {
            csharp__WEBPACK_IMPORTED_MODULE_0__["CS"].Logger.LogError("ResourceManager::loadAssetBundleAsync params error,path is empty");
            return;
        }
        var request = this._api.LoadAssetBundleAsync(path);
        this._requestABHandler.set(request, callBack);
        return true;
    };
    ResourceManager.prototype.cleanup = function () {
        this._api.ClearAssetsCache();
        this._api.UnloadAllUnusedResidentAssetBundles();
    };
    /**
     * 等待正在加载中的完成
     */
    ResourceManager.prototype.waitProcessRunningOver = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        var caller = {};
                        _utils_timer_Timer__WEBPACK_IMPORTED_MODULE_1__["Timer"].timer.frameLoop(1, caller, function () {
                            if (!_this._api.IsProsessRunning) {
                                _utils_timer_Timer__WEBPACK_IMPORTED_MODULE_1__["Timer"].timer.clearAll(caller);
                                resolve();
                            }
                        }, null, true);
                    })];
            });
        });
    };
    ResourceManager.Instance = new ResourceManager();
    return ResourceManager;
}());



/***/ }),

/***/ "./src/framework/scene/SceneManager.ts":
/*!*********************************************!*\
  !*** ./src/framework/scene/SceneManager.ts ***!
  \*********************************************/
/*! exports provided: SceneManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SceneManager", function() { return SceneManager; });
/* harmony import */ var _ui_UIManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/UIManager */ "./src/framework/ui/UIManager.ts");
/* harmony import */ var _utils_timer_Timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/timer/Timer */ "./src/framework/utils/timer/Timer.ts");
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! csharp */ "csharp");
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(csharp__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _game_scenes_config_SceneConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../game/scenes/config/SceneConfig */ "./src/game/scenes/config/SceneConfig.ts");
/* harmony import */ var _resource_ResourceManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../resource/ResourceManager */ "./src/framework/resource/ResourceManager.ts");
/* harmony import */ var _ui_config_UILayers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/config/UILayers */ "./src/framework/ui/config/UILayers.ts");
/* harmony import */ var _resource_GameObjectPool__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../resource/GameObjectPool */ "./src/framework/resource/GameObjectPool.ts");
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







var SceneManager = /** @class */ (function () {
    function SceneManager() {
    }
    SceneManager.prototype.initialize = function () {
        this._sceneMap = new Map();
        this._busing = false;
        this._currentScene = null;
    };
    SceneManager.prototype.destroy = function () {
        this._currentScene = null;
        if (this._sceneMap) {
            this._sceneMap.forEach(function (scene, name) {
                scene && scene.destroy();
            });
            this._sceneMap = null;
        }
    };
    /**
     * 切换场景
     * @param sceneConfig
     */
    SceneManager.prototype.switchScene = function (sceneConfig) {
        var _this = this;
        if (this._busing) {
            return;
        }
        if (this._currentScene && this._currentScene.config == sceneConfig) {
            return;
        }
        this._busing = true;
        this._innerSwitchScene(sceneConfig).then(function () {
            _this._busing = false;
            csharp__WEBPACK_IMPORTED_MODULE_2__["CS"].Logger.Log("switch scene complete!!");
        });
    };
    /**
     * 等待一帧
     * @private
     */
    SceneManager.prototype._waitFrame = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, _utils_timer_Timer__WEBPACK_IMPORTED_MODULE_1__["Timer"].timer.waitFrame(1)];
            });
        });
    };
    //切换场景
    SceneManager.prototype._innerSwitchScene = function (config) {
        return __awaiter(this, void 0, void 0, function () {
            var window, model, sceneMgr, resources, logicScene, curProgress;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _ui_UIManager__WEBPACK_IMPORTED_MODULE_0__["default"].Instance.openWindow(config.Loading);
                        window = _ui_UIManager__WEBPACK_IMPORTED_MODULE_0__["default"].Instance.getWindow(config.Loading);
                        model = window.model;
                        model.setValue(0);
                        return [4 /*yield*/, this._waitFrame()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, _resource_ResourceManager__WEBPACK_IMPORTED_MODULE_4__["ResourceManager"].Instance.waitProcessRunningOver()];
                    case 2:
                        _a.sent();
                        //清理旧场景
                        this._currentScene && this._currentScene.OnLeave();
                        model.setValue(model.getValue() + 0.01);
                        return [4 /*yield*/, this._waitFrame()];
                    case 3:
                        _a.sent();
                        //清理ui
                        _ui_UIManager__WEBPACK_IMPORTED_MODULE_0__["default"].Instance.destroyWindowExceptLayer(_ui_config_UILayers__WEBPACK_IMPORTED_MODULE_5__["EUILayer"].TopLayer);
                        model.setValue(model.getValue() + 0.01);
                        return [4 /*yield*/, this._waitFrame()];
                    case 4:
                        _a.sent();
                        //清理资源缓存
                        _resource_GameObjectPool__WEBPACK_IMPORTED_MODULE_6__["GameObjectPool"].Instance.cleanup();
                        model.setValue(model.getValue() + 0.01);
                        return [4 /*yield*/, this._waitFrame()];
                    case 5:
                        _a.sent();
                        _resource_ResourceManager__WEBPACK_IMPORTED_MODULE_4__["ResourceManager"].Instance.cleanup();
                        model.setValue(model.getValue() + 0.01);
                        return [4 /*yield*/, this._waitFrame()];
                    case 6:
                        _a.sent();
                        sceneMgr = csharp__WEBPACK_IMPORTED_MODULE_2__["UnityEngine"].SceneManagement.SceneManager;
                        resources = csharp__WEBPACK_IMPORTED_MODULE_2__["UnityEngine"].Resources;
                        sceneMgr.LoadScene(_game_scenes_config_SceneConfig__WEBPACK_IMPORTED_MODULE_3__["SceneConfigs"].LoadingScene.Level);
                        model.setValue(model.getValue() + 0.01);
                        return [4 /*yield*/, this._waitFrame()];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, resources.UnloadUnusedAssets()];
                    case 8:
                        _a.sent();
                        model.setValue(model.getValue() + 0.1);
                        return [4 /*yield*/, this._waitFrame()];
                    case 9:
                        _a.sent();
                        logicScene = this._sceneMap.get(config.Name);
                        if (logicScene == null) {
                            logicScene = new config.Class(config);
                            this._sceneMap.set(config.Name, logicScene);
                        }
                        logicScene.OnEnter();
                        model.setValue(model.getValue() + 0.02);
                        return [4 /*yield*/, this._waitFrame()];
                    case 10:
                        _a.sent();
                        //加载场景
                        return [4 /*yield*/, sceneMgr.LoadSceneAsync(config.Level)];
                    case 11:
                        //加载场景
                        _a.sent();
                        model.setValue(model.getValue() + 0.15);
                        return [4 /*yield*/, this._waitFrame()];
                    case 12:
                        _a.sent();
                        curProgress = model.getValue();
                        //预加载场景资源
                        return [4 /*yield*/, logicScene.preloadAsync(model, 0.65)];
                    case 13:
                        //预加载场景资源
                        _a.sent();
                        model.setValue(curProgress + 0.65);
                        return [4 /*yield*/, this._waitFrame()];
                    case 14:
                        _a.sent();
                        logicScene.OnComplete();
                        model.setValue(1);
                        return [4 /*yield*/, this._waitFrame()];
                    case 15:
                        _a.sent();
                        this._currentScene = logicScene;
                        //释放loading
                        _ui_UIManager__WEBPACK_IMPORTED_MODULE_0__["default"].Instance.destroyWindow(config.Loading);
                        return [4 /*yield*/, this._waitFrame()];
                    case 16:
                        _a.sent();
                        resources.UnloadUnusedAssets();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 实例
     */
    SceneManager.Instance = new SceneManager();
    return SceneManager;
}());



/***/ }),

/***/ "./src/framework/scene/base/BaseScene.ts":
/*!***********************************************!*\
  !*** ./src/framework/scene/base/BaseScene.ts ***!
  \***********************************************/
/*! exports provided: BaseScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseScene", function() { return BaseScene; });
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
/**
 * 场景基类
 */
var BaseScene = /** @class */ (function () {
    /**
     * 构造函数
     * @param config
     */
    function BaseScene(config) {
        this._config = config;
        this._preloadResources = new Map();
        this._preloadPrefab = new Array();
        this.OnCreate();
    }
    BaseScene.prototype.destroy = function () {
        this.OnDestroy();
    };
    /**
     * 创建时
     * @constructor
     */
    BaseScene.prototype.OnCreate = function () {
    };
    /**
     * 释放时
     * @constructor
     */
    BaseScene.prototype.OnDestroy = function () {
        this._config = null;
        this._preloadPrefab = null;
        this._preloadResources = null;
    };
    /**
     * 进入时
     * @constructor
     */
    BaseScene.prototype.OnEnter = function () {
    };
    /**
     * 离开时
     * @constructor
     */
    BaseScene.prototype.OnLeave = function () {
        this._preloadResources.clear();
        this._preloadPrefab.length = 0;
    };
    /**
     * 加载完成时
     * @constructor
     */
    BaseScene.prototype.OnComplete = function () {
    };
    /**
     * 预加载场景资源
     * @param model
     * @param maxProgress
     */
    BaseScene.prototype.preloadAsync = function (model, maxProgress) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    Object.defineProperty(BaseScene.prototype, "config", {
        /**
         * get config
         */
        get: function () {
            return this._config;
        },
        enumerable: false,
        configurable: true
    });
    return BaseScene;
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
/* harmony import */ var _UIWindow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UIWindow */ "./src/framework/ui/UIWindow.ts");
/* harmony import */ var _component_UILayer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/UILayer */ "./src/framework/ui/component/UILayer.ts");
/* harmony import */ var puerts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! puerts */ "puerts");
/* harmony import */ var puerts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(puerts__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_Handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/Handler */ "./src/framework/utils/Handler.ts");
/* harmony import */ var _config_UIWindowNames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./config/UIWindowNames */ "./src/framework/ui/config/UIWindowNames.ts");
/* harmony import */ var _config_UIConfigs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./config/UIConfigs */ "./src/framework/ui/config/UIConfigs.ts");
/* harmony import */ var _config_UIMessageNames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./config/UIMessageNames */ "./src/framework/ui/config/UIMessageNames.ts");
/* harmony import */ var _config_EUIAction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./config/EUIAction */ "./src/framework/ui/config/EUIAction.ts");
/* harmony import */ var _resource_GameObjectPool__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../resource/GameObjectPool */ "./src/framework/resource/GameObjectPool.ts");
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
 * @author by dengxuhui
 * @create time 2021/6/1 10:25
 *
 * UI管理器
 **/
var UIManager = /** @class */ (function (_super) {
    __extends(UIManager, _super);
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
        this._windowMap = new Map();
        this._openingDialogs = new Map();
        this._layerMap = new Map();
        this._gameObject = csharp__WEBPACK_IMPORTED_MODULE_1__["UnityEngine"].GameObject.Find(UIManager.UIRootPath);
        this._transform = this._gameObject.transform;
        var cameraRoot = csharp__WEBPACK_IMPORTED_MODULE_1__["UnityEngine"].GameObject.Find(UIManager.UICameraPath);
        this._uiCamera = cameraRoot.GetComponent(Object(puerts__WEBPACK_IMPORTED_MODULE_5__["$typeof"])(csharp__WEBPACK_IMPORTED_MODULE_1__["UnityEngine"].Camera));
        csharp__WEBPACK_IMPORTED_MODULE_1__["UnityEngine"].Object.DontDestroyOnLoad(this._gameObject);
        var eventSys = csharp__WEBPACK_IMPORTED_MODULE_1__["UnityEngine"].GameObject.Find(UIManager.EventSystemPath);
        csharp__WEBPACK_IMPORTED_MODULE_1__["UnityEngine"].Object.DontDestroyOnLoad(eventSys);
        _config_UILayers__WEBPACK_IMPORTED_MODULE_2__["UILayers"].walk(_utils_Handler__WEBPACK_IMPORTED_MODULE_6__["default"].create(this, function (layer_info) {
            var go = new csharp__WEBPACK_IMPORTED_MODULE_1__["UnityEngine"].GameObject(layer_info.name);
            var trans = go.transform;
            trans.SetParent(_this._transform);
            var newLayer = new _component_UILayer__WEBPACK_IMPORTED_MODULE_4__["UILayer"](_this, layer_info.name);
            newLayer.onCreate(layer_info);
            _this._layerMap.set(layer_info.type, newLayer);
        }, null, false));
    };
    /**
     * 打开界面
     * @param uiName 界面名
     * @param args 参数列表
     */
    UIManager.prototype.openWindow = function (uiName) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var window = this._windowMap.get(uiName);
        //不存在ui，先初始化
        if (window == null) {
            window = new _UIWindow__WEBPACK_IMPORTED_MODULE_3__["UIWindow"]();
            this._windowMap.set(uiName, window);
            this.initWindow(uiName, window);
        }
        else {
            if (window.action == _config_EUIAction__WEBPACK_IMPORTED_MODULE_10__["EUIAction"].Loading || window.action == _config_EUIAction__WEBPACK_IMPORTED_MODULE_10__["EUIAction"].Opening) {
                //TODO 目前打开中，或者在加载中就直接返回，之后按需求修改。
                return true;
            }
        }
        this.innerOpenWindow(window, args);
        return true;
    };
    /**
     * 关闭界面
     * @param uiName 界面名
     */
    UIManager.prototype.closeWindow = function (uiName) {
        var window = this._windowMap.get(uiName);
        if (window == null) {
            return false;
        }
        this.innerCloseWindow(window);
    };
    /**
     * 释放除去某一层的ui
     * @param layer
     */
    UIManager.prototype.destroyWindowExceptLayer = function (layer) {
        var _this = this;
        this._windowMap.forEach(function (window, name) {
            if (window.layer != layer) {
                _this.innerCloseWindow(window);
                _this.innerDestroyWindow(window);
            }
        });
    };
    /**
     * 释放窗口
     * @param uiName
     */
    UIManager.prototype.destroyWindow = function (uiName) {
        var window = this._windowMap.get(uiName);
        if (window == null) {
            return;
        }
        this.innerCloseWindow(window);
        this.innerDestroyWindow(window);
    };
    /**
     * 获取界面
     * @param uiName
     */
    UIManager.prototype.getWindow = function (uiName) {
        return this._windowMap.get(uiName);
    };
    //-------------------------------private----------------------
    /**
     * 初始化界面
     * @param uiName
     * @param window
     */
    UIManager.prototype.initWindow = function (uiName, window) {
        window.action = _config_EUIAction__WEBPACK_IMPORTED_MODULE_10__["EUIAction"].Initing;
        var config = _config_UIConfigs__WEBPACK_IMPORTED_MODULE_8__["UIConfigs"].get(uiName);
        if (config == null) {
            csharp__WEBPACK_IMPORTED_MODULE_1__["CS"].Logger.LogError("UIWindowNames not exist in UIConfigs,name index is:" + _config_UIWindowNames__WEBPACK_IMPORTED_MODULE_7__["UIWindowNames"][uiName]);
        }
        var layer = this._layerMap.get(config.layer);
        if (layer == null) {
            csharp__WEBPACK_IMPORTED_MODULE_1__["CS"].Logger.LogError("No layer named:" + _config_UILayers__WEBPACK_IMPORTED_MODULE_2__["EUILayer"][config.layer]);
        }
        window.name = uiName;
        var eventDispatcher = new _utils_EventDispatcher__WEBPACK_IMPORTED_MODULE_0__["default"]();
        if (config.model != null) {
            window.model = new config.model(eventDispatcher, uiName);
        }
        if (config.ctrl != null) {
            window.ctrl = new config.ctrl(eventDispatcher, window.model);
        }
        if (config.view != null) {
            window.view = new config.view(layer, _config_UIWindowNames__WEBPACK_IMPORTED_MODULE_7__["UIWindowNames"][config.name], eventDispatcher, window.model, window.ctrl);
        }
        window.layer = config.layer;
        window.prefabPath = config.prefabPath;
        window.components = config.components;
        window.type = config.type;
        window.action = _config_EUIAction__WEBPACK_IMPORTED_MODULE_10__["EUIAction"].None;
        this.event(_config_UIMessageNames__WEBPACK_IMPORTED_MODULE_9__["UIMessageNames"].UIFRAME_ON_WINDOW_CREATE, window);
        return window;
    };
    /**
     * 关闭界面，会处理可能在加载的情况，然后再禁用界面
     * @param window
     */
    UIManager.prototype.innerCloseWindow = function (window) {
        var deactivate = true;
        //还在加载中就要关闭界面把加载回调给清除,加载中view还没拉起来就没必要去禁用view也不能去禁用会报错
        if (window.action == _config_EUIAction__WEBPACK_IMPORTED_MODULE_10__["EUIAction"].Loading) {
            var handler = this._loadHandlerMap.get(window.name);
            handler && handler.clear();
            this._loadHandlerMap.delete(window.name);
            window.action = _config_EUIAction__WEBPACK_IMPORTED_MODULE_10__["EUIAction"].None;
            deactivate = false;
        }
        deactivate && this.deactivateWindow(window);
    };
    /**
     * 内部打开窗口，处理加载
     * @param window
     * @param args
     */
    UIManager.prototype.innerOpenWindow = function (window) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (window.action == _config_EUIAction__WEBPACK_IMPORTED_MODULE_10__["EUIAction"].Opening || window.isOpened) {
            csharp__WEBPACK_IMPORTED_MODULE_1__["CS"].Logger.LogError("you should close window first,window name: " + _config_UIWindowNames__WEBPACK_IMPORTED_MODULE_7__["UIWindowNames"][window.name]);
            return;
        }
        if (window.isLoaded) {
            this.activateWindow(window);
        }
        else {
            window.action = _config_EUIAction__WEBPACK_IMPORTED_MODULE_10__["EUIAction"].Loading;
            var loadCB = _utils_Handler__WEBPACK_IMPORTED_MODULE_6__["default"].create(this, function (window, args) {
                window.isLoaded = true;
                var go = _resource_GameObjectPool__WEBPACK_IMPORTED_MODULE_11__["GameObjectPool"].Instance.getLoadedGameObject(window.prefabPath, true);
                var layer = _this._layerMap.get(window.layer);
                var trans = go.transform;
                trans.SetParent(layer.transform);
                trans.name = _config_UIWindowNames__WEBPACK_IMPORTED_MODULE_7__["UIWindowNames"][window.name];
                window.action = _config_EUIAction__WEBPACK_IMPORTED_MODULE_10__["EUIAction"].None;
                window.view.onCreate();
                _this.activateWindow(window, args);
            }, [window, args], true);
            this._loadHandlerMap.set(window.name, loadCB);
            var loadArray = window.components && window.components.concat([window.prefabPath]) || [window.prefabPath];
            _resource_GameObjectPool__WEBPACK_IMPORTED_MODULE_11__["GameObjectPool"].Instance.preLoadGameObjectAsync(loadArray, loadCB);
        }
    };
    /**
     * 激活界面
     * @param window
     * @param args
     */
    UIManager.prototype.activateWindow = function (window) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (window.isOpened) {
            return;
        }
        window.action = _config_EUIAction__WEBPACK_IMPORTED_MODULE_10__["EUIAction"].Opening;
        window === null || window === void 0 ? void 0 : window.model.activate(args);
        window === null || window === void 0 ? void 0 : window.ctrl.activate(args);
        window.view.setActive(true);
        window.action = _config_EUIAction__WEBPACK_IMPORTED_MODULE_10__["EUIAction"].None;
        window.isOpened = true;
        this.event(_config_UIMessageNames__WEBPACK_IMPORTED_MODULE_9__["UIMessageNames"].UIFRAME_ON_WINDOW_OPEN, window);
    };
    /**
     * 禁用界面
     * @param window
     */
    UIManager.prototype.deactivateWindow = function (window) {
        if (!window.isOpened) {
            return;
        }
        window.action = _config_EUIAction__WEBPACK_IMPORTED_MODULE_10__["EUIAction"].Closing;
        window === null || window === void 0 ? void 0 : window.model.deactivate();
        window === null || window === void 0 ? void 0 : window.ctrl.deactivate();
        window.view.setActive(false);
        window.action = _config_EUIAction__WEBPACK_IMPORTED_MODULE_10__["EUIAction"].None;
        window.isOpened = false;
        this.event(_config_UIMessageNames__WEBPACK_IMPORTED_MODULE_9__["UIMessageNames"].UIFRAME_ON_WINDOW_CLOSE, window);
    };
    UIManager.prototype.innerDestroyWindow = function (window) {
        var _a, _b, _c;
        if (window.isLoaded) {
            _resource_GameObjectPool__WEBPACK_IMPORTED_MODULE_11__["GameObjectPool"].Instance.recycleGameObject(window.prefabPath, window.view.gameObject);
        }
        (_a = window.model) === null || _a === void 0 ? void 0 : _a.destroy();
        (_b = window.ctrl) === null || _b === void 0 ? void 0 : _b.destroy();
        (_c = window.view) === null || _c === void 0 ? void 0 : _c.destroy();
        this._windowMap.delete(window.name);
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

/***/ "./src/framework/ui/UIWindow.ts":
/*!**************************************!*\
  !*** ./src/framework/ui/UIWindow.ts ***!
  \**************************************/
/*! exports provided: UIWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIWindow", function() { return UIWindow; });
/* harmony import */ var _config_UILayers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config/UILayers */ "./src/framework/ui/config/UILayers.ts");
/* harmony import */ var _config_EUIAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config/EUIAction */ "./src/framework/ui/config/EUIAction.ts");


/**
 * @author by dengxuhui
 * @create time 2021/6/1 10:26
 * 窗口包装器
**/
var UIWindow = /** @class */ (function () {
    function UIWindow() {
        /**
         * 层级
         */
        this.layer = _config_UILayers__WEBPACK_IMPORTED_MODULE_0__["EUILayer"].BackgroundLayer;
        /**
         * 预设路径
         */
        this.prefabPath = "";
        /**
         * 预加载组件prefab
         */
        this.components = [];
        /**
         * ui当前进行中的行为，行为完成置为none
         */
        this.action = _config_EUIAction__WEBPACK_IMPORTED_MODULE_1__["EUIAction"].None;
        /**
         * 是否加载完成
         */
        this.isLoaded = false;
        /**
         * 是否打开
         */
        this.isOpened = false;
    }
    return UIWindow;
}());



/***/ }),

/***/ "./src/framework/ui/base/UIBaseCtrl.ts":
/*!*********************************************!*\
  !*** ./src/framework/ui/base/UIBaseCtrl.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var UIBaseCtrl = /** @class */ (function () {
    function UIBaseCtrl(eventDispatcher, model) {
        this._eventHandle = eventDispatcher;
        this._model = model;
        this.onCreate();
    }
    UIBaseCtrl.prototype.destroy = function () {
        this.onDestroy();
        this._eventHandle = null;
        this._model = null;
    };
    UIBaseCtrl.prototype.onCreate = function () {
    };
    UIBaseCtrl.prototype.onDestroy = function () {
    };
    UIBaseCtrl.prototype.onEnable = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
    };
    UIBaseCtrl.prototype.onDisable = function () {
    };
    UIBaseCtrl.prototype.onAddListener = function () {
    };
    UIBaseCtrl.prototype.onRemoveListener = function () {
    };
    UIBaseCtrl.prototype.deactivate = function () {
        this.onRemoveListener();
        this.onDisable();
    };
    UIBaseCtrl.prototype.activate = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.onAddListener();
        this.onEnable(args);
    };
    return UIBaseCtrl;
}());
/* harmony default export */ __webpack_exports__["default"] = (UIBaseCtrl);


/***/ }),

/***/ "./src/framework/ui/base/UIBaseModel.ts":
/*!**********************************************!*\
  !*** ./src/framework/ui/base/UIBaseModel.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var UIBaseModel = /** @class */ (function () {
    function UIBaseModel(eventDispatcher, uiName) {
        this._eventHandle = eventDispatcher;
        this._uiName = uiName;
        this.onCreate();
    }
    UIBaseModel.prototype.destroy = function () {
        this.onDestroy();
        this._eventHandle.offAllCaller(this);
        this._eventHandle = null;
        this._uiName = null;
    };
    UIBaseModel.prototype.onCreate = function () {
    };
    UIBaseModel.prototype.onDestroy = function () {
    };
    UIBaseModel.prototype.onEnable = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
    };
    UIBaseModel.prototype.onDisable = function () {
    };
    UIBaseModel.prototype.onAddListener = function () {
    };
    UIBaseModel.prototype.onRemoveListener = function () {
    };
    UIBaseModel.prototype.deactivate = function () {
        this.onRemoveListener();
        this.onDisable();
    };
    UIBaseModel.prototype.activate = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.onAddListener();
        this.onEnable(args);
    };
    return UIBaseModel;
}());
/* harmony default export */ __webpack_exports__["default"] = (UIBaseModel);


/***/ }),

/***/ "./src/framework/ui/base/UIBaseView.ts":
/*!*********************************************!*\
  !*** ./src/framework/ui/base/UIBaseView.ts ***!
  \*********************************************/
/*! exports provided: UIBaseView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIBaseView", function() { return UIBaseView; });
/* harmony import */ var _component_UIBaseContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/UIBaseContainer */ "./src/framework/ui/component/UIBaseContainer.ts");
/* harmony import */ var _component_UICanvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/UICanvas */ "./src/framework/ui/component/UICanvas.ts");
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! csharp */ "csharp");
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(csharp__WEBPACK_IMPORTED_MODULE_2__);
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
 * ui基类
 */
var UIBaseView = /** @class */ (function (_super) {
    __extends(UIBaseView, _super);
    function UIBaseView(holder, var_arg, eventDispatcher, model, ctrl) {
        var _this = _super.call(this, holder, var_arg) || this;
        _this._baseOrder = 0;
        _this._model = model;
        _this._ctrl = ctrl;
        _this._eventHandle = eventDispatcher;
        return _this;
    }
    UIBaseView.prototype.onCreate = function () {
        _super.prototype.onCreate.call(this);
        this._canvas = this.addComponent(_component_UICanvas__WEBPACK_IMPORTED_MODULE_1__["UICanvas"], "", 0);
        this._rectTransform.offsetMax = csharp__WEBPACK_IMPORTED_MODULE_2__["UnityEngine"].Vector2.zero;
        this._rectTransform.offsetMin = csharp__WEBPACK_IMPORTED_MODULE_2__["UnityEngine"].Vector2.zero;
        this._rectTransform.localScale = csharp__WEBPACK_IMPORTED_MODULE_2__["UnityEngine"].Vector3.zero;
        this._rectTransform.localPosition = csharp__WEBPACK_IMPORTED_MODULE_2__["UnityEngine"].Vector3.zero;
    };
    UIBaseView.prototype.onDestroy = function () {
        this._model = null;
        this._ctrl = null;
        this._canvas = null;
        this._eventHandle = null;
        _super.prototype.onDestroy.call(this);
    };
    UIBaseView.prototype.onEnable = function () {
        var arg = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arg[_i] = arguments[_i];
        }
        this._baseOrder = this._holder.popWindowOrder();
        _super.prototype.onEnable.call(this);
        this.onAddListener();
    };
    UIBaseView.prototype.onDisable = function () {
        this.onRemoveListener();
        _super.prototype.onDisable.call(this);
        this._holder.pushWindowOrder();
    };
    UIBaseView.prototype.onAddListener = function () {
    };
    UIBaseView.prototype.onRemoveListener = function () {
    };
    Object.defineProperty(UIBaseView.prototype, "baseOrder", {
        /**
         * 基础层级
         */
        get: function () {
            return this._baseOrder;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UIBaseView.prototype, "ctrl", {
        /**
         * 获取控制器
         */
        get: function () {
            return this._ctrl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UIBaseView.prototype, "model", {
        /**
         * 获取数据
         */
        get: function () {
            return this._model;
        },
        enumerable: false,
        configurable: true
    });
    return UIBaseView;
}(_component_UIBaseContainer__WEBPACK_IMPORTED_MODULE_0__["UIBaseContainer"]));



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
    Object.defineProperty(UIBaseComponent.prototype, "transform", {
        /**
         * 获取transform节点
         */
        get: function () {
            return this._transform;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UIBaseComponent.prototype, "holder", {
        /**
         * 获取holder
         */
        get: function () {
            return this._holder;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UIBaseComponent.prototype, "gameObject", {
        /**
         * 获取游戏对象
         */
        get: function () {
            return this._gameObject;
        },
        enumerable: false,
        configurable: true
    });
    return UIBaseComponent;
}());



/***/ }),

/***/ "./src/framework/ui/component/UIBaseContainer.ts":
/*!*******************************************************!*\
  !*** ./src/framework/ui/component/UIBaseContainer.ts ***!
  \*******************************************************/
/*! exports provided: UIBaseContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIBaseContainer", function() { return UIBaseContainer; });
/* harmony import */ var _UIBaseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UIBaseComponent */ "./src/framework/ui/component/UIBaseComponent.ts");
/* harmony import */ var _utils_Handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/Handler */ "./src/framework/utils/Handler.ts");
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! csharp */ "csharp");
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(csharp__WEBPACK_IMPORTED_MODULE_2__);
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
 * 基础组件容器
 */



var UIBaseContainer = /** @class */ (function (_super) {
    __extends(UIBaseContainer, _super);
    function UIBaseContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UIBaseContainer.prototype.onCreate = function () {
        _super.prototype.onCreate.call(this);
        this._components = new Map();
        this._length = 0;
    };
    UIBaseContainer.prototype.onDestroy = function () {
        var _this = this;
        this.walk(_utils_Handler__WEBPACK_IMPORTED_MODULE_1__["default"].create(this, function (component) {
            if (component.holder == _this) {
                component.destroy();
            }
        }, null, false));
        this._components = null;
        _super.prototype.onDestroy.call(this);
    };
    UIBaseContainer.prototype.onEnable = function () {
        _super.prototype.onEnable.call(this);
        this.walk(_utils_Handler__WEBPACK_IMPORTED_MODULE_1__["default"].create(this, function (component) {
            component.onEnable();
        }, null, false));
    };
    UIBaseContainer.prototype.onDisable = function () {
        var _this = this;
        _super.prototype.onDisable.call(this);
        this.walk(_utils_Handler__WEBPACK_IMPORTED_MODULE_1__["default"].create(this, function (component) {
            if (component.holder == _this) {
                component.onDisable();
            }
        }, null, false));
    };
    /**
     * 遍历所有组件
     * @param callback
     * @param component_class
     */
    UIBaseContainer.prototype.walk = function (callback, component_class) {
        this._components.forEach(function (component_map, name) {
            if (component_map != null) {
                component_map.forEach(function (component, cmp_class) {
                    if (component_class == null) {
                        callback.runWith(component);
                    }
                    else if (cmp_class == component_class) {
                        callback.runWith(component);
                    }
                });
            }
        });
    };
    /**
     * 添加组件
     * @param component_class
     * @param var_arg
     * @param params
     */
    UIBaseContainer.prototype.addComponent = function (component_class, var_arg) {
        var params = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            params[_i - 2] = arguments[_i];
        }
        var component_inst = new component_class(this, var_arg);
        component_inst.onCreate(params);
        var name = component_inst.getName();
        this.recordComponent(name, component_class, component_inst);
        this._length++;
        return component_inst;
    };
    /**
     * 获取单个组件，如果没有传入类类型，返回这个名字的第一个组件
     * @param name
     * @param component_class
     */
    UIBaseContainer.prototype.getComponent = function (name, component_class) {
        var components = this._components[name];
        if (components == null) {
            return null;
        }
        if (component_class == null) {
            components.forEach(function (v) {
                return v;
            });
        }
        else {
            return components.get(component_class);
        }
    };
    /**
     * 获取所有类型组件
     * @param component_class
     */
    UIBaseContainer.prototype.getComponents = function (component_class) {
        var components = new Array();
        this.walk(_utils_Handler__WEBPACK_IMPORTED_MODULE_1__["default"].create(this, function (component) {
            components.push(component);
        }, null, false), component_class);
        return components;
    };
    /**
     * 移除组件
     * @param name
     * @param component_class
     */
    UIBaseContainer.prototype.removeComponent = function (name, component_class) {
        var component = this.getComponent(name, component_class);
        if (component != null) {
            component.destroy();
            this._length--;
            this._components[name][component_class] = null;
        }
        return component;
    };
    /**
     * 移除组件
     * @param component_class
     */
    UIBaseContainer.prototype.removeComponents = function (component_class) {
        var components = this.getComponents(component_class);
        for (var i = 0; i < components.length; i++) {
            var component = components[i];
            var cmp_name = component.getName();
            component.destroy();
            this._components[cmp_name][component_class] = null;
            this._length--;
        }
        return components;
    };
    /**
     * 记录组件
     * @param name
     * @param component_class
     * @param component
     */
    UIBaseContainer.prototype.recordComponent = function (name, component_class, component) {
        if (this._components[name][component_class] != null) {
            csharp__WEBPACK_IMPORTED_MODULE_2__["CS"].Logger.LogError("Already exist component_class:" + component_class.name);
        }
        this._components[name][component_class] = component;
    };
    return UIBaseContainer;
}(_UIBaseComponent__WEBPACK_IMPORTED_MODULE_0__["UIBaseComponent"]));



/***/ }),

/***/ "./src/framework/ui/component/UICanvas.ts":
/*!************************************************!*\
  !*** ./src/framework/ui/component/UICanvas.ts ***!
  \************************************************/
/*! exports provided: UICanvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UICanvas", function() { return UICanvas; });
/* harmony import */ var _UIBaseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UIBaseComponent */ "./src/framework/ui/component/UIBaseComponent.ts");
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! csharp */ "csharp");
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(csharp__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_UIUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/UIUtil */ "./src/framework/ui/util/UIUtil.ts");
/* harmony import */ var puerts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! puerts */ "puerts");
/* harmony import */ var puerts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(puerts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _unity_UnityTagsAndLayers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../unity/UnityTagsAndLayers */ "./src/framework/unity/UnityTagsAndLayers.ts");
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
 * ts侧canvas组件
 * -- 1、为了调整UI层级，所以这里的overrideSorting设置为true
 -- 2、如果只是类似NGUI的Panel那样划分drawcall管理，直接在预设上添加Canvas，并设置overrideSorting为false
 -- 3、这里的order是相对于window.view中base_order的差量，窗口内的order最多为10个---UIManager中配置
 -- 4、旧窗口内所有canvas的real_order都应该在新窗口之下，即保证旧窗口内包括UI特效在内的所有组件，不会跑到新窗口之上
 -- 5、UI逻辑代码禁止手动直接设置Unity侧Cavans组件的orderInLayer，全部使用本脚本接口调整层级，避免层级混乱
 */
var UICanvas = /** @class */ (function (_super) {
    __extends(UICanvas, _super);
    function UICanvas() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UICanvas.prototype.onCreate = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        _super.prototype.onCreate.call(this);
        var relative_order = args[0];
        var canvas;
        canvas = _util_UIUtil__WEBPACK_IMPORTED_MODULE_2__["UIUtil"].findComponent(this._transform, Object(puerts__WEBPACK_IMPORTED_MODULE_3__["$typeof"])(csharp__WEBPACK_IMPORTED_MODULE_1__["UnityEngine"].Canvas));
        if (canvas == null) {
            canvas = this._gameObject.AddComponent(Object(puerts__WEBPACK_IMPORTED_MODULE_3__["$typeof"])(csharp__WEBPACK_IMPORTED_MODULE_1__["UnityEngine"].Canvas));
        }
        canvas.overrideSorting = true;
        canvas.sortingLayerName = _unity_UnityTagsAndLayers__WEBPACK_IMPORTED_MODULE_4__["EUnitySortingLayers"].UI;
        this._canvas = canvas;
        this._graphicRaycaster = _util_UIUtil__WEBPACK_IMPORTED_MODULE_2__["UIUtil"].findComponent(this._transform, Object(puerts__WEBPACK_IMPORTED_MODULE_3__["$typeof"])(csharp__WEBPACK_IMPORTED_MODULE_1__["UnityEngine"].UI.GraphicRaycaster));
        if (this._graphicRaycaster == null) {
            this._graphicRaycaster = this._gameObject.AddComponent(Object(puerts__WEBPACK_IMPORTED_MODULE_3__["$typeof"])(csharp__WEBPACK_IMPORTED_MODULE_1__["UnityEngine"].UI.GraphicRaycaster));
        }
        this._relativeOrder = relative_order;
    };
    UICanvas.prototype.onDestroy = function () {
        this._canvas = null;
        this._graphicRaycaster = null;
        _super.prototype.onDestroy.call(this);
    };
    UICanvas.prototype.onEnable = function () {
        _super.prototype.onEnable.call(this);
        this.setOrder(this._relativeOrder);
    };
    UICanvas.prototype.setOrder = function (relativeOrder) {
        if (relativeOrder > _UIManager__WEBPACK_IMPORTED_MODULE_5__["default"].MaxOrderPerWindow) {
            csharp__WEBPACK_IMPORTED_MODULE_1__["CS"].Logger.LogError("relative order is larger than ui manager define max order in per window!!!");
        }
        this._relativeOrder = relativeOrder;
        this._canvas.sortingOrder = this._view.baseOrder + relativeOrder;
    };
    Object.defineProperty(UICanvas.prototype, "canvas", {
        /**
         * 获取canvas对象
         */
        get: function () {
            return this._canvas;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UICanvas.prototype, "order", {
        /**
         * 获取层级
         */
        get: function () {
            return this._relativeOrder;
        },
        enumerable: false,
        configurable: true
    });
    return UICanvas;
}(_UIBaseComponent__WEBPACK_IMPORTED_MODULE_0__["UIBaseComponent"]));



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

/***/ "./src/framework/ui/config/EUIAction.ts":
/*!**********************************************!*\
  !*** ./src/framework/ui/config/EUIAction.ts ***!
  \**********************************************/
/*! exports provided: EUIAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EUIAction", function() { return EUIAction; });
/**
 * @author by dengxuhui
 * @create time 2021/6/1 11:01
 * ui当前的行为
**/
var EUIAction;
(function (EUIAction) {
    /**
     * 当前没有任何行为
     */
    EUIAction[EUIAction["None"] = 0] = "None";
    /**
     * 初始化中
     */
    EUIAction[EUIAction["Initing"] = 1] = "Initing";
    /**
     * 加载中
     */
    EUIAction[EUIAction["Loading"] = 2] = "Loading";
    /**
     * 打开中
     */
    EUIAction[EUIAction["Opening"] = 3] = "Opening";
    /**
     * 关闭中
     */
    EUIAction[EUIAction["Closing"] = 4] = "Closing";
})(EUIAction || (EUIAction = {}));


/***/ }),

/***/ "./src/framework/ui/config/EUIType.ts":
/*!********************************************!*\
  !*** ./src/framework/ui/config/EUIType.ts ***!
  \********************************************/
/*! exports provided: EUIType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EUIType", function() { return EUIType; });
/**
 * ui类型
 */
var EUIType;
(function (EUIType) {
    /**
     * 普通ui
     */
    EUIType[EUIType["View"] = 0] = "View";
    /**
     * 弹窗
     */
    EUIType[EUIType["Dialog"] = 1] = "Dialog";
})(EUIType || (EUIType = {}));


/***/ }),

/***/ "./src/framework/ui/config/UIConfigs.ts":
/*!**********************************************!*\
  !*** ./src/framework/ui/config/UIConfigs.ts ***!
  \**********************************************/
/*! exports provided: UIConfigInfo, UIConfigs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIConfigInfo", function() { return UIConfigInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIConfigs", function() { return UIConfigs; });
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! csharp */ "csharp");
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(csharp__WEBPACK_IMPORTED_MODULE_0__);

/**
 * 所有模块
 */
var UIModule = {
    UIHome: __webpack_require__(/*! ../../../game/ui/uiHome/UIHomeConfig */ "./src/game/ui/uiHome/UIHomeConfig.ts"),
    UIBattle: __webpack_require__(/*! ../../../game/ui/uiBattle/UIBattleConfig */ "./src/game/ui/uiBattle/UIBattleConfig.ts"),
};
/**
 * ui配置结构体
 */
var UIConfigInfo = /** @class */ (function () {
    function UIConfigInfo() {
    }
    return UIConfigInfo;
}());

var UIConfigs = new Map();
for (var moduleName in UIModule) {
    var module_1 = UIModule[moduleName];
    for (var cfgName in module_1) {
        var config = module_1[cfgName];
        if (UIConfigs[config.name] != null) {
            csharp__WEBPACK_IMPORTED_MODULE_0__["CS"].Logger.LogError("Already exist ::" + cfgName);
        }
        UIConfigs[config.name] = config;
    }
}



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

/***/ "./src/framework/ui/config/UIMessageNames.ts":
/*!***************************************************!*\
  !*** ./src/framework/ui/config/UIMessageNames.ts ***!
  \***************************************************/
/*! exports provided: UIMessageNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIMessageNames", function() { return UIMessageNames; });
var UIMessageNames = /** @class */ (function () {
    function UIMessageNames() {
    }
    //ui创建
    UIMessageNames.UIFRAME_ON_WINDOW_CREATE = "UIFRAME_ON_WINDOW_CREATE";
    //ui打开
    UIMessageNames.UIFRAME_ON_WINDOW_OPEN = "UIFRAME_ON_WINDOW_OPEN";
    //ui关闭
    UIMessageNames.UIFRAME_ON_WINDOW_CLOSE = "UIFRAME_ON_WINDOW_CLOSE";
    //ui销毁
    UIMessageNames.UIFRAME_ON_WINDOW_DESTROY = "UIFRAME_ON_WINDOW_DESTROY";
    return UIMessageNames;
}());



/***/ }),

/***/ "./src/framework/ui/config/UIWindowNames.ts":
/*!**************************************************!*\
  !*** ./src/framework/ui/config/UIWindowNames.ts ***!
  \**************************************************/
/*! exports provided: UIWindowNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIWindowNames", function() { return UIWindowNames; });
var UIWindowNames;
(function (UIWindowNames) {
    /**
     * 加载界面
     */
    UIWindowNames[UIWindowNames["UILoading"] = 0] = "UILoading";
    /**
     * 主界面
     */
    UIWindowNames[UIWindowNames["UIHome"] = 1] = "UIHome";
    /**
     * 战斗主界面
     */
    UIWindowNames[UIWindowNames["UIBattleMain"] = 2] = "UIBattleMain";
})(UIWindowNames || (UIWindowNames = {}));


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

/***/ "./src/framework/utils/StringUtil.ts":
/*!*******************************************!*\
  !*** ./src/framework/utils/StringUtil.ts ***!
  \*******************************************/
/*! exports provided: string */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "string", function() { return string; });
/**
* @author by dengxuhui
* @create time 2021/6/1
**/
var string = {
    /**
     * 字符串是否是null或者空字符串
     * @param s
     * @constructor
     */
    IsNullOrEmpty: function (s) {
        return s == null || s == "";
    }
};



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
/*! exports provided: Timer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timer", function() { return Timer; });
/* harmony import */ var _UnityTs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../UnityTs */ "./src/framework/UnityTs.ts");
/* harmony import */ var _CallLater__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CallLater */ "./src/framework/utils/timer/CallLater.ts");
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
*
* 时钟管理器 使用Utf.timer访问
* */


var InnerTimer = /** @class */ (function () {
    function InnerTimer(autoActive) {
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
        autoActive && InnerTimer.gSysTimer && InnerTimer.gSysTimer.frameLoop(1, this, this._update);
    }
    Object.defineProperty(InnerTimer.prototype, "delta", {
        /* 获取两帧之间的时间间隔，单位毫秒*/
        get: function () {
            return this._delta;
        },
        enumerable: false,
        configurable: true
    });
    /* 帧循环*/
    InnerTimer.prototype._update = function () {
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
    InnerTimer.prototype._clearHandlers = function () {
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
    InnerTimer.prototype._recoverHandler = function (handler) {
        if (this._map[handler.key] == handler)
            this._map[handler.key] = null;
        handler.clear();
        InnerTimer._pool.push(handler);
    };
    /* 创建TimerHandler实例*/
    InnerTimer.prototype._create = function (useFrame, repeat, delay, caller, method, args, coverBefore) {
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
        handler = InnerTimer._pool.length > 0 ? InnerTimer._pool.pop() : new TimerHandler();
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
    InnerTimer.prototype._getHandler = function (caller, method) {
        var cid = caller ? caller.$_GID || (caller.$_GID = _UnityTs__WEBPACK_IMPORTED_MODULE_0__["default"].utils.getGID()) : 0;
        var mid = method.$_TID || (method.$_TID = (InnerTimer._mid++) * 100000);
        return this._map[cid + mid];
    };
    /*
    * 索引handler
    * */
    InnerTimer.prototype._indexHandler = function (handler) {
        var caller = handler.caller;
        var method = handler.method;
        var cid = caller ? caller.$_GID || (caller.$_GID = _UnityTs__WEBPACK_IMPORTED_MODULE_0__["default"].utils.getGID()) : 0;
        var mid = method.$_TID || (method.$_TID = (InnerTimer._mid++) * 100000);
        handler.key = cid + mid;
        this._map[handler.key] = handler;
    };
    /**
     * 等待毫秒
     * @param delay
     */
    InnerTimer.prototype.wait = function (delay) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        _this.once(delay, _this, function () {
                            resolve();
                        }, null, true);
                    })];
            });
        });
    };
    /**
     * 等待帧
     * @param delay
     */
    InnerTimer.prototype.waitFrame = function (delay) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        _this.frameOnce(delay, _this, function () {
                            resolve();
                        }, null, true);
                    })];
            });
        });
    };
    /**
     * 定时执行一次。
     * @param    delay    延迟时间(单位为毫秒)。
     * @param    caller    执行域(this)。
     * @param    method    定时器回调函数。
     * @param    args    回调参数。
     * @param    coverBefore    是否覆盖之前的延迟执行，默认为 true 。
     */
    InnerTimer.prototype.once = function (delay, caller, method, args, coverBefore) {
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
    InnerTimer.prototype.loop = function (delay, caller, method, args, coverBefore, jumpFrame) {
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
    InnerTimer.prototype.frameOnce = function (delay, caller, method, args, coverBefore) {
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
    InnerTimer.prototype.frameLoop = function (delay, caller, method, args, coverBefore) {
        if (args === void 0) { args = null; }
        if (coverBefore === void 0) { coverBefore = true; }
        this._create(true, true, delay, caller, method, args, coverBefore);
    };
    /** 返回统计信息。*/
    InnerTimer.prototype.toString = function () {
        return " handlers:" + this._handlers.length + " pool:" + InnerTimer._pool.length;
    };
    /**
     * 清理定时器。
     * @param    caller 执行域(this)。
     * @param    method 定时器回调函数。
     */
    InnerTimer.prototype.clear = function (caller, method) {
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
    InnerTimer.prototype.clearAll = function (caller) {
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
    InnerTimer.prototype.runTimer = function (caller, method) {
        var handler = this._getHandler(caller, method);
        if (handler && handler.method != null) {
            this._map[handler.key] = null;
            handler.run(true);
        }
    };
    /**
     * 暂停时钟
     */
    InnerTimer.prototype.pause = function () {
        this.scale = 0;
    };
    /**
     * 恢复时钟
     */
    InnerTimer.prototype.resume = function () {
        this.scale = 1;
    };
    //-----------延迟执行
    /**
     * 延迟执行。
     * @param    caller 执行域(this)。
     * @param    method 定时器回调函数。
     * @param    args 回调参数。
     */
    InnerTimer.prototype.callLater = function (caller, method, args) {
        _CallLater__WEBPACK_IMPORTED_MODULE_1__["default"].I.callLater(caller, method, args);
    };
    /**
     * 立即执行 callLater 。
     * @param    caller 执行域(this)。
     * @param    method 定时器回调函数。
     */
    InnerTimer.prototype.runCallLater = function (caller, method) {
        _CallLater__WEBPACK_IMPORTED_MODULE_1__["default"].I.runCallLater(caller, method);
    };
    /*timer入口*/
    InnerTimer.gSysTimer = null;
    /*对象池*/
    InnerTimer._pool = [];
    InnerTimer._mid = 1;
    return InnerTimer;
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
var Timer = /** @class */ (function () {
    //私有构造函数
    function Timer() {
    }
    Object.defineProperty(Timer, "timer", {
        /**
         * 普通timer
         */
        get: function () {
            return this._timer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Timer, "lateTimer", {
        /**
         * 后置timer
         */
        get: function () {
            return this._lateTimer;
        },
        enumerable: false,
        configurable: true
    });
    Timer.init = function () {
        if (this._inited) {
            return;
        }
        this._inited = true;
        this._timer = new InnerTimer();
        this._lateTimer = new InnerTimer();
        // @ts-ignore
        global.__tgjsRegisterTickHandler(uts_timerUpdate);
        // @ts-ignore
        delete global.__tgjsRegisterTickHandler;
    };
    Timer._inited = false;
    return Timer;
}());

/**
 * cs侧来更新ts的timer
 */
function uts_timerUpdate() {
    Timer._timer._update();
    Timer._lateTimer._update();
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/game/module/common/CommonModule.ts":
/*!************************************************!*\
  !*** ./src/game/module/common/CommonModule.ts ***!
  \************************************************/
/*! exports provided: CommonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonModule", function() { return CommonModule; });
/* harmony import */ var _framework_module_BaseModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../framework/module/BaseModule */ "./src/framework/module/BaseModule.ts");
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
 * 通用逻辑模块
 * @author by dengxuhui
 * @create time 2021/6/9 11:37
**/
var CommonModule = /** @class */ (function (_super) {
    __extends(CommonModule, _super);
    function CommonModule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CommonModule.prototype.onAdd = function () {
        _super.prototype.onAdd.call(this);
    };
    CommonModule.prototype.onRemove = function () {
        _super.prototype.onRemove.call(this);
    };
    CommonModule.prototype.onUpdate = function () {
    };
    CommonModule.prototype.onAddListener = function () {
        _super.prototype.onAddListener.call(this);
    };
    CommonModule.prototype.onRemoveListener = function () {
        _super.prototype.onRemoveListener.call(this);
    };
    return CommonModule;
}(_framework_module_BaseModule__WEBPACK_IMPORTED_MODULE_0__["BaseModule"]));



/***/ }),

/***/ "./src/game/module/home/HomeModule.ts":
/*!********************************************!*\
  !*** ./src/game/module/home/HomeModule.ts ***!
  \********************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _framework_module_BaseModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../framework/module/BaseModule */ "./src/framework/module/BaseModule.ts");
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
 * 主界面模块
 * @author by dengxuhui
 * @create time 2021/6/9 12:05
**/
var HomeModule = /** @class */ (function (_super) {
    __extends(HomeModule, _super);
    function HomeModule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return HomeModule;
}(_framework_module_BaseModule__WEBPACK_IMPORTED_MODULE_0__["BaseModule"]));



/***/ }),

/***/ "./src/game/scenes/config/SceneConfig.ts":
/*!***********************************************!*\
  !*** ./src/game/scenes/config/SceneConfig.ts ***!
  \***********************************************/
/*! exports provided: SceneConfig, SceneConfigs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SceneConfig", function() { return SceneConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SceneConfigs", function() { return SceneConfigs; });
/* harmony import */ var _framework_ui_config_UIWindowNames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../framework/ui/config/UIWindowNames */ "./src/framework/ui/config/UIWindowNames.ts");
/* harmony import */ var _home_HomeScene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../home/HomeScene */ "./src/game/scenes/home/HomeScene.ts");


/**
 * 场景配置
 */
var SceneConfig = /** @class */ (function () {
    function SceneConfig() {
    }
    return SceneConfig;
}());

/**
 * 启动场景
 */
var launch = {
    Level: 0,
    Name: "LaunchScene",
    Class: null,
    Loading: _framework_ui_config_UIWindowNames__WEBPACK_IMPORTED_MODULE_0__["UIWindowNames"].UILoading,
};
/**
 * 加载场景
 */
var loading = {
    Level: 0,
    Name: "LoadingScene",
    Class: null,
    Loading: _framework_ui_config_UIWindowNames__WEBPACK_IMPORTED_MODULE_0__["UIWindowNames"].UILoading,
};
/**
 * 主界场景
 */
var home = {
    Level: 3,
    Name: "HomeScene",
    Class: _home_HomeScene__WEBPACK_IMPORTED_MODULE_1__["HomeScene"],
    Loading: _framework_ui_config_UIWindowNames__WEBPACK_IMPORTED_MODULE_0__["UIWindowNames"].UILoading,
};
/**
 * 战斗场景
 */
var battle = {
    Level: 4,
    Name: "BattleScene",
    Class: null,
    Loading: _framework_ui_config_UIWindowNames__WEBPACK_IMPORTED_MODULE_0__["UIWindowNames"].UILoading,
};
var SceneConfigs = {
    //加载场景 通用
    LoadingScene: loading,
    LaunchScene: launch,
    HomeScene: home,
    BattleScene: battle,
};



/***/ }),

/***/ "./src/game/scenes/home/HomeScene.ts":
/*!*******************************************!*\
  !*** ./src/game/scenes/home/HomeScene.ts ***!
  \*******************************************/
/*! exports provided: HomeScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeScene", function() { return HomeScene; });
/* harmony import */ var _framework_scene_base_BaseScene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../framework/scene/base/BaseScene */ "./src/framework/scene/base/BaseScene.ts");
/* harmony import */ var _framework_module_ModuleCenter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/module/ModuleCenter */ "./src/framework/module/ModuleCenter.ts");
/* harmony import */ var _module_home_HomeModule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../module/home/HomeModule */ "./src/game/module/home/HomeModule.ts");
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
 * 主界面场景
 * @author by dengxuhui
 * @create time 2021/6/9 12:00
 **/
var HomeScene = /** @class */ (function (_super) {
    __extends(HomeScene, _super);
    function HomeScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HomeScene.prototype.OnEnter = function () {
        _super.prototype.OnEnter.call(this);
        _framework_module_ModuleCenter__WEBPACK_IMPORTED_MODULE_1__["ModuleCenter"].Instance.add(_module_home_HomeModule__WEBPACK_IMPORTED_MODULE_2__["HomeModule"]);
    };
    HomeScene.prototype.OnLeave = function () {
        _framework_module_ModuleCenter__WEBPACK_IMPORTED_MODULE_1__["ModuleCenter"].Instance.remove(_module_home_HomeModule__WEBPACK_IMPORTED_MODULE_2__["HomeModule"]);
        _super.prototype.OnLeave.call(this);
    };
    return HomeScene;
}(_framework_scene_base_BaseScene__WEBPACK_IMPORTED_MODULE_0__["BaseScene"]));



/***/ }),

/***/ "./src/game/ui/uiBattle/UIBattleConfig.ts":
/*!************************************************!*\
  !*** ./src/game/ui/uiBattle/UIBattleConfig.ts ***!
  \************************************************/
/*! exports provided: UIBattleMain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIBattleMain", function() { return UIBattleMain; });
/* harmony import */ var _framework_ui_config_UIWindowNames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../framework/ui/config/UIWindowNames */ "./src/framework/ui/config/UIWindowNames.ts");
/* harmony import */ var _framework_ui_config_UILayers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/ui/config/UILayers */ "./src/framework/ui/config/UILayers.ts");
/* harmony import */ var _framework_ui_config_EUIType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/ui/config/EUIType */ "./src/framework/ui/config/EUIType.ts");
/* harmony import */ var _uiBattle_UIBattleModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./uiBattle/UIBattleModel */ "./src/game/ui/uiBattle/uiBattle/UIBattleModel.ts");
/* harmony import */ var _uiBattle_UIBattleCtrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./uiBattle/UIBattleCtrl */ "./src/game/ui/uiBattle/uiBattle/UIBattleCtrl.ts");
/* harmony import */ var _uiBattle_UIBattleView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./uiBattle/UIBattleView */ "./src/game/ui/uiBattle/uiBattle/UIBattleView.ts");






var UIBattleMain = {
    name: _framework_ui_config_UIWindowNames__WEBPACK_IMPORTED_MODULE_0__["UIWindowNames"].UIBattleMain,
    layer: _framework_ui_config_UILayers__WEBPACK_IMPORTED_MODULE_1__["EUILayer"].NormalLayer,
    model: _uiBattle_UIBattleModel__WEBPACK_IMPORTED_MODULE_3__["UIBattleModel"],
    ctrl: _uiBattle_UIBattleCtrl__WEBPACK_IMPORTED_MODULE_4__["UIBattleCtrl"],
    view: _uiBattle_UIBattleView__WEBPACK_IMPORTED_MODULE_5__["UIBattleView"],
    prefabPath: "",
    components: [],
    type: _framework_ui_config_EUIType__WEBPACK_IMPORTED_MODULE_2__["EUIType"].View,
};



/***/ }),

/***/ "./src/game/ui/uiBattle/uiBattle/UIBattleCtrl.ts":
/*!*******************************************************!*\
  !*** ./src/game/ui/uiBattle/uiBattle/UIBattleCtrl.ts ***!
  \*******************************************************/
/*! exports provided: UIBattleCtrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIBattleCtrl", function() { return UIBattleCtrl; });
/* harmony import */ var _framework_ui_base_UIBaseCtrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../framework/ui/base/UIBaseCtrl */ "./src/framework/ui/base/UIBaseCtrl.ts");
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

var UIBattleCtrl = /** @class */ (function (_super) {
    __extends(UIBattleCtrl, _super);
    function UIBattleCtrl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UIBattleCtrl.prototype.onCreate = function () {
        _super.prototype.onCreate.call(this);
    };
    UIBattleCtrl.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
    };
    return UIBattleCtrl;
}(_framework_ui_base_UIBaseCtrl__WEBPACK_IMPORTED_MODULE_0__["default"]));



/***/ }),

/***/ "./src/game/ui/uiBattle/uiBattle/UIBattleModel.ts":
/*!********************************************************!*\
  !*** ./src/game/ui/uiBattle/uiBattle/UIBattleModel.ts ***!
  \********************************************************/
/*! exports provided: UIBattleModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIBattleModel", function() { return UIBattleModel; });
/* harmony import */ var _framework_ui_base_UIBaseModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../framework/ui/base/UIBaseModel */ "./src/framework/ui/base/UIBaseModel.ts");
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

var UIBattleModel = /** @class */ (function (_super) {
    __extends(UIBattleModel, _super);
    function UIBattleModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UIBattleModel.prototype.onCreate = function () {
        _super.prototype.onCreate.call(this);
    };
    UIBattleModel.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
    };
    return UIBattleModel;
}(_framework_ui_base_UIBaseModel__WEBPACK_IMPORTED_MODULE_0__["default"]));



/***/ }),

/***/ "./src/game/ui/uiBattle/uiBattle/UIBattleView.ts":
/*!*******************************************************!*\
  !*** ./src/game/ui/uiBattle/uiBattle/UIBattleView.ts ***!
  \*******************************************************/
/*! exports provided: UIBattleView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIBattleView", function() { return UIBattleView; });
/* harmony import */ var _framework_ui_base_UIBaseView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../framework/ui/base/UIBaseView */ "./src/framework/ui/base/UIBaseView.ts");
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

var UIBattleView = /** @class */ (function (_super) {
    __extends(UIBattleView, _super);
    function UIBattleView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UIBattleView.prototype.onCreate = function () {
        _super.prototype.onCreate.call(this);
    };
    UIBattleView.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
    };
    return UIBattleView;
}(_framework_ui_base_UIBaseView__WEBPACK_IMPORTED_MODULE_0__["UIBaseView"]));



/***/ }),

/***/ "./src/game/ui/uiHome/UIHomeConfig.ts":
/*!********************************************!*\
  !*** ./src/game/ui/uiHome/UIHomeConfig.ts ***!
  \********************************************/
/*! exports provided: UIHome */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIHome", function() { return UIHome; });
/* harmony import */ var _framework_ui_config_UIWindowNames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../framework/ui/config/UIWindowNames */ "./src/framework/ui/config/UIWindowNames.ts");
/* harmony import */ var _framework_ui_config_UILayers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/ui/config/UILayers */ "./src/framework/ui/config/UILayers.ts");
/* harmony import */ var _framework_ui_config_EUIType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/ui/config/EUIType */ "./src/framework/ui/config/EUIType.ts");
/* harmony import */ var _uiHome_UIHomeCtrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./uiHome/UIHomeCtrl */ "./src/game/ui/uiHome/uiHome/UIHomeCtrl.ts");
/* harmony import */ var _uiHome_UIHomeView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./uiHome/UIHomeView */ "./src/game/ui/uiHome/uiHome/UIHomeView.ts");
/* harmony import */ var _uiHome_UIHomeModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./uiHome/UIHomeModel */ "./src/game/ui/uiHome/uiHome/UIHomeModel.ts");






/**
 * 这里定义所有Home场景中使用的UI配置，
 */
var UIHome = {
    name: _framework_ui_config_UIWindowNames__WEBPACK_IMPORTED_MODULE_0__["UIWindowNames"].UIHome,
    layer: _framework_ui_config_UILayers__WEBPACK_IMPORTED_MODULE_1__["EUILayer"].NormalLayer,
    model: _uiHome_UIHomeModel__WEBPACK_IMPORTED_MODULE_5__["UIHomeModel"],
    ctrl: _uiHome_UIHomeCtrl__WEBPACK_IMPORTED_MODULE_3__["UIHomeCtrl"],
    view: _uiHome_UIHomeView__WEBPACK_IMPORTED_MODULE_4__["UIHomeView"],
    prefabPath: "",
    components: [],
    type: _framework_ui_config_EUIType__WEBPACK_IMPORTED_MODULE_2__["EUIType"].View,
};



/***/ }),

/***/ "./src/game/ui/uiHome/uiHome/UIHomeCtrl.ts":
/*!*************************************************!*\
  !*** ./src/game/ui/uiHome/uiHome/UIHomeCtrl.ts ***!
  \*************************************************/
/*! exports provided: UIHomeCtrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIHomeCtrl", function() { return UIHomeCtrl; });
/* harmony import */ var _framework_ui_base_UIBaseCtrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../framework/ui/base/UIBaseCtrl */ "./src/framework/ui/base/UIBaseCtrl.ts");
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
 * 测试主场景界面
 */
var UIHomeCtrl = /** @class */ (function (_super) {
    __extends(UIHomeCtrl, _super);
    function UIHomeCtrl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UIHomeCtrl.prototype.onCreate = function () {
        _super.prototype.onCreate.call(this);
    };
    UIHomeCtrl.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
    };
    return UIHomeCtrl;
}(_framework_ui_base_UIBaseCtrl__WEBPACK_IMPORTED_MODULE_0__["default"]));



/***/ }),

/***/ "./src/game/ui/uiHome/uiHome/UIHomeModel.ts":
/*!**************************************************!*\
  !*** ./src/game/ui/uiHome/uiHome/UIHomeModel.ts ***!
  \**************************************************/
/*! exports provided: UIHomeModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIHomeModel", function() { return UIHomeModel; });
/* harmony import */ var _framework_ui_base_UIBaseModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../framework/ui/base/UIBaseModel */ "./src/framework/ui/base/UIBaseModel.ts");
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

var UIHomeModel = /** @class */ (function (_super) {
    __extends(UIHomeModel, _super);
    function UIHomeModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UIHomeModel.prototype.onCreate = function () {
        _super.prototype.onCreate.call(this);
    };
    UIHomeModel.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
    };
    return UIHomeModel;
}(_framework_ui_base_UIBaseModel__WEBPACK_IMPORTED_MODULE_0__["default"]));



/***/ }),

/***/ "./src/game/ui/uiHome/uiHome/UIHomeView.ts":
/*!*************************************************!*\
  !*** ./src/game/ui/uiHome/uiHome/UIHomeView.ts ***!
  \*************************************************/
/*! exports provided: UIHomeView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIHomeView", function() { return UIHomeView; });
/* harmony import */ var _framework_ui_base_UIBaseView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../framework/ui/base/UIBaseView */ "./src/framework/ui/base/UIBaseView.ts");
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

var UIHomeView = /** @class */ (function (_super) {
    __extends(UIHomeView, _super);
    function UIHomeView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UIHomeView.prototype.onCreate = function () {
        _super.prototype.onCreate.call(this);
    };
    UIHomeView.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
    };
    return UIHomeView;
}(_framework_ui_base_UIBaseView__WEBPACK_IMPORTED_MODULE_0__["UIBaseView"]));



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