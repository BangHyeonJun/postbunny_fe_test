import { BackButton, TextButton } from "@/atoms/Button";
import { Description } from "@/atoms/Description";
import { LinearProgress } from "@/atoms/Progress";
import Actions from "@/templates/post/carrot/Actions";
import Contents from "@/templates/post/carrot/Contents";
import Status from "@/templates/post/carrot/Status";
import { Box, Container, Grid } from "@mui/material";
import { useRouter } from "next/router";

function Carrot() {
	const router = useRouter();

	const handleClickBackButton = () => {
		router.back();
	};

	const handleClickNextStep = () => {
		router.push("/post/letter");
	};

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
					width: "100%",
					height: "100%",
				}}
			>
				<Contents />
			</Box>
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
		</Container>
	);
}

export default Carrot;
