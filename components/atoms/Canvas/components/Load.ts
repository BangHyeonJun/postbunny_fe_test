export function drawLoadBackGround(
	ctx: CanvasRenderingContext2D,
	x: number,
	y: number,
	width: number,
	height: number
) {
	ctx.save();

	ctx.beginPath();
	ctx.fillStyle = "rgb(0, 0, 0)";
	ctx.lineWidth = 3;
	ctx.strokeRect(x, y, width, height);

	ctx.fillStyle = "rgb(234, 187, 118)";
	ctx.fillRect(x, y, width, height);

	ctx.restore();
}
