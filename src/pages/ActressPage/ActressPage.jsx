import React, { useEffect } from "react";
import ActressWelcome from "../../components/ActressWelcome";
import { motion, useTransform } from "framer-motion";

import "./actresspage.scss";

const ActressPage = ({ offsetY, scrollY }) => {
  const marginTop = useTransform(scrollY, offsetY, offsetY);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <motion.main className="actresspage" style={{ marginTop: marginTop }}>
      <ActressWelcome />
    </motion.main>
  );
};

export default ActressPage;
