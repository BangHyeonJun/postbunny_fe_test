import { atom } from "recoil";

const postState = atom({
	key: "post_postState",
	default: {
		isBunnyCompleted: false,
		bunnyType: 0,
		isCarrotCompleted: false,
		carrotType: 0,
		isPostCompleted: false,
		postContnet: "",
		postTo: "",
		postFrom: "",
		postColorType: "#FEBE8C",
	},
});

export { postState };
