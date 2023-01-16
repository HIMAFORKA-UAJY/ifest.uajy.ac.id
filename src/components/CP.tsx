import { motion } from "framer-motion";
import { CSSProperties, FC } from "react";
import { FaLine, FaWhatsapp } from "react-icons/all";
import { Grid, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import "./CP.css";

const CP: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="bg-[#2b2265] pt-24 lg:pb-12"
    >
      <div className="flex w-screen flex-col items-center justify-center gap-0">
        <div className="font-retron2000 text-5xl font-bold text-white">Contact Us</div>
        <div className="p-5 font-louisgeorgecafe text-base text-white">
          Ada pertanyaan? Silakan ajukan ^_^
        </div>
        <div className="lg-flex h-[20rem] w-[40rem] md:w-[48rem] lg:w-[64rem]">
          <Swiper
            breakpoints={{
              640: {
                slidesPerView: 1,
                navigation: {
                  enabled: false,
                },
              },
              768: {
                slidesPerView: 2,
                navigation: {
                  enabled: true,
                },
              },
              1024: {
                slidesPerView: 3,
                navigation: {
                  enabled: true,
                },
              },
            }}
            grid={{
              rows: 1,
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
            <SwiperSlide className="flex justify-center text-center text-white">
              <table className="table-cell border-separate rounded-xl border-[6px] border-[#ba87fb] p-2">
                <thead>
                  <tr>
                    <th className="border-b-[6px] border-[#ba87fb]">I2C</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="flex flex-col items-center">
                        <div className="flex items-center gap-1 font-louisgeorgecafe">
                          <a
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                            href="https://wa.me/6282259751239"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FaWhatsapp className="mr-2" />
                            +62 822-5975-1239
                          </a>
                        </div>
                        <div className="flex items-center gap-1 font-louisgeorgecafe">
                          <FaLine />
                          lalariel
                        </div>
                      </div>
                      <button
                        className="mx-auto rounded-2xl bg-[#976dce] bg-gradient-to-br from-[#5e78b9] px-2 font-louisgeorgecafe"
                        style={{ cursor: "default" }}
                      >
                        Ariel
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="flex flex-col items-center">
                        <div className="flex items-center gap-1 font-louisgeorgecafe">
                          <a
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                            href="https://wa.me/6282225553400"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FaWhatsapp className="mr-2" />
                            +62 822-2555-3400
                          </a>
                        </div>
                        <div className="flex items-center gap-1 font-louisgeorgecafe">
                          <FaLine />
                          wibowolala31
                        </div>
                      </div>
                      <button
                        className="mx-auto rounded-2xl bg-[#976dce] bg-gradient-to-br from-[#5e78b9] px-2 font-louisgeorgecafe"
                        style={{ cursor: "default" }}
                      >
                        Lala
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center text-center text-white">
              <table className="table-cell border-separate rounded-xl border-[6px] border-[#9DCE6D] p-2">
                <thead>
                  <tr>
                    <th className="border-b-[6px] border-[#9DCE6D]">WDC</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="flex flex-col items-center">
                        <div className="flex items-center gap-1 font-louisgeorgecafe">
                          <a
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                            href="https://wa.me/6282151172630"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FaWhatsapp className="mr-2" />
                            +62 821-5117-2630
                          </a>
                        </div>
                        <div className="flex items-center gap-1 font-louisgeorgecafe">
                          <FaLine />
                          thisispasha
                        </div>
                      </div>
                      <button
                        className="mx-auto rounded-2xl bg-[#5d8e9b] bg-gradient-to-br from-[#7fa757] px-2 font-louisgeorgecafe"
                        style={{ cursor: "default" }}
                      >
                        Pasha
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="flex flex-col items-center">
                        <div className="flex items-center gap-1 font-louisgeorgecafe">
                          <a
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                            href="https://wa.me/628123470303"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FaWhatsapp className="mr-2" />
                            +62 812-3470-303
                          </a>
                        </div>
                        <div className="flex items-center gap-1 font-louisgeorgecafe">
                          <FaLine />
                          ayas.23
                        </div>
                      </div>
                      <button
                        className="mx-auto rounded-2xl bg-[#5d8e9b] bg-gradient-to-br from-[#7fa757] px-2 font-louisgeorgecafe"
                        style={{ cursor: "default" }}
                      >
                        Ayas
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </SwiperSlide>
            {/* <div className="text-white text-center flex justify-center">
                        <table className="table-cell border-separate border-[6px] border-[#ff8064] rounded-xl p-2">
                            <thead>
                                <tr>
                                    <th className="border-b-[6px] border-[#ff8064]">CP</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div>0895 3695 59006</div>
                                        <button className="bg-gradient-to-br from-[#fe8064] bg-[#feb783] px-2 rounded-2xl flex items-center justify-center gap-1 mx-auto">
                                            <FaWhatsapp />
                                            Joshua
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div>0856 0011 9070</div>
                                        <button className="bg-gradient-to-br from-[#fe8064] bg-[#feb783] px-2 rounded-2xl flex items-center justify-center gap-1 mx-auto">
                                            <FaWhatsapp />
                                            Dewi
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div> */}
            <SwiperSlide className="flex justify-center text-center text-white">
              <table className="table-cell border-separate rounded-xl border-[6px] border-[#926DAE] p-2">
                <thead>
                  <tr>
                    <th className="border-b-[6px] border-[#926DAE]">Sponsor</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="flex flex-col items-center">
                        <div className="flex items-center gap-1 font-louisgeorgecafe">
                          <a
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                            href="https://wa.me/628993694969"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FaWhatsapp className="mr-2" />
                            +62 899-3694-969
                          </a>
                        </div>
                        <div className="flex items-center gap-1 font-louisgeorgecafe">
                          <FaLine />
                          metiu321
                        </div>
                      </div>
                      <button
                        className="mx-auto rounded-2xl bg-gradient-to-br from-[#5AA7C0] via-[#926DAE] to-[#C76F89] px-2 font-louisgeorgecafe"
                        style={{ cursor: "default" }}
                      >
                        Matthew
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="flex flex-col items-center">
                        <div className="flex items-center gap-1 font-louisgeorgecafe">
                          <a
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                            href="https://wa.me/628164258899"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FaWhatsapp className="mr-2" />
                            +62 816-4258-899
                          </a>
                        </div>
                        <div className="flex items-center gap-1 font-louisgeorgecafe">
                          <FaLine />
                          axel.ckd
                        </div>
                      </div>
                      <button
                        className="mx-auto rounded-2xl bg-gradient-to-br from-[#5AA7C0] via-[#926DAE] to-[#C76F89] px-2 font-louisgeorgecafe"
                        style={{ cursor: "default" }}
                      >
                        Axel
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center text-center text-white">
              <table className="table-cell border-separate rounded-xl border-[6px] border-[#c47c41] p-2">
                <thead>
                  <tr>
                    <th className="border-b-[6px] border-[#c47c41]">Donor Darah</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="flex flex-col items-center">
                        <div className="flex items-center gap-1 font-louisgeorgecafe">
                          <a
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                            href="https://wa.me/6285714080699 "
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FaWhatsapp className="mr-2" />
                            +62 857-1408-0699
                          </a>
                        </div>
                        <div className="flex items-center gap-1 font-louisgeorgecafe">
                          <FaLine />
                          angelinaderrel
                        </div>
                      </div>
                      <button
                        className="mx-auto rounded-2xl bg-[#ca7f4a] bg-gradient-to-br from-[#c2533b] px-2 font-louisgeorgecafe"
                        style={{ cursor: "default" }}
                      >
                        Derrel
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="flex flex-col items-center">
                        <div className="flex items-center gap-1 font-louisgeorgecafe">
                          <a
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                            href="https://wa.me/6282334026619"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FaWhatsapp className="mr-2" />
                            +62 823-3402-6619
                          </a>
                        </div>
                        <div className="flex items-center gap-1 font-louisgeorgecafe">
                          <FaLine />
                          sa2st2ra
                        </div>
                      </div>
                      <button
                        className="mx-auto rounded-2xl bg-[#ca7f4a] bg-gradient-to-br from-[#c2533b] px-2 font-louisgeorgecafe"
                        style={{ cursor: "default" }}
                      >
                        Deta
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center text-center text-white">
              <table className="table-cell border-separate rounded-xl border-[6px] border-[#c441a8] p-2">
                <thead>
                  <tr>
                    <th className="border-b-[6px] border-[#c441a8]">MUC</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="flex flex-col items-center">
                        <div className="flex items-center gap-1 font-louisgeorgecafe">
                          <a
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                            href="https://wa.me/6282223072235"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FaWhatsapp className="mr-2" />
                            +62 822-2307-2235
                          </a>
                        </div>
                        <div className="flex items-center gap-1 font-louisgeorgecafe">
                          <FaLine />
                          nick_tedja
                        </div>
                      </div>
                      <button
                        className="mx-auto rounded-2xl bg-[#ca4aae] bg-gradient-to-br from-[#c23b8a] px-2 font-louisgeorgecafe"
                        style={{ cursor: "default" }}
                      >
                        Tedja
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="flex flex-col items-center">
                        <div className="flex items-center gap-1 font-louisgeorgecafe">
                          <a
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                            href="https://wa.me/62895369559006"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FaWhatsapp className="mr-2" />
                            +62 895-3695-59006
                          </a>
                        </div>
                        <div className="flex items-center gap-1 font-louisgeorgecafe">
                          <FaLine />
                          joshuapuniwan
                        </div>
                      </div>
                      <button
                        className="mx-auto rounded-2xl bg-[#ca4aae] bg-gradient-to-br from-[#c23b8a] px-2 font-louisgeorgecafe"
                        style={{ cursor: "default" }}
                      >
                        Joshua
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center text-center text-white">
              <table className="table-cell border-separate rounded-xl border-[6px] border-[#41c0c4] p-2">
                <thead>
                  <tr>
                    <th className="border-b-[6px] border-[#41c0c4]">Seminar Nasional</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="flex flex-col items-center">
                        <div className="flex items-center gap-1 font-louisgeorgecafe">
                          <a
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                            href="https://wa.me/6287731398107"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FaWhatsapp className="mr-2" />
                            +62 877-3139-8107
                          </a>
                        </div>
                        <div className="flex items-center gap-1 font-louisgeorgecafe">
                          <FaLine />
                          bagasrraditya
                        </div>
                      </div>
                      <button
                        className="mx-auto rounded-2xl bg-[#3f90a8] bg-gradient-to-br from-[#30a097] px-2 font-louisgeorgecafe"
                        style={{ cursor: "default" }}
                      >
                        Radit
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="flex flex-col items-center">
                        <div className="flex items-center gap-1 font-louisgeorgecafe">
                          <a
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                            href="https://wa.me/6288216099529"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FaWhatsapp className="mr-2" />
                            +62 882-1609-9529
                          </a>
                        </div>
                        <div className="flex items-center gap-1 font-louisgeorgecafe">
                          <FaLine />
                          thessangelina
                        </div>
                      </div>
                      <button
                        className="mx-auto rounded-2xl bg-[#3f90a8] bg-gradient-to-br from-[#30a097] px-2 font-louisgeorgecafe"
                        style={{ cursor: "default" }}
                      >
                        Thessa
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center text-center text-white">
              <table className="table-cell border-separate rounded-xl border-[6px] border-[#b0c441] p-2">
                <thead>
                  <tr>
                    <th className="border-b-[6px] border-[#b0c441]">IFEST Store</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="flex flex-col items-center">
                        <div className="flex items-center gap-1 font-louisgeorgecafe">
                          <a
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                            href="https://wa.me/6282151779891"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FaWhatsapp className="mr-2" />
                            +62 821-5177-9891
                          </a>
                        </div>
                        <div className="flex items-center gap-1 font-louisgeorgecafe">
                          <FaLine />
                          jeanflo
                        </div>
                      </div>
                      <button
                        className="mx-auto rounded-2xl bg-[#7c9636] bg-gradient-to-br from-[#9b992f] px-2 font-louisgeorgecafe"
                        style={{ cursor: "default" }}
                      >
                        Jeany
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="flex flex-col items-center">
                        <div className="flex items-center gap-1 font-louisgeorgecafe">
                          <a
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                            href="https://wa.me/6285600119070"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <FaWhatsapp className="mr-2" />
                            +62 856-0011-9070
                          </a>
                        </div>
                        <div className="flex items-center gap-1 font-louisgeorgecafe">
                          <FaLine />
                          vriyasdewi
                        </div>
                      </div>
                      <button
                        className="mx-auto rounded-2xl bg-[#7c9636] bg-gradient-to-br from-[#9b992f] px-2 font-louisgeorgecafe"
                        style={{ cursor: "default" }}
                      >
                        Dewi
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </motion.div>
  );
};

export default CP;
