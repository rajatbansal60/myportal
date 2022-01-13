import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import BodyWrapper from "./Components/BodyWrapper/bodyWrapper";
import React, { Component } from "react";
import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
import Navigation from "./Components/Navigation/Navigation";

class App extends Component {
  render() {
    return (
      <main className="min-vh-100 d-flex flex-column">
        <Header />
        <Navigation />
        <div className="flex-grow-1">
          <BodyWrapper />
        </div>
        <Footer />
      </main>
    );
  }
}

export default App;
