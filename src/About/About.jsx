import React, { useContext } from "react";

import Aboutus from "../About/Aboutus";
import Teamsection from "../About/Teamsection";
import Countersection from "../About/Countersection";
import Image from "../About/Image";
import Aboutcopy from "../About/Aboutus copy";
import Ourcompanyvalue from "../About/Ourcompanyvalue";
import Companytypesection from "../About/Companytypesection";
import Img from "../About/Img";

import { ThemeContext } from "../App";

function About() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <Aboutus />
      <Aboutcopy />
      <Countersection />
      <Companytypesection />
      <Ourcompanyvalue />
      <Image />
      <Teamsection />
      <Img />
    </div>
  );
}

export default About;
