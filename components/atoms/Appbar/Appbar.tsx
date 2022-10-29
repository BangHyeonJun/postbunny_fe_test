import {
	AppBar as MaterialAppBar,
	IconButton,
	Toolbar,
	Typography,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

interface AppbarProps {
	title: string;
	onClickBackBtn?: () => void;
}

function Appbar(props: AppbarProps) {
	const { title, onClickBackBtn } = props;

	const handleClickBackButton = () => {
		if (onClickBackBtn) onClickBackBtn();
	};

	return (
		<MaterialAppBar component="nav">
			<Toolbar>
				<IconButton
					size="large"
					edge="start"
					color="inherit"
					aria-label="menu"
					sx={{ mr: 2 }}
					onClick={handleClickBackButton}
				>
					<ArrowBackIosNewIcon />
				</IconButton>
				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
					{title}
				</Typography>
			</Toolbar>
		</MaterialAppBar>
	);
}

export default Appbar;
