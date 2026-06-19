import React from 'react';
import Webdesign from "../Sales/Webdesign";
import Aboutwebdesign from "../Sales/Aboutwebdesign";
import Designtools from "../Sales/Designtools";
import Image from "../Sales/Image";
import Studenttestimonal from '../Sales/Studenttesmonail';
import Contact from "../Sales/Contact";

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
