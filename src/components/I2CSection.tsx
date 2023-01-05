import { motion } from "framer-motion";
import { FC, useRef } from "react";
import { FaBook, FaMale, FaWallet } from "react-icons/all";
import { Link } from "react-router-dom";
import HeroMain from "./HeroMain";

const I2CSection: FC = () => {
    const i2cRef = useRef<HTMLDivElement>(null);
    return (
        <>
            <HeroMain i2cRef={i2cRef} />
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeInOut" }}
                ref={i2cRef}
                className="bg-[url('/images/bg-flip-fix.png')] bg-no-repeat bg-cover bg-center w-screen"
            >
                <div className="hidden lg:flex flex-col justify-center items-center w-screen">
                    <div className="flex justify-center items-center">
                        <img className="w-[600px]" src="https://ifest.uajy.ac.id/assets/images/event/ill-i2c.png" alt="i2c" />
                        <div className="flex flex-col">
                            <div className="font-retroica text-4xl text-white pl-[1rem] tracking-wide">I2C</div>
                            <div className="font-retroica text-2xl text-white pl-[1rem] pb-[0.5rem]">Innovative Informatics Contest</div>
                            <div className="flex gap-4 font-retroica text-sm text-white pl-[1rem]">
                                <div className="bg-gradient-to-r from-[#ba87fb] to-[#ba87fb] p-1 rounded-full">
                                    <div className="bg-[#2b2265] p-1 rounded-full flex gap-1 items-center px-[0.5rem]">
                                        <FaWallet />
                                        Gratis
                                    </div>
                                </div>
                                <div className="bg-gradient-to-r from-[#ba87fb] to-[#ba87fb] p-1 rounded-full">
                                    <div className="bg-[#2b2265] p-1 rounded-full flex gap-1 items-center px-[0.5rem]">
                                        <FaBook />
                                        SMA/Sederajat
                                    </div>
                                </div>
                                <div className="bg-gradient-to-r from-[#ba87fb] to-[#ba87fb] p-1 rounded-full">
                                    <div className="bg-[#2b2265] p-1 rounded-full flex gap-1 items-center px-[0.5rem]">
                                        <FaMale />
                                        Max. 3 orang
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 font-retroica text-white w-[32em]">
                                <p className="text-justify">
                                    <strong>Innovative Informatics Contest</strong> (I2C) 2022 adalah sebuah kompetisi ide kreatif untuk merancang aplikasi yang inovatif secara berkelompok beranggotakan 3 orang. I2C 2022 ini mengusung tema "A Journey To Better Home Living".
                                </p>
                            </div>
                            <div className="pl-[1rem]">
                                <motion.button
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.0, duration: 0.25 }}
                                    className="mt-7 px-5 py-3 rounded-[2.0em] text-sm lg:text-base font-retroica text-white bg-gradient-to-br from-[#7fa2fe] bg-[#ba87fb]">
                                    <Link to="/i2c">Read More</Link >
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:hidden flex flex-col justify-center items-center h-screen w-screen px-4">
                    <img className="w-72" src="https://ifest.uajy.ac.id/assets/images/event/ill-i2c.png" alt="i2c" />
                    <div className="text-center">
                        <div className="font-retroica text-4xl text-white tracking-wide">I2C</div>
                        <div className="font-retroica text-2xl text-white pb-[1rem] px-4">Innovative Informatics Contest</div>
                    </div>
                    <div className="flex gap-2 font-retroica text-sm text-white px-2">
                        <div className="bg-gradient-to-r from-[#ba87fb] to-[#ba87fb] p-1 rounded-full">
                            <div className="bg-[#2b2265] p-1 rounded-full flex gap-1 items-center px-[0.35rem] flex-wrap justify-center">
                                <FaWallet />
                                Gratis
                            </div>
                        </div>
                        <div className="bg-gradient-to-r from-[#ba87fb] to-[#ba87fb] p-1 rounded-full">
                            <div className="bg-[#2b2265] p-1 rounded-full flex gap-1 items-center px-[0.35rem] flex-wrap justify-center">
                                <FaBook />
                                SMA/Sederajat
                            </div>
                        </div>
                        <div className="bg-gradient-to-r from-[#ba87fb] to-[#ba87fb] p-1 rounded-full">
                            <div className="bg-[#2b2265] p-1 rounded-full flex gap-1 items-center px-[0.35rem] flex-wrap justify-center">
                                <FaMale />
                                Max. 3 orang
                            </div>
                        </div>
                    </div>
                    <div className="pt-2"></div>
                    <div className="p-4 font-retroica text-white">
                        <p className="text-justify">
                            <strong>Innovative Informatics Contest</strong> (I2C) 2022 adalah sebuah kompetisi ide kreatif untuk merancang aplikasi yang inovatif secara berkelompok beranggotakan 3 orang. I2C 2022 ini mengusung tema "A Journey To Better Home Living".
                        </p>
                    </div>
                    <div>
                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.0, duration: 0.25 }}
                            className="mt-7 px-5 py-3 rounded-[2.0em] text-sm lg:text-base font-retroica text-white bg-gradient-to-br from-[#7fa2fe] bg-[#ba87fb]">
                            <Link to="/i2c">Read More</Link >
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default I2CSection;
