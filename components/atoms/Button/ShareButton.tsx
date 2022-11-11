import Image from "next/image";
import { Button as MUIButton, styled } from "@mui/material";
import shareIco from "./assets/share.png";
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

function HomeButton({ width, height, onClick }: ShareButtonProps) {
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
			aria-label="공유하기"
			onClick={handleClickButton}
		>
			<Image src={shareIco} width={24} height={24} alt="공유하기" />
		</Button>
	);
}

export default HomeButton;
