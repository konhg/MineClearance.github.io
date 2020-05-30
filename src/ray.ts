class ray extends eui.UILayer {
	private ePointx: number;
	private ePointy: number;
	private button: eui.Button;
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
		this.button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
		// Main.rayEvent.addEventListener(Main.CLICK_BUTTON, this.onclick, this);
	}
	private onclick(e: egret.Event): void {
		// console.log("444")
		var a: number[] = e.data;
		if (!this.duibi(a[0], a[1])) {
			return;
		}
		Main.rayEvent.removeEventListener(Main.CLICK_BUTTON, this.onclick, this);
		this.button.touchEnabled = false;
		if (this.isCount > 0) {
			this.button.label = this.isCount + "";
		} else {
			this.button.label = "空";
			Main.rayEvent.dispatchEventWith(Main.CLICK_BUTTON, false, [this.ePointx, this.ePointy]);
		}
		// Main.rayEvent.removeEventListener(Main.CLICK_BUTTON, this.onclick, this);
	}
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
	private onButtonClick() {
		Main.rayEvent.removeEventListener(Main.CLICK_BUTTON, this.onclick, this);
		this.button.touchEnabled = false;
		if (this.isray(this.ePointx, this.ePointy)) {
			this.button.label = "雷";
			return;
		}
		if (this.isCount > 0) {
			this.button.label = this.isCount + "";
			return;
		}
		this.button.label = "空";
		console.log(this.ePointx, this.ePointy)
		// let panel = new eui.Panel();
		// panel.title = "Title";
		// panel.horizontalCenter = 0;
		// panel.verticalCenter = 0;
		// this.addChild(panel);
		Main.rayEvent.dispatchEventWith(Main.CLICK_BUTTON, false, [this.ePointx, this.ePointy]);
	}
	private isray(x, y): boolean {
		for (var i = 0; i < Main.rayArray.length; i++) {
			if (x == Main.rayArray[i][0] && y == Main.rayArray[i][1]) {
				return true;
			}
		}
		return false;
	}

	private get isCount(): number {
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
	}
}