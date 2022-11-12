import { Box, Divider, Paper, styled, TextField } from "@mui/material";

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
	".MuiInputBase-input": {
		fontFamily: "letter",
		fontSize: 20,
		fontWeight: 600,
		lineHeight: "30px",
		letterSpacing: 4,
	},
}));

function LetterBox() {
	return (
		<Paper
			elevation={3}
			sx={{
				height: "500px",
				borderRadius: 1,
				backgroundColor: "#FEBE8C",
				padding: "10px",
			}}
		>
			<Paper
				elevation={0}
				sx={{
					width: "100%",
					height: "100%",
					borderRadius: 1,
					backgroundColor: "rgba(255, 255, 255, 0.6)",
					padding: "20px",
					position: "relative",
				}}
			>
				{new Array(12).fill("").map((_, i) => (
					<Divider
						key={i}
						sx={{
							position: "absolute",
							top: `${66 + 30 * i}px`,
							left: "20px",
							borderBottomWidth: 2,
							borderColor: "#FEBE8C",
							opacity: 0.4,
							width: "calc(100% - 40px)",
						}}
					/>
				))}
				<TextArea
					variant="outlined"
					multiline
					rows={12}
					placeholder={"편지의 내용을 작성해주세요"}
					sx={{
						width: "100%",
						letterSpacing: 1,
					}}
					defaultValue={`안녕 누구누구야 \n나는 누구누구 다\n임먀야 하하하\nㄴㅇㄹㅎㄴㅇㄹㅎ\nㄴㅇㄹㅎ`}
				/>
			</Paper>
		</Paper>
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
			</Box>
		</Box>
	);
}

export default Contents;
