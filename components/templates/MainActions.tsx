import classNames from "classnames/bind";
import styles from "./MainActions.module.scss";

const cx = classNames.bind(styles);

function MainActions() {
	return (
		<>
			{/* <div className={cx("wrap")}> */}
			<div className={cx("top")}>
				<span className={cx("status")}>이름</span>
				<span className={cx("status")}>편지갯수</span>
			</div>

			<div className={cx("bottom")}>
				<button className={cx("feildBtn", "button")}>마이페이지</button>
				<button className={cx("postBtn", "button")}>
					토끼에게 당근 심어주기
				</button>
				<button className={cx("shareBtn", "button")}>공유하기</button>
			</div>
			{/* </div> */}
		</>
	);
}

export default MainActions;
