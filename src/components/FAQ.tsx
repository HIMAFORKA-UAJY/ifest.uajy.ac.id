import parse from "html-react-parser";
import { FC, Fragment } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem
} from "react-headless-accordion";

import { motion } from "framer-motion";

const FAQ: FC = () => {
  const faqs = [
    {
      "question": "Apa itu IFest?",
      "answer":
        `
      Informatics Festival atau IFest adalah acara tahunan Himpunan Mahasiswa Informatika (HIMAFORKA) Universitas Atma Jaya Yogyakarta. Pada tahun 2022 ini, IFest#10 mengambil tema "Technology Rebuild Our Country" dengan berbagai susunan kompetisi dan acara yang tentunya menarik!
        `
    },
    {
      "question": "Apa saja yang diselenggarakan di IFest#11 ini?",
      "answer":
        `
      IFest#11 menyelenggarakan beberapa kompetisi dan acara, antara lain:
      <ul className="list-outside list-disc pl-4">
        <li>
          Innovative Informatics Contest (I2C)
        </li>
        <li>
          Web Design Competition (WDC)
        </li>
        <li>
          Competitive Programming (CP)
        </li>
        <li>
          Seminar Nasional
        </li>
      </ul>
        `
    }
  ];


  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="bg-[#2b2265] pt-24"
    >
      <div className="flex flex-col lg:flex-row justify-center">
        <div className="flex flex-col items-center justify-center lg:justify-center bg-[#2b2265] lg:w-1/2">
          <div className="font-retroica text-4xl text-white">
            FAQ
          </div>
          <div className="font-retroica text-base text-white">
            Pertanyaan yang sering diajukan
          </div>
          <div >
            <div className="w-full p-4 bg-[#2b2265]" >
              <div className="shadow-lg p-3 bg-[#362c75]">
                <Accordion className="rounded-md overflow-hidden border" alwaysOpen={false}>
                  {faqs.map((faq, index) => {
                    return (
                      <AccordionItem key={index}>
                        {({ open }: { open: boolean; }) => (
                          <>
                            <AccordionHeader className={`transition-[background] flex items-center justify-between w-full px-4 py-3 ${open ? "border-b" : ""} ${open ? "bg-gray-400/30" : "bg-[#2b2265]"}`}>
                              <span className={`font-retroica tracking-[0.1em] text-sm font-semibold text-left ${open ? "text-white" : "text-gray-400"}`}>
                                {faq.question}
                              </span>
                              <svg
                                className={`w-6 h-6 text-gray-500 transition duration-300 ${open ? "rotate-90" : ""}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            </AccordionHeader>
                            <AccordionBody className={`open ? "border-b" : ""`}>
                              <div className="font-retroica p-4 text-sm text-gray-200 text-left">
                                <Fragment>{parse(faq.answer)}</Fragment>
                              </div>
                            </AccordionBody>
                          </>
                        )}
                      </AccordionItem>
                    );
                  })}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>


  );
};

export default FAQ;
