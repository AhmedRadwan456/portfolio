import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg  mx-auto bg fixed-top">
        <div className="container">
          <a className="navbar-brand title-color  fadeIn1" href="#">
            Ahmed Radwan
          </a>
          <button
            className="navbar-toggler nav-icon"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav text-center ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link text-white1 active fadeIn2"
                  aria-current="page"
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white1 fadeIn3" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white1 fadeIn4" href="#project">
                  Project
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white1 fadeIn5" href="#contactUs">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
