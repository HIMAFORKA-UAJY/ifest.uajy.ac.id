import { motion } from "framer-motion";
import parse from "html-react-parser";
import { FC } from "react";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-headless-accordion";

const FAQ: FC = () => {
  const faqs = [
    {
      question: "Apa itu IFest?",
      answer: `
      Informatics Festival atau IFest adalah acara tahunan Himpunan Mahasiswa Informatika (HIMAFORKA) Universitas Atma Jaya Yogyakarta. Pada tahun 2023 ini, IFest#10 mengambil tema "Higher Steps, Higher Purpose with Informatics" dengan berbagai susunan kompetisi dan acara yang tentunya menarik!
        `,
    },
    {
      question: "Apa saja yang diselenggarakan di IFest#11 ini?",
      answer: `
      IFest#11 menyelenggarakan beberapa kompetisi dan acara, antara lain:
      <ul className="list-outside list-disc pl-4">
        <li>
          Innovative Informatics Contest (I2C)
        </li>
        <li>
          Web Design Competition (WDC)
        </li>
        <li>
          Food Bazaar
        </li>
        <li>
          Donor Darah
        </li>
      </ul>
        `,
    },
    {
      question: "Bagaimana cara mendaftar untuk setiap event IFest?",
      answer: `
      Pendaftaran diri dan tim dapat dilakukan melalui situs https://ifest.uajy.ac.id/dash/register. Kamu bisa mendaftarkan diri dan tim selama masa pendaftaran (masa pendaftaran untuk setiap kompetisi dan acara berbeda-beda).
      `,
    },
    {
      question: "Apa tujuan diselenggarakannya IFest?",
      answer: `
      IFest diselenggarakan dengan tujuan sebagai berikut:
      <ul className="list-outside list-disc pl-4">
        <li>
          Dapat memupuk dan mengembangkan minat dan bakat generasi muda dalam bidang teknologi informasi,
        </li>
        <li>
          Dapat mengembangkan pola pikir yang maju terhadap teknologi tanpa mengesampingkan nilai-nilai kemanusiaan,
        </li>
        <li>
          Membangun semangat berkompetisi yang positif sebagai manusia yang utuh dan sebagai generasi penerus bangsa yang menjunjung nilai kejujuran,
        </li>
        <li>
          Sebagai sarana untuk menuangkan ide-ide dan kreatifitas peserta, serta
        </li>
        <li>
          Menggali, menampung, menyalurkan, dan mengembangkan kemampuan serta pengetahuan mahasiswa sekaligus mencari bibit-bibit unggul.
        </li>
      </ul>
        `,
    },
    {
      question: "Dimana bisa mencari informasi seputar IFest?",
      answer: `
        Situs web ini telah menyajikan informasi mendetil terkait event-event yang diselenggarakan. Namun untuk mengajukan pertanyaan dan informasi lebih lanjut silakan hubungi kami melalui Instagram @ifest_uajy atau melalui LINE OA @ykb1847q. 
        `,
    },
    {
      question: "Siapa penyelenggara IFest#11 2023?",
      answer: `
        Rangkaian kegiatan Informatics Festival (IFest) #11 tahun 2023 diselenggarakan oleh Program Studi Informatika Universitas Atma Jaya Yogyakarta, bekerjasama dengan Himpunan Mahasiswa Informatika (HIMAFORKA).
        `,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="bg-[#2b2265] pt-24"
    >
      <div className="flex flex-col justify-center lg:flex-row">
        <div className="flex flex-col items-center justify-center bg-[#2b2265] lg:w-1/2 lg:justify-center">
          <div className="font-retroica text-4xl text-white">FAQ</div>
          <div className="font-retroica text-base text-white">Pertanyaan yang sering diajukan</div>
          <div>
            <div className="w-full bg-[#2b2265] p-4">
              <div className="bg-[#362c75] p-3 shadow-lg">
                <Accordion
                  className="overflow-hidden rounded-md border-[#3d2e7c]"
                  alwaysOpen={false}
                >
                  {faqs.map((faq) => {
                    return (
                      <AccordionItem key={faq.answer}>
                        {({ open }: { open: boolean }) => (
                          <>
                            <AccordionHeader
                              className={`flex w-full items-center justify-between px-4 py-3 transition-[background]  ${
                                open ? "" : ""
                              } ${open ? "bg-gray-400/30" : "bg-[#2b2265]"}`}
                            >
                              <span
                                className={`text-left font-retroica text-sm font-medium tracking-[0.1em] ${
                                  open ? "text-white" : "text-gray-400"
                                }`}
                              >
                                {faq.question}
                              </span>
                              <svg
                                className={`h-6 w-6 text-gray-500 transition duration-300 ${
                                  open ? "rotate-90" : ""
                                }`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </AccordionHeader>
                            <AccordionBody className={`open ? "" : ""`}>
                              <div className="p-4 text-left font-louisgeorgecafe text-sm text-gray-200">
                                {parse(faq.answer)}
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
