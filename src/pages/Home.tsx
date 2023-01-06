import { motion } from "framer-motion";
import { FC } from "react";

import CP from "../components/CP";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import HackathonSection from "../components/HackathonSection";
import I2CSection from "../components/I2CSection";
import Layout from "../components/Layout";
import MediaPartner from "../components/MediaPartner";
import Publication from "../components/Publication";
import Sponsor from "../components/Sponsor";
import WDCSection from "../components/WDCSection";

const Home: FC = () => {
    return (
        <Layout>
            <div className="bg-[url('/images/bg-no-flip.png')] bg-center bg-cover bg-no-repeat -z-10 absolute top-0 h-screen w-screen">
                <I2CSection />
                <WDCSection />
                {/* <HackathonSection /> */}
                <Publication />
                <FAQ />
                <Sponsor />
                <MediaPartner />
                <CP />

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                >
                    <Footer
                        className={"bg-gradient-to-b from-[#2b2265] to-[#0E0538] p-4"}
                    />
                </motion.div>
            </div>
        </Layout >
    );
};

export default Home;
