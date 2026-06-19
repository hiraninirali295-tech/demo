import React, { useState } from "react";
import "./Technical.css";

// import img1 from "../img/$RPXI1HJ copy.png";
// import img2 from "../img/Whychoose--1.png";
// import img3 from "../img/banner.png";
// import img4 from "../img/test-3.png";
// import img5 from "../img/test-2.png";

function TechnicalSkills() {

  const [activeImage, setActiveImage] = useState(null);

  const skills = [
    {
      title: "Coding and Programming",
      // image: img1,
    },

    {
      title: "Project Management",
      // image: img2,
    },

    {
      title: "Social Media Management & Marketing",
      // image: img3,
    },

    {
      title: "Technical Writing",
      // image: img4,
    },

    {
      title: "More Technical Skills",
      // image: img5,
    },
  ];

  return (
    <section className="technical-main-section">

      <div className="technical-top-text">
      

        <h1>Technical Skills</h1>
      </div>


      <div className="technical-skills-wrap">

        {skills.map((item, index) => (

          <div
            className="technical-skill-item"
            key={index}
            onMouseEnter={() => setActiveImage(item.image)}
            onMouseLeave={() => setActiveImage(null)}
          >

            <h2>{item.title}</h2>

          </div>

        ))}

      </div>


      {/* HOVER IMAGE */}

      <div
        className={`technical-hover-image ${
          activeImage ? "show-image" : ""
        }`}
      >
        {activeImage && <img src={activeImage} alt="" />}
      </div>

    </section>
  );
}

export default TechnicalSkills;