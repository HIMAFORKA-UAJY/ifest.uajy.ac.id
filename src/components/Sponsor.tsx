import { motion } from "framer-motion";
import { FC } from "react";
import { Link } from "react-router-dom";
import { EffectCoverflow, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const Sponsor: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="bg-[#2b2265] pt-20"
    >
      <div className="flex w-screen flex-col items-center justify-center gap-6 pb-24">
        <div className="text-center font-retroica text-4xl text-white">Sponsors IFEST # 10</div>
        <div className="h-64 w-96 lg:hidden">
          {/* <Carousel slideInterval={4000} leftControl=" " rightControl=" " indicators={false}>
            <div className="flex h-64 items-center bg-[#352a7c] p-2">
              <img
                src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/jagoanh-gold.png"
                alt="jagoan-hosting"
              />
            </div>
            <div className="flex h-64 items-center bg-[#352a7c] p-2">
              <img
                src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/ajaib-silver.jpg"
                alt="ajaib-silver"
              />
            </div>
            <div className="flex h-64 items-center bg-[#352a7c] p-2">
              <img
                src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/devcode-color-silver.png"
                alt="dev-code"
              />
            </div>
          </Carousel> */}
          <Swiper slidesPerView="auto" spaceBetween={10} className="mySwiper">
            <SwiperSlide className="flex h-64 w-64 items-center bg-[#352a7c] p-2">
              <img
                src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/jagoanh-gold.png"
                alt="jagoan-hosting"
              />
            </SwiperSlide>
            <SwiperSlide className="flex h-64 w-64 items-center bg-[#352a7c] p-2">
              <img
                src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/ajaib-silver.jpg"
                alt="ajaib-silver"
              />
            </SwiperSlide>
            <SwiperSlide className="flex h-64 w-64 items-center bg-[#352a7c] p-2">
              <img
                src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/devcode-color-silver.png"
                alt="dev-code"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="hidden lg:flex">
          <Swiper
            effect="coverflow"
            navigation
            grabCursor={false}
            centeredSlides
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 0,
              stretch: -50,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide className="flex h-[19rem] w-[19rem] items-center bg-[#352a7c] p-2">
              <img
                src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/jagoanh-gold.png"
                alt="jagoan-hosting"
              />
            </SwiperSlide>
            <SwiperSlide className="flex h-[19rem] w-[19rem] items-center bg-[#352a7c] p-2">
              <img
                src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/ajaib-silver.jpg"
                alt="ajaib-silver"
              />
            </SwiperSlide>
            <SwiperSlide className="flex h-[19rem] w-[19rem] items-center bg-[#352a7c] p-2">
              <img
                src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/devcode-color-silver.png"
                alt="dev-code"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.0, duration: 0.25 }}
          className="mt-7 rounded-[2.0em] bg-[#ba87fb] bg-gradient-to-br from-[#7fa2fe] px-5 py-3 font-retroica text-sm text-white transition-all hover:scale-105 hover:shadow-[0_0px_80px_0px_#886fcb] lg:text-base"
        >
          <Link to="/sponsor">Become our Sponsor</Link>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Sponsor;
