import React from "react";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import ContactUs from "../ContactUs/ContactUs";
import Footer from "../Footer/Footer";

export default function Layout() {
  return (
    <>
      <Navbar />
      <div className="container margin">
        <Home />
        <Skills />
        <Projects />
        <ContactUs/>
      </div>
      <Footer/>
    </>
  );
}
