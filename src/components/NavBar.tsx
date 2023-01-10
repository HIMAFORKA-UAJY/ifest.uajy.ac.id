import { Menu, Popover } from "@headlessui/react";
import { motion } from "framer-motion";
import { FC, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import logo from "../assets/images/logo.png";

interface Color {
  bg1: string;
  bg2: string;
  fg: string;
}

const NavBar: FC = () => {
  const location = useLocation();
  const [color, setColor] = useState<Color>({ bg1: "", bg2: "", fg: "" });

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setColor({ bg1: "#211A44", bg2: "#3D3474", fg: "#BFB2FF" });
        break;

      case "/i2c":
        setColor({ bg1: "#211A44", bg2: "#3D3474", fg: "#BFB2FF" });
        break;

      case "/wdc":
        setColor({ bg1: "#311D38", bg2: "#4E4074", fg: "#E7A3FF" });
        break;

      case "/donor-darah":
        setColor({ bg1: "#2d2544", bg2: "#54467d", fg: "#b7a5ec" });
        break;

      case "/sponsor":
        setColor({ bg1: "#152435", bg2: "#182E47", fg: "#479EC6" });
        break;

      case "/blog/finalis-wdc":
        setColor({ bg1: "#211A44", bg2: "#3D3474", fg: "#BFB2FF" });
        break;

      default:
        setColor({ bg1: "#8E332DF2", bg2: "#DB7F58CC", fg: "#FFFFFF" });
        break;
    }
  }, [location.pathname]);

  return (
    <motion.div
      className="z-10 flex items-center justify-between p-4 lg:px-16"
      initial={{ y: -1024 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 18 }}
    >
      <Link className="w-14 text-2xl" to="/">
        <img src={logo} alt="ifest-logo" />
      </Link>
      <div className="text-lg tracking-[0.2em] text-white lg:hidden">IFEST#11</div>
      <div className="hidden flex-row items-center gap-12 lg:flex">
        <div>
          <Menu>
            <Menu.Button className="flex cursor-pointer items-center gap-2 font-retroica text-xl tracking-[0.2em] text-[#ffffffb5]">
              Kompetisi
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.96497 0H12.085C16.5116 0 18.3116 3.13333 16.1116 6.96L15.125 8.66667C14.885 9.08 14.445 9.33333 13.965 9.33333H3.08497C2.60497 9.33333 2.16497 9.08 1.92497 8.66667L0.938298 6.96C-1.2617 3.13333 0.538299 0 4.96497 0ZM4.24763 10.6667H12.821C13.341 10.6667 13.661 11.2267 13.3943 11.6667L12.541 13.1333C10.341 16.96 6.7143 16.96 4.5143 13.1333L3.66097 11.6667C3.40763 11.2267 3.72763 10.6667 4.24763 10.6667Z"
                  fill="white"
                  fillOpacity="0.72"
                />
              </svg>
            </Menu.Button>
            <Menu.Items>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute mt-4 flex cursor-pointer flex-col gap-3 rounded-[0.7em] px-8 py-4 font-retroica text-xl tracking-[0.2em] shadow-lg"
                style={{ backgroundColor: color.bg1, color: color.fg }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="cursor-default rounded-[0.7em] font-retroica text-xl"
                  style={{ color: color.fg }}
                >
                  <Menu.Item>
                    {({ active }) => (
                      <Link className={`${active && "text-[#fff]"}`} to="/i2c">
                        I2C
                      </Link>
                    )}
                  </Menu.Item>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="cursor-default rounded-[0.7em] font-retroica text-xl"
                  style={{ color: color.fg }}
                >
                  <Menu.Item>
                    {({ active }) => (
                      <Link className={`${active && "text-[#fff]"}`} to="/wdc">
                        WDC
                      </Link>
                    )}
                  </Menu.Item>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="cursor-default rounded-[0.7em] font-retroica text-xl"
                  style={{ color: color.fg }}
                >
                  <Menu.Item>
                    {({ active }) => (
                      <Link className={`${active && "text-[#fff]"}`} to="/hackathon">
                        Hackathon
                      </Link>
                    )}
                  </Menu.Item>
                </motion.div>
                {/* <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="rounded-[0.7em] font-retroica text-xl cursor-default text-[#bfb2ff]"
                                >
                                    <Menu.Item>
                                        {({ active }) => (
                                            <Link
                                                className={`${active && 'text-[#fff]'}`}
                                                to="/hackathon"
                                            >
                                                Hackathon
                                            </Link>
                                        )}
                                    </Menu.Item>
                                </motion.div> */}
              </motion.div>
            </Menu.Items>
          </Menu>
        </div>
        <div>
          <Menu>
            <Menu.Button className="flex cursor-default items-center gap-2 font-retroica text-xl tracking-[0.2em] text-[#ffffffb5]">
              Acara
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.96497 0H12.085C16.5116 0 18.3116 3.13333 16.1116 6.96L15.125 8.66667C14.885 9.08 14.445 9.33333 13.965 9.33333H3.08497C2.60497 9.33333 2.16497 9.08 1.92497 8.66667L0.938298 6.96C-1.2617 3.13333 0.538299 0 4.96497 0ZM4.24763 10.6667H12.821C13.341 10.6667 13.661 11.2267 13.3943 11.6667L12.541 13.1333C10.341 16.96 6.7143 16.96 4.5143 13.1333L3.66097 11.6667C3.40763 11.2267 3.72763 10.6667 4.24763 10.6667Z"
                  fill="white"
                  fillOpacity="0.72"
                />
              </svg>
            </Menu.Button>
            <Menu.Items>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute mt-4 flex cursor-default flex-col gap-3 rounded-[0.7em] px-8 py-4 font-retroica text-xl tracking-[0.2em] shadow-lg"
                style={{ backgroundColor: color.bg1, color: color.fg }}
              >
                {/* <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="rounded-[0.7em] font-retroica text-xl cursor-default text-[#bfb2ff]"
                                >
                                    <Menu.Item>
                                        {({ active }) => (
                                            <Link
                                                className={`${active && 'text-[#fff]'}`}
                                                to="/seminar"
                                            >
                                                Seminar
                                            </Link>
                                        )}
                                    </Menu.Item>
                                </motion.div> */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="cursor-default rounded-[0.7em] font-retroica text-xl"
                  style={{ color: color.fg }}
                >
                  <Menu.Item>
                    {({ active }) => (
                      <Link className={`${active && "text-[#fff]"}`} to="/food-bazaar">
                        Food Bazaar
                      </Link>
                    )}
                  </Menu.Item>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="cursor-default rounded-[0.7em] font-retroica text-xl"
                  style={{ color: color.fg }}
                >
                  <Menu.Item>
                    {({ active }) => (
                      <Link className={`${active && "text-[#fff]"}`} to="/donor-darah">
                        Donor Darah
                      </Link>
                    )}
                  </Menu.Item>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="cursor-default rounded-[0.7em] font-retroica text-xl"
                  style={{ color: color.fg }}
                >
                  <Menu.Item>
                    {({ active }) => (
                      <Link className={`${active && "text-[#fff]"}`} to="/seminar">
                        Seminar Nasional
                      </Link>
                    )}
                  </Menu.Item>
                </motion.div>
              </motion.div>
            </Menu.Items>
          </Menu>
        </div>
        <button
          className="inline-block cursor-default rounded-[2.0em] px-4 py-2 font-retroica text-xl tracking-[0.2em]"
          style={{ backgroundColor: color.bg2, color: color.fg }}
        >
          <Link to="/dashboard">Dashboard</Link>
        </button>
      </div>

      <Popover className="text-white lg:hidden">
        <Popover.Button className="focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-8 w-8 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </Popover.Button>
        <Popover.Panel>
          <motion.div
            initial={{ y: -1024 }}
            animate={{ y: 0 }}
            exit={{ y: -1024 }}
            transition={{ type: "spring", stiffness: 100, damping: 25 }}
            style={{ backgroundColor: color.bg1 }}
            className="fixed left-0 top-0 z-10 flex h-screen w-screen flex-col items-center justify-center gap-10"
          >
            <Popover.Button className="focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-8 w-8"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </Popover.Button>
            <div className="flex flex-col items-center gap-2">
              <div
                className="font-retroica text-xl font-bold tracking-[6px]"
                style={{ color: color.fg }}
              >
                Kompetisi
              </div>
              <div className="flex gap-2">
                <button
                  className="py- cursor-default rounded-full border-4 px-4 font-retroica text-xl tracking-wide"
                  style={{ borderColor: color.bg2, color: color.fg }}
                >
                  <Link to="/i2c">I2C</Link>
                </button>
                <button
                  className="py- cursor-default rounded-full border-4 px-4 font-retroica text-xl tracking-wide"
                  style={{ borderColor: color.bg2, color: color.fg }}
                >
                  <Link to="/wdc">WDC</Link>
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div
                className="font-retroica text-xl font-bold tracking-[6px]"
                style={{ color: color.fg }}
              >
                Acara
              </div>
              <div className="flex gap-2">
                <button
                  className="py- cursor-default rounded-full border-4 px-4 font-retroica text-xl tracking-wide"
                  style={{ borderColor: color.bg2, color: color.fg }}
                >
                  <Link to="/food-bazaar">Food Bazaar</Link>
                </button>
                <button
                  className="py- cursor-default rounded-full border-4 px-4 font-retroica text-xl tracking-wide"
                  style={{ borderColor: color.bg2, color: color.fg }}
                >
                  <Link to="/donor-darah">Donor Darah</Link>
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div
                className="font-retroica text-xl font-bold tracking-[6px]"
                style={{ color: color.fg }}
              >
                Bisnis
              </div>
              <button
                className="py- cursor-default rounded-full border-4 px-4 font-retroica text-xl tracking-wide"
                style={{ borderColor: color.bg2, color: color.fg }}
              >
                <Link to="/sponsor">Sponsor</Link>
              </button>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div
                className="font-retroica text-xl font-bold tracking-[6px]"
                style={{ color: color.fg }}
              >
                Akses
              </div>
              <button
                className="inline-block w-full cursor-default rounded-[2.0em] px-4 py-2 font-retroica text-xl tracking-wide"
                style={{ backgroundColor: color.bg2, color: color.fg }}
              >
                <Link to="/dashboard">Dashboard</Link>
              </button>
            </div>
          </motion.div>
        </Popover.Panel>
      </Popover>
    </motion.div>
  );
};

export default NavBar;
