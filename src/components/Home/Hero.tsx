import { motion } from "framer-motion";
import { FC } from "react";
import { TypeAnimation } from "react-type-animation";

const Hero: FC = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center px-8">
      <TypeAnimation
        className="text-center font-gameofsquids text-6xl font-bold tracking-[0.1em] text-white lg:text-8xl"
        cursor={false}
        sequence={[1000, "IFEST#11"]}
        speed={1}
        wrapper="div"
      />
      <TypeAnimation
        className="text-center font-retron2000 text-xl font-light text-white lg:text-4xl"
        cursor={false}
        sequence={[2000, "Higher Steps, Higher Purpose with Informatics"]}
        speed={60}
        wrapper="div"
      />
      <div className="py-12"></div>
      <motion.button
        animate={{ opacity: 1 }}
        className="transition-transform hover:scale-125"
        initial={{ opacity: 0 }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
        transition={{ delay: 4.5, duration: 1.0 }}
      >
        <svg
          className="w-12 stroke-white"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.button>
    </div>
  );
};

export default Hero;
