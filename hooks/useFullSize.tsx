import { useEffect, useState } from "react";

const useFullSize = () => {
	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(0);

	useEffect(() => {
		const setClientSize = () => {
			document.documentElement.style.height = "100%";
			document.body.style.height = "100%";
			document.body.style.overflow = "hidden";
			document.body.style.backgroundColor = "#ffffff";

			setWidth(document.body.clientWidth);
			setHeight(document.body.clientHeight);
		};
		setClientSize();

		window.addEventListener("resize", setClientSize);

		return () => {
			document.documentElement.style.height = "";
			document.body.style.height = "";
			document.body.style.overflow = "";
			document.body.style.backgroundColor = "";

			window.removeEventListener("resize", setClientSize);
		};
	}, []);

	return { width, height };
};

export default useFullSize;
