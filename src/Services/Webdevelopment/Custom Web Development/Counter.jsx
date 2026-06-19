import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../Mobilewebdevelopment/Customweb/Counter.css";

const StatsCard = ({ value, title }) => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    let start = 0;

    const end = parseInt(value);

    const duration = 1800;

    const increment = Math.ceil(end / (duration / 20));

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        start = end;
        clearInterval(timer);
      }

      setNumber(start);
    }, 20);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="gd-stat-box">
      <h2>{number}+</h2>
      <span>{title}</span>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="gd-stats-wrapper">

      <div className="container">

        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">

            <div className="gd-stats-content">

              <div className="gd-small-tag">
                Counter Blocks 
              </div>

              <h1 className="gd-main-heading">
                You Convey the Idea, and

                we deliver a refined

                interface
              </h1>

            </div>

          </div>



          <div className="col-xl-6 col-lg-6">

            <div className="gd-stats-grid">

              <StatsCard
                value="7"
                title="Total Years in Business"
              />

              <StatsCard
                value="387"
                title="Happy Clients"
              />

              <StatsCard
                value="438"
                title="Projects Completed"
              />

              <StatsCard
                value="723"
                title="Students Trained"
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default StatsSection;
