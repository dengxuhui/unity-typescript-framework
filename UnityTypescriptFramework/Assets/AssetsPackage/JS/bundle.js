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

    var CS$1 = require("csharp");
    var Debug = CS$1.UnityEngine.Debug;
    var Main = (function () {
        function Main() {
            ExHandler.Run();
        }
        return Main;
    }());
    new Main();

}());
//# sourceMappingURL=bundle.js.map
