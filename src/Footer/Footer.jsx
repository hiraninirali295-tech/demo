// import React, { useContext, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./Footer.css";


// import logoBlack from "../img/Group 148 white.png";
// import logoWhite from "../img/Group 148.png";
// import { ThemeContext } from "../App";

// const Footer = () => {
//    const { darkMode, setDarkMode } = useContext(ThemeContext);
//   return (
//     <section className="growdeveloper-footer">
//       <div className="growdeveloper-container">

//         {/* Top Content */}
//         <div className="growdeveloper-top">

//           <div className="growdeveloper-contact">
//             <p>+91 96627 48007</p>
//             <p>+91 1570 60417</p>

//             <a href="mailto:hr@growdeveloper.com">
//               hr@growdeveloper.com
//             </a>
//           </div>

//           <div className="growdeveloper-address">
//             <p>
//               248–249, KBC-(Kedar Business Center),<br />
//               Dabholi Road, Katargam, Surat,
//               Gujarat 395004.
//             </p>
//           </div>

//           <div className="growdeveloper-service-box">
//             <h5>Our Services</h5>

//             <ul>
//               <li>Web Design & Development</li>
//               <li>Application Development</li>
//               <li>Software Development</li>
//               <li>Graphics Design</li>
//               <li>UI/UX Design</li>
//               <li>Digital Marketing</li>
//               <li>Cyber Security</li>
//             </ul>
//           </div>

//           <div className="growdeveloper-service-box">
//             <h5>Our Courses</h5>

//             <ul>
//               <li>Web Design & Development</li>
//               <li>Application Development</li>
//               <li>Graphics Design</li>
//               <li>UI/UX Design</li>
//               <li>Digital Marketing</li>
//               <li>Cyber Security</li>
//             </ul>
//           </div>

//         </div>

//         {/* Brand Area */}
//         <div className="growdeveloper-brand-section">

//           {/* <h1 className="growdeveloper-brand-title">
//             Grow
//             <span>Developer</span>
//           </h1> */}

//           <div className="growdeveloper-footer-img">
//             <img src={darkMode ? darkLogo : lightLogo} alt="Grow Developer" />
//           </div>

//         </div>

//         {/* Social Links */}
//         {/* <div className="growdeveloper-social-bar">

//           <div>[ Linkedin ]</div>

//           <div>[ Facebook ]</div>

//           <div>[ Instagram ]</div>

//         </div> */}

//         <div className="footer-bottom">
//           <a
//             href="https://www.linkedin.com/login"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="social-link"
//           >
//             <span>[ Linkedin ]</span>
//           </a>

//           <a
//             href="https://www.facebook.com/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="social-link"
//           >
//             <span>[ Facebook ]</span>
//           </a>

//           <a
//             href="https://www.instagram.com/accounts/login/?hl=en"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="social-link"
//           >
//             <span>[ Instagram ]</span>
//           </a>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Footer;

import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

import logoBlack from "../img/Group 148.png"; // Normal Mode Logo
import logoWhite from "../img/Group 148 white.png"; // Dark Mode Logo

import { ThemeContext } from "../App";

const Footer = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section className="growdeveloper-footer">
      <div className="growdeveloper-container">
        {/* Top Content */}
        <div className="growdeveloper-top">
          <div className="growdeveloper-contact">
            <p>+91 96627 48007</p>
            <p>+91 1570 60417</p>

            <a href="mailto:hr@growdeveloper.com">
              hr@growdeveloper.com
            </a>
          </div>

          <div className="growdeveloper-address">
            <p>
              248–249, KBC-(Kedar Business Center),
              <br />
              Dabholi Road, Katargam, Surat,
              Gujarat 395004.
            </p>
          </div>

          <div className="growdeveloper-service-box">
            <h5>Our Services</h5>

            <ul>
              <li>Web Design & Development</li>
              <li>Application Development</li>
              <li>Software Development</li>
              <li>Graphics Design</li>
              <li>UI/UX Design</li>
              <li>Digital Marketing</li>
              <li>Cyber Security</li>
            </ul>
          </div>

          <div className="growdeveloper-service-box">
            <h5>Our Courses</h5>

            <ul>
              <li>Web Design & Development</li>
              <li>Application Development</li>
              <li>Graphics Design</li>
              <li>UI/UX Design</li>
              <li>Digital Marketing</li>
              <li>Cyber Security</li>
            </ul>
          </div>
        </div>

        {/* Brand Area */}
        <div className="growdeveloper-brand-section">
          <div className="growdeveloper-footer-img">
            <img
              src={darkMode ? logoWhite : logoBlack}
              alt="Grow Developer"
            />
          </div>
        </div>

        {/* Social Links */}
        <div className="footer-bottom">
          <a
            href="https://www.linkedin.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <span>[ Linkedin ]</span>
          </a>

          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <span>[ Facebook ]</span>
          </a>

          <a
            href="https://www.instagram.com/accounts/login/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <span>[ Instagram ]</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;