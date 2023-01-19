import Layout from "@/components/Layout";
import "@/styles/card.css";
import "@/styles/globals.css";
import "@/styles/scrollbar.css";
import "@/styles/shooting-stars.css";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
