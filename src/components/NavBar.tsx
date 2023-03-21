import navs from "@/data/navs.json";
import { navColors } from "@/recoil/atoms";
import { Menu, Popover } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { FC } from "react";
import { useRecoilValue } from "recoil";

interface Color {
  bg1: string;
  bg2: string;
  fg: string;
}

const NavBar: FC = () => {
  const color: Color = useRecoilValue(navColors);
  return (
    <div className="z-10 flex items-center justify-between p-4 lg:px-16 2xl:px-32">
      <motion.div
        animate={{ opacity: 1 }}
        className="w-16"
        initial={{ opacity: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link href={"/"}>
          <img alt="ifest-logo" src="/images/logo.webp" />
        </Link>
      </motion.div>

      <div className="hidden gap-16 lg:flex">
        {navs.map((nav, index) => {
          return (
            <motion.div
              animate={{ y: 0 }}
              initial={{ y: -1024 }}
              key={index}
              transition={{ type: "spring", stiffness: 100, damping: 18, delay: index * 0.5 }}
            >
              <Menu>
                {({ open }) => (
                  <>
                    <motion.div
                      className="cursor-default rounded-[0.7em] font-retroica text-xl text-[#c0bfc9]"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Menu.Button className="flex cursor-pointer items-center gap-2 font-retroica text-xl tracking-[0.2em] text-[#ffffffb5]">
                        {nav.name}
                        <svg
                          fill="none"
                          height="17"
                          viewBox="0 0 16 17"
                          width="16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.96497 0H12.085C16.5116 0 18.3116 3.13333 16.1116 6.96L15.125 8.66667C14.885 9.08 14.445 9.33333 13.965 9.33333H3.08497C2.60497 9.33333 2.16497 9.08 1.92497 8.66667L0.938298 6.96C-1.2617 3.13333 0.538299 0 4.96497 0ZM4.24763 10.6667H12.821C13.341 10.6667 13.661 11.2267 13.3943 11.6667L12.541 13.1333C10.341 16.96 6.7143 16.96 4.5143 13.1333L3.66097 11.6667C3.40763 11.2267 3.72763 10.6667 4.24763 10.6667Z"
                            fill="white"
                            fillOpacity="0.72"
                          />
                        </svg>
                      </Menu.Button>
                    </motion.div>
                    <AnimatePresence>
                      {open && (
                        <Menu.Items static>
                          <motion.div
                            animate={{ opacity: 1 }}
                            className="absolute mt-2 flex cursor-pointer flex-col gap-2 rounded-[0.7em] px-8 py-4 font-retroica text-xl tracking-[0.2em] shadow-lg"
                            exit={{ opacity: 0 }}
                            initial={{ opacity: 0 }}
                            style={{ backgroundColor: color.bg1, color: color.fg }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            {nav.data.map((item, index) => {
                              return (
                                <motion.div
                                  className="cursor-default rounded-[0.7em] font-retroica text-xl"
                                  key={index}
                                  style={{ color: color.fg }}
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                >
                                  <Menu.Item>
                                    {({ active }) => {
                                      return item.name === "Dashboard" ? (
                                        <Link
                                          className={`${active && "text-[#fff]"}`}
                                          href="https://ifest.uajy.ac.id/dash"
                                          rel="noreferrer"
                                          target="_blank"
                                        >
                                          {item.name}
                                        </Link>
                                      ) : (
                                        <Link
                                          className={`${active && "text-[#fff]"}`}
                                          href={item.link}
                                        >
                                          {item.name}
                                        </Link>
                                      );
                                    }}
                                  </Menu.Item>
                                </motion.div>
                              );
                            })}
                          </motion.div>
                        </Menu.Items>
                      )}
                    </AnimatePresence>
                  </>
                )}
              </Menu>

              <Menu>
                <Menu.Items></Menu.Items>
              </Menu>
            </motion.div>
          );
        })}
      </div>

      <Popover className="text-white lg:hidden">
        {({ open }) => (
          <>
            <Popover.Button>
              <motion.svg
                animate={{ opacity: 1 }}
                className="w-10"
                fill="none"
                initial={{ opacity: 0 }}
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </Popover.Button>
            <AnimatePresence>
              {open && (
                <Popover.Panel static>
                  <motion.div
                    animate={{ y: 0 }}
                    className="fixed inset-0 z-50 flex min-h-screen w-full flex-col items-center justify-center gap-10 px-4"
                    exit={{ y: -1024 }}
                    initial={{ y: -1024 }}
                    style={{ backgroundColor: color.bg1 }}
                    transition={{ type: "spring", stiffness: 100, damping: 25 }}
                  >
                    <Popover.Button>
                      <svg
                        className="h-8 w-8"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        style={{ color: color.fg }}
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 18L18 6M6 6l12 12"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Popover.Button>
                    {navs.map((nav, index) => {
                      return (
                        <div className="flex flex-col items-center gap-2" key={index}>
                          <div
                            className="cursor-default font-retroica text-xl font-bold tracking-[0.25em]"
                            style={{ color: color.fg }}
                          >
                            {nav.name}
                          </div>
                          <div className="flex gap-2">
                            <>
                              {nav.data.map((item, index) => {
                                return item.name === "Dashboard" ? (
                                  <Link
                                    href="https://ifest.uajy.ac.id/dash/"
                                    key={index}
                                    rel="noreferrer"
                                    target="_blank"
                                  >
                                    <motion.button
                                      className="cursor-default rounded-full border-4 px-4 py-1 font-retroica text-xl tracking-wide"
                                      style={{
                                        backgroundColor:
                                          item.name === "Dashboard" ? color.bg2 : color.bg1,
                                        borderColor: color.bg2,
                                        color: color.fg,
                                      }}
                                      whileTap={{ scale: 0.9 }}
                                    >
                                      {item.name}
                                    </motion.button>
                                  </Link>
                                ) : (
                                  <Link href={item.link} key={index}>
                                    <motion.button
                                      className="cursor-default rounded-full border-4 px-4 py-1 font-retroica text-xl tracking-wide"
                                      style={{
                                        backgroundColor:
                                          item.name === "Dashboard" ? color.bg2 : color.bg1,
                                        borderColor: color.bg2,
                                        color: color.fg,
                                      }}
                                      whileTap={{ scale: 0.9 }}
                                    >
                                      {item.name}
                                    </motion.button>
                                  </Link>
                                );
                              })}
                            </>
                          </div>
                        </div>
                      );
                    })}
                  </motion.div>
                </Popover.Panel>
              )}
            </AnimatePresence>
          </>
        )}
      </Popover>
    </div>
  );
};

export default NavBar;
