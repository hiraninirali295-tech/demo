import React from "react";
import {
    FaGem,
    FaTshirt,
    FaAward,
    FaCrown,
} from "react-icons/fa";
// import "./Whychooseustranning.css";
import chatgpt from "../../img/Gemini.png";
import gemini from "../../img/Gemini.png";
import copilot from "../../img/Gemini.png";
import cursor from "../../img/Gemini.png";
import claude from "../../img/Gemini.png";
import { FaRegCheckCircle } from "react-icons/fa";
import { GoVerified } from "react-icons/go";
// import "./Placement.css";
// import "./Tool.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./Reviewstudent.css";
import video1 from "../../img/Akshay video.mp4"
import video2 from "../../img/Akshay video.mp4"
import video3 from "../../img/Akshay video.mp4"
import img1 from "../../img/43c1696b9fc2d654fb0381fa328074b2506346cd.jpg";
import Whychoose from "./Whychoose.css";


function WhyChooseUs() {
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




    // const tools = [
    //     "ChatGPT",
    //     "Gemini",
    //     "GitHub Copilot",
    //     "Cursor",
    //     "Claude",
    //     "Perplexity",
    // ];

    // const designTools = [
    //     "Figma",
    //     "Photoshop",
    //     "Illustrator",
    //     "Canva",
    //     "Adobe XD",
    //     "Sketch",
    // ];


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


    const projects =
        [
            {
                video: video1,
                title: "E-Commerce Website",
                desc: "Build a complete online shopping platform."
            },
            {
                video: video2,
                title: "Portfolio Website",
                desc: "Create a professional personal portfolio."
            },
            {
                title: "Tailoring Process",
                desc: "Expert stitching and finishing.",
                video: video3,
            },
        ];


    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 600,
        autoplay: true,
        autoplaySpeed: 2500,
        slidesToShow: 3,
        slidesToScroll: 1,

        responsive: [
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


            <section className="industry-projects-section">
                <div className="industry-content">
                    <h2 className="industry-heading">
                        Build Industry-Based Projects
                    </h2>

                    <Slider {...settings}>
                        {projects.map((item, index) => (
                            <div key={index} className="slider-card-wrapper">
                                <div className="project-card">

                                    <video
                                        className="project-video"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                    >
                                        <source src={item.video} type="video/mp4" />
                                    </video>

                                    <div className="project-content-card">
                                        <h3>{item.title}</h3>
                                        <p>{item.desc}</p>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>


        </>
    );
}

export default WhyChooseUs;