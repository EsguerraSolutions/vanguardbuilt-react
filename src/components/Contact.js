import React from "react";

function Contact() {
  return (
    <section id="contact-details" className="greater-margin-top">
      <div id="contact-list">
        <div>
          <h3>Let's work together!</h3>
        </div>
        <div className="contact-info">
          <a
            href="mailto:esguerradesign@gmail.com"
            className="profile-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fas fa-envelope"></i> Email: EsguerraDesign@gmail.com
          </a>
        </div>
        <div className="contact-info">
          <a
            href="tel:+639162265020"
            className="profile-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fas fa-mobile-alt"></i> Mobile No.: (+63)916 226 5020
          </a>
        </div>
        <div className="contact-info text-right">
          <a
            href="tel:+639993886940"
            className="profile-link"
            target="_blank"
            rel="noreferrer"
          >
            (+63)999 388 6940
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
