import React from 'react';
import Webdesign from "../Graphics Design/Webdesign";
import Aboutwebdesign from "../Graphics Design/Aboutwebdesign";
import Designtools from "../Graphics Design/Designtools";
import Image from "../Graphics Design/Image";
import Studenttestimonal from "../Graphics Design/Studenttesmonail";
import Contact from "../Graphics Design/Contact";

function Graphicsmain() {
  return (
    <div>
        <Webdesign/>
      <Aboutwebdesign/>
      <Designtools/>
      {/* <Image/> */}
      <Image/>
      <Studenttestimonal/>
      <Contact/>
    </div>
  )
}

export default Graphicsmain
