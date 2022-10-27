import { Cloud } from "./Cloud";
import type { Cloud as CloudType } from "./Cloud";

interface CloudManagerProps {
	screenWidth: number;
	screenHeight: number;
}

export class CloudManager {
	private index: number = 0;
	private screenWidth = 0;
	private screenHeight = 0;

	speed: number = 0;

	private clouds: CloudType[] = [];

	/**
	 * 구름을 그려주는 클래스
	 */
	constructor(initialProps: CloudManagerProps) {
		this.screenWidth = initialProps.screenWidth;
		this.screenHeight = initialProps.screenHeight;

		this.initCloud();
	}

	private initCloud() {
		this.clouds = [
			new Cloud({
				posX: 300,
				posY: this.screenHeight * 0,
				screenWidth: this.screenWidth,
				speed: 0.6,
			}),
			new Cloud({
				posX: 800,
				posY: this.screenHeight * 0.1,
				screenWidth: this.screenWidth,
				speed: 0.4,
				scale: 1.3,
			}),
			new Cloud({
				posX: 10,
				posY: this.screenHeight * 0.2,
				screenWidth: this.screenWidth,
				speed: 0.1,
				scale: 0.6,
			}),
			new Cloud({
				posX: 100,
				posY: this.screenHeight * 0.15,
				screenWidth: this.screenWidth,
				speed: 0.2,
				scale: 0.8,
			}),
		];
	}

	animate(ctx: CanvasRenderingContext2D) {
		this.clouds.forEach((cloud) => {
			cloud.animate(ctx, this.index);
		});
		this.index += 1;
	}
}
