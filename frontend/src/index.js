import React from "react";

import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import HomePage from "./landing_page/home/HomePage";
// import Signup from "./landing_page/signup/Signup";
// import AboutPage from "./landing_page/about/AboutPage";
// import ProductPage from "./landing_page/products/ProductPage";
// import PricingPage from "./landing_page/pricing/PricingPage";
// import SupportPage from "./landing_page/support/SupportPage";
// import NotFound from "./landing_page/NotFound";
 import Navbar from "./landing_page/Navbar";
 import Footer from "./landing_page/Footer";

import HomePage from "./landing_page/home/HomePage";
import Awards from "./landing_page/home/Awards";
import Education from "./landing_page/home/Education";
import Hero from "./landing_page/home/Hero";
import Pricing from "./landing_page/home/Pricing";
import Stats from "./landing_page/home/Stats";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      {/* <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="/*" element={<NotFound />} /> */}

      <Route path="/" element={<HomePage />} />
      <Route path="/awards" element={<Awards />} />
      <Route path="/education" element={<Education />} />
      <Route path="/hero" element={<Hero />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/stats" element={<Stats />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);