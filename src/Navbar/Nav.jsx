// Navbar.jsx

import React, { useContext, useState } from "react";

import lightLogo from "../img/Growdeveloper logo.png";
import darkLogo from "../img/Infinity copy.png";
import "./Navbar.css";

import { VscDash } from "react-icons/vsc";
import { GoArrowUpRight } from "react-icons/go";
import menuImg from "../img/servicedropdown.png";
import { AiOutlineSun, AiOutlineAppstore } from "react-icons/ai";
import "./Tranning.css";
import training from "../img/training.png";

import { RiArrowDownSFill } from "react-icons/ri";
import { HiMoon } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../App";
import {

  AiOutlineClose,
} from "react-icons/ai";
import logoBlack from "../img/logo white.png";
import logoWhite from "../img/logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [trainingMenu, setTrainingMenu] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="nav-wrapper">
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid">
          {/* LOGO */}

          <a className="navbar-brand" href="/">
            <img
              src={darkMode ? darkLogo : lightLogo}
              alt="Logo"
              className="logo-img"
            />
          </a>

          {/* MOBILE BUTTON */}

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* MENU */}

          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarNav"
          >
            <ul className="navbar-nav mx-auto">
              <li className="nav-item" onClick={() => navigate("/")}>
                Home
              </li>

              <li className="nav-item" onClick={() => navigate("/about")}>
                About
              </li>

              {/* <div
                className="gd-mega-wrapper"
                onMouseEnter={() => setOpenMenu(true)}
                onMouseLeave={() => {
                  setOpenMenu(false);
                  setActiveItem(null);
                }}
              >
              
                <li className="nav-item mega-btn">Services</li>

                
                <div className={`gd-mega-menu ${openMenu ? "active" : ""}`}>
                  <div className="gd-mega-grid">
                   
                    <div className="gd-mega-column">
                      
                      <div className="gd-mega-card gd-large">
                        <div className="gd-mega-left">
                          <h4>Mobile App Development</h4>

                          <ul
                            className={`gd-mega-submenu ${activeItem === "mobile" ? "show" : ""}`}
                          >
                            <li
                              onClick={() => navigate("/CustomAppDevelopment")}
                            >
                              <VscDash />
                              Custom App Development
                            </li>

                            <li onClick={() => navigate("/native")}>
                              <VscDash />
                              Native App Development
                            </li>

                            <li onClick={() => navigate("/hybrid")}>
                              <VscDash />
                              Hybrid App Development
                            </li>

                            <li onClick={() => navigate("/appsupport")}>
                              <VscDash />
                              App Support & Maintenance
                            </li>

                            <li onClick={() => navigate("/progressiveapp")}>
                              <VscDash />
                              Progressive Web App Development
                            </li>

                            <li onClick={() => navigate("/appmigration")}>
                              <VscDash />
                              App Migrations & Integrations
                            </li>



                          </ul>
                        </div>

                        <span
                          className={`gd-mega-arrow ${activeItem === "mobile" ? "active" : ""}`}
                          onMouseEnter={() => setActiveItem("mobile")}
                        >
                          <GoArrowUpRight />
                        </span>
                      </div>

                    
                      <div className="gd-mega-card gd-large">
                        <div className="gd-mega-left">
                          <h4>Web Development</h4>

                          <ul
                            className={`gd-mega-submenu ${activeItem === "web" ? "show" : ""}`}
                          >
                            <li onClick={() => navigate("/CustomWebDevelopment")}>
                              <VscDash />
                             Custom Web Development
                            </li>
                            <li onClick={() => navigate("/OpenSourceWebDevelopmentmain")}>
                              <VscDash />
                              Open Source Web Development
                            </li>
                            <li onClick={() => navigate("/FrontendWebDevelopmentmain")}>
                              <VscDash />
                              Front-end Web Development
                            </li>
                            <li onClick={() => navigate("/Backendwebmain")}>
                              <VscDash />
                              Back-end Web Development
                            </li>
                            <li onClick={() => navigate("/Cmswebmain")}>
                              <VscDash />
                              CMS Web Development
                            </li>
                            <li onClick={() => navigate("/Websitemaintanicemain")}>
                              <VscDash />
                              Website Maintenance
                            </li>
                          </ul>
                        </div>

                        <span
                          className={`gd-mega-arrow ${activeItem === "web" ? "active" : ""}`}
                          onMouseEnter={() => setActiveItem("web")}
                        >
                          <GoArrowUpRight />
                        </span>
                      </div>

                     
                      <div className="gd-mega-card gd-large">
                        <div className="gd-mega-left">
                          <h4>Product Development</h4>

                          <ul
                            className={`gd-mega-submenu ${activeItem === "product" ? "show" : ""}`}
                          >
                            <li onClick={() => navigate("/ProductIdentity")}>
                              <VscDash />
                              Product Identity
                            </li>
                            <li onClick={() => navigate("/ProductConsulting")}>
                              <VscDash />
                              Product Consulting
                            </li>
                            <li onClick={() => navigate("/productdesign")}>
                              <VscDash />
                              Product Design 
                            </li>
                            <li onClick={() => navigate("/mvpimprovenment")}>
                              <VscDash />
                              MVP Improvement
                            </li>
                            <li onClick={() => navigate("/mvpdevelopment")}>
                              <VscDash />
                              MVP Development
                            </li>
                            <li onClick={() => navigate("/productlaunch")}>
                              <VscDash />
                              Product Launch Support
                            </li>
                          </ul>
                        </div>

                        <span
                          className={`gd-mega-arrow ${activeItem === "product" ? "active" : ""}`}
                          onMouseEnter={() => setActiveItem("product")}
                        >
                          <GoArrowUpRight />
                        </span>
                      </div>

                      
                      <div className="gd-mega-card gd-large">
                        <div className="gd-mega-left">
                          <h4>Prototyping & UI/UX</h4>

                          <ul
                            className={`gd-mega-submenu ${activeItem === "uiux" ? "show" : ""}`}
                          >
                            <li onClick={() => navigate("/prototypingmain")}>
                              <VscDash />
                              Prototyping
                            </li>
                            <li onClick={() => navigate("/uidevelopment")}>
                              <VscDash />
                              UI Development
                            </li>
                            <li onClick={() => navigate("/uxdevelopment")}>
                              <VscDash />
                              UX Development
                            </li>
                          </ul>
                        </div>

                        <span
                          className={`gd-mega-arrow ${activeItem === "uiux" ? "active" : ""}`}
                          onMouseEnter={() => setActiveItem("uiux")}
                        >
                          <GoArrowUpRight />
                        </span>
                      </div>

                           <div className="gd-mega-card gd-large">

                        <div className="gd-mega-left">
                          <h4>Cyber Security</h4>

                          <ul className={`gd-mega-submenu ${activeItem === "cyber" ? "show" : ""}`}>
                            <li onClick={() => navigate("/Networksecurity")}><VscDash />Network Security</li>
                            <li onClick={() => navigate("/Cloudsecurity")}><VscDash />Cloud Security Services</li>
                            <li onClick={() => navigate("/Vulnerability")}><VscDash />Vulnerability Testing</li>
                            <li onClick={() => navigate("/Securityconsulting")}><VscDash />Security Consulting</li>
                            <li onClick={() => navigate("/penetration")}><VscDash />Penetration Testing</li>

                          </ul>
                        </div>

                        <span
                          className={`gd-mega-arrow ${activeItem === "cyber" ? "active" : ""}`}
                          onMouseEnter={() => setActiveItem("cyber")}
                        >
                          <GoArrowUpRight />
                        </span>

                      </div>
                    </div>

                    
                    <div className="gd-mega-column">
                     
                      <div className="gd-mega-card gd-large">
                        <div className="gd-mega-left">
                          <h4>Quality Assurance</h4>

                          <ul
                            className={`gd-mega-submenu ${activeItem === "qa" ? "show" : ""}`}
                          >
                            <li onClick={() => navigate("/Manualtesting")}>
                              <VscDash />
                              Manual Testing
                            </li>
                            <li onClick={() => navigate("/Automatemain")}>
                              <VscDash />
                              Automated Testing
                            </li>
                            <li onClick={() => navigate("/Performancetestingmain")}>
                              <VscDash />
                              Performance Testing
                            </li>
                            <li onClick={() => navigate("/Defactmangement")}>
                              <VscDash />
                              Defect Management
                            </li>
                          </ul>
                        </div>

                        <span
                          className={`gd-mega-arrow ${activeItem === "qa" ? "active" : ""}`}
                          onMouseEnter={() => setActiveItem("qa")}
                        >
                          <GoArrowUpRight />
                        </span>
                      </div>

                      
                      <div className="gd-mega-card gd-large">
                        <div className="gd-mega-left">
                          <h4>SaaS Solutions</h4>

                          <ul
                            className={`gd-mega-submenu ${activeItem === "saas" ? "show" : ""}`}
                          >
                            <li onClick={() => navigate("/Customsaasdevelopment")}>
                              <VscDash />
                              Custom SaaS Development
                            </li>
                            <li onClick={() => navigate("/Saasplateform")}>
                              <VscDash />
                              SaaS Platform Development
                            </li>
                            <li onClick={() => navigate("/Saasconsulting")}>
                              <VscDash />
                              SaaS Consulting
                            </li>
                            <li onClick={() => navigate("/Saasmigration")}>
                              <VscDash />
                              SaaS Migration
                            </li>
                            <li onClick={() => navigate("/Saasmaintence")}>
                              <VscDash />
                              SaaS Maintenance
                            </li>
                          </ul>
                        </div>

                        <span
                          className={`gd-mega-arrow ${activeItem === "saas" ? "active" : ""}`}
                          onMouseEnter={() => setActiveItem("saas")}
                        >
                          <GoArrowUpRight />
                        </span>
                      </div>

                     
                      <div className="gd-mega-card gd-large">
                        <div className="gd-mega-left">
                          <h4>Cloud Hosting</h4>

                          <ul
                            className={`gd-mega-submenu ${activeItem === "cloud" ? "show" : ""}`}
                          >
                            <li onClick={() => navigate("/cloudhosting")}>
                              <VscDash />
                              Cloud Hosting
                            </li>
                            <li onClick={() => navigate("/cloudhostingmangement")}>
                              <VscDash />
                              Cloud Management
                            </li>
                          </ul>
                        </div>

                        <span
                          className={`gd-mega-arrow ${activeItem === "cloud" ? "active" : ""}`}
                          onMouseEnter={() => setActiveItem("cloud")}
                        >
                          <GoArrowUpRight />
                        </span>
                      </div>

                      
                      <div className="gd-mega-card gd-large">
                        <div className="gd-mega-left">
                          <h4>2D & 3D Game Development</h4>

                          <ul
                            className={`gd-mega-submenu ${activeItem === "game" ? "show" : ""}`}
                          >
                            <li onClick={() => navigate("/SingleMultiplayerGames")}>
                              <VscDash />
                              Single & Multiplayer Games
                            </li>
                            <li onClick={() => navigate("/Uintygames")}>
                              <VscDash />
                              Unity Games
                            </li>
                            <li onClick={() => navigate("/arvrmain")}>
                              <VscDash />
                              AR & VR Games
                            </li>
                            <li onClick={() => navigate("/Gamemaintaince")}>
                              <VscDash />
                              Game Maintenance
                            </li>
                            <li onClick={() => navigate("/crosspalteformgames")}>
                              <VscDash />
                              Cross Platform Games
                            </li>
                            <li onClick={() => navigate("/gameanimation")}>
                              <VscDash />
                              Game Animation
                            </li>
                          </ul>
                        </div>

                        <span
                          className={`gd-mega-arrow ${activeItem === "game" ? "active" : ""}`}
                          onMouseEnter={() => setActiveItem("game")}
                        >
                          <GoArrowUpRight />
                        </span>
                      </div>

                      
                      <div className="gd-mega-card gd-large">
                        <div className="gd-mega-left">
                          <h4>Graphics Designing</h4>

                          <ul
                            className={`gd-mega-submenu ${activeItem === "graphic" ? "show" : ""}`}
                          >
                            <li onClick={() => navigate("/logodesign")}>
                              <VscDash />
                              Logo Design
                            </li>
                            <li onClick={() => navigate("/socialmediamain")}>
                              <VscDash  />
                              Social Media Post
                            </li>
                            <li onClick={() => navigate("/BusinessCard")}>
                              <VscDash />
                              Business Card
                            </li>
                            <li onClick={() => navigate("/festivalpost")}>
                              <VscDash />
                              Festival Post
                            </li>
                            <li onClick={() => navigate("/BannerDesign")}>
                              <VscDash />
                              Banner Design
                            </li>
                            <li onClick={() => navigate("/animationpost")}>
                              <VscDash />
                              Animation Post
                            </li>
                          </ul>
                        </div>

                        <span
                          className={`gd-mega-arrow ${activeItem === "graphic" ? "active" : ""}`}
                          onMouseEnter={() => setActiveItem("graphic")}
                        >
                          <GoArrowUpRight />
                        </span>
                      </div>
                    </div>

                  
                    <div className="gd-mega-column">
                    
                      <div className="gd-mega-card gd-large">
                        <div className="gd-mega-left">
                          <h4>Video Editing</h4>

                          <ul
                            className={`gd-mega-submenu ${activeItem === "video" ? "show" : ""}`}
                          >
                            <li onClick={() => navigate("/Aivideoeditingmain")}>
                              <VscDash />
                              AI Video Editing
                            </li>
                            <li onClick={() => navigate("/Professionalediting")}>
                              <VscDash />
                              Professional Editing
                            </li>
                          </ul>
                        </div>

                        <span
                          className={`gd-mega-arrow ${activeItem === "video" ? "active" : ""}`}
                          onMouseEnter={() => setActiveItem("video")}
                        >
                          <GoArrowUpRight />
                        </span>
                      </div>

                   
                      <div className="gd-mega-card gd-large">
                        <div className="gd-mega-left">
                          <h4>Digital Marketing</h4>

                          <ul
                            className={`gd-mega-submenu ${activeItem === "digital" ? "show" : ""}`}
                          >
                            <li onClick={() => navigate("/SocialMediaMarketing")}>
                              <VscDash />
                              Social Media Marketing
                            </li>
                            <li onClick={() => navigate("/SEOOptimization")}>
                              <VscDash />
                              SEO Optimization
                            </li>
                            <li onClick={() => navigate("/GoogleAds")}>
                              <VscDash />
                              Google Ads
                            </li>
                            <li onClick={() => navigate("/SMAccounts")}>
                              <VscDash />
                              SM Accounts
                            </li>
                          </ul>
                        </div>

                        <span
                          className={`gd-mega-arrow ${activeItem === "digital" ? "active" : ""}`}
                          onMouseEnter={() => setActiveItem("digital")}
                        >
                          <GoArrowUpRight />
                        </span>
                      </div>

                 

                   
                      <div className="gd-mega-image">
                        <img src={menuImg} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}

               <div
                className="gd-mega-wrapper"
                onMouseEnter={() => setOpenMenu(true)}
                onMouseLeave={() => {
                  setOpenMenu(false);
                  setActiveItem(null);
                }}
              >
                {/* NAV ITEM */}
                <li className="nav-item mega-btn">Services</li>

                {/* MEGA MENU */}
                <div className={`gd-mega-menu ${openMenu ? "active" : ""}`}>
                  <div className="gd-mega-grid">
                    {/* COLUMN 1 */}
                    <div className="gd-mega-column">
                      {/* MOBILE APP */}
                      <div className="gd-mega-card gd-large">
                        <div className="gd-mega-left">
                          <h4>Mobile App Development</h4>

                          <ul
                            className={`gd-mega-submenu ${activeItem === "mobile" ? "show" : ""}`}
                          >
                            <li
                              onClick={() => navigate("/CustomAppDevelopment")}
                            >
                              <VscDash />
                              Custom App Development
                            </li>

                            <li onClick={() => navigate("/native")}>
                              <VscDash />
                              Native App Development
                            </li>

                            <li onClick={() => navigate("/hybrid")}>
                              <VscDash />
                              Hybrid App Development
                            </li>

                            <li onClick={() => navigate("/appsupport")}>
                              <VscDash />
                              App Support & Maintenance
                            </li>

                            <li onClick={() => navigate("/progressiveapp")}>
                              <VscDash />
                              Progressive Web App Development
                            </li>

                            <li onClick={() => navigate("/appmigration")}>
                              <VscDash />
                              App Migrations & Integrations
                            </li>



                          </ul>
                        </div>

                        <span
                          className={`gd-mega-arrow ${activeItem === "mobile" ? "active" : ""}`}
                          onMouseEnter={() => setActiveItem("mobile")}
                        >
                          <GoArrowUpRight />
                        </span>
                      </div>

                      {/* WEB */}
                      <div className="gd-mega-card gd-large">
                        <div className="gd-mega-left">
                          <h4>Web Development</h4>

                          <ul
                            className={`gd-mega-submenu ${activeItem === "web" ? "show" : ""}`}
                          >
                            <li onClick={() => navigate("/CustomWebDevelopment")}>
                              <VscDash />
                              Custom Web Development
                            </li>
                            <li onClick={() => navigate("/OpenSourceWebDevelopmentmain")}>
                              <VscDash />
                              Open Source Web Development
                            </li>
                            <li onClick={() => navigate("/FrontendWebDevelopmentmain")}>
                              <VscDash />
                              Front-end Web Development
                            </li>
                            <li onClick={() => navigate("/FrontendWebDevelopmentmain")}>
                              <VscDash />
                              Back-end Web Development
                            </li>
                            <li onClick={() => navigate("/Cmswebmain")}>
                              <VscDash />
                              CMS Web Development
                            </li>
                            <li onClick={() => navigate("/Websitemaintanicemain")}>
                              <VscDash />
                              Website Maintenance
                            </li>
                          </ul>
                        </div>

                        <span
                          className={`gd-mega-arrow ${activeItem === "web" ? "active" : ""}`}
                          onMouseEnter={() => setActiveItem("web")}
                        >
                          <GoArrowUpRight />
                        </span>
                      </div>

                      {/* PRODUCT */}
                      <div className="gd-mega-card gd-large">
                        <div className="gd-mega-left">
                          <h4>Product Development</h4>

                          <ul
                            className={`gd-mega-submenu ${activeItem === "product" ? "show" : ""}`}
                          >
                            <li onClick={() => navigate("/ProductIdentity")}>
                              <VscDash />
                              Product Identity
                            </li>
                            <li onClick={() => navigate("/ProductConsulting")}>
                              <VscDash />
                              Product Consulting
                            </li>
                            <li onClick={() => navigate("/productdesign")}>
                              <VscDash />
                              Product Design
                            </li>
                            <li onClick={() => navigate("/mvpimprovenment")}>
                              <VscDash />
                              MVP Improvement
                            </li>
                            <li onClick={() => navigate("/mvpimprovenment")}>
                              <VscDash />
                              MVP Development
                            </li>
                            <li onClick={() => navigate("/productlaunch")}>
                              <VscDash />
                              Product Launch Support
                            </li>
                          </ul>
                        </div>

                        <span
                          className={`gd-mega-arrow ${activeItem === "product" ? "active" : ""}`}
                          onMouseEnter={() => setActiveItem("product")}
                        >
                          <GoArrowUpRight />
                        </span>
                      </div>

                      {/* UI UX */}
                      <div className="gd-mega-card gd-large">
                        <div className="gd-mega-left">
                          <h4>Prototyping & UI/UX</h4>

                          <ul
                            className={`gd-mega-submenu ${activeItem === "uiux" ? "show" : ""}`}
                          >
                            <li onClick={() => navigate("/ProductIdentity")}>
                              <VscDash />
                              Prototyping
                            </li>
                            <li onClick={() => navigate("/uidevelopment")}>
                              <VscDash />
                              UI Development
                            </li>
                            <li onClick={() => navigate("/uxdevelopment")}>
                              <VscDash />
                              UX Development
                            </li>
                          </ul>
                        </div>

                        <span
                          className={`gd-mega-arrow ${activeItem === "uiux" ? "active" : ""}`}
                          onMouseEnter={() => setActiveItem("uiux")}
                        >
                          <GoArrowUpRight />
                        </span>
                      </div>

                           <div className="gd-mega-card gd-large">

                        <div className="gd-mega-left">
                          <h4>Cyber Security</h4>

                          <ul className={`gd-mega-submenu ${activeItem === "cyber" ? "show" : ""}`}>
                            <li onClick={() => navigate("/Networksecurity")}><VscDash />Network Security</li>
                            <li onClick={() => navigate("/Cloudsecurity")}><VscDash />Cloud Security Services</li>
                            <li onClick={() => navigate("/Vulnerability")}><VscDash />Vulnerability Testing</li>
                            <li onClick={() => navigate("/Securityconsulting")}><VscDash />Security Consulting</li>
                            <li onClick={() => navigate("/penetration")}><VscDash />Penetration Testing</li>

                          </ul>
                        </div>

                        <span
                          className={`gd-mega-arrow ${activeItem === "cyber" ? "active" : ""}`}
                          onMouseEnter={() => setActiveItem("cyber")}
                        >
                          <GoArrowUpRight />
                        </span>

                      </div>
                    </div>

                    {/* COLUMN 2 */}
                    <div className="gd-mega-column">
                      {/* QA */}
                      <div className="gd-mega-card gd-large">
                        <div className="gd-mega-left">
                          <h4>Quality Assurance</h4>

                          <ul
                            className={`gd-mega-submenu ${activeItem === "qa" ? "show" : ""}`}
                          >
                            <li onClick={() => navigate("/Manualtesting")}>
                              <VscDash />
                              Manual Testing
                            </li>
                            <li onClick={() => navigate("/Automatemain")}>
                              <VscDash />
                              Automated Testing
                            </li>
                            <li onClick={() => navigate("/Performancetestingmain")}>
                              <VscDash />
                              Performance Testing
                            </li>
                            <li onClick={() => navigate("/Defactmangement")}>
                              <VscDash />
                              Defect Management
                            </li>
                          </ul>
                        </div>

                        <span
                          className={`gd-mega-arrow ${activeItem === "qa" ? "active" : ""}`}
                          onMouseEnter={() => setActiveItem("qa")}
                        >
                          <GoArrowUpRight />
                        </span>
                      </div>

                      {/* SAAS */}
                      <div className="gd-mega-card gd-large">
                        <div className="gd-mega-left">
                          <h4>SaaS Solutions</h4>

                          <ul
                            className={`gd-mega-submenu ${activeItem === "saas" ? "show" : ""}`}
                          >
                            <li onClick={() => navigate("/Customsaasdevelopment")}>
                              <VscDash />
                              Custom SaaS Development
                            </li>
                            <li onClick={() => navigate("/Saasplateform")}>
                              <VscDash />
                              SaaS Platform Development
                            </li>
                            <li onClick={() => navigate("/Saasconsulting")}>
                              <VscDash />
                              SaaS Consulting
                            </li>
                            <li onClick={() => navigate("/Saasmigration")}>
                              <VscDash />
                              SaaS Migration
                            </li>
                            <li onClick={() => navigate("/Saasmaintence")}>
                              <VscDash />
                              SaaS Maintenance
                            </li>
                          </ul>
                        </div>

                        <span
                          className={`gd-mega-arrow ${activeItem === "saas" ? "active" : ""}`}
                          onMouseEnter={() => setActiveItem("saas")}
                        >
                          <GoArrowUpRight />
                        </span>
                      </div>

                      {/* CLOUD */}
                      <div className="gd-mega-card gd-large">
                        <div className="gd-mega-left">
                          <h4>Cloud Hosting</h4>

                          <ul
                            className={`gd-mega-submenu ${activeItem === "cloud" ? "show" : ""}`}
                          >
                            <li onClick={() => navigate("/cloudhosting")}>
                              <VscDash />
                              Cloud Hosting
                            </li>
                            <li onClick={() => navigate("/cloudhostingmangement")}>
                              <VscDash />
                              Cloud Management
                            </li>
                          </ul>
                        </div>

                        <span
                          className={`gd-mega-arrow ${activeItem === "cloud" ? "active" : ""}`}
                          onMouseEnter={() => setActiveItem("cloud")}
                        >
                          <GoArrowUpRight />
                        </span>
                      </div>

                      {/* GAME */}
                      <div className="gd-mega-card gd-large">
                        <div className="gd-mega-left">
                          <h4>2D & 3D Game Development</h4>

                          <ul
                            className={`gd-mega-submenu ${activeItem === "game" ? "show" : ""}`}
                          >
                            <li onClick={() => navigate("/SingleMultiplayerGames")}>
                              <VscDash />
                              Single & Multiplayer Games
                            </li>
                            <li onClick={() => navigate("/Uintygames")}>
                              <VscDash />
                              Unity Games
                            </li>
                            <li onClick={() => navigate("/arvrmain")}>
                              <VscDash />
                              AR & VR Games
                            </li>
                            <li onClick={() => navigate("/Gamemaintaince")}>
                              <VscDash />
                              Game Maintenance
                            </li>
                            <li onClick={() => navigate("/crosspalteformgames")}>
                              <VscDash />
                              Cross Platform Games
                            </li>
                            <li onClick={() => navigate("/gameanimation")}>
                              <VscDash />
                              Game Animation
                            </li>
                          </ul>
                        </div>

                        <span
                          className={`gd-mega-arrow ${activeItem === "game" ? "active" : ""}`}
                          onMouseEnter={() => setActiveItem("game")}
                        >
                          <GoArrowUpRight />
                        </span>
                      </div>

                      {/* GRAPHIC */}
                      <div className="gd-mega-card gd-large">
                        <div className="gd-mega-left">
                          <h4>Graphics Designing</h4>

                          <ul
                            className={`gd-mega-submenu ${activeItem === "graphic" ? "show" : ""}`}
                          >
                            <li onClick={() => navigate("/logodesign")}>
                              <VscDash />
                              Logo Design
                            </li>
                            <li onClick={() => navigate("/socialmediamain")}>
                              <VscDash  />
                              Social Media Post
                            </li>
                            <li onClick={() => navigate("/BusinessCard")}>
                              <VscDash />
                              Business Card
                            </li>
                            <li onClick={() => navigate("/festivalpost")}>
                              <VscDash />
                              Festival Post
                            </li>
                            <li onClick={() => navigate("/BannerDesign")}>
                              <VscDash />
                              Banner Design
                            </li>
                            <li onClick={() => navigate("/animationpost")}>
                              <VscDash />
                              Animation Post
                            </li>
                          </ul>
                        </div>

                        <span
                          className={`gd-mega-arrow ${activeItem === "graphic" ? "active" : ""}`}
                          onMouseEnter={() => setActiveItem("graphic")}
                        >
                          <GoArrowUpRight />
                        </span>
                      </div>
                    </div>

                    {/* COLUMN 3 */}
                    <div className="gd-mega-column">
                      {/* VIDEO */}
                      <div className="gd-mega-card gd-large">
                        <div className="gd-mega-left">
                          <h4>Video Editing</h4>

                          <ul
                            className={`gd-mega-submenu ${activeItem === "video" ? "show" : ""}`}
                          >
                            <li onClick={() => navigate("/Aivideoeditingmain")}>
                              <VscDash />
                              AI Video Editing
                            </li>
                            <li onClick={() => navigate("/Professionalediting")}>
                              <VscDash />
                              Professional Editing
                            </li>
                          </ul>
                        </div>

                        <span
                          className={`gd-mega-arrow ${activeItem === "video" ? "active" : ""}`}
                          onMouseEnter={() => setActiveItem("video")}
                        >
                          <GoArrowUpRight />
                        </span>
                      </div>

                      {/* DIGITAL */}
                      <div className="gd-mega-card gd-large">
                        <div className="gd-mega-left">
                          <h4>Digital Marketing</h4>

                          <ul
                            className={`gd-mega-submenu ${activeItem === "digital" ? "show" : ""}`}
                          >
                            <li onClick={() => navigate("/SocialMediaMarketing")}>
                              <VscDash />
                              Social Media Marketing
                            </li>
                            <li onClick={() => navigate("/SEOOptimization")}>
                              <VscDash />
                              SEO Optimization
                            </li>
                            <li onClick={() => navigate("/GoogleAds")}>
                              <VscDash />
                              Google Ads
                            </li>
                            <li onClick={() => navigate("/SMAccounts")}>
                              <VscDash />
                              SM Accounts
                            </li>
                          </ul>
                        </div>

                        <span
                          className={`gd-mega-arrow ${activeItem === "digital" ? "active" : ""}`}
                          onMouseEnter={() => setActiveItem("digital")}
                        >
                          <GoArrowUpRight />
                        </span>
                      </div>

                 

                      {/* IMAGE */}
                      <div className="gd-mega-image">
                        <img src={menuImg} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              {/* 
              <li className="nav-item">
                Services
              </li> */}

              <li className="nav-item" onClick={() => navigate("/casestudies")}>
                Case Studies
              </li>

              <li>

                <div
                  className="training-mega-wrapper"
                  onMouseEnter={() => setTrainingMenu(true)}
                  onMouseLeave={() => setTrainingMenu(false)}
                >
                  <li className="nav-item mega-btn">
                    Training  <RiArrowDownSFill className="down-arrow-icon" />


                  </li>

                  <div className={`training-mega-menu ${trainingMenu ? "active" : ""}`}>
                    <div className="training-grid">

                      <div className="training-list">

                        <div className="training-card" onClick={() => navigate("/webdesign")} >
                          <span>Web Design</span>
                          <GoArrowUpRight />
                        </div>

                        <div className="training-card" onClick={() => navigate("/Ios")}>
                          <span>IOS Application <br /> Development</span>
                          <GoArrowUpRight />
                        </div>

                        <div className="training-card" onClick={() => navigate("/Ai")}>
                          <span>AI (Artificial Intelligence)</span>
                          <GoArrowUpRight />
                        </div>

                        <div className="training-card" onClick={() => navigate("/webdevelopmwnt")}>
                          <span>Web Development</span>
                          <GoArrowUpRight />
                        </div>

                        <div className="training-card" onClick={() => navigate("/Graphics")}>
                          <span>Graphics Design</span>
                          <GoArrowUpRight />
                        </div>

                        <div className="training-card" onClick={() => navigate("/Videos")} >
                          <span>Video Editing</span>
                          <GoArrowUpRight />
                        </div>

                        <div className="training-card" onClick={() => navigate("/Fullstack")}>
                          <span>Full Stack Development</span>
                          <GoArrowUpRight />
                        </div>

                        <div className="training-card" onClick={() => navigate("/main")}>
                          <span>UI/UX Design</span>
                          <GoArrowUpRight />
                        </div>

                        <div className="training-card" onClick={() => navigate("/sales")}>
                          <span>Sales</span>
                          <GoArrowUpRight />
                        </div>

                        <div className="training-card" onClick={() => navigate("/Android")}>
                          <span>Android Application Development</span>
                          <GoArrowUpRight />
                        </div>

                        <div className="training-card" onClick={() => navigate("/digitalmarketingmain")}>
                          <span>Digital Marketing</span>
                          <GoArrowUpRight />
                        </div>

                        <div className="training-card" onClick={() => navigate("/games")}>
                          <span>Game Development</span>
                          <GoArrowUpRight />
                        </div>

                        <div className="training-card" onClick={() => navigate("/Flute")}>
                          <span>Flutter Application <br /> Development</span>
                          <GoArrowUpRight />
                        </div>

                        <div className="training-card" onClick={() => navigate("/Cybersecurity")}>
                          <span>Cyber Security</span>
                          <GoArrowUpRight />
                        </div>

                      </div>

                      <div className="training-image">
                        <img src={training} alt="training" />
                      </div>

                    </div>
                  </div>
                </div>

              </li>


              <li className="nav-item" onClick={() => navigate("/contact")}>
                Contact
              </li>
            </ul>

            {/* ICONS */}

            <div className="d-flex align-items-center gap-3">
              <FiSearch className="icon" />

              {/* THEME TOGGLE */}

              <div className="theme-btn" onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? (
                  <AiOutlineSun className="icon" />
                ) : (
                  <HiMoon className="icon" />
                )}
              </div>

              {/* <AiOutlineAppstore
                className="icon"
                onClick={() => setSidebarOpen(true)}
                style={{ cursor: "pointer" }}
              /> */}

              <div
                className="menu-icon-wrapper"
                onClick={() => setIsOpen(true)}
              >
                <AiOutlineAppstore className="icon" />
              </div>

              {/* Overlay */}
              <div
                className={`sidebar-overlay ${isOpen ? "active" : ""}`}
                onClick={() => setIsOpen(false)}
              ></div>

              {/* Sidebar */}
              <div className={`sidebar-wrapper ${isOpen ? "active" : ""}`}>
                <button
                  className="closed-btnd"
                  onClick={() => setIsOpen(false)}
                >
                  <AiOutlineClose />
                </button>

                <div className="sidebar-content">
                  {/* Logo */}
                  {/* <div className="logo-area">
                    <img src={logo} alt="Grow Developer" className="logo" />
                  </div> */}


                 <div className="logo-area">
                    <img
                      src={darkMode ? logoBlack : logoWhite}
                      alt="Grow Developer"
                      className="logo"
                    />
                  </div>

                  {/* Heading */}
                  <h2 className="heading">
                    Unique Digital Ideas for Successful Business
                  </h2>

                  {/* Contact */}
                  <div className="contact-boxs">
                    <span>[Contact Info]</span>

                    <a href="mailto:hr@growdeveloper.com">
                      hr@growdeveloper.com
                    </a>

                    <a href="tel:+919773031116">
                      +91 97730 31116
                    </a>
                  </div>

                  {/* Address */}
                  <div className="visit-box">
                    <span>[Visit Us]</span>

                    <p>
                      248-249, KBC-(Kedar Business Center),
                      Dabholi Road,
                      Katargam,
                      Surat.
                    </p>
                  </div>

                  {/* Social Icons */}
                  <div className="social-icons">
                    <a href="/">
                      <FaFacebookF />
                    </a>

                    <a href="/">
                      <FaInstagram />
                    </a>

                    <a href="/">
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
