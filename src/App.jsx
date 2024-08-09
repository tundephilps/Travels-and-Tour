import { useState } from "react";
import "./App.css";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Destination from "./pages/Destination";
import DestinationDetails from "./pages/DestinationDetails";
import ContactUs from "./pages/ContactUs";
import Header from "./components/layout/Header";

import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Destination" element={<Destination />} />
          <Route path="/DestinationDetails" element={<DestinationDetails />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
