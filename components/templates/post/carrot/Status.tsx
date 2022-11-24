import { Description } from "@/atoms/Description";
import { LinearProgress } from "@/atoms/Progress";
import { Container, Grid } from "@mui/material";

function Status() {
	return (
		<Container
			maxWidth={"xl"}
			sx={{
				width: "100%",
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
