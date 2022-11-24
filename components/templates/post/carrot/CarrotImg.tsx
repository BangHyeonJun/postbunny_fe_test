import { Box, styled } from "@mui/material";
import { keyframes } from "@emotion/react";

interface BunnyImgProps {
	src: string;
	index: number;
	width: {
		xs: number;
		fold: number;
		sm: number;
		md: number;
	};
	height: {
		xs: number;
		fold: number;
		sm: number;
		md: number;
	};
}

// animation: playX 0.8s steps(5) infinite alternate-reverse,
// 	playY 0.8s steps(2) infinite alternate-reverse;

function CarrotImg({ src, index, width, height }: BunnyImgProps) {
	const bunny_XS = keyframes`
		to { 
			background-position-x: ${index % 2 === 0 ? width.xs * 0 : width.xs * 2}px;
			background-position-y: ${height.xs * (Math.floor(index / 2) + 1)}px;
		}
    from { 
			background-position-x: ${index % 2 === 0 ? width.xs * 2 : width.xs * 4}px;
			background-position-y: ${height.xs * (Math.floor(index / 2) + 1)}px;
		}
  `;

	const bunny_FOLD = keyframes`
		to { 
			background-position-x: ${index % 2 === 0 ? width.fold * 0 : width.fold * 2}px;
			background-position-y: ${height.fold * (Math.floor(index / 2) + 1)}px;
		}
    from { 
			background-position-x: ${index % 2 === 0 ? width.fold * 2 : width.fold * 4}px;
			background-position-y: ${height.fold * (Math.floor(index / 2) + 1)}px;
		}
  `;

	const bunny_SM = keyframes`
		to { 
			background-position-x: ${index % 2 === 0 ? width.sm * 0 : width.sm * 2}px;
			background-position-y: ${height.sm * (Math.floor(index / 2) + 1)}px;
		}
    from { 
			background-position-x: ${index % 2 === 0 ? width.sm * 2 : width.sm * 4}px;
			background-position-y: ${height.sm * (Math.floor(index / 2) + 1)}px;
		}
  `;
	const bunny_MD = keyframes`
		to { 
			background-position-x: ${index % 2 === 0 ? width.md * 0 : width.md * 2}px;
			background-position-y: ${height.md * (Math.floor(index / 2) + 1)}px;
		}
    from { 
			background-position-x: ${index % 2 === 0 ? width.md * 2 : width.md * 4}px;
			background-position-y: ${height.md * (Math.floor(index / 2) + 1)}px;
		}
  `;

	return (
		<Box
			sx={{
				width: {
					xs: width.xs,
					fold: width.fold,
					sm: width.sm,
					md: width.md,
				},
				height: {
					xs: height.xs,
					fold: height.fold,
					sm: height.sm,
					md: height.md,
				},
			}}
		>
			<Box
				sx={{
					backgroundImage: `url(${src})`,
					width: {
						xs: width.xs,
						fold: width.fold,
						sm: width.sm,
						md: width.md,
					},
					height: {
						xs: height.xs,
						fold: height.fold,
						sm: height.sm,
						md: height.md,
					},
					backgroundSize: {
						xs: `calc(${width.xs}px * 4) calc(${height.xs}px * 3)`,
						fold: `calc(${width.fold}px * 4) calc(${height.fold}px * 3)`,
						sm: `calc(${width.sm}px * 4) calc(${height.sm}px * 3)`,
						md: `calc(${width.md}px * 4) calc(${height.md}px * 3)`,
					},
					animation: {
						xs: `${bunny_XS} 0.8s steps(2) infinite alternate-reverse`,
						fold: `${bunny_FOLD} 0.8s steps(2) infinite alternate-reverse`,
						sm: `${bunny_SM} 0.8s steps(2) infinite alternate-reverse`,
						md: `${bunny_MD} 0.8s steps(2) infinite alternate-reverse`,
					},
				}}
			/>
		</Box>
	);
}

export default CarrotImg;
