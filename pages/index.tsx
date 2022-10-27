import MainCanvas from "@/templates/MainCanvas";
import type { NextPage } from "next";
import classNames from "classnames/bind";
import styles from "@/styles/index.module.scss";
import MainActions from "@/templates/MainActions";
import Head from "next/head";

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
				{/* <div
				style={{
					width: "100%",
					height: 70,
				}}
			>
				<button
					style={{
						width: canvasWidth - 140,
						height: "100%",
						border: 0,
						margin: 0,
						backgroundColor: "#9E7676",
						color: "#fff",
					}}
				>
					편지작성
				</button>
				<button
					style={{
						width: 70,
						height: "100%",
						border: 0,
						margin: 0,
						backgroundColor: "#9E7676",
						color: "#fff",
					}}
				>
					필드생성
				</button>
				<button
					style={{
						width: 70,
						height: "100%",
						border: 0,
						margin: 0,
						backgroundColor: "#9E7676",
						color: "#fff",
					}}
				>
					공유
				</button>
			</div> */}
			</main>
		</>
	);
};

export default Home;