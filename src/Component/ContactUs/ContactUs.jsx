import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import animate from "../../animation/Animation - 1729009419248.json";
export default function ContactUs() {
  const [state, handleSubmit] = useForm("xeoqqlzq");

  if (state.succeeded) {
    return (
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
      </>
    );
  }

  return (
    <>
      <section id="contactUs" className=" border-bottom">
        <h2 className=" text-white text-center">Contact Me</h2>
        <div className="row">
          <div className="col-md-8 ">
            <div className="contact-form">
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
                <label className="d-block text-white my-2" htmlFor="message">
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
                  className="button-hover mt-3 btn btn-outline-success w-25"
                  type="submit"
                  disabled={state.submitting}
                >
                  Submit
                </button>
              </form>
            </div>
            <div className=" my-5 d-flex justify-content-between align-items-center">
              <p className="mt-3 text-white">
                <span className="mx-2">
                  <i class="fa-sharp fa fa-envelope"></i>
                </span>
                ahmedradwaan897@gmail.com
              </p>
              <p className="mt-3 text-white">
                <span className="mx-2">
                  <i class="fa-solid fa-phone"></i>
                </span>
                +20 1062895136
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
      </section>
    </>
  );
}
