import React, { useEffect, useState } from "react";
import "./Studenttestmonial.css";

const testimonials = [
  {
    text: "We came to Adon Creative with a rough idea of what we needed, and they turned it into a fully functional platform We came to Adon Creative with a rough idea of what we needed, and they turned it into a fully functional platform.",
    name: "James Mark",
    role: "CEO of Innovate Tech",
  },
  {
    text: "Their skilled and professional team delivered a top-quality solution that exceeded our expectations.",
    name: "Emily Carter",
    role: "Director at Softakey",
  },
  {
    text: "Adon Creative brought efficiency and innovation to our enterprise software solutions. We came to Adon Creative with a rough idea of what we needed, and they turned it into a fully functional platform",
    name: "Rachel Bennett",
    role: "CTO, FutureSync",
  },
  {
    text: "They refined the concept, improved the user experience, and delivered a flawless product.",
    name: "Cristian Jonathan",
    role: "CEO of Kodal Creative",
  },
];

export default function Studenttestimonal() {
  const [visibleCards, setVisibleCards] = useState(0);
  const [titleOpacity, setTitleOpacity] = useState(1);

  useEffect(() => {
  const handleScroll = () => {
    const section = document.querySelector(".testimonial-section");

    if (!section) return;

    const rect = section.getBoundingClientRect();

    const progress = Math.max(
      0,
      Math.min(
        1,
        -rect.top / (section.offsetHeight - window.innerHeight)
      )
    );

    // Title opacity
    setTitleOpacity(Math.max(0, 1 - progress * 2));

    // One card per scroll step
    if (progress < 0.20) {
      setVisibleCards(0);
    } else if (progress < 0.40) {
      setVisibleCards(1);
    } else if (progress < 0.60) {
      setVisibleCards(2);
    } else if (progress < 0.80) {
      setVisibleCards(3);
    } else {
      setVisibleCards(4);
    }
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  return (
    <section className="testimonial-section">
      <div className="testimonial-sticky">

        <div
          className="testimonial-header"
          style={{ opacity: titleOpacity }}
        >
          <h2>
            Student's
            <br />
            Testimonial
          </h2>

          <div className="rating">
            <span>4.9 ★</span>
            <p>Based on 24 reviews on Clutch</p>
          </div>
        </div>

        <div className="cards-wrapper">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className={`testimonial-card ${
                index % 2 !== 0 ? "dark-card" : ""
              } ${index < visibleCards ? "show" : ""}`}
            >
              <p className="testimonial-text">{item.text}</p>

              <div className="testimonial-footer">
                <div>
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                </div>

                <div className="quote-btn">❝</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}