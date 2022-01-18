import { Routes, Route } from "react-router-dom";
import Homepage from "../Pages/homepage";
import About from "../Pages/About";
import { Blog } from "../Pages/blog";

const Navigation = () => (
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/about" element={<About />} />
    <Route path="/blog" element={<Blog />} />
  </Routes>
);

export default Navigation;
