import { FC } from "react";
import { MdEmail, SiInstagram, SiLine } from "react-icons/all";

interface Props {
    className: string;
}

const Footer: FC<Props> = (props: Props) => {
    return (
        <div className={props.className}>
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 justify-center border-t-2 pt-8">
                <img className="w-24 lg:h-16" src="https://ifest.uajy.ac.id/assets/images/branding/logo-ifest_generic.png" alt="ifest-logo" />
                <div className="flex flex-col gap-2 text-left">
                    <div className="font-retroica text-xl text-white">IFest#11</div>
                    <div className="font-louisgeorgecafe text-white opacity-70">IFest adalah acara tahunan HIMAFORKA UAJY yang telah dimulai sejak tahun 2013 yang lalu.</div>
                </div>
                <div className="flex flex-col gap-2 text-left">
                    <div className="font-retroica text-xl text-white">Kompetisi</div>
                    <div className="font-louisgeorgecafe text-white opacity-70">Innovative Informatics Contest (I2C)</div>
                    <div className="font-louisgeorgecafe text-white opacity-70">Web Design Competition (WDC)</div>
                    <div className="font-louisgeorgecafe text-white opacity-70">Competitive Programming (CP)</div>
                </div>
                <div className="flex flex-col gap-2 text-left">
                    <div className="font-retroica text-xl text-white">Acara</div>
                    <div className="font-louisgeorgecafe text-white opacity-70">Seminar Nasional</div>
                    <div className="font-louisgeorgecafe text-white opacity-70">Donor Darah</div>
                </div>
                <div className="flex flex-col gap-2 text-left">
                    <div className="font-retroica text-xl text-white">Akses</div>
                    <div className="font-louisgeorgecafe text-white opacity-70">Daftar</div>
                    <div className="font-louisgeorgecafe text-white opacity-70">Masuk</div>
                </div>
                <div className="flex flex-col gap-2 text-left">
                    <div className="font-retroica text-xl text-white">Sosial Media</div>
                    <div className="font-louisgeorgecafe text-white opacity-70 flex items-center gap-2">
                        <SiInstagram /> Instagram
                    </div>
                    <div className="font-louisgeorgecafe text-white opacity-70 flex items-center gap-2">
                        <SiLine /> LINE
                    </div>
                    <div className="font-louisgeorgecafe text-white opacity-70 flex items-center gap-2">
                        <MdEmail /> Email
                    </div>
                </div>
                <div className="border-t-2"></div>
                <div className="flex flex-col gap-2 text-center lg:hidden">
                    <div className="font-retroica text-sm text-white opacity-80">Design by SI x Muldok IFest#11</div>
                </div>
            </div>
            <div className="hidden lg:flex lg:justify-center pt-6 font-retroica text-sm  text-white opacity-80">Design by SI x Muldok IFest#11</div>
        </div>
    );
};

export default Footer;
