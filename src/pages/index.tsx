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
import Head from "next/head";
import { FC } from "react";

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>IFest#11 - Higher Steps, Higher Purpose with Informatics</title>
        <link rel="icon" type="image/png" href="/images/logo.png" />
        <meta charSet="UTF-8" />
        <meta name="title" content="IFest#11 - Higher Steps, Higher Purpose with Informatics" />
        <meta
          name="description"
          content="IFest adalah acara tahunan HIMAFORKA UAJY yang telah dimulai sejak tahun 2013 yang lalu."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
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
        <CP get="all" />
      </Container>
    </>
  );
};

export default Home;
