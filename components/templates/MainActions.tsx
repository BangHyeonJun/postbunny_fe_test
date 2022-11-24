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
	onClickShare: () => void;
}

function MainActions({ onClickShare }: MainActionsProps) {
	const router = useRouter();

	const handleClickPostBunnyBtn = () => {
		router.push(`/post/bunny`);
	};

	const handleClickMypageBtn = () => {
		toast({ text: "하이" });
	};

	const handleClickShareBtn = () => {
		onClickShare();
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
			<Box
				sx={{
					position: "absolute",
					width: "calc(100% - 40px)",
					display: "flex",
					justifyContent: "space-between",
					top: 0,
					left: 0,
					margin: "20px",
				}}
			>
				<Box
					sx={{
						borderRadius: "6px",
						backgroundColor: "#ffffff",
						padding: {
							xs: "8px 16px",
							fold: "10px 20px",
						},
						boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
					}}
				>
					<Typography
						variant="h4"
						component="span"
						sx={{
							fontSize: {
								xs: "14px",
								fold: "16px",
							},
						}}
					>
						방현준
					</Typography>
				</Box>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						gap: 0.5,
					}}
				>
					<Box
						sx={{
							marginRight: "10px",
							width: {
								xs: "26px",
								fold: "30px",
							},
							height: {
								xs: "26px",
								fold: "30px",
							},
						}}
					>
						<Image
							src={carrotColorIco}
							width={30}
							height={30}
							alt={"받은 당근 갯수"}
						/>
					</Box>
					<Typography
						variant="h4"
						component="span"
						sx={{
							fontSize: {
								xs: "14px",
								fold: "16px",
							},
						}}
					>
						300
					</Typography>
				</Box>
			</Box>

			<Container
				maxWidth={"xl"}
				sx={{
					position: "absolute",
					width: `calc(100% - 40px)`,
					bottom: 0,
					left: 0,
					margin: "20px",
					p: "0px !important",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Container
					maxWidth={"md"}
					sx={{
						display: "grid",
						gap: 1,
						p: "0px !important",
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
						<ShareButton onClick={handleClickShareBtn} />
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
