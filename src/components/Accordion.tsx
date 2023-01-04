import { Chevron } from "../components/icons";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";

import { useCallback, useMemo } from "react";


export const faqData = [
  {
    title: "How to create a group booking ?",
    content:
      "Although you probably won’t get into any legal trouble if you do it just once, why risk it? If you made your subscribers a promise, you should honor that. If not, you run the risk of a drastic increase in opt outs, which will only hurt you in the long run.",
  },
  {
    title: "Why do we use it ?",
    content:
      'No charges are put in place by SlickText when subscribers join your text list. This does not mean however that charges 100% will not occur. Charges that may occur fall under part of the compliance statement stating "Message and Data rates may apply."',
  },
  {
    title: "Where does it come from ?",
    content:
      "Now that you have a general idea of the amount of texts you will need per month, simply find a plan size that allows you to have this allotment, plus some extra for growth. Don't worry, there are no mistakes to be made here. You can always upgrade and downgrade.",
  },
  {
    title: "Where does it come from ?",
    content:
      "Now that you have a general idea of the amount of texts you will need per month, simply find a plan size that allows you to have this allotment, plus some extra for growth. Don't worry, there are no mistakes to be made here. You can always upgrade and downgrade.",
  },
  {
    title: "Where does it come from ?",
    content:
      "Now that you have a general idea of the amount of texts you will need per month, simply find a plan size that allows you to have this allotment, plus some extra for growth. Don't worry, there are no mistakes to be made here. You can always upgrade and downgrade.",
  },
  
];

const FAQ = () => {
  const faqDataSize = useMemo(() => {
    return faqData.length;
  }, []);

  const generateHeaderClass = useCallback(
    (open: any, position: any) => {
      const background = open ? "bg-gray-400/30" : "bg-pur";
      const border =
        position === faqDataSize ? (open ? "border-b" : "") : "border-b";
      return `transition-[background] flex items-center justify-between w-full px-4 py-3 ${border} ${background}`;
    },
    [faqDataSize]
  );

  const generateBodyClass = useCallback(
    (open: any, position: any) => {
      return position === faqDataSize ? "" : open ? "border-b" : "";
    },
    [faqDataSize]
  );

  return (
    <Accordion className="rounded-md overflow-hidden border" alwaysOpen={true}>
      {faqData.map((item, index) => (
        <AccordionItem key={index}>
          {({ open }) => (
            <>
              <AccordionHeader className={generateHeaderClass(open, index + 1)}>
                <span className="text-sm font-semibold text-gray-600">
                  {item.title}
                </span>

                <Chevron
                  className={`w-6 h-6 text-gray-500 transition duration-300 ${
                    open ? "rotate-90" : ""
                  }`}
                />
              </AccordionHeader>

              <AccordionBody className={generateBodyClass(open, index + 1)}>
                <div className="p-4 text-sm text-gray-500">{item.content}</div>
              </AccordionBody>
            </>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FAQ;
