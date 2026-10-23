

import React, { useEffect, useRef, useState } from "react";
import "./About.css";
import { MdArrowOutward } from "react-icons/md";
import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Keyboard } from "swiper/modules";

import { FiArrowUpRight, FiX } from "react-icons/fi";
import img1 from '../img/linkedin.png'
import img2 from '../img/facebook.png'
import img3 from '../img/instagram.png'
import img4 from '../img/twitter.png';
import img5 from "../img/Aboutpaage.png";
import img6 from "../img/Aboutpage-1.png";
import img7 from "../img/Aboutpage-2.jpg"

const slidesData = [
  {
    id: 1,
    img: img5,
  },
  {
    id: 2,
    img: img6,
  },
  {
    id: 3,
    img: img7,
  },
  {
    id: 4,
    img: img5,
  },
  {
    id: 5,
    img: img6,
  },
  {
    id: 5,
    img: img7,
  },
  {
    id: 5,
    img: img5,
  },
  {
    id: 5,
    img: img5,
  },
  {
    id: 5,
    img: img5,
  },
  {
    id: 5,
    img: img5,
  },
];

const


  AboutScroll = () => {
    const sectionRef = useRef(null);

    const [activeModal, setActiveModal] = useState(null);

    useEffect(() => {
      const cards = document.querySelectorAll(".travel-card");

      const handleScroll = () => {
        const section = sectionRef.current;

        if (!section) return;

        const top = section.getBoundingClientRect().top;


      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    return (
      <section className="about-scroll-section" ref={sectionRef}>
        <div className="grid-lines"></div>

        {/* TOP CONTENT */}
        <div className="about-top">
          <div className="about-left">
            {/* <span className="about-tag">About Us <MdArrowOutward /></span> */}

            <span className="about-tag">

              <span className="about-tag-wrap">
                <span className="about-tag-text">About Us</span>
                <span className="about-tag-text-hover">About Us</span>
              </span>

              <span className="about-tag-icon-wrap">
                <span className="about-tag-icon">
                  <MdArrowOutward />
                </span>

                <span className="about-tag-icon-hover">
                  <MdArrowOutward />
                </span>
              </span>

            </span>

            <h1>
              Welcome to <br />
              Grow Developer
            </h1>
          </div>

          <div className="about-right">
            <p>
              Where innovation meets excellence in the world of Information Technology. <br />
              At Grow Developer, we are dedicated to providing cutting-edge solutions <br />
              and services that empower businesses and individuals to thrive in the digital age.
            </p>

            <div className="team-images">
              <div className="team-socials">

                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={img1} alt="Linkedin" />
                </a>

                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={img2} alt="Facebook" />
                </a>

                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={img3} alt="Instagram" />
                </a>

                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={img4} alt="Twitter" />
                </a>

              </div>
            </div>
          </div>
        </div>

        {/* SWIPER */}
        <div className="slider-container">
          <Swiper
            modules={[Mousewheel, Keyboard]}
            mousewheel={{
              forceToAxis: true,
              sensitivity: 0.3,
              releaseOnEdges: true,
            }}
            keyboard={true}
            speed={800}
            slidesPerView={"auto"}
            centeredSlides={false}
            spaceBetween={30}
            loop={true}
          >
            {slidesData.map((slide, index) => (
              <SwiperSlide key={index}>
                <div
                  className="travel-card"
                  style={{
                    backgroundImage: `url(${slide.img})`,
                  }}
                >
                  <button
                    className="more-btn"
                    onClick={() => setActiveModal(slide)}
                  >
                    <FiArrowUpRight />
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* MODAL */}
        {activeModal && (
          <div className="custom-modal">
            <div className="modal-box">
              <button
                className="close-btn"
                onClick={() => setActiveModal(null)}
              >
                <FiX />
              </button>

              <img src={activeModal.img} alt="" />
            </div>
          </div>
        )}
      </section>
    );
  };

export default AboutScroll;

