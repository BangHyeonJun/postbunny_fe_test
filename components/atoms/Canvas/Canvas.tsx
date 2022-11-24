import { useEffect } from "react";
import useCanvas from "./hooks/useCanvas";
import classNames from "classnames/bind";
import styles from "./Canvas.module.scss";

const cx = classNames.bind(styles);

interface CanvasProps {
	canvasWidth: number;
	canvsHeight: number;
	onAnimation: (ctx: CanvasRenderingContext2D) => void;
	onPressStart?: (ctx: CanvasRenderingContext2D, x: number, y: number) => void;
	onPress?: (ctx: CanvasRenderingContext2D, x: number, y: number) => void;
	onPressEnd?: (ctx: CanvasRenderingContext2D, x: number, y: number) => void;
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
		pressStart: onPressStart ? onPressStart : () => {},
		press: onPress ? onPress : () => {},
		pressEnd: onPressEnd ? onPressEnd : () => {},
	});

	useEffect(() => {
		const MouseUpBridge = (e: MouseEvent) => {
			handleOnMouseUp(e, canvasRef.current as HTMLCanvasElement);
		};
		const MouseMoveBridge = (e: MouseEvent) => {
			handleOnMouseMove(e, canvasRef.current as HTMLCanvasElement);
		};
		const MouseDownBridge = (e: MouseEvent) => {
			handleOnMouseDown(e, canvasRef.current as HTMLCanvasElement);
		};
		const TouchStartBridge = (e: TouchEvent) => {
			handleOnTouchStart(e, canvasRef.current as HTMLCanvasElement);
		};
		const TouchMoveBridge = (e: TouchEvent) => {
			handleOnTouchMove(e, canvasRef.current as HTMLCanvasElement);
		};
		const TouchEndBridge = (e: TouchEvent) => {
			handleOnTouchEnd(e, canvasRef.current as HTMLCanvasElement);
		};

		if (canvasRef.current) {
			canvasRef.current.addEventListener("mouseup", MouseUpBridge, {
				passive: false,
			});
			canvasRef.current.addEventListener("mousemove", MouseMoveBridge, {
				passive: false,
			});
			canvasRef.current.addEventListener("mousedown", MouseDownBridge, {
				passive: false,
			});
			canvasRef.current.addEventListener("touchstart", TouchStartBridge, {
				passive: false,
			});
			canvasRef.current.addEventListener("touchmove", TouchMoveBridge, {
				passive: false,
			});
			canvasRef.current.addEventListener("touchend", TouchEndBridge, {
				passive: false,
			});
		}

		return () => {
			if (canvasRef.current) {
				canvasRef.current.removeEventListener("mouseup", MouseUpBridge);
				canvasRef.current.removeEventListener("mousemove", MouseMoveBridge);
				canvasRef.current.removeEventListener("mousedown", MouseDownBridge);
				canvasRef.current.removeEventListener("touchstart", TouchStartBridge);
				canvasRef.current.removeEventListener("touchmove", TouchMoveBridge);
				canvasRef.current.removeEventListener("touchend", TouchEndBridge);
			}
		};
	}, [
		canvasRef,
		handleOnMouseUp,
		handleOnMouseMove,
		handleOnMouseDown,
		handleOnTouchStart,
		handleOnTouchMove,
		handleOnTouchEnd,
	]);

	return (
		<canvas
			className={cx("canvas")}
			ref={canvasRef}
			onContextMenu={(e) => e.preventDefault()}
		/>
	);
};

export default Canvas;
