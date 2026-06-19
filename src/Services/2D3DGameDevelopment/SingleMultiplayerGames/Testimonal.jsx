import React from "react";
// import "./Testimonal.css";
import { motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";

const testimonials = [
  {
    name: "Jane Cooper",
    role: "Team Leader",
    text: "Working with this agency was a game-changer. Their UI/UX strategy elevated our digital presence.",
  },
  {
    name: "Jerome Bell",
    role: "Product Manager",
    text: "They captured our vision perfectly and delivered a clean modern design.",
  },
  {
    name: "Brooklyn Simmons",
    role: "CEO",
    text: "Amazing communication and outstanding development quality throughout the project.",
  },
    {
    name: "Brooklyn Simmons",
    role: "CEO",
    text: "Amazing communication and outstanding development quality throughout the project.",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 120,
    rotate: -6,
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    rotate: i % 2 === 0 ? -3 : 3,
    transition: {
      duration: 0.8,
      delay: i * 0.3,
      ease: "easeOut",
    },
  }),
};

const Testimonials = () => {
  return (
    <section className="testimonial-sections">

      <div className="container">

<div className="top-contentt">

  <span>Testimonial <MdArrowOutward /></span>

  <h1>
    Real client experiences that showcase our
    expertise, innovation, and commitment to
    exceptional design results
  </h1>

</div>

        <div className="cards-wrapper">

          {testimonials.map((item, index) => (
            <motion.div
              className="testimonial-cardapp"
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
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