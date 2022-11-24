import { toast } from "@/atoms/Toast";
import { getMobileOperatingSystem } from "@/lib/utils/mobile";
import { postState } from "@/recoil/post";
import Actions from "@/templates/post/letter/Actions";
import ColorPicker from "@/templates/post/letter/ColorPicker";
import LetterBox from "@/templates/post/letter/LetterBox";
import Status from "@/templates/post/letter/Status";
import { Box, Container } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import useDetectKeyboardOpen from "use-detect-keyboard-open";

function Letter() {
	const [post, setPost] = useRecoilState(postState);
	const [viewportHeight, setViewportHeight] = useState(0);
	const [from, setFrom] = useState("");
	const [content, setContent] = useState("");
	const [colorType, setColorType] = useState("");
	const router = useRouter();
	const isKeyboardOpen = useDetectKeyboardOpen();

	useEffect(() => {
		document.documentElement.style.minHeight = "100%";
		document.documentElement.style.height = "100%";
		document.body.style.height = "100%";
		document.body.style.minHeight = "100%";
	}, []);

	useEffect(() => {
		if (isKeyboardOpen === true && getMobileOperatingSystem() === "ios") {
			document.documentElement.style.overflow = "hidden";
			document.body.style.overflow = "hidden";
			document.documentElement.style.minHeight = "";
			document.documentElement.style.height = "";
			document.body.style.height = "";
			document.body.style.minHeight = "";
			setTimeout(() => {
				if (typeof window !== "undefined") {
					window.scrollTo(0, 0);
				}
			}, 100);
		} else {
			document.documentElement.style.overflow = "";
			document.body.style.overflow = "";
			document.documentElement.style.minHeight = "100%";
			document.documentElement.style.height = "100%";
			document.body.style.height = "100%";
			document.body.style.minHeight = "100%";
		}
	}, [isKeyboardOpen]);

	// useEffect(() => {
	// 	function removeEvent(e: any) {
	// 		e.preventDefault();
	// 		e.stopPropagation();
	// 	}

	// 	document.body.addEventListener("touchmove", removeEvent, {
	// 		passive: false,
	// 	});
	// 	document.body.addEventListener("onclick", removeEvent, {
	// 		passive: false,
	// 	});
	// 	document.body.addEventListener("mousewheel", removeEvent, {
	// 		passive: false,
	// 	});

	// 	document.body.style.overflow = "hidden";
	// 	document.body.style.touchAction = "none";

	// 	function setScreenSize() {
	// 		let vh = window.innerHeight * 0.01;
	// 		document.documentElement.style.setProperty("--vh", `${vh}px`);
	// 	}
	// 	window.addEventListener("resize", () => setScreenSize());
	// 	setScreenSize();

	// 	return () => {
	// 		window.removeEventListener("resize", () => setScreenSize());
	// 		document.body.removeEventListener("touchmove", removeEvent);
	// 		document.body.removeEventListener("onclick", removeEvent);
	// 		document.body.removeEventListener("mousewheel", removeEvent);
	// 	};
	// }, []);

	const handleChangeFrom = (val: string) => {
		setPost((old) => ({
			...old,
			isPostCompleted:
				val !== "" && old.postContnet !== "" && old.postColorType !== ""
					? true
					: false,
			postFrom: val,
		}));
	};

	const handleChangeContent = (val: string) => {
		setPost((old) => ({
			...old,
			isPostCompleted:
				old.postFrom !== "" && val !== "" && old.postColorType !== ""
					? true
					: false,
			postContnet: val,
		}));
	};

	const handleChangeColortype = (val: string) => {
		setPost((old) => ({
			...old,
			isPostCompleted:
				old.postFrom !== "" && old.postContnet !== "" && val !== ""
					? true
					: false,
			postColorType: val,
		}));
	};

	const handleClickPostFinish = () => {
		toast({ text: "당근이 심어졌어요 🥕" });
		// router.push("/");
		// console.log(post);
		alert(`${document.documentElement.style.height}`);
	};

	return (
		<>
			{/* 배경화면 */}
			<Box
				position={"fixed"}
				sx={{
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					backgroundImage: "url(/images/background.png)",
					backgroundSize: "calc((3840 * 100vh)/2160) 100vh",
				}}
			/>

			{/* 화면 */}
			<Container
				component={"main"}
				maxWidth={"md"}
				sx={{
					width: "100%",
					height:
						isKeyboardOpen === true && getMobileOperatingSystem() === "ios"
							? `${window?.visualViewport?.height}px`
							: "100%",
					overflowY:
						isKeyboardOpen === true && getMobileOperatingSystem() === "ios"
							? `auto`
							: "",
					paddingTop: `0px !important`,
					paddingLeft: `0px !important`,
					paddingBottom: "0px !important",
					paddingRight: `0px !important`,
				}}
			>
				<Box
					display={"flex"}
					flexDirection={"column"}
					justifyContent={"space-between"}
					sx={{
						width: "100%",
						height: "100%",
						// minHeight: "100vh",
						// minHeight: "calc(var(--vh, 1vh) * 100)",
						padding: "20px",
					}}
				>
					<Status />
					<LetterBox
						from={post.postFrom}
						to={post.postTo}
						content={post.postContnet}
						colorType={post.postColorType}
						onChangeFrom={handleChangeFrom}
						onChangeContent={handleChangeContent}
					/>
					<Box>
						<ColorPicker
							color={post.postColorType}
							onChange={handleChangeColortype}
						></ColorPicker>
						<Actions onFinish={handleClickPostFinish} />
					</Box>
				</Box>
			</Container>
		</>
	);
}

export default Letter;
