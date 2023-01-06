import { motion } from "framer-motion";
import { FC } from "react";
import { FaBook, FaMale, FaWallet } from "react-icons/all";
import { Link } from "react-router-dom";

const HackathonSection: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="w-screen bg-[#2b2265]"
    >
      <div className="hidden w-screen flex-col items-center justify-center lg:flex">
        <div className="flex items-center justify-center">
          <img
            className="w-[600px]"
            src="https://ifest.uajy.ac.id/assets/images/event/ill-cp.png"
            alt="cp"
          />
          <div className="flex flex-col">
            <div className="pl-[1rem] font-retroica text-4xl text-white">CP</div>
            <div className="pl-[1rem] pb-[0.5rem] font-retroica text-2xl text-white">
              Competitive Programming
            </div>
            <div className="flex gap-4 pl-[1rem] font-retroica text-sm text-white">
              <div className="rounded-full bg-gradient-to-r from-[#ff8064] to-[#ff8064] p-1">
                <div className="flex items-center gap-1 rounded-full bg-[#2b2265] p-1 px-[0.5rem]">
                  <FaWallet />
                  Rp. 50.000
                </div>
              </div>
              <div className="rounded-full bg-gradient-to-r from-[#ff8064] to-[#ff8064] p-1">
                <div className="flex items-center gap-1 rounded-full bg-[#2b2265] p-1 px-[0.5rem]">
                  <FaBook />
                  Mahasiswa
                </div>
              </div>
              <div className="rounded-full bg-gradient-to-r from-[#ff8064] to-[#ff8064] p-1">
                <div className="flex items-center gap-1 rounded-full bg-[#2b2265] p-1 px-[0.5rem]">
                  <FaMale />
                  Max. 3 orang
                </div>
              </div>
            </div>
            <div className="w-[32em] p-4 font-retroica text-white">
              <p className="text-justify">
                <strong>Competitive Programming</strong> (CP) merupakan suatu perlombaan yang
                terfokus terhadap pemecahan masalah atau algoritma matematika. Competitive
                Programming 2022 mengangkat tema "Programming Breaks Through The Limitations of
                Life.
              </p>
            </div>
            <div className="pl-[1rem]">
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.0, duration: 0.25 }}
                className="mt-7 rounded-[2.0em] bg-[#feb783] bg-gradient-to-br from-[#fe8064] px-5 py-3 font-retroica text-sm text-white lg:text-base"
              >
                <Link to="/hackathon">Read More</Link>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-screen w-screen flex-col items-center justify-center lg:hidden">
        <img
          className="w-72"
          src="https://ifest.uajy.ac.id/assets/images/event/ill-cp.png"
          alt="cp"
        />
        <div className="text-center">
          <div className="font-retroica text-4xl text-white">CP</div>
          <div className="pb-[1rem] font-retroica text-2xl text-white">Competitive Programming</div>
        </div>
        <div className="flex gap-4 font-retroica text-sm text-white">
          <div className="rounded-full bg-gradient-to-r from-[#ff8064] to-[#ff8064] p-1">
            <div className="flex flex-wrap items-center justify-center gap-1 rounded-full bg-[#2b2265] p-1 px-[0.35rem]">
              <FaWallet />
              Rp. 50.000
            </div>
          </div>
          <div className="rounded-full bg-gradient-to-r from-[#ff8064] to-[#ff8064] p-1">
            <div className="flex flex-wrap items-center justify-center gap-1 rounded-full bg-[#2b2265] p-1 px-[0.35rem]">
              <FaBook />
              Mahasiswa
            </div>
          </div>
          <div className="rounded-full bg-gradient-to-r from-[#ff8064] to-[#ff8064] p-1">
            <div className="flex flex-wrap items-center justify-center gap-1 rounded-full bg-[#2b2265] p-1 px-[0.35rem]">
              <FaMale />
              Max. 3 orang
            </div>
          </div>
        </div>
        <div className="pt-2" />
        <div className="p-4 font-retroica text-white">
          <p className="text-justify">
            <strong>Competitive Programming</strong> (CP) merupakan suatu perlombaan yang terfokus
            terhadap pemecahan masalah atau algoritma matematika. Competitive Programming 2022
            mengangkat tema "Programming Breaks Through The Limitations of Life.
          </p>
        </div>
        <div>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.0, duration: 0.25 }}
            className="mt-7 rounded-[2.0em] bg-[#feb783] bg-gradient-to-br from-[#fe8064] px-5 py-3 font-retroica text-sm text-white lg:text-base"
          >
            <Link to="/hackathon">Read More</Link>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default HackathonSection;
