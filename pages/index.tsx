import MainCanvas from "@/templates/MainCanvas";
import type { NextPage } from "next";
import classNames from "classnames/bind";
import styles from "@/styles/index.module.scss";
import MainActions from "@/templates/MainActions";
import Head from "next/head";
import { useEffect } from "react";

const cx = classNames.bind(styles);

const Home: NextPage = () => {
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
				<MainActions />
			</main>
		</>
	);
};

export default Home;
