import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="my-4">
        <div className=" d-flex justify-content-center align-items-center">
          <a className="decoration-non color-link mx-1" href="#home">
            Home
          </a>
          <a className="decoration-non color-link mx-1" href="#skills">
            Skills
          </a>
          <a className="decoration-non color-link mx-1" href="#project">
            Projects
          </a>
          <a className="decoration-non color-link mx-1" href="#contactUs">
            Contact Me
          </a>
          <a
            className="decoration-non color-link mx-1"
            target="_blank"
            href="https://drive.google.com/file/d/1J7i3_ZAbxvABnjsZm2tCE2SHUXr4Lgtq/view?usp=sharing"
          >
            CV
          </a>
        </div>
        <p className="text-center my-4 color-link">
          © 2024 Copyright : AhmedRadwan
        </p>
      </footer>
    </>
  );
}
