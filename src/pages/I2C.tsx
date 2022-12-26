import { Carousel, Tabs, Timeline } from "flowbite-react";
import { motion } from "framer-motion";
import { FC, useRef } from "react";
import { FaAward, FaBook, FaBookOpen, FaBrain, FaChartLine, FaGlobeAsia, FaMale, FaMedal, FaPen, FaRocket, FaVolumeUp, FaWallet, FaWhatsapp } from "react-icons/all";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

const I2C: FC = () => {
    const contentRef = useRef<HTMLDivElement>(null);

    return (
        <Layout>
            <div className="bg-gradient-to-b from-[#2A2F59] to-[#332550] -z-10 absolute top-0 h-screen w-screen">
                <motion.div
                    className="flex flex-col justify-center items-center h-screen"
                >
                    <div className="flex flex-col justify-center items-center h-screen w-screen">
                        <img className="w-72" src="https://ifest.uajy.ac.id/assets/images/event/ill-i2c.png" alt="i2c" />
                        <div className="text-center">
                            <div className="font-retroica text-2xl bg-gradient-to-r text-transparent bg-clip-text from-[#EFB6D5] to-[#81E3E0]">
                                Innovative Informative Contest
                            </div>
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

                <div ref={contentRef} className="bg-gradient-to-t from-[#2A2F59] to-[#332550]">
                    <div className="flex flex-col items-center gap-2 pt-4 pl-4 pr-4">
                        <div className="font-retroica text-lg text-white font-bold">
                            MORE ABOUT I2C
                        </div>
                        <div className="font-retroica text-md text-white font-light text-justify">
                            <strong>Innovative Informatics Contest</strong> (I2C) 2022 adalah sebuah lomba dimana siswa/i SMA/SMK yang tergabung dalam satu tim berlomba untuk merancang suatu inovasi aplikasi (mobile) yang bertujuan membantu membantu mempermudah kegiatan berumah tangga sehingga terwujud keseimbangan kehidupan berkeluarga baik dari sisi keuangan, kebersihan, dan kenyamanan. Acara ini juga dimaksudkan untuk memberi kesempatan bagi siswa/i SMA/SMK di seluruh Indonesia untuk menunjukkan bakat, minat, dan pengetahuan.
                        </div>
                        <div className="flex flex-row gap-4">
                            <div className="bg-[#6c6486] p-1 rounded-full">
                                <button className="bg-[#332550] p-2 rounded-full flex gap-1 items-center">
                                    <div className="opacity-70 text-white">Lihat Poster</div>
                                </button>
                            </div>
                            <div className="bg-gradient-to-r from-[#6ea5b1] to-[#9b68ce] p-1 rounded-full">
                                <button className="bg-[#332550] p-2 rounded-full flex gap-1 items-center">
                                    <div className="opacity-100 text-white">DAFTAR</div>
                                </button>
                            </div>
                            <div className="bg-[#6c6486] p-1 rounded-full">
                                <button className="bg-[#332550] p-2 rounded-full flex gap-1 items-center">
                                    <div className="opacity-70 text-white">Lihat Aturan</div>
                                </button>
                            </div>
                        </div>

                        <div className="py-12 ">
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
                                                Peserta masih berstatus siswa di tingkat SMA/SMK sederajat se-Indonesia.
                                            </li>
                                            <li>
                                                Melakukan pendaftaran online melalui https://ifest.uajy.ac.id/dash/daftar, pendaftaraan akan dibuka dari 15 Februari 2022 sampai dengan 13 Maret 2022.
                                            </li>
                                            <li>
                                                Melampirkan scan atau foto kartu pelajar dan surat persetujuan dari sekolah pada formulir pendaftaran online.
                                            </li>
                                            <li>
                                                Setiap sekolah diperbolehkan mengirimkan 1 tim atau lebih (setiap timnya terdiri dari 3 anggota).
                                            </li>
                                            <li>
                                                Pendaftaran tidak dipungut biaya.
                                            </li>
                                            <li>
                                                Peserta yang telah mendaftar wajib mengumpulkan proposal ide dengan cara login melalui https://ifest.uajy.ac.id/dash/masuk sebelum 13 Maret 2022 dengan format penamaan IFest#10UAJY_I2C_Nama Ide Aplikasi_Nama Kelompok_Nama Sekolah.pdf (Format PDF).
                                            </li>
                                            <li>
                                                Peserta yang sudah mendaftar tetapi tidak mengumpulkan proposal setelah batas waktu yang ditentukan dianggap mengundurkan diri dari perlombaan.
                                            </li>
                                            <li>
                                                Proposal dalam bentuk softcopy juga dikirimkan ke email ifest@uajy.ac.id dengan format penamaan file IFest#10UAJY_I2C_Nama Ide Aplikasi_Nama Kelompok_Nama Sekolah.pdf (Format PDF).
                                            </li>
                                            <li>
                                                Peserta yang lolos tahap seleksi proposal akan melanjutkan ke tahap pameran online untuk memamerkan ide aplikasinya
                                            </li>
                                            <li>
                                                Lima kelompok dengan nilai akumulasi proposal dan pameran tertinggi akan melanjutkan ke tahap final yaitu presentasi di hadapan para juri
                                            </li>
                                            <li>
                                                Panitia berhak untuk mengeliminasi peserta yang tidak mematuhi ketentuan di atas.
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
                                                Karya/proposal harus sesuai dengan tema yang telah ditentukan.
                                            </li>
                                            <li>
                                                Karya/proposal yang dilombakan dalam kompetisi ini belum pernah mendapat penghargaan di kompetisi lain atau belum pernah digunakan di kompetisi lain.
                                            </li>
                                            <li>
                                                Karya/proposal merupakan ide original peserta.
                                            </li>
                                            <li>
                                                Karya/proposal tidak mengandung unsur SARA dan pornografi.
                                            </li>
                                            <li>
                                                Lima belas proposal terbaik akan dipilih untuk masuk tahap berikutnya yaitu pameran. Dalam babak ini peserta akan memamerkan ide aplikasi mereka melalui media sosial, dan untuk tahap berikutnya merupakan nilai akumulasi dari proposal dan pameran.
                                            </li>
                                            <li>
                                                Tidak melanggar Hak Cipta, Hak Paten, dan Hak Merk. Hal tersebut menjadi tanggung jawab peserta. Panita tidak bertanggung jawab dalam masalah Hak Cipta, Hak Paten ataupun Hak Merk.
                                            </li>
                                            <li>
                                                Ketentuan lebih lengkap mengenai isi proposal dapat dilihat pada rulebook.
                                            </li>
                                        </ol>
                                    </div>
                                </Tabs.Item>

                            </Tabs.Group>
                        </div>

                        <div className="flex flex-col gap-8 justify-center items-center p-8">
                            <div className="font-retroica text-[#87bbeb] text-4xl">Timeline</div>
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
                                                                19 Maret 2022
                                                            </Timeline.Time>
                                                            <Timeline.Title className="font-retroica">
                                                                <div className="text-white">
                                                                    Batas Pengumpulan Proposal
                                                                </div>
                                                            </Timeline.Title>
                                                        </Timeline.Content>
                                                    </Timeline.Item>
                                                    <Timeline.Item>
                                                        <Timeline.Point icon={FaBookOpen} />
                                                        <Timeline.Content>
                                                            <Timeline.Time>
                                                                20 Maret 2022
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
                                                                24 Maret 2022
                                                            </Timeline.Time>
                                                            <Timeline.Title className="font-retroica">
                                                                <div className="text-white">
                                                                    Pengumuman Hasil Seleksi
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
                                                Tahap Virtual Expo
                                            </div>
                                        </Timeline.Title>
                                        <Timeline.Body>
                                            <div className="pl-4 pt-4">
                                                <Timeline>
                                                    <Timeline.Item>
                                                        <Timeline.Point icon={FaRocket} />
                                                        <Timeline.Content>
                                                            <Timeline.Time>
                                                                25 Maret 2022
                                                            </Timeline.Time>
                                                            <Timeline.Title className="font-retroica">
                                                                <div className="text-white">
                                                                    Persiapan Expo dan Presentasi
                                                                </div>
                                                            </Timeline.Title>
                                                        </Timeline.Content>
                                                    </Timeline.Item>
                                                    <Timeline.Item>
                                                        <Timeline.Point icon={FaGlobeAsia} />
                                                        <Timeline.Content>
                                                            <Timeline.Time>
                                                                1 April 2022
                                                            </Timeline.Time>
                                                            <Timeline.Title className="font-retroica">
                                                                <div className="text-white">
                                                                    Virtual Expo
                                                                </div>
                                                            </Timeline.Title>
                                                        </Timeline.Content>
                                                    </Timeline.Item>
                                                    <Timeline.Item>
                                                        <Timeline.Point icon={FaPen} />
                                                        <Timeline.Content>
                                                            <Timeline.Time>
                                                                3 April 2022
                                                            </Timeline.Time>
                                                            <Timeline.Title className="font-retroica">
                                                                <div className="text-white">
                                                                    Penilaian Expo
                                                                </div>
                                                            </Timeline.Title>
                                                        </Timeline.Content>
                                                    </Timeline.Item>
                                                    <Timeline.Item>
                                                        <Timeline.Point icon={FaAward} />
                                                        <Timeline.Content>
                                                            <Timeline.Time>
                                                                4 April 2022
                                                            </Timeline.Time>
                                                            <Timeline.Title className="font-retroica">
                                                                <div className="text-white">
                                                                    Pengumuman Finalis
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
                                                                7 April 2022
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
                                                                9 April 2022
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
                            <div className="font-retroica text-4xl text-[#87bbeb]">Prize Pool</div>
                            <div className="font-retroica text-white text-center">Rp. 10.500.000</div>
                            <div className="h-[32rem] w-80">
                                <Carousel
                                    leftControl=" "
                                    rightControl=" "
                                >
                                    <div className="text-center flex gap-2 flex-col h-full items-center justify-center">
                                        <img className="w-64" src="https://ifest.uajy.ac.id/assets/images/medal-1.png" alt="/" />
                                        <div className="font-retroica text-[#ff69b4] text-center">#1 First Winner</div>
                                        <div className="font-retroica text-[#f5894d]">Rp. 5.000.000</div>
                                        <div className="font-retroica text-[#c5c5c5]">E-Certificate</div>
                                    </div>
                                    <div className="text-center flex gap-2 flex-col h-full items-center justify-center">
                                        <img className="w-64" src="https://ifest.uajy.ac.id/assets/images/medal-2.png" alt="/" />
                                        <div className="font-retroica text-[#ff69b4] text-center">#2 Second Winner</div>
                                        <div className="font-retroica text-[#f5894d]">Rp. 3.000.000</div>
                                        <div className="font-retroica text-[#c5c5c5]">E-Certificate</div>
                                    </div>
                                    <div className="text-center flex gap-2 flex-col h-full items-center justify-center">
                                        <img className="w-64" src="https://ifest.uajy.ac.id/assets/images/medal-3.png" alt="/" />
                                        <div className="font-retroica text-[#ff69b4] text-center">#3 Third Winner</div>
                                        <div className="font-retroica text-[#f5894d]">Rp. 2.000.000</div>
                                        <div className="font-retroica text-[#c5c5c5]">E-Certificate</div>
                                    </div>
                                    <div className="text-center flex gap-2 flex-col h-full items-center justify-center">
                                        <img className="w-64" src="https://ifest.uajy.ac.id/assets/images/medal-favorit.png" alt="/" />
                                        <div className="font-retroica text-[#ff69b4] text-center">#4 Juara Favorit</div>
                                        <div className="font-retroica text-[#f5894d]">Rp. 500.000</div>
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
                                                        <div>0822 2555 3400</div>
                                                        <button className="bg-gradient-to-br from-[#7fa2fe] bg-[#ba87fb] px-2 rounded-2xl flex items-center justify-center gap-1 mx-auto">
                                                            <FaWhatsapp />
                                                            Lala
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div>0852 1024 5177</div>
                                                        <button className="bg-gradient-to-br from-[#7fa2fe] bg-[#ba87fb] px-2 rounded-2xl flex items-center justify-center gap-1 mx-auto">
                                                            <FaWhatsapp />
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

                        <Footer className={"bg-none p-4"} />
                    </div>
                </div>
            </div >
        </Layout >
    );
};

export default I2C;
