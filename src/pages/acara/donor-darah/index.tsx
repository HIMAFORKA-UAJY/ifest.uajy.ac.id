import CP from "@/components/CP";
import ComingSoon from "@/components/ComingSoon";
import Footer from "@/components/Footer";
import RegistrationClosed from "@/components/RegistrationClosed";
import acara from "@/data/acara.json";
import { navColors } from "@/recoil/atoms";
import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";
import parse from "html-react-parser";
import moment from "moment-timezone";
import { NextSeo } from "next-seo";
import { useRef, useState } from "react";
import { Chrono } from "react-chrono";
import { useSetRecoilState } from "recoil";

const Index = () => {
  useSetRecoilState(navColors)({ bg1: "#1e1529", bg2: "#614581", fg: "#b58de2" });
  const registrationContentRef = useRef<HTMLDivElement>(null);
  const benefitsContentRef = useRef<HTMLDivElement>(null);
  const [openPoster, setOpenPoster] = useState<boolean>(false);

  if (
    acara["donor-darah"].date_available == null ||
    moment()
      .tz("Asia/Jakarta")
      .diff(moment(acara["donor-darah"].date_available).tz("Asia/Jakarta")) < 0
  )
    return (
      <>
        <NextSeo
          description={`${acara["donor-darah"].name} ${acara["donor-darah"].description}`}
          title={`${acara["donor-darah"].name} - IFest#11`}
        />
        <ComingSoon date={acara["donor-darah"].date_available} />
      </>
    );

  if (
    moment().tz("Asia/Jakarta").diff(moment(acara["donor-darah"].date_end).tz("Asia/Jakarta")) > 0
  )
    return (
      <>
        <NextSeo
          description={`${acara["donor-darah"].name} ${acara["donor-darah"].description}`}
          title={`${acara["donor-darah"].name} - IFest#11`}
        />
        <RegistrationClosed />
      </>
    );

  return (
    <>
      <NextSeo
        description={`${acara["donor-darah"].short_description}`}
        title={`${acara["donor-darah"].name} - IFest#11`}
      />
      <div className="absolute top-0 -z-10 h-screen w-full bg-[url('/images/acara/donor-darah/bg-donor-darah.webp')] bg-cover bg-center bg-no-repeat">
        <div className="mx-auto flex h-full w-full flex-col items-center justify-center gap-8 px-8 lg:w-8/12">
          <div className="text-center font-retroica text-4xl font-bold text-white lg:text-5xl">
            <p className="inline text-[#ce5866]">Satu </p>
            <p className="inline">donasi Anda </p>
            <p className="inline lg:block">dapat selamatkan </p>
            <p className="inline text-[#ce5866]">3 nyawa </p>
            <p className="inline">!</p>
          </div>
          <div className="text-center font-retroica text-white lg:text-2xl">
            {acara["donor-darah"].short_description}
          </div>
          <div className="flex w-fit flex-col gap-8 font-retroica text-sm text-white lg:flex-row">
            <div className="rounded-full bg-[#ce5866] p-1 transition-transform hover:scale-110">
              <motion.button
                animate={{ opacity: 1 }}
                className="flex w-full items-center justify-center gap-1 rounded-full bg-[#ce5866] px-5 py-3"
                initial={{ opacity: 0 }}
                onClick={() =>
                  registrationContentRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  })
                }
                transition={{ duration: 0.25 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Cara Daftar
              </motion.button>
            </div>
            <div className="rounded-full border-2 border-[#ce5866] p-1 transition-transform hover:scale-110">
              <motion.button
                animate={{ opacity: 1 }}
                className="flex w-full items-center justify-center gap-1 rounded-full px-5 py-3"
                initial={{ opacity: 0 }}
                onClick={() =>
                  benefitsContentRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  })
                }
                transition={{ duration: 0.25 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Ketahui lebih lanjut
              </motion.button>
            </div>
            <div className="rounded-full bg-[#ce5866] p-1 transition-transform hover:scale-110">
              <motion.button
                animate={{ opacity: 1 }}
                className="flex w-full items-center justify-center gap-1 rounded-full bg-[#ce5866] px-5 py-3"
                initial={{ opacity: 0 }}
                onClick={() => setOpenPoster(true)}
                transition={{ duration: 0.25 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Poster
              </motion.button>
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
                      src={acara["donor-darah"].poster}
                    />
                  </Dialog.Panel>
                </div>
              </Dialog>
            </div>
          </div>
        </div>

        <div className="w-full bg-gradient-to-t from-black to-[#4a2b52] pt-12">
          <div className="text-center font-retroica text-3xl font-bold text-white lg:text-4xl">
            Diselenggarakan Oleh
          </div>
          <div className="grid gap-8 px-8 py-4 lg:grid-cols-3">
            {acara["donor-darah"].sponsors.map((sponsor, index) => {
              return (
                <div
                  className="flex flex-col items-center justify-center bg-[#53305a] py-10 text-center lg:py-4"
                  key={index}
                >
                  <img
                    alt={sponsor.name.toLowerCase()}
                    className="w-1/2 lg:w-1/4"
                    src={sponsor.img}
                  />
                </div>
              );
            })}
          </div>

          <div
            className="flex flex-col items-center justify-center py-12 text-center"
            ref={benefitsContentRef}
          >
            <h1 className="font-retroica text-4xl font-bold text-white">
              Apa sih manfaat donor darah?
            </h1>
            <div className="text-1xs font-retroica text-white">
              Sumber:{" "}
              <a className="text-[#ff95c1]" href="halodoc.com" target="_blank">
                Halodoc
              </a>
            </div>
            <div className="grid gap-8 px-8 py-4 lg:grid-cols-2">
              {acara["donor-darah"].benefits.map((benefit, index) => {
                return (
                  <div
                    className="flex flex-col items-center justify-center bg-[#1a203f42] p-10"
                    key={index}
                  >
                    <div className="flex items-center justify-center">
                      <img alt="icon" className="w-10" src={benefit.icon} />
                    </div>
                    <div className="items-center justify-center">
                      <div className="mt-2 text-center font-retroica text-2xl text-[#ff95c1]">
                        {benefit.benefit}
                      </div>
                    </div>
                    <div className="items-center justify-center">
                      <div className="mt-2 text-center font-louisgeorgecafe text-base text-white lg:px-20">
                        {benefit.description}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div
            className="flex flex-col items-center justify-center bg-gradient-to-r from-[#9b2a5a] to-[#b3362e] pt-12 text-center"
            ref={registrationContentRef}
          >
            <div className="font-retroica text-4xl font-bold text-white">
              Bagaimana sih prosesnya?
            </div>
            <div className="grid gap-8 lg:grid-cols-3">
              {acara["donor-darah"].steps.map((step, index) => {
                return (
                  <div className="flex flex-col items-center justify-center gap-4 p-12" key={index}>
                    <img alt="step" className="w-10" src={step.icon} />
                    <div className="text-center font-retroica text-2xl text-white">{step.step}</div>
                    <div className="text-center font-louisgeorgecafe text-sm text-white">
                      {parse(step.description)}
                    </div>
                    <span className="underline"></span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center pt-12">
            <div className="text-center font-retroica text-4xl text-[#ff95c1]">Timeline</div>
            {acara["donor-darah"].timeline.map((timeline, index) => {
              return (
                <div className="flex w-full flex-col items-center justify-center" key={index}>
                  <div className="w-fit rounded-xl bg-[#241f3d] pb-1">
                    <div className="rounded-xl bg-[#716B90] p-4 font-retroica text-white shadow-inner">
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

          <div className="flex flex-col items-center justify-center gap-4 px-8 py-12">
            <div className="font-retron2000 text-5xl font-bold text-white">Lokasi</div>
            <div className="flex w-full justify-center text-center text-white lg:w-8/12">
              <iframe
                className="rounded-xl"
                height="600"
                loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.098178319926!2d110.4139404153825!3d-7.779414179341817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a59f1fb2f2b45%3A0x20986e2fe9c79cdd!2sUniversitas%20Atma%20Jaya%20Yogyakarta%20-%20Kampus%203%20Gedung%20Bonaventura%20Babarsari!5e0!3m2!1sen!2sid!4v1673511394667!5m2!1sen!2sid"
                title="map"
                width="1920"
              />
            </div>
          </div>

          <CP get="donor-darah" />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Index;
