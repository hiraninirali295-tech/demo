import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";

import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";

import darkPlus from "../img/contact plus.png";
import darkOffice from "../img/Office.png";

import lightOffice from "../img/office white.png";
import lightPlus from "../img/plus white.png";

const ContactSection = () => {
  const [rotate, setRotate] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(
    document.body.classList.contains("dark-mode")
  );





  useEffect(() => {
    const checkTheme = () => {
      setIsDarkMode(document.body.classList.contains("dark-mode"));
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      setRotate(window.scrollY * 1);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="">
      <div className="top-contact-area">
        <div className="container">
          <div className="row">

            {/* LEFT SIDE */}
            <div className="col-lg-4 left-side">
              <p className="small-title">
                Contact Us
                <MdArrowOutward className="icons" />
              </p>

              <h1 className="main-headingcon">
                Get in touch
              </h1>

              {/* OFFICE BOX */}
              <div className="office-box">
                <div className="office-icon">
                  {/* <img
                    src={isDarkMode ? lightOffice : darkOffice}
                    alt="Office Icon"
                    className="office-icon-img"
                  /> */}

                  <img
                    src={darkOffice}
                    alt="Office Icon"
                    className="office-icon-img"

                  />

                </div>

                <div className="office-content">
                  <h6>Office</h6>

                  <p>
                    248-249, KBC-(Kedar Business Center),
                    Dabholi Road, Katargam, Surat,
                    Gujarat 395004
                  </p>

                  <p>
                    <span>Phone:</span> +262526756
                  </p>

                  <p>
                    <span>Email:</span> hello@grisacon
                  </p>
                </div>
              </div>

              {/* SOCIAL LINKS */}
              <div className="social-grid">
                <a href="https://x.com/" target="_blank" rel="noreferrer">
                  <FaXTwitter className="social-icon" />
                  Twitter
                </a>

                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebook className="social-icon" />
                  Facebook
                </a>

                <a
                  href="https://www.linkedin.com/login"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin className="social-icon" />
                  LinkedIn
                </a>

                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagramSquare className="social-icon" />
                  Instagram
                </a>

                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaYoutube className="social-icon" />
                  Youtube
                </a>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="col-lg-8 right-sides">

              {/* PLUS ICON */}
              <div className="top-plus-icon">

                <img
                  src={darkPlus}
                  alt="Plus Icon"
                  className="plus-icon-img"
                  style={{
                    transform: `rotate(${rotate}deg)`
                  }}
                />
              </div>

              <div className="top-right-text">
                <p>
                  Start the conversation by sharing your vision.
                  <br />
                  Our team will respond within 1–2 business days.
                </p>
              </div>

              {/* FORM */}
              <form className="contact-form">
                <div className="input-group-custom">
                  <input
                    type="text"
                    placeholder="Your name *"
                  />
                </div>

                <div className="input-group-custom">
                  <input
                    type="email"
                    placeholder="Your email *"
                  />
                </div>

                <div className="input-group-custom">
                  <input
                    type="text"
                    placeholder="Your phone *"
                  />
                </div>

                <div className="input-group-custom">
                  <textarea
                    rows="3"
                    placeholder="Your message *"
                  ></textarea>
                </div>

                <button className="send-btn">
                  Send Message
                  <MdArrowOutward className="iconss" />
                </button>

                <p className="privacy-text">
                  By submitting, you agree to our Terms and Privacy Policy
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* MAP */}
      <div className="map-wrapper">
        <iframe
          title="Grow Developer Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14876.225517413215!2d72.80604678715817!3d21.2296128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x815aa128e53185c5%3A0xa38d3a2fb8127844!2sGrow%20Developer!5e0!3m2!1sen!2sin!4v1778662734344!5m2!1sen!2sin"
          loading="lazy"
          allowFullScreen=""
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactSection;