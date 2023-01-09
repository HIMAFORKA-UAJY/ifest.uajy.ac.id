import { Carousel } from "flowbite-react";
import { FC } from "react";
import { FaWhatsapp } from "react-icons/fa";

import logo from "../assets/images/logo.png";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

const Blog: FC = () => {
  return (
    <Layout>
      <div className="absolute top-0 -z-10 h-screen w-screen bg-[#1F2A3E] bg-cover bg-center bg-no-repeat">
        <div className="ml-16 flex h-screen w-screen flex-col pt-32 lg:flex-row">
          <div className="flex flex-col">
            <div className="font-retroica text-4xl text-white lg:text-6xl">Pengumuman</div>
            <div className="font-retroica text-4xl text-white lg:text-6xl">Finalis</div>
            <div className="font-retroica text-4xl text-white lg:text-6xl">WDC</div>
          </div>
          <div className="flex w-full justify-end pb-10 pr-8 text-right">
            <img className="w-[30rem]" src="/images/blog-bg1.png" alt="" />
          </div>
        </div>
        <div className="relative h-[60rem]">
          <div className="absolute left-[50%] -top-24 z-10 -ml-[45%] h-fit w-[90%] bg-[#FAFAFA] p-12 drop-shadow-2xl lg:pr-40">
            <div className="mb-14 flex items-center gap-8">
              <img className="float-left w-20" src={logo} alt="ifest-logo" />
              <div>
                <div className="font-retroica lg:text-lg">Koorbid Acara IFest#11</div>
                <div className="font-retroica font-thin text-gray-600">Mar 23, 2023</div>
              </div>
            </div>
            <p className="font-louisgeorgecafe lg:text-lg">
              Halo teman-teman semuanya 🙌 <br />
              <br />
              Waktu yang ditunggu-tunggu telah tiba nih, berikut ini daftar tim yang dinyatakan
              lolos ke tahap final Web Design Competition (WDC) 2023 <br />
              <br />
              Bagi teman-teman yang timnya tidak ada pada daftar di bawah, jangan berkecil hati ya!
              Masih banyak kesempatan yang bisa teman-teman ikuti :D
            </p>
            <table className="mt-12 w-full table-fixed border font-louisgeorgecafe lg:m-12">
              <thead className="border-black bg-[#1F2A3E] text-white ">
                <tr>
                  <th className="w-[30%] py-3">Nama Tim</th>
                  <th>Asal Institusi</th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr className="border transition hover:scale-105 hover:bg-gray-200 hover:font-bold">
                  <td className="border py-3">Tim A</td>
                  <td>Universitas A</td>
                </tr>
                <tr className="border transition hover:scale-105 hover:bg-gray-200 hover:font-bold">
                  <td className="border py-3">Tim B</td>
                  <td>Universitas B</td>
                </tr>
                <tr className="border transition hover:scale-105 hover:bg-gray-200 hover:font-bold">
                  <td className="border py-3">Tim C</td>
                  <td>Universitas C</td>
                </tr>
                <tr className="border transition hover:scale-105 hover:bg-gray-200 hover:font-bold">
                  <td className="border py-3">Tim D</td>
                  <td>Universitas D</td>
                </tr>
                <tr className="border transition hover:scale-105 hover:bg-gray-200 hover:font-bold">
                  <td className="border py-3">Tim E</td>
                  <td>Universitas E</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex w-screen flex-col items-center justify-center gap-2 bg-[#1B1442] pt-12">
          <div className="font-retron2000 text-5xl font-bold text-white">Contact Us</div>
          <div className="font-retroica text-base text-white">
            Masih ada yang bingung? Yuk kontak kami.
          </div>
          <div className="h-64 w-64">
            <Carousel leftControl=" " rightControl=" " indicators={false}>
              <div className="flex justify-center text-center text-white">
                <table className="table-cell border-separate rounded-xl border-[6px] border-[#9DCE6D] p-2">
                  <thead>
                    <tr>
                      <th>WDC</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <a href="#f" target="_blank">
                          <div style={{ marginTop: ".5rem", marginBottom: ".5rem" }}>
                            0812 3470 303
                          </div>
                          <button className="mx-auto flex items-center justify-center gap-1 rounded-2xl bg-[#6ca0af] bg-gradient-to-br from-[#9dcd6c] px-2">
                            <FaWhatsapp />
                            Andreas
                          </button>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="#f" target="_blank">
                          <div style={{ marginTop: ".5rem", marginBottom: ".5rem" }}>
                            0812 3470 303
                          </div>
                          <button className="mx-auto flex items-center justify-center gap-1 rounded-2xl bg-[#6ca0af] bg-gradient-to-br from-[#9dcd6c] px-2">
                            <FaWhatsapp />
                            Andreas
                          </button>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Carousel>
          </div>
        </div>
        <Footer className="bg-[#1B1442] p-4" />
      </div>
    </Layout>
  );
};

export default Blog;
