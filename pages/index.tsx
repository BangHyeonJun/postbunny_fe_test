import MainCanvas from "@/templates/MainCanvas";
import type { NextPage } from "next";
import MainActions from "@/templates/MainActions";
import Head from "next/head";
import { useShareSns, ShareComponent } from "@/atoms/Share";
import { Box } from "@mui/material";

const Home: NextPage = () => {
	const Share = useShareSns();

	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="user-scalable=yes, initial-scale=1.0, maximum-scale=2.0, minimum-scale=0.5, width=device-width"
				/>
			</Head>

			<Box
				component={"main"}
				sx={{
					width: "100%",
					height: "100%",
					position: "relative",
				}}
			>
				<MainCanvas />
				<MainActions onClickShare={Share.show} />

				<ShareComponent
					isOpenShareSns={Share.isOpenShareSns}
					onClose={Share.hide}
				/>
			</Box>
		</>
	);
};

export default Home;
