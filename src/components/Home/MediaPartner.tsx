import mediapartners from "@/data/media-partners.json";
import { motion } from "framer-motion";
import { FC } from "react";
import { Autoplay, EffectCoverflow, Grid, Navigation, Pagination } from "swiper";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";

// ! Fix the swiper issue later.

const MediaPartner: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="bg-[#2b2265]"
    >
      <div className="flex flex-col items-center justify-center gap-2 py-10">
        <div className="text-center font-retroica text-4xl tracking-[0.15em] text-white">
          Media Partners
        </div>
        <div className="w-3/4 py-4 lg:w-1/2">
          <Swiper
            // autoplay={{ delay: 2000 }}
            // breakpoints={{
            //   1024: { slidesPerView: 4 },
            // }}
            className="mySwiper"
            // grabCursor={false}
            grid={{
              rows: 2,
            }}
            // navigation={false}
            slidesPerView={2}
            spaceBetween={30}
            modules={[Grid, Pagination, Navigation]}
          >
            {mediapartners.map((mp) => {
              return (
                <SwiperSlide className="bg-[#352a7c]" key={mp.id}>
                  <div className="mx-auto flex h-64 w-64 items-center p-4">
                    <img src={mp.image} alt={mp.name} />
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

export default MediaPartner;
