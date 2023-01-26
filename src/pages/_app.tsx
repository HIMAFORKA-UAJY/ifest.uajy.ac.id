import Layout from "@/components/Layout";
import "@/styles/card.css";
import "@/styles/globals.css";
import "@/styles/scrollbar.css";
import "@/styles/shooting-stars.css";
import type { AppProps } from "next/app";
import { RecoilEnv, RecoilRoot } from "recoil";

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

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
