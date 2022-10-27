export function drawCarrotBackGround(
	ctx: CanvasRenderingContext2D,
	x: number,
	y: number,
	width: number,
	height: number,
	showShadow: boolean = false
) {
	ctx.save();

	ctx.beginPath();
	if (showShadow) {
		ctx.shadowColor = "rgba(0, 0, 0, 0.25)";
		ctx.shadowBlur = 20;
	}

	// ctx.fillStyle = "rgb(0, 0, 0)";
	// ctx.lineWidth = 2;
	// ctx.strokeRect(x, y, width, height);

	ctx.fillStyle = "rgb(179, 224, 97)";
	ctx.fillRect(x, y, width, height);

	ctx.restore();
}
