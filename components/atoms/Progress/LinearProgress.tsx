import React from "react";
import {
	LinearProgress as MUILinearProgress,
	LinearProgressProps as MUILinearProgressProps,
	linearProgressClasses,
	styled,
	Box,
	Typography,
} from "@mui/material";

const LinearProgressStyle = styled(MUILinearProgress)(({ theme }) => ({
	height: 12,
	borderRadius: 30,
	[`&.${linearProgressClasses.colorPrimary}`]: {
		backgroundColor: "#E6E6E6",
	},
	[`& .${linearProgressClasses.bar}`]: {
		borderRadius: 30,
		backgroundColor: "#FF9416",
	},
}));

interface LinearProgressProps {
	currstep: number;
	finishstep: number;
}

function LinearProgress(props: MUILinearProgressProps & LinearProgressProps) {
	const { currstep, finishstep } = props;
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				padding: "0px 10px",
				gap: 1.25,
				backgroundColor: "rgba(255, 255, 255, 0.9)",
				boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
				borderRadius: 30,
			}}
		>
			<Box
				sx={{
					width: "100%",
					p: "8px 0px",
					alignSelf: "stretch",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
				}}
			>
				<LinearProgressStyle
					variant="determinate"
					{...props}
					value={Math.ceil((currstep / finishstep) * 100)}
				/>
			</Box>
			<Box>
				<Typography variant="body2">{`${Math.ceil(
					(currstep / finishstep) * 100
				)}%`}</Typography>
			</Box>
		</Box>
	);
}

export default LinearProgress;
