import { motion } from "framer-motion";
import { FC } from "react";
import { Link } from "react-router-dom";

import CustomCountDown from "../components/Countdown";
import Layout from "../components/Layout";

// type Props = typeof UnderDevelopment.defaultProps;

interface Props {
  property: {
    pageType: string;
  };
}

const UnderDevelopment: FC<Props> = ({ property }: Props) => {
  const { pageType } = property;

  let timer;
  switch (pageType) {
    case "ifest-store":
      // udah lewat
      timer = <CustomCountDown eventDate="Feb 20, 2023" />;
      break;
    case 'donor-darah-pendaftaran':
      timer = <CustomCountDown eventDate="Feb 20, 2023" />;
      break;
    case "seminar":
      timer = <CustomCountDown eventDate="Dec 25, 2023" />;
      break;

    case "ui-ux":
      timer = <CustomCountDown eventDate="Feb 27, 2023" />;
      break;

    default:
      // for WDC
      timer = <CustomCountDown eventDate="Jan 30, 2023" />;
      break;
  }
  return (
    <Layout>
      <div className="absolute top-0 -z-10 h-screen w-screen bg-[url('/images/bg-no-flip.png')] bg-cover bg-center bg-no-repeat">
        <div className="bg-gradient-to-b from-[#40BA62]/80 to-[#219068]/80 font-retroica">
          <motion.div className="flex h-screen flex-col items-center justify-center gap-6">
            <div className="text-center text-5xl font-bold text-white">Coming Soon</div>
            {timer}
            <div className="px-8 text-center text-lg text-white">
              Ditunggu yaa sampai event nya dibuka :D
              <br />
            </div>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.0, duration: 0.25 }}
              className="rounded-[2.0em] bg-[#45AD49] bg-gradient-to-br from-[#77A648] px-5 py-3 font-retroica text-sm text-white transition-all hover:tracking-wider hover:shadow-md lg:text-base"
            >
              <Link to="/">Stay Tuned . .</Link>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default UnderDevelopment;
