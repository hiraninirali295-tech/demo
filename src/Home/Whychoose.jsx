
import "./Whychoose.css";
import img1 from "../img/whychoose-1.jpg";
import img2 from "../img/whychoose-2.png";
import React, { useEffect, useRef, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
function WhyChooseUs() {

  const headingRef = useRef();
  const descRef = useRef();

  useEffect(() => {
    const handleScroll = () => {

      [headingRef.current, descRef.current].forEach((el) => {
        if (!el || el.classList.contains("done")) return;

        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight * 0.75) {
          el.classList.add("animate");


          setTimeout(() => {
            el.classList.add("done");
          }, 2000);
        }
      });

    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ADD

  // Counter for 1.8M
  const [countMillion, setCountMillion] = useState(0);

  // Counter for 16K
  const [countK, setCountK] = useState(0);

  useEffect(() => {
    // -------------------------
    // 1.8M Counter
    // -------------------------
    let startMillion = 0;
    const targetMillion = 500;
    const duration = 2000;
    const incrementMillion = targetMillion / (duration / 30);

    const timerMillion = setInterval(() => {
      startMillion += incrementMillion;

      if (startMillion >= targetMillion) {
        startMillion = targetMillion;
        clearInterval(timerMillion);
      }

      setCountMillion(Math.floor(startMillion));
    }, 30);

    // -------------------------
    // 16K Counter
    // -------------------------
    let startK = 0;
    const targetK = 100;
    const incrementK = targetK / (duration / 30);

    const timerK = setInterval(() => {
      startK += incrementK;

      if (startK >= targetK) {
        startK = targetK;
        clearInterval(timerK);
      }

      setCountK(startK);
    }, 30);

    // Cleanup
    return () => {
      clearInterval(timerMillion);
      clearInterval(timerK);
    };
  }, []);

  return (
    <section className="why-section">
      <div className="why-container-fluid">
        <div className="row align-items-start">

          <div className="col-lg-6 why-left-side">

            {/* <p className="why-tag">
              Why Choose Us <MdArrowOutward />
            </p> */}

            {/* <p className="why-tag" data-text="Why Choose Us">
              <span className="why-text">Why Choose Us</span>
              <MdArrowOutward className="why-icon" />
            </p> */}

            <p className="why-tag" data-text="Why Choose Us">
              <span className="why-text-wrapper">
                <span className="why-text">Why Choose Us</span>
              </span>

              <span className="why-icon-wrapper">
                <MdArrowOutward className="why-icon first-icon" />
                <MdArrowOutward className="why-icon second-icon" />
              </span>
            </p>

            <h1 className="why-heading">
              Transforming Students Into
              Industry-Ready Professionals
            </h1>

            <img src={img1} className="why-image-one" alt="" />
            <img src={img2} className="why-image-two" alt="" />

          </div>

          <div className="col-lg-6 why-right-side">

            <p className="why-description">
              At Grow Developer, we focus on practical learning, live projects,
              and expert mentorship to help students gain real-world
              skills and build successful careers in technology.
            </p>

            <div className="why-grid-wrapper">

              <div className="why-left-column">

                <div className="why-box why-number-box">



                  {/* <span className="big">
                    {countMillion.toFixed(0)} +
                  </span> */}

                  <span className="big">
                    {countMillion.toFixed(0)}
                    <FaPlus className="plus-icon ms-1" />
                  </span>

                  {/* <span className="why-plus-icon">
                    +
                  </span> */}

                  <span className="why-plus-icon">
                    <FaPlus />
                  </span>

                </div>

                <div className="why-box why-active-card">

                  <div className="why-card-content">

                    <div className="why-card-title">
                      Students <br />Trained
                    </div>

                    <div className="why-card-description">
                      Successfully guiding students
                      toward rewarding careers in
                      technology.
                    </div>

                  </div>

                </div>

              </div>

              <div className="why-right-column">

                <div className="why-box why-trusted-card">

                  <div className="why-card-content">

                    <div className="why-card-title">
                      Live <br />Projects
                    </div>

                    <div className="why-card-description">
                      Gain practical experience by
                      working on real-world projects and
                      industry-based assignments.
                    </div>

                  </div>

                </div>

                <div className="why-box why-number-box why-small-number">

                  <span className="big">
                    {Math.floor(countK)}
                  </span>

                  <span className="why-plus-icon">
                    <FaPlus />
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;