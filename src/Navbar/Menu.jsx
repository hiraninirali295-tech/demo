import React from "react";
import "./SidebarMenu.css";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";

export default function SidebarMenu({ open, setOpen }) {
  return (
    <div
      className={`overlay ${open ? "show" : ""}`}
      onClick={() => setOpen(false)}
    >
      <div
        className={`sidebar ${open ? "active" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="close-btn"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>

        <h3>
          Unique Digital Ideas for
          <br />
          Successful Business
        </h3>

        <div className="contact-block">
          <p>hr@growdeveloper.com</p>
          <p>+91 97730 31116</p>
        </div>

        <div className="social-icons">
          <FaFacebookF />
          <FaInstagram />
          <FaLinkedinIn />
        </div>
      </div>
    </div>
  );
}