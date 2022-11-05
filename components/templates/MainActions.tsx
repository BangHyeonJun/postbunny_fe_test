import {
	closeKakaoBrowser,
	isKakaoBrowser,
	openChromeBrowser,
} from "@/lib/utils/Browser";
import { ShareSNS } from "@/lib/utils/Share";
import classNames from "classnames/bind";
import { useRouter } from "next/router";
import styles from "./MainActions.module.scss";

const cx = classNames.bind(styles);

function MainActions() {
	const router = useRouter();

	const handleClickPostBunnyBtn = () => {
		router.push(`/post/bunny`);
	};

	const handleClickShareBtn = () => {
		ShareSNS();
	};

	return (
		<>
			<div className={cx("top")}>
				<span className={cx("status")}>이름</span>
				<span className={cx("status")}>편지갯수</span>
			</div>

			<div className={cx("bottom")}>
				<button className={cx("feildBtn", "button")}>마이페이지</button>
				<button
					className={cx("postBtn", "button")}
					onClick={handleClickPostBunnyBtn}
				>
					토끼에게 당근 심어주기
				</button>
				<button
					className={cx("shareBtn", "button")}
					onClick={handleClickShareBtn}
				>
					공유하기
				</button>
			</div>
		</>
	);
}

export default MainActions;
