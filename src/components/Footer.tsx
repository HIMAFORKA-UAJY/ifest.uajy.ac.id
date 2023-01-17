import logo from "@/assets/images/logo.png";
import footer from "@/data/footer.json";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { SiInstagram, SiLine } from "react-icons/Si";
import { MdEmail } from "react-icons/md";

const Footer: FC = () => {
  const router = useRouter();
  const [color, setColor] = useState<string>("");

  useEffect(() => {
    switch (router.pathname) {
      case "/":
        setColor("#2b2265");
        break;
    }
  }, [router.pathname]);

  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <SiInstagram />;
      case 1:
        return <SiLine />;
      case 2:
        return <MdEmail />;
    }
  };

  return (
    <>
      <div
        className="flex flex-col justify-center gap-3 px-2 pt-10 pb-4 lg:flex-row lg:gap-8"
        style={{ backgroundColor: color }}
      >
        <Image className="w-1/5 lg:h-[5%] lg:w-[5%]" src={logo} alt="ifest-logo" />
        <div className="flex flex-col gap-2 text-left text-white">
          <div className="font-retroica text-xl tracking-widest">IFest#11</div>
          <div className="font-louisgeorgecafe opacity-70">
            IFest adalah acara tahunan HIMAFORKA UAJY yang telah dimulai sejak tahun 2013 yang lalu.
          </div>
        </div>
        <div className="py-1"></div>
        {footer.map((nav, index) => {
          return (
            <div className="flex flex-col gap-2 text-left text-white" key={index}>
              <div className="font-retroica text-xl">{nav.name}</div>
              {nav.data.map((item, index) => {
                return (
                  <Link
                    className="flex w-fit items-center gap-2 font-louisgeorgecafe opacity-40 transition ease-in-out hover:translate-x-2 hover:opacity-90"
                    href={item.link}
                    key={index}
                  >
                    {nav.name === "Sosial Media" ? getIcon(index) : ""}
                    {item.name}
                  </Link>
                );
              })}
            </div>
          );
        })}
        <div className="border-t-2 border-black/20" />
        <div className="text-center font-retroica text-sm text-white opacity-80 lg:hidden">
          2023 Design by SI x Muldok IFest#11
        </div>
      </div>
    </>
  );
};

export default Footer;
