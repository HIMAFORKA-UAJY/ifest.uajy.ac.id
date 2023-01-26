import CP from "@/components/CP";
import Footer from "@/components/Footer";
import sponsorshipPackages from "@/data/sponsorship-package.json";
import { navColors } from "@/recoil/atoms";
import { FC } from "react";
import { useSetRecoilState } from "recoil";
import { Autoplay, EffectCoverflow } from "swiper";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";

const Index: FC = () => {
  useSetRecoilState(navColors)({ bg1: "#152435", bg2: "#27536d", fg: "#479ec6" });
  return (
    <div className="absolute top-0 -z-10 min-h-screen w-full bg-[#0A1828] pt-48">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="font-louisgeorgecafe text-4xl text-white">IFEST#11 SPONSORSHIP</div>
        <div className="text-center font-louisgeorgecafe text-xl text-white">
          Tertarik dengan acara kami? Dukung kami dengan menjadi sponsor!
        </div>

        <div className="w-3/4 py-4 lg:w-10/12">
          <Swiper
            autoplay={{ delay: 2000 }}
            breakpoints={{
              1024: { slidesPerView: 4 },
            }}
            centeredSlides
            className="mySwiper"
            coverflowEffect={{
              rotate: 45,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            effect="coverflow"
            grabCursor={false}
            modules={[Autoplay, EffectCoverflow]}
            slidesPerView={1}
            spaceBetween={0}
          >
            {sponsorshipPackages.map((p) => {
              return (
                <SwiperSlide key={p.id}>
                  <div className="flex h-[32rem] w-72 flex-col items-center gap-2 rounded-xl border-4 border-[#26667f] p-4">
                    <img alt="/" className="w-32" src={p.image} />
                    <div className="text-center font-louisgeorgecafe font-bold text-[#ffffffdd]">
                      {p.name}
                    </div>
                    <div className="font-retroica text-2xl text-[#ff69b4]">
                      <span className="font-louisgeorgecafe text-sm">{p.price}</span>
                    </div>
                    <div className="overflow-x-auto text-left font-louisgeorgecafe text-[#c5c5c5]">
                      <ul className="list-inside list-disc">
                        {p.benefits.map((b) => {
                          return <li key={b}>{b}</li>;
                        })}
                      </ul>
                    </div>
                    <div className="rounded-md bg-gradient-to-br from-[#5aa7c0] via-[#926dae] to-[#c76f89] p-1">
                      <a
                        href="https://wa.me/628993694969?text=Halo%20Admin%20Sponsor%20IFest%2311%2C%20kami%20dari%20%28Nama%20perusahaan%20%2F%20organisasi%29%20ingin%20menjadi%20sponsor%20pada%20acara%20IFest%2311.%20Paket%20sponsor%20yang%20kami%20pilih%20adalah%20%22Paket%20Platinum%22.%0ABerikut%20kami%20sertakan%20MoU%20sebagai%20bentuk%20kerjasama%20kami%20dengan%20pihak%20panitia%20IFest%2311%2C%20atas%20kerjasamanya%20kami%20ucapkan%20terima%20kasih."
                        rel="noreferrer"
                        target="_blank"
                      >
                        <button className="flex items-center gap-1 rounded-md bg-[#0A1828] px-4 py-1 font-retroica text-white transition hover:bg-transparent">
                          Order Now
                        </button>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <CP get="sponsorship" />
      <Footer className="bg-[#0a1828]" />
    </div>
  );
};

export default Index;
