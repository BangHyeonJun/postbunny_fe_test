interface BunnyProps {
	screenWidth: number;
	screenHeight: number;
}

export class Bunny {
	private index: number = 0;
	private SpriteBlob: HTMLImageElement | null = null;
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
				this.SpriteBlob = img;
			};
		};

		setSpriteBlob();
	}

	egg(ctx: CanvasRenderingContext2D) {
		if (this.SpriteBlob !== null) {
			ctx.save();

			const targetKeyframe = this.keyframe.egg;
			const size = Math.floor(this.index / 60) % targetKeyframe.length;

			const test = this.getCircleY(this.index / 60, 5);

			ctx.translate(
				this.screenWidth / 2 -
					(targetKeyframe[size].width * (this.screenHeight / 915)) / 2,
				this.screenHeight * 0.35
			);

			ctx.rotate((Math.PI / 180) * test);

			ctx.translate(test * 2.8, test * -0.85);

			ctx.drawImage(
				this.SpriteBlob,
				targetKeyframe[size].x,
				targetKeyframe[size].y,
				targetKeyframe[size].width,
				targetKeyframe[size].height,
				0,
				0,
				targetKeyframe[size].width * (this.screenHeight / 915),
				targetKeyframe[size].height * (this.screenHeight / 915)
			);

			this.index = this.index + 1;

			ctx.restore();
		}
	}

	// draw(
	// 	ctx: CanvasRenderingContext2D,
	// 	type: number,
	// 	x: number,
	// 	y: number,
	// 	index: number
	// ) {
	// 	if (this.eggImgBlog !== null) {
	// 		ctx.save();
	// 		// ctx.drawImage(this.eggImgBlog, x, y);
	// 		// ctx.rotate((Math.PI / 180) * 25);

	// 		// 740 968

	// 		// ctx.translate(x, y);
	// 		// ctx.fillRect(-50, -50, 100, 100);
	// 		// ctx.rotate((Math.PI / 180) * index);
	// 		// ctx.drawImage(this.eggImgBlog, 162.19 * -0.5, 214.19 * -0.5);

	// 		ctx.drawImage(
	// 			this.eggImgBlog,
	// 			89 * index,
	// 			186 * type,
	// 			89,
	// 			186,
	// 			140,
	// 			350,
	// 			66,
	// 			138
	// 		);

	// 		ctx.restore();
	// 	}
	// }

	stay(ctx: CanvasRenderingContext2D) {
		if (this.SpriteBlob !== null) {
			ctx.save();

			const targetKeyframe = this.keyframe.stayBunny;
			const size = Math.floor(this.index / 60) % targetKeyframe.length;

			const test = this.getCircleY(this.index / 60, 5);

			ctx.drawImage(
				this.SpriteBlob,
				targetKeyframe[size].x,
				targetKeyframe[size].y,
				targetKeyframe[size].width,
				targetKeyframe[size].height,
				this.screenWidth / 2 -
					(targetKeyframe[size].width * (this.screenHeight / 915)) / 2,
				this.screenHeight * 0.35,
				targetKeyframe[size].width * (this.screenHeight / 915),
				targetKeyframe[size].height * (this.screenHeight / 915)
			);

			this.index = this.index + 1;

			ctx.restore();
		}
	}

	hello(ctx: CanvasRenderingContext2D) {
		if (this.SpriteBlob !== null) {
			ctx.save();

			const targetKeyframe = this.keyframe.helloBunny;
			const size = Math.floor(this.index / 10) % targetKeyframe.length;

			const test = this.getCircleY(this.index / 60, 5);

			ctx.drawImage(
				this.SpriteBlob,
				targetKeyframe[size].x,
				targetKeyframe[size].y,
				targetKeyframe[size].width,
				targetKeyframe[size].height,
				this.screenWidth / 2 -
					(targetKeyframe[size].width * (this.screenHeight / 915)) / 2,
				this.screenHeight * 0.35,
				targetKeyframe[size].width * (this.screenHeight / 915),
				targetKeyframe[size].height * (this.screenHeight / 915)
			);

			this.index = this.index + 1;

			ctx.restore();
		}
	}

	moveLeft(ctx: CanvasRenderingContext2D) {
		if (this.SpriteBlob !== null) {
			ctx.save();

			const targetKeyframe = this.keyframe.moveLeft;
			const size = Math.floor(this.index / 8) % targetKeyframe.length;

			ctx.drawImage(
				this.SpriteBlob,
				targetKeyframe[size].x,
				targetKeyframe[size].y,
				targetKeyframe[size].width,
				targetKeyframe[size].height,
				this.screenWidth / 2 -
					(targetKeyframe[size].width * (this.screenHeight / 915)) / 2,
				this.screenHeight * 0.35,
				targetKeyframe[size].width * (this.screenHeight / 915),
				targetKeyframe[size].height * (this.screenHeight / 915)
			);

			this.index = this.index + 1;

			ctx.restore();
		}
	}

	moveRight(ctx: CanvasRenderingContext2D) {
		if (this.SpriteBlob !== null) {
			ctx.save();

			const targetKeyframe = this.keyframe.moveRight;
			const size = Math.floor(this.index / 8) % targetKeyframe.length;

			ctx.drawImage(
				this.SpriteBlob,
				targetKeyframe[size].x,
				targetKeyframe[size].y,
				targetKeyframe[size].width,
				targetKeyframe[size].height,
				this.screenWidth / 2 -
					(targetKeyframe[size].width * (this.screenHeight / 915)) / 2,
				this.screenHeight * 0.35,
				targetKeyframe[size].width * (this.screenHeight / 915),
				targetKeyframe[size].height * (this.screenHeight / 915)
			);

			this.index = this.index + 1;

			ctx.restore();
		}
	}
}
