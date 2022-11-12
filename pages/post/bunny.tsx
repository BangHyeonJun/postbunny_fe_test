import Box from "@mui/material/Box";

import BeigeEggImg from "@/images/egg/beige.webp";
import BlackEggImg from "@/images/egg/black.webp";
import BrownEggImg from "@/images/egg/brown.webp";
import LightBrownEggImg from "@/images/egg/lightbrown.webp";
import PinkEggImg from "@/images/egg/pink.webp";
import WhiteEggImg from "@/images/egg/white.webp";

import classNames from "classnames/bind";
import styles from "@/styles/post/bunny.module.scss";
import { ButtonBase, Grid, Paper, Container } from "@mui/material";
import { useState } from "react";
import Image from "next/image";
import CheckIcon from "@mui/icons-material/Check";
import { useRouter } from "next/router";
import { LinearProgress } from "@/atoms/Progress";
import { Description } from "@/atoms/Description";
import { BackButton, TextButton } from "@/atoms/Button";
import Contents from "@/templates/post/bunny/Contents";
import Status from "@/templates/post/bunny/Status";
import Actions from "@/templates/post/bunny/Actions";

const cx = classNames.bind(styles);

type EggType =
	| "BeigeEggImg"
	| "BlackEggImg"
	| "BrownEggImg"
	| "LightBrownEggImg"
	| "PinkEggImg"
	| "WhiteEggImg";

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
		<Container
			component={"main"}
			sx={{
				width: "100%",
				height: "100vh",
				position: "relative",
				padding: "0px !important",
			}}
		>
			<Box
				sx={{
					width: "100%",
					height: "100%",
				}}
			>
				<Contents />
			</Box>
			<Box
				sx={{
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
				}}
			>
				<Status />
				<Actions />
			</Box>
		</Container>
	);
}

export default Bunny;
