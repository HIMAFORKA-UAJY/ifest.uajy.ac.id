import cp from "@/data/cp.json";
import { motion } from "framer-motion";
import { CSSProperties, FC, useEffect, useState } from "react";
import { FaLine, FaWhatsapp } from "react-icons/fa";
import { Grid, Navigation, Pagination } from "swiper";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";

interface Props {
  get:
    | "i2c"
    | "wdc"
    | "muc"
    | "donor-darah"
    | "seminar-nasional"
    | "sponsorship"
    | "ifest-store"
    | "all";
}

const CP: FC<Props> = ({ get }: Props) => {
  const [p, setP] = useState<
    {
      name: string;
      data: {
        name: string;
        whatsapp: {
          phone: string;
          url: string;
        };
        line: string;
      }[];
    }[]
  >();

  useEffect(() => {
    switch (get) {
      case "i2c":
        setP([cp[0]]);
        break;
      case "wdc":
        setP([cp[1]]);
        break;
      case "muc":
        setP([cp[2]]);
        break;
      case "donor-darah":
        setP([cp[3]]);
        break;
      case "seminar-nasional":
        setP([cp[4]]);
        break;
      case "sponsorship":
        setP([cp[5]]);
        break;
      case "ifest-store":
        setP([cp[6]]);
        break;
      default:
        setP(cp);
        break;
    }
  }, [get]);

  const getColor = (name: string) => {
    switch (name) {
      case "I2C":
        return "#ba87fb";
      case "WDC":
        return "#9dce6d";
      case "MUC":
        return "#fd9807";
      case "Donor Darah":
        return "#ff7676";
      case "Seminar Nasional":
        return "#5cc09f";
      case "Sponsorship":
        return "#926dae";
      case "IFest Store":
        return "#b0c441";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="bg-[#3b3275]"
    >
      <div className="flex w-full flex-col items-center justify-center gap-2 py-10">
        <div className="font-retron2000 text-4xl font-bold tracking-[0.15em] text-white">
          Contact Us
        </div>
        <div className="font-louisgeorgecafe text-base text-white">
          Ada pertanyaan? Silakan ajukan ^_^
        </div>
        <div
          className={`w-full py-4 ${
            get == "all" ? "lg:w-10/12 2xl:w-7/12" : "lg:w-4/12 2xl:w-2/12"
          }`}
        >
          <Swiper
            breakpoints={{
              1024: {
                slidesPerView: get == "all" ? 3 : 1,
              },
            }}
            grid={{
              rows: 1,
              fill: "row",
            }}
            spaceBetween={8}
            pagination={{
              clickable: true,
            }}
            navigation
            modules={[Grid, Pagination, Navigation]}
            style={{ "--swiper-pagination-color": "#C3AEFF" } as CSSProperties}
            className="mySwiper classes.swiper-button-prev classes.swiper-button-next"
          >
            {p?.map((q, index) => {
              return (
                <SwiperSlide className="px-24 lg:px-10" key={index}>
                  <div
                    className="flex h-[18rem] border-separate flex-col justify-center rounded-xl border-[6px]"
                    style={{ borderColor: getColor(q.name) }}
                  >
                    <div className="p-4 text-center font-louisgeorgecafe text-white">
                      <div
                        className="w-full border-b-[6px] tracking-[0.2em]"
                        style={{ borderColor: getColor(q.name) }}
                      >
                        {q.name}
                      </div>
                      {q.data.map((r, index) => {
                        return (
                          <div className="flex flex-col items-center py-2" key={index}>
                            <a
                              className="flex flex-wrap items-center justify-center gap-1"
                              href={r.whatsapp.url}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <FaWhatsapp />
                              {r.whatsapp.phone}
                            </a>
                            <div className="flex items-center gap-1 font-louisgeorgecafe">
                              <FaLine />
                              {r.line}
                            </div>
                            <button
                              className="cursor-default rounded-2xl px-4 font-louisgeorgecafe"
                              style={{ backgroundColor: getColor(q.name) + "cc" }}
                            >
                              {r.name}
                            </button>
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
    </motion.div>
  );
};

export default CP;
