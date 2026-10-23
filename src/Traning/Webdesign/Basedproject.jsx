// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./Basedproject.css";

// import img1 from "../../img/Banner Design.jpg";

// const projects = [
//   {
//     img: img1,
//     title: "Video Streaming Application",
//     desc: "A scalable platform for streaming high-quality videos with real-time playback, user personalization, and seamless cross-device access.",
//   },
//   {
//     img: img1,
//     title: "Real-Time Chat Application",
//     desc: "A modern messaging platform with real-time communication, user presence, media sharing, and intuitive UI for seamless conversations across devices.",
//   },
//   {
//     img: img1,
//     title: "E-Commerce Platform",
//     desc: "Complete online shopping solution with product catalog, cart management, payment integration and order tracking.",
//   },
//   {
//     img: img1,
//     title: "Learning Management System",
//     desc: "Interactive platform for online learning, course management, assessments, certificates and student progress tracking.",
//   },
//   {
//     img: img1,
//     title: "CRM Management System",
//     desc: "Customer relationship management platform with sales, support and reporting features.",
//   },
// ];

// function IndustryProjects() {
//   const settings = {
//     dots: false,
//     arrows: false,
//     infinite: true,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     speed: 2800,
//     cssEase: "ease-in-out",
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     pauseOnHover: true,

//     responsive: [
//       {
//         breakpoint: 992,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <section className="industry-projects-section">
//       <div className="industry-content">
//         <h2 className="industry-heading">
//           Build Industry-Based Projects
//         </h2>

//         <Slider {...settings}>
//           {projects.map((item, index) => (
//             <div key={index} className="slider-card-wrapper">
//               <div className="project-card">
//                 <img
//                   src={item.img}
//                   alt={item.title}
//                   className="project-image"
//                 />

//                 <div className="project-content-card">
//                   <h3>{item.title}</h3>
//                   <p>{item.desc}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </section>
//   );
// }

// export default IndustryProjects;




import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Basedproject.css";

import img1 from "../../img/Banner Design.jpg";

const projects = [
  {
    img: img1,
    title: "Video Streaming Application",
    desc: "A scalable platform for streaming high-quality videos with real-time playback, user personalization, and seamless cross-device access.",
  },
  {
    img: img1,
    title: "Real-Time Chat Application",
    desc: "A modern messaging platform with real-time communication, user presence, media sharing, and intuitive UI for seamless conversations across devices.",
  },
  {
    img: img1,
    title: "E-Commerce Platform",
    desc: "Complete online shopping solution with product catalog, cart management, payment integration and order tracking.",
  },
  {
    img: img1,
    title: "Learning Management System",
    desc: "Interactive platform for online learning, course management, assessments, certificates and student progress tracking.",
  },
  {
    img: img1,
    title: "CRM Management System",
    desc: "Customer relationship management platform with sales, support, reporting and automation tools.",
  },
];

function IndustryProjects() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="industry-projects-section">
      <div className="industry-content">
        <h2 className="industry-heading">
          Build Industry-Based Projects
        </h2>

        <div className="industry-slider">
          <Slider {...settings}>
            {projects.map((item, index) => (
              <div key={index} className="slider-card-wrapper">
                <div className="project-card">
                  <div className="project-image-wrapper">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="project-image"
                    />
                  </div>

                  <div className="project-content-card">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default IndustryProjects;


