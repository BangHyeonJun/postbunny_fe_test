import { Button as MUIButton, styled, Typography } from "@mui/material";
import Image from "next/image";
import carrotIco from "./assets/carrot.png";
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

function CarrotButton({ width, height, onClick }: ShareButtonProps) {
	const handleClickButton = (e: MouseEvent) => {
		if (onClick) onClick(e);
	};

	return (
		<Button
			color={"buttonColor"}
			variant="contained"
			startIcon={
				<Image
					src={carrotIco}
					width={24}
					height={24}
					alt={"당근 보내기"}
					style={{ marginTop: "2px" }}
				/>
			}
			aria-label="당근 보내기"
			sx={{
				width: width || "100%",
				height: height || "100%",
			}}
			onClick={handleClickButton}
		>
			<Typography
				variant="h2"
				component="span"
				sx={{
					fontSize: {
						xs: "14px",
						fold: "16px",
					},
				}}
			>
				당근 보내기
			</Typography>
		</Button>
	);
}

export default CarrotButton;
