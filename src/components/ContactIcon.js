import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook/";
import InstagramIcon from "@material-ui/icons/Instagram";
import TelegramIcon from "@material-ui/icons/Telegram";

function ContactIcon({ footer, contact }) {
  return (
    <div className="contact-icons">
      <FacebookIcon
        className={(footer && "footer-icon") || (contact && "contact-icon")}
      />
      <InstagramIcon
        className={(footer && "footer-icon") || (contact && "contact-icon")}
      />
      <TelegramIcon
        className={(footer && "footer-icon") || (contact && "contact-icon")}
      />
    </div>
  );
}

export default ContactIcon;
