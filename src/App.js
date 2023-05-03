import "./App.css";
import React from "react";
import Navbar from "./Navbar";
import Features from "./Features";
import CTA from "./CTA";
import Brand from "./Brand";
import Blog from "./Blog";
import Footer from "./Footer";
import Header from "./Header";
import Possibility from "./Possibility";
import WhatGPT3 from "./WhatGPT3";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
