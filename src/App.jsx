import React, { useEffect } from "react";
import bgVideo from "./assets/earth-bg.mp4";
import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero/Hero";
import Services from "./Components/Services/Services";
import Banner from "./Components/Banner/Banner";
import Banner2 from "./Components/Banner/Banner2";
import Footer from "./Components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out',
    });
  }, []); // ✅ Only initialize once

  return (
    <div className="relative z-0">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>

      {/* Content Layers */}
      <NavBar />
      <Hero />
      <Services />
      <Banner />
      <Banner2 />
      <Footer />
    </div>
  );
};

export default App;
