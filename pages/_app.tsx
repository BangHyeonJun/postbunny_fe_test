import type { AppProps } from "next/app";
import { useState } from "react";
import {
	Hydrate,
	QueryClient,
	QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "@/styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps<any>) {
	const [queryClient] = useState(() => new QueryClient());

	return (
		<QueryClientProvider client={queryClient}>
			<Hydrate state={pageProps.dehydratedState}>
				<Component {...pageProps} />
			</Hydrate>
			<ReactQueryDevtools />
		</QueryClientProvider>
	);
}

export default MyApp;
