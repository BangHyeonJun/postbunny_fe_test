import MainCanvas from "@/templates/MainCanvas";
import type { NextPage } from "next";
import classNames from "classnames/bind";
import styles from "@/styles/index.module.scss";
import MainActions from "@/templates/MainActions";
import Head from "next/head";
import { useEffect } from "react";
import { useShareSns, ShareComponent } from "@/atoms/Share";
const cx = classNames.bind(styles);

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

			<main className={cx("container")}>
				<MainCanvas />
				<MainActions onClickShare={Share.show} />

				<ShareComponent
					isOpenShareSns={Share.isOpenShareSns}
					onClose={Share.hide}
				/>
			</main>
		</>
	);
};

export default Home;
