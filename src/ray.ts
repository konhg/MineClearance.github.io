class ray extends eui.UILayer {
	private ePointx: number;
	private ePointy: number;
	public button: eui.Button;
	public flag: boolean = false;
	public raynumber: number;
	public constructor(x, y) {
		super();
		this.width = Main.rayWidth;
		this.height = Main.rayHeight;
		this.x = x * Main.rayWidth;
		this.y = y * Main.rayHeight;
		this.ePointx = x;
		this.ePointy = y;
		this.createRay()
	}
	public createRay(): void {
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
		} else {
			this.raynumber = Main.isCount(this.ePointx, this.ePointy);
		}
	}
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
	private duibi(x, y): boolean {
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
	}
	private onbrnbegin(): void {
		egret.Tween.removeTweens(this.button);
		if (this.flag) {
			this.button.label = "";
			(<eui.Label>this.button.labelDisplay).textColor = 0xffffff;
			this.button.addEventListener(egret.TouchEvent.TOUCH_END, this.onButtonClick, this);
			return;
		}
		egret.Tween.get(this.button).wait(500).call(() => {
			this.flag = true;
			this.button.label = "旗";
			(<eui.Label>this.button.labelDisplay).textColor = 0x00ff00;
			this.button.removeEventListener(egret.TouchEvent.TOUCH_END, this.onButtonClick, this);
		})
	}
	private onButtonClick() {
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
	}
	public isRay(): void {
		this.button.label = "雷";
		(<eui.Label>this.button.labelDisplay).textColor = 0xff0000;
		this.button.touchEnabled = false;
	}
	public isNumber(): void {
		this.button.label = this.raynumber + "";
		(<eui.Label>this.button.labelDisplay).textColor = 0x0000ff;
		this.button.touchEnabled = false;
	}
	public isNull(): void {
		this.button.label = "空";
		(<eui.Label>this.button.labelDisplay).textColor = 0xffffff;
		this.button.touchEnabled = false;
	}
}