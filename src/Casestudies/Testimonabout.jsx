import React, { useEffect, useRef, useState } from "react";
import img from "../img/test-2.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Testmonalabout.css";
import { MdArrowOutward } from "react-icons/md";
const menuData = [
  {
    title: "Performance Marketing",
    text: "A rare combination of technical expertise and artistic vision. The final result felt premium and purposeful.",
    name: "Hannah Lee",
    role: "Creative Director",
    company: "Studio Kinetic",
  },
  {
    title: "SEO & Content Growth",
    text: "Professional execution and attention to detail throughout the complete project journey.",
    name: "James Carter",
    role: "Marketing Lead",
    company: "Pixel Agency",
  },
  {
    title: "Rate Optimization",
    text: "Creative strategy and smooth communication helped us achieve amazing growth.",
    name: "Sophia Miller",
    role: "Founder",
    company: "Nova Studio",
  },
  {
    title: "Marketing Automation",
    text: "The final product exceeded expectations with modern design and performance.",
    name: "Daniel White",
    role: "UI Designer",
    company: "Creative Hub",
  },
  {
    title: "Analytics & Attribution",
    text: "Highly professional team delivering premium quality and scalable solutions.",
    name: "Olivia Brown",
    role: "Product Manager",
    company: "Digital Wave",
  },
];

/* SCROLL ITEM */
const ScrollStackItem = ({ children }) => {
  return <div className="stack-card">{children}</div>;
};

/* SCROLL STACK */
const ScrollStack = ({ children, setActive }) => {
  const containerRef = useRef(null);

useEffect(() => {
  const cards = containerRef.current.querySelectorAll(".stack-card");

  let current = 0;
  let target = 0;
  let animationFrame;

  const lerp = (start, end, factor) => {
    return start + (end - start) * factor;
  };

  const updateCards = () => {
    current = lerp(current, target, 0.08);

    cards.forEach((card, i) => {
      const rect = card.getBoundingClientRect();

      const center = window.innerHeight * 0.5;

      const distance = Math.abs(rect.top - center);

      const progress = Math.max(
        0,
        1 - distance / window.innerHeight
      );

      const scale = 0.88 + progress * 0.12;

     


      const translateY = i * 18 * progress;

      card.style.transform = `
        translate3d(0, ${translateY}px, 0)
        scale(${scale})
      `;

      

      const customCard = card.querySelector(".custom-card");

      if (progress > 0.72) {
        customCard?.classList.add("active");
        setActive(i);
      } else {
        customCard?.classList.remove("active");
      }
    });

    animationFrame = requestAnimationFrame(updateCards);
  };

  const handleScroll = () => {
    target = window.scrollY;
  };

  updateCards();

  window.addEventListener("scroll", handleScroll, {
    passive: true,
  });

  return () => {
    cancelAnimationFrame(animationFrame);

    window.removeEventListener("scroll", handleScroll);
  };
}, [setActive]);
  return <div ref={containerRef}>{children}</div>;
};

/* MAIN COMPONENT */
export default function App() {
  const [active, setActive] = useState(0);

  return (
    <div className="portfolio-section">
      <div className="main-wrapper">

        {/* LEFT SIDE */}
        <div className="left-fixed">

          <span className="section-tag">
            Testimonials  <MdArrowOutward />
          </span>

          <h1 className="main-heading">
            What our <br />
            clients are <br />
            saying
          </h1>

          <button className="project-btn">
            View Latest Projects  <MdArrowOutward />
          </button>

        </div>

        {/* RIGHT SIDE */}
               <div className="right-scroll">

          <ScrollStack setActive={setActive}>

            {menuData.map((item, i) => (
              <ScrollStackItem key={i}>

                <div className="custom-card testimonial-cardabout">

                  {/* STARS */}
                  <div className="starss">
                    ★ ★ ★ ★ ★
                  </div>

                  {/* TEXT */}
                  <p className="testimonial-text">
                    “{item.text}”
                  </p>

                  {/* PROFILE */}
                  <div className="profile-box">

                    <img
                      src={img}
                      alt="profile"
                      className="profile-img"
                    />

                    <div className="profile-content">
                      <h4 className="test">{item.name}</h4>
                      <span className="role">{item.role}</span>
                      <p>{item.company}</p>
                    </div>

                  </div>

                </div>

              </ScrollStackItem>
            ))}

          </ScrollStack>

        </div>


      </div>
    </div>
  );
}