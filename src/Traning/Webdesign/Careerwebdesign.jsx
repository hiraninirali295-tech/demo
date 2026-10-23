import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Careerwebdesign.css";
import { MdArrowOutward } from "react-icons/md";

const CareerSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const accordionData = [
        {
            title: "Web Design Fundamentals",
            content: [
                "HTML5 & CSS3 Basics",
                "Flexbox & Grid Layouts",
                "Redux for State Management",
                "Responsive Web Design",
                "Tailwind CSS & Bootstrap",

            ],
        },
        {
            title: "JavaScript & DOM Manipulation",
            content: [
                "JavaScript Fundamentals & ES6+ Features",
                "DOM Manipulation & Event Handling",
                "API Integration & Data Fetching",
                "Asynchronous Programming & Error Handling",

            ],
        },
        {
            title: "React.js & Modern Front-End Development",
            content: [
                "React.js Fundamentals – Components, Props & State",
                "JSX & Virtual DOM Concepts",
                "Reusable Component Architecture",
                "React Hooks – useState, useEffect, useContext",
                "Advanced Hooks – useRef, useMemo, useCallback",
            ],
        },
        {
            title: "Dashboard & Admin Panel Design",
            content: [
                "Dashboard UI/UX Design Principles",
                "Admin Panel Layout & Navigation Design",
                "Data Visualization with Charts & Graphs",
                "Analytics & Reporting Dashboard Design",
            ],
        },

    ];

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="career-section">
            <div className="career-container">
                <div className="career-title">
                    <h2>Career in Web Design</h2>
                </div>

                <div className="career-accordion">
                    {accordionData.map((item, index) => (
                        <div
                            className={`career-card ${activeIndex === index ? "active" : ""
                                }`}
                            key={index}
                        >
                            <div
                                className="career-header"
                                onClick={() => handleToggle(index)}
                            >
                                <h4>{item.title}</h4>

                                <div className="icon-circle">
                                    {activeIndex === index ? <FaMinus /> : <FaPlus />}
                                </div>
                            </div>

                            <div
                                className={`career-content ${activeIndex === index ? "show" : ""
                                    }`}
                            >
                                <ul>
                                    {item.content.map((text, i) => (
                                        <li key={i}>{text}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="enroll-btn">
                    <span className="btn-text-wrap">
                        <span className="btn-text">Enroll Now</span>
                        <span className="btn-text-hover">Enroll Now</span>
                    </span>

                    <span className="btn-icon-wrap">
                        <span className="btn-icon">
                            <MdArrowOutward />
                        </span>

                        <span className="btn-icon-hover">
                            <MdArrowOutward />
                        </span>
                    </span>
                </button>
            </div>
        </section>
    );
};

export default CareerSection;