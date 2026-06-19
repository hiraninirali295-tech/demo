



// import React, { useEffect, useState } from "react";
// import "./Countersection.css";

// const NumberCounter = ({ end, duration }) => {
//   const [value, setValue] = useState(0);

//   useEffect(() => {
//     let startValue = 0;

//     const increase = end / (duration / 20);

//     const timer = setInterval(() => {
//       startValue += increase;

//       if (startValue >= end) {
//         startValue = end;
//         clearInterval(timer);
//       }

//       setValue(Math.floor(startValue));
//     }, 20);

//     return () => clearInterval(timer);
//   }, [end, duration]);

//   return <>{value}+</>;
// };

// const CreativeStats = () => {
//   return (
//     <section className="creative-main-wrap">

//       <div className="creative-container-box">

      

//         <div className="creative-top-layout">

//           <div className="creative-side-text">
//             <p>
//               Why you should work with us?
//               <span>15+ years empowering business.</span>
//             </p>
//           </div>

//           <div className="creative-heading-area">
//             <h1>
//               Yes! we work smart and
//               <br />
//               leading the sector since
//               <br />
//               2022
//             </h1>
//           </div>

//           <div className="creative-description-box">
//             <h5> ( Real Skills. Real Results. )</h5>

//             <p>
//               Our hands-on approach ensures students gain practical experience,
//               build strong portfolios, and become industry-ready professionals.
//             </p>
//           </div>

//         </div>

      

//         <div className="creative-middle-layout">

//           <div className="creative-chart-wrap">

//             <div className="creative-chart-bar small-chart">
//               <div className="creative-bar-data">
//                 <h4>30%</h4>
//                 <span>( Success )</span>
//               </div>
//             </div>

//             <div className="creative-chart-bar dark-chart">
//               <div className="creative-bar-data white-data">
//                 <h4 className="Numbers">70%</h4>
//                 <span>( Success )</span>
//               </div>
//             </div>

//             <div className="creative-chart-bar tall-chart">
//               <div className="creative-bar-data">
//                 <h4>95%</h4>
//                 <span>( Success )</span>
//               </div>
//             </div>

//             <div className="creative-chart-bar medium-chart">
//               <div className="creative-bar-data">
//                 <h4>45%</h4>
//                 <span>( Success )</span>
//               </div>
//             </div>

//           </div>

//           <div className="creative-project-box">

//             <p>
//               We completed projects
//               <br />
//               last 17 years
//             </p>

//             <h2>
//               <NumberCounter end={438} duration={2500} />
//             </h2>

//           </div>

//         </div>

        

//         <div className="creative-bottom-layout">

//           <div className="creative-side-text bottom-side">
//             <p>
//               Why you should work with us?
//               <span>Industry-focused training, expert <br />
//                 mentorship, live projects, and career guidance <br />
//                 designed for future tech professionals.</span>
//             </p>
//           </div>

//           <div className="creative-count-box">
//             <h2>
//               <NumberCounter end={7} duration={2500} />
//             </h2>

//             <p>Total Years in Business</p>
//           </div>

//           <div className="creative-count-box">
//             <h2>
//               <NumberCounter end={387} duration={2800} />
//             </h2>

//             <p>Happy Clients</p>
//           </div>

//           <div className="creative-count-box">
//             <h2>
//               <NumberCounter end={438} duration={3000} />
//             </h2>

//             <p>Projects Completed</p>
//           </div>

//         </div>

//       </div>

//     </section>
//   );
// };

// export default CreativeStats;



import React, { useEffect, useState } from "react";
import "./Countersection.css";

const NumberCounter = ({ end, duration }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let startValue = 0;

    const increase = end / (duration / 20);

    const timer = setInterval(() => {
      startValue += increase;

      if (startValue >= end) {
        startValue = end;
        clearInterval(timer);
      }

      setValue(Math.floor(startValue));
    }, 20);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <>{value}+</>;
};

const CreativeStats = () => {
  return (
    <section className="creative-main-wrap">

      <div className="creative-container-box">

        {/* TOP SECTION */}

        <div className="creative-top-layout">

          <div className="creative-side-text">
            <p>
              Why you should work with us?
              <span>7+ years empowering business.</span>
            </p>
          </div>

          <div className="creative-heading-area">
            <h1>
              Yes! we work smart and
              <br />
              leading the sector since
              <br />
              2022
            </h1>
          </div>

          <div className="creative-description-box">
            <h5> ( Real Skills. Real Results. )</h5>

            <p>
              Our hanOur hands-on approach ensures students gain practical experience,
               build strong portfolios, and become industry-ready professionals.
            </p>
          </div>

        </div>

        {/* CHART SECTION */}

        <div className="creative-middle-layout">

          <div className="creative-chart-wrap">

            <div className="creative-chart-bar small-chart">
              <div className="creative-bar-data">
                <h4>30%</h4>
                <span>( Success )</span>
              </div>
            </div>

            <div className="creative-chart-bar dark-chart">
              <div className="creative-bar-data white-data">
                <h4 className="Numbers">70%</h4>
                <span>( Success )</span>
              </div>
            </div>

            <div className="creative-chart-bar tall-chart">
              <div className="creative-bar-data">
                <h4>95%</h4>
                <span>( Success )</span>
              </div>
            </div>

            <div className="creative-chart-bar medium-chart">
              <div className="creative-bar-data">
                <h4>45%</h4>
                <span>( Success )</span>
              </div>
            </div>

          </div>

          <div className="creative-project-box">

            <p>
              We completed projects
              <br />
              last 17 years
            </p>

            <h2 >
              <NumberCounter end={438} duration={2500} />
            </h2>

          </div>

        </div>

        {/* BOTTOM SECTION */}

        <div className="creative-bottom-layout">

          <div className="creative-side-text bottom-side">
            <p>
              Why learn with us?
              <span>Industry-focused training, expert <br />
                mentorship, live projects, and career guidance <br />
                designed for future tech professionals.</span>
            </p>
          </div>

          <div className="creative-count-box">
            <h2>
              <NumberCounter end={7} duration={2500} />
            </h2>

            <p>Total Years in Business</p>
          </div>

          <div className="creative-count-box">
            <h2>
              <NumberCounter end={387} duration={2800} />
            </h2>

            <p>Happy Clients</p>
          </div>

          <div className="creative-count-box">
            <h2>
              <NumberCounter end={438} duration={3000} />
            </h2>

            <p>Projects Completed</p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default CreativeStats;
