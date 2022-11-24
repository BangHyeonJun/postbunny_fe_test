import { Box as MUIBox, styled } from "@mui/material";
import Image from "next/image";

import PrevArrowIco from "./assets/prev-arrow.png";

const Box = styled(MUIBox)(({ theme }) => ({
	"&:before": {
		content: '""',
		display: "none",
	},
	// "&.MuiButtonBase-root": {
	// 	borderRadius: 30,
	// },
}));

function PrevArrowButton(props: any) {
	const { className, style, onClick, slideCount, currentSlide } = props;

	console.log(currentSlide, slideCount);

	return (
		<Box
			style={{
				position: "relative",
				margin: "0 20px",
				cursor: "pointer",
				visibility: currentSlide !== 0 ? "inherit" : "hidden",
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
				<Image src={PrevArrowIco} width={40} height={40} alt={"이전"} />
			</Box>
		</Box>
	);
}

export default PrevArrowButton;
