
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Insight.css";
import img1 from "../img/prot1.png";
import img2 from "../img/prot2.png";
import img3 from "../img/prot3.png"
import { MdArrowOutward } from "react-icons/md";
const articles = [
    {
        id: 1,
        title: "Lessons Learned from Large-Scale LLM",
        desc: "Moving a Large Language Model from a local notebook to a global production environment reveals challenges that benchmarks don't show.",
        author: "",
        date: "",
        image:
            img1,
    },
    {
        id: 2,
        title:
            "Beyond the Accuracy Score: Why Scalability is the True Metric of Production AI",
        author: "Olivia",
        date: "July 3, 2026",
        image:
            img2,
    },
    {
        id: 3,
        title:
            "Optimizing Real-Time Detection: Strategies for Reducing Latency in Edge Computing",
        author: "Lucas",
        date: "July 17, 2026",
        image:
            img3,
    },
];

function InsightsArticles() {
    return (
        <section className="insights-section">
            <div className="container-fluid custom-container">


                <div className="row top-content align-items-start">

                    <div className="col-lg-7">
                        {/* <p className="smalls-texts">
                            Blog & Resources  <MdArrowOutward/></p>  */}

                        <p className="smalls-texts" data-text="Blog & Resources">
                            <span className="smalls-text-inner">Blog & Resources</span>
                            <MdArrowOutward className="smalls-icon" />
                        </p>

                        <h1 className="mainss-titless">
                            Insights & Articles
                        </h1>
                    </div>

                    <div className="col-lg-5">


                        <p className="right-text">
                            Articles and insights shaped by real projects, strategic thinking,
                            and a passion for thoughtful design.
                        </p>
                    </div>

                </div>

                {/* CARDS */}
                <div className="row g-4">

                    {/* LEFT BIG CARD */}
                    <div className="col-lg-4">
                        <div className="article-card large-card">

                            <img
                                src={articles[0].image}
                                alt=""
                                className="article-image"
                            />

                            <div className="overlay-dark"></div>

                            <div className="bottom-content">
                                <h2>{articles[0].title}</h2>

                                <p>{articles[0].desc}</p>
                            </div>

                        </div>
                    </div>

                    {/* CENTER CARD */}
                    <div className="col-lg-4">
                        <div className="article-card normal-card">

                            <div className="image-wrap">
                                <img
                                    src={articles[1].image}
                                    alt=""
                                    className="article-image"
                                />
                            </div>

                            <div className="normal-content">

                                <h3>{articles[1].title}</h3>

                                <div className="author-date">
                                    By <span>{articles[1].author}</span> — {articles[1].date}
                                </div>

                            </div>

                        </div>
                    </div>

                    {/* RIGHT CARD */}
                    <div className="col-lg-4">
                        <div className="article-card normal-card">

                            <div className="image-wrap">
                                <img
                                    src={articles[2].image}
                                    alt=""
                                    className="article-image"
                                />
                            </div>

                            <div className="normal-content">

                                <h3>{articles[2].title}</h3>

                                <div className="author-date">
                                    By <span>{articles[2].author}</span> — {articles[2].date}
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default InsightsArticles;

