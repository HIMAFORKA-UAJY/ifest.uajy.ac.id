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
        className="w-screen bg-[url('/images/bg-flip-fix.png')] bg-cover bg-center bg-no-repeat"
      >
        <div className="hidden w-screen flex-col items-center justify-center lg:flex">
          <div className="flex items-center justify-center">
            <img
              className="w-[600px]"
              src="https://ifest.uajy.ac.id/assets/images/event/ill-i2c.png"
              alt="i2c"
            />
            <div className="flex flex-col">
              <div className="pl-[1rem] font-retroica text-4xl tracking-wide text-white">I2C</div>
              <div className="pl-[1rem] pb-[0.5rem] font-retroica text-2xl text-white">
                Innovative Informatics Contest
              </div>
              <div className="flex gap-4 pl-[1rem] font-retroica text-sm text-white">
                <div className="rounded-full bg-gradient-to-r from-[#ba87fb] to-[#ba87fb] p-1">
                  <div className="flex items-center gap-1 rounded-full bg-[#2b2265] p-1 px-[0.5rem]">
                    <FaWallet />
                    Gratis
                  </div>
                </div>
                <div className="rounded-full bg-gradient-to-r from-[#ba87fb] to-[#ba87fb] p-1">
                  <div className="flex items-center gap-1 rounded-full bg-[#2b2265] p-1 px-[0.5rem]">
                    <FaBook />
                    SMA/Sederajat
                  </div>
                </div>
                <div className="rounded-full bg-gradient-to-r from-[#ba87fb] to-[#ba87fb] p-1">
                  <div className="flex items-center gap-1 rounded-full bg-[#2b2265] p-1 px-[0.5rem]">
                    <FaMale />
                    Max. 3 orang
                  </div>
                </div>
              </div>
              <div className="w-[32em] p-4 font-retroica text-white">
                <p className="text-justify">
                  <strong>Innovative Informatics Contest</strong> (I2C) 2022 adalah sebuah kompetisi
                  ide kreatif untuk merancang aplikasi yang inovatif secara berkelompok
                  beranggotakan 3 orang. I2C 2022 ini mengusung tema "A Journey To Better Home
                  Living".
                </p>
              </div>
              <div className="pl-[1rem]">
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
          </div>
        </div>
        <div className="flex h-screen w-screen flex-col items-center justify-center px-4 lg:hidden">
          <img
            className="w-72"
            src="https://ifest.uajy.ac.id/assets/images/event/ill-i2c.png"
            alt="i2c"
          />
          <div className="text-center">
            <div className="font-retroica text-4xl tracking-wide text-white">I2C</div>
            <div className="px-4 pb-[1rem] font-retroica text-2xl text-white">
              Innovative Informatics Contest
            </div>
          </div>
          <div className="flex gap-2 px-2 font-retroica text-sm text-white">
            <div className="rounded-full bg-gradient-to-r from-[#ba87fb] to-[#ba87fb] p-1">
              <div className="flex flex-wrap items-center justify-center gap-1 rounded-full bg-[#2b2265] p-1 px-[0.35rem]">
                <FaWallet />
                Gratis
              </div>
            </div>
            <div className="rounded-full bg-gradient-to-r from-[#ba87fb] to-[#ba87fb] p-1">
              <div className="flex flex-wrap items-center justify-center gap-1 rounded-full bg-[#2b2265] p-1 px-[0.35rem]">
                <FaBook />
                SMA/Sederajat
              </div>
            </div>
            <div className="rounded-full bg-gradient-to-r from-[#ba87fb] to-[#ba87fb] p-1">
              <div className="flex flex-wrap items-center justify-center gap-1 rounded-full bg-[#2b2265] p-1 px-[0.35rem]">
                <FaMale />
                Max. 3 orang
              </div>
            </div>
          </div>
          <div className="pt-2" />
          <div className="p-4 font-retroica text-white">
            <p className="text-justify">
              <strong>Innovative Informatics Contest</strong> (I2C) 2022 adalah sebuah kompetisi ide
              kreatif untuk merancang aplikasi yang inovatif secara berkelompok beranggotakan 3
              orang. I2C 2022 ini mengusung tema "A Journey To Better Home Living".
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
