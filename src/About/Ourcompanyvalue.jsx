
// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./Ourcompanyvalue.css";
// import img1 from "../img/Ourcompanyvalue--1.png";
// import img2 from "../img/Ourcompanyvalue--2.png";
// import img3 from "../img/Ourcompanyvalue--3.png";
// import img4 from "../img/Ourcompanyvalue--4.jpg";
// import img5 from "../img/Ourcompanyvalue--5.jpg";
// import img6 from "../img/Ourcompnayvalue--6.jpg";


// export default function App() {
//   const [active, setActive] = useState(null);
//   const [pos, setPos] = useState({ x: 0, y: 0 });



// const values = [
//   { id: "01", title: "Client Market", desc: "Our foremost objective is to elevate the experience and boon for our clients.", image: img1 },
//   { id: "02", title: "Awesome Ideas", desc:"project ideas that are excellent for honing your programming and development skills.", image: img2 },
//   { id: "03", title: "Source Of Funds", desc:"To be able to progress continues, we need to invest in the R&D activities.", image: img3 },
//   { id: "04", title: "Ethical Solutions", desc: "Our quality assurance team regularly audits the operating procedures.", image: img4 },
//   { id: "05", title: "Project Setting", desc:"We make it easy to understand our assignment to avoid any hassle.", image: img5 },
//   { id: "06", title: "Market Analysis", desc: "To know and recognize the preferences and stipulation of current potentials.", image: img6 }
// ];




//   const handleMove = (e, index) => {
//     setActive(index);

//     const touch = e.touches ? e.touches[0] : null;

//     setPos({
//       x: touch ? touch.clientX : e.clientX,
//       y: touch ? touch.clientY : e.clientY
//     });
//   };

//   const handleLeave = () => {
//     setActive(null);
//   };

//   return (
//     <section className="company-section">

//       <div className="container-fluid custom-container">

//         <h1 className="mains-titles">Our Company Core Values</h1>


//         {active !== null && (
//           <div
//             className="hover-popup"
//             style={{
//               top: pos.y - 80,
//               left: pos.x - 120
//             }}
//           >
//             <img
//               src={values[active]?.image}
//               alt={values[active]?.title}
//             />
//           </div>
//         )}

//         <div className="stack-list">

//           {values.map((item, index) => (
//             <div
//               key={index}
//               className={`stack-item ${active === index ? "hover-active" : ""}`}


//               onMouseMove={(e) => handleMove(e, index)}
//               onMouseLeave={handleLeave}


//               onTouchMove={(e) => handleMove(e, index)}
//               onTouchEnd={handleLeave}
//             >
//               <div className="stack-left">[{item.id}]</div>
//               <div className="stack-middle">{item.title}</div>
//               <div className="stack-right">{item.desc}</div>
//             </div>
//           ))}

//         </div>

//       </div>

//     </section>
//   );
// }





import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Ourcompanyvalue.css";
import img1 from "../img/Ourcompanyvalue--1.png";
import img2 from "../img/Ourcompanyvalue--2.png";
import img3 from "../img/Ourcompanyvalue--3.png";
import img4 from "../img/Ourcompanyvalue--4.jpg";
import img5 from "../img/Ourcompanyvalue--5.jpg";
import img6 from "../img/Ourcompnayvalue--6.jpg";

export default function App() {
  const [active, setActive] = useState(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const values = [
    { id: "01", title: "Client Market", desc: "Our foremost objective is to elevate the experience and boon for our clients.", image: img1 },
    { id: "02", title: "Awesome Ideas", desc: "project ideas that are excellent for honing your programming and development skills.", image: img2 },
    { id: "03", title: "Source Of Funds", desc: "To be able to progress continues, we need to invest in the R&D activities.", image: img3 },
    { id: "04", title: "Ethical Solutions", desc: "Our quality assurance team regularly audits the operating procedures.", image: img4 },
    { id: "05", title: "Project Setting", desc: "We make it easy to understand our assignment to avoid any hassle.", image: img5 },
    { id: "06", title: "Market Analysis", desc: "To know and recognize the preferences and stipulation of current potentials.", image: img6 }
  ];


  const handleMove = (e, index) => {
    setActive(index);

    const touch = e.touches ? e.touches[0] : null;

    setPos({
      x: touch ? touch.clientX : e.clientX,
      y: touch ? touch.clientY : e.clientY
    });
  };

  const handleLeave = () => {
    setActive(null);
  };

  return (
    <section className="company-section">

      <div className="container-fluid custom-container">

        <h1 className="mains-titles">Our Company Core Values</h1>


        {active !== null && (
          <div
            className="hover-popup"
            style={{
              top: pos.y - 80,
              left: pos.x - 120
            }}
          >
            <img
              src={values[active]?.image}
              alt={values[active]?.title}
            />
          </div>
        )}

        <div className="stack-list">

          {values.map((item, index) => (
            <div
              key={index}
              className={`stack-item ${active === index ? "hover-active" : ""}`}


              onMouseMove={(e) => handleMove(e, index)}
              onMouseLeave={handleLeave}


              onTouchMove={(e) => handleMove(e, index)}
              onTouchEnd={handleLeave}
            >
              <div className="stack-left">[{item.id}]</div>
              <div className="stack-middle">{item.title}</div>
              <div className="stack-right">{item.desc}</div>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}