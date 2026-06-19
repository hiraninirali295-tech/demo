import React from 'react';
import Webdesign from "../Flutter Application Development/Webdesign";
import Aboutwebdesign from "../Flutter Application Development/Aboutwebdesign";
import Designtools from "../Flutter Application Development/Designtools";
import Image from "../Flutter Application Development/Image";
import Studenttestimonal from "../Flutter Application Development/Studenttesmonail";
import Contact from "../Flutter Application Development/Contact";

function Fluttermain() {
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

export default Fluttermain
