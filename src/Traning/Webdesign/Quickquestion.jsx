import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./Quickquestion.css";

const faqData = [
  {
    question: "Who can join Full–Stack Development Course?",
    answer:
      "Anyone interested in web and software development can join the Full–Stack Development Course. This course is suitable for 12th-pass students, diploma holders, engineering students, web designers who want to learn programming, aspiring software developers, and individuals planning to pursue higher studies or IT careers in India or abroad."
  },
  {
    question: "Why should I learn Full–Stack Development?",
    answer:
      "Full-Stack Development gives you the skills to build complete web applications using frontend, backend, databases, APIs, deployment and version control."
  },
  {
    question: "What is the advantage of being a Full–Stack Developer?",
    answer:
      "A Full-Stack Developer can work on both frontend and backend projects, making them highly valuable in startups and IT companies."
  },
  {
    question:
      "What career opportunities are available after completing a Full–Stack Development Course?",
    answer:
      "You can work as a Frontend Developer, Backend Developer, React Developer, Node.js Developer, Full-Stack Developer or Software Engineer."
  },
  {
    question:
      "Which technologies will I learn in a Full–Stack Development Course?",
    answer:
      "HTML5, CSS3, Bootstrap, JavaScript, React.js, Node.js, Express.js, MongoDB, Git, GitHub, REST APIs and Deployment."
  }
];

const FAQSection = () => {
  // ❌ No FAQ is open initially
  const [active, setActive] = useState(null);

  const toggleAccordion = (index) => {
    if (active === index) {
      setActive(null);
    } else {
      setActive(index);
    }
  };

  return (
    <section className="faq-section">
      <div className="container">
        <h2 className="faq-heading">
          Quick Answers to Common Queries
        </h2>

        <div className="faq-wrapper">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faq-card ${active === index ? "active" : ""}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleAccordion(index)}
              >
                <span>{item.question}</span>

                <div className="faq-icon">
                  {active === index ? <FaMinus /> : <FaPlus />}
                </div>
              </button>

              <div
                className={`faq-answer ${
                  active === index ? "show" : ""
                }`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;