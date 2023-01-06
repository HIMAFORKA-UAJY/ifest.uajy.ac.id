import { Carousel } from "flowbite-react";
import { Card } from "flowbite-react";
import { FC } from "react";
import { FaWhatsapp } from "react-icons/all";
import { FaCertificate, FaMoneyBillWave } from "react-icons/all";
import "react-vertical-timeline-component/style.min.css";
import { Autoplay, EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import Footer from "../components/Footer";
import Layout from "../components/Layout";
import "./Sponsor.css";

const Sponsor: FC = () => {
  return (
    <Layout>
      <div className="absolute top-0 -z-10 h-screen w-screen bg-[#0A1828]">
        <div className="flex h-screen w-screen flex-col items-center justify-center">
          <div className="font-retroica text-2xl text-white">IFEST#11 Sponsorship</div>
          <div className="text-center font-retroica text-sm text-white">
            Tertarik dengan acara kami? Dukung kami dengan menjadi sponsor.
          </div>
          <div className="p-2"></div>
          <div className="w-full px-4 xl:hidden">
            <Swiper
              autoplay={{ delay: 2000 }}
              effect={"coverflow"}
              grabCursor={false}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
              }}
              modules={[Autoplay, EffectCoverflow]}
              className="mySwiper"
            >
              <SwiperSlide
                className="h-[32rem] w-[20rem]"
                style={{ border: "3px solid #5AA7C0", padding: "1rem" }}
              >
                <div className="flex h-full flex-col items-center justify-center gap-2 text-center ">
                  <img
                    className="w-32"
                    src="public\images\starslash.svg"
                    style={{ width: "3rem" }}
                    alt="/"
                  />
                  <div className="text-center font-retroica text-[#ffffff62]">Sponsor Bos</div>
                  <div className="font-retroica text-[#ffffff62]">Rp. 1.500.000</div>
                  <div className="font-retroica text-[#c5c5c5]">Benefits</div>
                  <div className="overflow-x-auto text-left font-retroica text-[#c5c5c5]">
                    <ul className="list-inside list-disc">
                      <li>Logo sponsor di website IFest#10 berukuran kecil.</li>
                      <li>Tautan situs web atau akun sosial media pada logo di website.</li>
                      <li>Logo sponsor pada media publikasi untuk setiap event.</li>
                      <li>Logo sponsor pada e-certificate untuk setiap event.</li>
                      <li>Logo sponsor pada after movie IFest#10.</li>
                      <li>Logo sponsor di website IFest#10 berukuran kecil.</li>
                      <li>Tautan situs web atau akun sosial media pada logo di website.</li>
                      <li>Logo sponsor pada media publikasi untuk setiap event.</li>
                      <li>Logo sponsor pada e-certificate untuk setiap event.</li>
                      <li>Logo sponsor pada after movie IFest#10.</li>
                      <li>Logo sponsor di website IFest#10 berukuran kecil.</li>
                      <li>Tautan situs web atau akun sosial media pada logo di website.</li>
                      <li>Logo sponsor pada media publikasi untuk setiap event.</li>
                      <li>Logo sponsor pada e-certificate untuk setiap event.</li>
                      <li>Logo sponsor pada after movie IFest#10.</li>
                      <li>Logo sponsor di website IFest#10 berukuran kecil.</li>
                      <li>Tautan situs web atau akun sosial media pada logo di website.</li>
                      <li>Logo sponsor pada media publikasi untuk setiap event.</li>
                      <li>Logo sponsor pada e-certificate untuk setiap event.</li>
                      <li>Logo sponsor pada after movie IFest#10.</li>
                    </ul>
                  </div>
                  <div className="rounded-md bg-gradient-to-b from-[#5AA7C0] via-[#926DAE] to-[#C76F89] p-1">
                    <button className="flex items-center gap-1 rounded-md bg-[#0A1828] px-4 py-1 text-white">
                      Order
                    </button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide
                className="h-[32rem] w-[20rem]"
                style={{ border: "3px solid #5AA7C0", padding: "1rem" }}
              >
                <div className="flex h-full flex-col items-center justify-center gap-2 text-center ">
                  <img
                    className="w-32"
                    src="public\images\starslash.svg"
                    style={{ width: "3rem" }}
                    alt="/"
                  />
                  <div className="text-center font-retroica text-[#ff69b4]">Gold</div>
                  <div className="font-retroica text-[#ffffff62]">Rp. 2.500.000</div>
                  <div className="font-retroica text-[#c5c5c5]">Benefits</div>
                  <div className="overflow-x-auto text-left font-retroica text-[#c5c5c5]">
                    <ul className="list-inside list-disc">
                      <li>Semua benefit dari Sponsorship Bos.</li>
                      <li>Iklan saat rehat/jeda acara berdurasi pendek.</li>
                    </ul>
                  </div>
                  <div className="rounded-md bg-gradient-to-b from-[#5AA7C0] via-[#926DAE] to-[#C76F89] p-1">
                    <button className="flex items-center gap-1 rounded-md bg-[#0A1828] px-4 py-1 text-white">
                      Order
                    </button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide
                className="h-[32rem] w-[20rem]"
                style={{ border: "3px solid #5AA7C0", padding: "1rem" }}
              >
                <div className="flex h-full flex-col items-center justify-center gap-2 text-center ">
                  <img
                    className="w-32"
                    src="public\images\starslash.svg"
                    style={{ width: "3rem" }}
                    alt="/"
                  />
                  <div className="text-center font-retroica text-[#ff69b4]">Platinum</div>
                  <div className="font-retroica text-[#ffffff62]">Rp. 4.000.000</div>
                  <div className="font-retroica text-[#c5c5c5]">Benefits</div>
                  <div className="overflow-x-auto text-left font-retroica text-[#c5c5c5]">
                    <ul className="list-inside list-disc">
                      <li>Semua benefit dari Gold Sponsorship.</li>
                      <li>Iklan adlibs oleh MC.</li>
                      <li>Paid promote oleh akun panitia.</li>
                      <li>Slot iklan khusus di website.</li>
                    </ul>
                  </div>
                  <div className="rounded-md bg-gradient-to-b from-[#5AA7C0] via-[#926DAE] to-[#C76F89] p-1">
                    <button className="flex items-center gap-1 rounded-md bg-[#0A1828] px-4 py-1 text-white">
                      Order
                    </button>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide
                className="h-[32rem] w-[20rem]"
                style={{ border: "3px solid #5AA7C0", padding: "1rem" }}
              >
                <div className="flex h-full flex-col items-center justify-center gap-2 text-center ">
                  <img
                    className="w-32"
                    src="public\images\starslash.svg"
                    style={{ width: "3rem" }}
                    alt="/"
                  />
                  <div className="text-center font-retroica text-[#ff69b4]">Platinum</div>
                  <div className="font-retroica text-[#ffffff62]">Rp. 4.000.000</div>
                  <div className="font-retroica text-[#c5c5c5]">Benefits</div>
                  <div className="overflow-x-auto text-left font-retroica text-[#c5c5c5]">
                    <ul className="list-inside list-disc">
                      <li>Semua benefit dari Gold Sponsorship.</li>
                      <li>Iklan adlibs oleh MC.</li>
                      <li>Paid promote oleh akun panitia.</li>
                      <li>Slot iklan khusus di website.</li>
                    </ul>
                  </div>
                  <div className="rounded-md bg-gradient-to-b from-[#5AA7C0] via-[#926DAE] to-[#C76F89] p-1">
                    <button className="flex items-center gap-1 rounded-md bg-[#0A1828] px-4 py-1 text-white">
                      Order
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="hidden w-full justify-center gap-8 pt-10 xl:flex">
            <div>
              <Card
                horizontal
                className="m-auto flex h-[40rem] w-80 justify-center border-4 !border-[#5AA7C0] !bg-[#0A1828] pt-0 text-white transition duration-300 ease-in hover:scale-110"
              >
                <div>
                  <img
                    className="m-auto block w-52 drop-shadow-lg"
                    src="public\images\starslash.svg"
                    style={{ width: "4rem" }}
                    alt="/"
                  />
                </div>
                <div className="text-center font-retroica text-2xl text-[#ffffff62]">
                  Sponsor Bos
                </div>
                <div className="mx-auto flex gap-3 font-retroica text-[#ffffff]">
                  <FaMoneyBillWave /> Rp1.500.000
                </div>
                <div className="font-retroica text-[#c5c5c5]">Benefits</div>
                <div className="h-40 overflow-x-auto text-left font-retroica text-[#c5c5c5]">
                  <ul className="list-inside list-disc">
                    <li>Logo sponsor di website IFest#10 berukuran kecil.</li>
                    <li>Tautan situs web atau akun sosial media pada logo di website.</li>
                    <li>Logo sponsor pada media publikasi untuk setiap event.</li>
                    <li>Logo sponsor pada e-certificate untuk setiap event.</li>
                    <li>Logo sponsor pada after movie IFest#10.</li>
                    <li>Logo sponsor di website IFest#10 berukuran kecil.</li>
                    <li>Tautan situs web atau akun sosial media pada logo di website.</li>
                    <li>Logo sponsor pada media publikasi untuk setiap event.</li>
                    <li>Logo sponsor pada e-certificate untuk setiap event.</li>
                    <li>Logo sponsor pada after movie IFest#10.</li>
                    <li>Logo sponsor di website IFest#10 berukuran kecil.</li>
                    <li>Tautan situs web atau akun sosial media pada logo di website.</li>
                    <li>Logo sponsor pada media publikasi untuk setiap event.</li>
                    <li>Logo sponsor pada e-certificate untuk setiap event.</li>
                    <li>Logo sponsor pada after movie IFest#10.</li>
                    <li>Logo sponsor di website IFest#10 berukuran kecil.</li>
                    <li>Tautan situs web atau akun sosial media pada logo di website.</li>
                    <li>Logo sponsor pada media publikasi untuk setiap event.</li>
                    <li>Logo sponsor pada e-certificate untuk setiap event.</li>
                    <li>Logo sponsor pada after movie IFest#10.</li>
                  </ul>
                </div>
                <div className="rounded-md bg-gradient-to-b from-[#5AA7C0] via-[#926DAE] to-[#C76F89] p-1">
                  <button className="flex w-full items-center justify-center gap-1 rounded-md bg-[#0A1828] px-4 py-2 text-lg tracking-wide text-white">
                    Order
                  </button>
                </div>
              </Card>
            </div>
            <div>
              <Card
                horizontal
                className="m-auto flex h-[40rem] w-80 justify-center border-4 !border-[#5AA7C0] !bg-[#0A1828] pt-0 text-white transition duration-300 ease-in hover:scale-110"
              >
                <div>
                  <img
                    className="m-auto block w-52 drop-shadow-lg"
                    src="public\images\starslash.svg"
                    style={{ width: "4rem" }}
                    alt="/"
                  />
                </div>
                <div className="text-center font-retroica text-2xl text-[#ffffff62]">
                  Sponsor Juragan
                </div>
                <div className="mx-auto flex gap-3 font-retroica text-[#ffffff]">
                  <FaMoneyBillWave /> Rp2.500.000
                </div>
                <div className="font-retroica text-[#c5c5c5]">Benefits</div>
                <div className="h-40 overflow-x-auto text-left font-retroica text-[#c5c5c5]">
                  <ul className="list-inside list-disc">
                    <li>Semua benefit dari Silver Sponsorship.</li>
                    <li>Iklan saat rehat/jeda acara berdurasi pendek.</li>
                  </ul>
                </div>
                <div className="rounded-md bg-gradient-to-b from-[#5AA7C0] via-[#926DAE] to-[#C76F89] p-1">
                  <button className="flex w-full items-center justify-center gap-1 rounded-md bg-[#0A1828] px-4 py-2 text-lg tracking-wide text-white">
                    Order
                  </button>
                </div>
              </Card>
            </div>
            <div>
              <Card
                horizontal
                className="m-auto flex h-[40rem] w-80 justify-center border-4 !border-[#5AA7C0] !bg-[#0A1828] pt-0 text-white transition duration-300 ease-in hover:scale-110"
              >
                <div>
                  <img
                    className="m-auto block w-52 drop-shadow-lg"
                    src="public\images\starslash.svg"
                    style={{ width: "4rem" }}
                    alt="/"
                  />
                </div>
                <div className="text-center font-retroica text-2xl text-[#ffffff62]">
                  Sponsor Sultan
                </div>
                <div className="mx-auto flex gap-3 font-retroica text-[#ffffff]">
                  <FaMoneyBillWave /> Rp4.000.000
                </div>
                <div className="font-retroica text-[#c5c5c5]">Benefits</div>
                <div className="h-40 overflow-x-auto text-left font-retroica text-[#c5c5c5]">
                  <ul className="list-inside list-disc">
                    <li>Semua benefit dari Gold Sponsorship.</li>
                    <li>Iklan adlibs oleh MC.</li>
                    <li>Paid promote oleh akun panitia.</li>
                    <li>Slot iklan khusus di website.</li>
                  </ul>
                </div>
                <div className="rounded-md bg-gradient-to-b from-[#5AA7C0] via-[#926DAE] to-[#C76F89] p-1">
                  <button className="flex w-full items-center justify-center gap-1 rounded-md bg-[#0A1828] px-4 py-2 text-lg tracking-wide text-white">
                    Order
                  </button>
                </div>
              </Card>
            </div>
            <div>
              <Card
                horizontal
                className="m-auto flex h-[40rem] w-80 justify-center border-4 !border-[#5AA7C0] !bg-[#0A1828] pt-0 text-white transition duration-300 ease-in hover:scale-110"
              >
                <div>
                  <img
                    className="m-auto block w-52 drop-shadow-lg"
                    src="public\images\starslash.svg"
                    style={{ width: "4rem" }}
                    alt="/"
                  />
                </div>
                <div className="text-center font-retroica text-2xl text-[#ffffff62]">
                  Sponsor Sultan
                </div>
                <div className="mx-auto flex gap-3 font-retroica text-[#ffffff]">
                  <FaMoneyBillWave /> Rp4.000.000
                </div>
                <div className="font-retroica text-[#c5c5c5]">Benefits</div>
                <div className="h-40 overflow-x-auto text-left font-retroica text-[#c5c5c5]">
                  <ul className="list-inside list-disc">
                    <li>Semua benefit dari Gold Sponsorship.</li>
                    <li>Iklan adlibs oleh MC.</li>
                    <li>Paid promote oleh akun panitia.</li>
                    <li>Slot iklan khusus di website.</li>
                  </ul>
                </div>
                <div className="rounded-md bg-gradient-to-b from-[#5AA7C0] via-[#926DAE] to-[#C76F89] p-1">
                  <button className="flex w-full items-center justify-center gap-1 rounded-md bg-[#0A1828] px-4 py-2 text-lg tracking-wide text-white">
                    Order
                  </button>
                </div>
              </Card>
            </div>
          </div>
        </div>

        <div className="bg-[#0A1828]">
          <div className="flex w-screen flex-col items-center justify-center gap-2">
            <div className="font-retroica text-4xl text-white">Contact Us</div>
            <div className="font-retroica text-base text-white">
              Masih ada yang bingung? Yuk kontak kami.
            </div>
            <div className="h-64 w-64">
              <Carousel leftControl=" " rightControl=" " indicators={false}>
                <div className="flex justify-center text-center text-white">
                  <table className="table-cell border-separate rounded-xl border-[6px] border-[#926DAE] p-2">
                    <thead>
                      <tr>
                        <th className="border-b-[6px] border-[#926DAE]">Sponsor</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div>0882 1609 9529</div>
                          <button className="mx-auto flex items-center justify-center gap-1 rounded-2xl bg-gradient-to-br from-[#5AA7C0] via-[#926DAE] to-[#C76F89] px-2">
                            <FaWhatsapp />
                            Tessa
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div>0895 6221 76067</div>
                          <button className="mx-auto flex items-center justify-center gap-1 rounded-2xl bg-gradient-to-br from-[#5AA7C0] via-[#926DAE] to-[#C76F89] px-2">
                            <FaWhatsapp />
                            Rinn
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Carousel>
            </div>
          </div>
        </div>

        <Footer className="bg-[#0A1828] p-4" />
      </div>
    </Layout>
  );
};

export default Sponsor;
