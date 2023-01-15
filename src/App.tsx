import { AnimatePresence } from "framer-motion";
import { FC } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Blog from "./pages/Blog";
import ComingSoon from "./pages/ComingSoon";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";
import I2C from "./pages/I2C";
import Sponsor from "./pages/Sponsor";

const BlogWelcome = [
  {
    author: "Joshua Puniwan Yahya",
    jabatan: "Ketua IFEST#11",
    judul: "Welcome to IFEST#11",
    publication_date: "15 Januari 2023. 12.00 WIB",
    konten: "Halo teman-teman semuanya 🙌 <br /><br /> pengantar dari joshua",
    img: "/images/logo.png",
    address: "/blog/welcome",
  },
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
        {/* <Route
          path="/blog/finalis-wdc"
          // element={<ComingSoon property={{ pageType: "blog-finalis-wdc" }} />}
          element={<Blog property={{ prop: BlogWelcome[1] }} />}
        /> */}
        <Route path="/blog/welcome" element={<Blog Blogs={BlogWelcome} />} />

        <Route path="*" element={<ComingSoon property={{ pageType: "default" }} />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
