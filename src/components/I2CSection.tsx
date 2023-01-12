import { motion } from "framer-motion";
import { FC, useRef } from "react";
import { FaBook, FaMale, FaWallet } from "react-icons/all";
import { Link } from "react-router-dom";

import HeroMain from "./HeroMain";

const I2CSection: FC = () => {
  const i2cRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <HeroMain i2cRef={i2cRef} />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
        ref={i2cRef}
        className="h-screen w-screen bg-[url('/images/bg-flip-fix.png')] bg-cover bg-center bg-no-repeat"
      >
        <div className="hidden w-screen flex-col items-center justify-center  lg:flex">
          <div className="flex items-center justify-center">
            <img className="w-[600px]" src="/images/ill-i2c.png" alt="i2c" />
            <div className="flex flex-col">
              <div className="pl-[1rem] font-retroica text-4xl tracking-wide text-white">I2C</div>
              <div className="pl-[1rem] pb-[0.5rem] font-retroica text-2xl text-white">
                Innovative Informatics Contest
              </div>
              <div className="flex gap-4 pl-[1rem] font-retroica text-sm text-white">
                <div className="rounded-full bg-gradient-to-r from-[#ba87fb] to-[#ba87fb] p-1">
                  <div className="flex items-center gap-1 rounded-full bg-[#2b2265] p-1 px-[0.5rem]">
                    <div style={{ "margin-top": `${-0.1}rem` }}>
                      <FaBook />
                    </div>
                    <p style={{ "margin-top": `${0.1}rem` }}> SMA / Sederajat </p>
                  </div>
                </div>
                <div className="rounded-full bg-gradient-to-r from-[#ba87fb] to-[#ba87fb] p-1">
                  <div className="flex items-center gap-1 rounded-full bg-[#2b2265] p-1 px-[0.5rem]">
                    <div style={{ "margin-top": `${-0.1}rem` }}>
                      <FaWallet />
                    </div>
                    <p style={{ "margin-top": `${0.1}rem` }}> Rp. 150K / tim </p>
                  </div>
                </div>
                <div className="rounded-full bg-gradient-to-r from-[#ba87fb] to-[#ba87fb] p-1">
                  <div className="flex items-center gap-1 rounded-full bg-[#2b2265] p-1 px-[0.5rem]">
                    <div style={{ "margin-top": `${-0.1}rem` }}>
                      <FaMale />
                    </div>
                    <p style={{ "margin-top": `${0.1}rem` }}> 3 peserta / tim </p>
                  </div>
                </div>
              </div>
              <div className="w-[32em] p-4 font-louisgeorgecafe text-white">
                <p className="text-justify">
                  <strong>Innovative Informatics Contest</strong> (I2C) adalah sebuah kompetisi yang
                  menguji kemampuan peserta dalam menyusun ide untuk memecahkan berbagai
                  permasalahan yang ada di dunia dengan memberikan solusi melalui pendekatan
                  Teknologi Informasi.
                </p>
              </div>
              <div className="pl-[1rem]">
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.0, duration: 0.25 }}
                  className="mt-7 rounded-[2.0em] bg-[#986cd1] bg-gradient-to-br from-[#6a8be0] px-5 py-3 font-retroica text-sm text-white transition-all hover:scale-105 hover:shadow-[0_0px_80px_0px_#886fcb] lg:text-base"
                >
                  <Link to="/i2c">Read More</Link>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex h-screen w-screen flex-col items-center justify-center px-4 py-4 lg:hidden"
          style={{ paddingBottom: "6rem" }}
        >
          <img className="w-72" src="/images/ill-i2c.png" alt="i2c" />
          <div className="text-center">
            <div className="font-retroica text-4xl tracking-wide text-white">I2C</div>
            <div className="px-4 pb-[1rem] font-retroica text-2xl text-white">
              Innovative Informatics Contest
            </div>
          </div>
          <div
            className="flex flex-col gap-2 px-2 font-retroica text-sm text-white"
            style={{ width: "70%" }}
          >
            <div className="h-fit rounded-full bg-gradient-to-r from-[#ba87fb] to-[#ba87fb] p-1">
              <div
                className="flex flex-col flex-wrap items-center justify-center gap-1 rounded-full bg-[#2b2265] p-1 px-[0.35rem] text-center"
                style={{ padding: "1rem" }}
              >
                <FaBook />
                SMA / Sederajat
              </div>
            </div>
            <div className="h-fit rounded-full bg-gradient-to-r from-[#ba87fb] to-[#ba87fb] p-1">
              <div
                className="flex flex-col flex-wrap items-center justify-center gap-1 rounded-full bg-[#2b2265] p-1 px-[0.35rem] text-center"
                style={{ padding: "1rem" }}
              >
                <FaWallet />
                Rp. 150k / tim
              </div>
            </div>
            <div className="h-fit rounded-full bg-gradient-to-r from-[#ba87fb] to-[#ba87fb] p-1">
              <div
                className="flex flex-wrap items-center justify-center gap-1 rounded-full bg-[#2b2265] p-1 px-[0.35rem] text-center"
                style={{ padding: "1rem" }}
              >
                <FaMale />3 peserta / tim
              </div>
            </div>
          </div>
          <div className="pt-2" />
          <div className="p-4 font-louisgeorgecafe text-white">
            <p className="text-justify">
              <strong>Innovative Informatics Contest</strong> (I2C) adalah sebuah kompetisi yang
              menguji kemampuan peserta dalam menyusun ide untuk memecahkan berbagai permasalahan
              yang ada di dunia dengan memberikan solusi melalui pendekatan Teknologi Informasi.
            </p>
          </div>
          <div>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.0, duration: 0.25 }}
              className="mt-7 rounded-[2.0em] bg-[#ba87fb] bg-gradient-to-br from-[#7fa2fe] px-5 py-3 font-retroica text-sm text-white lg:text-base"
            >
              <Link to="/i2c">Read More</Link>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default I2CSection;
