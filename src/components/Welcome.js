import React from "react";

function Welcome() {
  return (
    <section id="welcome-section">
      <div className="company-logo-container animate__animated animate__backInDown">
        <object
          className="company-logo"
          data="./img/logo/esguerradesign-logo.svg"
          type="image/svg+xml"
        ></object>
      </div>
      <h1 className="animate__animated animate__fadeInDown animate__delay-1s">
        VANGUARD BUILT
      </h1>
      <h2 className="animate__animated animate__fadeInDown animate__delay-2s">
        ENGINEERING SERVICES
      </h2>
    </section>
  );
}

export default Welcome;
