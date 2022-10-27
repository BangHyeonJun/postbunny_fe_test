export function getPositionType(screenWidth: number, posX: number) {
	let result = "";

	if (screenWidth / 2 >= posX) {
		result = "LEFT";
	} else {
		result = "RIGHT";
	}

	return result;
}
