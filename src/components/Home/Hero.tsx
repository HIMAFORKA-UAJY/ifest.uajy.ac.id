import { motion } from "framer-motion";
import { FC } from "react";
import { TypeAnimation } from "react-type-animation";

const Hero: FC = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center px-8">
      <TypeAnimation
        sequence={[1000, "IFEST#11"]}
        speed={1}
        wrapper="div"
        cursor={false}
        className="text-center font-gameofsquids text-6xl font-bold tracking-[0.1em] text-white lg:text-8xl"
      />
      <TypeAnimation
        sequence={[2000, "Higher Steps, Higher Purpose with Informatics"]}
        speed={60}
        wrapper="div"
        cursor={false}
        className="text-center font-retron2000 text-xl font-light text-white lg:text-4xl"
      />
      <div className="py-12"></div>
      <motion.button
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.5, duration: 1.0 }}
        className="transition-transform hover:scale-125"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 stroke-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </motion.button>
    </div>
  );
};

export default Hero;
