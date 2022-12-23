import { FC } from "react";
import Layout from "../components/Layout";

import { Carousel, Tabs, Timeline } from "flowbite-react";
import { motion } from "framer-motion";
import { FaBook, FaMale, FaWallet, FaWhatsapp, MdEmail, SiInstagram, SiLine } from "react-icons/all";

const I2C: FC = () => {
    return (
        <Layout>
            <div className="bg-[#2A2F59] -z-10 absolute top-0 h-screen w-screen">
                <motion.div
                    className="flex flex-col justify-center items-center h-screen"
                >
                    <div className="flex flex-col justify-center items-center h-screen w-screen">
                        <img className="w-72" src="https://ifest.uajy.ac.id/assets/images/event/ill-i2c.png" alt="i2c" />
                        <div className="text-center">
                            <div className="font-retroica text-2xl text-white">I2C</div>
                            <div className="font-retroica text-2xl text-white">Innovative Informatics Contest</div>
                        </div>
                        <div className="flex gap-4 font-retroica text-sm text-white">
                            <div className="bg-gradient-to-r from-[#ff8064] to-[#ffb783] p-1 rounded-full">
                                <div className="bg-[#2A2F59] p-1 rounded-full flex gap-1 items-center">
                                    <FaWallet />
                                    Gratis
                                </div>
                            </div>
                            <div className="bg-gradient-to-r from-[#9dce6d] to-[#6ca0b0] p-1 rounded-full">
                                <div className="bg-[#2A2F59] p-1 rounded-full flex gap-1 items-center">
                                    <FaBook />
                                    SMA/Sederajat
                                </div>
                            </div>
                            <div className="bg-gradient-to-r from-[#7fa3ff] to-[#bb88fc] p-1 rounded-full">
                                <div className="bg-[#2A2F59] p-1 rounded-full flex gap-1 items-center">
                                    <FaMale />
                                    Max. 3 orang
                                </div>
                            </div>
                        </div>
                        <div className="p-4 font-retroica text-white">
                            <p className="text-justify">
                                <strong>Innovative Informatics Contest</strong> (I2C) 2022 adalah sebuah kompetisi ide kreatif untuk merancang aplikasi yang inovatif secara berkelompok beranggotakan 3 orang. I2C 2022 ini mengusung tema "A Journey To Better Home Living".
                            </p>
                        </div>
                        <div>
                            <motion.button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.75 }}
                                transition={{ delay: 4.0, duration: 0.25 }}
                                className="mt-12 transition-transform hover:scale-125">
                                <a href="#content">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="stroke-white w-10 h-10">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </a>
                            </motion.button>
                        </div>
                    </div>
                </motion.div>

                <div id="content" className="bg-[#2A2F59]">
                    <div className="flex flex-col items-center gap-2 pt-4 pl-4 pr-4">
                        <div className="font-retroica text-lg text-white font-bold">
                            MORE ABOUT I2C
                        </div>
                        <div className="font-retroica text-md text-white font-light">
                            Informatics Festival atau IFest adalah acara tahunan Himpunan Mahasiswa Informatika (HIMAFORKA) Universitas Atma Jaya Yogyakarta. Pada tahun 2022 ini, IFest#10 mengambil tema "Technology Rebuild Our Country" dengan berbagai susunan kompetisi dan acara yang tentunya menarik!
                        </div>
                        <div className="flex flex-row gap-4">
                            <div className="bg-[#6c6486] p-1 rounded-full">
                                <div className="bg-[#2A2F59] p-2 rounded-full flex gap-1 items-center">
                                    <div className="opacity-70 text-white">Lihat Poster</div>
                                </div>
                            </div>
                            <div className="bg-gradient-to-r from-[#6ea5b1] to-[#9b68ce] p-1 rounded-full">
                                <div className="bg-[#2A2F59] p-2 rounded-full flex gap-1 items-center">
                                    <div className="opacity-100 text-white">DAFTAR</div>
                                </div>
                            </div>
                            <div className="bg-[#6c6486] p-1 rounded-full">
                                <div className="bg-[#2A2F59] p-2 rounded-full flex gap-1 items-center">
                                    <div className="opacity-70 text-white">Lihat Aturan</div>
                                </div>
                            </div>
                        </div>

                        <div className="py-12">
                            <Tabs.Group
                                style="pills"
                            >
                                <Tabs.Item
                                    title="Ketentuan Umum"
                                    icon={FaWallet}
                                >
                                    <div className="text-white overflow-x-scroll h-96">
                                        <ol className="list-decimal">
                                            <li>
                                                1. Peserta adalah mahasiswa/i aktif perguruan tinggi seluruh Indonesia.
                                            </li>
                                            <li>
                                                2. Melakukan pendaftaran online melalui https://ifest.uajy.ac.id/dash/daftar, pendaftaraan akan dibuka dari 15 Februari 2022 sampai dengan 15 Maret 2022.
                                            </li>
                                            <li>
                                                3. Melampirkan scan atau foto Kartu Tanda Mahasiswa dan Bukti Pembayaran pada formulir pendaftaran online.
                                            </li>
                                            <li>
                                                4. Peserta lomba adalah satu tim (maksimal 2 orang).
                                            </li>
                                            <li>
                                                5. Biaya pendaftaran adalah Rp50.000,00 per tim.
                                            </li>
                                            <li>
                                                6. Tidak diperkenan ada peserta yang terdaftar dalam dua tim atau lebih yang berbeda.
                                            </li>
                                            <li>
                                                7. Setiap perguruan tinggi yang berpartisipasi hanya dapat mengirimkan maksimal 3 tim.
                                            </li>
                                            <li>
                                                8. Peserta yang telah mendaftar harus mengumpulkan hasil karya desain situs web berupa file web dan screenshot desain melalui https://ifest.uajy.ac.id/dash/masuk dengan format penamaan IFest#10_WDC_Nama Kelompok_NamaUniversitas.zip (Screenshot desain format jpg/png/dll)
                                            </li>
                                            <li>
                                                9. Peserta yang sudah mendaftar tetapi tidak mengumpulkan hasil karya desain situs web setelah batas waktu yang ditentukan dianggap mengundurkan diri dari perlombaan.
                                            </li>
                                            <li>
                                                10. Panitia berhak untuk mengeleminasi peserta yang tidak mematuhi ketentuan di atas.
                                            </li>
                                        </ol>
                                    </div>
                                </Tabs.Item>
                                <Tabs.Item
                                    title="Ketentuan Karya"
                                    icon={FaWallet}
                                >
                                    <div className="text-white">
                                        Ketentuan Karya
                                    </div>
                                </Tabs.Item>

                            </Tabs.Group>
                        </div>

                        <div className="flex flex-col gap-8 justify-center items-center p-8">
                            <div className="font-retroica text-[#87bbeb] text-xl">Timeline</div>
                            <Timeline>
                                <Timeline.Item>
                                    <Timeline.Point icon={FaWallet} />
                                    <Timeline.Content>
                                        <Timeline.Time>
                                            1 Januari 2023
                                        </Timeline.Time>
                                        <Timeline.Title className="font-retroica">
                                            <div className="text-white">
                                                Pendaftaran
                                            </div>
                                        </Timeline.Title>
                                    </Timeline.Content>
                                </Timeline.Item>
                                <Timeline.Item>
                                    <Timeline.Point icon={FaWallet} />
                                    <Timeline.Content>
                                        <Timeline.Time>
                                            8 Februari 2023
                                        </Timeline.Time>
                                        <Timeline.Title className="font-retroica">
                                            <div className="text-white">
                                                Batas Pengumpulan
                                            </div>
                                        </Timeline.Title>
                                    </Timeline.Content>
                                </Timeline.Item>
                                <Timeline.Item>
                                    <Timeline.Point icon={FaWallet} />
                                    <Timeline.Content>
                                        <Timeline.Time>
                                            22 Februari 2023
                                        </Timeline.Time>
                                        <Timeline.Title className="font-retroica">
                                            <div className="text-white">
                                                Extend Pengumpulan
                                            </div>
                                        </Timeline.Title>
                                    </Timeline.Content>
                                </Timeline.Item>
                                <Timeline.Item>
                                    <Timeline.Point icon={FaWallet} />
                                    <Timeline.Content>
                                        <Timeline.Title className="font-retroica text-[#87bbeb]">
                                            Tahap Eliminasi
                                        </Timeline.Title>
                                        <Timeline.Body>
                                            <div className="font-retroica text-sm text-white font-light">
                                                Tahap Eliminasi adalah tahap dimana peserta akan dieliminasi berdasarkan kriteria yang telah ditentukan oleh panitia.
                                            </div>
                                            <div className="pl-4 pt-4">
                                                <Timeline>
                                                    <Timeline.Item>
                                                        <Timeline.Point icon={FaWallet} />
                                                        <Timeline.Content>
                                                            <Timeline.Time>
                                                                1 Maret 2023
                                                            </Timeline.Time>
                                                            <Timeline.Title className="font-retroica">
                                                                <div className="text-white">
                                                                    Seleksi Penilaian
                                                                </div>
                                                            </Timeline.Title>
                                                        </Timeline.Content>
                                                    </Timeline.Item>
                                                    <Timeline.Item>
                                                        <Timeline.Point icon={FaWallet} />
                                                        <Timeline.Content>
                                                            <Timeline.Time>
                                                                3 Maret 2023
                                                            </Timeline.Time>
                                                            <Timeline.Title className="font-retroica">
                                                                <div className="text-white">
                                                                    Pengumuman Pemenang
                                                                </div>
                                                            </Timeline.Title>
                                                        </Timeline.Content>
                                                    </Timeline.Item>
                                                </Timeline>
                                            </div>
                                        </Timeline.Body>
                                    </Timeline.Content>
                                </Timeline.Item>

                                <Timeline.Item>
                                    <Timeline.Point icon={FaWallet} />
                                    <Timeline.Content>
                                        <Timeline.Title className="font-retroica text-[#87bbeb]">
                                            Tahap Virtual Expo
                                        </Timeline.Title>
                                        <Timeline.Body>
                                            <div className="font-retroica text-sm text-white font-light">
                                                Tahap Virtual Expo adalah tahap dimana peserta akan dieliminasi berdasarkan kriteria yang telah ditentukan oleh panitia.
                                            </div>
                                            <div className="pl-4 pt-4">
                                                <Timeline>
                                                    <Timeline.Item>
                                                        <Timeline.Point icon={FaWallet} />
                                                        <Timeline.Content>
                                                            <Timeline.Time>
                                                                12 Maret 2023
                                                            </Timeline.Time>
                                                            <Timeline.Title className="font-retroica">
                                                                <div className="text-white">
                                                                    Final dan Awarding
                                                                </div>
                                                            </Timeline.Title>
                                                        </Timeline.Content>
                                                    </Timeline.Item>
                                                </Timeline>
                                            </div>
                                        </Timeline.Body>
                                    </Timeline.Content>
                                </Timeline.Item>
                            </Timeline>
                        </div>

                        <div className="flex flex-col justify-center items-center h-screen w-screen">
                            <div className="font-retroica text-4xl text-[#87bbeb]">Prize Pool</div>
                            <div className="font-retroica text-white text-center">Rp. 6.000.000</div>
                            <div className="h-[32rem] w-80">
                                <Carousel
                                    leftControl=" "
                                    rightControl=" "
                                >
                                    <div className="text-center flex gap-2 flex-col h-full items-center justify-center">
                                        <img className="w-64" src="https://ifest.uajy.ac.id/assets/images/medal-1.png" alt="/" />
                                        <div className="font-retroica text-[#ff69b4] text-center">#1 First Winner</div>
                                        <div className="font-retroica text-[#f5894d]">Rp. 3.500.000</div>
                                        <div className="font-retroica text-[#c5c5c5]">E-Certificate</div>
                                    </div>
                                    <div className="text-center flex gap-2 flex-col h-full items-center justify-center">
                                        <img className="w-64" src="https://ifest.uajy.ac.id/assets/images/medal-2.png" alt="/" />
                                        <div className="font-retroica text-[#ff69b4] text-center">#2 Second Winner</div>
                                        <div className="font-retroica text-[#f5894d]">Rp. 2.500.000</div>
                                        <div className="font-retroica text-[#c5c5c5]">E-Certificate</div>
                                    </div>
                                    <div className="text-center flex gap-2 flex-col h-full items-center justify-center">
                                        <img className="w-64" src="https://ifest.uajy.ac.id/assets/images/medal-3.png" alt="/" />
                                        <div className="font-retroica text-[#ff69b4] text-center">#3 Third Winner</div>
                                        <div className="font-retroica text-[#f5894d]">Rp. 1.000.000</div>
                                        <div className="font-retroica text-[#c5c5c5]">E-Certificate</div>
                                    </div>
                                    <div className="text-center flex gap-2 flex-col h-full items-center justify-center">
                                        <img className="w-64" src="https://ifest.uajy.ac.id/assets/images/medal-favorit.png" alt="/" />
                                        <div className="font-retroica text-[#ff69b4] text-center">#4 Juara Bertahan</div>
                                        <div className="font-retroica text-[#f5894d]">Rp. 1.000.000</div>
                                        <div className="font-retroica text-[#c5c5c5]">E-Certificate</div>
                                    </div>
                                </Carousel>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 justify-center items-center w-screen">
                            <div className="font-retroica text-4xl text-white">Contact Us</div>
                            <div className="font-retroica text-base text-white">Masih ada yang bingung? Yuk kontak kami.</div>
                            <div className="h-64 w-64">
                                <Carousel
                                    leftControl=" "
                                    rightControl=" "
                                    indicators={false}
                                >
                                    <div className="text-white text-center flex justify-center">
                                        <table className="table-cell border-separate border-[6px] border-[#ba87fb] rounded-xl p-2">
                                            <thead>
                                                <tr>
                                                    <th className="border-b-[6px] border-[#ba87fb]">I2C</th>
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
                                </Carousel>
                            </div>
                        </div>

                        <div className="bg-[#2A2F59] p-4">
                            <div className="flex flex-col gap-6 justify-center border-t-2 pt-4">
                                <img className="w-24" src="https://ifest.uajy.ac.id/assets/images/branding/logo-ifest_generic.png" alt="ifest-logo" />
                                <div className="flex flex-col gap-2 text-left">
                                    <div className="font-retroica text-xl text-white">IFest#11</div>
                                    <div className="font-louisgeorgecafe text-white opacity-70">IFest adalah acara tahunan HIMAFORKA UAJY yang telah dimulai sejak tahun 2013 yang lalu.</div>
                                </div>
                                <div className="flex flex-col gap-2 text-left">
                                    <div className="font-retroica text-xl text-white">Kompetisi</div>
                                    <div className="font-louisgeorgecafe text-white opacity-70">Innovative Informatics Contest (I2C)</div>
                                    <div className="font-louisgeorgecafe text-white opacity-70">Web Design Competition (WDC)</div>
                                    <div className="font-louisgeorgecafe text-white opacity-70">Competitive Programming (CP)</div>
                                </div>
                                <div className="flex flex-col gap-2 text-left">
                                    <div className="font-retroica text-xl text-white">Acara</div>
                                    <div className="font-louisgeorgecafe text-white opacity-70">Seminar Nasional</div>
                                    <div className="font-louisgeorgecafe text-white opacity-70">Donor Darah</div>
                                </div>
                                <div className="flex flex-col gap-2 text-left">
                                    <div className="font-retroica text-xl text-white">Akses</div>
                                    <div className="font-louisgeorgecafe text-white opacity-70">Daftar</div>
                                    <div className="font-louisgeorgecafe text-white opacity-70">Masuk</div>
                                </div>
                                <div className="flex flex-col gap-2 text-left">
                                    <div className="font-retroica text-xl text-white">Sosial Media</div>
                                    <div className="font-louisgeorgecafe text-white opacity-70 flex items-center gap-2">
                                        <SiInstagram /> Instagram
                                    </div>
                                    <div className="font-louisgeorgecafe text-white opacity-70 flex items-center gap-2">
                                        <SiLine /> LINE
                                    </div>
                                    <div className="font-louisgeorgecafe text-white opacity-70 flex items-center gap-2">
                                        <MdEmail /> Email
                                    </div>
                                </div>
                                <div className="border-t-2"></div>
                                <div className="flex flex-col gap-2 text-center">
                                    <div className="font-retroica text-sm text-white opacity-80">Design by SI x Muldok IFest#11</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div >
        </Layout >
    );
};

export default I2C;
