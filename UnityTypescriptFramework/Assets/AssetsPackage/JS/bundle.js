(function () {
    'use strict';

    var Handler = (function () {
        function Handler(caller, method, args, once) {
            if (caller === void 0) { caller = null; }
            if (method === void 0) { method = null; }
            if (once === void 0) { once = false; }
            this.once = false;
            this._id = 0;
            this.set(caller, method, args, once);
        }
        Handler.prototype.set = function (caller, method, args, once) {
            if (once === void 0) { once = false; }
            this._id = Handler._guid++;
            this.caller = caller;
            this.method = method;
            this.args = args;
            this.once = once;
            return this;
        };
        Handler.prototype.run = function () {
            if (this.method == null)
                return null;
            var id = this._id;
            var result = this.method.apply(this.caller, this.args);
            this._id === id && this.once && this.recover();
            return result;
        };
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
        Handler.prototype.clear = function () {
            this.caller = null;
            this.method = null;
            this.args = null;
            return this;
        };
        Handler.prototype.recover = function () {
            if (this._id > 0) {
                this._id = 0;
                Handler._pool.push(this.clear());
            }
        };
        Handler.create = function (caller, method, args, once) {
            if (args === void 0) { args = null; }
            if (once === void 0) { once = true; }
            if (Handler._pool.length)
                return Handler._pool.pop().set(caller, method, args, once);
            return new Handler(caller, method, args, once);
        };
        Handler._pool = [];
        Handler._guid = 1;
        return Handler;
    }());

    var CS = require("csharp");
    var ExHandler = (function () {
        function ExHandler() {
        }
        ExHandler.Run = function () {
            var Debug = CS.UnityEngine.Debug;
            var handler = Handler.create(null, function (name) {
                Debug.LogFormat("get name is=>{0}", name);
            }, ["Aer"], true);
            handler.run();
        };
        return ExHandler;
    }());

    var Timer = (function () {
        function Timer(autoActive) {
            if (autoActive === void 0) { autoActive = true; }
            this.scale = 1;
            this.currTimer = Date.now();
            this.currFrame = 0;
            this._delta = 0;
            this._lastTimer = Date.now();
            this._map = [];
            this._handlers = [];
            this._temp = [];
            this._count = 0;
            autoActive && Timer.gSysTimer && Timer.gSysTimer.frameLoop(1, this, this._update);
        }
        Object.defineProperty(Timer.prototype, "delta", {
            get: function () {
                return this._delta;
            },
            enumerable: false,
            configurable: true
        });
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
        Timer.prototype._recoverHandler = function (handler) {
            if (this._map[handler.key] == handler)
                this._map[handler.key] = null;
            handler.clear();
            Timer._pool.push(handler);
        };
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
        Timer.prototype._getHandler = function (caller, method) {
            var cid = caller ? caller.$_GID || (caller.$_GID = UnityTs.Utils.getGID()) : 0;
            var mid = method.$_TID || (method.$_TID = (Timer._mid++) * 100000);
            return this._map[cid + mid];
        };
        Timer.prototype._indexHandler = function (handler) {
            var caller = handler.caller;
            var method = handler.method;
            var cid = caller ? caller.$_GID || (caller.$_GID = UnityTs.Utils.getGID()) : 0;
            var mid = method.$_TID || (method.$_TID = (Timer._mid++) * 100000);
            handler.key = cid + mid;
            this._map[handler.key] = handler;
        };
        Timer.prototype.once = function (delay, caller, method, args, coverBefore) {
            if (args === void 0) { args = null; }
            if (coverBefore === void 0) { coverBefore = true; }
            this._create(false, false, delay, caller, method, args, coverBefore);
        };
        Timer.prototype.loop = function (delay, caller, method, args, coverBefore, jumpFrame) {
            if (args === void 0) { args = null; }
            if (coverBefore === void 0) { coverBefore = true; }
            if (jumpFrame === void 0) { jumpFrame = false; }
            var handler = this._create(false, true, delay, caller, method, args, coverBefore);
            if (handler)
                handler.jumpFrame = jumpFrame;
        };
        Timer.prototype.frameOnce = function (delay, caller, method, args, coverBefore) {
            if (args === void 0) { args = null; }
            if (coverBefore === void 0) { coverBefore = true; }
            this._create(true, false, delay, caller, method, args, coverBefore);
        };
        Timer.prototype.frameLoop = function (delay, caller, method, args, coverBefore) {
            if (args === void 0) { args = null; }
            if (coverBefore === void 0) { coverBefore = true; }
            this._create(true, true, delay, caller, method, args, coverBefore);
        };
        Timer.prototype.toString = function () {
            return " handlers:" + this._handlers.length + " pool:" + Timer._pool.length;
        };
        Timer.prototype.clear = function (caller, method) {
            var handler = this._getHandler(caller, method);
            if (handler) {
                this._map[handler.key] = null;
                handler.key = 0;
                handler.clear();
            }
        };
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
        Timer.prototype.runTimer = function (caller, method) {
            var handler = this._getHandler(caller, method);
            if (handler && handler.method != null) {
                this._map[handler.key] = null;
                handler.run(true);
            }
        };
        Timer.prototype.pause = function () {
            this.scale = 0;
        };
        Timer.prototype.resume = function () {
            this.scale = 1;
        };
        Timer.gSysTimer = null;
        Timer._pool = [];
        Timer._mid = 1;
        return Timer;
    }());
    var TimerHandler = (function () {
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

    var Utils = (function () {
        function Utils() {
        }
        Utils.toRadian = function (angle) {
            return angle * Utils._pi2;
        };
        Utils.toAngle = function (radian) {
            return radian * Utils._pi;
        };
        Utils.getGID = function () {
            return Utils._gid++;
        };
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
        Utils._gid = 1;
        Utils._pi = 180 / Math.PI;
        Utils._pi2 = Math.PI / 180;
        Utils._extReg = /\.(\w+)\??/g;
        return Utils;
    }());
    var UnityTs = (function () {
        function UnityTs() {
        }
        UnityTs.init = function () {
            this.Timer = new Timer();
            global.__tgjsRegisterTickHandler(this._timerUpdate);
        };
        UnityTs._timerUpdate = function () {
            UnityTs.Timer._update();
        };
        UnityTs.Utils = Utils;
        return UnityTs;
    }());

    var CS$1 = require("csharp");
    var Debug = CS$1.UnityEngine.Debug;
    var Main = (function () {
        function Main() {
            UnityTs.init();
            ExHandler.Run();
            UnityTs.Timer.loop(2000, this, function () {
                Debug.Log("timer call back");
            }, [1], true, false);
        }
        return Main;
    }());
    new Main();

}());
//# sourceMappingURL=bundle.js.map
