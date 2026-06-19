
import React, { useEffect, useRef } from "react";
 import "./Cirucular.css";

import img1 from "../../../img/3af323c124267f7b12ad64ab7e2751ccd2e2f7cd.png";
import img2 from "../../../img/service/indi-2.png";
import img3 from "../../../img/service/indi-3.png";

const cardsData = [
    {
        img: img1,
        title: "Web Design",
        desc: "Modern UI/UX design with responsive layouts"
    },
    {
        img: img2,
        title: "Development",
        desc: "Full stack web development with React & Node"
    },
    {
        img: img3,
        title: "Branding",
        desc: "Creative brand identity and logo design"
    },
    {
        img: img3,
        title: "Marketing",
        desc: "Digital marketing and social media growth"
    },
    {
        img: img2,
        title: "Mobile Apps",
        desc: "Android & iOS mobile app development"
    },
    {
        img: img2,
        title: "SEO",
        desc: "Search engine optimization and ranking boost"
    },
];

const DepthCards = () => {

    const cardsRef = useRef([]);
    const containerRef = useRef(null);
    const tabsRef = useRef([]);

    const rx = 900;
    const ry = 900;

    useEffect(() => {

        placeCards(0);

        const container = containerRef.current;

        const handleMouseMove = (e) => {

            const width = container.offsetWidth;
            const x_norm = e.clientX / (width / 2) - 1;

            placeCards(x_norm);

            // 🔥 ACTIVE BUTTON LOGIC
            const cards = cardsRef.current;

            let closestIndex = 0;
            let minDistance = Infinity;

            for (let i = 0; i < cards.length; i++) {

                const card = cards[i];

                if (!card) continue;

                const rect = card.getBoundingClientRect();

                const center = rect.left + rect.width / 2;

                const distance = Math.abs(e.clientX - center);

                if (distance < minDistance) {
                    minDistance = distance;
                    closestIndex = i;
                }
            }

            // ✅ ONE CARD = ONE BUTTON
            const tabIndex = closestIndex;

            tabsRef.current.forEach((el, i) => {

                if (!el) return;

                if (i === tabIndex) {
                    el.classList.add("active-tab");
                } else {
                    el.classList.remove("active-tab");
                }

            });

        };

        const handleMouseLeave = () => {
            placeCards(0);
        };

        container.addEventListener("mousemove", handleMouseMove);
        container.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            container.removeEventListener("mousemove", handleMouseMove);
            container.removeEventListener("mouseleave", handleMouseLeave);
        };

    }, []);

    const calcAngleDegrees = (x, y) => {

        return x > 0
            ? (Math.atan2(y, x) * 180) / Math.PI
            : (Math.atan2(y, x) * 180) / Math.PI - 180;

    };

    const placeCards = (mouseX = 0) => {

        const cards = cardsRef.current;

        for (let i = 0; i < cards.length; i++) {

            const theta =
                (((180 / cards.length) / 180) *
                    i *
                    Math.PI -
                    Math.PI +
                    ((Math.PI / cards.length) / 2) *
                    (-mouseX * Math.PI) +
                    (Math.PI / cards.length) / 2);

            const posx = Math.round(rx * Math.cos(theta));
            const posy = Math.round(ry * Math.sin(theta)) + ry;
            const posZ = 30 - Math.abs(posx);

            const angle = calcAngleDegrees(posx, posy);

            const el = cards[i];

            el.style.transform = `
                translate3d(${posx}px, ${posy}px, ${posZ}px)
                rotate(${angle}deg)
            `;

            el.style.transition = "transform 0.4s ease";
        }
    };

    return (
        <>
            <section className="industries-section">

                <div className="container-fluid">

                    <div className="industries-top">

                        <h1>Industries We Cover</h1>

                        <p>
                            From startups to enterprises, we create digital solutions
                            tailored to the unique needs of every industry.
                        </p>

                        {/* ===== BUTTONS ===== */}
                        <div className="industries-tabs">

                            <button
                                className="active-tab"
                                ref={(el) => tabsRef.current[0] = el}
                            >
                                Web Design
                            </button>

                            <button
                                ref={(el) => tabsRef.current[1] = el}
                            >
                                Development
                            </button>

                            <button
                                ref={(el) => tabsRef.current[2] = el}
                            >
                                Branding
                            </button>

                            <button
                                ref={(el) => tabsRef.current[3] = el}
                            >
                                Marketing
                            </button>

                            <button
                                ref={(el) => tabsRef.current[4] = el}
                            >
                                Mobile Apps
                            </button>

                            <button
                                ref={(el) => tabsRef.current[5] = el}
                            >
                                SEO
                            </button>

                        </div>

                    </div>

                    {/* ===== CARDS ===== */}
                    <div className="depth" ref={containerRef}>

                        {cardsData.map((card, index) => (

                            <div
                                className="card"
                                key={index}
                                ref={(el) => (cardsRef.current[index] = el)}
                            >

                                <img
                                    src={card.img}
                                    alt={card.title}
                                />

                                <div className="overlays">

                                    <h2>{card.title}</h2>

                                    <p>{card.desc}</p>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </section>
        </>
    );
};

export default DepthCards;
