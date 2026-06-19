

import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "../img/ourservice-1.png";
import "./Image.css";

const ScrollImageExpand = () => {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      let scrollProgress =
        (windowHeight - rect.top) / (windowHeight + rect.height);

      scrollProgress = Math.max(0, Math.min(scrollProgress, 1));
      setProgress(scrollProgress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="scroll-section" ref={sectionRef}>
      <div
        className="image-wrapper"
        style={{
          width: `${20 + progress * 100}vw`,
          height: `${30 + progress * 70}vh`,
          borderRadius: `${30 - progress * 30}px`,
          
        }}
      >
        <img src={img1} alt="demo" />
      </div>
    </section>
  );
};

export default ScrollImageExpand;