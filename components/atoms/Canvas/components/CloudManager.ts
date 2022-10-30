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
				posX: this.screenWidth * 0.9,
				posY: this.screenHeight * 0,
				screenWidth: this.screenWidth,
				speed: 0.6,
				scale: 0.8,
			}),
			new Cloud({
				posX: this.screenWidth * 0.7,
				posY: this.screenHeight * 0.1,
				screenWidth: this.screenWidth,
				speed: 0.4,
				scale: 0.6,
			}),
			new Cloud({
				posX: this.screenWidth * 0.5,
				posY: this.screenHeight * 0.2,
				screenWidth: this.screenWidth,
				speed: 0.1,
				scale: 0.8,
			}),
			new Cloud({
				posX: this.screenWidth * 0.3,
				posY: this.screenHeight * 0.03,
				screenWidth: this.screenWidth,
				speed: 0.4,
				scale: 1,
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
