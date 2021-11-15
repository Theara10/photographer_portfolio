import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SmallLine from "../components/SmallLine";

function About() {
  return (
    <>
      <Navbar headerColor />
      <div className="about">
        <div className="about-left">
          <img src="https://cdn.vox-cdn.com/thumbor/mc9-E95L3UvvgfjnN_aIKec3dQw=/0x0:2000x3100/1200x800/filters:focal(900x877:1220x1197)/cdn.vox-cdn.com/uploads/chorus_image/image/70004824/Batman_Caped_Crusader2C_COLOR.0.jpg" />
        </div>
        <div className="about-right">
          <h2>Luke Skywalker</h2>
          <p className="about-right-job">Jedi Master & Pilot</p>
          <SmallLine />
          <p className="about-right-description">
            I am an artist and photographer. Sollicitudin diam vitae, amet lacus
            donec eu, donec vulputate duis nullam nulla, suscipit nulla orci,
            ornare maecenas eget gravida. Curae sollicitudin lobortis phasellus.
            Fusce sapien, metus mi et libero enim sed lorem. I am an artist and
            photographer. Sollicitudin diam vitae, amet lacus donec eu, donec
            vulputate duis nullam nulla, suscipit nulla orci, ornare maecenas
            eget gravida. Curae sollicitudin lobortis phasellus. Fusce sapien,
            metus mi et libero enim sed lorem.
          </p>
          <div className="buttons">
            <button>Hire Me</button>
            <button>View All My Work</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
