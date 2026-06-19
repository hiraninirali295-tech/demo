
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Aboutus.css";
import { FiArrowUpRight } from "react-icons/fi";
import { MdArrowOutward } from "react-icons/md";
import img1 from "../img/Ourstory--1.png";
import img2 from "../img/Ourmission--2.png";
import img3 from "../img/Ourvision--3.png";

const data = [
  {
    id: 1,
    title: "Our Story",
    desc:
      "Our aim is to ease the hiring process for businesses and organizations by providing work-ready professionals who can contribute greatly to their success. Since then, we have worked hard to achieve this goal and dedicated our time and resources to train students extensively.",
    image: img1,
  },
  {
    id: 2,
    title: "Our Mission",
    desc:
      "Our Clients with trustful, Best web development at a Cost-Effective Price While Making The Development Process an Enjoyable Experience for Customers as well as Employees.",
    image: img2,
  },
  {
    id: 3,
    title: "Our Vision",
    desc:
      "Our Clients with trustful, Best web development at a Cost-Effective Price While Making The Development Process an Enjoyable Experience for Customers as well as Employees.",
    image: img3,
  },
];

export default function AboutUs() {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <section className="about-section">
      <div className="container-fluid">
        <div className="about-header">
          {/* <p className="small-text">
            About Us <MdArrowOutward  className="header-arrow" />
            

          </p> */}
          <p className="small-text">

            <span className="small-text-wrap">
              <span className="small-text-titles">Built For Growth</span>
              <span className="small-text-titles-hover">Built For Growth</span>
            </span>

            <span className="small-text-icon-wrap">
              <span className="small-text-icon">
                <MdArrowOutward className="header-arrow" />
              </span>

              <span className="small-text-icon-hover">
                <MdArrowOutward className="header-arrow" />
              </span>
            </span>

          </p>

          <h3>Turning Ideas Into Reality</h3>

        </div>

        {data.map((item, index) => (
          <div
            key={item.id}
            className="about-row"
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <div className="row-flex">
              <div className="left-title">
                <h3 className="titles">{item.title}</h3>
              </div>

              <div className="middle-desc">
                <p className="descs">{item.desc}</p>
              </div>


              <div className={`right-img ${hoverIndex === index ? "show" : ""}`}>
                {hoverIndex === index && (
                  <img src={item.image} alt={item.title} />
                )}
              </div>


              <div
                className={`right-arrow ${hoverIndex === index ? "active" : ""}`}
              >

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}







