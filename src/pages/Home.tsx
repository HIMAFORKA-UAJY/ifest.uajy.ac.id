import { motion } from "framer-motion";
import Layout from "../components/Layout";
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
    return (
        <Layout>
            <motion.div
                className="flex flex-col justify-center items-center"
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // transition={{ delay: 1.0, duration: 1.0 }}
            >
                <TypeAnimation
                    sequence={[
                        1000,
                        "IFEST#11"
                    ]}
                    speed={1}
                    wrapper="h1"
                    cursor={false}
                    className="font-gameofsquids text-6xl lg:text-8xl font-bold tracking-[0.1em] text-white text-center"
                />
                <TypeAnimation
                    sequence={[
                        2000,
                        "Technology Rebuild Our Country"
                    ]}
                    speed={45}
                    wrapper="h2"
                    cursor={false}
                    className="font-retrons2000 text-xl lg:text-3xl font-light text-white text-center"
                />
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 4.0, duration: 0.25 }}
                    className="opacity-80 px-5 py-3 rounded-[2.0em] text-sm font-retroica text-white bg-gradient-to-r from-[#b05f30] to-[#bd37bd]">Get Started</motion.button>
            </motion.div>
        </Layout>
    );
}
