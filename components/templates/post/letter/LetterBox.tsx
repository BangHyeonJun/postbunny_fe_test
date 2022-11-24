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
import React, { useRef } from "react";

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
		userSelect: "auto",
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
		userSelect: "auto",
	},
}));

interface LetterBoxProps {
	from: string;
	to: string;
	onChangeFrom: (val: string) => void;
	content: string;
	onChangeContent: (val: string) => void;
	colorType: string;
}

function LetterBox({
	from,
	to,
	onChangeFrom,
	content,
	onChangeContent,
	colorType,
}: LetterBoxProps) {
	const contentRef = useRef<any>(null);

	const handleChangeFrom = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChangeFrom(e.target.value);
	};

	const handleChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChangeContent(e.target.value);
	};

	return (
		<Box
			sx={{
				width: "100%",
				// minHeight: "40vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				padding: "20px 0px 10px 0px",
			}}
		>
			<Paper
				elevation={3}
				sx={{
					width: "100%",
					// minHeight: "calc(100vh - 308px)",
					// maxHeight: {
					// 	xs: "280px",
					// 	fold: "400px",
					// },
					height: "100%",
					borderRadius: 1,
					backgroundColor: colorType,
					padding: "10px",
					zIndex: 999,
				}}
			>
				<Paper
					elevation={0}
					sx={{
						display: "grid",
						gridTemplateRows: "40px 1fr 40px",
						gridTemplateColumns: "1fr",
						width: "100%",
						height: "100%",
						// minHeight: "calc(100vh - 328px)",
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
							<TextInput
								placeholder={"보내는 사람"}
								value={from}
								onChange={handleChangeFrom}
							/>
						</Grid>
					</Grid>

					<Box
						sx={{
							width: "100%",
						}}
					>
						<TextArea
							ref={contentRef}
							multiline
							minRows={5}
							placeholder={"편지의 내용을 작성해주세요"}
							sx={{
								width: "100%",
								letterSpacing: 1,
							}}
							value={content}
							onChange={handleChangeContent}
						/>
					</Box>

					<Box
						display={"flex"}
						rowGap={1}
						columnGap={1}
						sx={{
							height: "40px",
							alignItems: "center",
							justifyContent: "flex-end",
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
							{to}
						</Typography>
					</Box>
				</Paper>
			</Paper>
		</Box>
	);
}

export default LetterBox;
