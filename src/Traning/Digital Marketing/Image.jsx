import React from "react";
import "./Image.css";

import img1 from "../../img/816b952ac7e64cad2c181463498645a6ba141118.png";
import img2 from "../../img/816b952ac7e64cad2c181463498645a6ba141118.png";
import img3 from "../../img/816b952ac7e64cad2c181463498645a6ba141118.png";
import img4 from "../../img/816b952ac7e64cad2c181463498645a6ba141118.png";
import img5 from "../../img/816b952ac7e64cad2c181463498645a6ba141118.png";
import img6 from "../../img/816b952ac7e64cad2c181463498645a6ba141118.png";


const projects = [
  { image: img1 },
  { image: img2 },
  { image: img3 },
  { image: img4 },
  { image: img5 },
   { image: img6 },
];

export default function PortfolioShowcase() {
  return (
    <section className="showcase-section">
      <div className="showcase-track">
        {[...projects, ...projects].map((item, index) => (
          <div
            key={index}
            className={`showcase-card ${
              index % 5 === 2 ? "active-card" : ""
            }`}
          >
            <img src={item.image} alt="" />
          </div>
        ))}
      </div>
    </section>
  );
}