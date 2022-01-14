import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import React, { Component, useEffect } from "react";
import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
import Navigation from "./Components/Navigation/Navigation";
import { useNavigate } from "react-router-dom";

const App = () => {
  let navigate = useNavigate();
  // useEffect(() => {
  //   navigate("/home", { replace: true });
  // }, []);

  return (
    <main className="min-vh-100 d-flex flex-column">
      <Header />
      <div className="flex-grow-1">
        <Navigation />
      </div>
      <Footer />
    </main>
  );
};

export default App;
