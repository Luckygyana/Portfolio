import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
import { DATA } from "./Components/Data";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header data={DATA.main} />
        <About data={DATA.main} />
        <Resume data={DATA.resume} />
        <Portfolio data={DATA.portfolio} />
        <Contact data={DATA.main} />
        <Footer data={DATA.main} />
      </div>
    );
  }
}

export default App;
