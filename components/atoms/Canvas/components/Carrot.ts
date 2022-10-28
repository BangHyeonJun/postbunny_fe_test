interface CarrotProps {
	screenWidth: number;
	screenHeight: number;
	nickname: string;
	type: number;
}

export class Carrot {
	private screenWidth = 0;
	private screenHeight = 0;
	private carrotWidth = 0;
	private carrotHeight = 0;

	private nicknameMarginTop = 8;
	private nickname = "";
	private type = 0;

	private keyframe = {
		waterBunny: [
			{ x: 0, y: 806, width: 200, height: 200, delay: 0 },
			{ x: 200, y: 806, width: 200, height: 200, delay: 0 },
		],
		carrot: [
			{ x: 0, y: 1006, width: 97, height: 98, delay: 0 },
			{ x: 0, y: 1006, width: 97, height: 98, delay: 0 },
			{ x: 0, y: 1006, width: 97, height: 98, delay: 0 },
			{ x: 0, y: 1006, width: 97, height: 98, delay: 0 },
			{ x: 97, y: 1006, width: 97, height: 98, delay: 0 },
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
	};

	constructor(initialProps: CarrotProps) {
		this.screenWidth = initialProps.screenWidth;
		this.screenHeight = initialProps.screenHeight;

		this.nickname = initialProps.nickname;
		this.type = initialProps.type;

		this.carrotWidth = this.carrotWidth * (initialProps.screenHeight / 915);
		this.carrotHeight = this.carrotHeight * (initialProps.screenHeight / 915);
	}

	draw(
		ctx: CanvasRenderingContext2D,
		image: HTMLImageElement,
		index: number,
		x: number,
		y: number
	) {
		this.drawCarrot(ctx, image, index, x, y);
		this.drawTitle(ctx, index, this.nickname, x, y);
		// this.drawBunny(ctx);
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
		// switch (this.type) {
		// 	case 0:
		// 		carrotKeyframe = this.keyframe.carrot;
		// 		break;
		// 	case 1:
		// 		carrotKeyframe = this.keyframe.carrot2;
		// 		break;
		// 	case 2:
		// 		carrotKeyframe = this.keyframe.carrot3;
		// 		break;
		// 	case 3:
		// 		carrotKeyframe = this.keyframe.carrot4;
		// 		break;
		// 	case 4:
		// 		carrotKeyframe = this.keyframe.carrot5;
		// 		break;
		// 	case 5:
		// 		carrotKeyframe = this.keyframe.carrot6;
		// 		break;
		// }
		const size = Math.floor(index / 30) % carrotKeyframe.length;

		const width = carrotKeyframe[size].width * (this.screenHeight / 1464);
		const height = carrotKeyframe[size].height * (this.screenHeight / 1464);

		const px = x;
		const py = y - height / 2;

		// ctx.beginPath();
		// ctx.filter = "blur(6px)";
		// ctx.ellipse(
		// 	px + width / 2,
		// 	py + height - 10,
		// 	height * 0.05,
		// 	width * 0.5,
		// 	Math.PI / 2,
		// 	0,
		// 	2 * Math.PI
		// );
		// ctx.stroke();
		// ctx.fill();

		ctx.filter = "blur(0px)";
		ctx.drawImage(
			image,
			carrotKeyframe[size].x,
			carrotKeyframe[size].y,
			carrotKeyframe[size].width,
			carrotKeyframe[size].height,
			px,
			py,
			width,
			height
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

	private drawBunny(ctx: CanvasRenderingContext2D) {}
}
