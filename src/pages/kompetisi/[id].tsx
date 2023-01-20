import CP from "@/components/CP";
import ComingSoon from "@/components/ComingSoon";
import Footer from "@/components/Footer";
import kompetisi from "@/data/kompetisi.json";
import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";
import parse from "html-react-parser";
import moment from "moment-timezone";
import { useRouter } from "next/router";
import { FC, useRef, useState } from "react";
import { Chrono } from "react-chrono";
import { FaBook, FaCertificate, FaMale, FaMoneyBill, FaTrophy, FaWallet } from "react-icons/fa";
import { useSetRecoilState } from "recoil";
import { navColors } from "src/recoil/atoms";

interface Kompetisi {
  id: number;
  abbreviation: string;
  name: string;
  img: string;
  poster: string;
  rulebook: string;
  date_available: string | null;
  requirements: string[];
  description: string;
  long_description: string;
  provision: [
    {
      type: string;
      data: string[];
    }
  ];
  timeline: [
    {
      name: string;
      data: {
        name: string;
        date: string;
      }[];
    }
  ];
  prizepool: {
    total: string;
    distribution: [
      {
        type: string;
        image: string;
        rewards: string[];
      }
    ];
  };
}

interface Props {
  kompetisi: {
    i2c: Kompetisi;
    wdc: Kompetisi;
    muc: Kompetisi;
  };
}

export const getStaticPaths = async () => {
  return {
    paths: Object.keys(kompetisi).map((k) => ({ params: { id: k } })),
    fallback: false,
  };
};

export const getStaticProps = async () => {
  return {
    props: { kompetisi },
  };
};

const Index: FC<Props> = ({ kompetisi }: Props) => {
  useSetRecoilState(navColors)({ bg1: "#211a44", bg2: "#3d3474", fg: "#bfb2ff" });

  const router = useRouter();
  const { id } = router.query;
  const k: Kompetisi = kompetisi[id as keyof typeof kompetisi];

  const getColor = (index: number) => {
    switch (index) {
      case 0:
        return "#ff8064";
      case 1:
        return "#9dce6d";
      case 2:
        return "#7fa3ff";
    }
  };

  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <FaBook />;
      case 1:
        return <FaMale />;
      case 2:
        return <FaWallet />;
      case 3:
        return <FaMoneyBill />;
      case 4:
        return <FaTrophy />;
      case 5:
        return <FaCertificate />;
    }
  };

  const contentRef = useRef<HTMLDivElement>(null);
  const [openPoster, setOpenPoster] = useState<boolean>(false);
  const [openRuleBook, setOpenRulebook] = useState<boolean>(false);

  if (
    k.date_available == null ||
    moment().tz("Asia/Jakarta").diff(moment(k.date_available).tz("Asia/Jakarta")) < 0
  )
    return <ComingSoon date={k.date_available} />;

  return (
    <div className="absolute top-0 -z-10 min-h-screen w-full bg-gradient-to-b from-[#2a2f59] to-[#332550]">
      <div className="flex h-screen flex-col items-center justify-center gap-4 px-4 lg:flex-row">
        <img className="w-72 lg:w-1/4" src={k.img} alt={k.name.toLowerCase()} />
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="text-center text-white">
            <div className="font-retroica text-4xl tracking-wide lg:hidden">{k.abbreviation}</div>
            <div className="font-retroica text-2xl lg:text-4xl lg:tracking-[0.1em]">{k.name}</div>
          </div>
          <div className="flex w-9/12 flex-col gap-2 font-retroica text-sm text-white lg:w-full lg:flex-row lg:justify-center lg:gap-6">
            {k.requirements.map((r, index) => {
              return (
                <div
                  className="rounded-full p-1"
                  key={index}
                  style={{ backgroundColor: getColor(index) }}
                >
                  <div className="flex flex-wrap items-center justify-center gap-1 rounded-full bg-[#332550] p-4">
                    {getIcon(index)}
                    {r}
                  </div>
                </div>
              );
            })}
          </div>
          <motion.button
            onClick={() => contentRef.current?.scrollIntoView({ behavior: "smooth" })}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.75 }}
            transition={{ duration: 0.25 }}
            className="transition-transform hover:scale-125"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-10 w-10 stroke-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </motion.button>
        </div>
      </div>

      <div ref={contentRef} className="bg-gradient-to-t from-[#2a2f59] to-[#332550]">
        <div className="border-gray-700 bg-[#241f3d] p-8">
          <div className="flex flex-col items-center gap-4">
            <div className="font-retroica text-3xl tracking-wider text-white">
              MORE ABOUT {k.abbreviation}
            </div>
            <div className="text-md w-full px-2 text-justify font-louisgeorgecafe font-thin text-white lg:px-[10rem] lg:text-center">
              {parse(String(k.long_description))}
            </div>
          </div>
          <div className="flex flex-col pt-4 font-louisgeorgecafe text-white lg:flex-row lg:items-center lg:justify-center lg:gap-6">
            <div className="rounded-full bg-[#6c6486] p-1">
              <button
                className="flex w-full justify-center gap-1 rounded-full bg-[#332550] p-2 transition-all hover:bg-transparent"
                onClick={() => setOpenPoster(true)}
              >
                <div className="tracking-widest opacity-70">Lihat Poster</div>
              </button>
            </div>
            <Dialog
              open={openPoster}
              onClose={() => setOpenPoster(false)}
              className="relative z-50"
            >
              <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
              <div className="fixed inset-0 flex items-center justify-center">
                <Dialog.Panel className="flex h-full w-11/12 flex-col items-center justify-center gap-2 overflow-auto p-8">
                  <img
                    className="h-full w-full object-contain object-center"
                    src={k.poster}
                    alt="poster"
                    onClick={() => setOpenPoster(false)}
                  />
                </Dialog.Panel>
              </div>
            </Dialog>
            <div className="py-2">
              <div className="rounded-full bg-gradient-to-r from-[#6ea5b1] to-[#9b68ce] p-1">
                <a href="https://ifest.uajy.ac.id/dash" target="_blank" rel="noreferrer">
                  <button className="flex w-full justify-center gap-1 rounded-full bg-[#332550] p-2 transition-all hover:bg-transparent">
                    <div className="tracking-widest opacity-100">DAFTAR</div>
                  </button>
                </a>
              </div>
            </div>
            <div className="rounded-full bg-[#6c6486] p-1">
              <button
                className="flex w-full justify-center gap-1 rounded-full bg-[#332550] p-2 transition-all hover:bg-transparent"
                onClick={() => setOpenRulebook(true)}
              >
                <div className="tracking-widest opacity-70">Lihat Rulebook</div>
              </button>
            </div>
            <Dialog
              open={openRuleBook}
              onClose={() => setOpenRulebook(false)}
              className="relative z-50"
            >
              <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
              <div className="fixed inset-0 flex items-center justify-center">
                <Dialog.Panel className="flex h-full w-11/12 flex-col items-center justify-center gap-0 overflow-auto p-8">
                  <iframe
                    className="h-screen w-full py-10"
                    src={k.rulebook}
                    onClick={() => setOpenRulebook(false)}
                  ></iframe>
                </Dialog.Panel>
              </div>
            </Dialog>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-8 p-8 lg:flex-row">
          {k.provision.map((provision, index) => {
            return (
              <div className="rounded-lg border border-gray-700 bg-[#241f3d] p-4" key={index}>
                <h3 className="pl-6 font-retroica text-2xl text-[#87bbeb]">{provision.type}</h3>
                <div className="p-6 font-louisgeorgecafe leading-loose text-white">
                  <ol className="list-outside list-decimal">
                    {provision.data.map((item, index) => {
                      return <li key={index}>{item}</li>;
                    })}
                  </ol>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="text-center font-retroica text-4xl text-[#87bbeb]">Timeline</div>
          {k.timeline.map((timeline, index) => {
            return (
              <div className="flex w-full flex-col items-center justify-center" key={index}>
                <div className="w-fit rounded-xl bg-[#241f3d] pb-1">
                  <div className="rounded-xl bg-[#716B90] p-4 font-retroica text-white shadow-inner">
                    {timeline.name}
                  </div>
                </div>
                <div className="w-full lg:w-10/12 2xl:w-1/2">
                  <Chrono
                    items={timeline.data.map((item) => {
                      return {
                        title: item.name,
                        cardTitle: item.date,
                      };
                    })}
                    mode="VERTICAL_ALTERNATING"
                    cardHeight={50}
                    hideControls
                    disableClickOnCircle
                    theme={{
                      primary: "#716B90",
                      secondary: "transparent",
                      cardBgColor: "#241f3d",
                      cardForeColor: "white",
                      titleColor: "white",
                      titleColorActive: "white",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex w-full flex-col items-center justify-center bg-[url('/images/bg-prizepool.png')] bg-cover bg-center bg-no-repeat py-10">
          <div className="text-center font-retroica text-6xl tracking-widest text-[#87bbeb]">
            PRIZE POOL
          </div>
          <div className="text-center font-retroica text-3xl text-[#ffba57]">
            {k.prizepool.total}
          </div>
          <div id="fika" className="grid gap-8 lg:grid-cols-3 lg:grid-rows-2">
            {k.prizepool.distribution.map((distribution, index) => {
              return (
                <div
                  className={`${
                    k.prizepool.distribution.length % 2 == 0 && index == 0
                      ? "col-span-full"
                      : "fika"
                  }`}
                  key={index}
                >
                  <div className="flex flex-row items-center justify-center rounded-xl border border-gray-700 bg-[#241f3d] p-4 text-white transition duration-300 ease-in hover:scale-110 hover:text-[#241f3d] lg:flex-col">
                    <img
                      className={`${
                        index % 2 == 0 ? "order-0" : "order-1"
                      } w-32 lg:-order-none lg:w-48`}
                      src={distribution.image}
                      alt="/"
                    />
                    <div>
                      <div className="text-center font-retroica text-2xl">{distribution.type}</div>
                      {distribution.rewards.map((reward, index) => {
                        return (
                          <div className="flex gap-3 font-retroica" key={index}>
                            {getIcon(index + 3)} {reward}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-center p-10">
          <div className="w-full rounded-xl border-gray-200 bg-gradient-to-br from-[#463e74] to-[#332550] p-4 lg:w-10/12 2xl:w-1/2">
            <div className="flex flex-col items-center justify-center text-center lg:flex-row lg:justify-start">
              <img
                className="w-48"
                src="https://ifest.uajy.ac.id/assets/images/ill4-icon.png"
                alt="/"
              />
              <div className="flex flex-col items-center gap-4 lg:items-start">
                <div className="font-retroica text-2xl text-[#87bbeb]">
                  Tertarik? Ayo mendaftar!
                </div>
                <div className="text-center font-louisgeorgecafe text-white">
                  Ayo buktikan bakat dan kreativitasmu! Jangan cepat berpuas diri!
                </div>
                <div className="rounded-full bg-gradient-to-r from-[#6ea5b1] to-[#9b68ce] p-1">
                  <a href="https://ifest.uajy.ac.id/dash" target="_blank" rel="noreferrer">
                    <button className="flex items-center gap-1 rounded-full bg-[#332550] p-2 font-retroica tracking-widest text-white opacity-100 transition hover:bg-transparent">
                      DAFTAR
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <CP get={id as "i2c" | "wdc" | "muc"} />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
