import { Carousel } from "flowbite-react";
import { motion } from "framer-motion";
import { FC } from "react";
import { FaWhatsapp } from "react-icons/all";

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
        <div className="hidden gap-8 pt-8 lg:flex">
          <div className="flex justify-center text-center text-white">
            <table className="table-cell border-separate rounded-xl border-[6px] border-[#ba87fb] p-2">
              <thead>
                <tr>
                  <th className="border-b-[6px] border-[#ba87fb]">I2C</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="font-retroica">0822 2555 3400</div>
                    <button className="mx-auto flex items-center justify-center gap-1 rounded-2xl bg-[#ba87fb] bg-gradient-to-br from-[#7fa2fe] px-2">
                      <FaWhatsapp />
                      Lala
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="font-retroica">0852 1024 5177</div>
                    <button className="mx-auto flex items-center justify-center gap-1 rounded-2xl bg-[#ba87fb] bg-gradient-to-br from-[#7fa2fe] px-2">
                      <FaWhatsapp />
                      Kevin
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex justify-center text-center text-white">
            <table className="table-cell border-separate rounded-xl border-[6px] border-[#9DCE6D] p-2">
              <thead>
                <tr>
                  <th className="border-b-[6px] border-[#9DCE6D]">WDC</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="font-retroica">0812 3470 303</div>
                    <button className="mx-auto flex items-center justify-center gap-1 rounded-2xl bg-[#6ca0af] bg-gradient-to-br from-[#9dcd6c] px-2">
                      <FaWhatsapp />
                      Andreas
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="font-retroica">0821 7237 5366</div>
                    <button className="mx-auto flex items-center justify-center gap-1 rounded-2xl bg-[#6ca0af] bg-gradient-to-br from-[#9dcd6c] px-2">
                      <FaWhatsapp />
                      Wahyu
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
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
                    <div className="font-retroica">0882 1609 9529</div>
                    <button className="mx-auto flex items-center justify-center gap-1 rounded-2xl bg-gradient-to-br from-[#5AA7C0] via-[#926DAE] to-[#C76F89] px-2">
                      <FaWhatsapp />
                      Tessa
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="font-retroica">0895 6221 76067</div>
                    <button className="mx-auto flex items-center justify-center gap-1 rounded-2xl bg-gradient-to-br from-[#5AA7C0] via-[#926DAE] to-[#C76F89] px-2">
                      <FaWhatsapp />
                      Rinn
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="h-56 w-64 lg:hidden">
          <Carousel leftControl=" " rightControl=" " indicators={false}>
            <div className="flex justify-center text-center text-white">
              <table className="table-cell border-separate rounded-xl border-[6px] border-[#ba87fb] p-2">
                <thead>
                  <tr>
                    <th className="border-b-[6px] border-[#ba87fb]">I2C</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="font-retroica">0822 2555 3400</div>
                      <button className="mx-auto flex items-center justify-center gap-1 rounded-2xl bg-[#ba87fb] bg-gradient-to-br from-[#7fa2fe] px-2">
                        <FaWhatsapp />
                        Lala
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="font-retroica">0852 1024 5177</div>
                      <button className="mx-auto flex items-center justify-center gap-1 rounded-2xl bg-[#ba87fb] bg-gradient-to-br from-[#7fa2fe] px-2">
                        <FaWhatsapp />
                        Kevin
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex justify-center text-center text-white">
              <table className="table-cell border-separate rounded-xl border-[6px] border-[#9DCE6D] p-2">
                <thead>
                  <tr>
                    <th className="border-b-[6px] border-[#9DCE6D]">WDC</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="font-retroica">0812 3470 303</div>
                      <button className="mx-auto flex items-center justify-center gap-1 rounded-2xl bg-[#6ca0af] bg-gradient-to-br from-[#9dcd6c] px-2">
                        <FaWhatsapp />
                        Andreas
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="font-retroica">0821 7237 5366</div>
                      <button className="mx-auto flex items-center justify-center gap-1 rounded-2xl bg-[#6ca0af] bg-gradient-to-br from-[#9dcd6c] px-2">
                        <FaWhatsapp />
                        Wahyu
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* <div className="text-white text-center flex justify-center">
                            <table className="table-cell border-separate border-[6px] border-[#ff8064] rounded-xl p-2">
                                <thead>
                                    <tr>
                                        <th className="border-b-[6px] border-[#ff8064]">
                                            CP
                                        </th>
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
                      <div className="font-retroica">0882 1609 9529</div>
                      <button className="mx-auto flex items-center justify-center gap-1 rounded-2xl bg-gradient-to-br from-[#5AA7C0] via-[#926DAE] to-[#C76F89] px-2">
                        <FaWhatsapp />
                        Tessa
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="font-retroica">0895 6221 76067</div>
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
    </motion.div>
  );
};

export default CP;
