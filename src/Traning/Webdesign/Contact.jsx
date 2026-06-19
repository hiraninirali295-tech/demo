// import React from "react";
// import "./Contact.css";
// import { FaPaperPlane } from "react-icons/fa";
// import contactImg from "../img/contact.png";

// const ContactSection = () => {
  

//   return (
//     <section className="sh-contact-section">
//       <div className="container-fluid px-lg-5">
//         <div className="row align-items-center g-4">

//           <div className="col-lg-5">
//             <div className="sh-image-wrapper">

//               <img
//                 src={contactImg}
//                 alt="Contact"
//                 className="sh-main-image"
//               />

//               <div className="sh-floating-box">
//                 <div className="sh-icon-circle">
//                   <FaPaperPlane />
//                 </div>

//                 <div className="sh-contact-content">
//                   <span>www.growdeveloper.com</span>
//                   <h6>+91 97730 31116</h6>
//                 </div>
//               </div>

//             </div>
//           </div>

//           <div className="col-lg-7">
//             <div className="sh-form-area">

//               <div className="row">

//                 <div className="col-md-6">
//                   <div className="sh-form-group">
//                     <label>Your Name*</label>
//                     <input
//                       type="text"
//                       className="sh-input"
//                       placeholder="Enter Your Name"
//                     />
//                   </div>
//                 </div>

//                 <div className="col-md-6">
//                   <div className="sh-form-group">
//                     <label>Your Email*</label>
//                     <input
//                       type="email"
//                       className="sh-input"
//                       placeholder="Enter Your Email"
//                     />
//                   </div>
//                 </div>

//                 <div className="col-md-6">
//                   <div className="sh-form-group">
//                     <label>Your Phone*</label>
//                     <input
//                       type="text"
//                       className="sh-input"
//                       placeholder="Enter Mobile Number"
//                     />
//                   </div>
//                 </div>

//                 <div className="col-md-6">
//                   <div className="sh-form-group">
//                     <label>Your Course*</label>
//                     <input
//                       type="text"
//                       className="sh-input"
//                       placeholder="Enter Your Course"
//                     />
//                   </div>
//                 </div>

//                 <div className="col-12">
//                   <div className="sh-form-group">
//                     <label>Your Message*</label>

//                     <textarea
//                       rows="5"
//                       className="sh-textarea"
                      
//                       placeholder="Enter Your Message"
//                     ></textarea>
//                   </div>
//                 </div>

//                 <div className="col-12">
//                   <button className="sh-submit-btn">
//                     Submit Form
//                   </button>
//                 </div>

//               </div>

//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;


// import React, { useEffect, useState } from "react";
// import "./Contact.css";
// import { FaPaperPlane } from "react-icons/fa";
// import contactImg from "../../img/contact.png";

// const ContactSection = () => {
//   const [translateY, setTranslateY] = useState(0);


//   return (
//     <section className="sh-contact-section">
//       <div className="container-fluid px-lg-5">
//         <div className="row align-items-center g-4">

//           {/* Left Image */}
//           <div className="col-lg-5">
//             <div className="sh-image-wrapper">

//               <img
//                 src={contactImg}
//                 alt="Contact"
//                 className="sh-main-image"
//               />

//               <div className="sh-floating-box">
//                 <div className="sh-icon-circle">
//                   <FaPaperPlane />
//                 </div>

//                 <div className="sh-contact-content">
//                   <span>www.growdeveloper.com</span>
//                   <h6>+91 97730 31116</h6>
//                 </div>
//               </div>

//             </div>
//           </div>

//           {/* Right Form */}
//           <div className="col-lg-7">
//             <div
//               className="sh-form-area"
             
//             >
//               <div className="row">

//                 <div className="col-md-6">
//                   <div className="sh-form-group">
//                     <label>Your Name*</label>
//                     <input
//                       type="text"
//                       className="sh-input"
//                       placeholder="Enter Your Name"
//                     />
//                   </div>
//                 </div>

//                 <div className="col-md-6">
//                   <div className="sh-form-group">
//                     <label>Your Email*</label>
//                     <input
//                       type="email"
//                       className="sh-input"
//                       placeholder="Enter Your Email"
//                     />
//                   </div>
//                 </div>

//                 <div className="col-md-6">
//                   <div className="sh-form-group">
//                     <label>Your Phone*</label>
//                     <input
//                       type="text"
//                       className="sh-input"
//                       placeholder="Enter Mobile Number"
//                     />
//                   </div>
//                 </div>

//                 <div className="col-md-6">
//                   <div className="sh-form-group">
//                     <label>Your Course*</label>
//                     <input
//                       type="text"
//                       className="sh-input"
//                       placeholder="Enter Your Course"
//                     />
//                   </div>
//                 </div>

//                 <div className="col-12">
//                   <div className="sh-form-group">
//                     <label>Your Message*</label>

//                     <textarea
//                       rows="5"
//                       className="sh-textarea"
//                       placeholder="Enter Your Message"
//                     ></textarea>
//                   </div>
//                 </div>

//                 <div className="col-12">
//                   <button className="sh-submit-btn">
//                     Submit Form
//                   </button>
//                 </div>

//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;



import React from "react";
import "./Contact.css";
import { FaPaperPlane } from "react-icons/fa";
import contactImg from "../../img/contact.png";

const ContactSection = () => {
  return (
    <section className="contact-wrap">
      <div className="container-fluid px-lg-5">
        <div className="row align-items-center g-5">

          {/* LEFT SIDE */}
          <div className="col-lg-5">
            <div className="contact-image-box">
              <img src={contactImg} alt="contact" className="contact-img" />

              <div className="contact-floating-card">
                <div className="contact-icon">
                  <FaPaperPlane />
                </div>

                <div className="contact-info">
                  <span>www.growdeveloper.com</span>
                  <h6>+91 97730 31116</h6>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="col-lg-7">
            <div className="contact-form-card ">

              <div className="row g-4">

                <div className="col-md-6">
                  <div className="input-box">
                    <label>Your Name*</label>
                    <input type="text" placeholder="Enter Your Name" />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="input-box">
                    <label>Your Email*</label>
                    <input type="email" placeholder="Enter Your Email" />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="input-box">
                    <label>Your Phone*</label>
                    <input type="text" placeholder="Enter Mobile Number" />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="input-box">
                    <label>Your Course*</label>
                    <input type="text" placeholder="Enter Course" />
                  </div>
                </div>

                <div className="col-12">
                  <div className="input-box">
                    <label>Your Message*</label>
                    <textarea rows="5" placeholder="Enter Message"></textarea>
                  </div>
                </div>

                <div className="col-12">
                  <button className="contact-btn">
                    Submit Form
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;





