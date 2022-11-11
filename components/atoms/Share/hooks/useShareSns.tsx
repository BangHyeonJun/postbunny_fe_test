import React, { KeyboardEvent, MouseEvent, useState } from "react";

function useShareSns(initialProps: boolean = false) {
	const [isOpen, setIsOpen] = useState(initialProps);

	const hideShareSns = () => {
		setIsOpen(false);
	};

	const showShareSns = () => {
		setIsOpen(true);
	};
	const toggleShareSns = () => {
		setIsOpen((old) => !old);
	};

	return {
		isOpenShareSns: isOpen,
		hide: hideShareSns,
		show: showShareSns,
		toggle: toggleShareSns,
	};
}

export default useShareSns;
