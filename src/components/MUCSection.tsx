import { motion } from "framer-motion";
import { CSSProperties, FC } from "react";
import { FaBook, FaMale, FaWallet } from "react-icons/all";
import { Link } from "react-router-dom";

const MUCSection: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="w-screen bg-[#3B3275]"
    >
      <div className="hidden w-screen flex-col items-center justify-center pb-24 pt-24 lg:flex">
        <div className="flex items-center justify-center">
          
          <div className="flex flex-col">
            <div className="pl-[1rem] pb-4 font-retroica text-4xl tracking-wide text-white">
              MUC
            </div>

            <div className="flex gap-4 pl-[1rem] font-retroica text-sm text-white">
              <div className="rounded-full bg-gradient-to-r from-[#fd9807] to-[#ff7676] p-1">
                <div className="flex items-center gap-1 rounded-full bg-[#2b2265] p-1 px-[0.5rem]">
                  <div style={{ "margin-top": `${-0.1}rem` } as CSSProperties}>
                    <FaBook />
                  </div>
                  <p style={{ "margin-top": `${0.1}rem` } as CSSProperties}> Mahasiswa </p>
                </div>
              </div>
              <div className="rounded-full bg-gradient-to-r from-[#fd9807] to-[#ff7676] p-1">
                <div className="flex items-center gap-1 rounded-full bg-[#2b2265] p-1 px-[0.5rem]">
                  <div style={{ "margin-top": `${-0.1}rem` } as CSSProperties}>
                    <FaWallet />
                  </div>
                  <p style={{ "margin-top": `${0.1}rem` } as CSSProperties}> Gratis </p>
                </div>
              </div>
              <div className="rounded-full bg-gradient-to-r from-[#fd9807] to-[#ff7676] p-1">
                <div className="flex items-center gap-1 rounded-full bg-[#2b2265] p-1 px-[0.5rem]">
                  <div style={{ "margin-top": `${-0.1}rem` } as CSSProperties}>
                    <FaMale />
                  </div>
                  <p style={{ "margin-top": `${0.1}rem` } as CSSProperties}> Max 2 Orang </p>
                </div>
              </div>
            </div>
            <div className="w-[32em] p-4 font-louisgeorgecafe text-white">
              <p className="text-justify">
                <strong>Mobile UI/UX Competition (MUC) 2023 </strong> adalah perlombaan untuk menampilkan interface dari sebuah aplikasi mobile yang diharapkan dapat membantu penggunaan dari aplikasi itu sendiri.
              </p>
            </div>
            <div className="pl-[1rem]">
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.0, duration: 0.25 }}
                className="mt-7 rounded-[2.0em] bg-[#ff7676] bg-gradient-to-br from-[#fd9807] px-5 py-3 font-retroica text-sm text-white transition-all hover:scale-105 hover:shadow-[0_0px_80px_0px_#fd9807] lg:text-base"
              >
                <Link to="/ui-ux">Coming Soon</Link>
              </motion.button>
            </div>
          </div>
          <img
            className="w-[500px]"
            style={{ marginRight: "2rem" }}
            src="images/dondar-section-bg.png"
            alt="wdc"
          />
        </div>
      </div>
      <div className="flex h-screen w-screen flex-col items-center justify-center px-4 lg:hidden">
        <img
          className="w-72"
          src="images/dondar-section-bg.png"
          style={{ marginBottom: "3rem" }}
          alt="wdc"
        />
        <div className="text-center">
          <div className="pb-4 font-retroica text-4xl tracking-wide text-white">MUC</div>
        </div>
        <div
          className="flex flex-col gap-2 px-2 font-retroica text-sm text-white"
          style={{ width: "70%" }}
        >
          <div
            className="rounded-full bg-gradient-to-r from-[#fd9807] to-[#ff7676] p-1"
            style={{ width: "100%" }}
          >
            <div
              className="flex flex-wrap items-center justify-center gap-1 rounded-full bg-[#2b2265] p-1 px-[0.35rem] text-center"
              style={{ padding: ".5rem" }}
            >
              <FaWallet />
              Gratis
            </div>
          </div>
          <div className="h-fit rounded-full bg-gradient-to-r from-[#fd9807] to-[#ff7676] p-1">
            <div
              className="flex flex-wrap items-center justify-center gap-1 rounded-full bg-[#2b2265] p-1 px-[0.35rem]"
              style={{ padding: ".5rem" }}
            >
              <FaBook />
              Umum
            </div>
          </div>
          <div className="rounded-full bg-gradient-to-r from-[#fd9807] to-[#ff7676] p-1">
            <div
              className="flex flex-wrap items-center justify-center gap-1 rounded-full bg-[#2b2265] p-1 px-[0.35rem] text-center"
              style={{ padding: ".5rem" }}
            >
              <FaMale />
              Daftar online / onsite
            </div>
          </div>
        </div>
        <div className="pt-2" />
        <div className="p-4 font-louisgeorgecafe text-white">
          <p className="text-justify">
            <strong>Donor Darah</strong> ialah kegiatan mengambil darah seseorang yang dilaksanakan
            secara sukarela dan sadar untuk kemudian disimpan ke bank darah sebagai stok darah yang
            sewaktu-waktu dapat dipergunakan untuk transfusi darah. Dengan mendonorkan darah bukan
            hanya bermanfaat bagi kesehatan namun kita juga berkesempatan menjadi manfaat bagi orang
            lain.
          </p>
        </div>
        <div>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.0, duration: 0.25 }}
            className="mt-7 rounded-[2.0em] bg-[#ff7676] bg-gradient-to-br from-[#fd9807] px-5 py-3 font-retroica text-sm text-white lg:text-base"
          >
            <Link to="/ComingSoon">Coming Soon</Link>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default MUCSection;
