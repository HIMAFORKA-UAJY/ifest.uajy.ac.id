// import { FC } from "react";
// import Layout from "../components/Layout";


// const Error404: FC = () => {
//     return (
//         <Layout>
//             <div className="flex flex-col items-center justify-center h-screen bg-fffff">
//                 <h1 className="text-4xl">Error404</h1>
//             </div>
//         </Layout>
//     );
// };

// export default Error404;

import { motion } from "framer-motion";
import { FC, useRef } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const Error404: FC = () => {
    const contentRef = useRef<HTMLDivElement>(null);

    return (
        <Layout>
            <div className="bg-[url('/images/bg-no-flip.png')] bg-center bg-cover bg-no-repeat absolute top-0 -z-10 h-screen w-screen">
                <div className="bg-gradient-to-b from-[#83204A]/80 to-[#8E332D]/80 font-retroica">
                    <motion.div
                        className="flex flex-col justify-center items-center h-screen gap-6"
                    >
                        <div className="text-5xl font-bold text-white">
                            (╯︵╰,)
                        </div>
                        <div className="text-5xl font-bold text-white">
                            404
                        </div>

                        <div className="text-lg text-white text-center px-8">
                            Oh no, laman yang Anda ingin kunjungi tidak ada...
                            <br />
                            <br />
                            Ingin kembali ke homepage?
                        </div>

                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.0, duration: 0.25 }}
                            className=" px-5 py-3 rounded-[2.0em] text-sm lg:text-base font-retroica text-white bg-gradient-to-br from-[#DB7F58] bg-[#E45D6D]">
                            <Link to="/">Kembali ke Homepage</Link >
                        </motion.button>
                    </motion.div>

                    <div ref={contentRef} className="bg-gradient-to-t from-[#2A2F59] to-[#332550]"></div>
                </div>
            </div>
        </Layout >
    );
};

export default Error404;
