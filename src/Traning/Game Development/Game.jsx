import React from 'react';
import Webdesign from "../Game Development/Webdesign";
import Aboutwebdesign from "../Game Development/Aboutwebdesign";
import Designtools from "../Game Development/Designtools";
import Image from "../Game Development/Image";
import Studenttestimonal from '../Game Development/Studenttesmonail';
import Contact from "../Game Development/Contact";

function Game() {
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

export default Game
