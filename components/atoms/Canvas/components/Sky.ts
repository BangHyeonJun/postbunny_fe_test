export function drawSkyBackGround(
	ctx: CanvasRenderingContext2D,
	x: number,
	y: number,
	width: number,
	height: number
) {
	ctx.save();

	ctx.beginPath();
	ctx.fillStyle = "rgb(0, 180, 255)";
	ctx.fillRect(0, 0, width, height);

	ctx.restore();
}
