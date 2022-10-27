import { useEffect, useState } from "react";

const useFullSize = () => {
	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(0);

	useEffect(() => {
		const setClientSize = () => {
			setWidth(document.body.clientWidth);
			setHeight(document.body.clientHeight);
		};

		setClientSize();

		window.addEventListener("resize", setClientSize);

		return () => {
			window.removeEventListener("resize", setClientSize);
		};
	}, []);

	return { width, height };
};

export default useFullSize;
