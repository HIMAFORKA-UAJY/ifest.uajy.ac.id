import { Box, Modal, Typography } from "@mui/material";
import { Card, Carousel } from "flowbite-react";
import { motion } from "framer-motion";
import { FC, useEffect, useRef, useState } from "react";
import { Chrono } from "react-chrono";
import {
  FaBook,
  FaCertificate,
  FaLine,
  FaMale,
  FaMoneyBillWave,
  FaRegWindowClose,
  FaWallet,
  FaWhatsapp,
} from "react-icons/all";
import { Link } from "react-router-dom";
import "react-vertical-timeline-component/style.min.css";

import Footer from "../components/Footer";
import Layout from "../components/Layout";
import "./I2C.css";

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  pt: 2,
};

const I2C: FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);
  const [openPDF, setOpenPDF] = useState(false);

  const onClick = () => setOpen(true);
  const onClickPDF = () => setOpenPDF(true);

  const handleClose = () => setOpen(false);
  const handleClosePDF = () => setOpenPDF(false);

  const dataSeleksi = [
    {
      title: "16 Januari - 17 Februari 2023",
      cardTitle: "Pendaftaran Online",
      cardDetailedText: "Website I2C",
    },
    {
      title: "17 Februari 2023",
      cardTitle: "Batas Pengumpulan Proposal",
      cardDetailedText: "Website I2C",
    },
    {
      title: "24 Februari - 28 Februari 2023",
      cardTitle: "Penilaian Proposal",
      cardDetailedText: "Online",
    },
    {
      title: "1 Maret 2023",
      cardTitle: "Pengumuman Seleksi",
      cardDetailedText: "Instagram IFest #11",
    },
  ];
  const dataExpo = [
    {
      title: "1 Maret 2023",
      cardTitle: "Technical Meeting",
      cardDetailedText: "Zoom",
    },
    {
      title: "6 Maret - 9 Maret 2023",
      cardTitle: "Pameran Virtual",
      cardDetailedText: "Instagram IFest #11",
    },
    {
      title: "10 Maret 2023",
      cardTitle: "Pameran On-site",
      cardDetailedText:
        "Auditorium Lt. 4 Kampus 3 Gedung Bonaventura Universitas Atma Jaya Yogyakarta",
    },
  ];
  const dataFinal = [
    {
      title: "11 Maret 2023",
      cardTitle: "Final",
      cardSubtitle: "Pengumuman Seleksi, Presentasi Pitch Deck, dan Pengumuman Pemenang",
      cardDetailedText:
        "Auditorium Lt. 4 Kampus 3 Gedung Bonaventura Universitas Atma Jaya Yogyakarta",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="absolute top-0 -z-10 h-screen w-screen bg-gradient-to-b from-[#2A2F59] to-[#332550]">
        <motion.div className="flex h-screen flex-col items-center justify-center">
          <div className="hidden h-fit w-screen flex-col items-center justify-center lg:flex">
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-center gap-8">
                <img className="w-[28rem]" src="/images/ill-i2c.png" alt="i2c" />
                <div className="flex flex-col">
                  <div className="bg-gradient-to-r from-[#EFB6D5] to-[#81E3E0] bg-clip-text pl-[1rem] pb-[0.5rem] font-retroica text-6xl text-transparent">
                    Innovative
                  </div>
                  <div className="bg-gradient-to-r from-[#81E3E0] to-[#EFB6D5] bg-clip-text pl-[1rem] pb-[0.5rem] font-retroica text-6xl text-transparent">
                    Informatics
                  </div>
                  <div className="bg-gradient-to-r from-[#EFB6D5] to-[#81E3E0] bg-clip-text pl-[1rem] pb-[0.5rem] font-retroica text-6xl text-transparent">
                    Contest
                  </div>
                  <div className="mt-8 flex gap-4 pl-[1rem] font-retroica text-sm text-white">
                    <div className="rounded-full bg-gradient-to-r from-[#ff8064] to-[#ffb783] p-1">
                      <div className="flex items-center gap-1 rounded-full bg-[#2b2265] p-1 px-[0.5rem]">
                        <FaWallet />
                        Rp. 150K / tim
                      </div>
                    </div>
                    <div className="rounded-full bg-gradient-to-r from-[#9dce6d] to-[#6ca0b0] p-1">
                      <div className="flex items-center gap-1 rounded-full bg-[#2b2265] p-1 px-[0.5rem]">
                        <FaBook />
                        SMA / Sederajat
                      </div>
                    </div>
                    <div className="rounded-full bg-gradient-to-r from-[#7fa3ff] to-[#bb88fc] p-1">
                      <div className="flex items-center gap-1 rounded-full bg-[#2b2265] p-1 px-[0.5rem]">
                        <FaMale />3 peserta / tim
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative bottom-16">
                <motion.button
                  onClick={() => contentRef.current?.scrollIntoView({ behavior: "smooth" })}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.75 }}
                  transition={{ delay: 0.0, duration: 0.25 }}
                  className="transition-transform hover:scale-125"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-10 w-10 stroke-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </motion.button>
              </div>
            </div>
          </div>

          <div className="flex h-screen w-screen flex-col items-center justify-center px-4 lg:hidden">
            <img className="w-72 pt-24 " src="/images/ill-i2c.png" alt="i2c" />
            <div className="text-center">
              <div className="pt-4 font-retroica text-4xl tracking-wide text-white">I2C</div>
              <div className="px-4 pb-[1rem] font-retroica text-2xl text-white">
                Innovative Informatics Contest
              </div>
            </div>
            <div className="m-auto flex flex-col gap-4 font-retroica text-sm text-white sm:text-xs lg:flex lg:items-center  ">
              <div className="h-fit rounded-full bg-gradient-to-r from-[#ff8064] to-[#ffb783] p-1">
                <div
                  className="flex flex-wrap items-center justify-center gap-1 rounded-full bg-[#332550] p-1 px-[0.35rem] text-center"
                  style={{ padding: "1rem" }}
                >
                  <FaWallet />
                  Rp. 150K / tim
                </div>
              </div>
              <div className="h-fit rounded-full bg-gradient-to-r from-[#9dce6d] to-[#6ca0b0] p-1">
                <div
                  className="flex flex-wrap items-center justify-center gap-1 rounded-full bg-[#332550] p-1 px-[0.35rem] text-center"
                  style={{ padding: "1rem" }}
                >
                  <FaBook />
                  SMA / Sederajat
                </div>
              </div>
              <div className="h-fit rounded-full bg-gradient-to-r from-[#7fa3ff] to-[#bb88fc] p-1">
                <div
                  className="flex flex-wrap items-center justify-center gap-1 rounded-full bg-[#332550] p-1 px-[0.35rem] text-center"
                  style={{ padding: "1rem" }}
                >
                  <FaMale />3 peserta / tim
                </div>
              </div>
            </div>
            <div>
              <motion.button
                onClick={() => contentRef.current?.scrollIntoView({ behavior: "smooth" })}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.75 }}
                transition={{ delay: 0.0, duration: 0.25 }}
                className="mt-12 transition-transform hover:scale-125"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-10 w-10 stroke-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </motion.button>
            </div>
          </div>
        </motion.div>

        <div ref={contentRef} className="bg-gradient-to-t from-[#2A2F59] to-[#332550]">
          <div className="flex flex-col items-center gap-2 pt-4 pl-4 pr-4">
            <div className="!border-gray-700 !bg-[#241f3d] pt-12 pb-12">
              <div className="flex flex-col items-center">
                <div className="font-retroica text-3xl font-thin tracking-wider text-white">
                  MORE ABOUT I2C
                </div>
                <div className="text-md my-4 w-screen px-8 text-justify font-louisgeorgecafe font-thin text-white lg:px-[10rem] lg:text-center">
                  <strong>Innovative Informatics Contest</strong> (I2C) 2022 adalah sebuah lomba
                  dimana siswa/i SMA/SMK yang tergabung dalam satu tim berlomba untuk merancang
                  suatu inovasi aplikasi (<i>mobile</i>) yang bertujuan membantu membantu
                  mempermudah kegiatan berumah tangga sehingga terwujud keseimbangan kehidupan
                  berkeluarga baik dari sisi keuangan, kebersihan, dan kenyamanan. Acara ini juga
                  dimaksudkan untuk memberi kesempatan bagi siswa/i SMA/SMK di seluruh Indonesia
                  untuk menunjukkan bakat, minat, dan pengetahuan.
                </div>
              </div>
              <div className="margin-auto flex-col items-center justify-center gap-4 font-louisgeorgecafe md:flex md:flex-row md:justify-center ">
                <div className="m-2 flex justify-center rounded-full bg-[#6c6486] p-1 lg:m-0">
                  <button
                    onClick={onClick}
                    className="m-auto flex justify-center gap-1 rounded-full bg-[#332550] p-2 transition hover:bg-transparent lg:flex lg:items-center "
                    style={{ width: "100%" }}
                  >
                    <div className="text-white opacity-70">Lihat Poster</div>
                  </button>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box
                      sx={style}
                      className="overflow-auto"
                      style={{ width: "90%", height: "90%", margin: "auto" }}
                    >
                      <Typography
                        className="text-right"
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        <button onClick={handleClose}>
                          {" "}
                          <FaRegWindowClose />{" "}
                        </button>
                      </Typography>
                      <img src="images/poster-dondar.jpeg" style={{ margin: "auto" }} alt="" />
                    </Box>
                  </Modal>
                </div>
                <div className="rounded-full bg-gradient-to-r from-[#6ea5b1] to-[#9b68ce] p-1">
                  <button
                    className="m-auto flex items-center justify-center gap-1 rounded-full bg-[#332550] p-2 transition hover:bg-transparent lg:flex lg:items-center"
                    style={{ width: "100%" }}
                  >
                    <Link to="/dashboard">
                      <div className="m-auto text-white opacity-100">DAFTAR</div>
                    </Link>
                  </button>
                </div>
                <div className="my-2 rounded-full bg-[#6c6486] p-1 lg:my-0">
                  {/* <React.Fragment>
                                      <button onClick={onClick} className="bg-[#332550] hover:bg-transparent transition p-2 rounded-full flex gap-1 items-center">
                                          <div className="opacity-70 text-white">Lihat Aturan</div>
                                      </button>
                                      <Modal
                                          show={open}
                                          onClose={handleClose}       
                                      >
                                          <Modal.Header>
                                              Aturan Innovative Informatics Contest
                                          </Modal.Header>
                                          <Modal.Body>
                                              <img src="https://ifest.uajy.ac.id/assets/images/event/poster-i2c-ext.png" alt="" />
                                          </Modal.Body>
                                      </Modal>
                                  </React.Fragment> */}
                  <button
                    onClick={onClickPDF}
                    className="m-auto flex justify-center gap-1 rounded-full bg-[#332550] p-2 transition hover:bg-transparent lg:flex lg:items-center"
                    style={{ width: "100%" }}
                  >
                    <div className="text-white opacity-70">Lihat Aturan</div>
                  </button>
                  <Modal
                    open={openPDF}
                    onClose={handleClosePDF}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style} className="h-screen overflow-auto">
                      <Typography
                        className="text-right"
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        <button onClick={handleClosePDF}>
                          {" "}
                          <FaRegWindowClose />{" "}
                        </button>
                      </Typography>
                      <iframe
                        src="rulebook/rulebook-i2c.pdf"
                        style={{ width: "100%", height: "95%" }}
                        title="I2C Rulebook"
                      />
                    </Box>
                  </Modal>
                </div>
              </div>
            </div>

            {/* Ketentuan */}
            <div className="flex flex-col justify-center gap-8 py-12 lg:flex-row">
              <div className="w-screen px-4 lg:w-[40%]">
                <Card className="!border-gray-700 !bg-[#241f3d]">
                  <h3 className="pl-6 font-retroica text-2xl text-[#87BBEB]">Ketentuan Umum</h3>
                  <div className="p-6 font-louisgeorgecafe leading-loose text-white">
                    <ol className="list-outside list-decimal">
                      <li>
                        Peserta masih berstatus siswa di tingkat SMA/SMK sederajat se-Indonesia.
                      </li>
                      <li>
                        Melakukan pendaftaran online melalui{" "}
                        <a
                          href="https://ifest.uajy.ac.id/dash/daftar"
                          className="text-[#EFB6D5] underline hover:font-bold"
                        >
                          https://ifest.uajy.ac.id/dash/daftar
                        </a>
                        , pendaftaraan akan dibuka dari 15 Februari 2022 sampai dengan 13 Maret
                        2022.
                      </li>
                      <li>
                        Melampirkan scan atau foto kartu pelajar dan surat persetujuan dari sekolah
                        pada formulir pendaftaran online.
                      </li>
                      <li>
                        Setiap sekolah diperbolehkan mengirimkan 1 tim atau lebih (setiap timnya
                        terdiri dari 3 anggota).
                      </li>
                      <li>Pendaftaran tidak dipungut biaya.</li>
                      <li>
                        Peserta yang telah mendaftar wajib mengumpulkan proposal ide dengan cara
                        login melalui{" "}
                        <a
                          href="https://ifest.uajy.ac.id/dash/masuk"
                          className="text-[#EFB6D5] underline hover:font-bold"
                        >
                          https://ifest.uajy.ac.id/dash/masuk
                        </a>{" "}
                        sebelum 13 Maret 2022 dengan format penamaan{" "}
                        <span className="font-retron2000 text-[#87BBEB]">
                          IFest#10UAJY_I2C_Nama Ide Aplikasi_Nama Kelompok_Nama Sekolah.pdf
                        </span>{" "}
                        (Format PDF).
                      </li>
                      <li>
                        Peserta yang sudah mendaftar tetapi tidak mengumpulkan proposal setelah
                        batas waktu yang ditentukan dianggap mengundurkan diri dari perlombaan.
                      </li>
                      <li>
                        Proposal dalam bentuk softcopy juga dikirimkan ke email{" "}
                        <a
                          href="mailto:ifest@uajy.ac.id"
                          className="text-[#EFB6D5] underline hover:font-bold"
                        >
                          ifest@uajy.ac.id
                        </a>{" "}
                        dengan format penamaan file{" "}
                        <span className="font-retron2000 text-[#87BBEB]">
                          IFest#10UAJY_I2C_Nama Ide Aplikasi_Nama Kelompok_Nama Sekolah.pdf
                        </span>{" "}
                        (Format PDF).
                      </li>
                      <li>
                        Peserta yang lolos tahap seleksi proposal akan melanjutkan ke tahap pameran
                        online untuk memamerkan ide aplikasinya
                      </li>
                      <li>
                        Lima kelompok dengan nilai akumulasi proposal dan pameran tertinggi akan
                        melanjutkan ke tahap final yaitu presentasi di hadapan para juri
                      </li>
                      <li>
                        Panitia berhak untuk mengeliminasi peserta yang tidak mematuhi ketentuan di
                        atas.
                      </li>
                    </ol>
                  </div>
                </Card>
              </div>

              <div className="w-screen px-4 lg:w-[40%]">
                <Card className="!border-gray-700 !bg-[#241f3d]">
                  <h3 className="pl-6 font-retroica text-2xl text-[#87BBEB]">Ketentuan Proposal</h3>
                  <div className="p-6 font-louisgeorgecafe leading-loose text-white">
                    <ol className="list-outside list-decimal">
                      <li>Karya/proposal harus sesuai dengan tema yang telah ditentukan.</li>
                      <li>
                        Karya/proposal yang dilombakan dalam kompetisi ini belum pernah mendapat
                        penghargaan di kompetisi lain atau belum pernah digunakan di kompetisi lain.
                      </li>
                      <li>Karya/proposal merupakan ide original peserta.</li>
                      <li>Karya/proposal tidak mengandung unsur SARA dan pornografi.</li>
                      <li>
                        Lima belas proposal terbaik akan dipilih untuk masuk tahap berikutnya yaitu
                        pameran. Dalam babak ini peserta akan memamerkan ide aplikasi mereka melalui
                        media sosial, dan untuk tahap berikutnya merupakan nilai akumulasi dari
                        proposal dan pameran.
                      </li>
                      <li>
                        Tidak melanggar Hak Cipta, Hak Paten, dan Hak Merk. Hal tersebut menjadi
                        tanggung jawab peserta. Panita tidak bertanggung jawab dalam masalah Hak
                        Cipta, Hak Paten ataupun Hak Merk.
                      </li>
                      <li>
                        Ketentuan lebih lengkap mengenai isi proposal dapat dilihat pada rulebook.
                      </li>
                    </ol>
                  </div>
                </Card>
              </div>
            </div>

            {/* Timeline */}
            <div className="flex w-full flex-col justify-center pt-24 pb-24 lg:w-[70%] lg:items-center">
              <div className="mx-auto mb-8 text-center font-retroica text-4xl text-[#87bbeb]">
                Timeline
              </div>
              <div className="w-fit rounded-xl bg-[#241f3d] pb-1">
                <div className="rounded-xl bg-[#716B90] p-4 font-retroica text-white shadow-inner">
                  Proposal Selection
                </div>
              </div>

              <span className="hidden lg:flex lg:w-full">
                <Chrono
                  items={dataSeleksi}
                  mode="VERTICAL_ALTERNATING"
                  cardHeight={50}
                  hideControls
                  disableClickOnCircle
                  theme={{
                    primary: "#716B90",
                    secondary: "transparent",
                    cardBgColor: "#241f3d",
                    cardForeColor: "white",
                    titleColor: "white",
                    titleColorActive: "white",
                  }}
                />
              </span>
              <span className="flex lg:hidden">
                <Chrono
                  items={dataSeleksi}
                  mode="VERTICAL"
                  cardHeight={50}
                  hideControls
                  disableClickOnCircle
                  fontSizes={{
                    title: "0.8rem",
                  }}
                  theme={{
                    primary: "#716B90",
                    secondary: "transparent",
                    cardBgColor: "#241f3d",
                    cardForeColor: "white",
                    titleColor: "white",
                    titleColorActive: "white",
                  }}
                />
              </span>

              <div className="w-fit rounded-xl bg-[#241f3d] pb-1">
                <div className="rounded-xl bg-[#716B90] p-4 font-retroica text-white shadow-inner">
                  Inventor Expo
                </div>
              </div>

              <span className="hidden lg:flex lg:w-full">
                <Chrono
                  items={dataExpo}
                  mode="VERTICAL_ALTERNATING"
                  cardHeight={50}
                  hideControls
                  disableClickOnCircle
                  theme={{
                    primary: "#716B90",
                    secondary: "transparent",
                    cardBgColor: "#241f3d",
                    cardForeColor: "white",
                    titleColor: "white",
                    titleColorActive: "white",
                  }}
                />
              </span>
              <span className="flex lg:hidden">
                <Chrono
                  items={dataExpo}
                  mode="VERTICAL"
                  cardHeight={50}
                  hideControls
                  disableClickOnCircle
                  fontSizes={{
                    title: "0.8rem",
                  }}
                  theme={{
                    primary: "#716B90",
                    secondary: "transparent",
                    cardBgColor: "#241f3d",
                    cardForeColor: "white",
                    titleColor: "white",
                    titleColorActive: "white",
                  }}
                />
              </span>

              <div className="w-fit rounded-xl bg-[#241f3d] pb-1">
                <div className="rounded-xl bg-[#716B90] p-4 font-retroica text-white shadow-inner">
                  Final Pitch Deck
                </div>
              </div>

              <span className="hidden lg:flex lg:w-full">
                <Chrono
                  items={dataFinal}
                  mode="VERTICAL_ALTERNATING"
                  cardHeight={50}
                  hideControls
                  disableClickOnCircle
                  theme={{
                    primary: "#716B90",
                    secondary: "transparent",
                    cardBgColor: "#241f3d",
                    cardForeColor: "white",
                    titleColor: "white",
                    titleColorActive: "white",
                  }}
                />
              </span>
              <span className="flex lg:hidden">
                <Chrono
                  items={dataFinal}
                  mode="VERTICAL"
                  cardHeight={50}
                  hideControls
                  disableClickOnCircle
                  fontSizes={{
                    title: "0.8rem",
                  }}
                  theme={{
                    primary: "#716B90",
                    secondary: "transparent",
                    cardBgColor: "#241f3d",
                    cardForeColor: "white",
                    titleColor: "white",
                    titleColorActive: "white",
                  }}
                />
              </span>
            </div>

            {/* Prize Pool */}

            <div
              className="flex w-screen flex-col items-center justify-center gap-4 pt-12 pb-12"
              style={{
                backgroundImage: "url('/images/bg-prizepool.png')",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div
                className="flex w-screen flex-col items-center justify-center gap-4 pt-12 pb-12"
                style={{
                  backgroundImage: "url('/images/bg-prizepool.png')",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <div className="font-retroica text-4xl text-[#87bbeb]">Prize Pool</div>
                <div
                  className="text-center font-retroica text-[#ffba57]"
                  style={{ fontSize: "1.5rem" }}
                >
                  {" "}
                  <span className="font-louisgeorgecafe text-white">Total hadiah</span> Rp 9.500.000
                </div>
                <div>
                  <div className="my-10 hidden lg:flex">
                    <Card
                      horizontal
                      className="m-auto w-[30%] !border-gray-700 !bg-[#241f3d] pt-0 text-white transition duration-300 ease-in hover:scale-110 hover:!bg-[#ffba57] hover:text-[#241f3d]"
                    >
                      <div>
                        <img
                          className="m-auto block w-52 drop-shadow-lg"
                          src="https://ifest.uajy.ac.id/assets/images/medal-1.png"
                          alt="/"
                        />
                      </div>
                      <div className="text-center font-retroica text-2xl">Juara I</div>
                      <div className="flex gap-3 font-retroica">
                        <FaMoneyBillWave /> Rp4.000.000
                      </div>
                      <div className="flex gap-3 font-retroica">
                        <FaCertificate /> Sertifikat Nasional
                      </div>
                    </Card>
                  </div>

                  <div className="hidden flex-row gap-8 lg:flex">
                    <Card className="w-[30%] !border-gray-700 !bg-[#241f3d] text-white transition duration-300 ease-in hover:scale-110 hover:!bg-[#9e9e9e] hover:text-[#241f3d]">
                      <div className="">
                        <img
                          className="m-auto block w-52"
                          src="https://ifest.uajy.ac.id/assets/images/medal-2.png"
                          alt="/"
                        />
                      </div>
                      <div className="text-center font-retroica text-2xl">Juara II</div>
                      <div className="flex gap-3 font-retroica">
                        <FaMoneyBillWave /> Rp3.000.000
                      </div>
                      <div className="flex gap-3 font-retroica">
                        <FaCertificate /> Sertifikat Nasional
                      </div>
                    </Card>
                    <Card className="w-[30%] !border-gray-700 !bg-[#241f3d] text-white transition duration-300 ease-in hover:scale-110 hover:!bg-[#ce7430] hover:text-[#241f3d]">
                      <div className="">
                        <img
                          className="m-auto block w-52"
                          src="https://ifest.uajy.ac.id/assets/images/medal-3.png"
                          alt="/"
                        />
                      </div>
                      <div className="text-center font-retroica text-2xl">Juara III</div>
                      <div className="flex gap-3 font-retroica">
                        <FaMoneyBillWave /> Rp2.000.000
                      </div>
                      <div className="flex gap-3 font-retroica">
                        <FaCertificate /> Sertifikat Nasional
                      </div>
                    </Card>
                    <Card className="w-[30%] !border-gray-700 !bg-[#241f3d] text-white transition duration-300 ease-in hover:scale-110 hover:!bg-[#00B8B0] hover:text-[#241f3d]">
                      <div className="">
                        <img
                          className="m-auto block w-52"
                          src="https://ifest.uajy.ac.id/assets/images/medal-favorit.png"
                          alt="/"
                        />
                      </div>
                      <div className="text-center font-retroica text-2xl">Juara Favorit</div>
                      <div className="flex gap-3 font-retroica">
                        <FaMoneyBillWave /> Rp500.000
                      </div>
                      <div className="flex gap-3 font-retroica">
                        <FaCertificate /> Sertifikat Nasional
                      </div>
                    </Card>
                  </div>
                  <div className="flex flex-col gap-8 lg:hidden">
                    <Card
                      horizontal
                      className="!border-gray-700 !bg-[#241f3d] text-white transition duration-300 ease-in hover:scale-110 hover:!bg-[#ffba57] hover:text-[#241f3d]"
                    >
                      <div className="flex gap-4">
                        <div>
                          <img
                            className="m-auto block w-20 drop-shadow-lg"
                            src="https://ifest.uajy.ac.id/assets/images/medal-1.png"
                            alt="/"
                          />
                        </div>
                        <div>
                          <div className="font-retroica text-2xl">Juara I</div>
                          <div className="flex gap-3 font-retroica">
                            <FaMoneyBillWave /> Rp4.000.000
                          </div>
                          <div className="flex gap-3 font-retroica">
                            <FaCertificate /> Sertifikat Nasional
                          </div>
                        </div>
                      </div>
                    </Card>
                    <Card
                      horizontal
                      className="!border-gray-700 !bg-[#241f3d] text-white transition duration-300 ease-in hover:scale-110 hover:!bg-[#9e9e9e] hover:text-[#241f3d]"
                    >
                      <div className="flex gap-4">
                        <div>
                          <div className="text-right font-retroica text-2xl">Juara II</div>
                          <div className="flex gap-3 font-retroica">
                            <FaMoneyBillWave /> Rp3.000.000
                          </div>
                          <div className="flex gap-3 font-retroica">
                            <FaCertificate /> Sertifikat Nasional
                          </div>
                        </div>
                        <div>
                          <img
                            className="m-auto block w-20"
                            src="https://ifest.uajy.ac.id/assets/images/medal-2.png"
                            alt="/"
                          />
                        </div>
                      </div>
                    </Card>
                    <Card
                      horizontal
                      className="!border-gray-700 !bg-[#241f3d] text-white transition duration-300 ease-in hover:scale-110 hover:!bg-[#ce7430] hover:text-[#241f3d]"
                    >
                      <div className="flex gap-4">
                        <div>
                          <img
                            className="m-auto block w-20"
                            src="https://ifest.uajy.ac.id/assets/images/medal-3.png"
                            alt="/"
                          />
                        </div>
                        <div>
                          <div className="text-left font-retroica text-2xl">Juara III</div>
                          <div className="flex gap-3 font-retroica">
                            <FaMoneyBillWave /> Rp2.000.000
                          </div>
                          <div className="flex gap-3 font-retroica">
                            <FaCertificate /> Sertifikat Nasional
                          </div>
                        </div>
                      </div>
                    </Card>
                    <Card
                      horizontal
                      className="!border-gray-700 !bg-[#241f3d] text-white transition duration-300 ease-in hover:scale-110 hover:!bg-[#00B8B0] hover:text-[#241f3d]"
                    >
                      <div className="flex gap-4">
                        <div>
                          <div className="text-right font-retroica text-2xl">Juara Favorit</div>
                          <div className="flex gap-3 font-retroica">
                            <FaMoneyBillWave /> Rp500.000
                          </div>
                          <div className="flex gap-3 font-retroica">
                            <FaCertificate /> Sertifikat Nasional
                          </div>
                        </div>
                        <div>
                          <img
                            className="m-auto block w-20"
                            src="https://ifest.uajy.ac.id/assets/images/medal-favorit.png"
                            alt="/"
                          />
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
            </div>

            {/* Call To Action */}
            <div className="my-12 flex w-screen flex-col items-center justify-center">
              <div className="w-[21rem] max-w-[100%] rounded-xl border-gray-200 bg-gradient-to-br from-[#463E74] to-[#332550] p-8 lg:w-[60%]">
                <div className="flex flex-col items-center justify-center text-center lg:flex-row lg:justify-start">
                  <img
                    className="w-32 lg:w-[30%]"
                    src="https://ifest.uajy.ac.id/assets/images/ill4-icon.png"
                    alt=""
                  />
                  <div className="flex flex-col items-center  gap-4 lg:items-start">
                    <div className="font-retroica text-2xl text-[#87bbeb] lg:text-3xl">
                      Tertarik? Ayo mendaftar!
                    </div>
                    <div className="text-center font-louisgeorgecafe text-white lg:text-left">
                      Ayo buktikan bakat dan kreativitasmu! Jangan cepat berpuas diri!
                    </div>
                    <div className="w-fit rounded-full bg-gradient-to-r from-[#6ea5b1] to-[#9b68ce] p-1">
                      <button className="flex items-center gap-1 rounded-full bg-[#332550] p-2 transition hover:bg-transparent">
                        <Link to="/dashboard">
                          <div className="font-retroica text-white opacity-100">DAFTAR</div>
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex w-screen flex-col items-center justify-center gap-2">
              <div className="font-retroica text-4xl text-white">Contact Us</div>
              <div className="font-retroica text-base text-white">
                Masih ada yang bingung? Yuk kontak kami.
              </div>
              <div className="h-64 w-64">
                <Carousel leftControl=" " rightControl=" " indicators={false}>
                  <div className="flex justify-center text-center text-white">
                    <table className="table-cell border-separate rounded-xl border-[6px] border-[#ba87fb] p-2">
                      <thead>
                        <tr>
                          <th className="border-b-[6px] border-[#ba87fb]">I2C</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="flex flex-col items-center">
                              <div className="flex items-center gap-1 font-louisgeorgecafe">
                                <FaWhatsapp />
                                0822 2555 3400
                              </div>
                              <div className="flex items-center gap-1 font-louisgeorgecafe">
                                <FaLine />
                                id_line
                              </div>
                            </div>
                            <button className="mx-auto rounded-2xl bg-[#ba87fb] bg-gradient-to-br from-[#7fa2fe] px-2 font-louisgeorgecafe">
                              Lala
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="flex flex-col items-center">
                              <div className="flex items-center gap-1 font-louisgeorgecafe">
                                <FaWhatsapp />
                                0822 2555 3400
                              </div>
                              <div className="flex items-center gap-1 font-louisgeorgecafe">
                                <FaLine />
                                id_line
                              </div>
                            </div>
                            <button className="mx-auto rounded-2xl bg-[#ba87fb] bg-gradient-to-br from-[#7fa2fe] px-2 font-louisgeorgecafe">
                              Kevin
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Carousel>
              </div>
            </div>

            <Footer className="bg-none p-4" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default I2C;
