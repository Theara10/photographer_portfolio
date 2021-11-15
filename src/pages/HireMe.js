import React from "react";
import Navbar from "../components/Navbar";
import SmallLine from "../components/SmallLine";
import HomeIcon from "@material-ui/icons/Home";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import ContactIcon from "../components/ContactIcon";

function HireMe() {
  return (
    <>
      <Navbar headerColor />
      <div className="hireme">
        <div className="hireme-container">
          <h2>Get In Touch</h2>
          <SmallLine />
          <div className="hireme-telegram">
            <HomeIcon />
            <p>Address: Phnom Penh, Cambodia</p>
          </div>
          <div className="hireme-telegram">
            <PhoneIcon />
            <p>Phone: 9403053454</p>
          </div>
          <div className="hireme-email">
            <EmailIcon />
            <p>Email: @noobmaster69</p>
          </div>
          <ContactIcon contact />
        </div>
      </div>
    </>
  );
}

export default HireMe;
