import React from 'react';
import Webdesign from "../AI/Webdesign";
import Aboutwebdesign from "../AI/Aboutwebdesign";
import Designtools from "../AI/Designtools";
import Image from "../AI/Image";
import Studenttestimonal from '../AI/Studenttesmonail';
import Contact from "../AI/Contact";

function Aimain() {
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

export default Aimain
