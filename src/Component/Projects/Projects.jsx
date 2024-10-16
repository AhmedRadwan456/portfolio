import React, { useState } from "react";
import img1 from "../../image/active-states.jpg";
import img2 from "../../image/bandicam 2024-10-12 13-48-24-130.jpg";
import img3 from "../../image/grid-system.jpg";
import img4 from "../../image/bandicam 2024-10-12 13-52-24-356.jpg";
import img5 from "../../image/bandicam 2024-10-12 13-52-43-685.jpg";
import img6 from "../../image/bandicam 2024-10-12 13-53-31-697.jpg";
import img7 from "../../image/bandicam 2024-10-12 13-53-59-158.jpg";
import img8 from "../../image/bandicam 2024-10-12 13-54-17-185.jpg";
import img9 from "../../image/desktop-design.jpg";
import img10 from "../../image/bandicam 2024-10-12 13-55-19-021.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "../../variant.js";

const data = [
  {
    id: 1,
    title: "social-links-profile",
    category: "HTML and CSS",
    imgUrl: img1,
    paragraph:
      "The Social Links Profile is a project designed to enhance the way users can showcase their social media presence on platforms like GitHub. This initiative is particularly beneficial for developers and professionals who want to connect their various online identities in one accessible location.",
    demo: "https://ahmedradwan456.github.io/social-links-profile/",
    code: "https://github.com/AhmedRadwan456/social-links-profile",
  },
  {
    id: 2,
    title: "blog-preview-card-main",
    category: "HTML and CSS",
    imgUrl: img2,
    paragraph:
      "the Blog Preview Card project exemplifies the fusion of aesthetics and functionality in web design. By providing a structured and visually appealing way to present blog content, it not only enhances user engagement but also empowers creators to showcase their work in a professional light.",
    demo: "https://ahmedradwan456.github.io/blog-preview-card-main/",
    code: "https://github.com/AhmedRadwan456/blog-preview-card-main",
  },
  {
    id: 3,
    title: "testimonials-grid-section-main",
    category: "HTML and CSS",
    imgUrl: img3,
    paragraph:
      "the Testimonials Grid Section project is an effective solution for presenting client feedback in a visually appealing and trustworthy manner. It emphasizes the importance of user experience and social proof in web design, making it a valuable asset for anyone looking to improve their online presence and foster trust with their audience.",
    demo: "https://ahmedradwan456.github.io/testimonials-grid-section-main/",
    code: "https://github.com/AhmedRadwan456/testimonials-grid-section-main",
  },
  {
    id: 4,
    title: "Bakery",
    category: "HTML and CSS",
    imgUrl: img4,
    paragraph:
      "the Bakery project exemplifies a vibrant community-driven approach to software development, providing essential resources and updates to its users while encouraging active participation and collaboration.",
    demo: "https://ahmedradwan456.github.io/Bakery/",
    code: "https://github.com/AhmedRadwan456/Bakery",
  },
  {
    id: 5,
    title: "Crud",
    category: "HTML and CSS and JavaScript",
    imgUrl: img5,
    paragraph:
      "The CRUD project is a web application designed to demonstrate basic Create, Read, Update, and Delete functionalities, which are essential for any database-driven application. This project serves as a practical example for developers looking to understand how to implement these core operations in a user-friendly interface.",
    demo: "https://ahmedradwan456.github.io/Crud/",
    code: "https://github.com/AhmedRadwan456/Crud",
  },
  {
    id: 6,
    title: "Meal using JavaScript",
    category: "HTML and CSS and JavaScript",
    imgUrl: img6,
    paragraph:
      "The Meal project is an engaging web application that allows users to explore a wide variety of meal recipes from around the world. It provides an interactive platform for food enthusiasts to discover new dishes, learn about different cuisines, and enhance their cooking skills through easily accessible recipes.",
    demo: "https://ahmedradwan456.github.io/The-Meal/",
    code: "https://github.com/AhmedRadwan456/The-Meal",
  },
  {
    id: 7,
    title: "E-commerce",
    category: "React Js",
    imgUrl: img7,
    paragraph:
      "The E-Commerce Store is a dynamic web application designed to provide users with a seamless online shopping experience. This platform allows customers to browse a wide range of products, making it easy to find and purchase items from the comfort of their homes.",
    demo: "https://e-commerce-one-roan.vercel.app/",
    code: "https://github.com/AhmedRadwan456/E-commerce",
  },
  {
    id: 8,
    title: "Meal Using React",
    category: "React Js and Redux",
    imgUrl: img8,
    paragraph:
      "The Meal Project is an interactive web application built with React that allows users to explore a variety of meal recipes. It serves as a practical tool for food lovers to discover new dishes, learn about different cuisines, and enhance their culinary skills through a user-friendly interface.",
    demo: "https://react-meal-project.vercel.app/",
    code: "https://github.com/AhmedRadwan456/React-meal-project",
  },
  {
    id: 9,
    title: "stats-preview-card-component-main",
    category: "HTML and CSS",
    imgUrl: img9,
    paragraph:
      "The Stats Preview Card Component is a visually appealing web component designed to showcase various statistics in a concise and engaging format. This project is part of a coding challenge on Frontend Mentor, aimed at helping developers enhance their front-end skills by creating responsive and aesthetically pleasing UI elements.",
    demo: "https://ahmedradwan456.github.io/stats-preview-card-component-main/",
    code: "https://github.com/AhmedRadwan456/stats-preview-card-component-main",
  },
  {
    id: 10,
    title: "Games",
    category: "React Js and redux and TypeScript",
    imgUrl: img10,
    paragraph:
      "The Game Platform is an engaging web application that offers users a rich selection of games to play online. Designed with a focus on user experience, this platform provides a seamless interface for gamers to explore various genres and enjoy their favorite titles.",
    demo: "https://games-azure-eight.vercel.app/",
    code: "https://github.com/AhmedRadwan456/Games",
  },
];

export default function Projects() {
  const defaul = data.filter((project) => project.category === "HTML and CSS");
  const [Arr, setArr] = useState(defaul);

  function htmlCss() {
    const newArr = data.filter(
      (project) => project.category === "HTML and CSS"
    );
    setArr(newArr);
  }
  function htmlCssJava() {
    const newArr = data.filter(
      (project) => project.category === "HTML and CSS and JavaScript"
    );
    setArr(newArr);
  }
  function reactJs() {
    const newArr = data.filter((project) => project.category === "React Js");
    setArr(newArr);
  }
  function reactJsWithRedux() {
    const newArr = data.filter(
      (project) => project.category === "React Js and Redux"
    );
    setArr(newArr);
  }
  function TypeScript() {
    const newArr = data.filter(
      (project) => project.category === "React Js and redux and TypeScript"
    );
    setArr(newArr);
  }

  return (
    <>
      <section id="project" className=" text-white border-bottom mb-5">
        <div className="header-title my-3">
          <h2 className=" text-center">My Project</h2>
          <p className=" text-center">
            Here is my projects to represent my Expertise
          </p>
        </div>

        <ul className=" list-unstyled font d-flex justify-content-center align-items-center">
          <motion.li
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className=" mx-1"
          >
            <button onClick={() => htmlCss()} className="btn btn-outline-light">
              CSS
            </button>
          </motion.li>

          <motion.li
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className=" mx-1"
          >
            <button
              onClick={() => htmlCssJava()}
              className="btn btn-outline-light"
            >
              JavaScript
            </button>
          </motion.li>
          <motion.li
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className=" mx-1"
          >
            <button onClick={() => reactJs()} className="btn btn-outline-light">
              React.JS
            </button>
          </motion.li>
          <motion.li
            variants={fadeIn("right", 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className=" mx-1"
          >
            <button
              onClick={() => reactJsWithRedux()}
              className="btn btn-outline-light"
            >
              Redux
            </button>
          </motion.li>
          <motion.li
            variants={fadeIn("right", 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className=" mx-1"
          >
            <button
              onClick={() => TypeScript()}
              className="btn btn-outline-light"
            >
              TypeScript
            </button>{" "}
          </motion.li>
        </ul>

        <div className="row my-4 g-4">
          {Arr.length > 0
            ? Arr.map((product) => (
                <motion.div
                  variants={fadeIn("down", 0.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.7 }}
                  key={product.id}
                  className="col-md-6 col-lg-4"
                >
                  <div className="project-content product">
                    <img
                      src={product.imgUrl}
                      height={200}
                      alt="active-states"
                      className="w-100"
                    />

                    <div className=" bg-opacity-10 p-3 text-white">
                      <h2 className="h5 text-center">{product.title}</h2>
                      <p className=" text-white">
                        {product.paragraph.split(" ").slice(0, 10).join(" ")}
                      </p>
                      <div className=" d-flex justify-content-center align-items-center">
                        <a
                          className=" button-hover mx-2 btn btn-outline-success "
                          href={product.demo}
                          target="_blank"
                        >
                          Demo
                        </a>
                        <a
                          className=" button-hover mx-2 btn btn-outline-success "
                          href={product.code}
                          target="_blank"
                        >
                          Code
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            : ""}
        </div>
      </section>
    </>
  );
}
