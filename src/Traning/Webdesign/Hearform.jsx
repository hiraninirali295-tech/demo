


// import React from "react";
// import Slider from "react-slick";
// import "./Hearform.css";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import img1 from "../../img/Akshay video.mp4";

// const students = [
//   {
//     name: "Jay Donda",
//     course: "UI/UX & Graphic Design",
//     video: img1,
//   },
//   {
//     name: "Nishita Manjaravala",
//     course: "Full Stack Development",
//     video: img1,
//   },
//   {
//     name: "Nayan Gayke",
//     course: "ITA-CS+",
//     video: img1,
//   },
//   {
//     name: "Rahul Patel",
//     course: "React Development",
//     video: img1,
//   },
//   {
//     name: "Priya Shah",
//     course: "Python Development",
//     video: img1,
//   },
// ];

// function StudentTestimonials() {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 700,
//     autoplay: true,
//     autoplaySpeed: 4000,
//     pauseOnHover: true,
//     arrows: false,
//     slidesToShow: 3,
//     slidesToScroll: 1,

//     responsive: [
//       {
//         breakpoint: 1200,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
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
//     <section className="student-section">
//       <div className="student-container">
//         <h2 className="student-heading">
//           Hear from our Students
//         </h2>

//         <Slider {...settings}>
//           {students.map((item, index) => (
//             <div key={index}>
//               <div className="student-card">
//                 <div className="video-box">
//                   <video
//                     src={item.video}
//                     autoPlay
//                     muted
//                     loop
//                     playsInline
//                     controls
//                     preload="metadata"
//                   />
//                 </div>

//                 <h4>{item.name}</h4>
//                 <p>{item.course}</p>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </section>
//   );
// }

// export default StudentTestimonials;


import React from "react";
import Slider from "react-slick";
import "./Hearform.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../../img/Akshay video.mp4";

const students = [
  {
    name: "Jay Donda",
    course: "UI/UX & Graphic Design",
    video: img1,
  },
  {
    name: "Nishita Manjaravala",
    course: "Full Stack Development",
    video: img1,
  },
  {
    name: "Nayan Gayke",
    course: "ITA-CS+",
    video: img1,
  },
  {
    name: "Rahul Patel",
    course: "React Development",
    video: img1,
  },
  {
    name: "Priya Shah",
    course: "Python Development",
    video: img1,
  },
];

function StudentTestimonials() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,

    slidesToShow: 3,
    slidesToScroll: 1,

    adaptiveHeight: false,
    lazyLoad: "ondemand",
    swipeToSlide: true,
    draggable: true,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="student-section">
      <div className="student-container">

        <h2 className="student-heading">
          Hear from our Students
        </h2>

        <Slider {...settings}>
          {students.map((student, index) => (
            <div className="slide-wrapper" key={index}>
              <div className="student-card">

                <div className="video-box">
                  <video
                    src={student.video}
                    muted
                    loop
                    playsInline
                    autoPlay
                    controls
                    preload="metadata"
                    className="student-video"
                  />
                </div>

                <div className="student-content">
                  <h4>{student.name}</h4>
                  <p>{student.course}</p>
                </div>

              </div>
            </div>
          ))}
        </Slider>

      </div>
    </section>
  );
}

export default StudentTestimonials;