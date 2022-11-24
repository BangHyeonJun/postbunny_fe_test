interface CarrotProps {
	screenWidth: number;
	screenHeight: number;
	px: number;
	py: number;
	nickname: string;
	type: number;
}

export class Carrot {
	private screenWidth = 0;
	private screenHeight = 0;

	carrotWidth = 0;
	carrotHeight = 0;

	private nicknameMarginTop = 8;
	private nickname = "";
	private type = 0;

	px = 0;
	py = 0;

	private keyframe = {
		waterBunny: [
			{ x: 0, y: 806, width: 200, height: 200, delay: 0 },
			{ x: 200, y: 806, width: 200, height: 200, delay: 0 },
		],
		carrot: [
			{ x: 0, y: 0, width: 457, height: 640, delay: 0 },
			{ x: 457, y: 0, width: 457, height: 640, delay: 0 },
		],
		carrot2: [
			{ x: 194, y: 1006, width: 97, height: 98, delay: 0 },
			{ x: 194, y: 1006, width: 97, height: 98, delay: 0 },
			{ x: 194, y: 1006, width: 97, height: 98, delay: 0 },
			{ x: 194, y: 1006, width: 97, height: 98, delay: 0 },
			{ x: 291, y: 1006, width: 97, height: 98, delay: 0 },
		],
		carrot3: [
			{ x: 388, y: 1006, width: 97, height: 98, delay: 0 },
			{ x: 388, y: 1006, width: 97, height: 98, delay: 0 },
			{ x: 388, y: 1006, width: 97, height: 98, delay: 0 },
			{ x: 388, y: 1006, width: 97, height: 98, delay: 0 },
			{ x: 485, y: 1006, width: 97, height: 98, delay: 0 },
		],
		carrot4: [
			{ x: 0, y: 1105, width: 97, height: 98, delay: 0 },
			{ x: 0, y: 1105, width: 97, height: 98, delay: 0 },
			{ x: 0, y: 1105, width: 97, height: 98, delay: 0 },
			{ x: 0, y: 1105, width: 97, height: 98, delay: 0 },
			{ x: 97, y: 1105, width: 97, height: 98, delay: 0 },
		],
		carrot5: [
			{ x: 194, y: 1105, width: 97, height: 98, delay: 0 },
			{ x: 194, y: 1105, width: 97, height: 98, delay: 0 },
			{ x: 194, y: 1105, width: 97, height: 98, delay: 0 },
			{ x: 194, y: 1105, width: 97, height: 98, delay: 0 },
			{ x: 291, y: 1105, width: 97, height: 98, delay: 0 },
		],
		carrot6: [
			{ x: 388, y: 1105, width: 97, height: 98, delay: 0 },
			{ x: 388, y: 1105, width: 97, height: 98, delay: 0 },
			{ x: 388, y: 1105, width: 97, height: 98, delay: 0 },
			{ x: 388, y: 1105, width: 97, height: 98, delay: 0 },
			{ x: 485, y: 1105, width: 97, height: 98, delay: 0 },
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
	};

	constructor(initialProps: CarrotProps) {
		this.screenWidth = initialProps.screenWidth;
		this.screenHeight = initialProps.screenHeight;

		this.nickname = initialProps.nickname;
		this.type = initialProps.type;

		this.px = initialProps.px;
		this.py = initialProps.py;

		this.carrotWidth = this.carrotWidth * (initialProps.screenHeight / 915);
		this.carrotHeight = this.carrotHeight * (initialProps.screenHeight / 915);
	}

	draw(
		ctx: CanvasRenderingContext2D,
		image: HTMLImageElement,
		index: number,
		moveX: number
	) {
		this.drawCarrot(ctx, image, index, this.px - moveX, this.py);
		// this.drawBunny(ctx, image, index, this.px - moveX, this.py);
		// this.drawTitle(ctx, index, this.nickname, this.px - moveX, this.py);
	}

	private drawCarrot(
		ctx: CanvasRenderingContext2D,
		image: HTMLImageElement,
		index: number,
		x: number,
		y: number
	) {
		ctx.save();
		ctx.beginPath();

		let carrotKeyframe = this.keyframe.carrot;
		switch (this.type) {
			case 0:
				carrotKeyframe = this.keyframe.carrot;
				break;
			case 1:
				carrotKeyframe = this.keyframe.carrot2;
				break;
			case 2:
				carrotKeyframe = this.keyframe.carrot3;
				break;
			case 3:
				carrotKeyframe = this.keyframe.carrot4;
				break;
			case 4:
				carrotKeyframe = this.keyframe.carrot5;
				break;
			case 5:
				carrotKeyframe = this.keyframe.carrot6;
				break;
		}
		const size = Math.floor(index / 40) % carrotKeyframe.length;

		const imgX = carrotKeyframe[size].x;
		const imgY = carrotKeyframe[size].y;

		const imgWidth = carrotKeyframe[size].width;
		const imgHeight = carrotKeyframe[size].height;

		// 사이즈 비율
		let ratio = 1;

		if (this.screenWidth <= 500) {
			ratio = (this.screenWidth / imgWidth) * 0.18;
		} else {
			ratio = (this.screenHeight / imgHeight) * 0.18;
		}

		let drawWidth = imgWidth * ratio;
		let drawHeight = imgHeight * ratio;

		const drawX =
			(x * Math.ceil((this.screenWidth / 3840) * 0.8 * 10)) %
			Math.floor(3840 * (this.screenHeight / 1080));
		const drawY = this.screenHeight * 0.6;

		ctx.beginPath();
		ctx.drawImage(
			image,
			imgX,
			imgY,
			imgWidth,
			imgHeight,
			drawX,
			drawY,
			drawWidth,
			drawHeight
		);

		ctx.restore();
	}

	private drawTitle(
		ctx: CanvasRenderingContext2D,
		index: number,
		nickname: string,
		x: number,
		y: number
	) {
		ctx.save();

		const carrotKeyframe = this.keyframe.carrot;
		const size = Math.floor(index / 30) % carrotKeyframe.length;

		const carrotWidth = carrotKeyframe[size].width * (this.screenHeight / 1464);
		const carrotHeight =
			carrotKeyframe[size].height * (this.screenHeight / 1464);

		const font =
			"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif";
		const fontSize = 14;
		const fontWeight = 600;

		ctx.font = `${fontWeight} ${fontSize}px ${font}`;
		const textPad = 10;
		const text = nickname;
		const width = ctx.measureText(text).width + textPad * 2;

		const px = x + carrotWidth / 2 - width / 2;
		const py = y - carrotHeight - this.nicknameMarginTop;
		const height = 32;
		const radius = 8;

		ctx.beginPath();

		ctx.fillStyle = "rgba(31, 31, 31, 0.75)";

		ctx.moveTo(px + radius, py);
		ctx.lineTo(px + width - radius, py);
		ctx.quadraticCurveTo(px + width, py, px + width, py + radius);
		ctx.lineTo(px + width, py + height - radius);
		ctx.quadraticCurveTo(
			px + width,
			py + height,
			px + width - radius,
			py + height
		);
		ctx.lineTo(px + radius, py + height);
		ctx.quadraticCurveTo(px, py + height, px, py + height - radius);
		ctx.lineTo(px, py + radius);
		ctx.quadraticCurveTo(px, py, px + radius, py);

		ctx.fill();

		ctx.beginPath();
		ctx.fillStyle = "rgb(255, 255, 255)";
		ctx.fillText(text, px + textPad, py + 21);

		ctx.restore();
	}

	private drawBunny(
		ctx: CanvasRenderingContext2D,
		image: HTMLImageElement,
		index: number,
		x: number,
		y: number
	) {
		ctx.save();
		ctx.beginPath();

		const carrotKeyframe = this.keyframe.waterBunny;
		const size = Math.floor(index / 10) % carrotKeyframe.length;

		const width = carrotKeyframe[size].width * (this.screenHeight / 2600);
		const height = carrotKeyframe[size].height * (this.screenHeight / 2600);

		const px = x;
		const py = y - height / 2;

		ctx.beginPath();
		ctx.drawImage(
			image,
			carrotKeyframe[size].x,
			carrotKeyframe[size].y,
			carrotKeyframe[size].width,
			carrotKeyframe[size].height,
			px + width - 20,
			py - 10,
			width,
			height
		);

		ctx.restore();
	}
}
