import { motion } from "framer-motion";
import Link from "next/link";
import { FC } from "react";

const Error404: FC = () => {
  return (
    <div className="absolute top-0 -z-10 min-h-screen w-full bg-[url('/images/bg-no-flip.png')] bg-cover bg-center bg-no-repeat">
      <div className="bg-gradient-to-b from-[#83204a]/80 to-[#8e332d]/80 font-retroica">
        <motion.div className="flex min-h-screen flex-col items-center justify-center gap-6 text-white">
          <div className="text-5xl font-bold">(╯︵╰,)</div>
          <div className="text-5xl font-bold">404</div>
          <div className="py-4 text-center text-lg">
            <p>Oh no, laman yang Anda ingin kunjungi tidak ada...</p>
            <p>Ingin kembali ke Homepage?</p>
          </div>
          <Link href="/">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25 }}
              className="hover:shadow-l rounded-[2.0em] bg-[#e45d6d] bg-gradient-to-br from-[#db7f58] px-5 py-3 font-retroica text-sm tracking-wide transition-all hover:tracking-widest lg:text-base"
            >
              Kembali ke Homepage
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Error404;
