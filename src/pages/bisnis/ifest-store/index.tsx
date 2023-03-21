/* eslint-disable no-unreachable */
import CP from "@/components/CP";
import ComingSoon from "@/components/ComingSoon";
import Footer from "@/components/Footer";
import ifestStore from "@/data/ifest-store.json";
import { navColors } from "@/recoil/atoms";
import { NextSeo } from "next-seo";
import { FC } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSetRecoilState } from "recoil";
import { Autoplay, Pagination } from "swiper";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";

const Index: FC = () => {
  useSetRecoilState(navColors)({ bg1: "#2d2a42", bg2: "#1A1538", fg: "#8379C0" });
  return (
    <>
      <NextSeo title={`IFest Store - IFest#11`} />
      <ComingSoon date={null} />
    </>
  );
  return (
    <>
      <NextSeo title={`IFest Store - IFest#11`} />
      <div className="absolute top-0 -z-10 min-h-screen w-full bg-[#010822] pt-48">
        <div className="mx-12 text-center font-retroica text-4xl text-white">
          Informatics Festival Store
        </div>
        <div className="mx-12 mt-12">
          <div className="font-retroica text-3xl text-[#C8BFFF]">Merch</div>
          <div className="mb-4 font-retroica text-white">Open PO 28-03-2023</div>
          <div>
            <Swiper
              autoplay={{ delay: 2000 }}
              breakpoints={{
                480: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
              }}
              className="mySwiper"
              modules={[Autoplay, Pagination]}
              pagination
              slidesPerView={1}
              spaceBetween={30}
            >
              {ifestStore.map((i) => {
                return (
                  <SwiperSlide
                    className="rounded-xl bg-[#1A1538] font-retroica text-white"
                    key={i.id}
                  >
                    <div className="absolute right-8 top-64 rounded-full">
                      <a href="">
                        <button>
                          <div className="w-fit rounded-full bg-[#352E63] p-4 text-3xl text-[#CDC4FF]">
                            <FaShoppingCart />
                          </div>
                        </button>
                      </a>
                    </div>
                    <div className="flex justify-center">
                      <img alt="" className="max-h-[17rem] rounded-xl" src={i.image} />
                    </div>
                    <div className="p-8">
                      <div className="w-fit text-xs text-[#FFA1A1]">
                        <div className="relative before:absolute before:right-0 before:top-1.5 before:w-full before:-rotate-6 before:border-b-[2px] before:border-[#C04453] before:content-['']">
                          {i.prevPrice}
                        </div>
                      </div>
                      <div className="mb-6 mt-2 text-xl">{i.currentPrice}</div>
                      <div className="mb-4 text-2xl text-[#C1A0FF]">{i.name}</div>
                      <div className="mb-6 font-louisgeorgecafe">{i.desc}</div>
                      <div className="flex flex-row gap-3">
                        {i.tags.map((tag) => {
                          return (
                            <div
                              className="rounded-lg bg-[#2C2556] px-6 py-2 text-[#766DAC]"
                              key={tag}
                            >
                              {tag}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
        <div className="mt-36 text-center">
          <div className="font-retron2000 text-5xl text-white">Tertarik dengan produknya?</div>
          <div
            className="mx-auto my-12 w-fit rounded-full transition-all hover:scale-105 hover:shadow-[0px_0px_60px_20px_#ffffff10]"
            style={{
              background: `linear-gradient(90deg, #3F56AC, #7A3BAB)`,
            }}
          >
            <a href="" rel="noreferrer" target="_blank">
              <button className="flex w-full justify-center gap-1 rounded-full p-5 ">
                <div className="font-retroica text-white opacity-100">Pesan melalui form</div>
              </button>
            </a>
          </div>
        </div>
        <CP get="ifest-store" />
        <Footer className="bg-[#0a1828]" />
      </div>
    </>
  );
};

export default Index;
