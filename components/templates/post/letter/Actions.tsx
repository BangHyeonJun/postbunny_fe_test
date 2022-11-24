import { BackButton, TextButton } from "@/atoms/Button";
import Toast from "@/atoms/Toast/toast";
import { postState } from "@/recoil/post";
import { Container, Grid } from "@mui/material";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";

interface ActionsProps {
	onFinish: () => void;
}

function Actions({ onFinish }: ActionsProps) {
	const [post, setPost] = useRecoilState(postState);
	const router = useRouter();

	const handleClickBackButton = () => {
		router.back();
	};

	return (
		<Container
			maxWidth={"xl"}
			sx={{
				width: "100%",
				display: "flex",
				justifyContent: "center",
				padding: "20px 0px 20px 0px !important",
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
					<TextButton alt="편지 작성 완료" onClick={() => onFinish()}>
						편지 작성 완료
					</TextButton>
				</Grid>
			</Grid>
		</Container>
	);
}

export default Actions;
