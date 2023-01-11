import { motion } from "framer-motion";
import { FC } from "react";
import { FaBook, FaMale, FaWallet } from "react-icons/all";
import { Link } from "react-router-dom";

const DonorDarahSection: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="w-screen bg-[rgb(43,34,101)]"
    >
      <div className="hidden w-screen flex-col items-center justify-center pb-24 pt-24 lg:flex">
        <div className="flex items-center justify-center">
          <img
            className="w-[500px]"
            style={{ marginRight: "2rem" }}
            src="public/images/dondar-section-bg.png"
            alt="wdc"
          />
          <div className="flex flex-col">
            <div className="pl-[1rem] pb-4 font-retroica text-4xl tracking-wide text-white">
              Donor Darah
            </div>

            <div className="flex gap-4 pl-[1rem] font-retroica text-sm text-white">
              <div className="rounded-full bg-gradient-to-r from-[#fd9807] to-[#ff7676] p-1">
                <div className="flex items-center gap-1 rounded-full bg-[#2b2265] p-1 px-[0.5rem]">
                  <FaWallet />
                  Gratis
                </div>
              </div>
              <div className="rounded-full bg-gradient-to-r from-[#fd9807] to-[#ff7676] p-1">
                <div className="flex items-center gap-1 rounded-full bg-[#2b2265] p-1 px-[0.5rem]">
                  <FaBook />
                  Umum
                </div>
              </div>
              <div className="rounded-full bg-gradient-to-r from-[#fd9807] to-[#ff7676] p-1">
                <div className="flex items-center gap-1 rounded-full bg-[#2b2265] p-1 px-[0.5rem]">
                  <FaMale />
                  Daftar online / onsite
                </div>
              </div>
            </div>
            <div className="w-[32em] p-4 font-louisgeorgecafe text-white">
              <p className="text-justify">
                <strong>Donor darah </strong> adalah suatu aksi kebaikan yang dilakukan dengan cara
                menyumbangkan sebagian darah kepada orang lain yang membutuhkan.
              </p>
            </div>
            <div className="pl-[1rem]">
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.0, duration: 0.25 }}
                className="mt-7 rounded-[2.0em] bg-[#ff7676] bg-gradient-to-br from-[#fd9807] px-5 py-3 font-retroica text-sm text-white transition-all hover:scale-105 hover:shadow-[0_0px_80px_0px_#fd9807] lg:text-base"
              >
                <Link to="/donor-darah">Read More</Link>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-screen w-screen flex-col items-center justify-center px-4 lg:hidden">
        <img
          className="w-72"
          src="public/images/dondar-section-bg.png"
          style={{ marginBottom: "3rem" }}
          alt="wdc"
        />
        <div className="text-center">
          <div className="pb-4 font-retroica text-4xl tracking-wide text-white">Donor Darah</div>
        </div>
        <div className="flex gap-2 px-2 font-retroica text-sm text-white">
          <div className="rounded-full bg-gradient-to-r from-[#fd9807] to-[#ff7676] p-1">
            <div className="flex flex-wrap items-center justify-center gap-1 rounded-full bg-[#2b2265] p-1 px-[0.35rem] text-center">
              <FaWallet />
              Gratis
            </div>
          </div>
          <div className="h-fit rounded-full bg-gradient-to-r from-[#fd9807] to-[#ff7676] p-1">
            <div className="flex flex-wrap items-center justify-center gap-1 rounded-full bg-[#2b2265] p-1 px-[0.35rem]">
              <FaBook />
              Umum
            </div>
          </div>
          <div className="rounded-full bg-gradient-to-r from-[#fd9807] to-[#ff7676] p-1">
            <div className="flex flex-wrap items-center justify-center gap-1 rounded-full bg-[#2b2265] p-1 px-[0.35rem] text-center">
              <FaMale />
              Daftar online / onsite
            </div>
          </div>
        </div>
        <div className="pt-2" />
        <div className="p-4 font-louisgeorgecafe text-white">
          <p className="text-justify">
            <strong>Web Design Competition</strong> (WDC) 2022 adalah perlombaan merancang desain
            visual yang ditampilkan di media digital yaitu situs web. WDC 2022 mengangkat tema
            "Advancing Together With Credible Information".
          </p>
        </div>
        <div>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.0, duration: 0.25 }}
            className="mt-7 rounded-[2.0em] bg-[#ff7676] bg-gradient-to-br from-[#fd9807] px-5 py-3 font-retroica text-sm text-white lg:text-base"
          >
            <Link to="/wdc">Read More</Link>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default DonorDarahSection;
