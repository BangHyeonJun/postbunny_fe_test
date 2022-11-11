/// <reference path="./theme.d.ts" />

import { createTheme } from "@mui/material";

const theme = createTheme({
	palette: {
		buttonColor: {
			main: "#E8CFBE",
			contrastText: "#483020",
		},
	},
	breakpoints: {
		values: {
			xs: 0,
			fold: 290,
			sm: 600,
			md: 900,
			lg: 1200,
			xl: 1536,
		},
	},
	typography: {
		fontFamily: [
			"'Noto Sans KR'",
			"Helvetica",
			"'맑은 고딕'",
			"'malgun gothic'",
			"'Apple SD Gothic Neo'",
			"'Apple SD 산돌고딕 Neo'",
			"'Microsoft NeoGothic'",
			"'Droid sans'",
			"sans-serif",
		].join(","),
		h1: {
			fontFamily: "Noto Sans KR",
			fontStyle: "normal",
			fontWeight: 700,
			fontSize: 18,
			letterSpacing: "0.02em",
		},
		h2: {
			fontFamily: "Noto Sans KR",
			fontStyle: "normal",
			fontWeight: 700,
			fontSize: 16,
			letterSpacing: "0.02em",
		},
		h4: {
			fontFamily: "Noto Sans KR",
			fontStyle: "normal",
			fontWeight: 500,
			fontSize: 16,
			letterSpacing: "0.02em",
		},
		body2: {
			fontFamily: "Noto Sans KR",
			fontStyle: "normal",
			fontWeight: 400,
			fontSize: 10,
			letterSpacing: "0.25px",
		},
		subtitle2: {
			fontFamily: "Noto Sans KR",
			fontStyle: "normal",
			fontWeight: 400,
			fontSize: 14,
			letterSpacing: "0.02em",
		},
	},
});

export default theme;
