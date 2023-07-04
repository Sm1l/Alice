import React from "react";
import { motion } from "framer-motion";

import "./footer.scss";
import { ContactsAdress } from "../ContactsAdress/ContactsAdress";
import { ContactsSocial } from "../ContactsSocial/ContactsSocial";

const Footer = () => {
  const textAnimation = {
    hidden: { y: 100, opacity: 0 },
    visible: (custom) => ({ y: 0, opacity: 1, transition: { duration: 0.8, delay: custom * 0.3 } }),
  };

  return (
    <motion.footer className="footer" initial="hidden" whileInView="visible" viewport={{ amount: 0.3, once: true }}>
      <motion.div className="footer__top" variants={textAnimation} custom={1}>
        <ContactsAdress />
        <ContactsSocial />
      </motion.div>
      <motion.div className="footer__bottom" variants={textAnimation} custom={2}>
        <p className="footer__copy">Copyright 2023 © Копирование информации запрещено законом</p>
      </motion.div>
    </motion.footer>
  );
};

export { Footer };
