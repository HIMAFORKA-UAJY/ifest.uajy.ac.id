
import { FC } from "react";

const RightSection: FC = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="font-gameofsquids text-6xl lg:text-8xl font-bold tracking-[0.1em] text-white text-center">
                IFEST#11
            </h1>
            <h2 className="font-retrons2000 text-xl lg:text-3xl font-light text-white text-center">
                Technology Rebuild Our Country
            </h2>
            <button className="mt-7 px-5 py-3 rounded-[2.0em] text-sm lg:text-base font-retroica text-white bg-gradient-to-r from-[#b05f30] to-[#bd37bd]">
                Get Started
            </button>
        </div>
    );
};

export default RightSection;
