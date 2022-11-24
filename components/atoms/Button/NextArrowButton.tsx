import { Box as MUIBox, styled } from "@mui/material";
import Image from "next/image";

import NextArrowIco from "./assets/next-arrow.png";

const Box = styled(MUIBox)(({ theme }) => ({
	"&:before": {
		content: '""',
		display: "none",
	},
	// "&.MuiButtonBase-root": {
	// 	borderRadius: 30,
	// },
}));

function NextArrowButton(props: any) {
	const { className, style, onClick, slideCount, currentSlide } = props;

	console.log(currentSlide, slideCount);

	return (
		<Box
			style={{
				position: "relative",
				margin: "0 20px",
				cursor: "pointer",
				visibility: currentSlide !== slideCount - 1 ? "inherit" : "hidden",
			}}
		>
			<Box
				className={className}
				style={{
					...style,
					width: 40,
					height: 40,
				}}
				onClick={onClick}
			>
				<Image src={NextArrowIco} width={40} height={40} alt={"다음"} />
			</Box>
		</Box>
	);
}

export default NextArrowButton;
