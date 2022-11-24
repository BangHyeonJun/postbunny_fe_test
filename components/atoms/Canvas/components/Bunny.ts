interface BunnyProps {
	screenWidth: number;
	screenHeight: number;

	bunnyType: string;
}

export class Bunny {
	private index: number = 0;
	private screenWidth = 0;
	private screenHeight = 0;
	private bunnyType = "";
	private bunnyBlob: HTMLImageElement | null = null;

	private keyframe = {
		stay: [
			{ type: "가만히 1", x: 0, y: 0, width: 231, height: 494, delay: 0 },
			{ type: "가만히 2", x: 231, y: 0, width: 231, height: 494, delay: 0 },
			{ type: "가만히 3", x: 462, y: 0, width: 231, height: 494, delay: 0 },
			{ type: "웃는가만히 1", x: 693, y: 0, width: 231, height: 494, delay: 0 },
			{ type: "웃는가만히 2", x: 924, y: 0, width: 231, height: 494, delay: 0 },
			{
				type: "웃는가만히 3",
				x: 1155,
				y: 0,
				width: 231,
				height: 494,
				delay: 0,
			},
		],
		dance: [
			{ type: "춤 1", x: 0, y: 494, width: 400, height: 500, delay: 0 },
			{ type: "춤 2", x: 400, y: 494, width: 400, height: 500, delay: 0 },
			{ type: "춤 3", x: 800, y: 494, width: 400, height: 500, delay: 0 },
			{ type: "춤 4", x: 1200, y: 494, width: 400, height: 500, delay: 0 },
			{ type: "웃는춤 1", x: 0, y: 994, width: 400, height: 500, delay: 0 },
			{ type: "웃는춤 2", x: 400, y: 994, width: 400, height: 500, delay: 0 },
			{ type: "웃는춤 3", x: 800, y: 994, width: 400, height: 500, delay: 0 },
			{ type: "웃는춤 4", x: 1200, y: 994, width: 400, height: 500, delay: 0 },
		],
		hello: [
			{ type: "안녕 1", x: 0, y: 1494, width: 227, height: 459, delay: 0 },
			{ type: "안녕 2", x: 227, y: 1494, width: 227, height: 459, delay: 0 },
			{ type: "안녕 3", x: 454, y: 1494, width: 227, height: 459, delay: 0 },
			{ type: "안녕 4", x: 681, y: 1494, width: 227, height: 459, delay: 0 },
			{ type: "안녕 5", x: 908, y: 1494, width: 227, height: 459, delay: 0 },
			{ type: "안녕 6", x: 681, y: 1494, width: 227, height: 459, delay: 0 },
			{ type: "안녕 7", x: 454, y: 1494, width: 227, height: 459, delay: 0 },
			{ type: "안녕 8", x: 227, y: 1494, width: 227, height: 459, delay: 0 },
			{ type: "웃는안녕 1", x: 0, y: 1953, width: 227, height: 459, delay: 0 },
			{
				type: "웃는안녕 2",
				x: 227,
				y: 1953,
				width: 227,
				height: 459,
				delay: 0,
			},
			{
				type: "웃는안녕 3",
				x: 454,
				y: 1953,
				width: 227,
				height: 459,
				delay: 0,
			},
			{
				type: "웃는안녕 4",
				x: 681,
				y: 1953,
				width: 227,
				height: 459,
				delay: 0,
			},
			{
				type: "웃는안녕 5",
				x: 908,
				y: 1953,
				width: 227,
				height: 459,
				delay: 0,
			},
			{
				type: "웃는안녕 6",
				x: 681,
				y: 1953,
				width: 227,
				height: 459,
				delay: 0,
			},
			{
				type: "웃는안녕 7",
				x: 454,
				y: 1953,
				width: 227,
				height: 459,
				delay: 0,
			},
			{
				type: "웃는안녕 8",
				x: 227,
				y: 1953,
				width: 227,
				height: 459,
				delay: 0,
			},
		],
		moveRight: [
			{ type: "오른쪽 1", x: 0, y: 2412, width: 472, height: 503, delay: 0 },
			{ type: "오른쪽 2", x: 472, y: 2412, width: 472, height: 503, delay: 0 },
			{ type: "오른쪽 3", x: 944, y: 2412, width: 472, height: 503, delay: 0 },
			{ type: "오른쪽 4", x: 1416, y: 2412, width: 472, height: 503, delay: 0 },
			{ type: "오른쪽 5", x: 1888, y: 2412, width: 472, height: 503, delay: 0 },
			{ type: "오른쪽 6", x: 2360, y: 2412, width: 472, height: 503, delay: 0 },
			{ type: "오른쪽 7", x: 0, y: 2915, width: 472, height: 503, delay: 0 },
			{ type: "오른쪽 8", x: 472, y: 2915, width: 472, height: 503, delay: 0 },
			{ type: "오른쪽 9", x: 944, y: 2915, width: 472, height: 503, delay: 0 },
			{
				type: "오른쪽 10",
				x: 1416,
				y: 2915,
				width: 472,
				height: 503,
				delay: 0,
			},
			{
				type: "오른쪽 11",
				x: 1888,
				y: 2915,
				width: 472,
				height: 503,
				delay: 0,
			},
			{
				type: "오른쪽 12",
				x: 2360,
				y: 2915,
				width: 472,
				height: 503,
				delay: 0,
			},
			{ type: "오른쪽 13", x: 0, y: 3418, width: 472, height: 503, delay: 0 },
			{ type: "오른쪽 14", x: 472, y: 3418, width: 472, height: 503, delay: 0 },
			{ type: "오른쪽 15", x: 944, y: 3418, width: 472, height: 503, delay: 0 },
			{
				type: "오른쪽 16",
				x: 1416,
				y: 3418,
				width: 472,
				height: 503,
				delay: 0,
			},
			{
				type: "오른쪽 17",
				x: 1888,
				y: 3418,
				width: 472,
				height: 503,
				delay: 0,
			},
		],
		moveLeft: [
			{ type: "왼쪽 1", x: 0, y: 3921, width: 472, height: 503, delay: 0 },
			{ type: "왼쪽 2", x: 472, y: 3921, width: 472, height: 503, delay: 0 },
			{ type: "왼쪽 3", x: 944, y: 3921, width: 472, height: 503, delay: 0 },
			{ type: "왼쪽 4", x: 1416, y: 3921, width: 472, height: 503, delay: 0 },
			{ type: "왼쪽 5", x: 1888, y: 3921, width: 472, height: 503, delay: 0 },
			{ type: "왼쪽 6", x: 2360, y: 3921, width: 472, height: 503, delay: 0 },
			{ type: "왼쪽 7", x: 0, y: 4424, width: 472, height: 503, delay: 0 },
			{ type: "왼쪽 8", x: 472, y: 4424, width: 472, height: 503, delay: 0 },
			{ type: "왼쪽 9", x: 944, y: 4424, width: 472, height: 503, delay: 0 },
			{ type: "왼쪽 10", x: 1416, y: 4424, width: 472, height: 503, delay: 0 },
			{ type: "왼쪽 11", x: 1888, y: 4424, width: 472, height: 503, delay: 0 },
			{ type: "왼쪽 12", x: 2360, y: 4424, width: 472, height: 503, delay: 0 },
			{ type: "왼쪽 13", x: 0, y: 4927, width: 472, height: 503, delay: 0 },
			{ type: "왼쪽 14", x: 472, y: 4927, width: 472, height: 503, delay: 0 },
			{ type: "왼쪽 15", x: 944, y: 4927, width: 472, height: 503, delay: 0 },
			{ type: "왼쪽 16", x: 1416, y: 4927, width: 472, height: 503, delay: 0 },
			{ type: "왼쪽 17", x: 1888, y: 4927, width: 472, height: 503, delay: 0 },
		],
	};

	constructor(initialProps: BunnyProps) {
		this.screenWidth = initialProps.screenWidth;
		this.screenHeight = initialProps.screenHeight;

		this.bunnyType = initialProps.bunnyType;

		this.preloadImg();
	}

	private getBunnyImagePath(type: any) {
		let result = "";

		switch (type) {
			case "brown":
				result = `${location.origin}/brownbunny.png`;
				break;
			case "black":
				result = `${location.origin}/blackbunny.png`;
				break;
			case "white":
				result = `${location.origin}/whitebunny.png`;
				break;
			case "pink":
				result = `${location.origin}/pinkbunny.png`;
				break;
			case "gray":
				result = `${location.origin}/graybunny.png`;
				break;
			case "beige":
				result = `${location.origin}/beigebunny.png`;
				break;
		}
		console.log(type);

		return result;
	}

	private preloadImg() {
		let timeOutId = null;

		const setSpriteBlob = () => {
			if (typeof window === "undefined") {
				timeOutId = setTimeout(() => setSpriteBlob());
				return;
			}

			const imgPath = this.getBunnyImagePath(this.bunnyType);

			const img = new Image();
			img.src = imgPath;
			img.onload = () => {
				this.bunnyBlob = img;
			};
		};

		setSpriteBlob();
	}

	draw(
		ctx: CanvasRenderingContext2D,
		type: "STAY" | "DANCE" | "HELLO" | "LEFT" | "RIGHT"
	) {
		if (type === "STAY") {
			this.stay(ctx);
		} else if (type === "DANCE") {
			this.dance(ctx);
		} else if (type === "HELLO") {
			this.hello(ctx);
		} else if (type === "LEFT") {
			this.moveLeft(ctx);
		} else if (type === "RIGHT") {
			this.moveRight(ctx);
		}
	}

	private dance(ctx: CanvasRenderingContext2D) {
		if (this.bunnyBlob !== null) {
			ctx.save();

			const img = this.bunnyBlob;
			// 가속기
			const accelerate = 50;

			const targetKeyframe = this.keyframe.dance;
			const size = Math.floor(this.index / accelerate) % targetKeyframe.length;

			const imgX = targetKeyframe[size].x;
			const imgY = targetKeyframe[size].y;

			const imgWidth = targetKeyframe[size].width;
			const imgHeight = targetKeyframe[size].height;

			// 사이즈 비율
			let ratio = 1;

			if (this.screenWidth <= 500) {
				ratio = (this.screenWidth / imgWidth) * 0.55;
			} else {
				ratio = (this.screenHeight / imgHeight) * 0.55;
			}

			const centerScreenX = this.screenWidth / 2;
			const centerScreenY = Math.ceil(this.screenHeight * 0.63);

			let drawWidth = imgWidth * ratio;
			let drawHeight = imgHeight * ratio;

			const drawX = centerScreenX - drawWidth / 2;
			const drawY = centerScreenY - drawHeight / 2;

			ctx.drawImage(
				img,
				imgX,
				imgY,
				imgWidth,
				imgHeight,
				drawX,
				drawY,
				drawWidth,
				drawHeight
			);

			this.index = this.index + 1;

			ctx.restore();
		}
	}

	private hello(ctx: CanvasRenderingContext2D) {
		if (this.bunnyBlob !== null) {
			ctx.save();

			const img = this.bunnyBlob;
			// 가속기
			const accelerate = 10;

			const targetKeyframe = this.keyframe.hello;
			const size = Math.floor(this.index / accelerate) % targetKeyframe.length;

			const imgX = targetKeyframe[size].x;
			const imgY = targetKeyframe[size].y;

			const imgWidth = targetKeyframe[size].width;
			const imgHeight = targetKeyframe[size].height;

			// 사이즈 비율
			let ratio = 1;

			if (this.screenWidth <= 500) {
				ratio = (this.screenWidth / imgWidth) * 0.55;
			} else {
				ratio = (this.screenHeight / imgHeight) * 0.55;
			}

			const centerScreenX = this.screenWidth / 2;
			const centerScreenY = Math.ceil(this.screenHeight * 0.63);

			let drawWidth = imgWidth * ratio;
			let drawHeight = imgHeight * ratio;

			const drawX = centerScreenX - drawWidth / 2;
			const drawY = centerScreenY - drawHeight / 2;

			ctx.drawImage(
				img,
				imgX,
				imgY,
				imgWidth,
				imgHeight,
				drawX,
				drawY,
				drawWidth,
				drawHeight
			);

			this.index = this.index + 1;

			ctx.restore();
		}
	}

	private stay(ctx: CanvasRenderingContext2D) {
		if (this.bunnyBlob !== null) {
			ctx.save();

			const img = this.bunnyBlob;
			// 가속기
			const accelerate = 15;

			const targetKeyframe = this.keyframe.stay;
			const size = Math.floor(this.index / accelerate) % targetKeyframe.length;

			const imgX = targetKeyframe[size].x;
			const imgY = targetKeyframe[size].y;

			const imgWidth = targetKeyframe[size].width;
			const imgHeight = targetKeyframe[size].height;

			// 사이즈 비율
			let ratio = 1;

			if (this.screenWidth <= 500) {
				ratio = (this.screenWidth / imgWidth) * 0.55;
			} else {
				ratio = (this.screenHeight / imgHeight) * 0.55;
			}

			const centerScreenX = this.screenWidth / 2;
			const centerScreenY = Math.ceil(this.screenHeight * 0.63);

			let drawWidth = imgWidth * ratio;
			let drawHeight = imgHeight * ratio;

			const drawX = centerScreenX - drawWidth / 2;
			const drawY = centerScreenY - drawHeight / 2;

			ctx.drawImage(
				img,
				imgX,
				imgY,
				imgWidth,
				imgHeight,
				drawX,
				drawY,
				drawWidth,
				drawHeight
			);

			this.index = this.index + 1;

			ctx.restore();
		}
	}

	private moveLeft(ctx: CanvasRenderingContext2D) {
		if (this.bunnyBlob !== null) {
			ctx.save();

			const img = this.bunnyBlob;

			// 가속기
			const accelerate = 4;

			const targetKeyframe = this.keyframe.moveLeft;
			const size = Math.floor(this.index / accelerate) % targetKeyframe.length;

			const imgX = targetKeyframe[size].x;
			const imgY = targetKeyframe[size].y;

			const imgWidth = targetKeyframe[size].width;
			const imgHeight = targetKeyframe[size].height;

			// 사이즈 비율
			let ratio = 1;

			if (this.screenWidth <= 500) {
				ratio = (this.screenWidth / imgWidth) * 0.55;
			} else {
				ratio = (this.screenHeight / imgHeight) * 0.55;
			}

			const centerScreenX = this.screenWidth / 2;
			const centerScreenY = Math.ceil(this.screenHeight * 0.63);

			let drawWidth = imgWidth * ratio;
			let drawHeight = imgHeight * ratio;

			const drawX = centerScreenX - drawWidth / 2;
			const drawY = centerScreenY - drawHeight / 2;

			ctx.drawImage(
				img,
				imgX,
				imgY,
				imgWidth,
				imgHeight,
				drawX,
				drawY,
				drawWidth,
				drawHeight
			);

			this.index = this.index + 1;

			ctx.restore();
		}
	}

	private moveRight(ctx: CanvasRenderingContext2D) {
		if (this.bunnyBlob !== null) {
			ctx.save();

			const img = this.bunnyBlob;
			// 가속기
			const accelerate = 4;

			const targetKeyframe = this.keyframe.moveRight;
			const size = Math.floor(this.index / accelerate) % targetKeyframe.length;

			const imgX = targetKeyframe[size].x;
			const imgY = targetKeyframe[size].y;

			const imgWidth = targetKeyframe[size].width;
			const imgHeight = targetKeyframe[size].height;

			// 사이즈 비율
			let ratio = 1;

			if (this.screenWidth <= 500) {
				ratio = (this.screenWidth / imgWidth) * 0.55;
			} else {
				ratio = (this.screenHeight / imgHeight) * 0.55;
			}

			const centerScreenX = this.screenWidth / 2;
			const centerScreenY = Math.ceil(this.screenHeight * 0.63);

			let drawWidth = imgWidth * ratio;
			let drawHeight = imgHeight * ratio;

			const drawX = centerScreenX - drawWidth / 2;
			const drawY = centerScreenY - drawHeight / 2;

			ctx.drawImage(
				img,
				imgX,
				imgY,
				imgWidth,
				imgHeight,
				drawX,
				drawY,
				drawWidth,
				drawHeight
			);

			this.index = this.index + 1;

			ctx.restore();
		}
	}
}
