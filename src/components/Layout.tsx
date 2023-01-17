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
    <div className="layout">
      <NavBar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
