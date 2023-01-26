import mediapartners from "@/data/media-partners.json";
import { motion } from "framer-motion";
import { FC } from "react";
import { Autoplay, Grid } from "swiper";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";

const MediaPartner: FC = () => {
  return (
    <motion.div
      className="bg-[#2b2265]"
      initial={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
    >
      <div className="flex flex-col items-center justify-center gap-2 py-10">
        <div className="text-center font-retroica text-4xl tracking-[0.15em] text-white">
          Media Partners
        </div>
        <div className="w-3/4 py-4 lg:w-10/12 2xl:w-7/12">
          <Swiper
            autoplay={{ delay: 2000 }}
            breakpoints={{
              1024: { slidesPerView: 4, grid: { rows: 2 } },
            }}
            className="mySwiper"
            grabCursor={false}
            grid={{
              rows: 1,
              fill: "row",
            }}
            modules={[Autoplay, Grid]}
            slidesPerView={1}
            spaceBetween={32}
          >
            {mediapartners.map((mp) => {
              return (
                <SwiperSlide className="bg-[#352a7c]" key={mp.id}>
                  <div className="mx-auto flex h-64 w-64 items-center justify-center p-4 lg:h-48 lg:w-48">
                    <img alt={mp.name} className="h-full w-full" src={mp.image} />
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
