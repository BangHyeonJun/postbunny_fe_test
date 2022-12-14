import { useEffect, useState } from "react";

const useFullSize = () => {
	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(0);

	useEffect(() => {
		const setClientSize = () => {
			if (window !== undefined) {
				document.documentElement.style.height = `${window.innerHeight}px`;
				document.body.style.height = `${window.innerHeight}px`;
			}
			document.body.style.overflow = "hidden";
			document.body.style.backgroundColor = "#ffffff";

			setWidth(document.body.clientWidth);
			setHeight(document.body.clientHeight);
		};
		setClientSize();

		const handleOrientationChange = () => {
			setTimeout(() => {
				setClientSize();
			}, 200);
		};

		window.addEventListener("resize", setClientSize);
		window.addEventListener("orientationchange", handleOrientationChange);

		return () => {
			document.documentElement.style.height = "";
			document.body.style.height = "";
			document.body.style.overflow = "";
			document.body.style.backgroundColor = "";

			window.removeEventListener("resize", setClientSize);
			window.removeEventListener("orientationchange", setClientSize);
		};
	}, []);

	return { width, height };
};

export default useFullSize;
