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
      className="bg-[#3b3275]"
      initial={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
    >
      <div className="flex flex-col items-center justify-center gap-2 py-10">
        <div className="font-retroica text-4xl tracking-[0.15em] text-white">Publikasi</div>
        <div className="w-full lg:w-1/2 2xl:w-1/4">
          <Swiper
            centeredSlides
            className="mySwiper"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            effect="coverflow"
            grabCursor={false}
            modules={[EffectCoverflow, Pagination, Navigation]}
            navigation
            pagination
            slidesPerView="auto"
          >
            {posts.map((post) => {
              return (
                <SwiperSlide className="px-12" key={post.slug}>
                  <div className="flex h-[32rem] flex-col items-center justify-center gap-1 rounded-lg bg-[#4a418a] p-6 text-center font-retroica">
                    <img alt="/" className="w-48" src={post.thumbnail} />
                    <div className="py-2">
                      <div className="tracking-widest text-white">{post.title}</div>
                      <div className="text-xl text-[#bcb2fd]">{post.author.jabatan}</div>
                      <div className="text-xl text-[#bcb2fd]">{post.author.name}</div>
                      <div className="text-[#978ae9]">{post.date}</div>
                    </div>
                    <div className="py-2"></div>
                    <Link href={`/blog/${post.slug}`}>
                      <button className="rounded-full bg-[#655bac] p-3 px-4 tracking-wide text-[#c8c1f3] transition-all hover:scale-105 hover:shadow-[0px_0px_60px_0px_#675499]">
                        Find out more
                      </button>
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
