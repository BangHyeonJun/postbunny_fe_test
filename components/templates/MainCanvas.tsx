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
	CloudManager,
	Position,
	Background,
} from "@/atoms/Canvas";
import useCanvasPosition from "@/hooks/useCanvasPosition";
import useFullSize from "@/hooks/useFullSize";
import { getPositionType } from "@/lib/utils/position";

function MainCanvas() {
	const { width, height } = useFullSize();
	// const position = new Position({
	// 	screenWidth: width / 2,
	// 	screenHeight: height / 2,
	// });
	const bunny = new Bunny({
		screenWidth: width,
		screenHeight: height,
		bunnyType: "beige",
	});

	const carrotManager = new CarrotManager({
		screenWidth: width,
		screenHeight: height,
		carrotDatas: [],
	});

	const bg = new Background({
		screenWidth: width,
		screenHeight: height,
	});
	let pressFlag = false;
	let pressX = 0;
	let pressType = 0; // 0 : 왼쪽, 1 : 오른쪽, 2
	let curX = 0;
	let posX = 0;

	const handleCanvasAnimation = (ctx: CanvasRenderingContext2D) => {
		ctx.clearRect(0, 0, width, height);
		ctx.beginPath();

		let type = "STAY";

		if (pressFlag === true) {
			if (getPositionType(width, curX) === "LEFT") {
				posX -= 4;
				type = "LEFT";
			} else if (getPositionType(width, curX) === "RIGHT") {
				posX += 4;
				type = "RIGHT";
			}
		}

		bg.draw(ctx, posX);
		carrotManager.draw(ctx, posX);
		bunny.draw(ctx, "RIGHT");

		// 테스트
		ctx.fillRect(0, 0, 100, 100);

		// bunny.draw(ctx, pressType, 200, 200, Math.abs(Math.floor(x / 2 / 20) % 8));
		// cloudManager.animate(ctx);
		// carrotManager.draw(ctx, posX);
		// drawBackGround(ctx, posX);
	};

	const drawBackGround = (ctx: CanvasRenderingContext2D, posX: number) => {
		// drawSkyBackGround(ctx, 0, 0, width, height * 0.25);
		// drawCarrotBackGround(ctx, 0, height * 0.25, width, height * 0.13, true);
		// drawCarrotBackGround(ctx, 0, height * 0.63, width, height * 0.13, true);
		// drawLoadBackGround(ctx, 0, height * 0.38, width, height * 0.25);
		// drawBasementBackGround(ctx, 0, height * 0.76, width, height * 0.24);
	};

	const handlePressStartCanvas = (
		ctx: CanvasRenderingContext2D,
		x: number,
		y: number
	) => {
		pressFlag = true;
		curX = x;
	};

	const handlePressCanvas = (
		ctx: CanvasRenderingContext2D,
		x: number,
		y: number
	) => {
		if (pressFlag) {
			curX = x;
		}
	};

	const handlePressEndCanvas = (
		ctx: CanvasRenderingContext2D,
		x: number,
		y: number
	) => {
		pressFlag = false;
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
