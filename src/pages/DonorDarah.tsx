import { FC, useRef } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

import Layout from "../components/Layout";
import Footer from "../components/Footer";


const DonorDarah: FC = () => {
    const contentRef = useRef<HTMLDivElement>(null);

    return (
        <Layout>
            <div className="-z-10 h-screen w-screen absolute top-0 left-0">
                <div className="flex flex-col justify-center items-center h-screen w-screen bg-[url('/images/donor-darah-bg.png')] bg-cover bg-center">
                    <div className="flex flex-col justify-center items-center lg:w-3/4 lg:h-3/4">
                        <h1 className="text-5xl font-bold text-[#fff] font-retroica text-center mt-20"><b className="text-[#CE5866]">Satu</b> donasi Anda<br/>dapat selamatkan<br/><b className="text-[#CE5866]">3 nyawa</b>!</h1>
                        <div className="text-white font-retroica text-2xl text-center mt-5 p-5">Donor darah adalah suatu aksi kebaikan yang dilakukan dengan cara menyumbangkan sebagian darah kepada orang lain yang membutuhkan.</div>
                        <div className="flex gap-4 font-retroica text-sm text-white p-10">
                            <div className="bg-[#CE5866] p-1 rounded-full">
                                <div className="bg-[#CE5866] rounded-full flex gap-1 items-center px-5 py-3">
                                    Cara Daftar
                                </div>
                            </div>
                            <div className="border-2 border-[#CE5866] rounded-full flex gap-1 items-center px-5">
                                <div className="text-[#fff]">Ketahui lebih lanjut</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center text-center animate-pulse">
                        <motion.button
                            onClick={() => contentRef.current?.scrollIntoView({ behavior: "smooth" })}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.75 }}
                            transition={{ delay: 0.0, duration: 0.25 }}
                            className="mt-20 transition-transform hover:scale-125">
                            <div className="text-white font-retroica text-sm w-20">Read More</div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="stroke-white ml-5 w-10 h-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.1" />
                            </svg>
                        </motion.button>
                    </div>
                </div>

                <div ref={contentRef} className="bg-gradient-to-t from-[#000] to-[#4A2B52] w-screen py-2">
                    <div className="flex flex-col justify-center items-center text-center">
                        <h1 className="text-4xl font-bold text-[#fff] font-retroica">Sponsor Kami</h1>
                    </div>
                    <div className="lg:grid lg:grid-cols-3 lg:gap-4 lg:px-20 lg:py-20 py-10">
                        <div className="flex flex-col justify-center items-center text-center lg:py-0 py-10">
                            <img src="/images/sponsor-1.png" alt="sponsor-1" className="w-1/3"/>
                        </div>
                        <div className="flex flex-col justify-center items-center text-center lg:py-0 py-10">
                            <img src="/images/logo.png" alt="sponsor-2" className="w-1/3" />
                        </div>
                        <div className="flex flex-col justify-center items-center text-center lg:py-0 py-10">
                            <img src="/images/sponsor-3.png" alt="sponsor-3" className="w-1/2" />
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center text-center pt-20">
                        <h1 className="text-4xl font-bold text-[#fff] font-retroica">Apa sih manfaat donor darah?</h1>
                        <div className="text-[#fff] text-1xs font-retroica">Sumber: <a href="halodoc.com" className="text-[#FF95C1]">Halodoc</a></div>
                        <div className="lg:grid lg:grid-cols-2 lg:gap-4 lg:py-20 py-10">
                            <div className="flex flex-col justify-center items-center p-20 bg-[#1a203f42]">
                                <div className="justify-center items-center">
                                    <div className="flex justify-center items-center">
                                        <img src="images/not-icon.png" alt="not-icon" className="w-10" />
                                    </div>
                                    <div className="justify-center items-center">
                                        <div className="text-[#FF95C1] font-retroica text-center text-2xl mt-2">Mendeteksi penyakit serius</div>
                                    </div>
                                    <div className="justify-center items-center">
                                        <div className="text-[#fff] font-retroica text-center text-sm mt-2 lg:px-20">Karena sebelum dilakukan proses donor, ada pengetesan untuk beberapa penyakit. Hal ini dilakukan agar kualitas darah yang didonasikan terjaga.</div>
                                    </div>

                                </div>
                            </div>
                            <div className="flex flex-col justify-center items-center p-20 bg-[#1a203f42]">
                                <div className="justify-center items-center">
                                    <div className="flex justify-center items-center">
                                        <img src="images/not-icon.png" alt="not-icon" className="w-10" />
                                    </div>
                                    <div className="justify-center items-center">
                                        <div className="text-[#FF95C1] font-retroica text-center text-2xl mt-2">Meningkatkan produksi sel darah</div>
                                    </div>
                                    <div className="justify-center items-center">
                                        <div className="text-[#fff] font-retroica text-center text-sm mt-2 lg:px-20">Karena saat donasi darah, tubuh kita akan membentuk sel darah merah yang baru. Donor darah secara rutin dapat menstimulasi pembentukan darah baru.</div>
                                    </div>

                                </div>
                            </div>
                            <div className="flex flex-col justify-center items-center p-20 bg-[#1a203f42]">
                                <div className="justify-center items-center">
                                    <div className="flex justify-center items-center">
                                        <img src="images/not-icon.png" alt="not-icon" className="w-10" />
                                    </div>
                                    <div className="justify-center items-center">
                                        <div className="text-[#FF95C1] font-retroica text-center text-2xl mt-2">Panjang umur</div>
                                    </div>
                                    <div className="justify-center items-center">
                                        <div className="text-[#fff] font-retroica text-center text-sm mt-2 lg:px-20">Karena menurut penelitian, berbuat baik dapat memperpanjang usia. Menurut penelitian, donor darah dapat menjaga kesehatan emosional seseorang. </div>
                                    </div>

                                </div>
                            </div>
                            <div className="flex flex-col justify-center items-center p-20 bg-[#1a203f42]">
                                <div className="justify-center items-center">
                                    <div className="flex justify-center items-center">
                                        <img src="images/not-icon.png" alt="not-icon" className="w-10" />
                                    </div>
                                    <div className="justify-center items-center">
                                        <div className="text-[#FF95C1] font-retroica text-center text-2xl mt-2">Menjaga kesehatan jantung </div>
                                    </div>
                                    <div className="justify-center items-center">
                                        <div className="text-[#fff] font-retroica text-center text-sm mt-2 lg:px-20">Karena donor darah dapat memperlancar dan mencegah penyumbatan arteri. Selain itu, donor darah juga dapat meringankan resiko kanker, stroke, dan serangan jantung.</div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center text-center py-10 bg-gradient-to-r from-[#9B2A5A] to-[#B3362E]">
                        <h1 className="text-4xl font-bold text-[#fff] font-retroica">Bagaimana sih prosesnya?</h1>
                        <div className="lg:grid lg:grid-cols-3 lg:gap-4">
                            <div className="flex flex-col justify-center items-center p-20">
                                <div className="justify-center items-center">
                                    <div className="flex justify-center items-center">
                                        <img src="images/step-1.png" alt="step-1" className="w-10" />
                                    </div>
                                    <div className="justify-center items-center">
                                        <div className="text-[#fff] font-retroica text-center text-2xl mt-2">Datang ke lokasi</div>
                                    </div>
                                    <div className="justify-center items-center">
                                        <div className="text-[#fff] font-retroica text-center text-sm mt-2 lg:px-20">Datang ke lokasi kami di {} dan mengambil form pendaftaran</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center items-center p-20">
                                <div className="justify-center items-center">
                                    <div className="flex justify-center items-center">
                                        <img src="images/step-2.png" alt="step-2" className="w-10" />
                                    </div>
                                    <div className="justify-center items-center">
                                        <div className="text-[#fff] font-retroica text-center text-2xl mt-2">Isi form pendaftaran</div>
                                    </div>
                                    <div className="justify-center items-center">
                                        <div className="text-[#fff] font-retroica text-center text-sm mt-2 lg:px-20">Setelah mengambil form, isi dengan data yang sebenar-benarnya</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center items-center p-20">
                                <div className="justify-center items-center">
                                    <div className="flex justify-center items-center">
                                        <img src="images/step-3.png" alt="step-3" className="w-10" />
                                    </div>
                                    <div className="justify-center items-center">
                                        <div className="text-[#fff] font-retroica text-center text-2xl mt-2">Donor darah</div>
                                    </div>
                                    <div className="justify-center items-center">
                                        <div className="text-[#fff] font-retroica text-center text-sm mt-2 lg:px-20">Melakukan donor darah sesuai dengan petunjuk panitia</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center text-center lg:pt-40 lg:pb-36 lg:mb-5 p-24">
                        <h1 className="text-6xl font-bold text-[#fff] font-retron2000">Contact Person</h1>
                        <div className="text-1xl font-thin-retroica text-base text-[#ffffffcc] p-5 gap-1">Masih ada yang bingung? Yuk kontak kami.</div>
                        <div className="h-64 w-64 lg:py-10 py-5">
                            <div className="text-white text-center flex justify-center">
                                <table className="table-cell border-separate border-[6px] border-[#FF8064] rounded-xl p-5">
                                    <thead>
                                        <tr>
                                            <th className="border-b-[4px] border-[#FF8064] font-retroica text-[#ffffffcc]">Donor Darah</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="font-retroica mt-2 text-[#ffffffcc]">0822 2555 3400</div>
                                                <button className="bg-gradient-to-br from-[#FE8064] bg-[#FEB783] text-[#000] font-bold px-2 rounded flex items-center justify-center gap-1">
                                                    <FaWhatsapp />
                                                    Lala
                                                </button>
                                            </td>
                                        </tr>
                                        <tr className="mt-10">
                                            <td>
                                                <div className="font-retroica mt-2 text-[#ffffffcc]">0852 1024 5177</div>
                                                <button className="bg-gradient-to-br from-[#FE8064] bg-[#FEB783] text-[#000] font-bold px-2 rounded flex items-center justify-center gap-1">
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

                    


                    <Footer className={"bg-none p-4"} />


                </div>
                
            </div>

        </Layout>
    );
};

export default DonorDarah;
