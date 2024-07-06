import React from 'react';

function Contact() {
  return (
    <div className="contact-container">
      <h2>Get in Touch</h2>
      <form className="contact-form">
        <label className="label" htmlFor="name">Name:</label>
        <input className="input" type="text" id="name" />
        <label className="label" htmlFor="email">Email:</label>
        <input className="input" type="email" id="email" />
        <label className="label" htmlFor="message">Message:</label>
        <textarea className="textarea" id="message" />
        <button className="btn">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;