import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import I2C from "./pages/I2C";
import WDC from "./pages/WDC";
import CP from "./pages/CP";
import DonorDarah from "./pages/DonorDarah";
import Seminar from "./pages/Seminar";
import Sponsor from "./pages/Sponsor";
import Error404 from "./pages/Error404";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/i2c" element={<I2C />} />
          <Route path="/wdc" element={<WDC />} />
          <Route path="/cp" element={<CP />} />
          <Route path="/donor-darah" element={<DonorDarah />} />
          <Route path="/seminar" element={<Seminar />} />
          <Route path="/sponsor" element={<Sponsor />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </>
  );
}
