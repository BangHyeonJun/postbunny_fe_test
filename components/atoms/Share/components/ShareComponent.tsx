import { Box, Container, Drawer, Grid, Typography } from "@mui/material";
import React, { Fragment, useEffect } from "react";
import KakaoImg from "../assets/카카오톡.png";
import FacebookImg from "../assets/페이스북.png";
import TwitterImg from "../assets/트위터.png";
import URLImg from "../assets/URL.png";
import ShareItem, { ShareItemType } from "./ShareItem";
import { useRouter } from "next/router";

const ShareItemData = [
	{
		key: "KAKAO",
		src: KakaoImg,
		label: "카카오톡",
	},
	{
		key: "FACEBOOK",
		src: FacebookImg,
		label: "페이스북",
	},
	{
		key: "TWITTER",
		src: TwitterImg,
		label: "트위터",
	},
	{
		key: "URL",
		src: URLImg,
		label: "URL",
		copyURL: "// TODO : URL 적용 작업 진행해야함",
	},
];

interface ShareComponentProps {
	isOpenShareSns: boolean;
	onClose: () => void;
}

function ShareComponent({ isOpenShareSns, onClose }: ShareComponentProps) {
	const handleClickItem = ({
		type,
	}: {
		e: React.MouseEvent<HTMLElement, globalThis.MouseEvent>;
		type: ShareItemType;
	}) => {
		switch (type) {
			case "KAKAO":
				shareKakaotalk();
				break;
			case "FACEBOOK":
				shareFacebook();
				break;
			case "TWITTER":
				shareTwitter();
				break;
			case "URL":
				break;
		}
	};

	const shareKakaotalk = () => {
		// TODO : 카카오톡 공유하기 기능 구현해야함
		console.warn("카카오톡 공유하기 기능 생성해야함");
	};

	const shareFacebook = () => {
		// TODO : 페이스북 공유하기 기능 구현해야함
		console.warn("페이스북 공유하기 기능 생성해야함");
	};

	const shareTwitter = () => {
		// TODO : 트위터 공유하기 기능 구현해야함
		console.warn("트위터 공유하기 기능 생성해야함");
	};

	return (
		<Fragment key={"ShareSns"}>
			<Drawer
				PaperProps={{
					sx: {
						border: "0px solid #ffffff",
						borderRadius: "8px 8px 0px 0px",
					},
				}}
				anchor={"bottom"}
				open={isOpenShareSns}
				onClose={() => onClose()}
			>
				<Box
					sx={{
						padding: 2.5,
						display: "flex",
						flexDirection: "column",
					}}
				>
					<Typography variant="h1" component="h4">
						공유하기
					</Typography>
					<Box
						sx={{
							paddingTop: 2.5,
							paddingBottom: 2.5,
							paddingLeft: 0,
							paddingRight: 0,
							display: "flex",
							columnGap: 1,
							justifyContent: "center",
							flexWrap: "wrap",
						}}
					>
						{ShareItemData.map((data) => (
							<ShareItem
								key={data.key}
								type={data.key as ShareItemType}
								src={data.src}
								label={data.label}
								copyURL={data.copyURL ? data.copyURL : ""}
								onClick={handleClickItem}
							/>
						))}
					</Box>
				</Box>
			</Drawer>
		</Fragment>
	);
}

export default ShareComponent;
