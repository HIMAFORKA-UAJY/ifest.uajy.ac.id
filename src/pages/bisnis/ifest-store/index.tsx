import ComingSoon from "@/components/ComingSoon";
import { NextSeo } from "next-seo";
import { FC } from "react";

const Index: FC = () => {
  return (
    <>
      <NextSeo title={`IFest Store - IFest#11`} />
      <ComingSoon date={"2023-02-20"} />
    </>
  );
};

export default Index;
