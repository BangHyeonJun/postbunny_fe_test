import { Button as MUIButton, styled, Typography } from "@mui/material";
import { MouseEvent } from "react";

interface TextButtonProps {
	children: string;
	width?: number | string;
	height?: number | string;
	alt: string;
	onClick?: (e: MouseEvent) => void;
}

const Button = styled(MUIButton)(({ theme }) => ({
	"&.MuiButtonBase-root": {
		borderRadius: 6,
		minWidth: "100%",
	},
}));

function TextButton({
	children,
	width,
	height,
	alt,
	onClick,
}: TextButtonProps) {
	const handleClickButton = (e: MouseEvent) => {
		if (onClick) onClick(e);
	};

	return (
		<Button
			color={"buttonColor"}
			variant="contained"
			aria-label={alt}
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
				{children}
			</Typography>
		</Button>
	);
}

export default TextButton;
