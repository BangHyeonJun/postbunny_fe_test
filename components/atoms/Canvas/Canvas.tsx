import { MouseEvent, RefObject, TouchEvent } from "react";
import useCanvas from "./hooks/useCanvas";
import classNames from "classnames/bind";
import styles from "./Canvas.module.scss";

const cx = classNames.bind(styles);

interface CanvasProps {
	canvasWidth: number;
	canvsHeight: number;
	onAnimation: (ctx: CanvasRenderingContext2D) => void;
	onPressStart: (ctx: CanvasRenderingContext2D, x: number, y: number) => void;
	onPress: (ctx: CanvasRenderingContext2D, x: number, y: number) => void;
	onPressEnd: (ctx: CanvasRenderingContext2D, x: number, y: number) => void;
}

const Canvas: React.FC<CanvasProps> = ({
	canvasWidth,
	canvsHeight,
	onAnimation,
	onPressStart,
	onPress,
	onPressEnd,
}: CanvasProps) => {
	const {
		canvasRef,
		handleOnMouseUp,
		handleOnMouseMove,
		handleOnMouseDown,
		handleOnTouchStart,
		handleOnTouchMove,
		handleOnTouchEnd,
	} = useCanvas({
		width: canvasWidth,
		height: canvsHeight,
		animate: onAnimation,
		pressStart: onPressStart,
		press: onPress,
		pressEnd: onPressEnd,
	});
	// let index = 0;
	// let cloud1 = new Cloud({
	// 	posX: 300,
	// 	posY: 0,
	// 	screenWidth: width,
	// 	speed: 1,
	// });

	// let cloud2 = new Cloud({
	// 	posX: 800,
	// 	posY: 150,
	// 	screenWidth: width,
	// 	speed: 0.7,
	// 	scale: 1.3,
	// });

	// let cloud3 = new Cloud({
	// 	posX: 10,
	// 	posY: 70,
	// 	screenWidth: width,
	// 	speed: 0.9,
	// 	scale: 0.6,
	// });

	// let cloud4 = new Cloud({
	// 	posX: 100,
	// 	posY: 120,
	// 	screenWidth: width,
	// 	speed: 0.3,
	// 	scale: 0.8,
	// });
	// let egg = new Egg({
	// 	screenWidth: width,
	// 	screenHeight: height,
	// });

	// const fillBackground = (ctx: CanvasRenderingContext2D) => {
	// 	ctx.save();

	// 	ctx.fillStyle = "rgb(0, 180, 255)";
	// 	ctx.fillRect(0, 0, width, height * 0.25);

	// 	ctx.fillStyle = "rgb(179, 224, 97)";
	// 	ctx.fillRect(0, height * 0.25, width, height * 0.75);

	// 	ctx.restore();
	// };

	// const animate = (ctx: CanvasRenderingContext2D) => {
	// 	ctx.clearRect(0, 0, width, height);

	// 	fillBackground(ctx);

	// 	cloud1.animate(ctx);
	// 	cloud2.animate(ctx);
	// 	cloud3.animate(ctx);
	// 	cloud4.animate(ctx);

	// 	// egg.draw(ctx, 200, 200, index);
	// 	egg.stay(ctx);

	// 	function RoundRect(
	// 		ctx: CanvasRenderingContext2D,
	// 		x: number,
	// 		y: number,
	// 		radius: number,
	// 		width: number,
	// 		height: number
	// 	) {
	// 		ctx.save();

	// 		ctx.beginPath();
	// 		ctx.arc(
	// 			x + radius,
	// 			y + radius,
	// 			radius,
	// 			(Math.PI / 180) * 90,
	// 			(Math.PI / 180) * 270
	// 		);
	// 		ctx.fill();
	// 		ctx.stroke();

	// 		ctx.restore();
	// 	}

	// 	// ctx.beginPath();
	// 	// ctx.arc(15, 15, 15, 0, Math.PI * 2);
	// 	// ctx.fill();
	// 	// ctx.stroke();
	// 	RoundRect(ctx, 0, 0, 15, 70, 30);

	// 	ctx.beginPath();
	// 	ctx.fillStyle = "rgba(0, 0, 0, 1)";
	// 	ctx.fillRect(20, 30, 70, 30);

	// 	ctx.beginPath();
	// 	ctx.arc(19.4, 45, 14.5, (Math.PI / 180) * 90, (Math.PI / 180) * 270);
	// 	ctx.fill();
	// 	ctx.stroke();

	// 	ctx.beginPath();
	// 	ctx.arc(90, 45, 14.5, (Math.PI / 180) * 270, (Math.PI / 180) * 90);
	// 	ctx.fill();
	// 	ctx.stroke();

	// 	// drawCloud(ctx, "medium", 0, 150);
	// 	// drawCloud(ctx, "large", 0, 300);

	// 	// lightSource.drawRadialGradientBehindLightSource(ctx);
	// 	// lightSource.drawLightSource(ctx);

	// 	// const img = new Image();
	// 	// img.src = "http://localhost:3000/egg.png";

	// 	// img.onload = () => {
	// 	// 	ctx.drawImage(img, 300, 300);
	// 	// };

	// 	index += 1;
	// };

	return (
		<canvas
			className={cx("canvas")}
			ref={canvasRef}
			onMouseUp={handleOnMouseUp}
			onMouseMove={handleOnMouseMove}
			onMouseDown={handleOnMouseDown}
			onTouchStart={handleOnTouchStart}
			onTouchMove={handleOnTouchMove}
			onTouchEnd={handleOnTouchEnd}
			onContextMenu={(e) => e.preventDefault()}
		/>
	);
};

export default Canvas;
