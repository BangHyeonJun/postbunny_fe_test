import {
	RefObject,
	useEffect,
	MouseEvent,
	TouchEvent,
	useMemo,
	useRef,
	useState,
} from "react";

interface useCanvasProps {
	width: number;
	height: number;
	animate: (ctx: CanvasRenderingContext2D) => void;
	pressStart: (ctx: CanvasRenderingContext2D, x: number, y: number) => void;
	press: (ctx: CanvasRenderingContext2D, x: number, y: number) => void;
	pressEnd: (ctx: CanvasRenderingContext2D, x: number, y: number) => void;
}

const useCanvas = ({
	width,
	height,
	animate,
	pressStart,
	press,
	pressEnd,
}: useCanvasProps) => {
	const canvasRef: RefObject<HTMLCanvasElement> =
		useRef<HTMLCanvasElement>(null);
	const [ctx, setCtx] = useState<CanvasRenderingContext2D | null | undefined>(
		null
	);

	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas?.getContext("2d");

		setCtx(ctx);

		const setCanvas = () => {
			const devicePixelRatio = window.devicePixelRatio ?? 1;

			if (canvas && ctx) {
				canvas.style.width = width + "px";
				canvas.style.height = height + "px";

				canvas.width = width * devicePixelRatio;
				canvas.height = height * devicePixelRatio;

				ctx.scale(devicePixelRatio, devicePixelRatio);
			}
		};
		setCanvas();

		let requestId: number;
		const requestAnimation = () => {
			requestId = window.requestAnimationFrame(requestAnimation);

			if (ctx) animate(ctx);
		};
		requestAnimation();

		return () => {
			window.cancelAnimationFrame(requestId);
		};
	}, [width, height, animate]);

	const handleOnMouseDown = (e: MouseEvent) => {
		if (ctx) pressStart(ctx, e.clientX, e.clientY);
	};
	const handleOnMouseMove = (e: MouseEvent) => {
		if (ctx) press(ctx, e.clientX, e.clientY);
	};
	const handleOnMouseUp = (e: MouseEvent) => {
		if (ctx) pressEnd(ctx, e.clientX, e.clientY);
	};
	const handleOnTouchStart = (e: TouchEvent) => {
		if (ctx) pressStart(ctx, e.touches[0].clientX, e.touches[0].clientY);
	};
	const handleOnTouchMove = (e: TouchEvent) => {
		if (ctx) press(ctx, e.touches[0].clientX, e.touches[0].clientY);
	};
	const handleOnTouchEnd = (e: TouchEvent) => {
		e.preventDefault();
		if (ctx)
			pressEnd(ctx, e.changedTouches[0].clientX, e.changedTouches[0].clientY);
	};

	return {
		canvasRef,
		handleOnMouseUp,
		handleOnMouseMove,
		handleOnMouseDown,
		handleOnTouchStart,
		handleOnTouchMove,
		handleOnTouchEnd,
	};
};

export default useCanvas;
