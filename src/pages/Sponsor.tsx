import { FC } from "react";
import Layout from "../components/Layout";

import { Carousel, Footer } from "flowbite-react";
import { MdEmail, SiInstagram, SiLine } from "react-icons/all";

const Sponsor: FC = () => {
    return (
        <Layout>
            <div className="-z-10 absolute top-0 h-screen w-screen">
                <div className="flex flex-col items-center justify-center h-screen">
                    <div className="h-screen w-screen">
                        <Carousel
                            leftControl=" "
                            rightControl=" "
                        >
                            <div className="text-center flex gap-2 flex-col h-full items-center justify-center bg-[#0a1828]">
                                <img className="w-64" src="https://ifest.uajy.ac.id/assets/images/event/ill-cp.png" alt="/" />
                                <div className="font-retroica text-[#ff69b4]">Joshua Puniwan Yahya - Ketua</div>
                                <div className="font-retroica text-[#f5894d]">Welcome to IFest#11</div>
                                <div className="font-retroica text-[#c5c5c5]">28 Desember 2022, 12.00 WIB</div>
                            </div>
                            <div className="text-center flex gap-2 flex-col h-full items-center justify-center bg-[#0a1828]">
                                <img className="w-64" src="https://ifest.uajy.ac.id/assets/images/event/ill-wdc.png" alt="/" />
                                <div className="font-retroica text-[#ff69b4]">Joshua Puniwan Yahya - Ketua</div>
                                <div className="font-retroica text-[#f5894d]">Pengumuman Finalis WDC</div>
                                <div className="font-retroica text-[#c5c5c5]">29 Desember 2022, 12.00 WIB</div>
                            </div>
                            <div className="text-center flex gap-2 flex-col h-full items-center justify-center bg-[#0a1828]">
                                <img className="w-64" src="https://ifest.uajy.ac.id/assets/images/event/ill-wdc.png" alt="/" />
                                <div className="font-retroica text-[#ff69b4]">Joshua Puniwan Yahya - Ketua</div>
                                <div className="font-retroica text-[#f5894d]">Pengumuman Lolos Ke Tahap Virtual Expo I2C</div>
                                <div className="font-retroica text-[#c5c5c5]">30 Desember 2022, 12.00 WIB</div>
                            </div>
                        </Carousel>
                    </div>
                </div>

                <div className="flex flex-col gap-6 justify-center items-center w-screen">
                    <div className="font-retroica text-4xl text-white">Contact Us</div>
                    <div className="h-64 w-64">
                        <Carousel
                            leftControl=" "
                            rightControl=" "
                            indicators={false}
                        >
                            <div className="text-white text-center">WDC</div>
                        </Carousel>
                    </div>
                </div>

                <div className="bg-[#2a2f29]">
                    <Footer container={false}>
                        <div className="w-screen p-4 bg-slate-100">
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
                                                Innovative Informatics Contest (WDC)
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
        </Layout>
    );
};

export default Sponsor;
