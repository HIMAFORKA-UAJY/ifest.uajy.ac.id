import { Card, Carousel } from "flowbite-react";
import { motion } from "framer-motion";
import { FC, useRef, useState } from "react";
import React from "react";
import { Chrono } from "react-chrono";
import { FaBook, FaCertificate, FaMale, FaMoneyBillWave, FaWallet, FaWhatsapp, FaRegWindowClose } from "react-icons/all";
import { Link } from "react-router-dom";
import { Modal, Box, IconButton, Typography } from '@mui/material';
import 'react-vertical-timeline-component/style.min.css';
import Footer from "../components/Footer";
import Layout from "../components/Layout";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    pt: 2
    
};

const I2C: FC = () => {
    const contentRef = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState(false);
    const onClick = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const dataSeleksi = [
        {
            title: "16 Januari - 17 Februari 2023",
            cardTitle: "Pendaftaran Online",
            cardDetailedText: "Website I2C"
        },
        {
            title: "17 Februari 2023",
            cardTitle: "Batas Pengumpulan Proposal",
            cardDetailedText: "Website I2C"
        },
        {
            title: "24 Februari - 28 Februari 2023",
            cardTitle: "Penilaian Proposal",
            cardDetailedText: "Online"
        },
        {
            title: "1 Maret 2023",
            cardTitle: "Pengumuman Seleksi",
            cardDetailedText: "Instagram IFest #11"
        }
    ];
    const dataExpo = [
        {
            title: "1 Maret 2023",
            cardTitle: "Technical Meeting",
            cardDetailedText: "Zoom"
        },
        {
            title: "6 Maret - 9 Maret 2023",
            cardTitle: "Pameran Virtual",
            cardDetailedText: "Instagram IFest #11"
        },
        {
            title: "10 Maret 2023",
            cardTitle: "Pameran On-site",
            cardDetailedText: "Auditorium Lt. 4 Kampus 3 Gedung Bonaventura Universitas Atma Jaya Yogyakarta"
        },
    ];
    const dataFinal = [
        {
            title: "11 Maret 2023",
            cardTitle: "Final",
            cardSubtitle: "Pengumuman Seleksi, Presentasi Pitch Deck, dan Pengumuman Pemenang",
            cardDetailedText: "Auditorium Lt. 4 Kampus 3 Gedung Bonaventura Universitas Atma Jaya Yogyakarta"
        }
    ];

    return (
        <Layout>
            <div className="bg-gradient-to-b from-[#2A2F59] to-[#332550] -z-10 absolute top-0 h-screen w-screen">
                <motion.div
                    className="flex flex-col justify-center items-center h-screen"
                >
                    <div className="hidden lg:flex flex-col justify-center items-center h-fit w-screen">
                        <div className="flex flex-col justify-center items-center">
                            <div className="flex gap-8 justify-center items-center">
                                <img className="w-[600px]" src="https://ifest.uajy.ac.id/assets/images/event/ill-i2c.png" alt="i2c" />
                                <div className="flex flex-col">
                                    <div className="font-retroica text-6xl pl-[1rem] pb-[0.5rem] text-transparent bg-clip-text bg-gradient-to-r from-[#EFB6D5] to-[#81E3E0]">Innovative</div>
                                    <div className="font-retroica text-6xl pl-[1rem] pb-[0.5rem] text-transparent bg-clip-text bg-gradient-to-r from-[#81E3E0] to-[#EFB6D5]">Informatics</div>
                                    <div className="font-retroica text-6xl pl-[1rem] pb-[0.5rem] text-transparent bg-clip-text bg-gradient-to-r from-[#EFB6D5] to-[#81E3E0]">Contest</div>
                                    <div className="flex gap-4 mt-8 font-retroica text-sm text-white pl-[1rem]">
                                        <div className="bg-gradient-to-r from-[#ff8064] to-[#ffb783] p-1 rounded-full">
                                            <div className="bg-[#2b2265] p-1 rounded-full flex gap-1 items-center px-[0.5rem]">
                                                <FaWallet />
                                                Gratis
                                            </div>
                                        </div>
                                        <div className="bg-gradient-to-r from-[#9dce6d] to-[#6ca0b0] p-1 rounded-full">
                                            <div className="bg-[#2b2265] p-1 rounded-full flex gap-1 items-center px-[0.5rem]">
                                                <FaBook />
                                                SMA/Sederajat
                                            </div>
                                        </div>
                                        <div className="bg-gradient-to-r from-[#7fa3ff] to-[#bb88fc] p-1 rounded-full">
                                            <div className="bg-[#2b2265] p-1 rounded-full flex gap-1 items-center px-[0.5rem]">
                                                <FaMale />
                                                Max. 3 orang
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
                                    className="transition-transform hover:scale-125">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="stroke-white w-10 h-10">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </motion.button>
                            </div>
                        </div>
                    </div>

                    <div className="lg:hidden flex flex-col justify-center items-center h-screen w-screen px-4">
                        <img className="w-72" src="https://ifest.uajy.ac.id/assets/images/event/ill-i2c.png" alt="i2c" />
                        <div className="text-center">
                            <div className="font-retroica text-4xl text-white tracking-wide">I2C</div>
                            <div className="font-retroica text-2xl text-white pb-[1rem] px-4">Innovative Informatics Contest</div>
                        </div>
                        <div className="flex gap-4 font-retroica text-sm sm:text-xs text-white">
                            <div className="bg-gradient-to-r from-[#ff8064] to-[#ffb783] p-1 rounded-full h-fit">
                                <div className="bg-[#332550] p-1 rounded-full flex gap-1 items-center px-[0.35rem] flex-wrap justify-center">
                                    <FaWallet />
                                    Gratis
                                </div>
                            </div>
                            <div className="bg-gradient-to-r from-[#9dce6d] to-[#6ca0b0] p-1 rounded-full h-fit">
                                <div className="bg-[#332550] p-1 rounded-full flex gap-1 items-center px-[0.35rem] flex-wrap justify-center">
                                    <FaBook />
                                    SMA/Sederajat
                                </div>
                            </div>
                            <div className="bg-gradient-to-r from-[#7fa3ff] to-[#bb88fc] p-1 rounded-full h-fit">
                                <div className="bg-[#332550] p-1 rounded-full flex gap-1 text-center items-center px-[0.35rem] flex-wrap justify-center">
                                    <FaMale />

                                    Max. 3 orang
                                </div>
                            </div>
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
                        <div className="font-retroica text-3xl text-white font-thin tracking-wider">
                            MORE ABOUT I2C
                        </div>
                        <div className="font-louisgeorgecafe text-md text-white font-thin lg:text-center my-4 w-screen px-8 text-justify lg:px-[10rem]">
                            <strong>Innovative Informatics Contest</strong> (I2C) 2022 adalah sebuah lomba dimana siswa/i SMA/SMK yang tergabung dalam satu tim berlomba untuk merancang suatu inovasi aplikasi (<i>mobile</i>) yang bertujuan membantu membantu mempermudah kegiatan berumah tangga sehingga terwujud keseimbangan kehidupan berkeluarga baik dari sisi keuangan, kebersihan, dan kenyamanan. Acara ini juga dimaksudkan untuk memberi kesempatan bagi siswa/i SMA/SMK di seluruh Indonesia untuk menunjukkan bakat, minat, dan pengetahuan.
                        </div>
                        <div className="flex flex-row gap-4 font-louisgeorgecafe">
                            <div className="bg-[#6c6486] p-1 rounded-full">
                                <button onClick={onClick} className="bg-[#332550] hover:bg-transparent transition p-2 rounded-full flex gap-1 items-center">
                                    <div className="opacity-70 text-white">Lihat Poster</div>
                                </button>
                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                    
                                >
                                    <Box sx={style} className="overflow-auto h-screen">
                                        <Typography className="text-right" id="modal-modal-title" variant="h6" component="h2" >
                                            <button onClick={handleClose}> <FaRegWindowClose/> </button>
                                        </Typography>
                                        <img src="https://ifest.uajy.ac.id/assets/images/event/poster-i2c-ext.png" alt="" />
                                    </Box>
                                </Modal>
                            </div>
                            <div className="bg-gradient-to-r from-[#6ea5b1] to-[#9b68ce] p-1 rounded-full">
                                <button className="bg-[#332550] hover:bg-transparent transition p-2 rounded-full flex gap-1 items-center">
                                    <Link to="/dashboard"><div className="opacity-100 text-white">DAFTAR</div></Link>
                                </button>
                            </div>
                            <div className="bg-[#6c6486] p-1 rounded-full">
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
                                <button onClick={onClick} className="bg-[#332550] hover:bg-transparent transition p-2 rounded-full flex gap-1 items-center">
                                    <div className="opacity-70 text-white">Lihat Aturan</div>
                                </button>
                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                    
                                >
                                    <Box sx={style} className="overflow-auto h-screen">
                                        <Typography className="text-right" id="modal-modal-title" variant="h6" component="h2" >
                                            <button onClick={handleClose}> <FaRegWindowClose/> </button>
                                        </Typography>
                                        <img src="https://ifest.uajy.ac.id/assets/images/event/poster-i2c-ext.png" alt="" />
                                    </Box>
                                </Modal>
                                
                            </div>
                        </div>

                        {/* Ketentuan */}
                        <div className="py-12 flex flex-col lg:flex-row justify-center gap-8">
                            <div className="w-screen lg:w-[40%] px-4">
                                <Card className="!bg-[#241f3d] !border-gray-700">
                                    <h3 className="font-retroica text-[#87BBEB] text-2xl pl-6">Ketentuan Umum</h3>
                                    <div className="text-white leading-loose font-louisgeorgecafe p-6">
                                        <ol className="list-outside list-decimal">
                                            <li>
                                                Peserta masih berstatus siswa di tingkat SMA/SMK sederajat se-Indonesia.
                                            </li>
                                            <li>
                                                Melakukan pendaftaran online melalui <a href="https://ifest.uajy.ac.id/dash/daftar" className="text-[#EFB6D5] underline hover:font-bold">https://ifest.uajy.ac.id/dash/daftar</a>, pendaftaraan akan dibuka dari 15 Februari 2022 sampai dengan 13 Maret 2022.
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
                                                Peserta yang telah mendaftar wajib mengumpulkan proposal ide dengan cara login melalui <a href="https://ifest.uajy.ac.id/dash/masuk" className="text-[#EFB6D5] underline hover:font-bold">https://ifest.uajy.ac.id/dash/masuk</a> sebelum 13 Maret 2022 dengan format penamaan <span className="font-retron2000 text-[#87BBEB]">IFest#10UAJY_I2C_Nama Ide Aplikasi_Nama Kelompok_Nama Sekolah.pdf</span> (Format PDF).
                                            </li>
                                            <li>
                                                Peserta yang sudah mendaftar tetapi tidak mengumpulkan proposal setelah batas waktu yang ditentukan dianggap mengundurkan diri dari perlombaan.
                                            </li>
                                            <li>
                                                Proposal dalam bentuk softcopy juga dikirimkan ke email <a href="mailto:ifest@uajy.ac.id" className="text-[#EFB6D5] underline hover:font-bold">ifest@uajy.ac.id</a> dengan format penamaan file <span className="font-retron2000 text-[#87BBEB]">IFest#10UAJY_I2C_Nama Ide Aplikasi_Nama Kelompok_Nama Sekolah.pdf</span> (Format PDF).
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
                                </Card>
                            </div>

                            <div className="w-screen lg:w-[40%] px-4">
                                <Card className="!bg-[#241f3d] !border-gray-700">
                                    <h3 className="font-retroica text-[#87BBEB] text-2xl pl-6">Ketentuan Proposal</h3>
                                    <div className="text-white leading-loose font-louisgeorgecafe p-6">
                                        <ol className="list-outside list-decimal">
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
                                </Card>

                            </div>
                        </div>

                        {/* Timeline */}
                        <div className="flex flex-col justify-center lg:items-center w-full lg:w-[70%]">
                            <div className="font-retroica text-[#87bbeb] text-4xl mb-8 mx-auto text-center">Timeline</div>
                            <div className="rounded-xl bg-[#241f3d] pb-1 w-fit">
                                <div className="rounded-xl font-retroica bg-[#716B90] p-4 text-white shadow-inner">Proposal Selection</div>
                            </div>

                            <span className="hidden lg:flex lg:w-full">
                                <Chrono
                                    items={dataSeleksi}
                                    mode="VERTICAL_ALTERNATING"
                                    cardHeight={50}
                                    hideControls
                                    disableClickOnCircle
                                    theme={{
                                        primary: '#716B90',
                                        secondary: 'transparent',
                                        cardBgColor: "#241f3d",
                                        cardForeColor: "white",
                                        titleColor: 'white',
                                        titleColorActive: 'white'

                                    }}

                                />
                            </span>
                            <span className="lg:hidden flex">
                                <Chrono
                                    items={dataSeleksi}
                                    mode="VERTICAL"
                                    cardHeight={50}
                                    hideControls
                                    disableClickOnCircle
                                    fontSizes={{
                                        title: "0.8rem"
                                    }}
                                    theme={{
                                        primary: '#716B90',
                                        secondary: 'transparent',
                                        cardBgColor: "#241f3d",
                                        cardForeColor: "white",
                                        titleColor: 'white',
                                        titleColorActive: 'white'

                                    }}
                                />
                            </span>

                            <div className="rounded-xl bg-[#241f3d] pb-1 w-fit">
                                <div className="rounded-xl font-retroica bg-[#716B90] p-4 text-white shadow-inner">Inventor Expo</div>
                            </div>


                            <span className="hidden lg:flex lg:w-full">
                                <Chrono
                                    items={dataExpo}
                                    mode="VERTICAL_ALTERNATING"
                                    cardHeight={50}
                                    hideControls
                                    disableClickOnCircle

                                    theme={{
                                        primary: '#716B90',
                                        secondary: 'transparent',
                                        cardBgColor: "#241f3d",
                                        cardForeColor: "white",
                                        titleColor: 'white',
                                        titleColorActive: 'white'
                                    }}
                                />
                            </span>
                            <span className="lg:hidden flex">
                                <Chrono
                                    items={dataExpo}
                                    mode="VERTICAL"
                                    cardHeight={50}
                                    hideControls
                                    disableClickOnCircle
                                    fontSizes={{
                                        title: "0.8rem"
                                    }}
                                    theme={{
                                        primary: '#716B90',
                                        secondary: 'transparent',
                                        cardBgColor: "#241f3d",
                                        cardForeColor: "white",
                                        titleColor: 'white',
                                        titleColorActive: 'white'
                                    }}
                                />
                            </span>

                            <div className="rounded-xl bg-[#241f3d] pb-1 w-fit">
                                <div className="rounded-xl font-retroica bg-[#716B90] p-4 text-white shadow-inner">Final Pitch Deck</div>
                            </div>

                            <span className="hidden lg:flex lg:w-full">
                                <Chrono
                                    items={dataFinal}
                                    mode="VERTICAL_ALTERNATING"
                                    cardHeight={50}
                                    hideControls
                                    disableClickOnCircle

                                    theme={{
                                        primary: '#716B90',
                                        secondary: 'transparent',
                                        cardBgColor: "#241f3d",
                                        cardForeColor: "white",
                                        titleColor: 'white',
                                        titleColorActive: 'white'
                                    }}
                                />
                            </span>
                            <span className="lg:hidden flex">
                                <Chrono
                                    items={dataFinal}
                                    mode="VERTICAL"
                                    cardHeight={50}
                                    hideControls
                                    disableClickOnCircle
                                    fontSizes={{
                                        title: "0.8rem"
                                    }}
                                    theme={{
                                        primary: '#716B90',
                                        secondary: 'transparent',
                                        cardBgColor: "#241f3d",
                                        cardForeColor: "white",
                                        titleColor: 'white',
                                        titleColorActive: 'white'
                                    }}
                                />
                            </span>
                        </div>

                        {/* Prize Pool */}
                        <div className="pt-8 flex flex-col gap-4 justify-center items-center w-screen">
                            <div className="font-retroica text-4xl text-[#87bbeb]">Prize Pool</div>
                            <div className="font-retroica text-[#ffba57] text-center"> <span className="font-louisgeorgecafe text-white">Total hadiah</span> Rp10.500.000</div>
                            <div>
                                <div className="my-10 hidden lg:flex">
                                    <Card horizontal className="!bg-[#241f3d] !border-gray-700 text-white hover:scale-110 hover:!bg-[#ffba57] hover:text-[#241f3d] transition ease-in duration-300 w-[30%] m-auto pt-0">
                                        <div>
                                            <img className="w-52 block m-auto drop-shadow-lg" src="https://ifest.uajy.ac.id/assets/images/medal-1.png" alt="/" />
                                        </div>
                                        <div className="font-retroica text-center text-2xl">Juara I</div>
                                        <div className="font-retroica flex gap-3"><FaMoneyBillWave /> Rp4.000.000</div>
                                        <div className="font-retroica flex gap-3"><FaCertificate /> Sertifikat Nasional</div>
                                    </Card>
                                </div>

                                <div className="hidden lg:flex flex-row gap-8">
                                    <Card className="!bg-[#241f3d] !border-gray-700 text-white hover:scale-110 hover:!bg-[#9e9e9e] hover:text-[#241f3d] transition ease-in duration-300 w-[30%]">
                                        <div className="">
                                            <img className="w-52 block m-auto" src="https://ifest.uajy.ac.id/assets/images/medal-2.png" alt="/" />
                                        </div>
                                        <div className="font-retroica text-center text-2xl">Juara II</div>
                                        <div className="font-retroica flex gap-3"><FaMoneyBillWave /> Rp3.000.000</div>
                                        <div className="font-retroica flex gap-3"><FaCertificate /> Sertifikat Nasional</div>
                                    </Card>
                                    <Card className="!bg-[#241f3d] !border-gray-700 text-white hover:scale-110 hover:!bg-[#ce7430] hover:text-[#241f3d] transition ease-in duration-300 w-[30%]">
                                        <div className="">
                                            <img className="w-52 block m-auto" src="https://ifest.uajy.ac.id/assets/images/medal-3.png" alt="/" />
                                        </div>
                                        <div className="font-retroica text-center text-2xl">Juara III</div>
                                        <div className="font-retroica flex gap-3"><FaMoneyBillWave /> Rp2.000.000</div>
                                        <div className="font-retroica flex gap-3"><FaCertificate /> Sertifikat Nasional</div>
                                    </Card>
                                    <Card className="!bg-[#241f3d] !border-gray-700 text-white hover:scale-110 hover:!bg-[#00B8B0] hover:text-[#241f3d] transition ease-in duration-300 w-[30%]">
                                        <div className="">
                                            <img className="w-52 block m-auto" src="https://ifest.uajy.ac.id/assets/images/medal-favorit.png" alt="/" />
                                        </div>
                                        <div className="font-retroica text-center text-2xl">Juara Favorit</div>
                                        <div className="font-retroica flex gap-3"><FaMoneyBillWave /> Rp500.000</div>
                                        <div className="font-retroica flex gap-3"><FaCertificate /> Sertifikat Nasional</div>
                                    </Card>
                                </div>
                                <div className="flex lg:hidden flex-col gap-8">
                                    <Card horizontal className="bg-[#241f3d] !border-gray-700 text-white hover:scale-110 hover:bg-[#ffba57] hover:text-[#241f3d] transition ease-in duration-300">
                                        <div className="flex gap-4">
                                            <div>
                                                <img className="w-20 block m-auto drop-shadow-lg" src="https://ifest.uajy.ac.id/assets/images/medal-1.png" alt="/" />
                                            </div>
                                            <div>
                                                <div className="font-retroica text-2xl">Juara I</div>
                                                <div className="font-retroica flex gap-3"><FaMoneyBillWave /> Rp4.000.000</div>
                                                <div className="font-retroica flex gap-3"><FaCertificate /> Sertifikat Nasional</div>
                                            </div>
                                        </div>
                                    </Card>
                                    <Card horizontal className="bg-[#241f3d] !border-gray-700 text-white hover:scale-110 hover:bg-[#9e9e9e] hover:text-[#241f3d] transition ease-in duration-300">
                                        <div className="flex gap-4">
                                            <div>
                                                <div className="font-retroica text-right text-2xl">Juara II</div>
                                                <div className="font-retroica flex gap-3"><FaMoneyBillWave /> Rp3.000.000</div>
                                                <div className="font-retroica flex gap-3"><FaCertificate /> Sertifikat Nasional</div>
                                            </div>
                                            <div>
                                                <img className="w-20 block m-auto" src="https://ifest.uajy.ac.id/assets/images/medal-2.png" alt="/" />
                                            </div>
                                        </div>
                                    </Card>
                                    <Card horizontal className="bg-[#241f3d] !border-gray-700 text-white hover:scale-110 hover:bg-[#ce7430] hover:text-[#241f3d] transition ease-in duration-300">
                                        <div className="flex gap-4">
                                            <div>
                                                <img className="w-20 block m-auto" src="https://ifest.uajy.ac.id/assets/images/medal-3.png" alt="/" />
                                            </div>
                                            <div>
                                                <div className="font-retroica text-left text-2xl">Juara III</div>
                                                <div className="font-retroica flex gap-3"><FaMoneyBillWave /> Rp2.000.000</div>
                                                <div className="font-retroica flex gap-3"><FaCertificate /> Sertifikat Nasional</div>
                                            </div>
                                        </div>
                                    </Card>
                                    <Card horizontal className="bg-[#241f3d] !border-gray-700 text-white hover:scale-110 hover:bg-[#00B8B0] hover:text-[#241f3d] transition ease-in duration-300">
                                        <div className="flex gap-4">
                                            <div>
                                                <div className="font-retroica text-right text-2xl">Juara Favorit</div>
                                                <div className="font-retroica flex gap-3"><FaMoneyBillWave /> Rp500.000</div>
                                                <div className="font-retroica flex gap-3"><FaCertificate /> Sertifikat Nasional</div>
                                            </div>
                                            <div>
                                                <img className="w-20 block m-auto" src="https://ifest.uajy.ac.id/assets/images/medal-favorit.png" alt="/" />
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            </div>
                        </div>

                        {/* Call To Action */}
                        <div className="flex flex-col justify-center items-center w-screen my-12">
                            <div className="bg-gradient-to-br from-[#463E74] to-[#332550] border-gray-200 max-w-[100%] w-[21rem] lg:w-[60%] rounded-xl p-8">
                                <div className="flex flex-col lg:flex-row text-center justify-center items-center lg:justify-start">
                                    <img className="lg:w-[30%] w-32" src="https://ifest.uajy.ac.id/assets/images/ill4-icon.png" alt="" />
                                    <div className="flex flex-col gap-4  items-center lg:items-start">
                                        <div className="font-retroica text-2xl lg:text-3xl text-[#87bbeb]">Tertarik? Ayo mendaftar!</div>
                                        <div className="font-louisgeorgecafe text-white text-center lg:text-left">Ayo buktikan bakat dan kreativitasmu! Jangan cepat berpuas diri!</div>
                                        <div className="bg-gradient-to-r from-[#6ea5b1] to-[#9b68ce] p-1 rounded-full w-fit">
                                            <button className="bg-[#332550] hover:bg-transparent transition p-2 rounded-full flex gap-1 items-center">
                                                <Link to="/dashboard"><div className="opacity-100 text-white font-retroica">DAFTAR</div></Link>
                                            </button>
                                        </div>
                                    </div>
                                </div>
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
