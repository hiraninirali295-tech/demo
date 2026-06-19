import React, { useEffect, useState } from "react";
import "./Countercase.css";
import "bootstrap/dist/css/bootstrap.min.css";

const CounterSection = () => {
  const [counts, setCounts] = useState({
    campaigns: 0,
    audience: 0,
    leads: 0,
    roi: 0,
    ads: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) => ({
        campaigns: prev.campaigns < 300 ? prev.campaigns + 5 : 300,
        audience: prev.audience < 18 ? prev.audience + 1 : 18,
        leads: prev.leads < 500 ? prev.leads + 10 : 500,
        roi: prev.roi < 120 ? prev.roi + 2 : 120,
        ads: prev.ads < 25 ? prev.ads + 1 : 25,
      }));
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const data = [
    { value: `${counts.campaigns}+`, label: "Campaigns launched" },
    { value: `${counts.audience}K+`, label: "Audience reached" },
    { value: `${counts.leads}K+`, label: "Leads generated" },
    { value: `${counts.roi}%`, label: "ROI increase" },
    { value: `$${counts.ads}M+`, label: "Ad spend managed" },
  ];

  return (
    <section className="counter-section">
      <div className="container-fluid">
        <div className="counter-wrapper">

          {data.map((item, index) => (
            <div className="counter-item" key={index}>
              <h2>{item.value}</h2>
              <p>{item.label}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default CounterSection;
