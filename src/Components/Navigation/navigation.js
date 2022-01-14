import { Routes, Route } from "react-router-dom";
import Homepage from "../Pages/homepage";
import About from "../Pages/About";

const Navigation = () => (
  <Routes>
    <Route path="/home" caseSensitive={false} element={<Homepage />} />
    <Route path="/about" caseSensitive={false} element={<About />} />
  </Routes>
);

export default Navigation;
