import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import {
	Hydrate,
	QueryClient,
	QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "@/styles/globals.scss";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";
import { RecoilRoot } from "recoil";

const clientSideEmotionCache = createEmotionCache();
interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache;
}

function MyApp(props: MyAppProps) {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
	const [queryClient] = useState(() => new QueryClient());

	return (
		<QueryClientProvider client={queryClient}>
			<Hydrate state={(pageProps as any).dehydratedState}>
				<RecoilRoot>
					<CacheProvider value={emotionCache}>
						<ThemeProvider theme={theme}>
							{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
							<CssBaseline />
							<Component {...pageProps} />
						</ThemeProvider>
					</CacheProvider>
				</RecoilRoot>
			</Hydrate>

			{/* 추후 쿼리 사용할 때 열기*/}
			{/* <ReactQueryDevtools /> */}
		</QueryClientProvider>
	);
}

export default MyApp;
