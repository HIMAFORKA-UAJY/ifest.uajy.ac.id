import { Carousel } from "flowbite-react";
import { motion } from "framer-motion";
import { FC } from "react";
import { Link } from "react-router-dom";
import { EffectCoverflow, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/grid";
import 'swiper/css/navigation';
import "swiper/css/pagination";

const Sponsor: FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="bg-[#2b2265] pt-20"
        >
            <div className="flex flex-col gap-6 justify-center items-center w-screen">
                <div className="font-retroica text-4xl text-white">Sponsors</div>
                <div className="h-64 w-64 lg:hidden">
                    <Carousel leftControl=" " rightControl=" " indicators={false}>
                        <div className="p-2 bg-[#352a7c] h-64 flex items-center">
                            <img
                                src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/jagoanh-gold.png"
                                alt="jagoan-hosting"
                            />
                        </div>
                        <div className="p-2 bg-[#352a7c] h-64 flex items-center">
                            <img
                                src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/ajaib-silver.jpg"
                                alt="ajaib-silver"
                            />
                        </div>
                        <div className="p-2 bg-[#352a7c] h-64 flex items-center">
                            <img
                                src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/devcode-color-silver.png"
                                alt="dev-code"
                            />
                        </div>
                    </Carousel>
                </div>
                <div className="hidden lg:flex">
                    <Swiper
                        effect={"coverflow"}
                        navigation
                        grabCursor={false}
                        centeredSlides={true}
                        slidesPerView={"auto"}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: -50,
                            depth: 100,
                            modifier: 1,
                            slideShadows: false
                        }}

                        modules={[EffectCoverflow, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide className="p-2 bg-[#352a7c] h-[19rem] w-[19rem] flex items-center">
                            <img src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/jagoanh-gold.png" alt="jagoan-hosting" />
                        </SwiperSlide>
                        <SwiperSlide className="p-2 bg-[#352a7c] h-[19rem] w-[19rem] flex items-center">
                            <img src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/ajaib-silver.jpg" alt="ajaib-silver" />
                        </SwiperSlide>
                        <SwiperSlide className="p-2 bg-[#352a7c] h-[19rem] w-[19rem] flex items-center">
                            <img src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/devcode-color-silver.png" alt="dev-code" />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.0, duration: 0.25 }}
                    className="mt-7 px-5 py-3 rounded-[2.0em] text-sm lg:text-base font-retroica text-white bg-gradient-to-br from-[#7fa2fe] bg-[#ba87fb]">
                    <Link to="/sponsor">Become our Sponsor</Link >
                </motion.button>
            </div>

        </motion.div>
    );
};

export default Sponsor;
