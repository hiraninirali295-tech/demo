// import React from "react";
// import "./Webdesign.css";
// import bannerImg from "../../img/webdesign.png";

// const WebDesignSection = () => {
//   return (
//     <section className="webdesign-section">

     
//       <div className="webdesign-hero">
//         <div className="hero-content">
//           <h1>Web Design</h1>

//           <p>
//             Learn how to design professional, user-friendly, and fully
//             responsive websites from basic to advanced level with real-world
//             projects.
//           </p>
//         </div>
//       </div>

    
//       <div className="webdesign-skills">
//         <span>HTML</span>
//         <span>CSS</span>
//         <span>JavaScript</span>
//         <span>Bootstrap</span>
//         <span>VS Code</span>
//       </div>

     
//       <div className="webdesign-image">
//         <img src={bannerImg} alt="Web Design" />
//       </div>

//     </section>
//   );
// };

// export default WebDesignSection;


import React from "react";
import "./Webdesign.css";

import careerImg from "../../../src/img/Group 206.png";
import trainingIcon from "../../../src/img/Group 207.png";
import practiceIcon from "../../../src/img/Group 208.png";

function CareerGrowth() {
  return (
    <section className="career-growth-section">
      <div className="container">

        <div className="career-wrapper">

          {/* Left Side */}
          <div className="career-left">
            <img
              src={careerImg}
              alt="Career Growth"
              className="career-main-image"
            />
          </div>

          {/* Right Side */}
          <div className="career-right">

            <h2 className="career-title">
              Practical Learning for Real Career Growth
            </h2>

            <ul className="career-feature-list">
              <li>Industry-oriented Live Projects</li>
              <li>Expert Mentors with 10+ Years Experience</li>
              <li>Practical-based Teaching Approach</li>
              <li>Recognized Certification & Portfolio</li>
            </ul>

            <div className="career-info-wrapper">

              <div className="career-info-box">
                <img src={trainingIcon} alt="Training" />

                <div>
                  <h5>6 Months</h5>
                  <span>Power Skill Training</span>
                </div>
              </div>

              <div className="career-info-box">
                <img src={practiceIcon} alt="Practice" />

                <div>
                  <h5>2 Hours</h5>
                  <span>Daily Practice Time</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default CareerGrowth;