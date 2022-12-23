import { FC, ReactNode, useState } from "react";
import { motion } from "framer-motion";

import NavBar from "./NavBar";
import Footer from "./Footer";

interface Props {
    children: ReactNode;
}

const Layout: FC<Props> = (props: Props) => {
    const [openNav, setOpenNav] = useState<boolean>(false);
    const [openMain, setOpenMain] = useState<boolean>(false);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            onAnimationComplete={() => setOpenNav(true)}
        >
            <>
                {openNav &&
                    <header>
                        <NavBar />
                    </header>
                    || setTimeout(() => {
                        setOpenMain(true);
                    }, 1000)
                }

                {openMain &&
                    <main>
                        {props.children}
                    </main>
                }
            </>

        </motion.div>
    );
};

export default Layout;
