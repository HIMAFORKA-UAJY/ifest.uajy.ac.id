import { motion } from "framer-motion";
import moment from "moment-timezone";
import Link from "next/link";
import { FC } from "react";
import Countdown from "react-countdown";

interface Props {
  date: string | null;
}

const ComingSoon: FC<Props> = ({ date }: Props) => {
  return (
    <div className="absolute top-0 -z-10 min-h-screen w-full bg-[url('/images/bg-no-flip.png')] bg-cover bg-center bg-no-repeat">
      <div className="bg-gradient-to-b from-[#40ba62]/80 to-[#219068]/80 font-retroica">
        <div className="flex min-h-screen flex-col items-center justify-center gap-8 px-4 pt-32 pb-8">
          <div className="text-center text-4xl font-bold tracking-[0.1em] text-white lg:text-5xl">
            Coming Soon
          </div>
          {date != null && (
            <div>
              <Countdown
                date={moment(date).tz("Asia/Jakarta").toDate()}
                renderer={({ days, hours, minutes, seconds }) => {
                  return (
                    <div className="grid justify-items-center gap-6 text-center text-xl tracking-[0.1em] text-white lg:grid-cols-4">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="col-span-full"
                      >
                        {moment(date).format("dddd, MMMM Do, YYYY")}
                      </motion.div>
                      {[days, hours, minutes, seconds].map((time, index) => {
                        return (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="grid w-32 bg-[#ffffff26] p-4"
                            key={index}
                          >
                            <strong>{time}</strong>
                            <span>
                              {index === 0
                                ? "days"
                                : index === 1
                                ? "hours"
                                : index === 2
                                ? "minutes"
                                : "seconds"}
                            </span>
                          </motion.div>
                        );
                      })}
                    </div>
                  );
                }}
              />
            </div>
          )}
          <div className="px-8 text-center text-lg text-white">
            Ditunggu yaa sampai event nya dibuka :D
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="rounded-[2.0em] bg-[#45AD49] bg-gradient-to-br from-[#77A648] px-5 py-3 font-retroica text-sm tracking-wide text-white transition-all hover:shadow-md lg:text-base"
          >
            <Link href="/">Stay Tuned . .</Link>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
