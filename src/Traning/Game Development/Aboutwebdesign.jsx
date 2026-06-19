import React from "react";
import "./Aboutwebdesign.css";

const AboutCourse = () => {
  return (
    <section className="about-course-section">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT CONTENT */}
          <div className="col-lg-6">
            <div className="about-content">
              <h2>About Web Design Course</h2>

              <p>
                User-centered design focuses on designing websites that meet
                the needs and preferences of the target audience. It involves
                understanding user personas, conducting user research, and
                incorporating user feedback throughout the design process.
                By prioritizing user needs, you can create intuitive and
                user-friendly websites.
              </p>
            </div>
          </div>

          {/* RIGHT CIRCLE */}
          <div className="col-lg-6">
            <div className="circle-wrapper">

              <div className="circle-box">
                <h3>
                  6<span>/Months</span>
                </h3>
                <p>Course Duration</p>
              </div>

              <div className="circle-box">
                <h3>
                  2<span>/Hours</span>
                </h3>
                <p>Daily Time</p>
              </div>

            </div>
          </div>
        </div>

        {/* BOTTOM BOXES */}
        <div className="feature-row">

          <div className="feature-box">
            Live Project Experience
          </div>

          <div className="feature-box">
            100% Job Placement
          </div>

          <div className="feature-box">
            Personal Growth
          </div>

          <div className="feature-box">
            Personal Training
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutCourse;