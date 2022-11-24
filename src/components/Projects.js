import React, { useState, useRef } from "react";

function Projects() {
  const [scroll, setScroll] = useState(false);
  const divRef = React.useRef();

  const handleScroll = (e) => {
    const scrolledFromTop = divRef.current.scrollTop;
    console.log(scrolledFromTop);
    setScroll(scrolledFromTop > 50);
  };
  return (
    <section id="projects" className="margin-top">
      <div className="project-header scaledIn active">
        <h3>Projects</h3>
      </div>
      <div className="project-list">
        <div className="project-tile fadeInUp active">
          <img
            className="project-thumbnail"
            src="./img/thumbnails/structural-design-chapel.jpg"
            alt="structural design chapel thumbnail"
          />
          <p className="others-name project-name">
            Structural Design of Two Storey Chapel
          </p>
        </div>

        <div className="project-tile fadeInUp active">
          <img
            className="project-thumbnail"
            src="./img/thumbnails/structural-design-twostorey1.jpg"
            alt="structural design twostorey1 thumbnail"
          />
          <p className="others-name project-name">
            Structural Design of Two Storey Residence
          </p>
        </div>

        <div className="project-tile fadeInUp active">
          <img
            className="project-thumbnail"
            src="./img/thumbnails/structural-design-twostorey2.jpg"
            alt="structural design twostorey2 thumbnail"
          />
          <p className="others-name project-name">
            Structural Design of Two Storey Residence
          </p>
        </div>

        <div className="project-tile fadeInUp active">
          <img
            className="project-thumbnail"
            src="./img/thumbnails/structural-design-twostorey3.jpg"
            alt="structural design twostorey3 thumbnail"
          />
          <p className="others-name project-name">
            Structural Design of Two Storey Residence
          </p>
        </div>

        <div className="project-tile fadeInUp active">
          <img
            className="project-thumbnail"
            src="./img/thumbnails/structural-design-twostorey4.jpg"
            alt="structural design twostorey4 thumbnail"
          />
          <p className="others-name project-name">
            Structural Design of Two Storey Residence
          </p>
        </div>

        <div className="project-tile fadeInUp active">
          <img
            className="project-thumbnail"
            src="./img/thumbnails/structural-design-twostorey5.jpg"
            alt="structural design twostorey5 thumbnail"
          />
          <p className="others-name project-name">
            Structural Design of Two Storey Residence
          </p>
        </div>

        <div className="project-tile fadeInUp active">
          <img
            className="project-thumbnail"
            src="./img/thumbnails/house-extension.jpg"
            alt="structural design house extension thumbnail"
          />
          <p className="others-name project-name">
            Structural Design of Second Storey Extension
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
