import React from 'react';
import Webdesign from "../Uix/Webdesign";
import Aboutwebdesign from "../Uix/Aboutwebdesign";
import Designtools from "../Uix/Designtools";
import Image from "../Uix/Image";
import Studenttestimonal from "../Uix/Studenttesmonail";
import Contact from "../Uix/Contact";

function Main() {
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

export default Main
