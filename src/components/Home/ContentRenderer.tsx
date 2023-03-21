import { motion } from "framer-motion";
import Link from "next/link";
import { FC } from "react";
import { FaBook, FaMale, FaWallet } from "react-icons/fa";

interface Props {
  content: {
    id: number;
    abbreviation: string;
    name: string;
    url: string;
    img: string;
    description: string;
    requirements: string[];
  };
}

const ContentRenderer: FC<Props> = ({ content }: Props) => {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <FaBook />;
      case 1:
        return <FaWallet />;
      case 2:
        return <FaMale />;
    }
  };

  const getColor = (id: number) => {
    switch (id) {
      case 1:
        return "#a276db";
      case 2:
        return "#83c261";
      case 3:
        return "#df8255";
      case 4:
        return "#de6666";
      case 5:
        return "#5cc09f";
    }
  };

  return (
    <motion.div
      className={`${
        content.id == 1
          ? "bg-[url('/images/bg-flip.webp')] bg-cover bg-center bg-no-repeat"
          : content.id % 2 == 0
          ? "bg-[#3b3275]"
          : "bg-[#2b2265]"
      }`}
      initial={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
    >
      <div className="mx-auto flex flex-col items-center justify-center px-6 py-10 lg:w-11/12 lg:flex-row lg:gap-8 2xl:w-7/12">
        <img
          alt={content.abbreviation.toLowerCase()}
          className={`${content.id % 2 == 0 ? "lg:order-1" : "lg:order-0"} w-72 basis-1/2`}
          src={content.img}
        />
        <div className="flex-col lg:basis-1/2">
          <div className="text-center font-retroica text-white lg:text-left">
            <div className="text-4xl font-light tracking-[0.25em] lg:tracking-[0.10em]">
              {content.abbreviation}
            </div>
            <div className="text-2xl font-bold tracking-[0.10em] lg:tracking-[0.12em]">
              {content.name}
            </div>
          </div>
          <div className="flex flex-col flex-wrap gap-2 py-4 px-10 text-center font-retroica text-sm text-white lg:w-full lg:flex-row lg:gap-6 lg:px-0">
            {content.requirements.map((requirement, index) => {
              return (
                <div
                  className="rounded-full p-1"
                  key={index}
                  style={{ backgroundColor: getColor(content.id) }}
                >
                  <div
                    className="flex flex-col items-center gap-1 rounded-full bg-[#2b2265] p-2 lg:flex-row lg:text-sm lg:tracking-wide"
                    style={{ backgroundColor: content.id % 2 == 0 ? "#3b3275" : "#2b2265" }}
                  >
                    {getIcon(index)}
                    {requirement}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="font-louisgeorgecafe text-white">
            <p className="text-justify text-lg">
              <strong>{content.name}</strong> {content.description}
            </p>
          </div>
          <div className="pt-10"></div>
          <div className="flex justify-center lg:justify-start">
            <Link href={content.url}>
              <button
                className="rounded-[2.0em] px-5 py-3 font-retroica text-sm tracking-widest text-white transition-all hover:scale-105 hover:shadow-[0px_0px_60px_0px_#9696d680] lg:text-base"
                style={{
                  backgroundColor: getColor(content.id),
                }}
              >
                {content.abbreviation === "MUC" ||
                content.name === "Donor Darah" ||
                content.name === "Seminar Nasional"
                  ? "Coming Soon"
                  : "Read More"}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContentRenderer;
