import { Box, styled } from "@mui/material";
import { keyframes } from "@emotion/react";

interface BunnyImgProps {
	src: string;
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

function BunnyImg({ src, width, height }: BunnyImgProps) {
	const bunny_XS_X = keyframes`
    from { background-position-x: calc(${width.xs}px * 5); }
  `;
	const bunny_XS_Y = keyframes`
	  from { background-position-y: calc(${height.xs}px * 2); }
  `;

	const bunny_FOLD_X = keyframes`
    from { background-position-x: calc(${width.fold}px * 5); }
  `;
	const bunny_FOLD_Y = keyframes`
	  from { background-position-y: calc(${height.fold}px * 2); }
  `;

	const bunny_SM_X = keyframes`
    from { background-position-x: calc(${width.sm}px * 5); }
  `;
	const bunny_SM_Y = keyframes`
	  from { background-position-y: calc(${height.sm}px * 2); }
  `;

	const bunny_MD_X = keyframes`
    from { background-position-x: calc(${width.md}px * 5); }
  `;
	const bunny_MD_Y = keyframes`
	  from { background-position-y: calc(${height.md}px * 2); }
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
						xs: `calc(${width.xs}px * 5) calc(${height.xs}px * 2)`,
						fold: `calc(${width.fold}px * 5) calc(${height.fold}px * 2)`,
						sm: `calc(${width.sm}px * 5) calc(${height.sm}px * 2)`,
						md: `calc(${width.md}px * 5) calc(${height.md}px * 2)`,
					},
					animation: {
						xs: `${bunny_XS_X} 0.8s steps(5) infinite alternate-reverse,
            ${bunny_XS_Y} 0.8s steps(2) infinite alternate-reverse
            `,
						fold: `${bunny_FOLD_X} 0.8s steps(5) infinite alternate-reverse,
            ${bunny_FOLD_Y} 0.8s steps(2) infinite alternate-reverse
            `,
						sm: `${bunny_SM_X} 0.8s steps(5) infinite alternate-reverse,
            ${bunny_SM_Y} 0.8s steps(2) infinite alternate-reverse
            `,
						md: `${bunny_MD_X} 0.8s steps(5) infinite alternate-reverse,
            ${bunny_MD_Y} 0.8s steps(2) infinite alternate-reverse
            `,
					},
				}}
			/>
		</Box>
	);
}

export default BunnyImg;
