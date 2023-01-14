import { Carousel } from "flowbite-react";
import { motion } from "framer-motion";
import { CSSProperties, FC } from "react";
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
                src="/images/medpart/lombasma2.png"
                alt="/"
              />
            </div>
            <div className="flex h-64 items-center bg-[#352a7c] p-2">
              <img
                src="/images/medpart/Edaranevent.png"
                alt="/"
              />
            </div>
            <div className="flex h-64 items-center bg-[#352a7c] p-2">
              <img
                src="/images/medpart/media event.png"
                alt="/"
              />
            </div>
            <div className="flex h-64 items-center bg-[#352a7c] p-2">
              <img
                src="/images/medpart/infolomba.indonesia.jfif"
                alt="/"
              />
            </div>
            <div className="flex h-64 items-center bg-[#352a7c] p-2">
              <img
                src="/images/medpart/eventcampus.co.png"
                alt="/"
              />
            </div>
            <div className="flex h-64 items-center bg-[#352a7c] p-2">
              <img
                src="/images/medpart/seputar.infoid.jpg"
                alt="/"
              />
            </div>
            <div className="flex h-64 items-center bg-[#352a7c] p-2">
              <img
                src="/images/medpart/eventcampus.png"
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
            style={{ "--swiper-pagination-color": "#C3AEFF" } as CSSProperties}
            className="mySwiper classes.swiper-button-prev classes.swiper-button-next"
          >
            <SwiperSlide className="flex h-[12rem] w-[12rem] items-center bg-[#352a7c] p-2">
              <img
                src="/images/medpart/lombasma2.png"
                alt="/"
              />
            </SwiperSlide>
            <SwiperSlide className="flex h-[12rem] w-[12rem] items-center bg-[#352a7c] p-2">
              <img
                src="/images/medpart/Edaranevent.png"
                alt="/"
              />
            </SwiperSlide>
            <SwiperSlide className="flex h-[12rem] w-[12rem] items-center bg-[#352a7c] p-2">
              <img
                src="/images/medpart/media event.png"
                alt="/"
              />
            </SwiperSlide>
            <SwiperSlide className="flex h-[12rem] w-[12rem] items-center bg-[#352a7c] p-2">
              <img
                src="/images/medpart/infolomba.indonesia.jfif"
                alt="/"
                className="h-[10rem] m-auto"
              />
            </SwiperSlide>
            <SwiperSlide className="flex h-[12rem] w-[12rem] items-center bg-[#352a7c] p-2">
              <img
                src="/images/medpart/eventcampus.co.png"
                alt="/"
                className="h-[10rem] m-auto"
              />
            </SwiperSlide>
            <SwiperSlide className="flex h-[12rem] w-[12rem] items-center bg-[#352a7c] p-2">
              <img
                src="/images/medpart/seputar.infoid.jpg"
                alt="/"
              />
            </SwiperSlide>
            <SwiperSlide className="flex h-[12rem] w-[12rem] items-center bg-[#352a7c] p-2">
              <img
                src="/images/medpart/eventcampus.png"
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
