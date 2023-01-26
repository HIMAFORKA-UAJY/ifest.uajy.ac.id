import CP from "@/components/CP";
import Container from "@/components/Home/Container";
import ContentRenderer from "@/components/Home/ContentRenderer";
import FAQ from "@/components/Home/FAQ";
import Hero from "@/components/Home/Hero";
import MediaPartner from "@/components/Home/MediaPartner";
import Publication from "@/components/Home/Publication";
import ShootingStars from "@/components/Home/ShootingStars";
import Sponsor from "@/components/Home/Sponsor";
import acara from "@/data/acara.json";
import kompetisi from "@/data/kompetisi.json";
import { navColors } from "@/recoil/atoms";
import { NextSeo } from "next-seo";
import { FC } from "react";
import { useSetRecoilState } from "recoil";

const Home: FC = () => {
  useSetRecoilState(navColors)({ bg1: "#211a44", bg2: "#3d3474", fg: "#bfb2ff" });
  return (
    <>
      <NextSeo
        canonical="https://ifest.uajy.ac.id"
        description="IFest adalah acara tahunan HIMAFORKA UAJY yang telah dimulai sejak tahun 2013 yang lalu."
        title="IFest#11 - Higher Steps, Higher Purpose with Informatics"
      />
      <Container>
        <ShootingStars />
        <Hero />
        <ContentRenderer content={kompetisi.i2c} />
        <ContentRenderer content={kompetisi.wdc} />
        <ContentRenderer content={kompetisi.muc} />
        <ContentRenderer content={acara["donor-darah"]} />
        <ContentRenderer content={acara["seminar-nasional"]} />
        <Publication />
        <FAQ />
        <Sponsor />
        <MediaPartner />
        <CP className="bg-[#3b3275]" get="all" />
      </Container>
    </>
  );
};

export default Home;
