import { ModalProvider } from "@/components/ModalContext";
import Layout from "@/layouts";
import { StoreProvider } from "@/redux/store-provider";
import "@/styles/globals.css";
import "@/styles/tableContent.css";
import "@fontsource/roboto"; // Defaults to weight 400
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css"; 
import "@fontsource/roboto/900.css"; 
import "@fontsource/roboto/400-italic.css"; // Specify weight and style
import theme from "@/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  // eslint-disable-next-line no-unused-vars
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page: any) => page);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <StoreProvider>
        <ChakraProvider theme={theme}>
          <ModalProvider>
            <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
          </ModalProvider>
        </ChakraProvider>
      </StoreProvider>
    </QueryClientProvider>
  );
};

export default App;
