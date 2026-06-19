// import React from "react";
// import "./Designtools.css";

// import htmlImg from "../img/Html.png";
// import cssImg from "../img/Html.png";
// import jsImg from "../img/Html.png";
// import bootstrapImg from "../img/Html.png";
// import { GoArrowUpRight } from "react-icons/go";

// const DesignTools = () => {
//   const tools = [
//     {
//       image: htmlImg,
//       title: "Html",
//     },
//     {
//       image: cssImg,
//       title: "CSS",
//     },
//     {
//       image: jsImg,
//       title: "JavaScript",
//     },
//     {
//       image: bootstrapImg,
//       title: "Bootstrap",
//     },
//   ];

//   return (
//     <section className="design-tools-section">
//       <div className="container">

//         <div className="tools-heading">
//           <span>Tools & Technologies  <GoArrowUpRight /></span>
//           <h2>Design Tools</h2>
//         </div>

//         <div className="tools-row">
//           {tools.map((tool, index) => (
//             <div className="tool-circle" key={index}>
//               <img
//                 src={tool.image}
//                 alt={tool.title}
//                 className="tool-img"
//               />
//               <h5>{tool.title}</h5>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default DesignTools;







import React, { useEffect, useRef, useState } from "react";
import "./Designtools.css";

import htmlImg from "../../img/Html.png";
import cssImg from "../../img/Html.png";
import jsImg from "../../img/Html.png";
import bootstrapImg from "../../img/Html.png";
import { GoArrowUpRight } from "react-icons/go";

const DesignTools = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const tools = [
    { image: htmlImg, title: "Html" },
    { image: cssImg, title: "CSS" },
    { image: jsImg, title: "JavaScript" },
    { image: bootstrapImg, title: "Bootstrap" },
    
   
  ];

  return (
    <section
      className="design-tools-section"
      ref={sectionRef}
    >
      <div className="container">

        <div className="tools-heading">
          <span>
            Tools & Technologies <GoArrowUpRight />
          </span>
          <h2>Design Tools</h2>
        </div>

        <div className="tools-row">
          {tools.map((tool, index) => (
            <div
              key={index}
              className={`tool-circle scroll-animation ${
                visible ? `show-${index}` : ""
              }`}
            >
              <img
                src={tool.image}
                alt={tool.title}
                className="tool-img"
              />
              <h5>{tool.title}</h5>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DesignTools;


