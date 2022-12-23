import { Accordion, Carousel, Footer } from "flowbite-react";
import { motion } from "framer-motion";
import { FaWhatsapp, MdEmail, SiInstagram, SiLine } from "react-icons/all";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import Layout from "../components/Layout";

export default function Home() {
    return (
        <Layout>
            <div className="bg-[url('/images/bg-no-flip.png')] bg-center bg-cover bg-no-repeat -z-10 absolute top-0 h-screen w-screen">
                <motion.div
                    className="flex flex-col justify-center items-center h-screen"
                >
                    <TypeAnimation
                        sequence={[
                            1000,
                            "IFEST#11"
                        ]}
                        speed={1}
                        wrapper="h1"
                        cursor={false}
                        className="font-gameofsquids text-6xl lg:text-8xl font-bold tracking-[0.1em] text-white text-center"
                    />
                    <TypeAnimation
                        sequence={[
                            2000,
                            "Technology Rebuild Our Country"
                        ]}
                        speed={45}
                        wrapper="h2"
                        cursor={false}
                        className="font-retrons2000 text-xl lg:text-3xl font-light text-white text-center"
                    />
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 4.0, duration: 0.25 }}
                        className="mt-12 transition-transform hover:scale-125">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="stroke-white w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </motion.button>
                </motion.div>

                <div className="bg-[url('/images/bg-flip.png')] bg-no-repeat bg-cover bg-center h-screen w-screen">
                    <div className="flex flex-col justify-center items-center h-screen w-screen">
                        <img className="w-72" src="https://ifest.uajy.ac.id/assets/images/event/ill-i2c.png" alt="i2c" />
                        <div className="text-center">
                            <div className="font-retroica text-2xl text-white">I2C</div>
                            <div className="font-retroica text-2xl text-white">Innovative Informatics Contest</div>
                        </div>
                        <div className="flex gap-4 font-retroica text-sm text-white">
                            <div className="bg-gradient-to-r from-[#ffa655] to-[#ff82e4] p-1 rounded-full">
                                <div className="bg-[#110545] p-1 rounded-full">Rp. 50.000</div>
                            </div>
                            <div className="bg-gradient-to-r from-[#ffa655] to-[#ff82e4] p-1 rounded-full">
                                <div className="bg-[#110545] p-1 rounded-full">SMA/Sederajat</div>
                            </div>
                            <div className="bg-gradient-to-r from-[#ffa655] to-[#ff82e4] p-1 rounded-full">
                                <div className="bg-[#110545] p-1 rounded-full">Max. 3 orang</div>
                            </div>
                        </div>
                        <div className="pt-2"></div>
                        <div className="p-4 font-retroica text-white">
                            <p className="text-justify">
                                <strong>Innovative Informatics Contest</strong> (I2C) 2022 adalah sebuah kompetisi ide kreatif untuk merancang aplikasi yang inovatif secara berkelompok beranggotakan 3 orang. I2C 2022 ini mengusung tema "A Journey To Better Home Living".
                            </p>
                        </div>
                        <div>
                            <motion.button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.0, duration: 0.25 }}
                                className="mt-7 px-5 py-3 rounded-[2.0em] text-sm lg:text-base font-retroica text-white bg-gradient-to-r from-[#b05f30] to-[#bd37bd]">
                                <Link to="/i2c">Read More</Link >
                            </motion.button>
                        </div>
                    </div>
                </div>

                <div className="bg-[#110545] h-screen w-screen">
                    <div className="flex flex-col justify-center items-center h-screen w-screen">
                        <img className="w-72" src="https://ifest.uajy.ac.id/assets/images/event/ill-wdc.png" alt="wdc" />
                        <div className="text-center">
                            <div className="font-retroica text-2xl text-white">WDC</div>
                            <div className="font-retroica text-2xl text-white">Web Design Competition</div>
                        </div>
                        <div className="flex gap-4 font-retroica text-sm text-white">
                            <div className="bg-gradient-to-r from-[#ffa655] to-[#ff82e4] p-1 rounded-full">
                                <div className="bg-[#110545] p-1 rounded-full">Rp. 50.000</div>
                            </div>
                            <div className="bg-gradient-to-r from-[#ffa655] to-[#ff82e4] p-1 rounded-full">
                                <div className="bg-[#110545] p-1 rounded-full">Mahasiswa</div>
                            </div>
                            <div className="bg-gradient-to-r from-[#ffa655] to-[#ff82e4] p-1 rounded-full">
                                <div className="bg-[#110545] p-1 rounded-full">Max. 2 orang</div>
                            </div>
                        </div>
                        <div className="p-4 font-retroica text-white">
                            <p className="text-justify">
                                <strong>Web Design Competition</strong> (WDC) 2022 adalah perlombaan merancang desain visual yang ditampilkan di media digital yaitu situs web. WDC 2022 mengangkat tema "Advancing Together With Credible Information".
                            </p>
                        </div>
                        <div>
                            <motion.button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.0, duration: 0.25 }}
                                className="mt-7 px-5 py-3 rounded-[2.0em] text-sm lg:text-base font-retroica text-white bg-gradient-to-r from-[#b05f30] to-[#bd37bd]">
                                Read More
                            </motion.button>
                        </div>
                    </div>
                </div>

                <div className="bg-[#110545] h-screen w-screen">
                    <div className="flex flex-col justify-center items-center h-screen w-screen">
                        <img className="w-72" src="https://ifest.uajy.ac.id/assets/images/event/ill-cp.png" alt="cp" />
                        <div className="text-center">
                            <div className="font-retroica text-2xl text-white">CP</div>
                            <div className="font-retroica text-2xl text-white">Competitive Programming</div>
                        </div>
                        <div className="flex gap-4 font-retroica text-sm text-white">
                            <div className="bg-gradient-to-r from-[#ffa655] to-[#ff82e4] p-1 rounded-full">
                                <div className="bg-[#110545] p-1 rounded-full">Rp. 50.000</div>
                            </div>
                            <div className="bg-gradient-to-r from-[#ffa655] to-[#ff82e4] p-1 rounded-full">
                                <div className="bg-[#110545] p-1 rounded-full">Mahasiswa</div>
                            </div>
                            <div className="bg-gradient-to-r from-[#ffa655] to-[#ff82e4] p-1 rounded-full">
                                <div className="bg-[#110545] p-1 rounded-full">Max. 3 orang</div>
                            </div>
                        </div>
                        <div className="p-4 font-retroica text-white">
                            <p className="text-justify">
                                <strong>Competitive Programming</strong> (CP) merupakan suatu perlombaan yang terfokus terhadap pemecahan masalah atau algoritma matematika. Competitive Programming 2022 mengangkat tema "Programming Breaks Through The Limitations of Life.
                            </p>
                        </div>
                        <div>
                            <motion.button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.0, duration: 0.25 }}
                                className="mt-7 px-5 py-3 rounded-[2.0em] text-sm lg:text-base font-retroica text-white bg-gradient-to-r from-[#b05f30] to-[#bd37bd]">
                                Read More
                            </motion.button>
                        </div>
                    </div>
                </div>

                <div className="bg-[#110545] h-screen">
                    <div className="flex flex-col gap-10 justify-center items-center h-screen w-screen">
                        <div className="font-retroica text-4xl text-white">Publikasi</div>
                        <div className="h-[40rem] w-80">
                            <Carousel
                                leftControl=" "
                                rightControl=" "
                            >
                                <div className="text-center flex gap-2 flex-col h-full items-center justify-center bg-[#110560]">
                                    <img className="w-64" src="https://ifest.uajy.ac.id/assets/images/event/ill-cp.png" alt="/" />
                                    <div className="font-retroica text-[#ff69b4]">Joshua Puniwan Yahya - Ketua</div>
                                    <div className="font-retroica text-[#f5894d]">Welcome to IFest#11</div>
                                    <div className="font-retroica text-[#c5c5c5]">28 Desember 2022, 12.00 WIB</div>
                                </div>
                                <div className="text-center flex gap-2 flex-col h-full items-center justify-center bg-[#110560]">
                                    <img className="w-64" src="https://ifest.uajy.ac.id/assets/images/event/ill-wdc.png" alt="/" />
                                    <div className="font-retroica text-[#ff69b4]">Joshua Puniwan Yahya - Ketua</div>
                                    <div className="font-retroica text-[#f5894d]">Pengumuman Finalis WDC</div>
                                    <div className="font-retroica text-[#c5c5c5]">29 Desember 2022, 12.00 WIB</div>
                                </div>
                                <div className="text-center flex gap-2 flex-col h-full items-center justify-center bg-[#110560]">
                                    <img className="w-64" src="https://ifest.uajy.ac.id/assets/images/event/ill-i2c.png" alt="/" />
                                    <div className="font-retroica text-[#ff69b4]">Joshua Puniwan Yahya - Ketua</div>
                                    <div className="font-retroica text-[#f5894d]">Pengumuman Lolos Ke Tahap Virtual Expo I2C</div>
                                    <div className="font-retroica text-[#c5c5c5]">30 Desember 2022, 12.00 WIB</div>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>

                <div className="bg-[#110545] h-screen">
                    <div className="flex flex-col gap-10 justify-center items-center h-screen w-screen">
                        <div className="font-retroica text-4xl text-white">FAQ</div>
                        <div className="w-80">
                            <Accordion>
                                <Accordion.Panel>
                                    <Accordion.Title>
                                        Apa itu IFest?
                                    </Accordion.Title>
                                    <Accordion.Content>
                                        <p className="mb-2 text-gray-500 text-justify">
                                            Informatics Festival atau IFest adalah acara tahunan Himpunan Mahasiswa Informatika (HIMAFORKA) Universitas Atma Jaya Yogyakarta. Pada tahun 2022 ini, IFest#10 mengambil tema "Technology Rebuild Our Country" dengan berbagai susunan kompetisi dan acara yang tentunya menarik!
                                        </p>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title>
                                        Apa saja yang diselenggarakan di IFest#11?
                                    </Accordion.Title>
                                    <Accordion.Content>
                                        <p className="mb-2 text-gray-500 text-justify">
                                            IFest#10 menyelenggarakan beberapa kompetisi dan acara, antara lain:
                                            <ul className="pt-2">
                                                <li>Innovative Informatics Contest (I2C)</li>
                                                <li>Web Design Competition (WDC)</li>
                                                <li>Competitive Programming (CP)</li>
                                                <li>Seminar Nasional</li>
                                            </ul>
                                        </p>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title>
                                        Bagaimana cara mendaftar untuk setiap event IFest?
                                    </Accordion.Title>
                                    <Accordion.Content>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                            Pendaftaran diri dan tim dapat dilakukan melalui situs https://ifest.uajy.ac.id/dash/register. Kamu bisa mendaftarkan diri dan tim selama masa pendaftaran (masa pendaftaran untuk setiap kompetisi dan acara berbeda-beda).
                                        </p>
                                    </Accordion.Content>
                                </Accordion.Panel>
                            </Accordion>
                        </div>
                    </div>
                </div>

                <div className="bg-[#110545] h-screen">
                    <div className="flex flex-col gap-6 justify-center items-center h-screen w-screen">
                        <div className="font-retroica text-4xl text-white">Sponsors</div>
                        <div className="h-64 w-64">
                            <Carousel
                                leftControl=" "
                                rightControl=" "
                                indicators={false}
                            >
                                <div className="p-2 bg-[#352a7c] h-64 flex items-center">
                                    <img src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/jagoanh-gold.png" alt="jagoan-hosting" />
                                </div>
                                <div className="p-2 bg-[#352a7c] h-64 flex items-center">
                                    <img src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/ajaib-silver.jpg" alt="ajaib-silver" />
                                </div>
                                <div className="p-2 bg-[#352a7c] h-64 flex items-center">
                                    <img src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/devcode-color-silver.png" alt="dev-code" />
                                </div>
                            </Carousel>
                        </div>
                        <div className="p-2"></div>
                        <div className="font-retroica text-4xl text-white">Media Partners</div>
                        <div className="h-64 w-64">
                            <Carousel
                                leftControl=" "
                                rightControl=" "
                                indicators={false}
                            >
                                <div className="p-2 bg-[#352a7c] h-64 flex items-center">
                                    <img src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/eventlombaindo-medpart.png" alt="/" />
                                </div>
                                <div className="p-2 bg-[#352a7c] h-64 flex items-center">
                                    <img src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/bncc-medpart.png" alt="/" />
                                </div>
                                <div className="p-2 bg-[#352a7c] h-64 flex items-center">
                                    <img src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/eventdetect-medpart.png" alt="/" />

                                </div>
                                <div className="p-2 bg-[#352a7c] h-64 flex items-center">

                                    <img src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/eventhunterid-medpart.png" alt="/" />
                                </div>
                                <div className="p-2 bg-[#352a7c] h-64 flex items-center">

                                    <img src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/gudanglombaind-medpart.jpg" alt="/" />
                                </div>
                                <div className="p-2 bg-[#352a7c] h-64 flex items-center">

                                    <img src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/infomahasiswa-medpart.png" alt="/" />
                                </div>

                                <div className="p-2 bg-[#352a7c] h-64 flex items-center">

                                    <img src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/infolombaeventid-medpart.png" alt="/" />
                                </div>
                                <div className="p-2 bg-[#352a7c] h-64 flex items-center">

                                    <img src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/beritalomba-medpart.png" alt="/" />
                                </div>
                                <div className="p-2 bg-[#352a7c] h-64 flex items-center">

                                    <img src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/madingeventgelap-medpart.png" alt="/" />
                                </div>
                                <div className="p-2 bg-[#352a7c] h-64 flex items-center">

                                    <img src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/edaranevent-medpart.png" alt="/" />
                                </div>
                                <div className="p-2 bg-[#352a7c] h-64 flex items-center">

                                    <img src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/lombasma2-medpart.png" alt="/" />
                                </div>
                                <div className="p-2 bg-[#352a7c] h-64 flex items-center">

                                    <img src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/webinargratis-medpart.png" alt="/" />
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>

                <div className="bg-[#110545]">
                    <div className="flex flex-col gap-0 justify-center items-center w-screen">
                        <div className="font-retroica text-4xl text-white">Contact Us</div>
                        <div className="font-retroica text-base text-white">Kamu nanya?</div>
                        <div className="h-56 w-64">
                            <Carousel
                                leftControl=" "
                                rightControl=" "
                                indicators={false}
                            >
                                <div className="text-white text-center flex justify-center">
                                    <table className="table-cell border-separate border-[6px] border-[#2b2265] rounded-xl p-2">
                                        <thead>
                                            <tr>
                                                <th className="border-b-[6px] border-[#2b2265]">I2C</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div>0821 7782 1792</div>
                                                    <button className="bg-gradient-to-br from-[#7fa2fe] bg-[#ba87fb] px-2 rounded-2xl flex items-center justify-center gap-1 mx-auto">
                                                        <FaWhatsapp />
                                                        Vila
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div>0821 7782 1792</div>
                                                    <button className="bg-gradient-to-br from-[#7fa2fe] bg-[#ba87fb] px-2 rounded-2xl flex items-center justify-center gap-1 mx-auto">
                                                        <FaWhatsapp />
                                                        Vila
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="text-white text-center flex justify-center">
                                    <table className="table-cell border-separate border-[6px] border-[#9DCE6D] rounded-xl p-2">
                                        <thead>
                                            <tr>
                                                <th className="border-b-[6px] border-[#9DCE6D]">WDC</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div>0821 7782 1792</div>
                                                    <button className="bg-gradient-to-br from-[#9dcd6c] bg-[#6ca0af] px-2 rounded-2xl flex items-center justify-center gap-1 mx-auto">
                                                        <FaWhatsapp />
                                                        Vila
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div>0821 7782 1792</div>
                                                    <button className="bg-gradient-to-br from-[#9dcd6c] bg-[#6ca0af] px-2 rounded-2xl flex items-center justify-center gap-1 mx-auto">
                                                        <FaWhatsapp />
                                                        Vila
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="text-white text-center flex justify-center">
                                    <table className="table-cell border-separate border-[6px] border-[#ff8064] rounded-xl p-2">
                                        <thead>
                                            <tr>
                                                <th className="border-b-[6px] border-[#ff8064]">CP</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div>0821 7782 1792</div>
                                                    <button className="bg-gradient-to-br from-[#fe8064] bg-[#feb783] px-2 rounded-2xl flex items-center justify-center gap-1 mx-auto">
                                                        <FaWhatsapp />
                                                        Vila
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div>0821 7782 1792</div>
                                                    <button className="bg-gradient-to-br from-[#fe8064] bg-[#feb783] px-2 rounded-2xl flex items-center justify-center gap-1 mx-auto">
                                                        <FaWhatsapp />
                                                        Vila
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-t from-black to-[#110545]">
                    <Footer container={false}>
                        <div className="w-full p-4 bg-[#110545]">
                            <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                                <div>
                                    <Footer.Brand
                                        href="https://ifest.uajy.ac.id"
                                        src="https://ifest.uajy.ac.id/assets/images/branding/logo-ifest_generic.png"
                                        alt="IFest Logo"
                                        name="IFest"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                                    <div>
                                        <Footer.Title title="about" />
                                        <Footer.Title className="normal-case" title="IFest adalah acara tahunan HIMAFORKA UAJY yang telah dimulai sejak tahun 2013 yang lalu." />
                                    </div>
                                    <div>
                                        <Footer.Title title="kompetisi" />
                                        <Footer.LinkGroup col={true}>
                                            <Footer.Link href="#">
                                                Innovative Informatics Contest (I2C)
                                            </Footer.Link>
                                            <Footer.Link href="#">
                                                Web Design Competition (WDC)
                                            </Footer.Link>
                                            <Footer.Link href="#">
                                                Competitive Programming (CP)
                                            </Footer.Link>
                                        </Footer.LinkGroup>
                                    </div>
                                    <div>
                                        <Footer.Title title="acara" />
                                        <Footer.LinkGroup col={true}>
                                            <Footer.Link href="#">
                                                Seminar Nasional
                                            </Footer.Link>
                                            <Footer.Link href="#">
                                                Donor Darah
                                            </Footer.Link>
                                        </Footer.LinkGroup>
                                    </div>
                                    <div>
                                        <Footer.Title title="akses" />
                                        <Footer.LinkGroup col={true}>
                                            <Footer.Link href="#">
                                                Daftar
                                            </Footer.Link>
                                            <Footer.Link href="#">
                                                Masuk
                                            </Footer.Link>
                                        </Footer.LinkGroup>
                                    </div>
                                </div>
                            </div>
                            <Footer.Divider />
                            <div className="w-full sm:flex sm:items-center sm:justify-between">
                                <Footer.Copyright
                                    href="#"
                                    by="SI x Muldok IFest#11"
                                    year={new Date().getFullYear()}
                                />
                                <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                                    <Footer.Icon
                                        href="#"
                                        icon={SiInstagram}
                                    />
                                    <Footer.Icon
                                        href="#"
                                        icon={SiLine}
                                    />
                                    <Footer.Icon
                                        href="#"
                                        icon={MdEmail}
                                    />
                                </div>
                            </div>
                        </div>
                    </Footer>
                </div>
            </div>
        </Layout >
    );
}
