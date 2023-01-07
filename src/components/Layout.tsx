import { LazyMotion, domAnimation, m } from "framer-motion";
import { FC, ReactNode } from "react";

import NavBar from "./NavBar";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}
      >
        <header>
          <NavBar />
        </header>
        <main>{children}</main>
      </m.div>
    </LazyMotion>
  );
};

export default Layout;
