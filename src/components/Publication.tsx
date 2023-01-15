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

interface Props {
  Blog: {
    author: string;
    jabatan: string;
    judul: string;
    publication_date: string;
    konten: string;
    img: string;
    address: string;
  }[];
}

const Publication: FC<Props> = ({ Blog }: Props) => {
  const publications = Blog;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="bg-[#2b2265] pt-16 lg:pt-24"
    >
      <div className="flex w-screen flex-col items-center justify-center gap-10 pb-24">
        <div className="font-retroica text-4xl text-white">Publikasi</div>
        <div className="w-full lg:px-12">
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
            {publications.map((publication) => {
              return (
                <SwiperSlide className="h-[32rem] w-[20rem]" key={publication.judul}>
                  <div className="flex h-full flex-col items-center justify-center gap-2 bg-[#352A7C] text-center">
                    <img className="w-64" src={publication.img} alt="/" />
                    <div className="font-retroica text-[#ffffff]">{publication.judul}</div>
                    <div className="font-retroica text-xl text-[#9C8DFC]">
                      {publication.jabatan}
                    </div>
                    <div className="font-retroica text-xl text-[#9C8DFC]">{publication.author}</div>
                    <div className="font-retroica text-[#7364D2]">
                      {publication.publication_date}
                    </div>
                    <button className="pt-4 font-retroica text-[#9C8DFC]">
                      <Link to={publication.address}>Find out more</Link>
                    </button>
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
