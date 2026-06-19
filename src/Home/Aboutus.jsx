

// import React from "react";
// import "./AboutSection.css";
// import img1 from "../img/Abouthome-1.png";
// import img2 from "../img/Abouthome-2.png";
// import avatar from "../img/About1.png";
// import logo1 from "../img/test-1.png";
// import logo2 from '../img/test-1.png'
// import img3 from '../img/banner-1.png'
// import img4 from '../img/banner.png'
// import { MdArrowOutward } from "react-icons/md";


// function AboutSection() {

//   return (
//     <>
//       <div className="page-wrapper">
//         <section className="hero">
//           <div className="hero-container">
          

//             <a href="#" className="about-link" data-text="About Us">
//               <span className="about-text">About Us</span>

//               <span className="about-icon-wrapper">
//                 <span className="about-icon">
//                   <MdArrowOutward />
//                 </span>

//                 <span className="about-icon-hover">
//                   <MdArrowOutward />
//                 </span>
//               </span>
//             </a>






//             <div className="hero-text-wrap">
//               <h1 className="hero-title">
//                 We Help Our Clients To <br />
//                 Grow Their Business
               

//                 <span className="inline-btn">
//                   <button className="hero-button">

//                     <span className="btn-text-wrap">
//                       <span className="btn-text">GET IN TOUCH</span>
//                       <span className="btn-text-hover">GET IN TOUCH</span>
//                     </span>

//                     <span className="about-icon-wrapper">
//                       <span className="about-icon">
//                         <MdArrowOutward />
//                       </span>

//                       <span className="about-icon-hover">
//                         <MdArrowOutward />
//                       </span>
//                     </span>

//                   </button>
//                 </span>




               
//               </h1>
//             </div>
//           </div>

//           <div className="feature-container">

            
//             <div className="feature-left">
//               <p className="feature-text">
//                 At Grow Developer, we partner with businesses to build
//                 powerful digital solutions that drive growth, improve efficiency,
//                 and create lasting impact. From web development to custom
//                 software solutions, we help brands transform ideas into
//                 successful digital experiences.
//               </p>

//               <div className="avatars">
//                 <img src={logo1} />
//                 <img src={logo1} />
//                 <img src={logo2} />
//                 <img src={logo1} />
//                 <img src={logo2} />
//                 <span className="avatar-count">15+</span>
//               </div>
//             </div>

            
//             <div className="feature-center">
//               <img src={img1} className="mainimg" />
//               <h3 className="aboutsection">Custom Digital Solutions</h3>
//               <p className="right-texts">
//                 We create scalable websites, web applications, and software
//                 tailored to your business goals, helping you stay
//                 ahead in a competitive market.
//               </p>
//             </div>

            
//             <div className="feature-right">
//               <h3 className="aboutsection">Business Growth & Innovation</h3>
//               <p className="right-texts">
//                 Through modern technology, strategic thinking, and user-focused
//                 design, we empower businesses to increase engagement, streamline
//                 operations, and accelerate growth.
//               </p>
//               <img src={img2} className="side-img" />
//             </div>

//           </div>
//         </section>

//       </div>
//     </>

//   );
// }

// export default AboutSection;




import React from "react";
import "./AboutSection.css";
import img1 from "../img/Abouthome-1.png";
import img2 from "../img/Abouthome.png";
import avatar from "../img/About1.png";
import logo1 from "../img/test-1.png";
import logo2 from '../img/test-1.png'
import img3 from '../img/banner-1.png'
import img4 from '../img/banner.png'
import { MdArrowOutward } from "react-icons/md";


function AboutSection() {

  return (
    <>
      <div className="page-wrapper">
        <section className="hero">
          <div className="hero-container">
            {/* <a href="#" className="about-link">
              About US{" "}
              <span>
                <MdArrowOutward />

              </span>
            </a> */}

            <a href="#" className="about-link" data-text="About Us">
              <span className="about-text">About Us</span>

              <span className="about-icon-wrapper">
                <span className="about-icon">
                  <MdArrowOutward />
                </span>

                <span className="about-icon-hover">
                  <MdArrowOutward />
                </span>
              </span>
            </a>

            <div className="hero-text-wrap">
              <h1 className="hero-title">
                We Help Our Clients To <br />
                Grow Their Business
                {/* <span className="inline-btn">
                  <button className="hero-button">
                    GET IN TOUCH <MdArrowOutward style={{ fontSize: "20px" }} />

                  </button>
                </span> */}

                <span className="inline-btn">
                  <button className="hero-buttons">

                    <span className="btn-text-wrap">
                      <span className="btn-text">GET IN TOUCH</span>
                      <span className="btn-text-hover">GET IN TOUCH</span>
                    </span>

                    <span className="about-icon-wrapper">
                      <span className="about-icon">
                        <MdArrowOutward />
                      </span>

                      <span className="about-icon-hover">
                        <MdArrowOutward />
                      </span>
                    </span>

                  </button>
                </span>
              </h1>
            </div>
          </div>

          <div className="feature-container">

            {/* LEFT */}
            <div className="feature-left">
              <p className="feature-text">
                At Grow Developer, we partner with businesses to build
                powerful digital solutions that drive growth, improve efficiency,
                and create lasting impact. From web development to custom
                software solutions, we help brands transform ideas into
                successful digital experiences.
              </p>

              <div className="avatars">
                <img src={logo1} />
                <img src={logo1} />
                <img src={logo2} />
                <img src={logo1} />
                <img src={logo2} />
                <span className="avatar-count">15+</span>
              </div>
            </div>

            {/* CENTER */}
            <div className="feature-center">
              <img src={img1} className="mainimg" />
              <h3 className="aboutsection">Custom Digital Solutions</h3>
              <p className="right-texts">
                We create scalable websites, web applications, and software <br />
                tailored to your business goals, helping you stay <br />
                ahead in a competitive market.
              </p>
            </div>

            {/* RIGHT */}
            <div className="feature-right">
              <h3 className="aboutsection">Business Growth & Innovation</h3>
              <p className="right-texts">
                Through modern technology, strategic thinking, and user-focused <br />
                design, we empower businesses to increase engagement, streamline <br />
                operations, and accelerate growth.
              </p>
              <img src={img2} className="side-img" />
            </div>

          </div>
        </section>

      </div>
    </>

  );
}

export default AboutSection;