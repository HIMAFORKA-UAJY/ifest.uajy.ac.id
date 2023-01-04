import { motion } from "framer-motion";
import { FC } from "react";
import { FaBook, FaMale, FaWallet } from "react-icons/all";
import { Link } from "react-router-dom";

const HackathonSection: FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="bg-[#2b2265] w-screen"
        >
            <div className="hidden lg:flex flex-col justify-center items-center w-screen">
                <div className="flex justify-center items-center">
                    <img
                        className="w-[600px]"
                        src="https://ifest.uajy.ac.id/assets/images/event/ill-cp.png"
                        alt="cp"
                    />
                    <div className="flex flex-col">
                        <div className="font-retroica text-4xl text-white pl-[1rem]">
                            CP
                        </div>
                        <div className="font-retroica text-2xl text-white pl-[1rem] pb-[0.5rem]">
                            Competitive Programming
                        </div>
                        <div className="flex gap-4 font-retroica text-sm text-white pl-[1rem]">
                            <div className="bg-gradient-to-r from-[#ff8064] to-[#ff8064] p-1 rounded-full">
                                <div className="bg-[#2b2265] p-1 rounded-full flex gap-1 items-center px-[0.5rem]">
                                    <FaWallet />
                                    Rp. 50.000
                                </div>
                            </div>
                            <div className="bg-gradient-to-r from-[#ff8064] to-[#ff8064] p-1 rounded-full">
                                <div className="bg-[#2b2265] p-1 rounded-full flex gap-1 items-center px-[0.5rem]">
                                    <FaBook />
                                    Mahasiswa
                                </div>
                            </div>
                            <div className="bg-gradient-to-r from-[#ff8064] to-[#ff8064] p-1 rounded-full">
                                <div className="bg-[#2b2265] p-1 rounded-full flex gap-1 items-center px-[0.5rem]">
                                    <FaMale />
                                    Max. 3 orang
                                </div>
                            </div>
                        </div>
                        <div className="p-4 font-retroica text-white w-[32em]">
                            <p className="text-justify">
                                <strong>Competitive Programming</strong> (CP) merupakan
                                suatu perlombaan yang terfokus terhadap pemecahan masalah
                                atau algoritma matematika. Competitive Programming 2022
                                mengangkat tema "Programming Breaks Through The
                                Limitations of Life.
                            </p>
                        </div>
                        <div className="pl-[1rem]">
                            <motion.button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.0, duration: 0.25 }}
                                className="mt-7 px-5 py-3 rounded-[2.0em] text-sm lg:text-base font-retroica text-white bg-gradient-to-br from-[#fe8064] bg-[#feb783]"
                            >
                                <Link to="/hackathon">Read More</Link>
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:hidden flex flex-col justify-center items-center h-screen w-screen">
                <img
                    className="w-72"
                    src="https://ifest.uajy.ac.id/assets/images/event/ill-cp.png"
                    alt="cp"
                />
                <div className="text-center">
                    <div className="font-retroica text-4xl text-white">CP</div>
                    <div className="font-retroica text-2xl text-white pb-[1rem]">
                        Competitive Programming
                    </div>
                </div>
                <div className="flex gap-4 font-retroica text-sm text-white">
                    <div className="bg-gradient-to-r from-[#ff8064] to-[#ff8064] p-1 rounded-full">
                        <div className="bg-[#2b2265] p-1 rounded-full flex gap-1 items-center px-[0.35rem] flex-wrap justify-center">
                            <FaWallet />
                            Rp. 50.000
                        </div>
                    </div>
                    <div className="bg-gradient-to-r from-[#ff8064] to-[#ff8064] p-1 rounded-full">
                        <div className="bg-[#2b2265] p-1 rounded-full flex gap-1 items-center px-[0.35rem] flex-wrap justify-center">
                            <FaBook />
                            Mahasiswa
                        </div>
                    </div>
                    <div className="bg-gradient-to-r from-[#ff8064] to-[#ff8064] p-1 rounded-full">
                        <div className="bg-[#2b2265] p-1 rounded-full flex gap-1 items-center px-[0.35rem] flex-wrap justify-center">
                            <FaMale />
                            Max. 3 orang
                        </div>
                    </div>
                </div>
                <div className="pt-2"></div>
                <div className="p-4 font-retroica text-white">
                    <p className="text-justify">
                        <strong>Competitive Programming</strong> (CP) merupakan suatu
                        perlombaan yang terfokus terhadap pemecahan masalah atau
                        algoritma matematika. Competitive Programming 2022 mengangkat
                        tema "Programming Breaks Through The Limitations of Life.
                    </p>
                </div>
                <div>
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.0, duration: 0.25 }}
                        className="mt-7 px-5 py-3 rounded-[2.0em] text-sm lg:text-base font-retroica text-white bg-gradient-to-br from-[#fe8064] bg-[#feb783]"
                    >
                        <Link to="/hackathon">Read More</Link>
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
};

export default HackathonSection;
