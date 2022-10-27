interface IEgg {
	screenWidth: number;
	screenHeight: number;
}

export class Egg {
	private index: number = 0;
	private eggImgBlog: HTMLImageElement | null = null;
	private x = 0;
	private y = 0;

	constructor(initialProps: IEgg) {
		this.x = initialProps.screenWidth / 2;
		this.y = initialProps.screenHeight / 2;

		this.preloadImg();
	}

	private preloadImg() {
		if (typeof window !== "undefined") {
			const img = new Image();
			img.src = "http://localhost:3000/egg.png";
			img.onload = () => {
				this.eggImgBlog = img;
			};
		}
	}

	draw(ctx: CanvasRenderingContext2D, x: number, y: number, index: number) {
		if (this.eggImgBlog !== null) {
			ctx.save();
			// ctx.drawImage(this.eggImgBlog, x, y);
			// ctx.rotate((Math.PI / 180) * 25);

			// 740 968

			ctx.translate(x, y);
			ctx.fillRect(-50, -50, 100, 100);
			ctx.rotate((Math.PI / 180) * index);
			ctx.drawImage(this.eggImgBlog, 162.19 * -0.5, 214.19 * -0.5);

			ctx.restore();
		}
	}

	stay(ctx: CanvasRenderingContext2D) {
		if (this.eggImgBlog !== null) {
			ctx.save();

			ctx.translate(this.x, this.y);
			// console.log((1 - Math.abs(Math.cos(this.index * 0.01) * 0.1)).toFixed(3));
			ctx.transform(
				Number((1 - Math.abs(Math.cos(this.index * 0.01) * 0.05)).toFixed(3)),
				0,
				0,
				Number((1 - Math.abs(Math.sin(this.index * 0.01) * 0.05)).toFixed(3)),
				0,
				0
			);

			ctx.drawImage(this.eggImgBlog, -(162.19 * 0.5), -(214.19 * 0.5));

			ctx.restore();

			this.index += 1;
		}
	}
}
