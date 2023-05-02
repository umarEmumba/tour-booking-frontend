import '@/styles/globals.css'
import { AppState, Auth0Provider } from '@auth0/auth0-react';
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import { QueryClient, QueryClientProvider, Hydrate, type DehydratedState } from "react-query";


export default function App({ Component, pageProps }: AppProps<{ dehydratedState: DehydratedState }>) {
  const queryClient = new QueryClient();
  const router = useRouter();
  const onRedirectCallback = (appState ?: AppState) => {
    // Use Next.js's Router.replace method to replace the url
    router.replace(appState?.returnTo || '/');
  };
  return (
          <Auth0Provider
            domain="dev-cqs8ig03yeg5hvqb.us.auth0.com"
            clientId="rYLUa0b2xgAtLxU82BYbodZalDFsRSNY"
            onRedirectCallback={onRedirectCallback}
            authorizationParams={{
              redirect_uri: typeof window !== 'undefined' ? window.location.origin : undefined,
            }}
          >
          <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
                <Component {...pageProps} />

            </Hydrate>
            
          </QueryClientProvider>
        </Auth0Provider>
  )
}
