import React from "react";

import FacebookIcon from "@material-ui/icons/Facebook/";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="home-page-bg ">
        <Navbar />
        <div className="home-page-content">
          <h1 className="home-page-title">Sepia</h1>
          <h2 className="home-page-subtitle">
            Photography Portfolio HTML Theme
          </h2>

          <p className="home-page-description ">
            Made for photographers, photo studios, design agencies. <br />
            Create your own unique and beautiful photography website!
          </p>
          <div className="buttons">
            <button>
              <Link to="/portfolio" className="nav-link">
                View All My Work
              </Link>
            </button>
            <button>
              <Link to="/hireme" className="nav-link">
                Hire Me
              </Link>
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
