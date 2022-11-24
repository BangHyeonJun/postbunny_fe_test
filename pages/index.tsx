import MainCanvas from "@/templates/MainCanvas";
import type { NextPage } from "next";
import MainActions from "@/templates/MainActions";
import Head from "next/head";
import { useShareSns, ShareComponent } from "@/atoms/Share";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";


const Home: NextPage = () => {
	const router = useRouter();
	const Share = useShareSns();

	useEffect(() => {
		if (location.hash === "#share") {
			router.replace("/");
		}

		const handleHashChange = (url: string) => {
			if (url === "/#share") {
				Share.show();
			} else {
				Share.hide();
			}
		};

		router.events.on("hashChangeStart", handleHashChange);

		return () => {
			router.events.off("hashChangeStart", handleHashChange);
		};
	}, []);

	const handleShowShare = () => {
		router.push("#share");
	};

	const handleHideShare = () => {
		router.back();
	};

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
				<MainActions onClickShare={handleShowShare} />

				<ShareComponent
					isOpenShareSns={Share.isOpenShareSns}
					onClose={handleHideShare}
				/>
			</Box>
		</>
	);
};

export default Home;
