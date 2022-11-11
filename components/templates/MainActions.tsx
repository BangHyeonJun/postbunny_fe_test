import { toast } from "@/atoms/Toast";
import { Box, Button, styled, Container, Typography } from "@mui/material";
import classNames from "classnames/bind";
import { useRouter } from "next/router";
import styles from "./MainActions.module.scss";
import { CarrotButton, HomeButton, ShareButton } from "@/atoms/Button";
import carrotColorIco from "./carrot-color.png";
import Image from "next/image";

const cx = classNames.bind(styles);

const MUIButton = styled(Button)(({ theme }) => ({
	backgroundColor: "#E8CFBE",
}));

interface MainActionsProps {
	onClickShare: () => {};
}

function MainActions({ onClickShare }: MainActionsProps) {
	const router = useRouter();

	const handleClickPostBunnyBtn = () => {
		router.push(`/post/bunny`);
	};

	const handleClickMypageBtn = () => {
		toast({ text: "하이" });
	};

	const toggleDrawer =
		(open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
			if (
				event.type === "keydown" &&
				((event as React.KeyboardEvent).key === "Tab" ||
					(event as React.KeyboardEvent).key === "Shift")
			) {
				return;
			}
		};

	return (
		<>
			<div className={cx("top")}>
				<Box
					sx={{
						borderRadius: "6px",
						backgroundColor: "#ffffff",
						padding: "10px 20px",
						boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
					}}
				>
					<Typography variant="h4" component="span">
						방현준
					</Typography>
				</Box>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						gap: 0.5,
						marginRight: "10px",
					}}
				>
					<Image
						src={carrotColorIco}
						width={30}
						height={30}
						alt={"받은 당근 갯수"}
					/>
					<Typography variant="h4" component="span">
						300
					</Typography>
				</Box>
			</div>

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
				}}
			>
				<Container
					maxWidth={"sm"}
					sx={{
						display: "grid",
						padding: 0,
						gap: 1,
						gridTemplateRows: {
							xs: `50px 50px`,
							fold: `60px`,
						},
						gridTemplateColumns: {
							xs: `1fr 50px`,
							fold: `1fr 60px 60px`,
						},
						gridTemplateAreas: {
							xs: `". share"
									"carrot home"`,
							fold: `"carrot share home"`,
						},
					}}
				>
					<Box sx={{ gridArea: "carrot", width: "100%" }}>
						<CarrotButton onClick={handleClickPostBunnyBtn} />
					</Box>
					<Box sx={{ gridArea: "share", width: "100%" }}>
						<ShareButton onClick={() => onClickShare()} />
					</Box>
					<Box sx={{ gridArea: "home", width: "100%" }}>
						<HomeButton onClick={handleClickMypageBtn} />
					</Box>
				</Container>
			</Container>
		</>
	);
}

export default MainActions;
