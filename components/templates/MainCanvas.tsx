import {
	Canvas,
	Cloud,
	drawBasementBackGround,
	drawSkyBackGround,
	drawLoadBackGround,
	Bunny,
	drawCarrotBackGround,
	Carrot,
	CarrotManager,
} from "@/atoms/Canvas";
import useFullSize from "@/hooks/useFullSize";

function MainCanvas() {
	const { width, height } = useFullSize();
	const Clouds = [
		new Cloud({
			posX: 300,
			posY: height * 0,
			screenWidth: width,
			speed: 0.6,
		}),
		new Cloud({
			posX: 800,
			posY: height * 0.1,
			screenWidth: width,
			speed: 0.4,
			scale: 1.3,
		}),
		new Cloud({
			posX: 10,
			posY: height * 0.2,
			screenWidth: width,
			speed: 0.1,
			scale: 0.6,
		}),
		new Cloud({
			posX: 100,
			posY: height * 0.15,
			screenWidth: width,
			speed: 0.2,
			scale: 0.8,
		}),
	];
	const bunny = new Bunny({
		screenWidth: width,
		screenHeight: height,
	});
	const carrotManager = new CarrotManager({
		screenWidth: width,
		screenHeight: height,
		carrotDatas: [],
	});
	let pressFlag = false;
	let pressX = 0;
	let pressType = 0; // 0 : 왼쪽, 1 : 오른쪽
	let x = 0;
	let index = 0;

	const handleCanvasAnimation = (ctx: CanvasRenderingContext2D) => {
		ctx.clearRect(0, 0, width, height);
		ctx.beginPath();

		drawSkyBackGround(ctx, 0, 0, width, height * 0.25);
		drawCarrotBackGround(ctx, 0, height * 0.25, width, height * 0.13, true);
		drawCarrotBackGround(ctx, 0, height * 0.63, width, height * 0.13, true);
		drawLoadBackGround(ctx, 0, height * 0.38, width, height * 0.25);
		drawBasementBackGround(ctx, 0, height * 0.76, width, height * 0.24);

		Clouds.forEach((cloud) => {
			cloud.animate(ctx);
		});

		if (pressFlag && pressX - width / 2 < 0) {
			x = x - 2 <= 0 ? 0 : x + 2;
			pressType = 0;
		} else if (pressFlag && pressX - width / 2 >= 0) {
			x += 2;
			pressType = 1;
		}

		ctx.fillRect(x, 300, 50, 50);

		// bunny.draw(ctx, pressType, 200, 200, Math.abs(Math.floor(x / 2 / 20) % 8));
		bunny.egg(ctx);
		carrotManager.draw(ctx);
		index += 1;
	};

	const handlePressStartCanvas = (
		ctx: CanvasRenderingContext2D,
		x: number,
		y: number
	) => {
		pressFlag = true;
		pressX = x;
	};
	const handlePressCanvas = (
		ctx: CanvasRenderingContext2D,
		x: number,
		y: number
	) => {
		pressX = x;
	};
	const handlePressEndCanvas = (
		ctx: CanvasRenderingContext2D,
		x: number,
		y: number
	) => {
		pressFlag = false;
		pressX = x;
	};

	return (
		<Canvas
			canvasWidth={width}
			canvsHeight={height}
			onAnimation={handleCanvasAnimation}
			onPressStart={handlePressStartCanvas}
			onPress={handlePressCanvas}
			onPressEnd={handlePressEndCanvas}
		/>
	);
}

export default MainCanvas;
