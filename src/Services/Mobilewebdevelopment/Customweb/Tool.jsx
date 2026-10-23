// import React from "react";
// import "./Tool.css";

// import img1 from "../../../img/1.png";
// import img2 from "../../../img/2.png";
// import img3 from "../../../img/3.png";
// import img4 from "../../../img/4.png";
// import img5 from "../../../img/5.png";
// import img6 from "../../../img/6.png";
// import img7 from "../../../img/4.png";
// import img8 from "../../../img/3.png";

// export default function ToolsSoftware() {
//   return (
//     <>
//       <section className="tools-section">
//         <div className="tools-container">

//           {/* Floating Images */}

//           <div className="floating-img img1">
//             <img src={img1} alt="tool-img" />
//             <span>dhheeeh</span>
//           </div>

//           <div className="floating-img img2">
//             <img src={img2} alt="tool-img" />
//           </div>

//           <div className="floating-img img3">
//             <img src={img3} alt="tool-img" />
//           </div>

//           <div className="floating-img img4">
//             <img src={img4} alt="tool-img" />
//           </div>

//           <div className="floating-img img5">
//             <img src={img5} alt="tool-img" />
//           </div>

//           <div className="floating-img img6">
//             <img src={img6} alt="tool-img" />
//           </div>

//           <div className="floating-img img7">
//             <img src={img7} alt="tool-img" />
//           </div>

//           <div className="floating-img img8">
//             <img src={img8} alt="tool-img" />
//           </div>

//           {/* Center Content */}

//           <div className="tools-content">
//             <h1>Tools & Software</h1>
//             <p>Our toolkit for digital innovation</p>
//           </div>

//         </div>
//       </section>
//     </>
//   );
// }


import React from "react";
import "./Tool.css";

import img1 from "../../../img/icons/appdeveloment/customdeve/New folder/download (1)-Photoroom (1).png";
import img2 from "../../../img/2.png";
import img3 from "../../../img/3.png";
import img4 from "../../../img/4.png";
import img5 from "../../../img/5.png";
import img6 from "../../../img/6.png";
import img7 from "../../../img/4.png";
import img8 from "../../../img/3.png";

export default function ToolsSoftware() {
  return (
    <section className="tools-section">
      <div className="tools-container">

        {/* <div className="floating-card img1">
          <div className="floating-img">
            <img src={img1} alt="Figma" />
          </div>
          <span className="tool-text">Figma</span>
        </div> */}
        <div className="floating-card img1">
          <div className="floating-img">
            <img src={img1} alt="tool-img" />
          </div>
          <div className="tool-text">Figma</div>
        </div>

        <div className="floating-card img2">
          <div className="floating-img">
            <img src={img2} alt="Photoshop" />
          </div>
          <span className="tool-text">Photoshop</span>
        </div>

        <div className="floating-card img3">
          <div className="floating-img">
            <img src={img3} alt="Illustrator" />
          </div>
          <span className="tool-text">Illustrator</span>
        </div>

        <div className="floating-card img4">
          <div className="floating-img">
            <img src={img4} alt="VS Code" />
          </div>
          <span className="tool-text">VS Code</span>
        </div>

        <div className="floating-card img5">
          <div className="floating-img">
            <img src={img5} alt="React" />
          </div>
          <span className="tool-text">React</span>
        </div>

        <div className="floating-card img6">
          <div className="floating-img">
            <img src={img6} alt="Bootstrap" />
          </div>
          <span className="tool-text">Bootstrap</span>
        </div>

        <div className="floating-card img7">
          <div className="floating-img">
            <img src={img7} alt="HTML" />
          </div>
          <span className="tool-text">HTML</span>
        </div>

        <div className="floating-card img8">
          <div className="floating-img">
            <img src={img8} alt="CSS" />
          </div>
          <span className="tool-text">CSS</span>
        </div>

        <div className="tools-content">
          <h1>Tools & Software</h1>
          <p>Our toolkit for digital innovation</p>
        </div>

      </div>
    </section>
  );
}