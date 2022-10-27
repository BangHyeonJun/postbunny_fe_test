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
		if (typeof window !== "undefined") {
			const img = new Image();
			img.src = "http://localhost:3000/갈색 토끼 스프라이트.png";
			img.onload = () => {
				this.SpriteBlob = img;
			};
		}
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
			console.log("이미지 들어오는거지?");

			const img = this.SpriteBlob;

			this.carrots.forEach((carrot, i) => {
				if (i % 2 === 0) {
					// console.log(
					// 	Math.ceil(
					// 		this.screenWidth * 0.3 * (Math.floor(i / 2) + 1)
					// 		// this.screenWidth * 0.3 + this.screenWidth * 0.3 * Math.floor(i / 2)
					// 	)
					// );
				}

				carrot.draw(
					ctx,
					img,
					this.index,
					// Math.ceil(this.screenWidth * 0.3 * (Math.floor(i / 2) + 1)),
					30 + Math.ceil(this.screenWidth * 0.4 * Math.floor(i / 2)),
					i % 2 === 0
						? this.screenHeight * 0.25 + (this.screenHeight * 0.13) / 2
						: this.screenHeight * 0.63 + (this.screenHeight * 0.13) / 2
				);
			});

			this.index += 1;
		}
	}
}
