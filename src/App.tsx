import Blog from "./pages/Blog";
import ComingSoon from "./pages/ComingSoon";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";
import I2C from "./pages/I2C";
import Sponsor from "./pages/Sponsor";
import { AnimatePresence } from "framer-motion";
import { FC } from "react";
import { Route, Routes, useLocation } from "react-router-dom";


const BlogWelcome = [
  {
    author: "Joshua Puniwan Yahya",
    jabatan: "Ketua IFEST#11",
    judul: "Welcome to IFEST#11",
    publication_date: "15 Januari 2023. 12.00 WIB",
    konten: `
    Halo semuanya 👋👋<br>
    Perkenalkan saya Joshua Puniwan Yahya, tahun ini saya dipercaya oleh semesta (Ciailah semesta) untuk menjadi Ketua I-Fest 11.<br><br>
    
    Disini saya ingin mengucapkan Terima kasih kepada Tuhan Yang Maha Esa atas berkat rahmatNya I-Fest ini sudah bisa menginjak ke I-Fest 11. Semoga pada I-Fest tahun ini dapat menjadi festival yang benar-benar bisa menaungi serta menjadi ajang untuk unjuk diri mahasiwa internal UAJY maupun luar UAJY. Dengan dihadirkannya berbagai lomba dan acara-acara yang ada, saya harap semuanya dapat berjalan lancar dan tentunya dapat bermanfaat juga bagi nusa dan bangsa. 
    <br><br>Mungkin itu saja dari saya, dan jangan lupa ya teman-teman untuk pantau terus semua medsos I-Fest dan website ini. Nantikan semua keseruan I-Fest 11 ini yaa
    <br><br>
    <b>IFEST #11 !!! HIGHER STEP, HIGHER PURPOSE WITH INFORMATICS</b>
    `,
    img: "/images/logo.png",
    address: "/blog/welcome",
  },

  // jangan dihapus :)
  // {
  //   author: "Joshua Puniwan Yahya",
  //   jabatan: "Ketua IFEST#11",
  //   judul: "Finalis WDC IFEST#11",
  //   publication_date: "15 Januari 2023. 12.00 WIB",
  //   konten: `
  //     Halo semuanya 👋👋<br>
  //     Perkenalkan saya Joshua Puniwan Yahya, tahun ini saya dipercaya oleh semesta (Ciailah semesta) untuk menjadi Ketua I-Fest 11.<br><br>

  //     Disini saya ingin mengucapkan Terima kasih kepada Tuhan Yang Maha Esa atas berkat rahmatNya I-Fest ini sudah bisa menginjak ke I-Fest 11. Semoga pada I-Fest tahun ini dapat menjadi festival yang benar-benar bisa menaungi serta menjadi ajang untuk unjuk diri mahasiwa internal UAJY maupun luar UAJY. Dengan dihadirkannya berbagai lomba dan acara-acara yang ada, saya harap semuanya dapat berjalan lancar dan tentunya dapat bermanfaat juga bagi nusa dan bangsa. 
  //     <br><br>Mungkin itu saja dari saya, dan jangan lupa ya teman-teman untuk pantau terus semua medsos I-Fest dan website ini. Nantikan semua keseruan I-Fest 11 ini yaa
  //     <br><br>
  //     <b>IFEST #11 !!! HIGHER STEP, HIGHER PURPOSE WITH INFORMATICS</b>
  //     `,
  //   img: "/images/logo.png",
  //   address: "/blog/finalis-wdc",
  //   table: `
  //           <table className="mt-12 w-full table-fixed border font-louisgeorgecafe lg:m-12">
  //             <thead className="border-black bg-[#1F2A3E] text-white ">
  //               <tr>
  //                 <th className="w-[30%] py-3">Nama Tim</th>
  //                 <th>Asal Institusi</th>
  //               </tr>
  //             </thead>
  //             <tbody className="text-center">
  //               <tr className="border transition hover:scale-105 hover:bg-gray-200 hover:font-bold">
  //                 <td className="border py-3">Tim A</td>
  //                 <td>Universitas A</td>
  //               </tr>
  //               <tr className="border transition hover:scale-105 hover:bg-gray-200 hover:font-bold">
  //                 <td className="border py-3">Tim B</td>
  //                 <td>Universitas B</td>
  //               </tr>
  //               <tr className="border transition hover:scale-105 hover:bg-gray-200 hover:font-bold">
  //                 <td className="border py-3">Tim C</td>
  //                 <td>Universitas C</td>
  //               </tr>
  //               <tr className="border transition hover:scale-105 hover:bg-gray-200 hover:font-bold">
  //                 <td className="border py-3">Tim D</td>
  //                 <td>Universitas D</td>
  //               </tr>
  //               <tr className="border transition hover:scale-105 hover:bg-gray-200 hover:font-bold">
  //                 <td className="border py-3">Tim E</td>
  //                 <td>Universitas E</td>
  //               </tr>
  //             </tbody>
  //           </table>
  //   `,
  // },
];

const App: FC = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home Blog={BlogWelcome} />} />
        <Route path="/i2c" element={<I2C />} />
        <Route path="/ui-ux" element={<ComingSoon property={{ pageType: "ui-ux" }} />} />
        <Route path="/wdc" element={<ComingSoon property={{ pageType: "wdc" }} />} />
        <Route
          path="/donor-darah"
          element={<ComingSoon property={{ pageType: "donor-darah-pendaftaran" }} />}
        />
        <Route
          path="/donor-darah/pendaftaran"
          element={<ComingSoon property={{ pageType: "donor-darah-pendaftaran" }} />}
        />
        <Route path="/seminar" element={<ComingSoon property={{ pageType: "seminar" }} />} />
        <Route
          path="/ifest-store"
          element={<ComingSoon property={{ pageType: "ifest-store" }} />}
        />
        <Route path="/sponsor" element={<Sponsor />} />
        <Route
          path="/blog/finalis-wdc"
          // element={<ComingSoon property={{ pageType: "blog-finalis-wdc" }} />}
          element={<Blog Blogs={BlogWelcome[1]} />}/>
        <Route path="/blog/welcome" element={<Blog Blogs={BlogWelcome[0]} />} />

        <Route path="*" element={<ComingSoon property={{ pageType: "default" }} />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;