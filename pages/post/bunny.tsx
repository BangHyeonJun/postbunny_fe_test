import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import LinearProgress, {
	LinearProgressProps,
} from "@mui/material/LinearProgress";
import Container from "@mui/material/Container";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import BeigeEggImg from "@/images/egg/beige.webp";
import BlackEggImg from "@/images/egg/black.webp";
import BrownEggImg from "@/images/egg/brown.webp";
import LightBrownEggImg from "@/images/egg/lightbrown.webp";
import PinkEggImg from "@/images/egg/pink.webp";
import WhiteEggImg from "@/images/egg/white.webp";

import classNames from "classnames/bind";
import styles from "@/styles/post/bunny.module.scss";
import Appbar from "@/atoms/Appbar/Appbar";
import { ButtonBase, Grid, Paper } from "@mui/material";
import { useState } from "react";
import Image from "next/image";
import CheckIcon from "@mui/icons-material/Check";
import { useRouter } from "next/router";

const cx = classNames.bind(styles);

type EggType =
	| "BeigeEggImg"
	| "BlackEggImg"
	| "BrownEggImg"
	| "LightBrownEggImg"
	| "PinkEggImg"
	| "WhiteEggImg";

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

interface EggDisplayProps {
	type: EggType;
}

function EggDisplay({ type }: EggDisplayProps) {
	const getEggImg = (type: EggType) => {
		let result = WhiteEggImg;
		switch (type) {
			case "WhiteEggImg":
				result = WhiteEggImg;
				break;
			case "PinkEggImg":
				result = PinkEggImg;
				break;
			case "BeigeEggImg":
				result = BeigeEggImg;
				break;
			case "BrownEggImg":
				result = BrownEggImg;
				break;
			case "LightBrownEggImg":
				result = LightBrownEggImg;
				break;
			case "BlackEggImg":
				result = BlackEggImg;
				break;
		}
		return result;
	};

	return (
		<Box
			width={{
				xs: 116 * 0.7,
				sm: 116,
				md: 116,
			}}
			height={{
				xs: 206 * 0.7,
				sm: 206,
				md: 206,
			}}
		>
			<Image
				src={getEggImg(type)}
				width={116}
				height={206}
				alt={"토끼알 이미지"}
			></Image>
		</Box>
	);
}

interface EggColorPickerProps {
	selectedColor: EggType;
	onClickPicker?: (type: EggType) => void;
}

function EggColorPicker({ selectedColor, onClickPicker }: EggColorPickerProps) {
	const handleClickColor = (type: EggType) => () => {
		if (onClickPicker) onClickPicker(type);
	};

	return (
		<Grid container spacing={{ xs: 3, md: 6 }} columns={{ xs: 12, md: 24 }}>
			<Grid item xs={4}>
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
					}}
				>
					<ButtonBase
						sx={{
							borderRadius: 1,
							position: "relative",
						}}
						onClick={handleClickColor("WhiteEggImg")}
					>
						{selectedColor === "WhiteEggImg" && (
							<Box
								sx={{
									position: "absolute",
									borderRadius: 1,
									top: 0,
									left: 0,
									width: "100%",
									height: "100%",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									backgroundColor: "rgba(0, 0, 0, 0.3)",
								}}
							>
								<CheckIcon
									sx={{
										width: 40,
										height: 40,
										color: "#ffffff",
									}}
								/>
							</Box>
						)}
						<Box
							sx={{
								backgroundColor: "#fdfdfd",
								p: 1.5,
								borderRadius: 1,
								boxShadow: "1px 1px 2px 1px rgba(0, 0, 0, 0.1)",
							}}
						>
							<Paper
								elevation={2}
								sx={{
									backgroundColor: "#fff",
									width: "10vw",
									height: "10vw",
									minWidth: 30,
									minHeight: 30,
									maxWidth: 60,
									maxHeight: 60,
								}}
							/>
						</Box>
					</ButtonBase>
				</Box>
			</Grid>
			<Grid item xs={4}>
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
					}}
				>
					<ButtonBase
						sx={{
							borderRadius: 1,
							position: "relative",
						}}
						onClick={handleClickColor("PinkEggImg")}
					>
						{selectedColor === "PinkEggImg" && (
							<Box
								sx={{
									position: "absolute",
									borderRadius: 1,
									top: 0,
									left: 0,
									width: "100%",
									height: "100%",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									backgroundColor: "rgba(0, 0, 0, 0.3)",
								}}
							>
								<CheckIcon
									sx={{
										width: 40,
										height: 40,
										color: "#ffffff",
									}}
								/>
							</Box>
						)}
						<Box
							sx={{
								backgroundColor: "#fdfdfd",
								p: 1.5,
								borderRadius: 1,
								boxShadow: "1px 1px 3px 1px rgba(0, 0, 0, 0.1)",
							}}
						>
							<Paper
								elevation={2}
								sx={{
									backgroundColor: "#FDDDE3",
									width: "10vw",
									height: "10vw",
									minWidth: 30,
									minHeight: 30,
									maxWidth: 60,
									maxHeight: 60,
								}}
							/>
						</Box>
					</ButtonBase>
				</Box>
			</Grid>
			<Grid item xs={4}>
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
					}}
				>
					<ButtonBase
						sx={{
							borderRadius: 1,
							position: "relative",
						}}
						onClick={handleClickColor("BeigeEggImg")}
					>
						{selectedColor === "BeigeEggImg" && (
							<Box
								sx={{
									position: "absolute",
									borderRadius: 1,
									top: 0,
									left: 0,
									width: "100%",
									height: "100%",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									backgroundColor: "rgba(0, 0, 0, 0.3)",
								}}
							>
								<CheckIcon
									sx={{
										width: 40,
										height: 40,
										color: "#ffffff",
									}}
								/>
							</Box>
						)}
						<Box
							sx={{
								backgroundColor: "#fdfdfd",
								p: 1.5,
								borderRadius: 1,
								boxShadow: "1px 1px 3px 1px rgba(0, 0, 0, 0.1)",
							}}
						>
							<Paper
								elevation={2}
								sx={{
									backgroundColor: "#F3EDDA",
									width: "10vw",
									height: "10vw",
									minWidth: 30,
									minHeight: 30,
									maxWidth: 60,
									maxHeight: 60,
								}}
							/>
						</Box>
					</ButtonBase>
				</Box>
			</Grid>
			<Grid item xs={4}>
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
					}}
				>
					<ButtonBase
						sx={{
							borderRadius: 1,
							position: "relative",
						}}
						onClick={handleClickColor("BrownEggImg")}
					>
						{selectedColor === "BrownEggImg" && (
							<Box
								sx={{
									position: "absolute",
									borderRadius: 1,
									top: 0,
									left: 0,
									width: "100%",
									height: "100%",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									backgroundColor: "rgba(0, 0, 0, 0.3)",
								}}
							>
								<CheckIcon
									sx={{
										width: 40,
										height: 40,
										color: "#ffffff",
									}}
								/>
							</Box>
						)}
						<Box
							sx={{
								backgroundColor: "#fdfdfd",
								p: 1.5,
								borderRadius: 1,
								boxShadow: "1px 1px 3px 1px rgba(0, 0, 0, 0.1)",
							}}
						>
							<Paper
								elevation={2}
								sx={{
									backgroundColor: "#A3998E",
									width: "10vw",
									height: "10vw",
									minWidth: 30,
									minHeight: 30,
									maxWidth: 60,
									maxHeight: 60,
								}}
							/>
						</Box>
					</ButtonBase>
				</Box>
			</Grid>
			<Grid item xs={4}>
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
					}}
				>
					<ButtonBase
						sx={{
							borderRadius: 1,
							position: "relative",
						}}
						onClick={handleClickColor("LightBrownEggImg")}
					>
						{selectedColor === "LightBrownEggImg" && (
							<Box
								sx={{
									position: "absolute",
									borderRadius: 1,
									top: 0,
									left: 0,
									width: "100%",
									height: "100%",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									backgroundColor: "rgba(0, 0, 0, 0.3)",
								}}
							>
								<CheckIcon
									sx={{
										width: 40,
										height: 40,
										color: "#ffffff",
									}}
								/>
							</Box>
						)}
						<Box
							sx={{
								backgroundColor: "#fdfdfd",
								p: 1.5,
								borderRadius: 1,
								boxShadow: "1px 1px 3px 1px rgba(0, 0, 0, 0.1)",
							}}
						>
							<Paper
								elevation={2}
								sx={{
									backgroundColor: "#c0a292",
									width: "10vw",
									height: "10vw",
									minWidth: 30,
									minHeight: 30,
									maxWidth: 60,
									maxHeight: 60,
								}}
							/>
						</Box>
					</ButtonBase>
				</Box>
			</Grid>
			<Grid item xs={4}>
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
					}}
				>
					<ButtonBase
						sx={{
							borderRadius: 1,
							position: "relative",
						}}
						onClick={handleClickColor("BlackEggImg")}
					>
						{selectedColor === "BlackEggImg" && (
							<Box
								sx={{
									position: "absolute",
									borderRadius: 1,
									top: 0,
									left: 0,
									width: "100%",
									height: "100%",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									backgroundColor: "rgba(0, 0, 0, 0.3)",
								}}
							>
								<CheckIcon
									sx={{
										width: 40,
										height: 40,
										color: "#ffffff",
									}}
								/>
							</Box>
						)}
						<Box
							sx={{
								backgroundColor: "#fdfdfd",
								p: 1.5,
								borderRadius: 1,
								boxShadow: "1px 1px 3px 1px rgba(0, 0, 0, 0.1)",
							}}
						>
							<Paper
								elevation={2}
								sx={{
									backgroundColor: "#3c3c3c",
									width: "10vw",
									height: "10vw",
									minWidth: 30,
									minHeight: 30,
									maxWidth: 60,
									maxHeight: 60,
								}}
							/>
						</Box>
					</ButtonBase>
				</Box>
			</Grid>
		</Grid>
	);
}

function Bunny() {
	const [selectedColor, setSelectedColor] = useState<EggType>("WhiteEggImg");
	const router = useRouter();

	const handleClickBackButton = () => {
		router.back();
	};

	const handleClickNextStep = () => {
		router.push("/post/carrot");
	};

	return (
		<Box
			className={cx("wrap")}
			height={{
				xs: "calc(100vh - 112px)",
				sm: "calc(100vh - 120px)",
				md: "calc(100vh - 128px)",
			}}
		>
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
				sx={{}}
			>
				<Container maxWidth={"md"}>
					<Box>
						<LinearProgressWithLabel currstep={1} finishstep={3} />
					</Box>

					<Box
						sx={{
							mt: 1,
							p: 1,
							borderRadius: 1,
							backgroundColor: "rgba(255, 255, 255, 0.9)",
							// display: "flex",
							// justifyContent: "center",
						}}
					>
						<Typography variant="subtitle1" component="p">
							편지 전달을 도와줄 토끼알을 선택해 주세요 ❤️
						</Typography>
					</Box>

					<Box
						sx={{
							height: "40vh",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<EggDisplay type={selectedColor} />
					</Box>

					<Box
						pt={{
							xs: 2,
							sm: 3,
							md: 2,
						}}
						pr={{
							xs: 1,
							sm: 1,
							md: 2,
						}}
						pb={{
							xs: 2,
							sm: 3,
							md: 2,
						}}
						pl={{
							xs: 1,
							sm: 1,
							md: 2,
						}}
						sx={{
							width: "100%",
							borderRadius: 1,
							backgroundColor: "rgba(255, 255, 255, 0.9)",
						}}
					>
						<EggColorPicker
							selectedColor={selectedColor}
							onClickPicker={setSelectedColor}
						/>
					</Box>
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
					onClick={handleClickNextStep}
				>
					다음
				</Button>
			</Box>
		</Box>
	);
}

export default Bunny;
