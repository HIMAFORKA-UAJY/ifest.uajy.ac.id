import { motion } from "framer-motion";
import { FC, ReactNode, useEffect } from "react";

import NavBar from "./NavBar";

interface Props {
  children: ReactNode;
  route: string;
}

const Layout: FC<Props> = ({ children, route }: Props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <motion.div
      animate={{ opacity: 1 }}
      className="layout cursor-default"
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      key={route}
      transition={{ duration: 0.5 }}
    >
      <nav>
        <NavBar />
      </nav>
      <main>{children}</main>
    </motion.div>
  );
};

export default Layout;
