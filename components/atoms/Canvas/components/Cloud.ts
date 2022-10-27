interface ICloud {
	screenWidth: number;
	posX: number;
	posY: number;
	scale?: number;
	speed?: number;
}

interface IDrawOption {
	x: number;
	y: number;
}
export class Cloud {
	private index: number = 0;
	private x: number = 0;
	private y: number = 0;
	private scale: number = 1;
	private maxX: number = 0;
	private minX: number = 0;
	speed: number = 0;

	/**
	 * 구름을 그려주는 클래스
	 */
	constructor(initialProps: ICloud) {
		this.x = initialProps.posX % initialProps.screenWidth;
		this.y = initialProps.posY;

		this.scale = initialProps?.scale ?? 1;
		this.speed = initialProps?.speed ?? 0;
		this.minX = -(Math.floor(Math.random() * 50) + 180 * 1.2);
		this.maxX =
			Math.floor(Math.random() * 50) + initialProps.screenWidth + 180 * 1.2;
	}

	/**
	 * 구름을 그려주는 메소드
	 */
	init(ctx: CanvasRenderingContext2D) {
		this.index = 0;
		this.drawCloudShadow(ctx);
		this.drawCloud(ctx);
	}

	animate(ctx: CanvasRenderingContext2D) {
		this.drawCloudShadow(ctx);
		this.drawCloud(ctx);
		this.index += 1;
	}

	/**
	 * 구름을 그려주는 메소드
	 */
	private drawCloud(ctx: CanvasRenderingContext2D) {
		ctx.save();

		// ctx.setTransform(1, 0, 0, 1, 0, 0);
		ctx.translate(
			((this.x + this.index * this.speed) % (this.maxX + Math.abs(this.minX))) +
				this.minX,
			this.y
		);
		ctx.scale(this.scale, this.scale);

		ctx.strokeStyle = "rgb(255, 255, 255)";
		ctx.fillStyle = "rgb(255, 255, 255)";

		// 사각형
		ctx.beginPath();
		ctx.fillRect(-50, -5, 100, 45);
		ctx.stroke();

		// 좌측 원
		ctx.beginPath();
		ctx.arc(-49, 13.4, 26, 0, Math.PI * 2);
		ctx.fill();
		ctx.stroke();

		// 좌측 위 원
		ctx.beginPath();
		ctx.arc(-20, -3, 26, 0, Math.PI * 2);
		ctx.fill();
		ctx.stroke();

		// 위 원
		ctx.beginPath();
		ctx.arc(23, -10, 30, 0, Math.PI * 2);
		ctx.fill();
		ctx.stroke();

		// 우측 원
		ctx.beginPath();
		ctx.arc(49.3, 14.5, 25, 0, Math.PI * 2);
		ctx.fill();
		ctx.stroke();

		ctx.restore();
	}

	/**
	 * 구름 쉐도우를 그려주는 메소드
	 */
	private drawCloudShadow(ctx: CanvasRenderingContext2D) {
		ctx.save();

		ctx.strokeStyle = "rgba(0, 0, 0, 0.1)";
		ctx.fillStyle = "rgba(0, 0, 0, 0.1)";

		ctx.shadowColor = "rgba(0, 0, 0, 1)";
		ctx.shadowBlur = 15;

		// ctx.setTransform(1, 0, 0, 1, 0, 0);
		ctx.translate(
			((this.x + this.index * this.speed) % (this.maxX + Math.abs(this.minX))) +
				this.minX,
			this.y
		);
		ctx.scale(this.scale, this.scale);

		// 사각형
		ctx.beginPath();
		ctx.fillRect(-50, -5, 100, 45);
		ctx.stroke();

		// 우측 원
		ctx.beginPath();
		ctx.arc(49.3, 14.5, 25, 0, Math.PI * 2);
		ctx.fill();
		ctx.stroke();

		ctx.restore();
	}
}
