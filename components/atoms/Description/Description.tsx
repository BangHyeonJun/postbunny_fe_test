import { Box, Typography } from "@mui/material";
import { ReactElement } from "react";

interface DescriptionProps {
	children: String;
}

function Description({ children }: DescriptionProps) {
	return (
		<Box
			sx={{
				padding: "10px 20px",
				borderRadius: "6px",
				backgroundColor: "rgba(255, 255, 255, 0.8)",
				boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				wordBreak: "keep-all",
			}}
		>
			<Typography
				variant="subtitle2"
				component="p"
				sx={{
					fontSize: {
						xs: "12px",
						fold: "14px",
					},
				}}
			>
				{children}
			</Typography>
		</Box>
	);
}

export default Description;
