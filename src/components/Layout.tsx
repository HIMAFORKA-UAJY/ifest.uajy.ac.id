import { motion } from "framer-motion";
import { FC, ReactNode, useState } from "react";
import NavBar from "./NavBar";
interface Props {
    children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
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
                        {children}
                    </main>
                }
            </>

        </motion.div>
    );
};

export default Layout;
