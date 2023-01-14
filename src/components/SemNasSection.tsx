import { motion } from "framer-motion";
import { CSSProperties, FC } from "react";
import { FaBook, FaMale } from "react-icons/all";
import { Link } from "react-router-dom";

const SemNasSection: FC = () => {
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
            <div className="pl-[1rem] pb-2 font-retroica text-4xl tracking-wide text-white">
              Seminar Nasional
            </div>
            <div className="flex gap-4 pl-[1rem] font-retroica text-sm text-white">
              <div className="rounded-full bg-gradient-to-r from-[#5cc09f] to-[#4eb2b9] p-1">
                <div className="flex items-center gap-1 rounded-full bg-[#2b2265] p-1 px-[0.5rem]">
                  <div style={{ "margin-top": `${-0.1}rem` } as CSSProperties}>
                    <FaBook />
                  </div>
                  <p style={{ "margin-top": `${0.1}rem` } as CSSProperties}> Umum </p>
                </div>
              </div>
              {/* <div className="rounded-full bg-gradient-to-r from-[#5cc09f] to-[#4eb2b9] p-1">
                <div className="flex items-center gap-1 rounded-full bg-[#2b2265] p-1 px-[0.5rem]">
                  <div style={{ "margin-top": `${-0.1}rem` } as CSSProperties}>
                    <FaWallet />
                  </div>
                  <p style={{ "margin-top": `${0.1}rem` } as CSSProperties}> Rp. 50K / tim</p>
                </div>
              </div> */}
              <div className="rounded-full bg-gradient-to-r from-[#5cc09f] to-[#4eb2b9] p-1">
                <div className="flex items-center gap-1 rounded-full bg-[#2b2265] p-1 px-[0.5rem]">
                  <div style={{ "margin-top": `${-0.1}rem` } as CSSProperties}>
                    <FaMale />
                  </div>
                  <p style={{ "margin-top": `${0.1}rem` } as CSSProperties}> Daftar Online</p>
                </div>
              </div>
            </div>
            <div className="w-[32em] p-4 font-louisgeorgecafe text-white">
              <p className="text-justify">
                Seminar nasional adalah seminar yang diselenggarakan berskala nasional sebagai media
                untuk menyampaikan aspirasi dan ide kepada peserta mengenai perkembangan ilmu dan
                teknologi di tengah kehidupan manusia, khususnya revolusi industri 4.0.
              </p>
            </div>
            <div className="pl-[1rem]">
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.0, duration: 0.25 }}
                className="mt-7 rounded-[2.0em] bg-[#56a09a] bg-gradient-to-br from-[#5bbb93] px-5 py-3 font-retroica text-sm text-white transition-all hover:scale-105 hover:shadow-[0_0px_80px_0px_#56a09a] lg:text-base"
              >
                <Link to="/ComingSoon">Coming Soon</Link>
              </motion.button>
            </div>
          </div>
          <img
            className="w-[600px] py-16 px-6"
            src="/images/semnas_vector.png"
            alt="Seminar Nasional"
          />
        </div>
      </div>
      <div className="flex h-screen w-screen flex-col items-center justify-center px-4 lg:hidden">
        <img
          className="mt-[-6rem] w-72 py-8"
          src="/images/semnas_vector.png"
          alt="Seminar Nasional"
        />
        <div className="text-center">
          <div className="pb-4 font-retroica text-4xl tracking-wide text-white">
            Seminar Nasional
          </div>
        </div>
        <div
          className="flex flex-col gap-2 px-2 font-retroica text-sm text-white"
          style={{ width: "70%" }}
        >
          <div className="h-fit rounded-full bg-gradient-to-r from-[#5cc09f] to-[#4eb2b9] p-1">
            <div
              className="flex flex-wrap items-center justify-center gap-1 rounded-full bg-[#2b2265] p-1 px-[0.35rem]"
              style={{ padding: ".5rem" }}
            >
              <FaBook />
              Umum
            </div>
          </div>
          <div className="rounded-full bg-gradient-to-r from-[#5cc09f] to-[#4eb2b9] p-1">
            <div
              className="flex flex-wrap items-center justify-center gap-1 rounded-full bg-[#2b2265] p-1 px-[0.35rem] text-center"
              style={{ padding: ".5rem" }}
            >
              <FaMale />
              Daftar Online
            </div>
          </div>
        </div>
        <div className="pt-2" />
        <div className="p-4 font-louisgeorgecafe text-white">
          <p className="text-justify">
            Seminar nasional adalah seminar yang diselenggarakan berskala nasional sebagai media
            untuk menyampaikan aspirasi dan ide kepada peserta mengenai perkembangan ilmu dan
            teknologi di tengah kehidupan manusia, khususnya revolusi industri 4.0.
          </p>
        </div>
        <div>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.0, duration: 0.25 }}
            className="mt-7 rounded-[2.0em] bg-[#56a09a] bg-gradient-to-br from-[#5bbb93] px-5 py-3 font-retroica text-sm text-white lg:text-base"
          >
            <Link to="/ComingSoon">Coming Soon</Link>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default SemNasSection;
