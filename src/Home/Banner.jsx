// import React from "react";
// import "./Bannersection.css";
// import heroImg from "../img/banner.png";
// import smallImg from "../img/banner-1.png";
// import { HiArrowTurnDownRight } from "react-icons/hi2";


// function HeroSection() {
//   return (
//     <section className="hero-section">
//       <div className="container-fluid px-custom">
//         <div className="row align-items-center">


//           <div className="col-lg-3 left-box">
//             <div className="info-card">
//               <span className="tag"> WHY DO WE USE IT?</span>

//               <h6 className="mt-3">
//                 It Is Your Safe Place In An Unsafe World
//               </h6>

//               <img src={smallImg} alt="" className="small-img" />
//             </div>
//           </div>


//           <div className="col-lg-6 text-center position-relative center-box">
//             <img src={heroImg} alt="" className="hero-img" />

//             <h1 className="bg-text">
//               <span className="desktop-text">DEVELOPER</span>
//               <span className="mobile-text">Grow Developer</span>
//             </h1>
//           </div>


//           <div className="col-lg-3 right-box">
//             <span className="star">✦</span>

//             <h2>I’m Orisa Nova</h2>

//             <p>
//               At Grow Developer, We deliver extraordinary and easily operated
//               user-friendly Mobile app and web development services.
//             </p>

//             {/* <button className="btn custom-btn">
//               View All Projects 
//             </button> */}

//             {/* <div className="project-btn-wrapper">
//               <button className="btn custom-btn">
//                 View All Projects
//               </button>

//               <button className="btn arrow-btn">

//                 <HiArrowTurnDownRight className="arrow-icon" />
//               </button>
//             </div> */}

//             <div className="project-btn-wrapper">
//               <button className="btn custom-btn">
//                 View All Projects
//               </button>
              
//               <button className="btn arrow-btn">
//                 <HiArrowTurnDownRight className="arrow-icon" />
//               </button>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// export default HeroSection;


import React from 'react';
import img1 from "../img/Group 147 (1).png";
import "./Bannersection.css";
import smallImg from "../img/banner-1.png";
import { HiArrowTurnDownRight } from "react-icons/hi2";


function New() {
    return (
        <>
            <section className="hero-section">
                <div className="container-fluid px-custom">
                    <div className="row ">
                        <div className="col-lg-3 left-box">
                            <div className="info-card">
                                <span className="tags">
                                    WHY CHOOSE GROW DEVELOPER?
                                </span>

                                <h6 className="mt-3">
                                    It Is Your Safe Place In <br />
                                    An Unsafe World
                                </h6>

                                <img src={smallImg} alt="" className="small-imgs" />
                            </div>
                        </div>


                        <div className="col-lg-6 text-center position-relative center-box">
                            {/* <img src={heroImg} alt="" className="hero-img" /> */}
                            <div className='newdemo'>
                                <img className='Newimg' src={img1} alt="" />
                            </div>

                        </div>


                        <div className="col-lg-3 right-box">
                            <span className="star">✦</span>

                            <h2>Your Trusted Partner In Digital Growth</h2>

                            <p>
                                At Grow Developer, we build high-performance websites,
                                mobile applications, and custom software solutions
                                designed to transform ideas into successful digital products.
                            </p>



                            <div className="project-btn-wrapper">
                                <button className="btn custom-btn">
                                    View Our Work
                                </button>

                                <button className="btn arrow-btn">

                                    <HiArrowTurnDownRight className="arrow-icon" />
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default New
