import { BackButton, TextButton } from "@/atoms/Button";
import { Description } from "@/atoms/Description";
import { LinearProgress } from "@/atoms/Progress";
import Actions from "@/templates/post/carrot/Actions";
import Contents from "@/templates/post/carrot/Contents";
import MainCanvas from "@/templates/post/carrot/MainCanvas";
import Status from "@/templates/post/carrot/Status";
import { Box, Container, Grid } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carrot() {
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

	const handleClickBackButton = () => {
		router.back();
	};

	const handleClickNextStep = () => {
		router.push("/post/carrot");
	};

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

export default Carrot;
