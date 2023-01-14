import { AnimatePresence } from "framer-motion";
import { FC } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Blog from "./pages/Blog";
import DonorDarah from "./pages/DonorDarah";
import Error404 from "./pages/Error404";
import FoodBazaar from "./pages/FoodBazaar";
import Hackathon from "./pages/Hackathon";
import Home from "./pages/Home";
import I2C from "./pages/I2C";
import Seminar from "./pages/Seminar";
import Sponsor from "./pages/Sponsor";
import UnderDevelopment from "./pages/UnderDevelopment";
import WDC from "./pages/WDC";
import ComingSoon from "./pages/ComingSoon";

const App: FC = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="*" element={<ComingSoon property={{pageType:'default'}}/>}/>
        <Route path="/" element={<Home />} />
        <Route path="/i2c" element={<I2C />} />
        <Route path="/ui-ux" element={<ComingSoon property={{pageType:'ui-ux'}}/>} />
        <Route path="/wdc" element={<ComingSoon property={{pageType:'wdc'}}/>} />
        <Route path="/donor-darah" element={<DonorDarah />} />
        <Route path="/seminar" element={<ComingSoon property={{pageType:'seminar'}}/>} />
        <Route path="/ifest-store" element={<ComingSoon property={{pageType:'ifest-store'}}/>} />
        <Route path="/sponsor" element={<Sponsor />} />
        <Route path="/blog/finalis-wdc" element={<ComingSoon property={{pageType:'blog-finalis-wdc'}}/>}/>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
