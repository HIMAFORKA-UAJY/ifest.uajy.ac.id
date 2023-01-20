import logo from "@/assets/images/logo.png";
import footer from "@/data/footer.json";
import Image from "next/image";
import { FC } from "react";
import { SiInstagram, SiLine } from "react-icons/Si";
import { MdEmail } from "react-icons/md";

interface Props {
  className?: string;
}

const Footer: FC<Props> = ({ className }: Props) => {
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
        className={`${className} grid justify-center gap-3 px-6 pt-10 pb-4 lg:grid-cols-7 lg:gap-8 lg:px-8`}
      >
        <div>
          <Image
            className="w-24 transition-transform hover:scale-110"
            src={logo}
            alt="ifest-logo"
          />
        </div>
        <div className="flex flex-col gap-2 text-left text-white">
          <div className="font-retroica text-xl tracking-widest">IFest#11</div>
          <div className="font-louisgeorgecafe opacity-70">
            IFest adalah acara tahunan HIMAFORKA UAJY yang telah dimulai sejak tahun 2013 yang lalu.
          </div>
        </div>
        {footer.map((nav, index) => {
          return (
            <div className="flex flex-col gap-2 text-left text-white" key={index}>
              <div className="font-retroica text-xl">{nav.name}</div>
              {nav.data.map((item, index) => {
                return nav.name === "Akses" ? (
                  <a
                    className="flex w-fit items-center gap-2 font-louisgeorgecafe opacity-40 transition ease-in-out hover:translate-x-2 hover:opacity-90"
                    href={`https://ifest.uajy.ac.id${item.link}`}
                    key={index}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.name}
                  </a>
                ) : (
                  <a
                    className="flex w-fit items-center gap-2 font-louisgeorgecafe opacity-40 transition ease-in-out hover:translate-x-2 hover:opacity-90"
                    href={item.link}
                    key={index}
                  >
                    {nav.name === "Sosial Media" ? getIcon(index) : ""}
                    {item.name}
                  </a>
                );
              })}
            </div>
          );
        })}
        <div className="col-span-full border-t-2 border-black/20" />
        <div className="col-span-full text-center font-retroica text-sm text-white opacity-80">
          2023 Design by SI x Muldok IFest#11
        </div>
      </div>
    </>
  );
};

export default Footer;
