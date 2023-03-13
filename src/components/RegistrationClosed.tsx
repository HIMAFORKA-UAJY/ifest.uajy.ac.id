import { navColors } from "@/recoil/atoms";
import { motion } from "framer-motion";
import { FC } from "react";
import { useSetRecoilState } from "recoil";

const RegistrationClosed: FC = () => {
  useSetRecoilState(navColors)({ bg1: "#150782", bg2: "#0e60aa", fg: "#6dafeb" });
  return (
    <div className="absolute top-0 -z-10 min-h-screen w-full bg-[url('/images/bg-no-flip.webp')] bg-cover bg-center bg-no-repeat">
      <div className="bg-gradient-to-b from-[#4067ba]/80 to-[#2e2190]/80 font-retroica">
        <div className="flex min-h-screen flex-col items-center justify-center gap-8 px-4 pt-32 pb-8">
          <div className="text-center text-4xl font-bold tracking-[0.1em] text-white lg:text-5xl">
            Registration Closed
          </div>
          <div className="px-8 text-center text-lg text-white">
            Pendaftaran event ini sudah ditutup.
          </div>
          <motion.button
            className="rounded-[2.0em] bg-[#35729a] bg-gradient-to-br from-[#57a5be] px-5 py-3 font-retroica text-sm tracking-wide text-white transition-all hover:shadow-md lg:text-base"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <a href="/">Stay Tuned . .</a>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationClosed;
