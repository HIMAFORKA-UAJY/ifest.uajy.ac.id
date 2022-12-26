import { Carousel, Tabs, Timeline } from "flowbite-react";
import { motion } from "framer-motion";
import { FC, useRef } from "react";
import { FaAward, FaBook, FaBookOpen, FaBrain, FaChartLine, FaGlobeAsia, FaMale, FaMedal, FaPen, FaRocket, FaVolumeUp, FaWallet, FaWhatsapp } from "react-icons/all";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

const WDC: FC = () => {
    const contentRef = useRef<HTMLDivElement>(null);

    return (
        <Layout>
            <div className="bg-gradient-to-b from-[#23313F] via-[#311D38] to-[#2C2E56] -z-10 absolute top-0 h-screen w-screen">
                <motion.div
                    className="flex flex-col justify-center items-center h-screen"
                >
                    <div className="flex flex-col justify-center items-center h-screen w-screen">
                        <img className="w-72" src="https://ifest.uajy.ac.id/assets/images/event/ill-i2c.png" alt="i2c" />
                        <div className="text-center">
                            <div className="font-retroica text-2xl bg-gradient-to-tl text-transparent bg-clip-text from-[#CDF9FF] via-[#F1D2FF] to-[#FFE5C6]">
                                Web Design Competition
                            </div>
                        </div>
                        <div className="flex gap-4 font-retroica text-sm text-white">
                            <div className="bg-gradient-to-r from-[#C1ECD0] to-[#DBE6BA] p-1 rounded-full">
                                <div className="bg-[#311D38] p-1 rounded-full flex gap-1 items-center">
                                    <FaWallet />
                                    Rp. 50.000
                                </div>
                            </div>
                            <div className="bg-gradient-to-r from-[#BED8FF] to-[#BAA2FF] p-1 rounded-full">
                                <div className="bg-[#311D38] p-1 rounded-full flex gap-1 items-center">
                                    <FaBook />
                                    Mahasiswa
                                </div>
                            </div>
                            <div className="bg-gradient-to-r from-[#FFECBC] to-[#FDCCA8] p-1 rounded-full">
                                <div className="bg-[#311D38] p-1 rounded-full flex gap-1 items-center">
                                    <FaMale />
                                    Max. 2 orang
                                </div>
                            </div>
                        </div>
                        <div className="p-4 font-retroica text-white">
                            <p className="text-justify">
                                <strong>Web Design Competition</strong> (WDC) 2022 adalah perlombaan merancang desain visual yang ditampilkan di media digital yaitu situs web. WDC 2022 mengangkat tema "Advancing Together With Credible Information".
                            </p>
                        </div>
                        <div>
                            <motion.button
                                onClick={() => contentRef.current?.scrollIntoView({ behavior: "smooth" })}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.75 }}
                                transition={{ delay: 0.0, duration: 0.25 }}
                                className="mt-12 transition-transform hover:scale-125">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="stroke-white w-10 h-10">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                                </svg>
                            </motion.button>
                        </div>
                    </div>
                </motion.div>

                <div ref={contentRef} className="bg-gradient-to-t from-[#23313F] via-[#311D38] to-[#2C2E56]">
                    <div className="flex flex-col items-center gap-2 pt-4 pl-4 pr-4">
                        <div className="font-retroica text-lg text-white font-bold">
                            MORE ABOUT I2C
                        </div>
                        <div className="font-retroica text-md text-white font-light text-justify">
                            <strong>Web Design Competition</strong> (WDC) 2022 adalah sebuah lomba dimana para mahasiswa/i dalam sebuah tim yang terdiri dari dua orang berlomba untuk membuat desain web sebaik mungkin agar dapat mempermudah setiap pengguna web atau pencari informasi mendapatkan informasi yang jelas dan tepat. Dengan adanya Web Design Competition (WDC) 2022 diharapkan dapat menjadi wadah untuk para mahasiswa/i yang ada di Indonesia dalam menuangkan ide-ide kreatif mereka.
                        </div>
                        <div className="flex flex-row gap-4">
                            <div className="bg-[#6c6486] p-1 rounded-full">
                                <button className="bg-[#2A2F59] p-2 rounded-full flex gap-1 items-center">
                                    <div className="opacity-70 text-white">Lihat Poster</div>
                                </button>
                            </div>
                            <div className="bg-gradient-to-br from-[#6EA5B1] to-[#9B68CE] p-1 rounded-full">
                                <button className="bg-[#2A2F59] p-2 rounded-full flex gap-1 items-center">
                                    <div className="opacity-100 text-white">DAFTAR</div>
                                </button>
                            </div>
                            <div className="bg-[#6c6486] p-1 rounded-full">
                                <button className="bg-[#2A2F59] p-2 rounded-full flex gap-1 items-center">
                                    <div className="opacity-70 text-white">Lihat Aturan</div>
                                </button>
                            </div>
                        </div>

                        <div className="py-12">
                            <Tabs.Group
                                style="pills"
                                className="mx-auto"
                            >
                                <Tabs.Item
                                    title="Ketentuan Umum"
                                    icon={FaWallet}
                                >
                                    <div className="text-white overflow-x-scroll h-96">
                                        <ol className="list-inside list-decimal">
                                            <li>
                                                Peserta adalah mahasiswa/i aktif perguruan tinggi seluruh Indonesia.
                                            </li>
                                            <li>
                                                Melakukan pendaftaran online melalui https://ifest.uajy.ac.id/dash/daftar, pendaftaraan akan dibuka dari 15 Februari 2022 sampai dengan 15 Maret 2022.
                                            </li>
                                            <li>
                                                Melampirkan scan atau foto Kartu Tanda Mahasiswa dan Bukti Pembayaran pada formulir pendaftaran online.
                                            </li>
                                            <li>
                                                Peserta lomba adalah satu tim (maksimal 2 orang).
                                            </li>
                                            <li>
                                                Biaya pendaftaran adalah Rp50.000,00 per tim.
                                            </li>
                                            <li>
                                                Tidak diperkenan ada peserta yang terdaftar dalam dua tim atau lebih yang berbeda.
                                            </li>
                                            <li>
                                                Setiap perguruan tinggi yang berpartisipasi hanya dapat mengirimkan maksimal 3 tim.
                                            </li>
                                            <li>
                                                Peserta yang telah mendaftar harus mengumpulkan hasil karya desain situs web berupa file web dan screenshot desain melalui https://ifest.uajy.ac.id/dash/masuk dengan format penamaan IFest#10_WDC_Nama Kelompok_NamaUniversitas.zip (Screenshot desain format jpg/png/dll)
                                            </li>
                                            <li>
                                                Peserta yang sudah mendaftar tetapi tidak mengumpulkan hasil karya desain situs web setelah batas waktu yang ditentukan dianggap mengundurkan diri dari perlombaan.
                                            </li>
                                            <li>
                                                Panitia berhak untuk mengeleminasi peserta yang tidak mematuhi ketentuan di atas.
                                            </li>
                                        </ol>
                                    </div>
                                </Tabs.Item>
                                <Tabs.Item
                                    title="Ketentuan Karya"
                                    icon={FaWallet}
                                >
                                    <div className="text-white overflow-x-scroll h-96">
                                        <ol className="list-inside list-decimal">
                                            <li>
                                                Bentuk desain merupakan situs web desktop.
                                            </li>
                                            <li>
                                                Teknik pembuatan desain bebas menggunakan software apapun.
                                            </li>
                                            <li>
                                                Peserta wajib menyertakan code desain situs web.
                                            </li>
                                            <li>
                                                Hasil karya sesuai dengan tema.
                                            </li>
                                            <li>
                                                Desain situs web dilarang mengandung unsur SARA, kekerasan, pornografi, dan melanggar UU yang berlaku.
                                            </li>
                                            <li>
                                                Desain situs web yang diperlombakan menjadi hak panitia.
                                            </li>
                                            <li>
                                                Panitia WDC 2022 berhak mendiskualifikasi peserta jika diketahui Hak Atas Kekayaan Intelektualnya diragukan, sedang dalam sengketa, mengambil karya orang lain, atau mendapat klaim dari pihak lain.
                                            </li>
                                            <li>
                                                Keputusan panitia bersifat mutlak dan tidak dapat diganggu gugat.
                                            </li>
                                            <li>
                                                Untuk menjaga independensi, maka dalam penjurian tidak akan ditampilkan identitas peserta.
                                            </li>
                                            <li>
                                                Kriteria penilaian:
                                                <ul className="list-inside list-disc pl-6">
                                                    <li>
                                                        Tampilan Layout/Antarmuka (30%)
                                                        Menampilkan antarmuka situs web dengan struktur yang tepat.
                                                    </li>
                                                    <li>
                                                        Kesesuaian Tema (30%) Situs web yang didesain berkaitan dengan tema yang telah diberikan.
                                                    </li>
                                                    <li>
                                                        Daya Tarik dan Informatif (25%)
                                                        Dapat menciptakan daya tarik dan memberikan pesan yang informatif.
                                                    </li>
                                                    <li>
                                                        Responsif (15%)
                                                        Browser dapat diakses dengan menyesuaikan ukuran pada mobile.
                                                    </li>
                                                </ul>
                                            </li>
                                        </ol>
                                    </div>
                                </Tabs.Item>
                            </Tabs.Group>
                        </div>

                        <div className="flex flex-col gap-8 justify-center items-center p-8">
                            <div className="font-retroica text-[#E99CCE] text-4xl">Timeline</div>
                            <Timeline>
                                <Timeline.Item>
                                    <Timeline.Point icon={FaWallet} />
                                    <Timeline.Content>
                                        <Timeline.Title>
                                            <div className="font-retroica text-[#83C4C4]">
                                                Tahap Eliminasi
                                            </div>
                                        </Timeline.Title>
                                        <Timeline.Body>
                                            <div className="pl-4 pt-4">
                                                <Timeline>
                                                    <Timeline.Item>
                                                        <Timeline.Point icon={FaBook} />
                                                        <Timeline.Content>
                                                            <Timeline.Time>
                                                                15 Februari 2022
                                                            </Timeline.Time>
                                                            <Timeline.Title className="font-retroica">
                                                                <div className="text-white">
                                                                    Pendaftaran Online
                                                                </div>
                                                            </Timeline.Title>
                                                        </Timeline.Content>
                                                    </Timeline.Item>
                                                    <Timeline.Item>
                                                        <Timeline.Point icon={FaChartLine} />
                                                        <Timeline.Content>
                                                            <Timeline.Time>
                                                                22 Maret 2022
                                                            </Timeline.Time>
                                                            <Timeline.Title className="font-retroica">
                                                                <div className="text-white">
                                                                    Batas Pengumpulan Karya
                                                                </div>
                                                            </Timeline.Title>
                                                        </Timeline.Content>
                                                    </Timeline.Item>
                                                    <Timeline.Item>
                                                        <Timeline.Point icon={FaBookOpen} />
                                                        <Timeline.Content>
                                                            <Timeline.Time>
                                                                23 Maret 2022
                                                            </Timeline.Time>
                                                            <Timeline.Title className="font-retroica">
                                                                <div className="text-white">
                                                                    Seleksi dan Penilaian
                                                                </div>
                                                            </Timeline.Title>
                                                        </Timeline.Content>
                                                    </Timeline.Item>
                                                    <Timeline.Item>
                                                        <Timeline.Point icon={FaVolumeUp} />
                                                        <Timeline.Content>
                                                            <Timeline.Time>
                                                                29 Maret 2022
                                                            </Timeline.Time>
                                                            <Timeline.Title className="font-retroica">
                                                                <div className="text-white">
                                                                    Pengumuman 5 Karya Terbaik
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
                                        <Timeline.Title>
                                            <div className="font-retroica text-[#83C4C4]">
                                                Tahap Final
                                            </div>
                                        </Timeline.Title>
                                        <Timeline.Body>
                                            <div className="pl-4 pt-4">
                                                <Timeline>
                                                    <Timeline.Item>
                                                        <Timeline.Point icon={FaBrain} />
                                                        <Timeline.Content>
                                                            <Timeline.Time>
                                                                31 Maret 2022
                                                            </Timeline.Time>
                                                            <Timeline.Title className="font-retroica">
                                                                <div className="text-white">
                                                                    Technical Meeting
                                                                </div>
                                                            </Timeline.Title>
                                                        </Timeline.Content>
                                                    </Timeline.Item>
                                                    <Timeline.Item>
                                                        <Timeline.Point icon={FaMedal} />
                                                        <Timeline.Content>
                                                            <Timeline.Time>
                                                                2 April 2022
                                                            </Timeline.Time>
                                                            <Timeline.Title className="font-retroica">
                                                                <div className="text-white">
                                                                    Final I2C
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
                            <div className="font-retroica text-4xl text-[#E99CCE]">Prize Pool</div>
                            <div className="font-retroica text-white text-center">Rp. 6.000.000</div>
                            <div className="h-[32rem] w-80">
                                <Carousel
                                    leftControl=" "
                                    rightControl=" "
                                >
                                    <div className="text-center flex gap-2 flex-col h-full items-center justify-center">
                                        <img className="w-64" src="https://ifest.uajy.ac.id/assets/images/medal-1.png" alt="/" />
                                        <div className="font-retroica text-[#ff69b4] text-center">#1 First Winner</div>
                                        <div className="font-retroica text-[#f5894d]">Rp. 3.000.000</div>
                                        <div className="font-retroica text-[#c5c5c5]">E-Certificate</div>
                                    </div>
                                    <div className="text-center flex gap-2 flex-col h-full items-center justify-center">
                                        <img className="w-64" src="https://ifest.uajy.ac.id/assets/images/medal-2.png" alt="/" />
                                        <div className="font-retroica text-[#ff69b4] text-center">#2 Second Winner</div>
                                        <div className="font-retroica text-[#f5894d]">Rp. 2.000.000</div>
                                        <div className="font-retroica text-[#c5c5c5]">E-Certificate</div>
                                    </div>
                                    <div className="text-center flex gap-2 flex-col h-full items-center justify-center">
                                        <img className="w-64" src="https://ifest.uajy.ac.id/assets/images/medal-3.png" alt="/" />
                                        <div className="font-retroica text-[#ff69b4] text-center">#3 Third Winner</div>
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
                                        <table className="table-cell border-separate border-[6px] border-[#9DCE6D] rounded-xl p-2">
                                            <thead>
                                                <tr>
                                                    <th className="border-b-[6px] border-[#9DCE6D]">WDC</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div>0812 3470 303</div>
                                                        <button className="bg-gradient-to-br from-[#9dcd6c] bg-[#6ca0af] px-2 rounded-2xl flex items-center justify-center gap-1 mx-auto">
                                                            <FaWhatsapp />
                                                            Andreas
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div>0821 7237 5366</div>
                                                        <button className="bg-gradient-to-br from-[#9dcd6c] bg-[#6ca0af] px-2 rounded-2xl flex items-center justify-center gap-1 mx-auto">
                                                            <FaWhatsapp />
                                                            Wahyu
                                                        </button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </Carousel>
                            </div>
                        </div>

                        <Footer className={"bg-none p-4"} />
                    </div>
                </div>
            </div >
        </Layout >
    );
};

export default WDC;
