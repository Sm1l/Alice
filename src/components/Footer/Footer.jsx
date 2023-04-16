import React from "react";
import Contacts from "../ContactsSocial/ContactsSocial";

import "./footer.scss";
import ContactsAdress from "../ContactsAdress/ContactsAdress";
import ContactsSocial from "../ContactsSocial/ContactsSocial";

const Footer = () => {
  return (
    <footer className="footer ui-block">
      <div className="footer__top">
        {/* <div className="footer__contacts"></div>
        <div className="footer__social"></div> */}
        <ContactsAdress />
        <ContactsSocial />
      </div>
      <div className="footer__bottom">
        <p className="footer__copy">Copyright 2023 © Копирование информации запрещено законом</p>
      </div>
    </footer>
  );
};

export default Footer;
