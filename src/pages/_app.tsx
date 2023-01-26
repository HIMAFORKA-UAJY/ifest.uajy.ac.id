import Layout from "@/components/Layout";
import "@/styles/card.css";
import "@/styles/globals.css";
import "@/styles/scrollbar.css";
import "@/styles/shooting-stars.css";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { RecoilEnv, RecoilRoot } from "recoil";

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

const App = ({ Component, pageProps, router }: AppProps) => {
  return (
    <RecoilRoot>
      <AnimatePresence>
        <Layout route={router.asPath}>
          <Component {...pageProps} />
        </Layout>
      </AnimatePresence>
    </RecoilRoot>
  );
};

export default App;
