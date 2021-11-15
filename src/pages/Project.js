import React from "react";
import Navbar from "../components/Navbar";
import data from "../lib/data/project.json";

function Project() {
  return (
    <div className="project">
      <Navbar headerColor />

      <section className="project-banner">
        <h1>The Coolest Photo Project I've Ever Created</h1>
        <p className="project-tag">Food</p>
        <div className="project-banner-desc">
          <p>
            Portfolio Fusce imperdiet, arcu non tempor aliquam, justo tortor
            cursus est, sed facilisis eros purus et felis. Sed eros sapien,
            iaculis eget gravida euismod, dapibus vitae turpis. Pellentesque men
            egestas odio mi, vitae egestas massa elementum.
          </p>
          <p>
            Portfolio Fusce imperdiet, arcu non tempor aliquam, justo tortor
            cursus est, sed facilisis eros purus et felis. Sed eros sapien,
            iaculis eget gravida euismod, dapibus vitae turpis. Pellentesque men
            egestas odio mi, vitae egestas massa elementum.
          </p>
        </div>
      </section>
      <section className="project-display">
        {data.map((x) => {
          console.log(x);
          return (
            <div
              className="project-display-card"
              style={{
                backgroundImage: x.image,
              }}
            ></div>
          );
        })}
      </section>
    </div>
  );
}

export default Project;
