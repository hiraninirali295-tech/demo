

import React from "react";
import Slider from "react-slick";
import "./Aitools.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import chatgpt from "../../img/chatgpt.png";
import Gemini from "../../img/Gemini.png";
import Github from "../../img/GitHub Copilot.png";
import cursor from "../../img/cursor-ai-code-icon.png";
import claude from "../../img/Clude.png";
import Perplexity from "../../img/Perplexity.png";
import DeepSeek from "../../img/DeepSeek.png";
import Grok from "../../img/Grok.png";

const tools = [
  { name: "ChatGPT", img: chatgpt },
  { name: "Gemini", img: Gemini },
  { name: "GitHub Copilot", img: Github },
  { name: "Cursor Ai", img:cursor },
  { name: "Claude", img: claude },
  { name: "Perplexity", img:Perplexity },
  { name: "DeepSeek", img:DeepSeek },
  { name: "Grok", img:Grok },
];

const AiToolsSlider = () => {


  const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 4,
  slidesToScroll: 1,

  responsive: [
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
    <section className="ai-tools-section">
      <div className="container-fluid">

        <h2 className="ai-title">
          AI Tools to Learn
        </h2>

        <div className="slider-wrapper">

          <Slider {...settings}>

            {tools.map((tool, index) => (
              <div key={index}>
                <div className="tool-card">

                  <div className="tool-icon">
                    <img src={tool.img} alt={tool.name} />
                  </div>

                  <h6>{tool.name}</h6>

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