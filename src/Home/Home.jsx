

import React, { useContext } from "react";

import Banner from "../Home/Banner";
import Aboutus from "../Home/Aboutus";
import Countersection from "../Home/Countersection";
import WhyChooseUs from "../Home/Whychoose";
import Ourservices from "../Home/Ourservices";
import Testimonials from "../Home/Testimonials";

import { ThemeContext } from "../App";
import Services from "../Home/Services"
import Technical  from "../Home/Technical"
// import "./Home.css";
import TechnicalSkills from "./Technical";

function Home() {

  const { darkMode } = useContext(ThemeContext);

  return (

    <div className={darkMode ? "home dark-home" : "home light-home"}>

      <Banner />

      <Aboutus />

      <Countersection />

      <Ourservices />

      <WhyChooseUs />

      <Technical/>

             <Services/>

      <Testimonials />



    </div>
  );
}

export default Home;