import { duration, Snackbar } from "@mui/material";
import { useEffect, useMemo, useState } from "react";

interface ToastComponentProps {
	text: string;
	duration: number;
	onHide?: () => void;
}

function ToastComponent({ text, duration, onHide }: ToastComponentProps) {
	const [sss, setSSS] = useState(true);

	setTimeout(() => {
		setSSS(false);
		if (onHide) onHide();
	}, duration);

	return (
		<Snackbar
			anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
			open={sss}
			message={text}
			key={"bottom-center"}
		/>
	);
}

export default ToastComponent;
