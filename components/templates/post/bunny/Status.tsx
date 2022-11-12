import { Description } from "@/atoms/Description";
import { LinearProgress } from "@/atoms/Progress";
import { Container, Grid } from "@mui/material";

function Status() {
	return (
		<Container
			maxWidth={"xl"}
			sx={{
				position: "absolute",
				width: "calc(100% - 40px)",
				top: 0,
				left: 0,
				margin: "20px",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				p: "0px !important",
			}}
		>
			<Grid maxWidth={"md"} container direction={"column"} gap={2}>
				<Grid item xs={12}>
					<LinearProgress currstep={0.8} finishstep={3} />
				</Grid>
				<Grid item xs={12}>
					<Description>편지를 전달할 토끼를 선택해 주세요 🐇</Description>
				</Grid>
			</Grid>
		</Container>
	);
}

export default Status;
