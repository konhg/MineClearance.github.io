var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var ray = (function (_super) {
    __extends(ray, _super);
    function ray(x, y) {
        var _this = _super.call(this) || this;
        _this.flag = false;
        _this.width = Main.rayWidth;
        _this.height = Main.rayHeight;
        _this.x = x * Main.rayWidth;
        _this.y = y * Main.rayHeight;
        _this.ePointx = x;
        _this.ePointy = y;
        _this.createRay();
        return _this;
    }
    ray.prototype.createRay = function () {
        this.button = new eui.Button();
        this.button.width = this.width;
        this.button.height = this.height;
        this.button.x = this.button.y = 0;
        this.addChild(this.button);
        this.button.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onbrnbegin, this);
        this.button.addEventListener(egret.TouchEvent.TOUCH_END, this.onButtonClick, this);
        // Main.rayEvent.addEventListener(Main.CLICK_BUTTON, this.onclick, this);
        if (Main.isray(this.ePointx, this.ePointy)) {
            this.raynumber = -1;
        }
        else {
            this.raynumber = Main.isCount(this.ePointx, this.ePointy);
        }
    };
    // private onclick(e: egret.Event): void {
    // 	var a: number[] = e.data;
    // 	if (this.flag) {
    // 		return;
    // 	}
    // 	if (!this.duibi(a[0], a[1])) {
    // 		return;
    // 	}
    // 	// Main.rayEvent.removeEventListener(Main.CLICK_BUTTON, this.onclick, this);
    // 	this.button.touchEnabled = false;
    // 	if (this.raynumber > 0) {
    // 		this.button.label = this.raynumber + "";
    // 		(<eui.Label>this.button.labelDisplay).textColor = 0x0000ff;
    // 	} else {
    // 		this.button.label = "空";
    // 		(<eui.Label>this.button.labelDisplay).textColor = 0xffffff;
    // 		// Main.rayEvent.dispatchEventWith(Main.CLICK_BUTTON, false, [this.ePointx, this.ePointy]);
    // 	}
    // }
    ray.prototype.duibi = function (x, y) {
        if ((this.ePointx - 1 == x) && (this.ePointy - 1 == y)) {
            return true;
        }
        if ((this.ePointx - 1 == x) && (this.ePointy == y)) {
            return true;
        }
        if ((this.ePointx - 1 == x) && (this.ePointy + 1 == y)) {
            return true;
        }
        if ((this.ePointx == x) && (this.ePointy + 1 == y)) {
            return true;
        }
        if ((this.ePointx + 1 == x) && (this.ePointy + 1 == y)) {
            return true;
        }
        if ((this.ePointx + 1 == x) && (this.ePointy == y)) {
            return true;
        }
        if ((this.ePointx + 1 == x) && (this.ePointy - 1 == y)) {
            return true;
        }
        if ((this.ePointx == x) && (this.ePointy - 1 == y)) {
            return true;
        }
        return false;
    };
    ray.prototype.onbrnbegin = function () {
        var _this = this;
        egret.Tween.removeTweens(this.button);
        if (this.flag) {
            this.button.label = "";
            this.button.labelDisplay.textColor = 0xffffff;
            this.button.addEventListener(egret.TouchEvent.TOUCH_END, this.onButtonClick, this);
            return;
        }
        egret.Tween.get(this.button).wait(1000).call(function () {
            _this.flag = true;
            _this.button.label = "旗";
            _this.button.labelDisplay.textColor = 0x00ff00;
            _this.button.removeEventListener(egret.TouchEvent.TOUCH_END, _this.onButtonClick, _this);
        });
    };
    ray.prototype.onButtonClick = function () {
        egret.Tween.removeTweens(this.button);
        if (this.flag) {
            this.flag = false;
            return;
        }
        // Main.rayEvent.removeEventListener(Main.CLICK_BUTTON, this.onclick, this);
        // this.button.touchEnabled = false;
        // if (this.raynumber == -1) {
        // 	this.button.label = "雷";
        // 	(<eui.Label>this.button.labelDisplay).textColor = 0xff0000;
        // 	return;
        // }
        // if (this.raynumber > 0) {
        // 	this.button.label = this.raynumber + "";
        // 	(<eui.Label>this.button.labelDisplay).textColor = 0x0000ff;
        // 	return;
        // }
        // this.button.label = "空";
        Main.panduan(this.ePointx, this.ePointy);
        // Main.rayEvent.dispatchEventWith(Main.CLICK_BUTTON, false, [this.ePointx, this.ePointy]);
    };
    ray.prototype.isRay = function () {
        this.button.label = "雷";
        this.button.labelDisplay.textColor = 0xff0000;
        this.button.touchEnabled = false;
    };
    ray.prototype.isNumber = function () {
        this.button.label = this.raynumber + "";
        this.button.labelDisplay.textColor = 0x0000ff;
        this.button.touchEnabled = false;
    };
    ray.prototype.isNull = function () {
        this.button.label = "空";
        this.button.labelDisplay.textColor = 0xffffff;
        this.button.touchEnabled = false;
    };
    return ray;
}(eui.UILayer));
__reflect(ray.prototype, "ray");
//# sourceMappingURL=ray.js.map