import React, { ReactElement, useState } from "react";
import ReactDom from "react-dom";
import ToastComponent from "./components/ToastComponent";

let container: null | HTMLDivElement = null;

interface ToastProps {
	text: string;
	duration?: number;
}

function Toast({ text, duration = 2000 }: ToastProps) {
	if (container === null) {
		container = document.createElement("div");
		container.id = "__snackbar";
		document.body.appendChild(container);
	}

	const div = document.createElement("div");
	container.appendChild(div);

	const removeNotication = () => {
		ReactDom.unmountComponentAtNode(div);
		if (div?.parentNode) {
			div.parentNode.removeChild(div);
		}
	};

	const handleHideToast = () => {
		setTimeout(() => {
			removeNotication();
		}, 1000);
	};

	ReactDom.render(
		<ToastComponent text={text} duration={duration} onHide={handleHideToast} />,
		div
	);
}

export default Toast;
