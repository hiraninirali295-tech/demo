import React from 'react';
import Webdesign from "../IOS Application Development/Webdesign";
import Aboutwebdesign from "../IOS Application Development/Aboutwebdesign";
import Designtools from "../IOS Application Development/Designtools";
import Image from "../IOS Application Development/Image";
import Studenttestimonal from "../IOS Application Development/Studenttesmonail";
import Contact from "../IOS Application Development/Contact";

function Iosmain() {
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

export default Iosmain
