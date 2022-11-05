export function isKakaoBrowser() {
	if (navigator) {
		const Agent = navigator.userAgent.toLowerCase();

		console.log("[window ready] : [접속 Agent] : " + Agent);

		if (Agent.includes("kakao")) {
			return true;
		}
		return false;
	}
}

export function closeKakaoBrowser() {
	location.href = "kakaotalk://inappbrowser/close";
}

export function openChromeBrowser() {
	if (navigator) {
		if (navigator.userAgent.match(/iPhone|iPad/i)) {
			// 아이폰 접속 경우
			console.log("");
			console.log("[window ready] : [접속 모바일] : " + "[아이폰]");
			console.log("");
		} else {
			// 안드로이드 접속 경우
			console.log("");
			console.log("[window ready] : [접속 모바일] : " + "[안드로이드]");
			console.log("");
			// 크롬으로 새창 열기
			location.href =
				"intent://" +
				location.href.replace(/https?:\/\//i, "") +
				"#Intent;scheme=http;package=com.android.chrome;end";
		}
	}
}
