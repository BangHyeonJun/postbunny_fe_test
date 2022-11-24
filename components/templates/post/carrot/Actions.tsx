import { BackButton, TextButton } from "@/atoms/Button";
import { postState } from "@/recoil/post";
import { Container, Grid } from "@mui/material";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";

function Actions() {
	const [post, setPost] = useRecoilState(postState);
	const router = useRouter();

	const handleClickBackButton = () => {
		router.back();
	};

	const handleClickNextStep = () => {
		// TODO : 테스트 이므로 추후 삭제 필요
		setPost((old) => ({
			...old,
			isCarrotCompleted: true,
		}));

		router.push("/post/letter");
	};

	return (
		<Container
			maxWidth={"xl"}
			sx={{
				width: `100%`,
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				padding: "20px 0px 0px 0px !important",
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
					<TextButton alt="편지 작성 페이지 이동" onClick={handleClickNextStep}>
						편지 작성하러 가기
					</TextButton>
				</Grid>
			</Grid>
		</Container>
	);
}

export default Actions;
