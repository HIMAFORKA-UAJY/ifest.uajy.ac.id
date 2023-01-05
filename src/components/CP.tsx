import { Carousel } from "flowbite-react";
import { motion } from "framer-motion";
import { FC } from "react";
import { FaWhatsapp } from "react-icons/all";

const Sponsor: FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="bg-[#2b2265] pt-24 lg:pb-12"
        >
            <div className="flex flex-col gap-0 justify-center items-center w-screen">
                <div className="font-retroica text-4xl text-white">
                    Contact Us
                </div>
                <div className="font-retroica text-base text-white">
                    Ada pertanyaan? Silakan ajukan ^_^
                </div>
                <div className="hidden lg:flex gap-8 pt-8">
                    <div className="text-white text-center flex justify-center">
                        <table className="table-cell border-separate border-[6px] border-[#ba87fb] rounded-xl p-2">
                            <thead>
                                <tr>
                                    <th className="border-b-[6px] border-[#ba87fb]">I2C</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div>0822 2555 3400</div>
                                        <button className="bg-gradient-to-br from-[#7fa2fe] bg-[#ba87fb] px-2 rounded-2xl flex items-center justify-center gap-1 mx-auto">
                                            <FaWhatsapp />
                                            Lala
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div>0852 1024 5177</div>
                                        <button className="bg-gradient-to-br from-[#7fa2fe] bg-[#ba87fb] px-2 rounded-2xl flex items-center justify-center gap-1 mx-auto">
                                            <FaWhatsapp />
                                            Kevin
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="text-white text-center flex justify-center">
                        <table className="table-cell border-separate border-[6px] border-[#9DCE6D] rounded-xl p-2">
                            <thead>
                                <tr>
                                    <th className="border-b-[6px] border-[#9DCE6D]">WDC</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div>0812 3470 303</div>
                                        <button className="bg-gradient-to-br from-[#9dcd6c] bg-[#6ca0af] px-2 rounded-2xl flex items-center justify-center gap-1 mx-auto">
                                            <FaWhatsapp />
                                            Andreas
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div>0821 7237 5366</div>
                                        <button className="bg-gradient-to-br from-[#9dcd6c] bg-[#6ca0af] px-2 rounded-2xl flex items-center justify-center gap-1 mx-auto">
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
                </div>

                <div className="h-56 w-64 lg:hidden">
                    <Carousel leftControl=" " rightControl=" " indicators={false}>
                        <div className="text-white text-center flex justify-center">
                            <table className="table-cell border-separate border-[6px] border-[#ba87fb] rounded-xl p-2">
                                <thead>
                                    <tr>
                                        <th className="border-b-[6px] border-[#ba87fb]">
                                            I2C
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div>0822 2555 3400</div>
                                            <button className="bg-gradient-to-br from-[#7fa2fe] bg-[#ba87fb] px-2 rounded-2xl flex items-center justify-center gap-1 mx-auto">
                                                <FaWhatsapp />
                                                Lala
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div>0852 1024 5177</div>
                                            <button className="bg-gradient-to-br from-[#7fa2fe] bg-[#ba87fb] px-2 rounded-2xl flex items-center justify-center gap-1 mx-auto">
                                                <FaWhatsapp />
                                                Kevin
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="text-white text-center flex justify-center">
                            <table className="table-cell border-separate border-[6px] border-[#9DCE6D] rounded-xl p-2">
                                <thead>
                                    <tr>
                                        <th className="border-b-[6px] border-[#9DCE6D]">
                                            WDC
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div>0812 3470 303</div>
                                            <button className="bg-gradient-to-br from-[#9dcd6c] bg-[#6ca0af] px-2 rounded-2xl flex items-center justify-center gap-1 mx-auto">
                                                <FaWhatsapp />
                                                Andreas
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div>0821 7237 5366</div>
                                            <button className="bg-gradient-to-br from-[#9dcd6c] bg-[#6ca0af] px-2 rounded-2xl flex items-center justify-center gap-1 mx-auto">
                                                <FaWhatsapp />
                                                Wahyu
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="text-white text-center flex justify-center">
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
                        </div>
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
        </motion.div>
    );
};

export default Sponsor;
