import React from 'react';
import Webdesign from "../Video Editing/Webdesign";
import Aboutwebdesign from "../Video Editing/Aboutwebdesign";
import Designtools from "../Video Editing/Designtools";
import Image from "../Video Editing/Image";
import Studenttestimonal from '../Video Editing/Studenttesmonail';
import Contact from "../Video Editing/Contact";

function Videosmain() {
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

export default Videosmain
