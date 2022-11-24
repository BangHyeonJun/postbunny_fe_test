import { Carrot } from "./Carrot";
import type { Carrot as CarrotType } from "./Carrot";

interface CarrotData {}

interface CarrotManagerProps {
	screenWidth: number;
	screenHeight: number;
	carrotDatas: CarrotType[];
}

export class CarrotManager {
	private index: number = 0;
	private SpriteBlob: HTMLImageElement | null = null;
	private screenWidth = 0;
	private screenHeight = 0;
	private carrots: CarrotType[] = [];

	constructor(initialProps: CarrotManagerProps) {
		this.screenWidth = initialProps.screenWidth;
		this.screenHeight = initialProps.screenHeight;

		this.preloadImg();
		this.setCarrots([]);
	}

	private preloadImg() {
		let timeOutId = null;

		const setSpriteBlob = () => {
			if (typeof window === "undefined") {
				timeOutId = setTimeout(() => setSpriteBlob());
				return;
			}

			const img = new Image();
			img.src = `${location.origin}/당근.png`;
			img.onload = () => {
				this.SpriteBlob = img;
			};
		};

		setSpriteBlob();
	}

	private setCarrots(carrotDatas: CarrotData[]) {
		this.carrots = [
			{
				nickname: "방현준",
				type: 0,
			},
		].map((carrotData, i) => {
			// const px =
			// 	this.screenHeight * 0.07 +
			// 	Math.ceil(this.screenWidth * 0.6 * Math.floor(i / 2));
			const px = 0;
			const py =
				i % 2 === 0
					? this.screenHeight * 0.25 + (this.screenHeight * 0.13) / 2
					: this.screenHeight * 0.63 + (this.screenHeight * 0.13) / 2;

			return new Carrot({
				screenWidth: this.screenWidth,
				screenHeight: this.screenHeight,
				px: px,
				py: py,
				...carrotData,
			});
		});
	}

	draw(ctx: CanvasRenderingContext2D, moveX: number) {
		if (this.SpriteBlob !== null) {
			const img = this.SpriteBlob;

			// console.log(moveX, this.carrots[0].carrotWidth);

			this.carrots.forEach((carrot, i) => {
				if (
					moveX - this.screenWidth <= carrot.px &&
					carrot.px <= this.screenWidth + moveX
				) {
					carrot.draw(ctx, img, this.index, moveX);
				}
			});

			this.index += 1;
		}
	}
}
