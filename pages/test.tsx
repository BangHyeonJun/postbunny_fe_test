import { toast } from "@/atoms/Toast";
import { postState } from "@/recoil/post";
import Actions from "@/templates/post/letter/Actions";
import ColorPicker from "@/templates/post/letter/ColorPicker";
import LetterBox from "@/templates/post/letter/LetterBox";
import Status from "@/templates/post/letter/Status";
import { Box, Container, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

function Letter() {
	const [post, setPost] = useRecoilState(postState);

	return (
		<>
			<TextField
				id="filled-textarea"
				label="Multiline Placeholder"
				placeholder="Placeholder"
				multiline
				variant="filled"
			/>
		</>
	);
}

export default Letter;
