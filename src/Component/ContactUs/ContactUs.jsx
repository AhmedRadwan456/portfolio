import React, { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import animate from "../../animation/Animation - 1729009419248.json";
import { motion } from "framer-motion";
import { fadeIn } from "../../variant.js";

export default function ContactUs() {
  const [state, handleSubmit] = useForm("xeoqqlzq");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section id="contactUs" className=" border-bottom">
        <h2 className=" text-white text-center">Contact Me</h2>
        {state.succeeded ? (
          <>
            {" "}
            <div className="row">
              <div className="col-md-8">
                <div className="my-5 text-submit d-flex justify-content-center align-items-center">
                  <p className=" text-center fw-bold fs-4 text-white">
                    Thank you! I'ill get back to you soon.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="w-100">
                  <Lottie
                    src="../../animation/Animation - 1729009419248.json"
                    loop
                    autoplay
                    animationData={animate}
                    className=" w-100"
                  />
                </div>
              </div>
            </div>
            <div className=" my-3 flex-wrap d-flex  justify-content-start align-items-center">
              <div className="contact-email">
                <i className="fa-sharp title-color text-white fa fa-envelope"></i>
                <p className="mt-3 mx-2 d-inline-block text-white">
                  ahmedradwaan897@gmail.com
                </p>
              </div>
              <div>
                <i className="fa-solid title-color text-white fa-phone"></i>
                <p className="mt-3 mx-2  d-inline-block text-white">
                  +20 1062895136
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="row mt-5">
              <motion.div
                variants={fadeIn("right", 0.3)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.7 }}
                animate={isVisible ? "show" : "exit"}
                className="col-md-8 "
              >
                <div className="contact-form blur">
                  <form onSubmit={handleSubmit}>
                    <label className="my-2 text-white" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      className=" bg-dark text-white form-control d-block"
                      id="email"
                      placeholder="Enter Your Email"
                      required
                      type="email"
                      name="email"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                    <label
                      className="d-block text-white my-2"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      cols={30}
                      placeholder="Type your message here..."
                      className="bg-dark text-white form-control d-block"
                      name="message"
                      required
                    />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                    <button
                      className="button-hover mt-3 btn btn-outline-success"
                      type="submit"
                      disabled={state.submitting}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </motion.div>

              <motion.li
                variants={fadeIn("left", 0.3)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.7 }}
                animate={isVisible ? "show" : "exit"}
                className="col-md-4"
              >
                <div className="w-100">
                  <Lottie
                    src="../../animation/Animation - 1729009419248.json"
                    loop
                    autoplay
                    animationData={animate}
                    className=" w-100"
                  />
                </div>
              </motion.li>
            </div>

            <div className=" my-3 d-flex flex-wrap justify-content-evenly align-items-center">
              <div className="contact-email">
                <i className="fa-sharp title-color fa fa-envelope"></i>
                <p className="mt-3 mx-2 d-inline-block text-white">
                  ahmedradwaan897@gmail.com
                </p>
              </div>
              <div className="contact-email">
                <i className="fa-solid title-color fa-phone"></i>
                <p className="mt-3 mx-2  d-inline-block text-white">
                  +20 1062895136
                </p>
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
}
