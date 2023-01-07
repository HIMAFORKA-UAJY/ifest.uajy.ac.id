import { motion } from "framer-motion";
import { FC, useEffect, useRef } from "react";
import { FaWhatsapp } from "react-icons/fa";

import Footer from "../components/Footer";
import Layout from "../components/Layout";

const DonorDarah: FC = () => {
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
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
                  onClick={() => ref1.current?.scrollIntoView({ behavior: "smooth" })}
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
                  onClick={() => ref2.current?.scrollIntoView({ behavior: "smooth" })}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.75 }}
                  transition={{ delay: 0.0, duration: 0.25 }}
                  className="text-[#fff]"
                >
                  Ketahui lebih lanjut
                </motion.button>
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
                    <div className="mt-2 text-center font-retroica text-sm text-[#fff] lg:px-20">
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
                    <div className="mt-2 text-center font-retroica text-sm text-[#fff] lg:px-20">
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
                    <div className="mt-2 text-center font-retroica text-sm text-[#fff] lg:px-20">
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
                    <div className="mt-2 text-center font-retroica text-sm text-[#fff] lg:px-20">
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
                    <div className="mt-2 text-center font-louisgeorgecafe text-sm text-[#fff] lg:px-20">
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
                    <div className="mt-2 text-center font-louisgeorgecafe text-sm text-[#fff] lg:px-20">
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
                    <div className="mt-2 text-center font-louisgeorgecafe text-sm text-[#fff] lg:px-20">
                      Menunjukkan bukti registrasi dan melakukan donor darah
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h1 className="font-retroica text-4xl font-bold text-[#fff]">ATAU</h1>
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
                    <div className="mt-2 text-center font-louisgeorgecafe text-sm text-[#fff] lg:px-20">
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
                    <div className="mt-2 text-center font-louisgeorgecafe text-sm text-[#fff] lg:px-20">
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
                    <div className="mt-2 text-center font-louisgeorgecafe text-sm text-[#fff] lg:px-20">
                      Melakukan donor darah sesuai dengan petunjuk panitia
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center p-24 text-center lg:mb-5 lg:pt-40 lg:pb-36">
            <h1 className="font-retron2000 text-6xl font-bold text-[#fff]">Contact Person</h1>
            <div className="text-1xl font-thin-retroica gap-1 p-5 text-base text-[#ffffffcc]">
              Masih ada yang bingung? Yuk kontak kami.
            </div>
            <div className="h-64 w-64 py-5 lg:py-10">
              <div className="flex justify-center text-center text-white">
                <table className="table-cell border-separate rounded-xl border-[6px] border-[#FF8064] p-5">
                  <thead>
                    <tr>
                      <th className="border-b-[4px] border-[#FF8064] font-retroica text-[#ffffffcc]">
                        Donor Darah
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="mt-2 font-retroica text-[#ffffffcc]">0822 2555 3400</div>
                        <button className="mx-auto flex items-center justify-center gap-1 rounded bg-[#FEB783] bg-gradient-to-br from-[#FE8064] px-2 font-bold text-[#000]">
                          <FaWhatsapp />
                          Lala
                        </button>
                      </td>
                    </tr>
                    <tr className="mt-10">
                      <td>
                        <div className="mt-2 font-retroica text-[#ffffffcc]">0852 1024 5177</div>
                        <button className="mx-auto flex items-center justify-center gap-1 rounded bg-[#FEB783] bg-gradient-to-br from-[#FE8064] px-2 font-bold text-[#000]">
                          <FaWhatsapp />
                          Kevin
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
