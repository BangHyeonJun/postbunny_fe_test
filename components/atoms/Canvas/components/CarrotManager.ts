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
			img.src = `${location.origin}/갈색 토끼 스프라이트.png`;
			img.onload = () => {
				this.SpriteBlob = img;
			};
		};

		setSpriteBlob();
	}

	private setCarrots(carrotDatas: CarrotData[]) {
		this.carrots = [
			{
				nickname: "방1",
			},
			{
				nickname: "방2",
			},
			{
				nickname: "방3",
			},
			{
				nickname: "방4",
			},
			{
				nickname: "방5",
			},
			{
				nickname: "방6",
			},
		].map(
			(carrotData) =>
				new Carrot({
					screenWidth: this.screenWidth,
					screenHeight: this.screenHeight,
					...carrotData,
				})
		);
	}

	draw(ctx: CanvasRenderingContext2D) {
		if (this.SpriteBlob !== null) {
			const img = this.SpriteBlob;

			this.carrots.forEach((carrot, i) => {
				carrot.draw(
					ctx,
					img,
					this.index,
					this.screenHeight * 0.05 +
						Math.ceil(this.screenWidth * 0.4 * Math.floor(i / 2)),
					i % 2 === 0
						? this.screenHeight * 0.25 + (this.screenHeight * 0.13) / 2
						: this.screenHeight * 0.63 + (this.screenHeight * 0.13) / 2
				);
			});

			this.index += 1;
		}
	}
}
