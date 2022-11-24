import { NextArrowButton, PrevArrowButton } from "@/atoms/Button";
import { postState } from "@/recoil/post";
import { Box } from "@mui/material";
import { useEffect } from "react";
import Slider from "react-slick";
import { useRecoilState } from "recoil";
import CarrotImg from "./CarrotImg";

const carrots = [
	{
		type: 0,
		src: "/images/carrot/carrot.png",
		index: 0,
		name: "간지 당근",
	},
	{
		type: 1,
		src: "/images/carrot/carrot.png",
		index: 1,
		name: "화장 당근",
	},
	{
		type: 2,
		src: "/images/carrot/carrot.png",
		index: 2,
		name: "띠옹 당근",
	},
	{
		type: 3,
		src: "/images/carrot/carrot.png",
		index: 3,
		name: "웃음 당근",
	},
	{
		type: 4,
		src: "/images/carrot/carrot.png",
		index: 4,
		name: "활짝 토끼",
	},
	{
		type: 5,
		src: "/images/carrot/carrot.png",
		index: 5,
		name: "여성 토끼",
	},
];

function Contents() {
	const [post, setPost] = useRecoilState(postState);

	useEffect(() => {
		// TODO : 이부분은 테스트 이므로 수정해주어야 함
		// setPost((old) => ({
		// 	...old,
		// 	carrotType: 1,
		// }));
	}, []);
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<Box
			className="carrotContentsWrap"
			sx={{
				overflowX: "hidden",
			}}
		>
			<Slider
				dots={false}
				infinite={false}
				speed={500}
				slidesToShow={1}
				slidesToScroll={1}
				vertical={false}
				verticalSwiping={false}
				arrows={true}
				nextArrow={<NextArrowButton />}
				prevArrow={<PrevArrowButton />}
			>
				{carrots.map((carrot) => (
					<CarrotImg
						key={carrot.type}
						src={carrot.src}
						index={carrot.index}
						width={{
							xs: 120,
							fold: 162,
							sm: 189,
							md: 189,
						}}
						height={{
							xs: 168,
							fold: 227,
							sm: 265,
							md: 265,
						}}
					/>
				))}
			</Slider>
		</Box>
	);
}

export default Contents;
