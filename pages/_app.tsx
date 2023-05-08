import Header from "@/components/common/Header/Header";
import "@/styles/globals.css";
import { AppState, Auth0Provider } from "@auth0/auth0-react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import {
  QueryClient,
  QueryClientProvider,
  Hydrate,
  type DehydratedState,
} from "react-query";
import { useState } from "react";

export default function App({
  Component,
  pageProps,
}: AppProps<{ dehydratedState: DehydratedState }>) {
  // const queryClient = new QueryClient();
  const [queryClient] = useState(() => new QueryClient());

  const router = useRouter();
  const onRedirectCallback = (appState?: AppState) => {
    // Use Next.js's Router.replace method to replace the url
    router.replace(appState?.returnTo || "/");
  };
  return (
    <UserProvider>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Header />
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </UserProvider>
  );
}
