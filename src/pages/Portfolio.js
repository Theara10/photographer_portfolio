import React from "react";
import data from "../lib/data/portfolio.json";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Porfolio() {
  return (
    <>
      <div className="portfolio">
        <Navbar headerColor />

        <div className="portfolio-banner">
          <h1>Portfolio</h1>
          <div className="portfolio-banner-desc">
            <p>
              Portfolio Fusce imperdiet, arcu non tempor aliquam, justo tortor
              cursus est, sed facilisis eros purus et felis. Sed eros sapien,
              iaculis eget gravida euismod, dapibus vitae turpis. Pellentesque
              men egestas odio mi, vitae egestas massa elementum.
            </p>
          </div>
        </div>

        <div className="portfolilo-photo-grid">
          {data.map((x) => {
            return (
              <Link to="/project" className="portfolio-links">
                <div
                  className="portfolio-card"
                  style={{
                    backgroundImage: x.background,
                  }}
                >
                  <h3>{x.Collection}</h3>
                  <p>{x.type}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Porfolio;
