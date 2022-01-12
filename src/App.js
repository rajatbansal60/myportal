import './App.css';
import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';
import Slider from './Components/Slider/slider';
import { Routes, Route, Switch, Link } from "react-router-dom";
import BodyWrapper from './Components/BodyWrapper/bodyWrapper';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <main className="min-vh-100 d-flex flex-column">
      <Header />
      <div className="flex-grow-1"><BodyWrapper /></div>
      <Footer />
    </main>
  );
}

export default App;
