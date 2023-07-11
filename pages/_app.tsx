import { RootStoreProvider } from "@mobx";
import "@styles/global.scss";
import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <RootStoreProvider>
          <Component {...pageProps} />
        </RootStoreProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
