import Layout from "@/components/Layout";
import "@/styles/card.css";
import "@/styles/globals.css";
import "@/styles/scrollbar.css";
import "@/styles/shooting-stars.css";
import { AnimatePresence, motion } from "framer-motion";
import type { AppProps } from "next/app";
import Router from "next/router";
import { useEffect, useState } from "react";
import { RecoilEnv, RecoilRoot } from "recoil";

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

const App = ({ Component, pageProps, router }: AppProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return loading ? (
    <AnimatePresence mode="wait">
      <motion.div
        animate={{ opacity: 1 }}
        className="flex h-screen w-full flex-col items-center justify-center bg-gradient-to-r from-[#29456c] to-[#261750]"
        exit={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        key={router.asPath}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          animate={{ opacity: 1 }}
          className="text-center font-gameofsquids text-6xl font-bold tracking-[0.1em] text-white lg:text-8xl"
          initial={{ opacity: 0.2 }}
          transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.5 }}
        >
          IFest#11
        </motion.div>
        <div className="pt-6 font-louisgeorgecafe text-lg tracking-widest text-white opacity-80">
          Fetching data...
        </div>
      </motion.div>
    </AnimatePresence>
  ) : (
    <RecoilRoot>
      <AnimatePresence mode="wait">
        <Layout route={router.asPath}>
          <Component {...pageProps} />
        </Layout>
      </AnimatePresence>
    </RecoilRoot>
  );
};

export default App;
