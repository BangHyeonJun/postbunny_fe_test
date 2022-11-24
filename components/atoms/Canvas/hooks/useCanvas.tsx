import { RefObject, useEffect, useMemo, useRef, useState } from "react";

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

	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas?.getContext("2d");

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

		let totalElapsed: number;
		const requestAnimation = (fps: number) => {
			let fpsInterval = 1000 / fps;
			let renderCount = 0;
			let start: number;
			let then: number;

			const cb = (timestamp: number) => {
				if (start === undefined && then === undefined) {
					start = window.performance.now();
					then = window.performance.now();
				}
				totalElapsed = window.performance.now() - start;

				const elapsed = timestamp - then;
				if (elapsed >= fpsInterval) {
					// draw
					then = timestamp - (elapsed % fpsInterval);
					renderCount++;
					if (ctx) animate(ctx);
				}
				requestId = window.requestAnimationFrame(cb);
			};
			return cb;
		};

		let requestId: number;
		const initAnimate = (cb: (timestamp: number) => void) => {
			requestId = window.requestAnimationFrame(cb);
		};

		initAnimate(requestAnimation(60));

		return () => {
			console.log("하이");
			window.cancelAnimationFrame(requestId);
		};
	}, [width, height, animate]);

	const handleOnMouseDown = (
		e: MouseEvent,
		canvasRefCurrent: HTMLCanvasElement
	) => {
		const ctx = canvasRefCurrent.getContext("2d");

		if (ctx) pressStart(ctx, e.clientX, e.clientY);
	};
	const handleOnMouseMove = (
		e: MouseEvent,
		canvasRefCurrent: HTMLCanvasElement
	) => {
		const ctx = canvasRefCurrent.getContext("2d");

		if (ctx) press(ctx, e.clientX, e.clientY);
	};
	const handleOnMouseUp = (
		e: MouseEvent,
		canvasRefCurrent: HTMLCanvasElement
	) => {
		const ctx = canvasRefCurrent.getContext("2d");

		if (ctx) pressEnd(ctx, e.clientX, e.clientY);
	};
	const handleOnTouchStart = (
		e: TouchEvent,
		canvasRefCurrent: HTMLCanvasElement
	) => {
		e.preventDefault();

		const ctx = canvasRefCurrent.getContext("2d");

		if (ctx) pressStart(ctx, e.touches[0].clientX, e.touches[0].clientY);
	};
	const handleOnTouchMove = (
		e: TouchEvent,
		canvasRefCurrent: HTMLCanvasElement
	) => {
		const ctx = canvasRefCurrent.getContext("2d");

		if (ctx) press(ctx, e.touches[0].clientX, e.touches[0].clientY);
	};
	const handleOnTouchEnd = (
		e: TouchEvent,
		canvasRefCurrent: HTMLCanvasElement
	) => {
		e.preventDefault();
		const ctx = canvasRefCurrent.getContext("2d");

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
