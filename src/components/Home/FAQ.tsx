import faq from "@/data/faq.json";
import { Disclosure } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import parse from "html-react-parser";
import { FC } from "react";

const FAQ: FC = () => {
  return (
    <motion.div
      className="bg-[#2b2265]"
      initial={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1 }}
    >
      <div className="flex flex-col items-center justify-center gap-2 py-10">
        <div className="w-11/12 bg-[#3b3275] p-4 text-center lg:w-1/2">
          <div className="font-retroica text-4xl tracking-[0.15em] text-white">FAQ</div>
          <div className="font-retroica text-base text-white">Pertanyaan yang sering diajukan</div>
          <div className="pt-4"></div>
          <div className="bg-[#41387e] p-4 shadow-lg">
            {faq.map((data, index) => {
              return (
                <motion.div initial={{ opacity: 0 }} key={index} whileInView={{ opacity: 1 }}>
                  <Disclosure defaultOpen={index == 0 ? true : false}>
                    {({ open }) => (
                      <>
                        <Disclosure.Button
                          className={`flex w-full items-center justify-between px-4 py-3 transition-[background] ${
                            open ? "bg-gray-400/30" : "bg-[#41387e]"
                          }`}
                        >
                          <span
                            className={`text-left font-retroica text-sm font-medium tracking-[0.1em] ${
                              open ? "text-white" : "text-gray-400"
                            }`}
                          >
                            {data.question}
                          </span>
                          <svg
                            className={`h-8 w-8 text-gray-500 transition duration-300 ${
                              open ? "rotate-90" : ""
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              clipRule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              fillRule="evenodd"
                            />
                          </svg>
                        </Disclosure.Button>
                        <AnimatePresence>
                          {open && (
                            <Disclosure.Panel static>
                              <motion.div
                                animate={{ y: 0, opacity: 1 }}
                                className="p-4 text-left font-louisgeorgecafe text-sm text-gray-200"
                                exit={{ y: -10, opacity: 0 }}
                                initial={{ y: -10, opacity: 0 }}
                              >
                                {parse(data.answer)}
                              </motion.div>
                            </Disclosure.Panel>
                          )}
                        </AnimatePresence>
                      </>
                    )}
                  </Disclosure>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FAQ;
