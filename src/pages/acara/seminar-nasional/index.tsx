import ComingSoon from "@/components/ComingSoon";
import acara from "@/data/acara.json";
import { NextSeo } from "next-seo";
import { FC } from "react";

const Index: FC = () => {
  return (
    <>
      <NextSeo
        description={`${acara["seminar-nasional"].name} ${acara["seminar-nasional"].description}`}
        title={`${acara["seminar-nasional"].name} - IFest#11`}
      />
      <ComingSoon date={null} />;
    </>
  );
};

export default Index;
