import React from "react";
import Header from "../components/layout/Header";
import Hero from "../components/homepage/Hero";

import Experience from "../components/homepage/Experience";
import AboutUs from "../components/homepage/AboutUs";
import Services from "../components/homepage/Services";

import Inspiration from "../components/homepage/Inspiration";
import Apply from "../components/homepage/Apply";

import Destination from "../components/homepage/Destination";
import Review from "../components/homepage/Review";
import Photos from "../components/homepage/Photos";
import Searchbar from "../components/destination/Searchbar";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Searchbar />
      <Experience />
      <AboutUs />
      <Inspiration />
      <Services />
      <Apply />
      <Destination />
      <Review />
      <Photos />
    </div>
  );
};

export default Homepage;
