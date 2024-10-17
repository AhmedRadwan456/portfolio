import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import img from "../../image/profile-img.png";
import { motion } from "framer-motion";
import { fadeIn } from "../../variant.js";

export default function Home() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <main id="home" className=" margin border-bottom">
        <div className="row">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            animate={isVisible ? "show" : "exit"}
            className="col-md-8 d-flex align-items-center"
          >
            <div className=" text-white">
              <div className="profile-content">
                <h3 className="fadeIn1">
                  Hello, It's Me{" "}
                  <span className="title-color">Ahmed Radwan</span>
                </h3>
                <h1 className="fadeIn2 mb-4">
                  {" "}
                  I'M a
                  <span>
                    {" "}
                    <Typewriter
                      words={["Front End Developer"]}
                      loop
                      cursor
                      cursorStyle="|"
                      typeSpeed={50}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </span>
                </h1>
                <p className="fadeIn3 fs-5 mb-4">
                  Creating Flawless User Interactions through the Enchantment of
                  React JS!
                </p>
              </div>

              <div className="social-media mb-4">
                <ul className=" d-flex justify-content-start align-items-center list-unstyled">
                  <li className="test1 test mx-2 fadeIn4">
                    <a
                      href="https://www.facebook.com/profile.php?id=100033680709348"
                      target="_blank"
                    >
                      <i className="fa-brands text-black fa-facebook"></i>
                    </a>
                  </li>
                  <li className="test2 test mx-2  fadeIn5">
                    <a
                      href="https://www.instagram.com/ahmed_radwaan4/"
                      target="_blank"
                    >
                      {" "}
                      <i className="fa-brands text-black fa-instagram"></i>
                    </a>
                  </li>
                  <li className="test3 test mx-2  fadeIn6">
                    <a href="https://github.com/AhmedRadwan456" target="_blank">
                      <i className="fa-brands fa-github"></i>
                    </a>
                  </li>
                  <li className="test4 test mx-2  fadeIn7">
                    <a
                      href="https://www.linkedin.com/in/ahmed-radwan-17634a265/"
                      target="_blank"
                    >
                      <i className="fa-brands text-black fa-linkedin"></i>
                    </a>
                  </li>
                </ul>{" "}
              </div>
              <a
                className="btn button-hover btn-outline-success fs-5 w-50 fadeIn7"
                href="https://drive.google.com/file/d/1J7i3_ZAbxvABnjsZm2tCE2SHUXr4Lgtq/view?usp=sharing"
                target="_blank"
              >
                CV
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.7 }}
            animate={isVisible ? "show" : "exit"}
            className="col-md-4 "
          >
            <div className=" d-flex img-opacity portfolio-img justify-content-center align-items-center">
              <img src={img} className="img-width" alt="" />
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
}
