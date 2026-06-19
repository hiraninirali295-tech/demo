import React from "react";
import "./Companytypesection.css";
import img1 from "../../src/img/Infinity copy.png"

const PartnerBrand = () => {
    return (
        <section className="pb-main-wrap">
            <div className="pb-grid-layout">
                <div className="pb-heading-side">
                    <h1>
                        We worked with <br />
                        largest global brands
                    </h1>
                </div>

                <div className="pb-logo-box pb-top-one">
                    <img
                        src={img1}
                        alt=""
                    />
                </div>
                <div className="pb-logo-box pb-top-two">
                    <img
                        src={img1}
                        alt=""
                    />
                </div>

                <div className="pb-logo-box pb-mid-one">
                    <img
                        src={img1}
                        alt=""
                    />
                </div>

                <div className="pb-logo-box pb-mid-two">
                    <img
                        src={img1}
                        alt=""
                    />
                </div>

                <div className="pb-logo-box pb-mid-three">
                    <img
                        src={img1}
                        alt=""
                    />
                </div>

                <div className="pb-logo-box pb-mid-four">
                    <img
                        src={img1}
                        alt=""
                    />
                </div>

                <div className="pb-logo-box pb-mid-five">
                    <img
                        src={img1}
                        alt=""
                    />
                </div>

                <div className="pb-logo-box pb-mid-six">
                    <img
                        src={img1}
                        alt=""
                    />
                </div>


                <div className="pb-empty-space"></div>

                <div className="pb-logo-box pb-bottom-one">
                    <img
                        src={img1}
                        alt=""
                    />
                </div>

                <div className="pb-logo-box pb-bottom-two">
                    <img
                        src={img1}
                        alt=""
                    />
                </div>

            </div>
        </section>
    );
};

export default PartnerBrand;