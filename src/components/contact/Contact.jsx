import "./contact.css";

import React from "react";
import { MdOutlineEmail, MdLocationCity } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("xpzveljg");
  if (state.succeeded) {
    return <div className="container contact__container">
      <p className="thank-you-message">Thanks for sending me a message!!</p>
    </div>
    
  }
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h5>
        I do receive your messages and will respond asap if the valid email is
        provided
      </h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
          <form onSubmit={handleSubmit} className="contact__form">
          <label htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            type="email" 
            name="email"
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
          <textarea
            id="message"
            name="message"
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
        </form>
      </div>
      <br />
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <div className="contact__option-children">
              <MdOutlineEmail className="contact__option-icon" />
              <MdLocationCity className="contact__option-icon" />
              <FaGithub className="contact__option-icon" />
              <FaLinkedin className="contact__option-icon" />
            </div>
            <div className="contact__option-children">
              <h5>BrianCarela@gmail.com</h5>
              <h5>New York, NY</h5>
              <a target="blank_" href="https://github.com/BrianCarela" className="link">
                <h5>github.com/BrianCarela</h5>
              </a>
              <a target="blank_" href="https://www.linkedin.com/in/briancarela/" className="link">
                <h5>www.linkedin.com/in/briancarela/</h5>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
