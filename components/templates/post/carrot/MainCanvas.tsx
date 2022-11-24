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

	const bg = new Background({
		screenWidth: width,
		screenHeight: height,
	});

	const handleCanvasAnimation = (ctx: CanvasRenderingContext2D) => {
		ctx.clearRect(0, 0, width, height);
		ctx.beginPath();

		bg.draw(ctx, 0);
	};

	return (
		<Canvas
			canvasWidth={width}
			canvsHeight={height}
			onAnimation={handleCanvasAnimation}
		/>
	);
}

export default MainCanvas;
