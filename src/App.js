import React, { createContext, useState, useEffect, useRef } from "react";

import "./App.css";

import Nav from "./Navbar/Nav";
import Footer from "./Footer/Footer";
import Customapp from "./Services/Mobilewebdevelopment/Customweb/Customapp";
import Home from "./Home/Home";
import About from "./About/About";
import Contactmain from "./Contact/Contactmain";
import Casestudies from "./Casestudies/Casestudies";
import Mainnative from "./Services/Mobilewebdevelopment/Nativeapp/Mainnativeapp";
import Appsupport from "./Services/Mobilewebdevelopment/Appsupport/Appsupport";
import Hybrid from "./Services/Mobilewebdevelopment/Hybrid/Hybrid";
import Progressiveapp from "./Services/Mobilewebdevelopment/Progressivewebapp/Progressiveapp";
import Appmigration from "./Services/Mobilewebdevelopment/Appmigration/Appmigration"
import CustomApp from "./Services/Mobilewebdevelopment/Customweb/Customapp";

import Maincustomfile from "./Services/Mobilewebdevelopment/Customweb/Maincustomfile";
import Customwebmain from "./Services/Webdevelopment/Custom Web Development/Customwebmain"
import OpenSourceWebDevelopmentmain from "./Services/Webdevelopment/OpenSourceWebDevelopment/OpenSourceWebDevelopmentmain"
import FrontendWebDevelopmentmain from "./Services/Webdevelopment/Front-endWebDevelopment/FrontendWebDevelopmentmain"
import Backendwebmain from "./Services/Webdevelopment/Back-endWebDevelopment/Backendwebmain"
import Cmswebmain from "./Services/Webdevelopment/CMS Web Development/Cmswebmain"
import Websitemaintanicemain from "./Services/Webdevelopment/Websitemaintanice/Websitemaintanicemain.jsx"
import ProductIdentitymain from "./Services/ProductDevelopment/ProductIdentity/ProductIdentitymain.jsx"
import ProductConsulting from "./Services/ProductDevelopment/ProductConsulting/ProductConsulting.jsx"
import Productdesign from "./Services/ProductDevelopment/ProductDesign/Productdesign.jsx"
import Mvpimprovent from "./Services/ProductDevelopment/MVPImprovement/Mvpimprovent.jsx"
import Mvpdevelopment from "./Services/ProductDevelopment/MVPDevelopment/Mvpdevelopment.jsx"
import Productlaunch from "./Services/ProductDevelopment/ProductLaunchSupport/Productlaunch.jsx"
import Protypingmain from "./Services/PrototypingUI/Protyping/Protypingmain.jsx"
import Uidevelopment from "./Services/PrototypingUI/UI Development/UIdevelopment.jsx"
import Uxdevelopment from "./Services/PrototypingUI/UX Development/Uxdevelopment.jsx"
import Manualtestingmain from "./Services/QualityAssurance/ManualTesting/Manualtestingmain.jsx"
import Automatemain from "./Services/QualityAssurance/AutomatedTesting/Automatedmain.jsx"
import Performancetestingmain from "./Services/QualityAssurance/PerformanceTesting/Performancetestingmain.jsx"
import Defactmangement from "./Services/QualityAssurance/Defactmange/Defactmangement.jsx"
import Customsaasdevelopment from "./Services/SaaS Solutions/CustomSaaSDevelopment/Customsaasdevelopment.jsx"
import Saasconsulting from "./Services/SaaS Solutions/SaaSConsulting/Saasconsulting.jsx"
import Saasplateform from "./Services/SaaS Solutions/SaaSPlatformDevelopment/Saasplateformdevelopment.jsx"
import Saasmigration from "./Services/SaaS Solutions/SaaSMigration/Saasmigration.jsx"
import Saasmaintence from "./Services/SaaS Solutions/SaaSMaintenance/Saasmaintence.jsx"
import Cloudhostingmain from "./Services/CloudHosting/Cloudhosting/Cloudhostingmain.jsx"
import Cloudhostingmangement from "./Services/CloudHosting/Cloudmangement/Cloudhostingmangement.jsx"
import Arvrmain from "./Services/2D3DGameDevelopment/ARVR Games/Arvrmain.jsx"
import Singlemultiplayer from "./Services/2D3DGameDevelopment/SingleMultiplayerGames/Singlemultiplayer.jsx"
import Uintygamesmain from "./Services/2D3DGameDevelopment/UnityGames/Unitygamesmain.jsx"
import Gamemaintaince from "./Services/2D3DGameDevelopment/GameMaintenance/Gamemaintence.jsx"
// import Customplatformgames from "./Services/2D3DGameDevelopment/CrossPlatformGames/Customplatformgames.jsx"
import Customplatformgames from "./Services/2D3DGameDevelopment/CrossPlatformGames/Customplatformgames.jsx"
import Gameanimation from "./Services/2D3DGameDevelopment/GameAnimation/Gameanimation.jsx"
import Logodesign from "./Services/GraphicsDesigning/LogoDesign/Logodesign.jsx"
// import Socialmediamain from "./Services/GraphicsDesigning/SocialMediaPost/Socialmediamain.jsx"
// import Socialmediamain from "./Services/GraphicsDesigning/SocialMediaPost/Socialmediamain.jsx"
import Socialmediamain from "./Services/GraphicsDesigning/SocialMediaPost/Socialmediamain.jsx";

import BusinessCard from "./Services/GraphicsDesigning/BusinessCard/BusinessCard.jsx"
import Festivalpostmain from "./Services/GraphicsDesigning/FestivalPost/Festivalpostmain.jsx"
import BannerDesign from "./Services/GraphicsDesigning/BannerDesign/Bannerdesign.jsx"
import Animationpost from "./Services/GraphicsDesigning/AnimationPost/Animationpost.jsx"
import Aivideoeditingmain from "./Services/VideoEditing/AIVideoEditing/Aivideoeditingmain.jsx"
import Professionalediting from "./Services/VideoEditing/ProfessionalEditing/Professionalediting.jsx"
import Socialmedia from "./Services/DigitalMarketing/SocialMediaMarketing/Socialmedia.jsx"
import Seooptimization from "./Services/DigitalMarketing/SEOOptimization/Seooptimization.jsx"
import Googleads from "./Services/DigitalMarketing/GoogleAds/Googleads.jsx"
import Smaccounts from "./Services/DigitalMarketing/SMAccounts/Smaccounts.jsx"


import Webdevelopmentmain from "./Traning/Webdevelopment/Webdevelopmentmain";
import Fullmain from "./Traning/Full Stack Development/Fullmain";
import Androidmain from "./Traning/Android Application Development/Androidmain";
import Fluttermain from "./Traning/Flutter Application Development/Fluttermain";
import Iosmain from "./Traning/IOS Application Development/Iosmain";
import Graphicsmain from "./Traning/Graphics Design/Graphicsmain";
import Main from "./Traning/Uix/Main";
import Digitalmarketingmain from "./Traning/Digital Marketing/Digitalmarketingmain";
import Cybersecuritymain from "./Traning/Cyber Security/Cybersecuritymain";
import Aimain from "./Traning/AI/Aimain.jsx";
import Videosmain from "./Traning/Video Editing/Videosmain";
import Sales from "./Traning/Sales/Sales";
import Game from "./Traning/Game Development/Game";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Webdesignmain from "./Traning/Webdesign/Webdesignmain.jsx";
import Ceopage from "./About/Ceo";

// service cyber security

import Networksecuritymain from "./Services/Cybersecurity/Network Security/Networksecuritymain.jsx";
import Cloudsecuritymain from "./Services/Cybersecurity/CloudSecurityServices/Cloudsecuritymain.jsx";
import Vulnerabilitymain from "./Services/Cybersecurity/VulnerabilityTesting/Vulnerabilitymain.jsx";
import Securityconsultingmain from "./Services/Cybersecurity/SecurityConsulting/Securityconsultingmain.jsx";
import Penetrationmain from "./Services/Cybersecurity/PenetrationTesting/Penetrationmain.jsx";


export const ThemeContext = createContext();

function App() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top = e.clientY + "px";
      }
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  const [darkMode, setDarkMode] = useState(false);

  /* SAVE THEME */

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <>
      <div className="custom-cursor" ref={cursorRef}></div>

      <ThemeContext.Provider
        value={{
          darkMode,
          setDarkMode,
        }}
      >
        <div className={darkMode ? "app dark-mode" : "app light-mode"}>
          <BrowserRouter>
            <Nav />

            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/about" element={<About />} />

              <Route path="/casestudies" element={<Casestudies />} />

              <Route path="/contact" element={<Contactmain />} />
              {/* ================================================mobileappdevelopment=============================================== */}
              <Route
                path="/CustomAppDevelopment"
                element={<Maincustomfile />}
              />

              <Route path="/appsupport" element={<Appsupport />} />

              <Route path="/hybrid" element={<Hybrid />} />

              <Route path="/native" element={<Mainnative />} />
              <Route path="/progressiveapp" element={<Progressiveapp />} />
              <Route path="/appmigration" element={<Appmigration />} />
              {/* =========================================webdevelopment================================================================= */}
              <Route
                path="/CustomWebDevelopment"
                element={<Customwebmain />}
              />
              <Route path="/OpenSourceWebDevelopmentmain" element={<OpenSourceWebDevelopmentmain />} />
              <Route path="/Backendwebmain" element={<Backendwebmain />} />
              <Route path="/FrontendWebDevelopmentmain" element={<FrontendWebDevelopmentmain />} />
              <Route path="/Cmswebmain" element={<Cmswebmain />} />
              <Route path="/Websitemaintanicemain" element={<Websitemaintanicemain />} />

              {/* ======================================================Product Development=========================== */}
              <Route path="/ProductIdentity" element={<ProductIdentitymain />} />
              <Route path="/ProductConsulting" element={<ProductConsulting />} />
              <Route path="/productdesign" element={<Productdesign />} />
              <Route path="/mvpimprovenment" element={<Mvpimprovent />} />
              <Route path="/mvpdevelopment" element={<Mvpdevelopment />} />
              <Route path="/productlaunch" element={<Productlaunch />} />
              {/* ==========================Protyping================================== */}
              <Route path="/prototypingmain" element={<Protypingmain />} />
              <Route path="/uidevelopment" element={<Uidevelopment />} />
              <Route path="/uxdevelopment" element={<Uxdevelopment />} />
              {/* ===============================Quality Assurance===================================== */}
              <Route path="/Manualtesting" element={<Manualtestingmain />} />
              <Route path="/Automatemain" element={<Automatemain />} />
              <Route path="/Performancetestingmain" element={<Performancetestingmain />} />
              <Route path="/Defactmangement" element={<Defactmangement />} />

              {/* ==================================SaaS Solutions================================ */}
              <Route path="/Customsaasdevelopment" element={<Customsaasdevelopment />} />
              <Route path="/Saasconsulting" element={<Saasconsulting />} />
              <Route path="/Saasplateform" element={<Saasplateform />} />
              <Route path="/Saasmigration" element={<Saasmigration />} />
              <Route path="/Saasmaintence" element={<Saasmaintence />} />

              {/* =====================================cloudhosting================================== */}

              <Route path="/cloudhosting" element={<Cloudhostingmain />} />
              <Route path="/cloudhostingmangement" element={<Cloudhostingmangement />} />

              {/* 2d and 3d games */}

              <Route path="/arvrmain" element={<Arvrmain />} />
              {/* <Route path="/Custompalteformgames" element={<Customplateformgames/>} /> */}
              <Route path="/SingleMultiplayerGames" element={<Singlemultiplayer />} />
              <Route path="/Uintygames" element={<Uintygamesmain />} />
              <Route path="/Gamemaintaince" element={<Gamemaintaince />} />
              <Route path="/crosspalteformgames" element={<Customplatformgames />} />
              <Route path="/gameanimation" element={<Gameanimation />} />
              {/* graphic */}

              <Route path="/logodesign" element={<Logodesign />} />
              {/* <Route path="/Socialmediamain" element={<Socialmediamain />} /> */}
              <Route path="/BusinessCard" element={<BusinessCard />} />
              <Route path="/festivalpost" element={<Festivalpostmain />} />
              <Route path="/BannerDesign" element={<BannerDesign />} />
              <Route path="/animationpost" element={<Animationpost />} />
              <Route path="/socialmediamain" element={<Socialmediamain />} />


              {/* video editing */}
              <Route path="/Aivideoeditingmain" element={<Aivideoeditingmain />} />
              <Route path="/Professionalediting" element={<Professionalediting />} />
              {/* Digital Marketing */}
              <Route path="/SocialMediaMarketing" element={<Socialmedia />} />
              <Route path="/SEOOptimization" element={<Seooptimization />} />
              <Route path="/GoogleAds" element={<Googleads />} />
              <Route path="/SMAccounts" element={<Smaccounts />} />


              {/* cyber security */}

               <Route path="/Networksecurity" element={<Networksecuritymain />} />
               <Route path="/Cloudsecurity" element={<Cloudsecuritymain />} />
               <Route path="/Vulnerability" element={<Vulnerabilitymain />} />
               <Route path="/Securityconsulting" element={<Securityconsultingmain />} />
               <Route path="/penetration" element={<Penetrationmain />} />















              <Route path="/ceopage" element={<Ceopage />} />
              {/*tranning  */}

              <Route path="/webdesign" element={<Webdesignmain />} />
              <Route path="/webdevelopmwnt" element={<Webdevelopmentmain />} />
              <Route path="/Fullstack" element={<Fullmain />} />
              <Route path="/Android" element={<Androidmain />} />
              <Route path="/Flute" element={<Fluttermain />} />
              <Route path="/Ios" element={<Iosmain />} />
              <Route path="/Graphics" element={<Graphicsmain />} />
              <Route path="/main" element={<Main />} />
              <Route path="/digitalmarketingmain" element={<Digitalmarketingmain />} />
              <Route path="/Cybersecurity" element={<Cybersecuritymain />} />
              <Route path="/Ai" element={<Aimain />} />
              <Route path="/Videos" element={<Videosmain />} />
              <Route path="/sales" element={<Sales />} />
              <Route path="/games" element={<Game />} />

            </Routes>

            <Footer />
          </BrowserRouter>
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
