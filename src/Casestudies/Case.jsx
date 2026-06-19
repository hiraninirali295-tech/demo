import React, { useEffect, useRef ,useState } from "react";
import "./Case.css";
import { FiPlus } from "react-icons/fi";
import { MdArrowOutward } from "react-icons/md";

export default function CaseStudySection() {
   const sectionRef = useRef(null);
   const [opacity, setOpacity] = useState(0);
useEffect(() => {
  const handleScroll = () => {
    const scrollTop = window.scrollY;

    const value = Math.min(scrollTop / 500, 1);

    setOpacity(value);
  };

  window.addEventListener("scroll", handleScroll);

  return () =>
    window.removeEventListener("scroll", handleScroll);
}, []);
  return (
    <>
   <div className="case-heading-wrap">
        <div className="case-label">
          Case Studies <span><MdArrowOutward/>
          </span>
        </div>

        <div className="case-heading-row smoke-overlay"  style={{
    opacity: opacity,
  }} >
          <h1>
            Case Studies<span className="slash">/</span>
          </h1>

          <p>
            A thoughtful selection of work shaped by
            simplicity and meaningful outcomes.
          </p>
        </div>
      </div>

      <section ref={sectionRef} className="case-study-section">
        <div className="case-grid">
          {/* CARD 1 */}
          <div className="case-card card-1">
            <div className="floating-bar top-bar">
              <span>Noirform</span>

              <button>
                <FiPlus />
              </button>
            </div>

            <img
              className="img1"
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop"
              alt=""
            />

            <div className="card-overlay"></div>

            <div className="card-content">
              <div className="mini-badge">CREATIVE</div>

              <h3>
                Brand art direction &
                <br />
                visual identity
              </h3>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="case-card card-2">
            <img
              className="img2"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop"
              alt=""
            />

            <div className="card-overlay"></div>

            <div className="card-content">
              <div className="mini-badge">UI DESIGN</div>

              <h3>
                UI/UX & product design
                <br />
                for digital platforms
              </h3>
            </div>

            <div className="floating-bar bottom-bar">
              <span>Nebula</span>

              <button>
                <FiPlus />
              </button>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="case-card card-3">
            <div className="floating-bar top-barof">
              <span>Nexora</span>

              <button>
                <FiPlus />
              </button>
            </div>

            <img
              className="img3"
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop"
              alt=""
            />

            <div className="card-overlay"></div>

            <div className="card-content">
              <div className="mini-badge">CREATIVE</div>

              <h3>
                Campaigns &
                <br />
                focused content
              </h3>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="case-card card-4">
            <img
              className="img4"
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop"
              alt=""
            />

            <div className="card-overlay"></div>

            <div className="card-content">
              <div className="mini-badge">WEB DEVELOPMENT</div>

              <h3>
                High-performance
                <br />
                website development
              </h3>
            </div>

            <div className="floating-bar bottom-barfor">
              <span>Voltix</span>

              <button>
                <FiPlus />
              </button>
            </div>
          </div>

          {/* CARD 5 */}
          <div className="case-card card-5">
            <div className="floating-bar top-barof">
              <span>Solace</span>

              <button>
                <FiPlus />
              </button>
            </div>

            <img
              className="img5"
              src="https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=1200&auto=format&fit=crop"
              alt=""
            />

            <div className="card-overlay"></div>

            <div className="card-content">
              <div className="mini-badge">MOTION DESIGN</div>

              <h3>
                Animated brand
                <br />
                storytelling
              </h3>
            </div>
          </div>

          {/* CARD 6 */}
          <div className="case-card card-6">
            <img
              className="img6"
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
              alt=""
            />

            <div className="card-overlay"></div>

            <div className="card-content">
              <div className="mini-badge">VISUALS</div>

              <h3>
                Visual storytelling &
                <br />
                brand experience
              </h3>
            </div>

            <div className="floating-bar bottom-barforf">
              <span>Ardent</span>

              <button>
                <FiPlus />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


