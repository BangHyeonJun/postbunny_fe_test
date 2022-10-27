interface BunnyProps {
	screenWidth: number;
	screenHeight: number;
}

export class Bunny {
	private index: number = 0;
	private eggImgBlog: HTMLImageElement | null = null;
	private screenWidth = 0;
	private screenHeight = 0;

	private keyframe = {
		moveLeft: [
			{ x: 0, y: 606, width: 110, height: 200, delay: 0 },
			{ x: 110, y: 606, width: 110, height: 200, delay: 0 },
			{ x: 220, y: 606, width: 110, height: 200, delay: 0 },
			{ x: 330, y: 606, width: 110, height: 200, delay: 0 },
			{ x: 440, y: 606, width: 110, height: 200, delay: 0 },
			{ x: 550, y: 606, width: 110, height: 200, delay: 0 },
			{ x: 660, y: 606, width: 110, height: 200, delay: 0 },
			{ x: 770, y: 606, width: 110, height: 200, delay: 0 },
		],
		moveRight: [
			{ x: 0, y: 406, width: 110, height: 200, delay: 0 },
			{ x: 110, y: 406, width: 110, height: 200, delay: 0 },
			{ x: 220, y: 406, width: 110, height: 200, delay: 0 },
			{ x: 330, y: 406, width: 110, height: 200, delay: 0 },
			{ x: 440, y: 406, width: 110, height: 200, delay: 0 },
			{ x: 550, y: 406, width: 110, height: 200, delay: 0 },
			{ x: 660, y: 406, width: 110, height: 200, delay: 0 },
			{ x: 770, y: 406, width: 110, height: 200, delay: 0 },
		],
		egg: [
			{ x: 116, y: 0, width: 116, height: 206, delay: 0 },
			{ x: 116, y: 0, width: 116, height: 206, delay: 0 },
			{ x: 116, y: 0, width: 116, height: 206, delay: 0 },
			{ x: 0, y: 0, width: 116, height: 206, delay: 0 },
		],
		eggFoot: [
			{ x: 348, y: 0, width: 116, height: 206, delay: 0 },
			{ x: 232, y: 0, width: 116, height: 206, delay: 0 },
		],
		stayBunny: [
			{ x: 0, y: 207, width: 110, height: 200, delay: 0 },
			{ x: 110, y: 207, width: 110, height: 200, delay: 0 },
		],
		helloBunny: [
			{ x: 220, y: 207, width: 110, height: 200, delay: 0 },
			{ x: 330, y: 207, width: 110, height: 200, delay: 0 },
			{ x: 440, y: 207, width: 110, height: 200, delay: 0 },
			{ x: 330, y: 207, width: 110, height: 200, delay: 0 },
			{ x: 220, y: 207, width: 110, height: 200, delay: 0 },
			{ x: 330, y: 207, width: 110, height: 200, delay: 0 },
			{ x: 440, y: 207, width: 110, height: 200, delay: 0 },
			{ x: 550, y: 207, width: 110, height: 200, delay: 0 },
			{ x: 220, y: 207, width: 110, height: 200, delay: 0 },
			{ x: 330, y: 207, width: 110, height: 200, delay: 0 },
			{ x: 440, y: 207, width: 110, height: 200, delay: 0 },
			{ x: 330, y: 207, width: 110, height: 200, delay: 0 },
		],
		waterBunny: [
			{ x: 0, y: 806, width: 200, height: 200, delay: 0 },
			{ x: 200, y: 806, width: 200, height: 200, delay: 0 },
		],
	};

	constructor(initialProps: BunnyProps) {
		this.screenWidth = initialProps.screenWidth;
		this.screenHeight = initialProps.screenHeight;

		this.preloadImg();
	}
	private getCircleY(radians: number, radius: number) {
		return Math.sin(radians) * radius;
	}

	private preloadImg() {
		let timeOutId = null;

		const setSpriteBlob = () => {
			if (typeof window === "undefined") {
				timeOutId = setTimeout(() => setSpriteBlob());
				return;
			}

			const img = new Image();
			img.src = `${location.origin}/갈색 토끼 스프라이트.png`;
			img.onload = () => {
				this.eggImgBlog = img;
			};
		};

		setSpriteBlob();
	}

	egg(ctx: CanvasRenderingContext2D) {
		if (this.eggImgBlog !== null) {
			ctx.save();

			const size = Math.floor(this.index / 60) % this.keyframe.egg.length;
			const egg = this.keyframe.egg;

			const test = this.getCircleY(this.index / 60, 5);

			ctx.translate(
				this.screenWidth / 2 -
					(egg[size].width * (this.screenHeight / 915)) / 2,
				this.screenHeight * 0.35
			);

			ctx.rotate((Math.PI / 180) * test);

			ctx.translate(test * 2.8, test * -0.85);

			ctx.drawImage(
				this.eggImgBlog,
				egg[size].x,
				egg[size].y,
				egg[size].width,
				egg[size].height,
				0,
				0,
				egg[size].width * (this.screenHeight / 915),
				egg[size].height * (this.screenHeight / 915)
			);

			this.index = this.index + 1;

			ctx.restore();
		}
	}

	draw(
		ctx: CanvasRenderingContext2D,
		type: number,
		x: number,
		y: number,
		index: number
	) {
		if (this.eggImgBlog !== null) {
			ctx.save();
			// ctx.drawImage(this.eggImgBlog, x, y);
			// ctx.rotate((Math.PI / 180) * 25);

			// 740 968

			// ctx.translate(x, y);
			// ctx.fillRect(-50, -50, 100, 100);
			// ctx.rotate((Math.PI / 180) * index);
			// ctx.drawImage(this.eggImgBlog, 162.19 * -0.5, 214.19 * -0.5);

			ctx.drawImage(
				this.eggImgBlog,
				89 * index,
				186 * type,
				89,
				186,
				140,
				350,
				66,
				138
			);

			ctx.restore();
		}
	}

	stay(ctx: CanvasRenderingContext2D) {
		if (this.eggImgBlog !== null) {
			ctx.save();

			const stayBunny = this.keyframe.stayBunny;
			const size = Math.floor(this.index / 60) % stayBunny.length;

			const test = this.getCircleY(this.index / 60, 5);

			ctx.drawImage(
				this.eggImgBlog,
				stayBunny[size].x,
				stayBunny[size].y,
				stayBunny[size].width,
				stayBunny[size].height,
				this.screenWidth / 2 -
					(stayBunny[size].width * (this.screenHeight / 915)) / 2,
				this.screenHeight * 0.35,
				stayBunny[size].width * (this.screenHeight / 915),
				stayBunny[size].height * (this.screenHeight / 915)
			);

			this.index = this.index + 1;

			ctx.restore();
		}
	}

	hello(ctx: CanvasRenderingContext2D) {
		if (this.eggImgBlog !== null) {
			ctx.save();

			const helloBunny = this.keyframe.helloBunny;
			const size = Math.floor(this.index / 10) % helloBunny.length;

			const test = this.getCircleY(this.index / 60, 5);

			ctx.drawImage(
				this.eggImgBlog,
				helloBunny[size].x,
				helloBunny[size].y,
				helloBunny[size].width,
				helloBunny[size].height,
				this.screenWidth / 2 -
					(helloBunny[size].width * (this.screenHeight / 915)) / 2,
				this.screenHeight * 0.35,
				helloBunny[size].width * (this.screenHeight / 915),
				helloBunny[size].height * (this.screenHeight / 915)
			);

			this.index = this.index + 1;

			ctx.restore();
		}
	}
}
