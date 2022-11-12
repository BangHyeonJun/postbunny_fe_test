import {
	Box,
	ButtonBase,
	Divider,
	Grid,
	Paper,
	styled,
	TextField,
	ToggleButton as MUIToggleButton,
	ToggleButtonGroup as MUIToggleButtonGroup,
	Typography,
} from "@mui/material";
import { useState } from "react";

const TextInput = styled(TextField)(({ theme }) => ({
	"& label.Mui-focused": {
		color: "rgba(0, 0, 0, 0)",
	},
	"& .MuiInput-underline:after": {
		borderBottomColor: "rgba(0, 0, 0, 0)",
	},
	"& .MuiOutlinedInput-root": {
		"& fieldset": {
			borderColor: "rgba(0, 0, 0, 0)",
		},
		"&:hover fieldset": {
			borderColor: "rgba(0, 0, 0, 0)",
		},
		"&.Mui-focused fieldset": {
			borderColor: "rgba(0, 0, 0, 0)",
		},
	},
	"& .MuiInputBase-root": {
		padding: "0px",
	},
	".MuiInputBase-input": {
		fontFamily: "letter",
		fontSize: 18,
		fontWeight: 600,
		letterSpacing: 4,
		padding: "0px",
	},
}));

const TextArea = styled(TextField)(({ theme }) => ({
	"& label.Mui-focused": {
		color: "rgba(0, 0, 0, 0)",
	},
	"& .MuiInput-underline:after": {
		borderBottomColor: "rgba(0, 0, 0, 0)",
	},
	"& .MuiOutlinedInput-root": {
		"& fieldset": {
			borderColor: "rgba(0, 0, 0, 0)",
		},
		"&:hover fieldset": {
			borderColor: "rgba(0, 0, 0, 0)",
		},
		"&.Mui-focused fieldset": {
			borderColor: "rgba(0, 0, 0, 0)",
		},
	},
	"& .MuiInputBase-root": {
		padding: "0px",
	},
	".MuiInputBase-input": {
		fontFamily: "letter",
		fontSize: 20,
		fontWeight: 400,
		lineHeight: "30px",
		letterSpacing: 4,
	},
}));

function LetterBox() {
	return (
		<Paper
			elevation={3}
			sx={{
				height: {
					xs: "300px",
				},
				borderRadius: 1,
				backgroundColor: "#FEBE8C",
				padding: "10px",
			}}
		>
			<Paper
				elevation={0}
				sx={{
					display: "flex",
					flexDirection: "column",
					width: "100%",
					height: "100%",
					borderRadius: 1,
					backgroundColor: "rgba(255, 255, 255, 0.6)",
					padding: "20px",
					position: "relative",
				}}
			>
				<Grid
					container
					gap={1}
					sx={{
						display: "flex",
						alignItems: "center",
						height: "40px",
					}}
				>
					<Grid item xs="auto">
						<Typography variant="h3" component="div" sx={{ lineHeight: 1.6 }}>
							From.
						</Typography>
					</Grid>
					<Grid item xs>
						<TextInput defaultValue={"방현준"} placeholder={"보내는 사람"} />
					</Grid>
				</Grid>

				<Box
					sx={{
						width: "100%",
						height: "calc(100% - 80px)",
					}}
				>
					<TextArea
						multiline
						rows={3}
						placeholder={"편지의 내용을 작성해주세요"}
						sx={{
							width: "100%",
							letterSpacing: 1,
						}}
						// defaultValue={`안녕 누구누구야 \n나는 누구누구 다\n임먀야 하하하\nㄴㅇㄹㅎㄴㅇㄹㅎ\nㄴㅇㄹㅎ`}
					/>
				</Box>

				<Box
					display={"flex"}
					rowGap={1}
					columnGap={1}
					sx={{
						height: "40px",
						alignItems: "center",
						justifyContent: "end",
					}}
				>
					<Typography variant="h3" component="div" sx={{ lineHeight: 1.6 }}>
						To.
					</Typography>

					<Typography
						sx={{
							fontFamily: "letter",
							fontSize: 18,
							fontWeight: 600,
							letterSpacing: 4,
						}}
					>
						방현준
					</Typography>
				</Box>
			</Paper>
		</Paper>
	);
}

const ToggleButtonGroup = styled(MUIToggleButtonGroup)(({ theme }) => ({
	"&.MuiToggleButtonGroup-root": {
		gap: 10,
		width: "100%",
		overflow: "hidden",
		padding: "10px 0px",
		overflowX: "auto",
	},
	"& .MuiToggleButtonGroup-grouped": {
		margin: 0,
		border: 0,
		"&.Mui-disabled": {
			border: 0,
		},
		"&:not(:first-of-type)": {
			borderRadius: 30,
		},
		"&:first-of-type": {
			borderRadius: 30,
		},
	},
	"& .Mui-selected": {
		position: "relative",
	},

	"& .Mui-selected:before": {
		content: '""',
		position: "absolute",
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
		borderRadius: 30,
		backgroundColor: "rgba(0, 0, 0, 0.3)",
	},

	"& .Mui-selected:after": {
		content: '"✔"',
		position: "absolute",
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		color: "#ffffff",
	},
}));

const ToggleButton = styled(MUIToggleButton)(({ theme }) => ({
	"&.MuiButtonBase-root": {
		padding: 0,
		margin: 0,

		"&:first-child": {
			marginLeft: "10px",
		},

		"&:last-child": {
			marginRight: "10px",
		},
	},
}));

function ColorPicker() {
	const colors = [
		{
			type: 1,
			color: "#FEBE8C",
			value: "#FEBE8C",
		},
		{
			type: 2,
			color: "#F7A4A4",
			value: "#F7A4A4",
		},
		{
			type: 3,
			color: "#FFFBC1",
			value: "#FFFBC1",
		},
		{
			type: 4,
			color: "#B6E2A1",
			value: "#B6E2A1",
		},
		{
			type: 5,
			color: "#FAF7F0",
			value: "#FAF7F0",
		},
		{
			type: 6,
			color: "#BCCEF8",
			value: "#BCCEF8",
		},
		{
			type: 7,
			color: "#C8FFD4",
			value: "#C8FFD4",
		},
		{
			type: 8,
			color: "#FFB9B9",
			value: "#FFB9B9",
		},
		{
			type: 9,
			color: "#E7DDBC",
			value: "#E7DDBC",
		},
	];
	const [selectedColor, setSelectedColor] = useState(colors[0].value);

	const handleChangeColorPicker = (
		event: React.MouseEvent<HTMLElement>,
		colorVal: string | null
	) => {
		if (colorVal) {
			console.log(colorVal);
			setSelectedColor(colorVal);
		}
	};

	return (
		<ToggleButtonGroup
			value={selectedColor}
			exclusive
			onChange={handleChangeColorPicker}
			aria-label="편지 색깔 변경"
		>
			{colors.map((color, i) => (
				<ToggleButton
					key={color.type}
					value={color.value}
					aria-label="편지 컬러 픽커 요소"
				>
					<Paper
						elevation={2}
						sx={{
							width: 30,
							height: 30,
							borderRadius: 30,
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<Paper
							elevation={0}
							sx={{
								width: 24,
								height: 24,
								borderRadius: 24,
								backgroundColor: color.color,
							}}
						></Paper>
					</Paper>
				</ToggleButton>
			))}
		</ToggleButtonGroup>
	);
}

function Contents() {
	return (
		<Box
			sx={{
				width: "calc(100% - 40px)",
				height: "calc(100% - 260px)",
				margin: "160px 20px 100px 20px",
				position: "absolute",
				top: 0,
				left: 0,
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
				alignItems: "center",
			}}
		>
			<Box
				maxWidth={"md"}
				sx={{
					width: "100%",
				}}
			>
				<LetterBox></LetterBox>
				<ColorPicker></ColorPicker>
			</Box>
		</Box>
	);
}

export default Contents;
