import Footer from "@/components/Footer";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Container: FC<Props> = ({ children }: Props) => {
  return (
    <div className="absolute top-0 -z-10 h-screen w-full bg-[url('/images/bg-no-flip.webp')] bg-cover bg-center bg-no-repeat">
      {children}
      <Footer className="bg-[#2b2265]" />
    </div>
  );
};

export default Container;
