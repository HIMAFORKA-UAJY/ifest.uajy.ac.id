import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem
} from "react-headless-accordion";
import { FC } from "react";
import { Chevron } from "../components/icons";

const FAQ: FC = () => {
  return (
    <Accordion className="rounded-md overflow-hidden border" alwaysOpen={false}>
      <AccordionItem>
        {({ open }: { open: boolean; }) => (
          <>
            <AccordionHeader className={`transition-[background] flex items-center justify-between w-full px-4 py-3 ${open ? "border-b" : ""} ${open ? "bg-gray-400/30" : "bg-pur"}`}>
              <span className="text-sm font-semibold text-white">
                Apa itu IFest?
              </span>

              <Chevron
                className={`w-6 h-6 text-gray-500 transition duration-300 ${open ? "rotate-90" : ""
                  }`}
              />
            </AccordionHeader>
            <AccordionBody className={`open ? "border-b" : ""`}>
              <div className="p-4 text-sm text-gray-500">
                Informatics Festival atau IFest adalah acara tahunan Himpunan Mahasiswa Informatika (HIMAFORKA) Universitas Atma Jaya Yogyakarta. Pada tahun 2022 ini, IFest#10 mengambil tema "Technology Rebuild Our Country" dengan berbagai susunan kompetisi dan acara yang tentunya menarik!
              </div>
            </AccordionBody>
          </>
        )}
      </AccordionItem>
      <AccordionItem>
        {({ open }: { open: boolean; }) => (
          <>
            <AccordionHeader className={`transition-[background] flex items-center justify-between w-full px-4 py-3 ${open ? "border-b" : ""} ${open ? "bg-gray-400/30" : "bg-pur"}`}>
              <span className="text-sm font-semibold text-white">
                Apa saja yang diselenggarakan di IFest#11 ini?
              </span>

              <Chevron
                className={`w-6 h-6 text-gray-500 transition duration-300 ${open ? "rotate-90" : ""
                  }`}
              />
            </AccordionHeader>
            <AccordionBody className={`open ? "border-b" : ""`}>
              <div className="p-4 text-sm text-gray-500">
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
              </div>
            </AccordionBody>
          </>
        )}
      </AccordionItem>
      <AccordionItem>
        {({ open }: { open: boolean; }) => (
          <>
            <AccordionHeader className={`transition-[background] flex items-center justify-between w-full px-4 py-3 ${open ? "border-b" : ""} ${open ? "bg-gray-400/30" : "bg-pur"}`}>
              <span className="text-sm font-semibold text-white">
                Bagaimana cara mendaftar untuk setiap event IFest?
              </span>

              <Chevron
                className={`w-6 h-6 text-gray-500 transition duration-300 ${open ? "rotate-90" : ""
                  }`}
              />
            </AccordionHeader>
            <AccordionBody className={`open ? "border-b" : ""`}>
              <div className="p-4 text-sm text-gray-500">
                Pendaftaran diri dan tim dapat dilakukan melalui situs https://ifest.uajy.ac.id/dash/register. Kamu bisa mendaftarkan diri dan tim selama masa pendaftaran (masa pendaftaran untuk setiap kompetisi dan acara berbeda-beda).
              </div>
            </AccordionBody>
          </>
        )}
      </AccordionItem>
      <AccordionItem>
        {({ open }: { open: boolean; }) => (
          <>
            <AccordionHeader className={`transition-[background] flex items-center justify-between w-full px-4 py-3 ${open ? "border-b" : ""} ${open ? "bg-gray-400/30" : "bg-pur"}`}>
              <span className="text-sm font-semibold text-white">
                Apa tujuan diselenggarakannya IFest?
              </span>

              <Chevron
                className={`w-6 h-6 text-gray-500 transition duration-300 ${open ? "rotate-90" : ""
                  }`}
              />
            </AccordionHeader>
            <AccordionBody className={`open ? "border-b" : ""`}>
              <div className="p-4 text-sm text-gray-500">
                IFest diselenggarakan dengan tujuan sebagai berikut:

                <ul className="list-outside list-disc pl-4">
                  <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, accusamus.</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore molestias provident ad iure aliquam facere!</li>
                  <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, possimus? Quaerat fugit ipsum hic deleniti deserunt fugiat pariatur cum eveniet.</li>
                  <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure provident soluta distinctio molestias voluptatem eos, libero, asperiores unde, nihil exercitationem mollitia. Commodi omnis distinctio nulla, ipsa minima blanditiis tempora architecto.</li>
                </ul>
              </div>
            </AccordionBody>
          </>
        )}
      </AccordionItem>
    </Accordion>
  );
};

export default FAQ;
