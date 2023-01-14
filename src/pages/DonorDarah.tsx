import { Box, Modal, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { FC, useEffect, useRef, useState } from "react";
import { Chrono } from "react-chrono";
import { FaLine, FaRegWindowClose, FaWhatsapp } from "react-icons/fa";

import Footer from "../components/Footer";
import Layout from "../components/Layout";

const DonorDarah: FC = () => {
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);
  // const [openPDF, setOpenPDF] = useState(false);

  const onClick = () => setOpen(true);
  // const onClickPDF = () => setOpenPDF(true);

  const handleClose = () => setOpen(false);
  // const handleClosePDF = () => setOpenPDF(false);

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

  const pdf = [
    {
      title: "17 Maret - 24 Maret 2023",
      cardTitle: "Aksi Donor Darah Hari Pertama",
      cardDetailedText: "Website Donor Darah",
    },
  ];
  const pdf1 = [
    {
      title: "29 Maret 2023",
      cardTitle: "Aksi Donor Darah Hari Pertama",
      cardDetailedText:
        "Lobby Fakultas Bisnis dan Ekonomika Gedung St. Bonaventura Universitas Atma Jaya Yogyakarta",
    },
  ];
  const pdf2 = [
    {
      title: "30 Maret 2023",
      cardTitle: "Donor Darah Hari Kedua",
      cardDetailedText:
        "Lobby Fakultas Bisnis dan Ekonomika Gedung St. Bonaventura Universitas Atma Jaya Yogyakarta",
    },
  ];
  const pdf3 = [
    {
      title: "31 Maret 2023",
      cardTitle: "Donor Darah Hari Ketiga",
      cardDetailedText:
        "Lobby Fakultas Bisnis dan Ekonomika Gedung St. Bonaventura Universitas Atma Jaya Yogyakarta",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <div className="absolute top-0 left-0 -z-10 h-screen w-screen">
        <div className="flex h-screen w-screen flex-col items-center justify-center bg-[url('/images/donor-darah-bg.png')] bg-cover bg-center">
          <div className="flex flex-col items-center justify-center lg:h-3/4 lg:w-3/4">
            <h1 className="mt-20 text-center font-retroica text-5xl font-bold text-[#fff]">
              <b className="text-[#CE5866]">Satu</b> donasi Anda
              <br />
              dapat selamatkan
              <br />
              <b className="text-[#CE5866]">3 nyawa</b>!
            </h1>
            <div className="mt-5 p-5 text-center font-retroica text-2xl text-white">
              Donor darah adalah suatu aksi kebaikan yang dilakukan dengan cara menyumbangkan
              sebagian darah kepada orang lain yang membutuhkan.
            </div>
            <div className="flex gap-8 p-10 font-retroica text-sm text-white">
              <div className="rounded-full bg-[#CE5866] p-1 transition-transform hover:scale-110">
                <motion.button
                  onClick={() =>
                    ref1.current?.scrollIntoView({ behavior: "smooth", block: "center" })
                  }
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.75 }}
                  transition={{ delay: 0.0, duration: 0.25 }}
                  className="flex items-center gap-1 rounded-full bg-[#CE5866] px-5 py-3"
                >
                  Cara Daftar
                </motion.button>
              </div>
              <div className="flex items-center gap-1 rounded-full border-2 border-[#CE5866] px-5 transition-transform hover:scale-110">
                <motion.button
                  onClick={() =>
                    ref2.current?.scrollIntoView({ behavior: "smooth", block: "center" })
                  }
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.75 }}
                  transition={{ delay: 0.0, duration: 0.25 }}
                  className="text-[#fff]"
                >
                  Ketahui lebih lanjut
                </motion.button>
              </div>
              <div className="rounded-full bg-[#CE5866] p-1 transition-transform hover:scale-110">
                <motion.button
                  onClick={onClick}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.75 }}
                  transition={{ delay: 0.0, duration: 0.25 }}
                  className="flex items-center gap-1 rounded-full bg-[#CE5866] px-5 py-3"
                >
                  Poster
                </motion.button>
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
            </div>
          </div>
          {/* <div className="flex animate-pulse items-center justify-center text-center">
            <motion.button
              onClick={() => contentRef.current?.scrollIntoView({ behavior: "smooth" })}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.75 }}
              transition={{ delay: 0.0, duration: 0.25 }}
              className="mt-20 transition-transform hover:scale-125"
            >
              <div className="w-20 font-retroica text-sm text-white">Read More</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="ml-5 h-10 w-10 stroke-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 5.25l-7.5 7.5-7.5-7.1"
                />
              </svg>
            </motion.button>
          </div> */}
        </div>

        <div className="w-screen bg-gradient-to-t from-[#000] to-[#4A2B52] py-2">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="font-retroica text-4xl font-bold text-[#fff]">Diselenggarakan Oleh</h1>
          </div>
          <div className="py-10 lg:grid lg:grid-cols-3 lg:gap-4 lg:px-20 lg:py-20">
            <div
              className="flex flex-col items-center justify-center py-10 text-center lg:py-4"
              style={{ backgroundColor: "#53305a" }}
            >
              <img src="/images/sponsor-1.png" alt="sponsor-1" className="w-1/3" />
            </div>
            <div
              className="flex flex-col items-center justify-center py-10 text-center lg:py-4"
              style={{ backgroundColor: "#53305a" }}
            >
              <img src="/images/logo.png" alt="sponsor-2" className="w-1/3" />
            </div>
            <div
              className="flex flex-col items-center justify-center py-10 text-center lg:py-4"
              style={{ backgroundColor: "#53305a" }}
            >
              <img src="/images/sponsor-3.png" alt="sponsor-3" className="w-1/2" />
            </div>
          </div>

          <div ref={ref2} className="flex flex-col items-center justify-center pt-20 text-center">
            <h1 className="font-retroica text-4xl font-bold text-[#fff]">
              Apa sih manfaat donor darah?
            </h1>
            <div className="text-1xs font-retroica text-[#fff]">
              Sumber:{" "}
              <a href="halodoc.com" className="text-[#FF95C1]">
                Halodoc
              </a>
            </div>
            <div className="py-10 lg:grid lg:grid-cols-2 lg:gap-4 lg:py-20">
              <div className="flex flex-col items-center justify-center bg-[#1a203f42] p-20">
                <div className="items-center justify-center">
                  <div className="flex items-center justify-center">
                    <img
                      src="images/icon_dondar_1.svg"
                      style={{ width: "4rem" }}
                      alt="not-icon"
                      className="w-10"
                    />
                  </div>
                  <div className="items-center justify-center">
                    <div className="mt-2 text-center font-retroica text-2xl text-[#FF95C1]">
                      Mendeteksi penyakit serius
                    </div>
                  </div>
                  <div className="items-center justify-center">
                    <div className="mt-2 text-center font-louisgeorgecafe text-base text-[#fff] lg:px-20">
                      Karena sebelum dilakukan proses donor, ada pengetesan untuk beberapa penyakit.
                      Hal ini dilakukan agar kualitas darah yang didonasikan terjaga.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center bg-[#1a203f42] p-20">
                <div className="items-center justify-center">
                  <div className="flex items-center justify-center">
                    <img
                      src="images/icon_dondar_2.svg"
                      style={{ width: "4rem" }}
                      alt="not-icon"
                      className="w-10"
                    />
                  </div>
                  <div className="items-center justify-center">
                    <div className="mt-2 text-center font-retroica text-2xl text-[#FF95C1]">
                      Meningkatkan produksi sel darah
                    </div>
                  </div>
                  <div className="items-center justify-center">
                    <div className="mt-2 text-center font-louisgeorgecafe text-base text-[#fff] lg:px-20">
                      Karena saat donasi darah, tubuh kita akan membentuk sel darah merah yang baru.
                      Donor darah secara rutin dapat menstimulasi pembentukan darah baru.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center bg-[#1a203f42] p-20">
                <div className="items-center justify-center">
                  <div className="flex items-center justify-center">
                    <img
                      src="images/icon_dondar_4.svg"
                      style={{ width: "4rem" }}
                      alt="not-icon"
                      className="w-10"
                    />
                  </div>
                  <div className="items-center justify-center">
                    <div className="mt-2 text-center font-retroica text-2xl text-[#FF95C1]">
                      Panjang umur
                    </div>
                  </div>
                  <div className="items-center justify-center">
                    <div className="mt-2 text-center font-louisgeorgecafe text-base text-[#fff] lg:px-20">
                      Karena menurut penelitian, berbuat baik dapat memperpanjang usia. Menurut
                      penelitian, donor darah dapat menjaga kesehatan emosional seseorang.{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center bg-[#1a203f42] p-20">
                <div className="items-center justify-center">
                  <div className="flex items-center justify-center">
                    <img
                      src="images/icon_dondar_3.svg"
                      style={{ width: "4rem" }}
                      alt="not-icon"
                      className="w-10"
                    />
                  </div>
                  <div className="items-center justify-center">
                    <div className="mt-2 text-center font-retroica text-2xl text-[#FF95C1]">
                      Menjaga kesehatan jantung{" "}
                    </div>
                  </div>
                  <div className="items-center justify-center">
                    <div className="mt-2 text-center font-louisgeorgecafe text-base text-[#fff] lg:px-20">
                      Karena donor darah dapat memperlancar dan mencegah penyumbatan arteri. Selain
                      itu, donor darah juga dapat meringankan resiko kanker, stroke, dan serangan
                      jantung.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            ref={ref1}
            className="flex flex-col items-center justify-center bg-gradient-to-r from-[#9B2A5A] to-[#B3362E] py-10 text-center"
          >
            <h1 className="font-retroica text-4xl font-bold text-[#fff]">
              Bagaimana sih prosesnya?
            </h1>
            <div className="lg:grid lg:grid-cols-3 lg:gap-4">
              <div className="flex flex-col items-center justify-center p-20">
                <div className="items-center justify-center">
                  <div className="flex items-center justify-center">
                    <img src="images/step-1.png" alt="step-1" className="w-10" />
                  </div>
                  <div className="items-center justify-center">
                    <div className="mt-2 text-center font-retroica text-2xl text-[#fff]">
                      Pergi ke Dashboard
                    </div>
                  </div>
                  <div className="items-center justify-center">
                    <div className="mt-2 text-center font-louisgeorgecafe text-sm text-[#fff] lg:px-12">
                      Daftar melalui{" "}
                      <a
                        href="https://ifest.uajy.ac.id/dash/donor_darah"
                        style={{ textDecoration: "underline" }}
                      >
                        Dashboard
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center p-20">
                <div className="items-center justify-center">
                  <div className="flex items-center justify-center">
                    <img src="images/step-2.png" alt="step-2" className="w-10" />
                  </div>
                  <div className="items-center justify-center">
                    <div className="mt-2 text-center font-retroica text-2xl text-[#fff]">
                      Isi form pendaftaran
                    </div>
                  </div>
                  <div className="items-center justify-center">
                    <div className="mt-2 text-center font-louisgeorgecafe text-sm text-[#fff] lg:px-12">
                      Isi form secara online dan dapatkan bukti registrasi melalui email
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center p-20">
                <div className="items-center justify-center">
                  <div className="flex items-center justify-center">
                    <img src="images/step-3.png" alt="step-3" className="w-10" />
                  </div>
                  <div className="items-center justify-center">
                    <div className="mt-2 text-center font-retroica text-2xl text-[#fff]">
                      Donor darah
                    </div>
                  </div>
                  <div className="items-center justify-center">
                    <div className="mt-2 text-center font-louisgeorgecafe text-sm text-[#fff] lg:px-12">
                      Menunjukkan bukti registrasi dan melakukan donor darah
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h1 className="font-retroica text-3xl font-bold text-[#fff]">ATAU</h1>
            <div className="lg:grid lg:grid-cols-3 lg:gap-4">
              <div className="flex flex-col items-center justify-center p-20">
                <div className="items-center justify-center">
                  <div className="flex items-center justify-center">
                    <img src="images/step-1.png" alt="step-1" className="w-10" />
                  </div>
                  <div className="items-center justify-center">
                    <div className="mt-2 text-center font-retroica text-2xl text-[#fff]">
                      Datang ke lokasi
                    </div>
                  </div>
                  <div className="items-center justify-center">
                    <div className="mt-2 text-center font-louisgeorgecafe text-sm text-[#fff] lg:px-12">
                      Datang ke lokasi kami di {} dan mengambil form pendaftaran
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center p-20">
                <div className="items-center justify-center">
                  <div className="flex items-center justify-center">
                    <img src="images/step-2.png" alt="step-2" className="w-10" />
                  </div>
                  <div className="items-center justify-center">
                    <div className="mt-2 text-center font-retroica text-2xl text-[#fff]">
                      Isi form pendaftaran
                    </div>
                  </div>
                  <div className="items-center justify-center">
                    <div className="mt-2 text-center font-louisgeorgecafe text-sm text-[#fff] lg:px-12">
                      Setelah mengambil form, isi dengan data yang sebenar-benarnya
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center p-20">
                <div className="items-center justify-center">
                  <div className="flex items-center justify-center">
                    <img src="images/step-3.png" alt="step-3" className="w-10" />
                  </div>
                  <div className="items-center justify-center">
                    <div className="mt-2 text-center font-retroica text-2xl text-[#fff]">
                      Donor darah
                    </div>
                  </div>
                  <div className="items-center justify-center">
                    <div className="mt-2 text-center font-louisgeorgecafe text-sm text-[#fff] lg:px-12">
                      Melakukan donor darah sesuai dengan petunjuk panitia
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="flex w-full flex-col justify-center pt-24 pb-24 lg:w-[70%] lg:items-center">
              <div className="mx-auto mb-8 text-center font-retroica text-4xl text-[#FF95C1]">
                Timeline
              </div>
              <div className="w-fit rounded-xl bg-[#241f3d] pb-1">
                <div className="rounded-xl bg-[#716B90] p-4 font-retroica text-white shadow-inner">
                  Pendaftaran
                </div>
              </div>

              <span className="hidden lg:flex lg:w-full">
                <Chrono
                  items={pdf}
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
                  items={pdf}
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
                  Donor Darah Hari Pertama
                </div>
              </div>

              <span className="hidden lg:flex lg:w-full">
                <Chrono
                  items={pdf1}
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
                  items={pdf1}
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
                  Donor Darah Hari Kedua
                </div>
              </div>

              <span className="hidden lg:flex lg:w-full">
                <Chrono
                  items={pdf2}
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
                  items={pdf2}
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
                  Donor Darah Hari Ketiga
                </div>
              </div>

              <span className="hidden lg:flex lg:w-full">
                <Chrono
                  items={pdf3}
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
                  items={pdf3}
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
          </div>

          <div className="flex flex-col items-center justify-center p-24 text-center lg:mb-5 lg:pt-40">
            <h1 className="font-retron2000 text-5xl font-bold text-[#fff]">Contact Person</h1>
            <div className="text-1xl font-thin-retroica gap-1 p-5 text-base text-[#ffffffcc]">
              Masih ada yang bingung? Yuk kontak kami.
            </div>
            <div className="h-64 w-64 py-5 lg:py-10">
              <div className="flex justify-center text-center text-white">
                <table className="table-cell border-separate rounded-xl border-[6px] border-[#c47c41] p-2">
                  <thead>
                    <tr>
                      <th className="border-b-[6px] border-[#c47c41]">Donor Darah</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="flex flex-col items-center">
                          <div className="flex items-center gap-1 font-louisgeorgecafe">
                            <a
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                              href="https://wa.me/6285714080699 "
                              target="_blank"
                              rel="noreferrer"
                            >
                              <FaWhatsapp className="mr-2" />
                              +62 857-1408-0699
                            </a>
                          </div>
                          <div className="flex items-center gap-1 font-louisgeorgecafe">
                            <FaLine />
                            angelinaderrel
                          </div>
                        </div>
                        <button
                          className="mx-auto rounded-2xl bg-[#ca7f4a] bg-gradient-to-br from-[#c2533b] px-2 font-louisgeorgecafe"
                          style={{ cursor: "default" }}
                        >
                          Derrel
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="flex flex-col items-center">
                          <div className="flex items-center gap-1 font-louisgeorgecafe">
                            <a
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                              href="https://wa.me/6282334026619"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <FaWhatsapp className="mr-2" />
                              +62 823-3402-6619
                            </a>
                          </div>
                          <div className="flex items-center gap-1 font-louisgeorgecafe">
                            <FaLine />
                            sa2st2ra
                          </div>
                        </div>
                        <button
                          className="mx-auto rounded-2xl bg-[#ca7f4a] bg-gradient-to-br from-[#c2533b] px-2 font-louisgeorgecafe"
                          style={{ cursor: "default" }}
                        >
                          Deta
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center pb-20 text-center lg:mb-5 lg:pb-72">
            <h1 className="font-retron2000 text-5xl font-bold text-[#fff]">Lokasi</h1>
            <div className="h-[20%] w-[70%] py-5 lg:h-96 lg:w-[80%] lg:py-10">
              <div className="flex justify-center text-center text-white">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.098178319926!2d110.4139404153825!3d-7.779414179341817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a59f1fb2f2b45%3A0x20986e2fe9c79cdd!2sUniversitas%20Atma%20Jaya%20Yogyakarta%20-%20Kampus%203%20Gedung%20Bonaventura%20Babarsari!5e0!3m2!1sen!2sid!4v1673511394667!5m2!1sen!2sid"
                  width="1920"
                  height="600"
                  className="rounded-xl"
                  loading="lazy"
                  title="map"
                />
              </div>
            </div>
          </div>
          <Footer className="bg-none p-4" />
        </div>
      </div>
    </Layout>
  );
};

export default DonorDarah;
