import sponsors from "@/data/sponsors.json";
import { motion } from "framer-motion";
import { FC } from "react";
import { Autoplay, EffectCoverflow } from "swiper";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";

const Sponsor: FC = () => {
  return (
    <motion.div
      className="bg-[#3b3275]"
      initial={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
    >
      <div className="flex flex-col items-center justify-center gap-4 py-10">
        <div className="text-center font-retroica text-4xl tracking-[0.15em] text-white">
          Sponsors IFEST#11
        </div>
        <div className="flex h-fit w-96 py-4 lg:hidden">
          <Swiper
            autoplay={{ delay: 2000 }}
            className="mySwiper"
            modules={[Autoplay]}
            slidesPerView="auto"
            spaceBetween={10}
          >
            {sponsors.map((sponsor) => {
              if (sponsor.id === 4) {
                return (
                  <SwiperSlide
                    className="flex !h-64 !w-64 items-center rounded-lg bg-[#2b2265] p-2"
                    key={sponsor.id}
                  >
                    <img alt={sponsor.name} src={sponsor.image} />
                  </SwiperSlide>
                );
              }
            })}
          </Swiper>
        </div>
        <div className="hidden lg:flex lg:w-1/2 lg:py-4">
          <Swiper
            autoplay={{ delay: 2000 }}
            centeredSlides
            className="mySwiper"
            coverflowEffect={{
              rotate: 0,
              stretch: -50,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            effect="coverflow"
            grabCursor={false}
            modules={[EffectCoverflow, Autoplay]}
            slidesPerView="auto"
          >
            {sponsors.map((sponsor) => {
              if (sponsor.id === 4) {
                return (
                  <SwiperSlide
                    className="flex !h-[19rem] !w-[19rem] items-center bg-[#2b2265] p-8"
                    key={sponsor.id}
                  >
                    <img alt={sponsor.name} src={sponsor.image} />
                  </SwiperSlide>
                );
              }
            })}
          </Swiper>
        </div>
        <a href="/bisnis/sponsor">
          <motion.button
            animate={{ opacity: 1 }}
            className="rounded-[2.0em] bg-[#ba87fb] bg-gradient-to-br from-[#7fa2fe] px-5 py-3 font-retroica text-sm text-white transition-all hover:scale-105 hover:shadow-[0_0px_80px_0px_#886fcb] lg:text-base"
            initial={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            Become our Sponsor
          </motion.button>
        </a>
      </div>
    </motion.div>
  );
};

export default Sponsor;
