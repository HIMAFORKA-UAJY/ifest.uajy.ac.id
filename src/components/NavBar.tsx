import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Popover } from '@headlessui/react';

import logo from "../assets/images/logo.png";

export default function NavBar() {
    return (
        <motion.div
            className="flex justify-between items-center p-4 lg:px-16"
            initial={{ y: -1024 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
        >
            <Link className="text-2xl w-14" to="/">
                <img src={logo} />
            </Link>
            <div className="text-white text-lg tracking-[0.2em] lg:hidden">IFEST#11</div>
            <div className="hidden lg:flex flex-row gap-12">
                <Link className="cursor-default font-retroica text-white text-xl tracking-[0.2em]" to="/i2c">Kompetisi</Link>
                <Link className="cursor-default font-retroica text-white text-xl tracking-[0.2em]" to="/wdc">Acara</Link>
                <Link className="bg-slate-400 font-retroica text-white text-xl tracking-[0.2em]" to="/hackathon">Dashboard</Link>
            </div>
            <Popover className="lg:hidden text-white">
                <Popover.Button className="focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-white w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </Popover.Button>
                <Popover.Panel >
                    <div className="grid">
                        <a href="/analytics">Analytics</a>
                        <a href="/engagement">Engagement</a>
                        <a href="/security">Security</a>
                        <a href="/integrations">Integrations</a>
                    </div>
                </Popover.Panel>
            </Popover>
        </motion.div>
    );
}
