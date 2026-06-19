import React from 'react';
import Webdesign from "../Android Application Development/Webdesign";
import Aboutwebdesign from "../Android Application Development/Aboutwebdesign";
import Designtools from "../Android Application Development/Designtools";
import Image from "../Android Application Development/Image";
import Studenttestimonal from '../Android Application Development/Studenttesmonail';
import Contact from "../Android Application Development/Contact";

function Androidmain() {
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

export default Androidmain
