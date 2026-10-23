import React from "react";
import Slider from "react-slick";
import "./Design.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Figma from "../../img/Figma.png";
import AdobeXD from "../../img/Adobe XD.png";
import AdobePhotoshop from "../../img/Adobe Photoshop.png";
import Illustrator from "../../img/Illustrator.png";
import Canva from "../../img/Canva.png";
import Zeplin from "../../img/Zeplin.png";
import InVision from "../../img/invision.png";
import Framer from "../../img/Framer.png";

const tools = [
  { name: "Figma", img:Figma },
  { name: "AdobeXD", img:AdobeXD },
  { name: "Photoshop", img:AdobePhotoshop },
  { name: "Illustrator", img:Illustrator },
  { name: "Canva", img:Canva },
  { name: "Zeplin", img:Zeplin },
  { name: "InVision", img:InVision },
  { name: "Framer", img:Framer },
];

const AiToolsSlider = () => {
  // const settings = {
  //   dots: false,
  //   infinite: true,
  //   arrows: false,
  //   slidesToShow: 6,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   speed: 1200,
  //   cssEase: "ease-in-out",
  //   pauseOnHover: false,
  //   pauseOnFocus: false,
  //   swipeToSlide: true,

  //   responsive: [
  //     {
  //       breakpoint: 1200,
  //       settings: {
  //         slidesToShow: 5,
  //       },
  //     },
  //     {
  //       breakpoint: 992,
  //       settings: {
  //         slidesToShow: 4,
  //       },
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 3,
  //       },
  //     },
  //     {
  //       breakpoint: 576,
  //       settings: {
  //         slidesToShow: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 420,
  //       settings: {
  //         slidesToShow: 1,
  //       },
  //     },
  //   ],
  // };

  const settings = {
  dots: false,
  infinite: true,
  arrows: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  speed: 800,
  cssEase: "ease",
  pauseOnHover: false,
  swipeToSlide: true,

  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        centerMode: true,
        centerPadding: "20px",
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        centerMode: true,
        centerPadding: "10px",
      },
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 2,
        centerMode: true,
        centerPadding: "0px",
      },
    },
  ],
};

  return (
    <section className="aitool-slider-section">
      <div className="container-fluid">

        <h2 className="aitool-slider-heading">
         Design Tools to Learn
        </h2>

        <div className="aitool-slider-box">

          <Slider {...settings}>
            {tools.map((tool, index) => (
              <div key={index}>
                <div className="aitool-single-card">

                  <div className="aitool-image-box">
                    <img src={tool.img} alt={tool.name} />
                  </div>

                  <h6 className="aitool-card-title">
                    {tool.name}
                  </h6>

                </div>
              </div>
            ))}
          </Slider>

        </div>

      </div>
    </section>
  );
};

export default AiToolsSlider;