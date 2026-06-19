// import React, { useEffect, useState } from "react";
// import "./Services.css";

// import mobileImg from "../img/Mobile.png";

// import img1 from "../img/service1.png";
// import img2 from "../img/service2.png";
// import img3 from "../img/service3.png";
// import img4 from "../img/service5.png";
// import img5 from "../img/service3.png";
// import { MdArrowOutward } from "react-icons/md";

// export default function ValuesSection() {
//   const [active, setActive] = useState(false);

//   const cards = [
//     {
//       img: img1,
//       title: "Interaction Design",
//       desc: "We create user friendly interactive designs. We create user friendly interactive designs",
//     },
//     {
//       img: img2,
//       title: "Website Development",
//       desc: "We create user friendly interactive designs We create user friendly interactive designs.",
//     },
//     {
//       img: img3,
//       title: "SaaS Product Design",
//       desc: "We create user friendly interactive designs We create user friendly interactive designs.",
//     },
//     {
//       img: img4,
//       title: "Digital Marketing",
//       desc: "We create user friendly interactive designs We create user friendly interactive designs.",
//     },
//     {
//       img: img5,
//       title: "Brand Guidelines",
//       desc: "We create user friendly interactive designs We create user friendly interactive designs.",
//     },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       const section = document.querySelector(".values-section");

//       if (!section) return;

//       const rect = section.getBoundingClientRect();

//       if (rect.top < 400 && rect.bottom > 400) {
//         setActive(true);
//       } else {
//         setActive(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (

//     <>
// <div className="heading-container">
//   <div className="left-side">
 

//     <p className="small-texts" data-text="Professional Values">
//   <span className="small-text-inner">Professional Values</span>
//   <MdArrowOutward className="small-icon" />
// </p>

//     <h2 className="testimonal-title">
//       Values That Define <br />
//       Who We Are
//     </h2>
//   </div>
// </div>
//     <section className={`values-section ${active ? "active" : ""}`}>


//       <div className="values-sticky-wrap">
//         <div className="mobile-image-wrap">
//           <img src={mobileImg} alt="" className="mobile-img" />
          

//           <div className="cards-animation-wrap">
//             {cards.map((item, i) => (
//               <div className="value-card" key={i}>
//                 <div className="card-img">
//                   <img src={item.img} alt={item.title} />
//                 </div>

//                 <div className="card-content">
//                   <h3>{item.title}</h3>
//                   <p>{item.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//     </>
//   );
// }




// // import React, { useEffect, useState } from "react";
// // import "./Services.css";

// // import mobileImg from "../img/service/Mobile.png";

// // import img1 from "../img/service/service-1.png";
// // import img2 from "../img/service/service-2.png";
// // import img3 from "../img/service/service-3.png";
// // import img4 from "../img/service/service-4.png";
// // import img5 from "../img/service/services-5.png";
// // import { MdArrowOutward } from "react-icons/md";

// // export default function ValuesSection() {
// //   const [active, setActive] = useState(false);

// //   const cards = [
// //     {
// //       img: img1,
// //       title: "Interaction Design",
// //       desc: "We create user friendly interactive designs. We create user friendly interactive designs",
// //     },
// //     {
// //       img: img2,
// //       title: "Website Development",
// //       desc: "We create user friendly interactive designs We create user friendly interactive designs.",
// //     },
// //     {
// //       img: img3,
// //       title: "SaaS Product Design",
// //       desc: "We create user friendly interactive designs We create user friendly interactive designs.",
// //     },
// //     {
// //       img: img4,
// //       title: "Digital Marketing",
// //       desc: "We create user friendly interactive designs We create user friendly interactive designs.",
// //     },
// //     {
// //       img: img5,
// //       title: "Brand Guidelines",
// //       desc: "We create user friendly interactive designs We create user friendly interactive designs.",
// //     },
// //   ];

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       const section = document.querySelector(".values-section");

// //       if (!section) return;

// //       const rect = section.getBoundingClientRect();

// //       if (rect.top < 400 && rect.bottom > 400) {
// //         setActive(true);
// //       } else {
// //         setActive(false);
// //       }
// //     };

// //     window.addEventListener("scroll", handleScroll);

// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   return (

// //     <>
// // <div className="heading-container">
// //   <div className="left-side">
// //     <p className="small-texts">

      
// //       Professional Values <MdArrowOutward />
// //     </p>

// //     <h2 className="testimonal-titles">
// //       Values That Define <br />
// //       Who We Are
// //     </h2>
// //   </div>
// // </div>
// //     <section className={`values-section ${active ? "active" : ""}`}>


// //       <div className="values-sticky-wrap">
// //         <div className="mobile-image-wrap">
// //           <img src={mobileImg} alt="" className="mobile-img" />
          

// //           <div className="cards-animation-wrap">
// //             {cards.map((item, i) => (
// //               <div className="value-card" key={i}>
// //                 <div className="card-img">
// //                   <img src={item.img} alt={item.title} />
// //                 </div>

// //                 <div className="card-content">
// //                   <h3>{item.title}</h3>
// //                   <p>{item.desc}</p>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //     </>
// //   );
// // }



import React, { useEffect, useState } from "react";
import "./Services.css";

import mobileImg from "../img/service/Mobile.png";

import img1 from "../img/service/service-1.png";
import img2 from "../img/service/service-2.png";
import img3 from "../img/service/service-3.png";
import img4 from "../img/service/service-4.png";
import img5 from "../img/service/services-5.png";
import { MdArrowOutward } from "react-icons/md";

export default function ValuesSection() {
  const [active, setActive] = useState(false);

  const cards = [
    {
      img: img1,
      title: "Client Market",
      desc: "Our foremost objective is to elevate the experience and boon for our clients.",
    },
    {
      img: img2,
      title: "Awesome Ideas",
      desc: "project ideas that are excellent for honing your programming and development skills.",
    },
    {
      img: img3,
      title: "Ethical Solutions",
      desc: "Our quality assurance team regularly audits the operating procedures.",
    },
    {
      img: img4,
      title: "Project Setting",
      desc: "We make it easy to understand our assignment to avoid any hassle.",
    },
    {
      img: img5,
      title: "Market Analysis",
      desc: "To know and recognize the preferences and stipulation of current potentials.",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(".values-section");

      if (!section) return;

      const rect = section.getBoundingClientRect();

      if (rect.top < 400 && rect.bottom > 400) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (

    <>
<div className="heading-container">
  <div className="left-side">
    <p className="small-texts">

      
      Professional Values <MdArrowOutward />
    </p>

    <h2 className="testimonal-titles">
      Values That Define <br />
      Who We Are
    </h2>
  </div>
</div>
    <section className={`values-section ${active ? "active" : ""}`}>


      <div className="values-sticky-wrap">
        <div className="mobile-image-wrap">
          <img src={mobileImg} alt="" className="mobile-img" />
          

          <div className="cards-animation-wrap">
            {cards.map((item, i) => (
              <div className="value-card" key={i}>
                <div className="card-img">
                  <img src={item.img} alt={item.title} />
                </div>

                <div className="card-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  );
}