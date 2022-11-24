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
				padding: "0px !important",
			}}
		>
			<Grid maxWidth={"md"} container direction={"column"} gap={2}>
				<Grid
					item
					xs={12}
					sx={{
						zIndex: 999,
					}}
				>
					<LinearProgress currstep={2.8} finishstep={3} />
				</Grid>
				<Grid
					item
					xs={12}
					sx={{
						zIndex: 999,
					}}
				>
					<Description>
						편지를 작성하면 토끼가 안전하게 전달할게요 ❤️
					</Description>
				</Grid>
			</Grid>
		</Container>
	);
}

export default Status;
