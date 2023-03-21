import CP from "@/components/CP";
import ComingSoon from "@/components/ComingSoon";
import Footer from "@/components/Footer";
import kompetisi from "@/data/kompetisi.json";
import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";
import parse from "html-react-parser";
import moment from "moment-timezone";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { FC, useEffect, useRef, useState } from "react";
import { Chrono } from "react-chrono";
import { FaBook, FaCertificate, FaMale, FaMoneyBill, FaTrophy, FaWallet } from "react-icons/fa";
import { LinearGradient } from "react-text-gradients";
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

interface PageColor {
  pg1: string; // page gradient a
  pg2: string; // page gradient b
  bg1: string; // section bg odd
  bg2: string; // section bg even
  el1: string; // element gradient a
  el2: string; // element gradient b
  txt1: string; // text gradient a
  txt2: string; // text gradient b
  accent: string; // buttons
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
  const [pageColor, setPageColor] = useState<PageColor>({
    pg1: "",
    pg2: "",
    bg1: "",
    bg2: "",
    el1: "",
    el2: "",
    txt1: "",
    txt2: "",
    accent: "",
  });

  const router = useRouter();
  const { id } = router.query;
  const k: Kompetisi = kompetisi[id as keyof typeof kompetisi];

  useEffect(() => {
    switch (id) {
      case "i2c":
        setPageColor({
          pg1: "#311b4a",
          pg2: "#1c1045 ",
          bg1: "#462f69",
          bg2: "#43306e",
          el1: "#7156b0",
          el2: "#8c56b0",
          txt1: "#c289e8",
          txt2: "#a289e8",
          accent: "#703dfc",
        });
        break;
      case "wdc":
        setPageColor({
          pg1: "#095947",
          pg2: "#094959",
          bg1: "#227365",
          bg2: "#227370",
          el1: "#51b0ad",
          el2: "#51b097",
          txt1: "#95edd6",
          txt2: "#95e7ed",
          accent: "#38fcbb",
        });
        break;
      case "muc":
        setPageColor({
          pg1: "#400E09",
          pg2: "#570815",
          bg1: "#78191D",
          bg2: "#783419",
          el1: "#ba3e11",
          el2: "#ba0d33",
          txt1: "#F78468",
          txt2: "#F567A6",
          accent: "#FCA22B",
        });
        break;
    }
  }, [id]);

  useSetRecoilState(navColors)({ bg1: pageColor.pg2, bg2: pageColor.el1, fg: pageColor.txt1 });

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
    return (
      <>
        <NextSeo
          description={`${k.abbreviation} ${k.description}`}
          title={`${k.abbreviation} - IFest#11`}
        />
        <ComingSoon date={k.date_available} />
      </>
    );

  return (
    <>
      <NextSeo
        description={`${k.abbreviation} ${k.description}`}
        title={`${k.abbreviation} - IFest#11`}
      />
      <div
        className="absolute top-0 -z-10 min-h-screen w-full"
        style={{ background: `linear-gradient(90deg, ${pageColor.pg1}, ${pageColor.pg2})` }}
      >
        <div className="flex h-screen flex-col items-center justify-center gap-4 px-4 lg:flex-row">
          <img alt={k.name.toLowerCase()} className="w-72 lg:w-1/4" src={k.img} />
          <div className="flex flex-col items-center justify-center gap-8">
            <div
              className="text-center text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg, ${pageColor.txt1}, ${pageColor.txt2})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
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
                    <div
                      className="flex flex-wrap items-center justify-center gap-1 rounded-full p-4"
                      style={{ backgroundColor: pageColor.pg1 }}
                    >
                      {getIcon(index)}
                      {r}
                    </div>
                  </div>
                );
              })}
            </div>
            <motion.button
              animate={{ opacity: 0.75 }}
              className="transition-transform hover:scale-125"
              initial={{ opacity: 0 }}
              onClick={() => contentRef.current?.scrollIntoView({ behavior: "smooth" })}
              transition={{ duration: 0.25 }}
            >
              <svg
                className="h-10 w-10 stroke-white"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.button>
          </div>
        </div>

        <div
          className=""
          ref={contentRef}
          style={{ background: `linear-gradient(180deg, ${pageColor.pg1}, ${pageColor.pg2})` }}
        >
          <div className="border-gray-700 p-8" style={{ backgroundColor: pageColor.bg1 }}>
            <div className="flex flex-col items-center gap-4">
              <div className="font-retroica text-3xl tracking-wider text-white">
                MORE ABOUT {k.abbreviation}
              </div>
              <div className="text-md w-full px-2 text-justify font-louisgeorgecafe font-thin text-white lg:px-[10rem] lg:text-center">
                {parse(String(k.long_description))}
              </div>
            </div>
            <div className="flex flex-col pt-4 font-louisgeorgecafe text-white lg:flex-row lg:items-center lg:justify-center lg:gap-6">
              <div
                className="rounded-full p-1"
                style={{
                  background: `linear-gradient(90deg, ${pageColor.el1}, ${pageColor.el2})`,
                }}
              >
                <button
                  className="flex w-full justify-center gap-1 rounded-full bg-[#272629] p-2 transition-all hover:bg-transparent"
                  onClick={() => setOpenPoster(true)}
                >
                  <div className="tracking-widest opacity-80">Lihat Poster</div>
                </button>
              </div>
              <Dialog
                className="relative z-50"
                onClose={() => setOpenPoster(false)}
                open={openPoster}
              >
                <div aria-hidden="true" className="fixed inset-0 bg-black/50" />
                <div className="fixed inset-0 flex items-center justify-center">
                  <Dialog.Panel className="flex h-full w-11/12 flex-col items-center justify-center gap-2 overflow-auto p-8">
                    <img
                      alt="poster"
                      className="h-full w-full object-contain object-center"
                      onClick={() => setOpenPoster(false)}
                      src={k.poster}
                    />
                  </Dialog.Panel>
                </div>
              </Dialog>
              <div className="py-2">
                <div
                  className="rounded-full p-1 transition-all hover:scale-105 hover:shadow-[0px_0px_60px_20px_#ffffff10]"
                  style={{
                    background: `linear-gradient(90deg, ${pageColor.el1}, ${pageColor.el2})`,
                  }}
                >
                  <a href="https://ifest.uajy.ac.id/dash" rel="noreferrer" target="_blank">
                    <button className="flex w-full justify-center gap-1 rounded-full p-2 ">
                      <div className="tracking-widest opacity-100">DAFTAR</div>
                    </button>
                  </a>
                </div>
              </div>
              <div
                className="rounded-full p-1 "
                style={{
                  background: `linear-gradient(90deg, ${pageColor.el1}, ${pageColor.el2})`,
                }}
              >
                <button
                  className="flex w-full justify-center gap-1 rounded-full bg-[#272629] p-2 transition-all hover:bg-transparent"
                  onClick={() => setOpenRulebook(true)}
                >
                  <div className="tracking-widest opacity-70 ">Lihat Rulebook</div>
                </button>
              </div>
              <Dialog
                className="relative z-50"
                onClose={() => setOpenRulebook(false)}
                open={openRuleBook}
              >
                <div aria-hidden="true" className="fixed inset-0 bg-black/50" />
                <div className="fixed inset-0 flex items-center justify-center">
                  <Dialog.Panel className="flex h-full w-11/12 flex-col items-center justify-center gap-0 overflow-auto p-8">
                    <iframe
                      className="h-screen w-full py-10"
                      onClick={() => setOpenRulebook(false)}
                      src={k.rulebook}
                    ></iframe>
                  </Dialog.Panel>
                </div>
              </Dialog>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-8 p-8 lg:px-24">
            {k.provision.map((provision, index) => {
              return (
                <div
                  className="rounded-lg border border-gray-700 p-4"
                  key={index}
                  style={{ backgroundColor: pageColor.bg2 }}
                >
                  <h3 className="pl-6 font-retroica text-2xl" style={{ color: pageColor.txt1 }}>
                    {provision.type}
                  </h3>
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

          <div className="flex flex-col items-center justify-center py-8">
            <div className="text-center font-retroica text-4xl" style={{ color: pageColor.txt1 }}>
              Timeline
            </div>
            {k.timeline.map((timeline, index) => {
              return (
                <div className="flex w-full flex-col items-center justify-center" key={index}>
                  <div className="w-fit rounded-xl pb-1" style={{ backgroundColor: pageColor.el2 }}>
                    <div
                      className="rounded-xl p-4 font-retroica text-white shadow-inner"
                      style={{ backgroundColor: pageColor.el2 }}
                    >
                      {timeline.name}
                    </div>
                  </div>
                  <div className="w-full lg:w-10/12 2xl:w-1/2">
                    <Chrono
                      cardHeight={50}
                      disableClickOnCircle
                      hideControls
                      items={timeline.data.map((item) => {
                        return {
                          title: item.name,
                          cardTitle: item.date,
                        };
                      })}
                      mode="VERTICAL_ALTERNATING"
                      theme={{
                        primary: "#716b90",
                        secondary: "transparent",
                        cardBgColor: `${pageColor.bg1}`,
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
            <div
              className="tracking-widest] text-center font-retroica text-5xl"
              style={{ color: pageColor.txt1 }}
            >
              PRIZE POOL
            </div>
            <div
              className="pb-6 pt-2 text-center font-retroica text-3xl"
              style={{ color: pageColor.txt2 }}
            >
              {k.prizepool.total}
            </div>
            <div className="grid gap-8 lg:grid-cols-3" id="fika">
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
                    <div className="flex flex-row items-center justify-center rounded-xl border border-gray-700 bg-[#111111] p-4 text-white transition duration-300 ease-in hover:scale-105 hover:text-[#241f3d] lg:flex-col">
                      <img
                        alt="/"
                        className={`${
                          index % 2 == 0 ? "order-0" : "order-1"
                        } w-32 p-4 lg:-order-none lg:w-48`}
                        src={distribution.image}
                      />
                      <div>
                        <div className="text-center font-retroica text-2xl">
                          {distribution.type}
                        </div>
                        {distribution.rewards.map((reward, index) => {
                          return (
                            <div className="flex gap-3 font-retroica" key={index}>
                              {reward === "Piala"
                                ? getIcon(4)
                                : reward === "Sertifikat Nasional"
                                ? getIcon(5)
                                : getIcon(index + 3)}
                              {reward}
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
            <div
              className="w-full rounded-xl border-gray-200 p-4 lg:w-10/12 2xl:w-1/2"
              style={{
                background: `linear-gradient(90deg, ${pageColor.bg1}, ${pageColor.bg2})`,
              }}
            >
              <div className="flex flex-col items-center justify-center text-center lg:flex-row lg:justify-start">
                <img alt="/" className="w-48" src="/images/announce.webp" />
                <div className="flex flex-col items-center gap-4 lg:items-start">
                  <div className="font-retroica text-2xl" style={{ color: pageColor.txt1 }}>
                    Tertarik? Ayo mendaftar!
                  </div>
                  <div className="text-center font-louisgeorgecafe text-white">
                    Ayo buktikan bakat dan kreativitasmu! Jangan cepat berpuas diri!
                  </div>
                  <div
                    className="rounded-full p-1"
                    style={{
                      background: `linear-gradient(90deg, ${pageColor.el1}, ${pageColor.el2})`,
                    }}
                  >
                    <a href="https://ifest.uajy.ac.id/dash" rel="noreferrer" target="_blank">
                      <button className="flex items-center gap-1 rounded-full bg-[#272629] p-2 font-retroica tracking-widest text-white opacity-100 transition hover:bg-transparent">
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
    </>
  );
};

export default Index;
