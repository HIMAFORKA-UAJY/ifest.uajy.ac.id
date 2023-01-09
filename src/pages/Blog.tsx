import { motion } from "framer-motion";
import { FC } from "react";
import { Link } from "react-router-dom";

import Layout from "../components/Layout";
import Footer from "../components/Footer";
import logo from "../assets/images/logo.png";
import { Carousel } from "flowbite-react";
import { FaWhatsapp } from "react-icons/fa";

const Blog: FC = () => {
  return (
        <Layout>
            <div className="absolute top-0 -z-10 h-screen w-screen bg-[#1F2A3E] bg-cover bg-center bg-no-repeat">
                <div className="flex flex-col lg:flex-row ml-16 pt-32 h-screen w-screen">
                    <div className="flex flex-col">
                        <div className="font-retroica text-4xl lg:text-6xl text-white">Pengumuman</div>
                        <div className="font-retroica text-4xl lg:text-6xl text-white">Finalis</div>
                        <div className="font-retroica text-4xl lg:text-6xl text-white">WDC</div>
                    </div>
                    <div className="flex w-full justify-end text-right pb-10 pr-8">
                        <img className="w-[30rem]" src="/images/blog-bg1.png" alt="" />
                    </div>
                </div>
                <div className="relative h-[60rem]">
                    <div className="h-fit w-[90%] drop-shadow-2xl bg-[#FAFAFA] absolute z-10 left-[50%] -top-24 -ml-[45%] p-12 lg:pr-40">
                        <div className="flex items-center gap-8 mb-14">
                            <img className="w-20 float-left" src={logo} alt="ifest-logo" />
                            <div>
                                <div className="font-retroica lg:text-lg">Koorbid Acara IFest#11</div>
                                <div className="font-retroica font-thin text-gray-600">Mar 23, 2023</div>
                            </div>
                        </div>
                        <p className="font-louisgeorgecafe lg:text-lg">
                            Halo teman-teman semuanya 🙌 <br /><br />

                            Waktu yang ditunggu-tunggu telah tiba nih, berikut ini daftar tim yang dinyatakan lolos ke tahap final Web Design Competition (WDC) 2023 <br /><br />

                            Bagi teman-teman yang timnya tidak ada pada daftar di bawah, jangan berkecil hati ya! Masih banyak kesempatan yang bisa teman-teman ikuti :D
                        </p>
                        <table className="w-full table-fixed border font-louisgeorgecafe mt-12 lg:m-12">
                            <thead className="border-black bg-[#1F2A3E] text-white ">
                                <tr>
                                    <th className="py-3 w-[30%]">Nama Tim</th>
                                    <th>Asal Institusi</th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                <tr className="border hover:bg-gray-200 hover:scale-105 hover:font-bold transition">
                                    <td className="py-3 border">Tim A</td>
                                    <td>Universitas A</td>
                                </tr>
                                <tr className="border hover:bg-gray-200 hover:scale-105 hover:font-bold transition">
                                    <td className="py-3 border">Tim B</td>
                                    <td>Universitas B</td>
                                </tr>
                                <tr className="border hover:bg-gray-200 hover:scale-105 hover:font-bold transition">
                                    <td className="py-3 border">Tim C</td>
                                    <td>Universitas C</td>
                                </tr>
                                <tr className="border hover:bg-gray-200 hover:scale-105 hover:font-bold transition">
                                    <td className="py-3 border">Tim D</td>
                                    <td>Universitas D</td>
                                </tr>
                                <tr className="border hover:bg-gray-200 hover:scale-105 hover:font-bold transition">
                                    <td className="py-3 border">Tim E</td>
                                    <td>Universitas E</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="flex w-screen flex-col items-center justify-center gap-2 bg-[#1B1442] pt-12">
                    <div className="font-retron2000 font-bold text-5xl text-white">Contact Us</div>
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