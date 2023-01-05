import { motion } from "framer-motion";
import { FC, RefObject } from "react";
import { TypeAnimation } from "react-type-animation";

interface Props {
    i2cRef: RefObject<HTMLDivElement>;
}

const HeroMain: FC<Props> = ({ i2cRef }) => {
    return (
        <motion.div
            className="flex flex-col justify-center items-center h-screen px-8"
        >
            <TypeAnimation
                sequence={[
                    1000,
                    "IFEST#11"
                ]}
                speed={1}
                wrapper="div"
                cursor={false}
                className="font-gameofsquids text-6xl lg:text-8xl font-bold tracking-[0.1em] text-white text-center"
            />
            <TypeAnimation
                sequence={[
                    2000,
                    "Higher Steps, Higher Purpose with Informatics"
                ]}
                speed={60}
                wrapper="div"
                cursor={false}
                className="font-retron2000 text-xl lg:text-3xl font-light text-white text-center"
            />
            <motion.button
                onClick={() => i2cRef.current?.scrollIntoView({ behavior: "smooth" })}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4.5, duration: 0.25 }}
                className="mt-12 transition-transform hover:scale-125">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="stroke-white w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                </svg>
            </motion.button>
        </motion.div>
    );
};

export default HeroMain;
