import React, { useState } from "react";
import "./Whychoosemain.css";
import {
    FaGem,
    FaTshirt,
    FaAward,
    FaCrown,
} from "react-icons/fa";
import { FaPlus, FaMinus } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import img1 from "../../img/Banner Design.jpg";
import Slider from "react-slick";
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
import Figma from "../../img/Figma.png";
import AdobeXD from "../../img/Adobe XD.png";
import AdobePhotoshop from "../../img/Adobe Photoshop.png";
import Illustrator from "../../img/Illustrator.png";
import Canva from "../../img/Canva.png";
import Zeplin from "../../img/Zeplin.png";
import InVision from "../../img/invision.png";
import Framer from "../../img/Framer.png";
import { GoVerified } from "react-icons/go";
import img2 from "../../img/Akshay video.mp4";
// import { FaPlus, FaMinus } from "react-icons/fa";

function Whychoosemain() {
    const features = [
        {
            icon: <FaGem />,
            title: "Career-Oriented Training",
            desc: "Our courses are designed according to current industry standards, ensuring students gain practical knowledge in development, design, marketing, and emerging technologies.",
        },
        {
            icon: <FaTshirt />,
            title: "Hands-On Project Experience",
            desc: "Students work on live projects, case studies, and practical assignments that help them develop confidence and create an impressive portfolio..",
        },
        {
            icon: <FaAward />,
            title: "Expert Mentorship",
            desc: "Get guidance from mentors who have real-world experience and can help you understand industry best practices, workflows, and career paths.",
        },
        {
            icon: <FaCrown />,
            title: "Placement Assistance",
            desc: "From resume building and interview preparation to job referrals and placement guidance, we help students become job-ready.",
        },
    ];

    // section 2

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

    // section 3

    const projects = [
        {
            img: img1,
            title: "Video Streaming Application",
            desc: "A scalable platform for streaming high-quality videos with real-time playback, user personalization, and seamless cross-device access.",
        },
        {
            img: img1,
            title: "Real-Time Chat Application",
            desc: "A modern messaging platform with real-time communication, user presence, media sharing, and intuitive UI for seamless conversations across devices.",
        },
        {
            img: img1,
            title: "E-Commerce Platform",
            desc: "Complete online shopping solution with product catalog, cart management, payment integration and order tracking.",
        },
        {
            img: img1,
            title: "Learning Management System",
            desc: "Interactive platform for online learning, course management, assessments, certificates and student progress tracking.",
        },
        {
            img: img1,
            title: "CRM Management System",
            desc: "Customer relationship management platform with sales, support, reporting and automation tools.",
        },
    ];

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 800,
        slidesToShow: 2,
        slidesToScroll: 1,
        pauseOnHover: true,

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    // section 4

    const tools = [
        { name: "ChatGPT", img: chatgpt },
        { name: "Gemini", img: Gemini },
        { name: "GitHub Copilot", img: Github },
        { name: "Cursor Ai", img: cursor },
        { name: "Claude", img: claude },
        { name: "Perplexity", img: Perplexity },
        { name: "DeepSeek", img: DeepSeek },
        { name: "Grok", img: Grok },
    ];

    const settingss = {
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

    // section 5

    const toolss = [
        { name: "Figma", img: Figma },
        { name: "AdobeXD", img: AdobeXD },
        { name: "Photoshop", img: AdobePhotoshop },
        { name: "Illustrator", img: Illustrator },
        { name: "Canva", img: Canva },
        { name: "Zeplin", img: Zeplin },
        { name: "InVision", img: InVision },
        { name: "Framer", img: Framer },
    ];

    const settingsss = {
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

    // section 6
    const jobs = [
        "Frontend Developer",
        "UI Developer",
        "Web Developer",
        "Junior Web Engineer",
        "Software Engineer (Entry Level)",
        "Full Stack Developer",
        "API Developer",
        "Backend Developer",
    ];

    // section 7
    const students = [
        {
            name: "Jay Donda",
            course: "UI/UX & Graphic Design",
            video: img2,
        },
        {
            name: "Nishita Manjaravala",
            course: "Full Stack Development",
            video: img2,
        },
        {
            name: "Nayan Gayke",
            course: "ITA-CS+",
            video: img2,
        },
        {
            name: "Rahul Patel",
            course: "React Development",
            video: img2,
        },
        {
            name: "Priya Shah",
            course: "Python Development",
            video: img2,
        },
    ];

    const video = {
        dots: false,
        infinite: true,
        speed: 700,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        arrows: false,

        slidesToShow: 3,
        slidesToScroll: 1,

        adaptiveHeight: false,
        lazyLoad: "ondemand",
        swipeToSlide: true,
        draggable: true,

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    // section 8

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
    const [active, setActive] = useState(null);

    const toggleAccordion = (index) => {
        if (active === index) {
            setActive(null);
        } else {
            setActive(index);
        }
    };

    // section 9
    const placements = [
        {
            name: "Ms. Rimi Patel",
            role: "Graphic And UI/UX Designer",
            company: "Tech Samrajya",
            active: false,
        },
        {
            name: "Mr. Ashutosh Rangi",
            role: "Graphic Designer",
            company: "Next Design Studio",
            active: true,
        },
        {
            name: "Ms. Shreha Paunikar",
            role: "Graphics Designer",
            company: "Gomzi Consulting Services",
            active: false,
        },
        {
            name: "Ms. Rimi Patel",
            role: "Graphic And UI/UX Designer",
            company: "Tech Samrajya",
            active: true,
        },
    ];

    return (
        <>
            
                <section className="why-section gx-5">
                    <div className="container">
                        <div className="row align-items-center gx-5">

                            {/* Left Side */}
                            <div className="col-lg-8">
                                <h2 className="section-title">
                                    Why Choose Us
                                </h2>

                                <div className="row g-4">
                                    {features.map((item, index) => (
                                        <div className="col-md-6" key={index}>
                                            <div className="feature-card">
                                                <div className="feature-icon">
                                                    {item.icon}
                                                </div>

                                                <h4>{item.title}</h4>

                                                <p>{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right Side Form */}
                            <div className="col-lg-4">
                                <div className="contact-form-box">
                                    <h2 className="form-title">
                                        Take The First Step Towards Your Dream Career
                                    </h2>

                                    <form>
                                        <div className="form-group">
                                            <label>Your Name*</label>
                                            <input
                                                type="text"
                                                className="custom-input"
                                                placeholder="Amit Agravat"
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label>Your Email*</label>
                                            <input
                                                type="email"
                                                className="custom-input"
                                                placeholder="amitagravat12@gmail.com"
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label>Your Phone*</label>
                                            <input
                                                type="text"
                                                className="custom-input"
                                                placeholder="+91 2566 156 1565"
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label>Your Course*</label>
                                            <select className="custom-input">
                                                <option>Full Stack Development</option>
                                                <option>Sherwani</option>
                                                <option>Indo Western</option>
                                                <option>Bandhgala</option>
                                                <option>Jodhpuri Suit</option>
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <label>Your Message*</label>
                                            <textarea className="custom-textarea"></textarea>
                                        </div>

                                        <button type="submit" className="submit-btn">
                                            Submit Form
                                        </button>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* section 2 */}

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

                {/* section 3 */}

                <section className="industry-projects-section">
                    <div className="industry-content">
                        <h2 className="industry-heading">
                            Build Industry-Based Projects
                        </h2>

                        <div className="industry-slider">
                            <Slider {...settings}>
                                {projects.map((item, index) => (
                                    <div key={index} className="slider-card-wrapper">
                                        <div className="project-card">
                                            <div className="project-image-wrapper">
                                                <img
                                                    src={item.img}
                                                    alt={item.title}
                                                    className="project-image"
                                                />
                                            </div>

                                            <div className="project-content-card">
                                                <h3>{item.title}</h3>
                                                <p>{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </section>

                {/* section 4 */}
                <section className="ai-tools-section">
                    <div className="container-fluid">

                        <h2 className="ai-title">
                            AI Tools to Learn
                        </h2>

                        <div className="slider-wrapper">

                            <Slider {...settingss}>

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

                {/* section 5 */}
                <section className="aitool-slider-section">
                    <div className="container-fluid">

                        <h2 className="aitool-slider-heading">
                            Design Tools to Learn
                        </h2>

                        <div className="aitool-slider-box">

                            <Slider {...settingsss}>
                                {toolss.map((tool, index) => (
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

                {/* section 6 */}
                <section className="job-scope-section">
                    <div className="job-scope-card">
                        <h2 className="traninigtitle">Job Scope After Course Completion</h2>

                        <ul>
                            {jobs.map((job, index) => (
                                <li key={index}>
                                    <GoVerified className="job-icon" />
                                    {job}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* section 7 */}

                <section className="student-section">
                    <div className="student-container">

                        <h2 className="student-heading">
                            Hear from our Students
                        </h2>

                        <Slider {...video}>
                            {students.map((student, index) => (
                                <div className="slide-wrapper" key={index}>
                                    <div className="student-card">

                                        <div className="video-box">
                                            <video
                                                src={student.video}
                                                muted
                                                loop
                                                playsInline
                                                autoPlay
                                                controls
                                                preload="metadata"
                                                className="student-video"
                                            />
                                        </div>

                                        <div className="student-content">
                                            <h4>{student.name}</h4>
                                            <p>{student.course}</p>
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </Slider>

                    </div>
                </section>

                {/* section 8 */}
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
                                        className={`faq-answer ${active === index ? "show" : ""
                                            }`}
                                    >
                                        <p>{item.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* section 9 */}
                <section className="placement-section">
                    <h2 className="placement-title container-fluid">
                        Shaping Futures Through Placements
                    </h2>

                    <div className="placement-slider">
                        <div className="placement-track">
                            {[...placements, ...placements].map((item, index) => (
                                <div
                                    key={index}
                                    className={`placement-card ${item.active ? "active-card" : ""
                                        }`}
                                >
                                    <div className="placement-top">
                                        <div className="student-img"></div>

                                        <div>
                                            <h5>{item.name}</h5>
                                            <p>{item.role}</p>
                                        </div>
                                    </div>

                                    <div className="placement-footer">
                                        <span>Placed at</span>
                                        <span>{item.company}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

          


        </>
    )
}

export default Whychoosemain
