import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Contents from "@/templates/post/bunny/Contents";
import Status from "@/templates/post/bunny/Status";
import Actions from "@/templates/post/bunny/Actions";
import { useRecoilState } from "recoil";
import { postState as postStateKey } from "@/recoil/post";
import MainCanvas from "@/templates/post/bunny/MainCanvas";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Bunny() {
	const router = useRouter();

	useEffect(() => {
		function removeEvent(e: any) {
			e.preventDefault();
			e.stopPropagation();
		}

		document.body.addEventListener("touchmove", removeEvent, {
			passive: false,
		});
		document.body.addEventListener("onclick", removeEvent, {
			passive: false,
		});
		document.body.addEventListener("mousewheel", removeEvent, {
			passive: false,
		});

		document.body.style.overflow = "hidden";
		document.body.style.touchAction = "none";

		function setScreenSize() {
			let vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty("--vh", `${vh}px`);
		}
		window.addEventListener("resize", () => setScreenSize());
		setScreenSize();

		return () => {
			window.removeEventListener("resize", () => setScreenSize());
			document.body.removeEventListener("touchmove", removeEvent);
			document.body.removeEventListener("onclick", removeEvent);
			document.body.removeEventListener("mousewheel", removeEvent);
		};
	}, []);

	return (
		<>
			<Box
				sx={{
					width: "100vw",
					height: "100vh",
					position: "absolute",
					top: 0,
					left: 0,
					zIndex: 1,
				}}
			>
				<Box
					sx={{
						width: "100%",
						height: "100%",
						position: "relative",
					}}
				>
					<MainCanvas />
				</Box>
			</Box>
			<Box
				component={"main"}
				sx={{
					width: "100vw",
					height: "100vh",
					position: "absolute",
					top: 0,
					left: 0,
					zIndex: 10,
				}}
			>
				<Container
					maxWidth={"md"}
					sx={{
						width: "100%",
						padding: "0px !important",
						position: "relative",
					}}
				>
					<Box
						display={"grid"}
						sx={{
							width: "100%",
							height: "100%",
							minHeight: "calc(var(--vh, 1vh) * 100)",
							gridTemplateRows: "86px 1fr 80px",
							gridTemplateColumns: "1fr",
							padding: "20px",
						}}
					>
						<Status />
						<Contents />
						<Actions />
					</Box>
				</Container>
			</Box>
		</>
	);
}

export default Bunny;
