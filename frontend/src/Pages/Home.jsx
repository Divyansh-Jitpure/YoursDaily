import React from "react";
import Navbar from "../Components/LandingPage/Navbar";
import Hero from "../Components/LandingPage/Hero";
import Footer from "../Components/LandingPage/Footer";

const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* Hero */}
      <Hero />
      {/* Content */}
      <section></section>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
