import { Routes, Route } from "react-router-dom";
import Homepage from "../Pages/homepage";
import About from "../Pages/About";
// import

const Navigation = () => (
  <Routes>
    <Route exact path="/home" component={Homepage} />
    <Route exact path="/about" component={About} />
  </Routes>
);

export default Navigation;
