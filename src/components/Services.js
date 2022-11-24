import React from "react";

function Services() {
  return (
    <section id="services" className="margin-top">
      <h3>Services</h3>
      <div className="services-list" id="services-list">
        <div className="project-tile fadeInUp active">
          <img
            className="project-thumbnail"
            src="./img/thumbnails/structural-design-chapel.jpg"
            alt="structural design thumbnail"
          />
          <p className="others-name project-name">Structural Design</p>
        </div>

        <div className="project-tile fadeInUp active">
          <img
            className="project-thumbnail"
            src="./img/thumbnails/structural-investigation-vgbuilt.jpg"
            alt="structural investigation thumbnail"
          />
          <p className="others-name project-name">Structural Investigation</p>
        </div>

        <div className="project-tile fadeInUp active">
          <img
            className="project-thumbnail"
            src="./img/thumbnails/construction-vgbuilt.jpg"
            alt="construction thumbnail"
          />
          <p className="others-name project-name">Construction</p>
        </div>

        <div className="project-tile fadeInUp active">
          <img
            className="project-thumbnail"
            src="./img/thumbnails/working-drawings-vgbuilt.jpg"
            alt="working drawings thumbnail"
          />
          <p className="others-name project-name">Working Drawings</p>
        </div>

        <div className="project-tile fadeInUp active">
          <img
            className="project-thumbnail"
            src="./img/thumbnails/project-cost-estimate-vgbuilt.jpg"
            alt="project cost estimate thumbnail"
          />
          <p className="others-name project-name">Project Cost Estimates</p>
        </div>

        <div className="project-tile fadeInUp active">
          <img
            className="project-thumbnail"
            src="./img/thumbnails/plumbing-design-vgbuilt.jpg"
            alt="plumbing design thumbnail"
          />
          <p className="others-name project-name">Plumbing Design</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
