import Layout from "@/components/Layout";
import "@/styles/card.css";
import "@/styles/globals.css";
import "@/styles/scrollbar.css";
import "@/styles/shooting-stars.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
};

export default App;
