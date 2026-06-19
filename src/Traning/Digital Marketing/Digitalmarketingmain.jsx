import React from 'react';
import Webdesign from "../Digital Marketing/Webdesign";
import Aboutwebdesign from "../Digital Marketing/Aboutwebdesign";
import Designtools from "../Digital Marketing/Designtools";
import Image from "../Digital Marketing/Image";
import Studenttestimonal from "../Digital Marketing/Studenttesmonail";
import Contact from "../Digital Marketing/Contact";

function digitalmain() {
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

export default digitalmain
