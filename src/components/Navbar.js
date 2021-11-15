import React, { useState } from "react";
import MenuSharp from "@material-ui/icons/MenuSharp";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";

function Navbar({ headerColor }) {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="header">
      <div className="header-left">
        <h2>
          <Link to="/" className={headerColor ? "nav-link-black" : "nav-link"}>
            Sepia
          </Link>
        </h2>
      </div>

      <div className={clicked ? "header-right-mobile" : "header-right"}>
        <div className="header-logo-mobile-display">
          <h2>
            <Link to="/" className="nav-link">
              Sepia
            </Link>
          </h2>
          <div className="" onClick={() => setClicked(false)}>
            <CloseIcon className="header-icon-close" />
          </div>
        </div>

        <br />
        <p>
          <Link
            to="/portfolio"
            className={headerColor ? "nav-link-black" : "nav-link"}
          >
            portfolio
          </Link>
        </p>
        <p>
          <Link
            to="about"
            className={headerColor ? "nav-link-black" : "nav-link"}
          >
            About
          </Link>
        </p>
        <p>
          <Link
            to="/hireme"
            className={headerColor ? "nav-link-black" : "nav-link"}
          >
            Hire me
          </Link>
        </p>
      </div>
      <div className="header-menu-icon" onClick={() => setClicked(true)}>
        <MenuSharp className="header-icon-menu" />
      </div>
    </div>
  );
}

export default Navbar;
