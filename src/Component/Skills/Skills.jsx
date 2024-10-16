import React from "react";
import HTML from "../../image/HTML.jfif";
import CSS from "../../image/CSS.jfif";
import Bootstrap from "../../image/Bootstrap.jfif";
import JavaScript from "../../image/JavaScript.jfif";
import ReactJS from "../../image/react.jfif";
import TypeScript from "../../image/TypeScript.jfif";
import { motion } from "framer-motion";
import { fadeIn } from "../../variant.js";
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
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="col-md-4"
          >
            <div className="skills-img overflow-hidden position-relative rounded-2">
              <img className="w-100" src={HTML} height={300} alt="" />
              <div className="layer rounded-2 d-flex justify-content-center align-items-center position-absolute">
                <h2 className="text-white">HTML</h2>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="col-md-4"
          >
            <div className="skills-img rounded-2 overflow-hidden position-relative">
              <img className="w-100" src={CSS} height={300} alt="" />
              <div className="layer rounded-2 d-flex justify-content-center align-items-center position-absolute">
                <h2 className="text-white">CSS</h2>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="col-md-4"
          >
            <div className="skills-img rounded-2 overflow-hidden position-relative">
              <img className="w-100" src={Bootstrap} height={300} alt="" />
              <div className="layer rounded-2 d-flex justify-content-center align-items-center position-absolute">
                <h2 className="text-white">Bootstrap</h2>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
             className="col-md-4">
            <div className="skills-img rounded-2 overflow-hidden position-relative">
              <img className="w-100" src={JavaScript} height={300} alt="" />
              <div className="layer rounded-2 d-flex justify-content-center align-items-center position-absolute">
                <h2 className="text-white">JavaScript</h2>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
             className="col-md-4">
            <div className="skills-img rounded-2 overflow-hidden position-relative">
              <img className="w-100" height={300} src={ReactJS} alt="" />
              <div className="layer rounded-2 d-flex justify-content-center align-items-center position-absolute">
                <h2 className="text-white">ReactJS</h2>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
             className="col-md-4">
            <div className="skills-img rounded-2 overflow-hidden position-relative">
              <img className="w-100" height={300} src={TypeScript} alt="" />
              <div className="layer rounded-2 d-flex justify-content-center align-items-center position-absolute">
                <h2 className="text-white">TypeScript</h2>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
