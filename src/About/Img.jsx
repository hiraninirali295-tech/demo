// import React, { useEffect, useRef } from "react";
// import {
//   animate,
//   scroll,
//   cubicBezier,
// } from "framer-motion";

// import "./Img.css";

// const ScrollGallery = () => {
//   const sectionRef = useRef(null);
//   const imageRef = useRef(null);

//   useEffect(() => {
//     const prefersReducedMotion = window.matchMedia(
//       "(prefers-reduced-motion: reduce)"
//     ).matches;

//     if (prefersReducedMotion) return;

//     const image = imageRef.current;
//     const firstSection = sectionRef.current;
//     const layers = document.querySelectorAll(".grid > .layer");

//     if (!image || !firstSection) return;

//     const naturalWidth = image.offsetWidth;
//     const naturalHeight = image.offsetHeight;

//     const viewportWidth = window.innerWidth;
//     const viewportHeight = window.innerHeight;

//     // Center image animation
//     scroll(
//       animate(
//         image,
//         {
//           width: [viewportWidth, naturalWidth],
//           height: [viewportHeight, naturalHeight],
//         },
//         {
//           width: {
//             easing: cubicBezier(0.65, 0, 0.35, 1),
//           },
//           height: {
//             easing: cubicBezier(0.42, 0, 0.58, 1),
//           },
//         }
//       ),
//       {
//         target: firstSection,
//         offset: ["start start", "80% end"],
//       }
//     );

//     const scaleEasings = [
//       cubicBezier(0.42, 0, 0.58, 1),
//       cubicBezier(0.76, 0, 0.24, 1),
//       cubicBezier(0.87, 0, 0.13, 1),
//     ];

//     layers.forEach((layer, index) => {
//       const endOffset = `${1 - index * 0.05} end`;

//       // Opacity animation
//       scroll(
//         animate(
//           layer,
//           {
//             opacity: [0, 0, 1],
//           },
//           {
//             offset: [0, 0.55, 1],
//             easing: cubicBezier(0.61, 1, 0.88, 1),
//           }
//         ),
//         {
//           target: firstSection,
//           offset: ["start start", endOffset],
//         }
//       );

//       // Scale animation
//       scroll(
//         animate(
//           layer,
//           {
//             scale: [0, 0, 1],
//           },
//           {
//             offset: [0, 0.3, 1],
//             easing: scaleEasings[index],
//           }
//         ),
//         {
//           target: firstSection,
//           offset: ["start start", endOffset],
//         }
//       );
//     });
//   }, []);

//   return (
//     <div className="content-wrap">

//       {/* HERO */}
//       <header className="hero-header">
//         <h1 className="fluid">
//           Life at
//           <br />
//           Grow Developer
//         </h1>
//       </header>

//       {/* GALLERY */}
//       <main>
//         <section ref={sectionRef}>
//           <div className="content">
//             <div className="grid">

//               {/* Layer 1 */}
//               <div className="layer">
//                 <div>
//                   <img
//                     src="https://images.unsplash.com/photo-1463100099107-aa0980c362e6?w=800"
//                     alt=""
//                   />
//                 </div>

//                 <div>
//                   <img
//                     src="https://images.unsplash.com/photo-1556304044-0699e31c6a34?w=800"
//                     alt=""
//                   />
//                 </div>

//                 <div>
//                   <img
//                     src="https://images.unsplash.com/photo-1590330297626-d7aff25a0431?w=800"
//                     alt=""
//                   />
//                 </div>

//                 <div>
//                   <img
//                     src="https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800"
//                     alt=""
//                   />
//                 </div>

//                 <div>
//                   <img
//                     src="https://images.unsplash.com/photo-1488161628813-04466f872be2?w=800"
//                     alt=""
//                   />
//                 </div>

//                 <div>
//                   <img
//                     src="https://images.unsplash.com/photo-1565321590372-09331b9dd1eb?w=800"
//                     alt=""
//                   />
//                 </div>
//               </div>

//               {/* Layer 2 */}
//               <div className="layer">
//                 <div>
//                   <img
//                     src="https://images.unsplash.com/photo-1531525645387-7f14be1bdbbd?w=800"
//                     alt=""
//                   />
//                 </div>

//                 <div>
//                   <img
//                     src="https://images.unsplash.com/photo-1637414165749-9b3cd88b8271?w=800"
//                     alt=""
//                   />
//                 </div>

//                 <div>
//                   <img
//                     src="https://images.unsplash.com/photo-1699911251220-8e0de3b5ce88?w=800"
//                     alt=""
//                   />
//                 </div>

//                 <div>
//                   <img
//                     src="https://images.unsplash.com/photo-1667483629944-6414ad0648c5?w=800"
//                     alt=""
//                   />
//                 </div>

//                 <div>
//                   <img
//                     src="https://plus.unsplash.com/premium_photo-1706078438060-d76ced26d8d5?w=800"
//                     alt=""
//                   />
//                 </div>

//                 <div>
//                   <img
//                     src="https://images.unsplash.com/photo-1525385444278-b7968e7e28dc?w=800"
//                     alt=""
//                   />
//                 </div>
//               </div>

//               {/* Layer 3 */}
//               <div className="layer">
//                 <div>
//                   <img
//                     src="https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?w=800"
//                     alt=""
//                   />
//                 </div>

//                 <div>
//                   <img
//                     src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800"
//                     alt=""
//                   />
//                 </div>
//               </div>

//               {/* Center Image */}
//               <div className="scaler">
//                 <img
//                   ref={imageRef}
//                   src="https://assets.codepen.io/605876/model-shades.jpg?format=auto&quality=100"
//                   alt=""
//                 />
//               </div>

//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default ScrollGallery;



import React from "react";
import "./Img.css";

import img1 from "../img/gdimg1.jpg";
import img2 from "../img/gdimg2.jpg";
import img3 from "../img/gdimg3.jpg";
import img4 from "../img/gdimg4.jpg";
import img5 from "../img/gdimg5.jpg";
import img6 from "../img/gdimg4.jpg";
import img7 from "../img/gdimg5.jpg";
import img8 from "../img/img5.jpg";
import img9 from "../img/gdimg5.jpg";
import img10 from "../img/img5.jpg";

const firstRowImages = [
  img1,
  img2,
  img3,
  img4,
  img5,
];

const secondRowImages = [
  img6,
  img7,
  img8,
  img9,
  img10,
];

const Img = () => {
  return (
    <div className="marquee-section">
      <div className="gdweb">Life at Grow Developer</div>

      {/* First Row */}
      <div className="marquee">
        <div className="marquee-content scroll-left">
          {[...firstRowImages, ...firstRowImages].map((img, index) => (
            <div className="review-card" key={`first-${index}`}>
              <img src={img} alt="" />
            </div>
          ))}
        </div>
      </div>

      {/* Second Row */}
      <div className="marquee">
        <div className="marquee-content scroll-right">
          {[...secondRowImages, ...secondRowImages].map((img, index) => (
            <div className="review-card" key={`second-${index}`}>
              <img src={img} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Img;