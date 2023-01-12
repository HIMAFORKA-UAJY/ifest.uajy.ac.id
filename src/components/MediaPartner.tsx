import { Carousel } from "flowbite-react";
import { motion } from "framer-motion";
import { FC } from "react";
import { Grid, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const MediaPartner: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="bg-[#2b2265] pt-24"
    >
      <div className="flex w-screen flex-col items-center justify-center gap-6">
        <div className="font-retroica text-4xl text-white">Media Partners</div>
        <div className="h-64 w-64 lg:hidden">
          <Carousel leftControl=" " rightControl=" " indicators={false}>
            <div className="flex h-64 items-center bg-[#352a7c] p-2">
              <img
                src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/eventlombaindo-medpart.png"
                alt="/"
              />
            </div>
            <div className="flex h-64 items-center bg-[#352a7c] p-2">
              <img
                src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/bncc-medpart.png"
                alt="/"
              />
            </div>
            <div className="flex h-64 items-center bg-[#352a7c] p-2">
              <img
                src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/eventdetect-medpart.png"
                alt="/"
              />
            </div>
            <div className="flex h-64 items-center bg-[#352a7c] p-2">
              <img
                src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/eventhunterid-medpart.png"
                alt="/"
              />
            </div>
            <div className="flex h-64 items-center bg-[#352a7c] p-2">
              <img
                src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/gudanglombaind-medpart.jpg"
                alt="/"
              />
            </div>
            <div className="flex h-64 items-center bg-[#352a7c] p-2">
              <img
                src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/infomahasiswa-medpart.png"
                alt="/"
              />
            </div>
            <div className="flex h-64 items-center bg-[#352a7c] p-2">
              <img
                src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/infolombaeventid-medpart.png"
                alt="/"
              />
            </div>
            <div className="flex h-64 items-center bg-[#352a7c] p-2">
              <img
                src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/beritalomba-medpart.png"
                alt="/"
              />
            </div>
            <div className="flex h-64 items-center bg-[#352a7c] p-2">
              <img
                src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/madingeventgelap-medpart.png"
                alt="/"
              />
            </div>
            <div className="flex h-64 items-center bg-[#352a7c] p-2">
              <img
                src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/edaranevent-medpart.png"
                alt="/"
              />
            </div>
            <div className="flex h-64 items-center bg-[#352a7c] p-2">
              <img
                src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/lombasma2-medpart.png"
                alt="/"
              />
            </div>
            <div className="flex h-64 items-center bg-[#352a7c] p-2">
              <img
                src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/webinargratis-medpart.png"
                alt="/"
              />
            </div>
          </Carousel>
        </div>
        <div className="hidden lg:flex lg:h-[30rem] lg:w-[60rem]">
          <Swiper
            slidesPerView={4}
            grid={{
              rows: 2,
            }}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            navigation
            modules={[Grid, Pagination, Navigation]}
            style={{ "--swiper-pagination-color": "#C3AEFF" }}
            className="mySwiper classes.swiper-button-prev classes.swiper-button-next"
          >
            <SwiperSlide className="flex h-[12rem] w-[12rem] items-center bg-[#352a7c] p-2">
              <img
                src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/eventlombaindo-medpart.png"
                alt="/"
              />
            </SwiperSlide>
            <SwiperSlide className="flex h-[12rem] w-[12rem] items-center bg-[#352a7c] p-2">
              <img
                src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/bncc-medpart.png"
                alt="/"
              />
            </SwiperSlide>
            <SwiperSlide className="flex h-[12rem] w-[12rem] items-center bg-[#352a7c] p-2">
              <img
                src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/eventdetect-medpart.png"
                alt="/"
              />
            </SwiperSlide>
            <SwiperSlide className="flex h-[12rem] w-[12rem] items-center bg-[#352a7c] p-2">
              <img
                src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/eventhunterid-medpart.png"
                alt="/"
              />
            </SwiperSlide>
            <SwiperSlide className="flex h-[12rem] w-[12rem] items-center bg-[#352a7c] p-2">
              <img
                src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/gudanglombaind-medpart.jpg"
                alt="/"
              />
            </SwiperSlide>
            <SwiperSlide className="flex h-[12rem] w-[12rem] items-center bg-[#352a7c] p-2">
              <img
                src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/infomahasiswa-medpart.png"
                alt="/"
              />
            </SwiperSlide>
            <SwiperSlide className="flex h-[12rem] w-[12rem] items-center bg-[#352a7c] p-2">
              <img
                src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/infolombaeventid-medpart.png"
                alt="/"
              />
            </SwiperSlide>
            <SwiperSlide className="flex h-[12rem] w-[12rem] items-center bg-[#352a7c] p-2">
              <img
                src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/beritalomba-medpart.png"
                alt="/"
              />
            </SwiperSlide>
            <SwiperSlide className="flex h-[12rem] w-[12rem] items-center bg-[#352a7c] p-2">
              <img
                src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/madingeventgelap-medpart.png"
                alt="/"
              />
            </SwiperSlide>
            <SwiperSlide className="flex h-[12rem] w-[12rem] items-center bg-[#352a7c] p-2">
              <img
                src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/edaranevent-medpart.png"
                alt="/"
              />
            </SwiperSlide>
            <SwiperSlide className="flex h-[12rem] w-[12rem] items-center bg-[#352a7c] p-2">
              <img
                src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/lombasma2-medpart.png"
                alt="/"
              />
            </SwiperSlide>
            <SwiperSlide className="flex h-[12rem] w-[12rem] items-center bg-[#352a7c] p-2">
              <img
                src="https://ifest.uajy.ac.id/assets/images/sponsor-medpart/webinargratis-medpart.png"
                alt="/"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </motion.div>
  );
};

export default MediaPartner;
