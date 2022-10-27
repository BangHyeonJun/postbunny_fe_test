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
