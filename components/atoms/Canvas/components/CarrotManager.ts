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
				nickname: "방현준",
				type: 0,
			},
			{
				nickname: "방현준 입니다.",
				type: 1,
			},
			{
				nickname: "방현준 입니다. 알겠나요?",
				type: 2,
			},
			{
				nickname: "방현준 입",
				type: 3,
			},
			{
				nickname: "방바라방방방",
				type: 4,
			},
			{
				nickname: "방현준",
				type: 0,
			},
			{
				nickname: "방현준 입니다.",
				type: 1,
			},
			{
				nickname: "방현준 입니다. 알겠나요?",
				type: 2,
			},
			{
				nickname: "방현준 입",
				type: 3,
			},
			{
				nickname: "방바라방방방",
				type: 4,
			},
			{
				nickname: "방현준",
				type: 0,
			},
			{
				nickname: "방현준 입니다.",
				type: 1,
			},
			{
				nickname: "방현준 입니다. 알겠나요?",
				type: 2,
			},
			{
				nickname: "방현준 입",
				type: 3,
			},
			{
				nickname: "방바라방방방",
				type: 4,
			},
			{
				nickname: "방현준",
				type: 0,
			},
			{
				nickname: "방현준 입니다.",
				type: 1,
			},
			{
				nickname: "방현준 입니다. 알겠나요?",
				type: 2,
			},
			{
				nickname: "방현준 입",
				type: 3,
			},
			{
				nickname: "방바라방방방",
				type: 4,
			},
			{
				nickname: "방현준",
				type: 0,
			},
			{
				nickname: "방현준 입니다.",
				type: 1,
			},
			{
				nickname: "방현준 입니다. 알겠나요?",
				type: 2,
			},
			{
				nickname: "방현준 입",
				type: 3,
			},
			{
				nickname: "방바라방방방",
				type: 4,
			},
			{
				nickname: "방현준",
				type: 0,
			},
			{
				nickname: "방현준 입니다.",
				type: 1,
			},
			{
				nickname: "방현준 입니다. 알겠나요?",
				type: 2,
			},
			{
				nickname: "방현준 입",
				type: 3,
			},
			{
				nickname: "방바라방방방",
				type: 4,
			},
			{
				nickname: "방현준",
				type: 0,
			},
			{
				nickname: "방현준 입니다.",
				type: 1,
			},
			{
				nickname: "방현준 입니다. 알겠나요?",
				type: 2,
			},
			{
				nickname: "방현준 입",
				type: 3,
			},
			{
				nickname: "방바라방방방",
				type: 4,
			},
			{
				nickname: "방현준",
				type: 0,
			},
			{
				nickname: "방현준 입니다.",
				type: 1,
			},
			{
				nickname: "방현준 입니다. 알겠나요?",
				type: 2,
			},
			{
				nickname: "방현준 입",
				type: 3,
			},
			{
				nickname: "방바라방방방",
				type: 4,
			},
			{
				nickname: "방현준",
				type: 0,
			},
			{
				nickname: "방현준 입니다.",
				type: 1,
			},
			{
				nickname: "방현준 입니다. 알겠나요?",
				type: 2,
			},
			{
				nickname: "방현준 입",
				type: 3,
			},
			{
				nickname: "방바라방방방",
				type: 4,
			},
			{
				nickname: "방현준",
				type: 0,
			},
			{
				nickname: "방현준 입니다.",
				type: 1,
			},
			{
				nickname: "방현준 입니다. 알겠나요?",
				type: 2,
			},
			{
				nickname: "방현준 입",
				type: 3,
			},
			{
				nickname: "방바라방방방",
				type: 4,
			},
			{
				nickname: "방현준",
				type: 0,
			},
			{
				nickname: "방현준 입니다.",
				type: 1,
			},
			{
				nickname: "방현준 입니다. 알겠나요?",
				type: 2,
			},
			{
				nickname: "방현준 입",
				type: 3,
			},
			{
				nickname: "방바라방방방",
				type: 4,
			},
			{
				nickname: "방현준",
				type: 0,
			},
			{
				nickname: "방현준 입니다.",
				type: 1,
			},
			{
				nickname: "방현준 입니다. 알겠나요?",
				type: 2,
			},
			{
				nickname: "방현준 입",
				type: 3,
			},
			{
				nickname: "방바라방방방",
				type: 4,
			},
			{
				nickname: "방현준",
				type: 0,
			},
			{
				nickname: "방현준 입니다.",
				type: 1,
			},
			{
				nickname: "방현준 입니다. 알겠나요?",
				type: 2,
			},
			{
				nickname: "방현준 입",
				type: 3,
			},
			{
				nickname: "방바라방방방",
				type: 4,
			},
			{
				nickname: "방현준",
				type: 0,
			},
			{
				nickname: "방현준 입니다.",
				type: 1,
			},
			{
				nickname: "방현준 입니다. 알겠나요?",
				type: 2,
			},
			{
				nickname: "방현준 입",
				type: 3,
			},
			{
				nickname: "방바라방방방",
				type: 4,
			},
			{
				nickname: "방현준",
				type: 0,
			},
			{
				nickname: "방현준 입니다.",
				type: 1,
			},
			{
				nickname: "방현준 입니다. 알겠나요?",
				type: 2,
			},
			{
				nickname: "방현준 입",
				type: 3,
			},
			{
				nickname: "방바라방방방",
				type: 4,
			},
			{
				nickname: "방현준",
				type: 0,
			},
			{
				nickname: "방현준 입니다.",
				type: 1,
			},
			{
				nickname: "방현준 입니다. 알겠나요?",
				type: 2,
			},
			{
				nickname: "방현준 입",
				type: 3,
			},
			{
				nickname: "방바라방방방",
				type: 4,
			},
			{
				nickname: "방현준",
				type: 0,
			},
			{
				nickname: "방현준 입니다.",
				type: 1,
			},
			{
				nickname: "방현준 입니다. 알겠나요?",
				type: 2,
			},
			{
				nickname: "방현준 입",
				type: 3,
			},
			{
				nickname: "방바라방방방",
				type: 4,
			},
			{
				nickname: "방현준",
				type: 0,
			},
			{
				nickname: "방현준 입니다.",
				type: 1,
			},
			{
				nickname: "방현준 입니다. 알겠나요?",
				type: 2,
			},
			{
				nickname: "방현준 입",
				type: 3,
			},
			{
				nickname: "방바라방방방",
				type: 4,
			},
			{
				nickname: "방현준",
				type: 0,
			},
			{
				nickname: "방현준 입니다.",
				type: 1,
			},
			{
				nickname: "방현준 입니다. 알겠나요?",
				type: 2,
			},
			{
				nickname: "방현준 입",
				type: 3,
			},
			{
				nickname: "방바라방방방",
				type: 4,
			},
			{
				nickname: "방현준",
				type: 0,
			},
			{
				nickname: "방현준 입니다.",
				type: 1,
			},
			{
				nickname: "방현준 입니다. 알겠나요?",
				type: 2,
			},
			{
				nickname: "방현준 입",
				type: 3,
			},
			{
				nickname: "방바라방방방",
				type: 4,
			},
		].map((carrotData, i) => {
			const px =
				this.screenHeight * 0.07 +
				Math.ceil(this.screenWidth * 0.6 * Math.floor(i / 2));
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
