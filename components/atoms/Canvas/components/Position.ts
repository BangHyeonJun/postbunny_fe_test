interface PositionProps {
	screenWidth: number;
	screenHeight: number;
}

const POSITION_TYPE = {
	STAY: "STAY",
	LEFT: "LEFT",
	RIGHT: "RIGHT",
} as const;
type POSITION_TYPE = typeof POSITION_TYPE[keyof typeof POSITION_TYPE];

export class Position {
	private screenWidth = 0;
	private screenHeight = 0;
	private _viewportPositionX = 0;
	private _posX = 0;
	posType: POSITION_TYPE = "STAY";

	private tempTimeoutId: NodeJS.Timeout | null = null;

	constructor(initialProps: PositionProps) {
		this.screenWidth = initialProps.screenWidth;
		this.screenHeight = initialProps.screenHeight;
	}

	set viewportPositionX(x: number) {
		if (this.screenWidth / 2 >= x) {
			this.posType = "LEFT";
		} else {
			this.posType = "RIGHT";
		}

		this._viewportPositionX = x;
	}
}
