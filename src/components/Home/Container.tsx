import Footer from "@/components/Footer";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Container: FC<Props> = ({ children }: Props) => {
  return (
    <div className="absolute top-0 -z-10 h-screen w-full bg-[url('/images/bg-no-flip.png')] bg-cover bg-center bg-no-repeat">
      {children}
      <Footer />
    </div>
  );
};

export default Container;
