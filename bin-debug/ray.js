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
        this.button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
        Main.rayEvent.addEventListener(Main.CLICK_BUTTON, this.onclick, this);
    };
    ray.prototype.onclick = function (e) {
        // console.log("444")
        var a = e.data;
        if (!this.duibi(a[0], a[1])) {
            return;
        }
        Main.rayEvent.removeEventListener(Main.CLICK_BUTTON, this.onclick, this);
        this.button.touchEnabled = false;
        if (this.isCount > 0) {
            this.button.label = this.isCount + "";
            this.button.labelDisplay.textColor = 0x0000ff;
        }
        else {
            this.button.label = "空";
            Main.rayEvent.dispatchEventWith(Main.CLICK_BUTTON, false, [this.ePointx, this.ePointy]);
        }
        // Main.rayEvent.removeEventListener(Main.CLICK_BUTTON, this.onclick, this);
    };
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
    ray.prototype.onButtonClick = function () {
        Main.rayEvent.removeEventListener(Main.CLICK_BUTTON, this.onclick, this);
        this.button.touchEnabled = false;
        if (this.isray(this.ePointx, this.ePointy)) {
            this.button.label = "雷";
            this.button.labelDisplay.textColor = 0xff0000;
            return;
        }
        if (this.isCount > 0) {
            this.button.label = this.isCount + "";
            this.button.labelDisplay.textColor = 0x0000ff;
            return;
        }
        this.button.label = "空";
        console.log(this.ePointx, this.ePointy);
        // let panel = new eui.Panel();
        // panel.title = "Title";
        // panel.horizontalCenter = 0;
        // panel.verticalCenter = 0;
        // this.addChild(panel);
        Main.rayEvent.dispatchEventWith(Main.CLICK_BUTTON, false, [this.ePointx, this.ePointy]);
    };
    ray.prototype.isray = function (x, y) {
        for (var i = 0; i < Main.rayArray.length; i++) {
            if (x == Main.rayArray[i][0] && y == Main.rayArray[i][1]) {
                return true;
            }
        }
        return false;
    };
    Object.defineProperty(ray.prototype, "isCount", {
        get: function () {
            var num = 0;
            if (this.isray(this.ePointx - 1, this.ePointy - 1)) {
                num++;
            }
            if (this.isray(this.ePointx - 1, this.ePointy)) {
                num++;
            }
            if (this.isray(this.ePointx - 1, this.ePointy + 1)) {
                num++;
            }
            if (this.isray(this.ePointx, this.ePointy + 1)) {
                num++;
            }
            if (this.isray(this.ePointx + 1, this.ePointy + 1)) {
                num++;
            }
            if (this.isray(this.ePointx + 1, this.ePointy)) {
                num++;
            }
            if (this.isray(this.ePointx + 1, this.ePointy - 1)) {
                num++;
            }
            if (this.isray(this.ePointx, this.ePointy - 1)) {
                num++;
            }
            return num;
        },
        enumerable: true,
        configurable: true
    });
    return ray;
}(eui.UILayer));
__reflect(ray.prototype, "ray");
//# sourceMappingURL=ray.js.map