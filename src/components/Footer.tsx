import { FC } from "react";
import { MdEmail, SiInstagram, SiLine } from "react-icons/all";
import { Link } from "react-router-dom";

import logo from "../assets/images/logo.png";

interface Props {
  className: string;
}

const Footer: FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <div
        className="flex flex-col justify-center gap-6 border-t-2 pt-8 lg:flex-row lg:gap-12"
        style={{ borderColor: "rgb(0 0 0 / 9%)" }}
      >
        <img className="w-24 lg:w-32" src={logo} alt="ifest-logo" />
        <div className="flex flex-col gap-2 text-left">
          <div className="font-retroica text-xl text-white">IFest#11</div>
          <div className="font-louisgeorgecafe text-white opacity-70">
            IFest adalah acara tahunan HIMAFORKA UAJY yang telah dimulai sejak tahun 2013 yang lalu.
          </div>
        </div>
        <div className="flex flex-col gap-2 text-left">
          <div className="font-retroica text-xl text-white">Kompetisi</div>
          <div className="font-louisgeorgecafe text-white opacity-70">
            <Link to="/i2c">Innovative Informatics Contest (I2C)</Link>
          </div>
          <div className="font-louisgeorgecafe text-white opacity-70">
            <Link to="/wdc">Web Design Competition (WDC)</Link>
          </div>
          <div className="font-louisgeorgecafe text-white opacity-70">
            <Link to="/hackathon">Hackathon</Link>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-left">
          <div className="font-retroica text-xl text-white">Acara</div>
          <div className="font-louisgeorgecafe text-white opacity-70">
            <Link to="/food-bazaar">Food Bazaar</Link>
          </div>
          <div className="font-louisgeorgecafe text-white opacity-70">
            <Link to="/donor-darah">Donor Darah</Link>
          </div>
          <div className="font-louisgeorgecafe text-white opacity-70">
            <Link to="/seminar">Seminar Nasional</Link>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-left">
          <div className="font-retroica text-xl text-white">Bisnis</div>
          <div className="font-louisgeorgecafe text-white opacity-70">
            <Link to="/sponsor">Sponsor</Link>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-left">
          <div className="font-retroica text-xl text-white">Akses</div>
          <div className="font-louisgeorgecafe text-white opacity-70">
            <a href="/dashboard/daftar" target="_blank" rel="noopener noreferrer">
              Daftar
            </a>
          </div>
          <div className="font-louisgeorgecafe text-white opacity-70">
            <a href="/dashboard/masuk" target="_blank" rel="noopener noreferrer">
              Masuk
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-left">
          <div className="font-retroica text-xl text-white">Sosial Media</div>
          <a
            className="flex items-center gap-2 font-louisgeorgecafe text-white opacity-70"
            href="https://www.instagram.com/ifest_uajy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiInstagram />
            Instagram
          </a>
          <a
            className="flex items-center gap-2 font-louisgeorgecafe text-white opacity-70"
            href="https://line.me/ti/p/~@ykb1847q"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLine />
            LINE
          </a>
          <a
            className="flex items-center gap-2 font-louisgeorgecafe text-white opacity-70"
            href="mailto:ifest@uajy.ac.id"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdEmail />
            Email
          </a>
        </div>
        <div className="border-t-2" style={{ borderColor: "rgb(0 0 0 / 9%)" }} />
        <div className="flex flex-col gap-2 text-center lg:hidden">
          <div className="font-retroica text-sm text-white opacity-80">
            2023 Design by SI x Muldok IFest#11
          </div>
        </div>
      </div>
      <div className="hidden pt-6 font-retroica text-sm text-white opacity-80  lg:flex lg:justify-center">
        2023 Design by SI x Muldok IFest#11
      </div>
    </div>
  );
};

export default Footer;
