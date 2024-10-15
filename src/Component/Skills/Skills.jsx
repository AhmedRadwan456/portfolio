import React from "react";
import HTML from "../../image/HTML.jfif";
import CSS from "../../image/CSS.jfif";
import Bootstrap from "../../image/Bootstrap.jfif";
import JavaScript from "../../image/JavaScript.jfif";
import ReactJS from "../../image/react.jfif";
import TypeScript from "../../image/TypeScript.jfif";

export default function Skills() {
  return (
    <>
      <section id="skills" className=" border-bottom">
        <div className="my-4">
          <h2 className="text-center text-white ">My Skills</h2>
          <p className="text-center text-white">
            Here is my skills to represent my Expertise
          </p>
        </div>

        <div className="row mb-4 g-4">
          <div className="col-md-4">
            <div className="skills-img">
              <img className="w-100" src={HTML} alt="" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="skills-img">
              <img className="w-100" src={CSS} alt="" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="skills-img">
              <img className="w-100" src={Bootstrap} alt="" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="skills-img">
              <img className="w-100" src={JavaScript} alt="" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="skills-img">
              <img className="w-100" height={310} src={ReactJS} alt="" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="skills-img">
              <img className="w-100" height={310} src={TypeScript} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
