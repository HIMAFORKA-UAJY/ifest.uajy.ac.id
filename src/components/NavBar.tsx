import { Menu, Popover } from '@headlessui/react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import logo from "../assets/images/logo.png";

export default function NavBar() {
    return (
        <motion.div
            className="flex justify-between items-center p-4 lg:px-16 z-10"
            initial={{ y: -1024 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 18 }}
        >
            <Link className="text-2xl w-14" to="/">
                <img src={logo} />
            </Link>
            <div className="text-white text-lg tracking-[0.2em] lg:hidden">IFEST#11</div>
            <div className="hidden lg:flex flex-row items-center gap-12">
                <div>

                    <Menu>
                        <Menu.Button className="cursor-default font-retroica text-white text-xl tracking-[0.2em]" >Kompetisi</Menu.Button>
                        <Menu.Items className="absolute flex flex-col gap-2 text-white">
                            <Menu.Item>
                                {({ active }) => (
                                    <Link
                                        className={`${active && 'bg-blue-500'}`}
                                        to="/i2c"
                                    >
                                        I2C
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <Link
                                        className={`${active && 'bg-blue-500'}`}
                                        to="/wdc"
                                    >
                                        WDC
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <Link
                                        className={`${active && 'bg-blue-500'}`}
                                        to="/hackathon"
                                    >
                                        Hackathon
                                    </Link>
                                )}
                            </Menu.Item>
                        </Menu.Items>
                    </Menu>
                </div>
                <div>
                    <Menu>
                        <Menu.Button className="cursor-default font-retroica text-white text-xl tracking-[0.2em]">Acara</Menu.Button>
                        <Menu.Items className="absolute flex flex-col gap-2 text-white">
                            <Menu.Item>
                                {({ active }) => (
                                    <Link
                                        className={`${active && 'bg-blue-500'}`}
                                        to="/seminar"
                                    >
                                        Seminar
                                    </Link>
                                )}
                            </Menu.Item>
                        </Menu.Items>
                    </Menu>
                </div>
                <button className="bg-[#3d3474] rounded-[2.0em] inline-block px-4 py-2 cursor-default font-retroica text-[#bfb2ff] text-xl tracking-[0.2em]">
                    <Link to="/dashboard">Dashboard</Link>
                </button>
            </div>

            <Popover className="lg:hidden text-white">
                <Popover.Button className="focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-white w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </Popover.Button>
                <Popover.Panel>
                    <motion.div
                        initial={{ y: -1024 }}
                        animate={{ y: 0 }}
                        exit={{ y: -1024 }}
                        transition={{ type: "spring", stiffness: 100, damping: 25 }}
                        className="bg-[#211a44] z-10 flex flex-col justify-center items-center gap-8 fixed left-0 top-0 h-screen w-screen">
                        <Popover.Button className="focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </Popover.Button>
                        <div>
                            <div className="flex flex-col gap-2 p-8">
                                <h2 className="text-2xl">Kompetisi</h2>
                                <div className="p-2 bg-[#49436a] flex gap-4 items-center">
                                    <div className="bg-slate-400 w-16 h-16"></div>
                                    <div>
                                        <Link to="/i2c">I2C</Link>
                                        <p>
                                            Mari keluarkan ide kreatif kalian dalam dunia IT disini.
                                        </p>
                                    </div>
                                </div>
                                <div className="p-2 bg-[#49436a] flex gap-4 items-center">
                                    <div className="bg-slate-400 w-16 h-16"></div>
                                    <div>
                                        <Link to="/i2c">WDC</Link>
                                        <p>
                                            Mari keluarkan ide kreatif kalian dalam dunia IT disini.
                                        </p>
                                    </div>
                                </div>
                                <div className="p-2 bg-[#49436a] flex gap-4 items-center">
                                    <div className="bg-slate-400 w-16 h-16"></div>
                                    <div>
                                        <Link to="/i2c">Hackathon</Link>
                                        <p>
                                            Mari keluarkan ide kreatif kalian dalam dunia IT disini.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </motion.div>
                </Popover.Panel>
            </Popover>
        </motion.div>
    );
}
