import { BackButton, TextButton } from "@/atoms/Button";
import { Container, Grid } from "@mui/material";
import { useRouter } from "next/router";

function Actions() {
	const router = useRouter();

	const handleClickBackButton = () => {
		router.back();
	};

	const handleClickFinishButton = () => {
		router.push("/");
	};

	return (
		<Container
			maxWidth={"xl"}
			sx={{
				position: "absolute",
				width: `calc(100% - 40px)`,
				bottom: 0,
				left: 0,
				margin: "20px",
				padding: 0,
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				p: "0px !important",
			}}
		>
			<Grid
				maxWidth={"md"}
				container
				gap={1}
				sx={{
					height: {
						xs: "50px",
						fold: "60px",
					},
				}}
			>
				<Grid item xs={"auto"}>
					<BackButton
						width={{
							xs: "50px",
							fold: "60px",
						}}
						onClick={handleClickBackButton}
					/>
				</Grid>
				<Grid item xs>
					<TextButton alt="편지 작성 완료" onClick={handleClickFinishButton}>
						편지 작성 완료
					</TextButton>
				</Grid>
			</Grid>
		</Container>
	);
}

export default Actions;
