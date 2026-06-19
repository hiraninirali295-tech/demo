// import React, { useEffect, useRef, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./Countersection.css";
// import { MdArrowOutward } from "react-icons/md";
// const Counter = ({ end, suffix }) => {
//   const [count, setCount] = useState(0);
//   const ref = useRef();
//   const started = useRef(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting && !started.current) {
//           started.current = true;

//           let start = 0;
//           const duration = 2000;
//           const increment = end / (duration / 16);

//           const counter = setInterval(() => {
//             start += increment;
//             if (start >= end) {
//               setCount(end);
//               clearInterval(counter);
//             } else {
//               setCount(Math.floor(start));
//             }
//           }, 16);
//         }
//       },
//       { threshold: 0.5 }
//     );

//     if (ref.current) observer.observe(ref.current);

//     return () => observer.disconnect();
//   }, [end]);

//   return (
//     <h2 ref={ref}>
//       {count}
//       {suffix}
//     </h2>
//   );
// };

// const statsData = [
//   {
//     number: 7,
//     suffix: "+",
//     title: "Total Years in",
//     desc: "Managed large-scale advertising budgets with measurable performance impact.",
//   },
//   {
//     number: 387,
//     suffix: "+",
//     title: "Happy Clients",
//     desc: "Managed large-scale advertising budgets with measurable performance impact.",
//   },
//   {
//     number: 723,
//     suffix: "+",
//     title: "Students Trained",
//     desc: "Executed hundreds of high-impact marketing initiatives across platforms.",
//   },
//   {
//     number: 438,
//     suffix: "+",
//     title: "Project Completed",
//     desc: "Executed hundreds of high-impact marketing initiatives across platforms.",
//   },
// ];

// const StatsSection = () => {
//   return (
//     <section className="stats-section">
//       <div className="container-fluid px-lg-5 px-3">
//         <div className="row align-items-start">


//           <div className="col-lg-5 mb-4">
//             {/* <p className="small-titlecounter">Interesting status <MdArrowOutward/></p> */}
//             <p className="small-titlecounter" data-text="Interesting status">
//               <span className="status-inner">Interesting status</span>
//               <MdArrowOutward className="status-icon" />
//             </p>
//             <p className="main-titlenew">
//               Figures That <br /> Tell a Story
//             </p>
//           </div>


//           <div className="col-lg-7">
//             {statsData.map((item, index) => (
//               <div key={index} className="stat-item">

//                 <div className="stat-left">
//                   <Counter end={item.number} suffix={item.suffix} />
//                   <p>{item.title}</p>
//                 </div>

//                 <div className="stat-right">
//                   <p>{item.desc}</p>
//                 </div>

//               </div>
//             ))}
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default StatsSection;


import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Countersection.css";
import { MdArrowOutward } from "react-icons/md";
const Counter = ({ end, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;

          let start = 0;
          const duration = 2000;
          const increment = end / (duration / 16);

          const counter = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(counter);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [end]);

  return (
    <h2 ref={ref}>
      {count}
      {suffix}
    </h2>
  );
};

const statsData = [
  {
    number: 7,
    suffix: "+",
    title: "Total Years in Business",
    desc: "Delivered exceptional ROI growth through data-driven optimization.",
  },
  {
    number: 387,
    suffix: "+",
    title: "Happy Clients",
    desc: "Managed large-scale advertising budgets with measurable performance impact.",
  },
  {
    number: 723,
    suffix: "+",
    title: "Students Trained",
    desc: "Delivered exceptional ROI growth through data-driven optimization.",
  },
  {
    number: 438,
    suffix: "+",
    title: "Project Completed",
    desc: "Executed hundreds of high-impact marketing initiatives across platforms.",
  },
];

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="container-fluid px-lg-5 px-3">
        <div className="row align-items-start">


          <div className="col-lg-5 mb-4">
            {/* <p className="small-titlecounter">Interesting status <MdArrowOutward/></p> */}

            <p className="small-titlecounter">

              <span className="small-titlecounter-wrap">
                <span className="small-titlecounter-text">
                 Interesting Stats
                </span>

                <span className="small-titlecounter-text-hover">
                  Interesting status
                </span>
              </span>

              <span className="small-titlecounter-icon-wrap">
                <span className="small-titlecounter-icon">
                  <MdArrowOutward />
                </span>

                <span className="small-titlecounter-icon-hover">
                  <MdArrowOutward />
                </span>
              </span>

            </p>
            <p className="main-titlenew">
              Figures That <br /> Tell a Story
            </p>
          </div>


          <div className="col-lg-7">
            {statsData.map((item, index) => (
              <div key={index} className="stat-item">

                <div className="stat-left">
                  <Counter end={item.number} suffix={item.suffix} />
                  <p>{item.title}</p>
                </div>

                <div className="stat-right">
                  <p>{item.desc}</p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default StatsSection;