import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import AboutUs from "./components/AboutUs";
import Inspiration from "./components/Inspiration";
import Services from "./components/Services";
import Apply from "./components/Apply";
import Destination from "./components/Destination";
import Review from "./components/Review";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Experience />
      <AboutUs />
      <Inspiration />
      <Services />
      <Apply />
      <Destination />
      <Review />
    </>
  );
}

export default App;
