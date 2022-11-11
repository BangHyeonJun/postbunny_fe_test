interface BackgroundProps {
	screenWidth: number;
	screenHeight: number;
}

export class Background {
	private time: number = 0;
	private grassBlob: HTMLImageElement | null = null;
	private cloudBlob: HTMLImageElement | null = null;
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
		};

		setSpriteBlob();
	}

	draw(ctx: CanvasRenderingContext2D, posX: number) {
		this.drawCloud(ctx, posX);
		this.drawGrass(ctx, posX);

		this.time = this.time + 1;
	}

	private drawGrass(ctx: CanvasRenderingContext2D, posX: number) {
		if (this.grassBlob !== null) {
			ctx.save();

			const imgWidth = 3840;
			const imgHeight = 2160;

			const width = Math.floor(imgWidth * (this.screenHeight / imgHeight));
			const height = Math.floor(imgHeight * (this.screenHeight / imgHeight));

			const x = ((posX * 2) % width) + (width % width);
			const y = this.screenHeight - height;

			ctx.drawImage(this.grassBlob, x + width, y, width, height);
			ctx.drawImage(this.grassBlob, x, y, width, height);
			ctx.drawImage(this.grassBlob, x - width, y, width, height);

			ctx.restore();
		}
	}

	private drawCloud(ctx: CanvasRenderingContext2D, posX: number) {
		if (this.cloudBlob !== null) {
			ctx.save();

			const imgWidth = 3840;
			const imgHeight = 2160;

			const width = Math.floor(imgWidth * (this.screenHeight / imgHeight));
			const height = Math.floor(imgHeight * (this.screenHeight / imgHeight));

			const x =
				((Math.floor(this.time * 0.5) + posX) % width) + (width % width);
			const y = 0;

			ctx.beginPath();
			ctx.fillStyle = "rgb(199, 238, 251)";
			ctx.fillRect(0, 0, this.screenWidth, this.screenHeight);

			ctx.drawImage(this.cloudBlob, x + width, y, width, height);
			ctx.drawImage(this.cloudBlob, x, y, width, height);
			ctx.drawImage(this.cloudBlob, x - width, y, width, height);

			ctx.restore();
		}
	}
}
