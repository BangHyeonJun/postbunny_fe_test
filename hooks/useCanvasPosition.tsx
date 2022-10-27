import { useCallback, useEffect, useState } from "react";

interface Props {
	x: number;
	y: number;
}

const POSITION_TYPE = {
	STAY: "STAY",
	LEFT: "LEFT",
	RIGHT: "RIGHT",
} as const;
type POSITION_TYPE = typeof POSITION_TYPE[keyof typeof POSITION_TYPE];

function useCanvasPosition(initialProps: Props) {
	const [posX, setPosX] = useState(initialProps.x);
	const [posY, setPosY] = useState(initialProps.y);
	const [posXType, setPosXType] = useState<POSITION_TYPE>("STAY");

	useEffect(() => {
		setPosX(initialProps.x);
	}, [initialProps.x]);

	useEffect(() => {
		setPosY(initialProps.y);
	}, [initialProps.y]);

	let timeoutID = null;
	const handlePress = (x: number, y: number) => {
		if (initialProps.x >= x) {
			setPosXType("LEFT");
		} else {
			setPosXType("RIGHT");
		}

		// timeoutID = setTimeout(() => {
		// 	setPosXType("STAY");
		// }, 2000);
	};

	return {
		posX,
		posY,
		posXType,
		handlePressCanvasPosition: handlePress,
	};
}

export default useCanvasPosition;
