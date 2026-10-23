// import React from "react";
// import "./Testimonials.css";
// import img from "../img/banner-1.png";
// import avatar from "../img/Whychoose--1.png";
// import { GoArrowUpRight } from "react-icons/go";
// import { MdOutlineStarPurple500 } from "react-icons/md";

// const Testimonials = () => {
//   return (
//     <section className="testimonials">
//       <div className="container-fluid">

//         {/* HEADER */}
//         <div className="testimonials-inner">

//           <div className="left">
//             <p className="tag">
//               Testimonials <GoArrowUpRight />
//             </p>

//             <h1 className="title">
//               Insights from Industry <br /> Partners
//             </h1>
//           </div>

//           <div className="right">
//             <div>
//               <p>245 Fifth Avenue, Suite 1800</p>
//               <p>New York, NY 10016, USA</p>
//             </div>

//             <div>
//               <p>+212–555–7398</p>
//               <p>hello@orisa.com</p>
//             </div>
//           </div>

//         </div>

//         {/* GRID */}
//         <div className="grid">

//           {/* LEFT COL */}
//           <div className="left-col">

//             <div className="box number-box">
//               <span className="big">1.8M</span>
//               <span className="plus">+</span>
//             </div>

//             <div className="box active-box">
//               <div className="card-custom">

//                 <div className="top-right">
//                   Active <br /> live cases
//                 </div>

//                 <div className="bottom-left">
//                   <img src={avatar} alt="avatar" className="avatardemo" />

//                   <p className="testimonal-p">
//                     We always provide people a complete solution upon focused of any business
//                   </p>

//                   <div className="stars">
//                     <MdOutlineStarPurple500 />
//                     <MdOutlineStarPurple500 />
//                     <MdOutlineStarPurple500 />
//                     <MdOutlineStarPurple500 />
//                     <MdOutlineStarPurple500 />
//                   </div>
//                 </div>

//               </div>
//             </div>

//           </div>

//           {/* RIGHT COL */}
//           <div className="right-col">

//             <div className="box trusted-box">
//               <div className="card-custom">

//                 <div className="top-right">
//                   Trusted <br /> Partners
//                 </div>

//                 <div className="bottom-left">
//                   <img src={avatar} alt="avatar" className="avatardemo" />

//                   <p className="testimonal-p">
//                     Because sometimes the best design is the one you don’t have to think about.
//                   </p>

//                   <div className="stars">
//                     <MdOutlineStarPurple500 />
//                     <MdOutlineStarPurple500 />
//                     <MdOutlineStarPurple500 />
//                     <MdOutlineStarPurple500 />
//                     <MdOutlineStarPurple500 />
//                   </div>
//                 </div>

//               </div>
//             </div>

//             <div className="box number-box small-number">
//               <span className="big">16K</span>
//               <span className="plus">+</span>
//             </div>

//           </div>

//           {/* EXTRA LEFT COL (your repeated block kept same) */}
//           <div className="left-col">

//             <div className="box number-box">
//               <span className="big">1.8M</span>
//               <span className="plus">+</span>
//             </div>

//             <div className="box active-box">
//               <div className="card-custom">

//                 <div className="top-right">
//                   Active <br /> live cases
//                 </div>

//                 <div className="bottom-left">

//                   <img src={avatar} alt="avatar" className="avatardemo" />

//                   <p className="testimonal-p">
//                     We always provide people a complete solution upon focused of any business
//                   </p>

//                   <div className="stars">
//                     <MdOutlineStarPurple500 />
//                     <MdOutlineStarPurple500 />
//                     <MdOutlineStarPurple500 />
//                     <MdOutlineStarPurple500 />
//                     <MdOutlineStarPurple500 />
//                   </div>
//                 </div>

//               </div>
//             </div>

//           </div>

//           {/* IMAGE */}
//           <div className="image-card">
//             <img src={img} alt="" />
//             <div className="overlay">
//               Real-world experience <br /> through projects.
//             </div>
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default Testimonials;


import React from "react";
import "./Testimonials.css";
import { MdArrowOutward } from "react-icons/md";
import { MdOutlineStarPurple500 } from "react-icons/md";

import img from "../img/testimonail.jpg";
import avatar from "../img/Whychoose--1.png";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="containerfluid">

        {/* HEADER */}
        <div className="testimonial-sectionn">
          <div className="testimonial-content">
            <div className="left-side">
              {/* <p className="small-text">
            Testimonials <MdArrowOutward />
          </p> */}
              {/* <p className="small-text" data-text="Testimonials">
                <span className="small-text-inner">Testimonials</span>
                <MdArrowOutward className="small-icon" />
              </p> */}

              {/* <p className="small-text" data-text="Testimonials">
                <span className="small-text-inner">Testimonials</span>

                <span className="testimonial-arrow-wrapper">
                  <MdArrowOutward className="testimonial-arrow testimonial-arrow-first" />
                  <MdArrowOutward className="testimonial-arrow testimonial-arrow-second" />
                </span>
              </p> */}

                <p className="testimonial-tag">

                <span className="testimonial-tag-wrap">
                  <span className="testimonial-tag-text">Testimonials</span>
                  <span className="testimonial-tag-text-hover">Testimonials</span>
                </span>

                <span className="testimonial-tag-icon-wrap">
                  <span className="testimonial-tag-icon">
                    <MdArrowOutward />
                  </span>

                  <span className="testimonial-tag-icon-hover">
                    <MdArrowOutward />
                  </span>
                </span>

              </p>

              <h3 className="testimonals-titles">
                Real Feedback From  <br />
                Our Valued Clients
              </h3>
            </div>

            <div className="right-side">

              <div className="info-box">
                <p>
                  248-249, KBC- (Kedar Business Center),  <br />
                  Dabholi Road, Katargam, Surat.
                </p>
              </div>

              <div className="info-box">
                <p>
                  +91 97730 31116
                  <br />
                  www.growdeveloper.com
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* GRID */}
        <div className="gridtest">

          {/* COLUMN 1 */}
          <div className="left-col">

            <div className="box number-box">
              <span className="big">Pankaj Tavethiya</span>
              <span className="plus">+</span>
            </div>

            <div className="box active-box">
              <div className="card-custom">

                <div className="top-right">
                  (India)
                </div>

                <div className="bottom-left">

                  <img
                    src={avatar}
                    alt="avatar"
                    className="avatardemo"
                  />

                  <p className="testimonal-p">
                    "Best IT Company I have ever worked with. Prompt, responsive, and expert work. Highly recommended!"
                  </p>
                  <div className="stars">
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                  </div>


                </div>

              </div>
            </div>

          </div>

          {/* COLUMN 2 */}
          <div className="right-col">

            <div className="box trusted-box">

              <div className="card-custom">

                <div className="top-right">
                  (United States)
                </div>

                <div className="bottom-left">

                  <img
                    src={avatar}
                    alt="avatar"
                    className="avatardemo"
                  />

                  <p className="testimonal-p">
                    "Working with Grow Developer team has been excellent in all ways, including the
                    quality of work provided and the communication. Up to this point, they appear
                    to be very honest and hard-working. I'm very thankful to be working with them!"
                  </p>

                  <div className="stars">
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                  </div>

                </div>

              </div>

            </div>

            <div className="box number-box small-number">
              <span className="big">  Zhuri</span>
              <span className="plus">+</span>
            </div>

          </div>

          {/* COLUMN 3 */}
          <div className="left-col">

            <div className="box number-box">
              <span className="big"> Gopal Vadgama</span>
              <span className="plus">+</span>
            </div>

            <div className="box active-box">

              <div className="card-custom">

                <div className="top-right">
                  (India)
                </div>

                <div className="bottom-left">

                  <img
                    src={avatar}
                    alt="avatar"
                    className="avatardemo"
                  />

                  <p className="testimonal-p">
                    "It is always a pleasure to work with the Grow Developer and his team. They are personable and results-oriented!"
                  </p>

                  <div className="stars">
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* IMAGE CARD */}
          {/* <div className="image-card">

            <img src={img} alt="banner" />

          </div> */}


          <div className="image-card">
            <img src={img} alt="banner" />

            <div className="image-overlay">
              <h2>
                Real-world experience
                <br />
                through projects.
              </h2>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;  