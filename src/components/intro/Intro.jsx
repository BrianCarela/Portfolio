import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from "../../assets/selfiecopy.jpg";

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Brian Carela" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>7+ year</small>
            </article>
            <article href="#projects" className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>32+ Completed Projects</small>
            </article>
          </div>
          <p>
            Seasoned software engineering educator with a strong background in full-stack JavaScript development, Python programming, and expertise in JavaScript, React, Node.js, MongoDB, and TypeScript technologies.
            <br />
            Over 7 years of experience instructing and guiding students in mastering these languages and frameworks.
            <br />
            Now seeking to transition from teaching to a hands-on role as a software engineer, eager to apply my extensive knowledge and practical skills to contribute meaningfully to dynamic development projects and collaborative teams.
            <br />
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
