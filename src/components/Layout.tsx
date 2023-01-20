import { motion } from "framer-motion";
import { FC, ReactNode, useEffect } from "react";

import NavBar from "./NavBar";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }: Props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="layout cursor-default">
      <nav>
        <NavBar />
      </nav>
      <main>{children}</main>
    </motion.div>
  );
};

export default Layout;
