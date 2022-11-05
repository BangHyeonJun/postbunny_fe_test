export function ShareSNS() {
	alert("들어오긴 하냐?");
	if ((navigator as any).share) {
		navigator
			.share({
				title: "새해 토끼",
				text: "새해엔 토끼가 편지를 드려요",
				url: "https://google.com",
			})
			.then(() => alert("Successful share"))
			.catch((error) => alert("Error sharing"));
	}
}
