import { toast } from "@/atoms/Toast";
import { ButtonBase, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Image, { StaticImageData } from "next/image";
import { CopyToClipboard } from "react-copy-to-clipboard";

const ImageButton = styled(ButtonBase)(({ theme }) => ({
	padding: 12,
	"&.MuiButtonBase-root": {
		borderRadius: 6,
		display: "flex",
		flexDirection: "column",
	},
}));

export type ShareItemType = "KAKAO" | "FACEBOOK" | "TWITTER" | "URL";

interface ShareItemButtonProps {
	src: StaticImageData;
	label: string;
	onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

function ShareItemButton({ src, label, onClick }: ShareItemButtonProps) {
	return (
		<ImageButton onClick={onClick}>
			<Image
				src={src}
				width={48}
				height={48}
				style={{
					borderRadius: 6,
				}}
				alt={`${label} 공유하기`}
			/>
			<Typography
				variant="button"
				component="p"
				sx={{
					marginTop: 1,
				}}
			>
				{label}
			</Typography>
		</ImageButton>
	);
}

interface ShareItemProps {
	type: ShareItemType;
	src: StaticImageData;
	label: string;
	copyURL: string;
	onClick?: ({
		e,
		type,
	}: {
		e: React.MouseEvent<HTMLElement>;
		type: ShareItemType;
	}) => void;
}

function ShareItem(props: ShareItemProps) {
	const { src, label, type, copyURL, onClick } = props;

	const handleClickItem = (e: React.MouseEvent<HTMLElement>) => {
		if (onClick) onClick({ e, type });
	};

	return (
		<>
			{type !== "URL" ? (
				<ShareItemButton {...props} onClick={handleClickItem} />
			) : (
				<>
					<CopyToClipboard
						text={copyURL}
						onCopy={() => toast({ text: "URL이 복사되었습니다" })}
					>
						<ShareItemButton src={src} label={label} />
					</CopyToClipboard>
				</>
			)}
		</>
	);
}

export default ShareItem;
