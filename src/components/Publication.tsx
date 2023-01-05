import { motion } from "framer-motion";
import { FC } from "react";
import { EffectCoverflow, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/grid";
import 'swiper/css/navigation';
import "swiper/css/pagination";

const Publication: FC = () => {
    const publications = [
        {
            img: "https://ifest.uajy.ac.id/assets/images/event/ill-i2c.png",
            author: "Joshua Puniwan Yahya - Ketua",
            title: "Welcome to IFEST#11",
            date: "28 Desember 2022, 12.00 WIB"
        },
        {
            img: "https://ifest.uajy.ac.id/assets/images/event/ill-wdc.png",
            author: "Joshua Puniwan Yahya - Ketua",
            title: "Pengumuman Finalis WDC",
            date: "29 Desember 2022, 12.00 WIB"
        },
        {
            img: "https://ifest.uajy.ac.id/assets/images/event/ill-cp.png",
            author: "Joshua Puniwan Yahya - Ketua",
            title: "Pengumuman Lolos Ke Tahap Virtual Expo I2C",
            date: "30 Desember 2022, 12.00 WIB"
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="bg-[#2b2265] lg:pt-24 pt-16"
        >
            <div className="flex flex-col gap-10 justify-center items-center w-screen">
                <div className="font-retroica text-4xl text-white">Publikasi</div>
                <div className="w-full lg:px-12">
                    <Swiper
                        effect={"coverflow"}
                        navigation
                        grabCursor={false}
                        centeredSlides={true}
                        slidesPerView={"auto"}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {publications.map((publication) => {
                            return (
                                <SwiperSlide className="w-[20rem] h-[32rem]">
                                    <div className="text-center flex gap-2 flex-col h-full items-center justify-center bg-[#352A7C]">
                                        <img className="w-64" src={publication.img} alt="/" />
                                        <div className="font-retroica text-[#ffffff]">{publication.author}</div>
                                        <div className="font-retroica text-xl text-[#9C8DFC]">{publication.title}</div>
                                        <div className="font-retroica text-[#7364D2]">{publication.date}</div>
                                        <button className="font-retroica text-[#9C8DFC] pt-4">Find out more</button>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </motion.div>
    );
};

export default Publication;
