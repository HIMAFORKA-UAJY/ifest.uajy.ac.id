import posts from "@/data/posts.json";
import { motion } from "framer-motion";
import Link from "next/link";
import { FC } from "react";
import { EffectCoverflow, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const Publication: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="bg-[#3b3275]"
    >
      <div className="flex flex-col items-center justify-center gap-2 py-10">
        <div className="font-retroica text-4xl tracking-[0.15em] text-white">Publikasi</div>
        <div className="w-full lg:w-1/4">
          <Swiper
            effect="coverflow"
            navigation
            grabCursor={false}
            centeredSlides
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="mySwiper"
          >
            {posts.map((post) => {
              return (
                <SwiperSlide className="px-12" key={post.slug}>
                  <div className="flex h-[32rem] flex-col items-center justify-center gap-1 bg-[#352a7c] p-6 text-center font-retroica">
                    <img className="w-48" src={post.thumbnail} alt="/" />
                    <div className="py-2">
                      <div className="tracking-widest text-white">{post.title}</div>
                      <div className="text-xl text-[#9c8dfc]">{post.author.jabatan}</div>
                      <div className="text-xl text-[#9c8dfc]">{post.author.name}</div>
                      <div className="text-[#7364D2]">{post.date}</div>
                    </div>
                    <div className="py-2"></div>
                    <Link href={`/blog/${post.slug}`}>
                      <button className="text-[#9c8dfc]">Find out more</button>
                    </Link>
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
