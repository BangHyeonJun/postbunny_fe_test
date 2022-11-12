import Image from "next/image";
import { Button as MUIButton, styled, Typography } from "@mui/material";
import backIco from "./assets/back.png";
import { MouseEvent } from "react";

interface ShareButtonProps {
	width?: number | string;
	height?: number | string;
	onClick?: (e: MouseEvent) => void;
}

const Button = styled(MUIButton)(({ theme }) => ({
	"&.MuiButtonBase-root": {
		borderRadius: 6,
		minWidth: "100%",
	},
}));

function ShareButton({ width, height, onClick }: ShareButtonProps) {
	const handleClickButton = (e: MouseEvent) => {
		if (onClick) onClick(e);
	};
	return (
		<Button
			color={"buttonColor"}
			variant="contained"
			sx={{
				width: width || "100%",
				height: height || "100%",
				border: 0,
			}}
			aria-label="뒤로가기"
			onClick={handleClickButton}
		>
			<Image src={backIco} width={24} height={24} alt="뒤로가기" />
		</Button>
	);
}

export default ShareButton;
