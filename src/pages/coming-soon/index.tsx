import Link from "next/link";
import { FC } from "react";

const Index: FC = () => {
  return (
    <div className="absolute top-0 -z-10 h-screen w-screen bg-[url('/images/bg-no-flip.png')] bg-cover bg-center bg-no-repeat">
      <div className="bg-gradient-to-b from-[#40BA62]/80 to-[#219068]/80 font-retroica">
        <div className="flex h-screen flex-col items-center justify-center gap-6">
          <div className="text-center text-5xl font-bold text-white">Coming Soon</div>
          <div className="px-8 text-center text-lg text-white">
            Ditunggu yaa sampai event nya dibuka :D
            <br />
          </div>
          <button
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // transition={{ delay: 0.0, duration: 0.25 }}
            className="rounded-[2.0em] bg-[#45AD49] bg-gradient-to-br from-[#77A648] px-5 py-3 font-retroica text-sm text-white transition-all hover:tracking-wider hover:shadow-md lg:text-base"
          >
            <Link href="/">Stay Tuned . .</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
