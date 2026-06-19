import React from "react";
import "./Testimonal.css";
import { motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";

const testimonials = [
  {
    name: "Jane Cooper",
    role: "Team Leader",
    text: "Working with this agency was a game-changer. Their UI/UX strategy elevated our digital presence beyond expectations.",
  },
  {
    name: "Jerome Bell",
    role: "Product Manager",
    text: "They captured our vision perfectly and delivered a clean modern design with amazing communication.",
  },
  {
    name: "Brooklyn Simmons",
    role: "CEO",
    text: "Amazing communication and outstanding development quality throughout the project lifecycle.",
  },
  {
    name: "Leslie Alexander",
    role: "Founder",
    text: "Their branding and UI/UX strategy completely transformed our online presence beautifully.",
  },
];

const cardVariants = {
  hidden: (i) => ({
    opacity: 0,
    y: 90,
    rotate: i % 2 === 0 ? -6 : 6,
    scale: 0.9,
  }),

  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: i % 2 === 0 ? -3 : 3,

    transition: {
      duration: 0.9,
      delay: i * 0.25,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const Testimonials = () => {
  return (
    <section className="testimonial-sections">
      <div className="container">
        {/* TOP CONTENT */}

        <div className="top-contentt">
          <span>
            Testimonial <MdArrowOutward />
          </span>

          <h1>
            Real client experiences that showcase our expertise,
            innovation, and commitment to exceptional design results
          </h1>
        </div>

        {/* CARDS */}

        <div className="cards-wrapper">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              className="testimonial-cardapp"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{
                y: -18,
                rotate: 0,
                transition: { duration: 0.35 },
              }}
            >
              <span className="quote">❝</span>

              <p>{item.text}</p>

              <div className="bottom-info">
                <h3>{item.name}</h3>
                <span>{item.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
