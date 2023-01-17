import sponsors from "@/data/sponsors.json";
import { motion } from "framer-motion";
import Link from "next/link";
import { FC } from "react";
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";

const Sponsor: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="bg-[#3b3275]"
    >
      <div className="flex flex-col items-center justify-center gap-2 py-10">
        <div className="text-center font-retroica text-4xl tracking-[0.15em] text-white">
          Sponsors IFEST#10
        </div>
        <div className="w-3/4 py-4 lg:w-1/2">
          <Swiper
            autoplay={{ delay: 2000 }}
            breakpoints={{
              1024: { slidesPerView: 2 },
            }}
            className="mySwiper"
            centeredSlides
            coverflowEffect={{
              rotate: 0,
              stretch: -50,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            effect="coverflow"
            grabCursor={false}
            navigation={false}
            slidesPerView={1}
            modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
          >
            {sponsors.map((sponsor) => {
              return (
                <SwiperSlide className="bg-[#352a7c]" key={sponsor.id}>
                  <div className="mx-auto flex h-64 w-64 items-center p-4">
                    <img src={sponsor.image} alt={sponsor.name} />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <Link href="/bisnis/sponsor">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
            className="rounded-[2.0em] bg-[#ba87fb] bg-gradient-to-br from-[#7fa2fe] px-5 py-3 font-retroica text-sm text-white transition-all hover:scale-105 hover:shadow-[0_0px_80px_0px_#886fcb] lg:text-base"
          >
            Become our Sponsor
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default Sponsor;
