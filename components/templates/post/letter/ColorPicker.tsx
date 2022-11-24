import {
	Paper,
	styled,
	ToggleButton as MUIToggleButton,
	ToggleButtonGroup as MUIToggleButtonGroup,
} from "@mui/material";

const ToggleButton = styled(MUIToggleButton)(({ theme }) => ({
	"&.MuiButtonBase-root": {
		padding: 0,
		margin: 0,

		"&:first-of-type": {
			marginLeft: "10px",
		},

		"&:last-child": {
			marginRight: "10px",
		},
	},
}));

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

	"&::-webkit-scrollbar": {
		display: "none",
	},
}));

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

interface ColorPickerProps {
	color: string;
	onChange: (val: string) => void;
}

function ColorPicker({ color, onChange }: ColorPickerProps) {
	const handleChangeColorPicker = (
		event: React.MouseEvent<HTMLElement>,
		colorVal: string | null
	) => {
		if (colorVal) {
			onChange(colorVal);
		}
	};

	return (
		<ToggleButtonGroup
			value={color}
			exclusive
			onChange={handleChangeColorPicker}
			aria-label="편지 색깔 변경"
		>
			{colors.map((colorItem, i) => (
				<ToggleButton
					key={colorItem.type}
					value={colorItem.value}
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
								backgroundColor: colorItem.color,
							}}
						></Paper>
					</Paper>
				</ToggleButton>
			))}
		</ToggleButtonGroup>
	);
}

export default ColorPicker;
