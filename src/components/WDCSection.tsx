import { motion } from "framer-motion";
import { CSSProperties, FC } from "react";
import { FaBook, FaMale, FaWallet } from "react-icons/all";
import { Link } from "react-router-dom";

const WDCSection: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="w-screen bg-[#3B3275]"
    >
      <div className="hidden w-screen flex-col items-center justify-center lg:flex">
        <div className="flex items-center justify-center">
          <div className="flex flex-col">
            <div className="pl-[1rem] font-retroica text-4xl tracking-wide text-white">WDC</div>
            <div className="pl-[1rem] pb-[0.5rem] font-retroica text-2xl text-white">
              Web Design Competition
            </div>
            <div className="flex gap-4 pl-[1rem] font-retroica text-sm text-white">
              <div className="rounded-full bg-gradient-to-r from-[#9DCE6D] to-[#9DCE6D] p-1">
                <div className="flex items-center gap-1 rounded-full bg-[#2b2265] p-1 px-[0.5rem]">
                  <div style={{ "margin-top": `${-0.1}rem` } as CSSProperties}>
                    <FaBook />
                  </div>
                  <p style={{ "margin-top": `${0.1}rem` } as CSSProperties}> D3 / D4 / S1 </p>
                </div>
              </div>
              <div className="rounded-full bg-gradient-to-r from-[#9DCE6D] to-[#9DCE6D] p-1">
                <div className="flex items-center gap-1 rounded-full bg-[#2b2265] p-1 px-[0.5rem]">
                  <div style={{ "margin-top": `${-0.1}rem` } as CSSProperties}>
                    <FaWallet />
                  </div>
                  <p style={{ "margin-top": `${0.1}rem` } as CSSProperties}> Rp. 50K / tim</p>
                </div>
              </div>
              <div className="rounded-full bg-gradient-to-r from-[#9DCE6D] to-[#9DCE6D] p-1">
                <div className="flex items-center gap-1 rounded-full bg-[#2b2265] p-1 px-[0.5rem]">
                  <div style={{ "margin-top": `${-0.1}rem` } as CSSProperties}>
                    <FaMale />
                  </div>
                  <p style={{ "margin-top": `${0.1}rem` } as CSSProperties}>
                    {" "}
                    Max. 2 peserta / tim
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[32em] p-4 font-louisgeorgecafe text-white">
              <p className="text-justify">
                <strong>Web Design Competition (WDC)</strong> 2023 adalah kompetisi merancang desain visual yang 
                ditampilkan di media digital berupa situs web. Pada tahun ini, WDC mengangkat tema 
                <em> "Embrace the Future of Local Economy with Technology"</em>
              </p>
            </div>
            <div className="pl-[1rem]">
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.0, duration: 0.25 }}
                className="mt-7 rounded-[2.0em] bg-[#4f7f8b] bg-gradient-to-br from-[#52aa59] px-5 py-3 font-retroica text-sm text-white transition-all hover:scale-105 hover:shadow-[0_0px_80px_0px_#59b667] lg:text-base"
              >
                <Link to="/ComingSoon">Coming Soon</Link>
              </motion.button>
            </div>
          </div>
          <img
            className="w-[600px]"
            src="https://ifest.uajy.ac.id/assets/images/event/ill-wdc.png"
            alt="wdc"
          />
        </div>
      </div>
      <div className="flex h-screen w-screen flex-col items-center justify-center px-4 lg:hidden">
        <img
          className="w-72"
          src="https://ifest.uajy.ac.id/assets/images/event/ill-wdc.png"
          alt="wdc"
        />
        <div className="text-center">
          <div className="font-retroica text-4xl tracking-wide text-white">WDC</div>
          <div className="pb-[1rem] font-retroica text-2xl text-white">Web Design Competition</div>
        </div>
        <div
          className="flex flex-col gap-2 px-2 font-retroica text-sm text-white"
          style={{ width: "70%" }}
        >
          <div className="rounded-full bg-gradient-to-r from-[#9DCE6D] to-[#9DCE6D] p-1">
            <div
              className="flex flex-wrap items-center justify-center gap-1 rounded-full bg-[#2b2265] p-1 px-[0.35rem] text-center"
              style={{ padding: ".5rem" }}
            >
              <FaBook />
              D3 / D4 / S1
            </div>
          </div>
          <div className="h-fit rounded-full bg-gradient-to-r from-[#9DCE6D] to-[#9DCE6D] p-1">
            <div
              className="flex flex-wrap items-center justify-center gap-1 rounded-full bg-[#2b2265] p-1 px-[0.35rem]"
              style={{ padding: ".5rem" }}
            >
              <FaWallet />
              Rp. 50K / tim
            </div>
          </div>
          <div className="rounded-full bg-gradient-to-r from-[#9DCE6D] to-[#9DCE6D] p-1">
            <div
              className="flex flex-wrap items-center justify-center gap-1 rounded-full bg-[#2b2265] p-1 px-[0.35rem] text-center"
              style={{ padding: ".5rem" }}
            >
              <FaMale />
              Max. 2 peserta / tim
            </div>
          </div>
        </div>
        <div className="pt-2" />
        <div className="p-4 font-louisgeorgecafe text-white">
          <p className="text-justify">
            <strong> Web Design Competition (WDC)</strong> 2023 adalah kompetisi merancang desain visual yang
            ditampilkan di media digital berupa situs web. Pada tahun ini, WDC mengangkat tema
            "<em>Embrace the Future of Local Economy with Technology</em>"
          </p>
        </div>
        <div>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.0, duration: 0.25 }}
            className="mt-7 rounded-[2.0em] bg-[#6ca0af] bg-gradient-to-br from-[#9dcd6c] px-5 py-3 font-retroica text-sm text-white lg:text-base"
          >
            <Link to="/ComingSoon">Coming Soon</Link>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default WDCSection;
