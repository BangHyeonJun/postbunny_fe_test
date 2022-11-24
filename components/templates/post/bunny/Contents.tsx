import { Box, Button, styled } from "@mui/material";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { postState } from "@/recoil/post";
import Slider from "react-slick";
import { useRouter } from "next/router";

import whiteHello from "./안녕하얀토끼.png";

import style from "./Contents.module.scss";
import classNames from "classnames/bind";
import Image from "next/image";
import BunnyImg from "./BunnyImg";
import { NextArrowButton, PrevArrowButton } from "@/atoms/Button";

const cx = classNames.bind(style);

const bunnys = [
	{
		type: 1,
		src: "/images/hello/whitebunny_hello.png",
		name: "하얀 토끼",
	},
	{
		type: 2,
		src: "/images/hello/pinkbunny_hello.png",
		name: "핑크 토끼",
	},
	{
		type: 4,
		src: "/images/hello/brownbunny_hello.png",
		name: "갈색 얼룩 토끼",
	},
	{
		type: 5,
		src: "/images/hello/graybunny_hello.png",
		name: "회색 토끼",
	},
	{
		type: 6,
		src: "/images/hello/beigebunny_hello.png",
		name: "베이지 토끼",
	},
	{
		type: 7,
		src: "/images/hello/blackbunny_hello.png",
		name: "검정 얼룩 토끼",
	},
];

function Contents() {
	const router = useRouter();
	const [post, setPost] = useRecoilState(postState);

	useEffect(() => {
		// // TODO : 이부분은 테스트 이므로 수정해주어야 함
		// setPost((old) => ({
		// 	...old,
		// 	bunnyType: 1,
		// }));
	}, []);

	return (
		<Box
			className="bunnyContentsWrap"
			sx={{
				overflowX: "hidden",
			}}
		>
			<Slider
				dots={false}
				infinite={false}
				arrows={true}
				speed={500}
				slidesToShow={1}
				slidesToScroll={1}
				nextArrow={<NextArrowButton />}
				prevArrow={<PrevArrowButton />}
			>
				{bunnys.map((bunny) => (
					<BunnyImg
						key={bunny.type}
						src={bunny.src}
						width={{
							xs: 120,
							fold: 162,
							sm: 189,
							md: 189,
						}}
						height={{
							xs: 246,
							fold: 331,
							sm: 388,
							md: 388,
						}}
					/>
				))}
			</Slider>
		</Box>
	);
}

export default Contents;
