import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";

import './Ourservices.css'

import img1 from "../img/ourservicehome-1.png";
import img2 from "../img/ourservicehome-2.png";
import img3 from "../img/ourservicehome-3.png";
import img4 from "../img/ourservicehome-4.png";



const services = [
  { id: 1, title: "Web Development", image: img1, Paragraph: "We create responsive, user-friendly, and high-performance websites tailored to your business goals." },
  { id: 2, title: "App Development", image: img2, Paragraph: "We develop intuitive and feature-rich mobile applications for Android and iOS that help businesses engage customers and streamline operations." },
  { id: 3, title: "Digital Marketing", image: img3, Paragraph: "Our digital marketing solutions help brands increase visibility, generate leads, and build a strong online presence through data-driven campaigns." },
  { id: 4, title: "Cyber Security", image: img4, Paragraph: "We provide reliable cybersecurity solutions to safeguard your business against cyber threats and ensure data security and compliance." },

];

export default function ServicesSection() {
  const [active, setActive] = useState(services[0]);

  return (
    <div className="services-wrapper">
      <div className="services-header">
        {/* <div className="left-text" data-text="Our Services">
          <span className="text-inner">Our Services</span>
          <MdArrowOutward className="icon" />
        </div> */}

        <div className="left-text" data-text="Our Services">
          <span className="text-inner">Our Services</span>

          <span className="icon">
            <MdArrowOutward className="icon-first" />
            <MdArrowOutward className="icon-second" />
          </span>
        </div>

        {/* <div className="right-text">Since 2012</div> */}
      </div>

      <div className="services">
        <div className="left">
          <AnimatePresence mode="wait">
            <motion.img
              key={active.id}
              src={active.image}
              alt=""
              className="main-img"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            />
          </AnimatePresence>

          <div className="projects">
            <h3>120+</h3>
            <p>Award Winning Projects</p>
          </div>
        </div>


        <div className="right">
          {services.map((item, index) => (
            <div
              key={item.id}
              className={`rowsolution ${active.id === item.id ? "active" : ""}`}
              onMouseEnter={() => setActive(item)}
            >
              <div className="text">
                <span className="number">
                  [{String(index + 1).padStart(2, "0")}]
                </span>

                <div>
                  <h1 className="titless">{item.title}</h1>

                  {active.id === item.id && (
                    <motion.p
                      className="descss"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {item.Paragraph}
                    </motion.p>
                  )}
                </div>
              </div>

              <img src={item.image} alt="" className="thumb" />
            </div>
          ))}


          {/* <button className="hero-button">
            Get a Free Quote <MdArrowOutward />
          </button> */}

          <button className="hero-button">
            <span className="btn-text-wrap">
              <span className="btn-text">Get a Free Quote</span>
              <span className="btn-text-hover">Get a Free Quote</span>
            </span>

            <span className="btn-icon-wrap">
              <MdArrowOutward className="btn-icon btn-icon-first" />
              <MdArrowOutward className="btn-icon btn-icon-second" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}