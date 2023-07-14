import { RootStoreProvider } from "@mobx";
import "@styles/global.scss";
import { AppProps } from "next/app";
import { DehydratedState, QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import "tailwindcss/tailwind.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }: AppProps<{ dehydratedState: DehydratedState }>): JSX.Element { // jika Error dehydratedState Tambahkan <{ dehydratedState: DehydratedState }>
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
