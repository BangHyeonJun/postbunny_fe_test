interface BackgroundProps {
	screenWidth: number;
	screenHeight: number;
}

export class Background {
	private time: number = 0;
	private grassBlob: HTMLImageElement | null = null;
	private cloudBlob: HTMLImageElement | null = null;
	private treeBlob: HTMLImageElement | null = null;
	private screenWidth = 0;
	private screenHeight = 0;

	constructor(initialProps: BackgroundProps) {
		this.screenWidth = initialProps.screenWidth;
		this.screenHeight = initialProps.screenHeight;

		this.preloadImg();
	}

	private preloadImg() {
		let timeOutId = null;

		const setSpriteBlob = () => {
			if (typeof window === "undefined") {
				timeOutId = setTimeout(() => setSpriteBlob());
				return;
			}

			const img = new Image();
			img.src = `${location.origin}/풀.png`;
			img.onload = () => {
				this.grassBlob = img;
			};

			const img2 = new Image();
			img2.src = `${location.origin}/구름.png`;
			img2.onload = () => {
				this.cloudBlob = img2;
			};

			const img3 = new Image();
			img3.src = `${location.origin}/나무.png`;
			img3.onload = () => {
				this.treeBlob = img3;
			};
		};

		setSpriteBlob();
	}

	draw(ctx: CanvasRenderingContext2D, posX: number) {
		this.drawCloud(ctx, posX);
		this.drawTree(ctx, posX);
		this.drawGrass(ctx, posX);

		this.time = this.time + 1;
	}

	private drawGrass(ctx: CanvasRenderingContext2D, posX: number) {
		ctx.save();
		if (this.grassBlob !== null) {
			const imgBlob = this.grassBlob;

			const heightRatio = 0.45;

			const imgWidth = 3840;
			const imgHeight = 2160;

			// const width = Math.floor(imgWidth * (this.screenHeight / imgHeight));
			// const height = Math.floor(imgHeight * (this.screenHeight / imgHeight));
			const width =
				(this.screenWidth * heightRatio * imgHeight) / this.screenHeight;
			const height = this.screenHeight * heightRatio;

			const speed = 0.8;

			const x =
				((posX * -1 * Math.ceil((this.screenWidth / imgWidth) * speed * 10)) %
					width) +
				(width % width);
			const y = this.screenHeight - height;

			ctx.drawImage(
				imgBlob,
				0,
				0,
				imgWidth,
				imgHeight,
				x + width,
				y,
				width,
				height
			);
			ctx.drawImage(imgBlob, 0, 0, imgWidth, imgHeight, x, y, width, height);
			ctx.drawImage(
				imgBlob,
				0,
				0,
				imgWidth,
				imgHeight,
				x - width,
				y,
				width,
				height
			);
		} else {
			ctx.beginPath();
			ctx.fillStyle = "rgb(173,201,120)";
			ctx.fillRect(
				0,
				this.screenHeight * 0.65,
				this.screenWidth,
				this.screenHeight * 0.35
			);
		}
		ctx.restore();
	}

	private drawTree(ctx: CanvasRenderingContext2D, posX: number) {
		ctx.save();

		if (this.treeBlob !== null) {
			const imgBlob = this.treeBlob;

			const heightRatio = 0.55;

			const imgWidth = 3840;
			const imgHeight = 2160;

			// const width = Math.floor(imgWidth * (this.screenHeight / imgHeight));
			// const height = Math.floor(imgHeight * (this.screenHeight / imgHeight));
			const width =
				(this.screenWidth * heightRatio * imgHeight) / this.screenHeight;
			const height = this.screenHeight * heightRatio;

			const speed = 1;

			const x =
				((posX * -1 * Math.ceil((this.screenWidth / imgWidth) * speed * 10)) %
					width) +
				(width % width);
			const y = this.screenHeight - height;

			ctx.drawImage(
				imgBlob,
				0,
				0,
				imgWidth,
				imgHeight,
				x + width,
				y,
				width,
				height
			);
			ctx.drawImage(imgBlob, 0, 0, imgWidth, imgHeight, x, y, width, height);
			ctx.drawImage(
				imgBlob,
				0,
				0,
				imgWidth,
				imgHeight,
				x - width,
				y,
				width,
				height
			);
		} else {
			ctx.beginPath();
			ctx.fillStyle = "rgb(122,185,95)";
			ctx.fillRect(
				0,
				this.screenHeight * 0.48,
				this.screenWidth,
				this.screenHeight * 0.52
			);
		}

		ctx.restore();
	}

	private drawCloud(ctx: CanvasRenderingContext2D, posX: number) {
		ctx.save();

		if (this.cloudBlob !== null) {
			const imgBlob = this.cloudBlob;

			const imgWidth = 3840;
			const imgHeight = 2160;

			const width = Math.floor(imgWidth * (this.screenHeight / imgHeight));
			const height = Math.floor(imgHeight * (this.screenHeight / imgHeight));

			const speed = 0.2;

			const x =
				(((Math.floor(this.time * 0.5) + posX * -1) *
					Math.ceil((this.screenWidth / imgWidth) * speed * 10)) %
					width) +
				(width % width);
			const y = 0;

			ctx.beginPath();
			ctx.fillStyle = "rgb(199, 238, 251)";
			ctx.fillRect(0, 0, this.screenWidth, this.screenHeight);

			ctx.drawImage(
				imgBlob,
				0,
				0,
				imgWidth,
				imgHeight,
				x + width,
				y,
				width,
				height
			);
			ctx.drawImage(imgBlob, 0, 0, imgWidth, imgHeight, x, y, width, height);
			ctx.drawImage(
				imgBlob,
				0,
				0,
				imgWidth,
				imgHeight,
				x - width,
				y,
				width,
				height
			);
		} else {
			ctx.beginPath();
			ctx.fillStyle = "rgb(199, 238, 251)";
			ctx.fillRect(0, 0, this.screenWidth, this.screenHeight);
		}

		ctx.restore();
	}
}
