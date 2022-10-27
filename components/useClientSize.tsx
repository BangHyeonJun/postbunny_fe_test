import React, { RefObject, useEffect, useState } from "react";

const useClientSize = (ref: RefObject<HTMLElement>) => {
	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(0);

	useEffect(() => {
		const setClientSize = () => {
			if (ref.current) {
				setWidth(ref.current.clientWidth);
				setHeight(ref.current.clientHeight);
			}
		};

		setClientSize();

		window.addEventListener("resize", setClientSize);

		return () => {
			window.removeEventListener("resize", setClientSize);
		};
	}, []);

	return { width, height };
};

export default useClientSize;
