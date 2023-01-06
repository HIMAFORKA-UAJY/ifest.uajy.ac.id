import { Carousel } from "flowbite-react";
import { FC } from "react";
import { FaWhatsapp } from "react-icons/all";
import { Autoplay, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/grid";
import 'swiper/css/navigation';
import "swiper/css/pagination";

import { Card } from "flowbite-react";
import { FaCertificate, FaMoneyBillWave } from "react-icons/all";
import 'react-vertical-timeline-component/style.min.css';
import './Sponsor.css'

const Sponsor: FC = () => {
    return (
      <Layout>
        <div className="bg-[#0A1828] -z-10 absolute top-0 h-screen w-screen">
          <div className="flex flex-col justify-center items-center h-screen w-screen">
            <div className="font-retroica text-2xl text-white">
              IFEST#11 Sponsorship
            </div>
            <div className="font-retroica text-sm text-white text-center">
              Tertarik dengan acara kami? Dukung kami dengan menjadi sponsor.
            </div>
            <div className="p-2"></div>
            <div className="xl:hidden w-full px-4">
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
                  className="w-[20rem] h-[32rem]"
                  style={{ border: "3px solid #5AA7C0", padding: "1rem" }}
                >
                  <div className="text-center flex gap-2 flex-col h-full items-center justify-center ">
                    <img
                      className="w-32"
                      src="public\images\starslash.svg"
                      style={{ width: "3rem" }}
                      alt="/"
                    />
                    <div className="font-retroica text-[#ffffff62] text-center">
                      Sponsor Bos
                    </div>
                    <div className="font-retroica text-[#ffffff62]">
                      Rp. 1.500.000
                    </div>
                    <div className="font-retroica text-[#c5c5c5]">Benefits</div>
                    <div className="font-retroica text-[#c5c5c5] overflow-x-auto text-left">
                      <ul className="list-inside list-disc">
                        <li>
                          Logo sponsor di website IFest#10 berukuran kecil.
                        </li>
                        <li>
                          Tautan situs web atau akun sosial media pada logo di
                          website.
                        </li>
                        <li>
                          Logo sponsor pada media publikasi untuk setiap event.
                        </li>
                        <li>
                          Logo sponsor pada e-certificate untuk setiap event.
                        </li>
                        <li>Logo sponsor pada after movie IFest#10.</li>
                        <li>
                          Logo sponsor di website IFest#10 berukuran kecil.
                        </li>
                        <li>
                          Tautan situs web atau akun sosial media pada logo di
                          website.
                        </li>
                        <li>
                          Logo sponsor pada media publikasi untuk setiap event.
                        </li>
                        <li>
                          Logo sponsor pada e-certificate untuk setiap event.
                        </li>
                        <li>Logo sponsor pada after movie IFest#10.</li>
                        <li>
                          Logo sponsor di website IFest#10 berukuran kecil.
                        </li>
                        <li>
                          Tautan situs web atau akun sosial media pada logo di
                          website.
                        </li>
                        <li>
                          Logo sponsor pada media publikasi untuk setiap event.
                        </li>
                        <li>
                          Logo sponsor pada e-certificate untuk setiap event.
                        </li>
                        <li>Logo sponsor pada after movie IFest#10.</li>
                        <li>
                          Logo sponsor di website IFest#10 berukuran kecil.
                        </li>
                        <li>
                          Tautan situs web atau akun sosial media pada logo di
                          website.
                        </li>
                        <li>
                          Logo sponsor pada media publikasi untuk setiap event.
                        </li>
                        <li>
                          Logo sponsor pada e-certificate untuk setiap event.
                        </li>
                        <li>Logo sponsor pada after movie IFest#10.</li>
                      </ul>
                    </div>
                    <div className="bg-gradient-to-b from-[#5AA7C0] via-[#926DAE] to-[#C76F89] p-1 rounded-md">
                      <button className="bg-[#0A1828] px-4 py-1 rounded-md flex gap-1 items-center text-white">
                        Order
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide
                  className="w-[20rem] h-[32rem]"
                  style={{ border: "3px solid #5AA7C0", padding: "1rem" }}
                >
                  <div className="text-center flex gap-2 flex-col h-full items-center justify-center ">
                    <img
                      className="w-32"
                      src="public\images\starslash.svg"
                      style={{ width: "3rem" }}
                      alt="/"
                    />
                    <div className="font-retroica text-[#ff69b4] text-center">
                      Gold
                    </div>
                    <div className="font-retroica text-[#ffffff62]">
                      Rp. 2.500.000
                    </div>
                    <div className="font-retroica text-[#c5c5c5]">Benefits</div>
                    <div className="font-retroica text-[#c5c5c5] overflow-x-auto text-left">
                      <ul className="list-inside list-disc">
                        <li>Semua benefit dari Sponsorship Bos.</li>
                        <li>Iklan saat rehat/jeda acara berdurasi pendek.</li>
                      </ul>
                    </div>
                    <div className="bg-gradient-to-b from-[#5AA7C0] via-[#926DAE] to-[#C76F89] p-1 rounded-md">
                      <button className="bg-[#0A1828] px-4 py-1 rounded-md flex gap-1 items-center text-white">
                        Order
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide
                  className="w-[20rem] h-[32rem]"
                  style={{ border: "3px solid #5AA7C0", padding: "1rem" }}
                >
                  <div className="text-center flex gap-2 flex-col h-full items-center justify-center ">
                    <img
                      className="w-32"
                      src="public\images\starslash.svg"
                      style={{ width: "3rem" }}
                      alt="/"
                    />
                    <div className="font-retroica text-[#ff69b4] text-center">
                      Platinum
                    </div>
                    <div className="font-retroica text-[#ffffff62]">
                      Rp. 4.000.000
                    </div>
                    <div className="font-retroica text-[#c5c5c5]">Benefits</div>
                    <div className="font-retroica text-[#c5c5c5] overflow-x-auto text-left">
                      <ul className="list-inside list-disc">
                        <li>Semua benefit dari Gold Sponsorship.</li>
                        <li>Iklan adlibs oleh MC.</li>
                        <li>Paid promote oleh akun panitia.</li>
                        <li>Slot iklan khusus di website.</li>
                      </ul>
                    </div>
                    <div className="bg-gradient-to-b from-[#5AA7C0] via-[#926DAE] to-[#C76F89] p-1 rounded-md">
                      <button className="bg-[#0A1828] px-4 py-1 rounded-md flex gap-1 items-center text-white">
                        Order
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide
                  className="w-[20rem] h-[32rem]"
                  style={{ border: "3px solid #5AA7C0", padding: "1rem" }}
                >
                  <div className="text-center flex gap-2 flex-col h-full items-center justify-center ">
                    <img
                      className="w-32"
                      src="public\images\starslash.svg"
                      style={{ width: "3rem" }}
                      alt="/"
                    />
                    <div className="font-retroica text-[#ff69b4] text-center">
                      Platinum
                    </div>
                    <div className="font-retroica text-[#ffffff62]">
                      Rp. 4.000.000
                    </div>
                    <div className="font-retroica text-[#c5c5c5]">Benefits</div>
                    <div className="font-retroica text-[#c5c5c5] overflow-x-auto text-left">
                      <ul className="list-inside list-disc">
                        <li>Semua benefit dari Gold Sponsorship.</li>
                        <li>Iklan adlibs oleh MC.</li>
                        <li>Paid promote oleh akun panitia.</li>
                        <li>Slot iklan khusus di website.</li>
                      </ul>
                    </div>
                    <div className="bg-gradient-to-b from-[#5AA7C0] via-[#926DAE] to-[#C76F89] p-1 rounded-md">
                      <button className="bg-[#0A1828] px-4 py-1 rounded-md flex gap-1 items-center text-white">
                        Order
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="hidden xl:flex w-full justify-center gap-8 pt-10">
              <div>
                <Card
                  horizontal
                  className="h-[40rem] w-80 flex justify-center !bg-[#0A1828] !border-[#5AA7C0] border-4 text-white hover:scale-110 transition ease-in duration-300 m-auto pt-0"
                >
                  <div>
                    <img
                      className="w-52 block m-auto drop-shadow-lg"
                      src="public\images\starslash.svg"
                      style={{ width: "4rem" }}
                      alt="/"
                    />
                  </div>
                  <div className="font-retroica text-center text-2xl text-[#ffffff62]">
                    Sponsor Bos
                  </div>
                  <div className="font-retroica flex gap-3 text-[#ffffff] mx-auto">
                    <FaMoneyBillWave /> Rp1.500.000
                  </div>
                  <div className="font-retroica text-[#c5c5c5]">Benefits</div>
                  <div className="font-retroica text-[#c5c5c5] overflow-x-auto text-left h-40">
                    <ul className="list-inside list-disc">
                      <li>Logo sponsor di website IFest#10 berukuran kecil.</li>
                      <li>
                        Tautan situs web atau akun sosial media pada logo di
                        website.
                      </li>
                      <li>
                        Logo sponsor pada media publikasi untuk setiap event.
                      </li>
                      <li>
                        Logo sponsor pada e-certificate untuk setiap event.
                      </li>
                      <li>Logo sponsor pada after movie IFest#10.</li>
                      <li>Logo sponsor di website IFest#10 berukuran kecil.</li>
                      <li>
                        Tautan situs web atau akun sosial media pada logo di
                        website.
                      </li>
                      <li>
                        Logo sponsor pada media publikasi untuk setiap event.
                      </li>
                      <li>
                        Logo sponsor pada e-certificate untuk setiap event.
                      </li>
                      <li>Logo sponsor pada after movie IFest#10.</li>
                      <li>Logo sponsor di website IFest#10 berukuran kecil.</li>
                      <li>
                        Tautan situs web atau akun sosial media pada logo di
                        website.
                      </li>
                      <li>
                        Logo sponsor pada media publikasi untuk setiap event.
                      </li>
                      <li>
                        Logo sponsor pada e-certificate untuk setiap event.
                      </li>
                      <li>Logo sponsor pada after movie IFest#10.</li>
                      <li>Logo sponsor di website IFest#10 berukuran kecil.</li>
                      <li>
                        Tautan situs web atau akun sosial media pada logo di
                        website.
                      </li>
                      <li>
                        Logo sponsor pada media publikasi untuk setiap event.
                      </li>
                      <li>
                        Logo sponsor pada e-certificate untuk setiap event.
                      </li>
                      <li>Logo sponsor pada after movie IFest#10.</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-b from-[#5AA7C0] via-[#926DAE] to-[#C76F89] p-1 rounded-md">
                    <button className="bg-[#0A1828] px-4 py-2 rounded-md flex gap-1 items-center text-white w-full justify-center text-lg tracking-wide">
                      Order
                    </button>
                  </div>
                </Card>
              </div>
              <div>
                <Card
                  horizontal
                  className="h-[40rem] w-80 flex justify-center !bg-[#0A1828] !border-[#5AA7C0] border-4 text-white hover:scale-110 transition ease-in duration-300 m-auto pt-0"
                >
                  <div>
                    <img
                      className="w-52 block m-auto drop-shadow-lg"
                      src="public\images\starslash.svg"
                      style={{ width: "4rem" }}
                      alt="/"
                    />
                  </div>
                  <div className="font-retroica text-center text-2xl text-[#ffffff62]">
                    Sponsor Juragan
                  </div>
                  <div className="font-retroica flex gap-3 text-[#ffffff] mx-auto">
                    <FaMoneyBillWave /> Rp2.500.000
                  </div>
                  <div className="font-retroica text-[#c5c5c5]">Benefits</div>
                  <div className="font-retroica text-[#c5c5c5] overflow-x-auto text-left h-40">
                    <ul className="list-inside list-disc">
                      <li>Semua benefit dari Silver Sponsorship.</li>
                      <li>Iklan saat rehat/jeda acara berdurasi pendek.</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-b from-[#5AA7C0] via-[#926DAE] to-[#C76F89] p-1 rounded-md">
                    <button className="bg-[#0A1828] px-4 py-2 rounded-md flex gap-1 items-center text-white w-full justify-center text-lg tracking-wide">
                      Order
                    </button>
                  </div>
                </Card>
              </div>
              <div>
                <Card
                  horizontal
                  className="h-[40rem] w-80 flex justify-center !bg-[#0A1828] !border-[#5AA7C0] border-4 text-white hover:scale-110 transition ease-in duration-300 m-auto pt-0"
                >
                  <div>
                    <img
                      className="w-52 block m-auto drop-shadow-lg"
                      src="public\images\starslash.svg"
                      style={{ width: "4rem" }}
                      alt="/"
                    />
                  </div>
                  <div className="font-retroica text-center text-2xl text-[#ffffff62]">
                    Sponsor Sultan
                  </div>
                  <div className="font-retroica flex gap-3 text-[#ffffff] mx-auto">
                    <FaMoneyBillWave /> Rp4.000.000
                  </div>
                  <div className="font-retroica text-[#c5c5c5]">Benefits</div>
                  <div className="font-retroica text-[#c5c5c5] overflow-x-auto text-left h-40">
                    <ul className="list-inside list-disc">
                      <li>Semua benefit dari Gold Sponsorship.</li>
                      <li>Iklan adlibs oleh MC.</li>
                      <li>Paid promote oleh akun panitia.</li>
                      <li>Slot iklan khusus di website.</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-b from-[#5AA7C0] via-[#926DAE] to-[#C76F89] p-1 rounded-md">
                    <button className="bg-[#0A1828] px-4 py-2 rounded-md flex gap-1 items-center text-white w-full justify-center text-lg tracking-wide">
                      Order
                    </button>
                  </div>
                </Card>
              </div>
              <div>
                <Card
                  horizontal
                  className="h-[40rem] w-80 flex justify-center !bg-[#0A1828] !border-[#5AA7C0] border-4 text-white hover:scale-110 transition ease-in duration-300 m-auto pt-0"
                >
                  <div>
                    <img
                      className="w-52 block m-auto drop-shadow-lg"
                      src="public\images\starslash.svg"
                      style={{ width: "4rem" }}
                      alt="/"
                    />
                  </div>
                  <div className="font-retroica text-center text-2xl text-[#ffffff62]">
                    Sponsor Sultan
                  </div>
                  <div className="font-retroica flex gap-3 text-[#ffffff] mx-auto">
                    <FaMoneyBillWave /> Rp4.000.000
                  </div>
                  <div className="font-retroica text-[#c5c5c5]">Benefits</div>
                  <div className="font-retroica text-[#c5c5c5] overflow-x-auto text-left h-40">
                    <ul className="list-inside list-disc">
                      <li>Semua benefit dari Gold Sponsorship.</li>
                      <li>Iklan adlibs oleh MC.</li>
                      <li>Paid promote oleh akun panitia.</li>
                      <li>Slot iklan khusus di website.</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-b from-[#5AA7C0] via-[#926DAE] to-[#C76F89] p-1 rounded-md">
                    <button className="bg-[#0A1828] px-4 py-2 rounded-md flex gap-1 items-center text-white w-full justify-center text-lg tracking-wide">
                      Order
                    </button>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          <div className="bg-[#0A1828]">
            <div className="flex flex-col gap-2 justify-center items-center w-screen">
              <div className="font-retroica text-4xl text-white">
                Contact Us
              </div>
              <div className="font-retroica text-base text-white">
                Masih ada yang bingung? Yuk kontak kami.
              </div>
              <div className="h-64 w-64">
                <Carousel leftControl=" " rightControl=" " indicators={false}>
                  <div className="text-white text-center flex justify-center">
                    <table className="table-cell border-separate border-[6px] border-[#926DAE] rounded-xl p-2">
                      <thead>
                        <tr>
                          <th className="border-b-[6px] border-[#926DAE]">
                            Sponsor
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div>0882 1609 9529</div>
                            <button className="bg-gradient-to-br from-[#5AA7C0] via-[#926DAE] to-[#C76F89] px-2 rounded-2xl flex items-center justify-center gap-1 mx-auto">
                              <FaWhatsapp />
                              Tessa
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div>0895 6221 76067</div>
                            <button className="bg-gradient-to-br from-[#5AA7C0] via-[#926DAE] to-[#C76F89] px-2 rounded-2xl flex items-center justify-center gap-1 mx-auto">
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
