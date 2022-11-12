import Actions from "@/templates/post/letter/Actions";
import Contents from "@/templates/post/letter/Contents";
import Status from "@/templates/post/letter/Status";
import { Box, Container } from "@mui/material";

function Carrot() {
	return (
		<Container
			component={"main"}
			sx={{
				width: "100%",
				height: "100vh",
				position: "relative",
				padding: "0px !important",
			}}
		>
			<Box
				sx={{
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
				}}
			>
				<Status />
				<Actions />
			</Box>
			<Box
				sx={{
					width: "100%",
					height: "100%",
				}}
			>
				<Contents></Contents>
			</Box>
		</Container>
	);
}

export default Carrot;
