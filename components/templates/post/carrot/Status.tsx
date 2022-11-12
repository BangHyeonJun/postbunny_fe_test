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
					<LinearProgress currstep={1.8} finishstep={3} />
				</Grid>
				<Grid item xs={12}>
					<Description>당근이를 선택하면 토끼가 행복해져요 🥕</Description>
				</Grid>
			</Grid>
		</Container>
	);
}

export default Status;
