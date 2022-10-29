import Appbar from "@/atoms/Appbar/Appbar";
import {
	Button,
	LinearProgress,
	LinearProgressProps,
	Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import { useRouter } from "next/router";

function LinearProgressWithLabel(
	props: LinearProgressProps & { currstep: number; finishstep: number }
) {
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				gap: 1,
			}}
		>
			<Box
				sx={{
					width: "100%",
					p: 1,
					borderRadius: 1,
					backgroundColor: "rgba(255, 255, 255, 0.9)",
					alignSelf: "stretch",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
				}}
			>
				<LinearProgress
					variant="determinate"
					{...props}
					value={Math.ceil((props.currstep / props.finishstep) * 100)}
					sx={{
						height: 8,
						borderRadius: 1,
					}}
				/>
			</Box>
			<Box
				sx={{
					p: 1,
					borderRadius: 1,
					backgroundColor: "rgba(255, 255, 255, 0.9)",
				}}
			>
				<Typography
					variant="body2"
					color="text.secondary"
				>{`${props.currstep}/${props.finishstep}`}</Typography>
			</Box>
		</Box>
	);
}

function Carrot() {
	const router = useRouter();

	const handleClickBackButton = () => {
		router.back();
	};

	const handleClickFinishButton = () => {
		router.push("/");
	};

	return (
		<Box>
			<Appbar title="토끼 선택" onClickBackBtn={handleClickBackButton}></Appbar>
			<Box
				component={"main"}
				mt={{
					xs: 7,
					sm: 8,
					md: 8,
				}}
				mb={{
					xs: 7,
					sm: 7,
					md: 8,
				}}
				pt={{
					xs: 1.5,
					sm: 2,
					md: 2,
				}}
				pb={{
					xs: 1.5,
					sm: 2,
					md: 2,
				}}
			>
				<Container maxWidth={"md"}>
					<Box>
						<LinearProgressWithLabel currstep={3} finishstep={3} />
					</Box>

					<Box>편지 작성</Box>
				</Container>
			</Box>

			<Box
				height={{
					xs: 56,
					sm: 56,
					md: 64,
				}}
				sx={{
					position: "fixed",
					bottom: 0,
					left: 0,
					width: "100%",
				}}
			>
				<Button
					fullWidth
					variant="contained"
					sx={{
						borderRadius: 0,
						height: "100%",
						fontSize: 18,
						fontWeight: "900",
						letterSpacing: 8,
					}}
					onClick={handleClickFinishButton}
				>
					완료
				</Button>
			</Box>
		</Box>
	);
}

export default Carrot;
