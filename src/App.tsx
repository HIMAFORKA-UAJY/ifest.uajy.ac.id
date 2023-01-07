import { AnimatePresence } from "framer-motion";
import { FC, Suspense, lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Home from "./pages/Home";

// const FoodBazaar = lazy(() => import("./pages/FoodBazaar"));
// const Hackathon = lazy(() => import("./pages/Hackathon"));
// const Home = lazy(() => import("./pages/Home"));
// const Seminar = lazy(() => import("./pages/Seminar"));
const DonorDarah = lazy(() => import("./pages/DonorDarah"));
const Error404 = lazy(() => import("./pages/Error404"));
const I2C = lazy(() => import("./pages/I2C"));
const Sponsor = lazy(() => import("./pages/Sponsor"));
const UnderDevelopment = lazy(() => import("./pages/UnderDevelopment"));
const WDC = lazy(() => import("./pages/WDC"));

const App: FC = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/i2c" element={<I2C />} />
          <Route path="/wdc" element={<WDC />} />
          <Route path="/hackathon" element={<UnderDevelopment />} />
          <Route path="/seminar" element={<UnderDevelopment />} />
          <Route path="/donor-darah" element={<DonorDarah />} />
          <Route path="/food-bazaar" element={<UnderDevelopment />} />
          <Route path="/sponsor" element={<Sponsor />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

export default App;
