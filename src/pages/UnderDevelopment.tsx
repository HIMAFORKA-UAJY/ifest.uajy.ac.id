import { motion } from "framer-motion";
import { FC } from "react";
import { Link } from "react-router-dom";

import Layout from "../components/Layout";

const UnderDevelopment: FC = () => {
  return (
    <Layout>
      <div className="absolute top-0 -z-10 h-screen w-screen bg-[url('/images/bg-no-flip.png')] bg-cover bg-center bg-no-repeat">
        <div className="bg-gradient-to-b from-[#83204A]/80 to-[#8E332D]/80 font-retroica">
          <motion.div className="flex h-screen flex-col items-center justify-center gap-6">
            <div className="text-5xl font-bold text-white">ヅ</div>
            <div className="text-5xl font-bold text-white">Under Development</div>
            <div className="px-8 text-center text-lg text-white">
              Sabar ya, kita lagi buat sesuatu yang spesial disini!
              <br />
              <br />
              Ingin kembali ke Homepage?
            </div>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.0, duration: 0.25 }}
              className="rounded-[2.0em] bg-[#E45D6D] bg-gradient-to-br from-[#DB7F58] px-5 py-3 font-retroica text-sm text-white lg:text-base"
            >
              <Link to="/">Kembali ke Homepage</Link>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default UnderDevelopment;
