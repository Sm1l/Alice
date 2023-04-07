import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import SpeechPage from "./pages/SpeechPage";
import ActressPage from "./pages/ActressPage/";
import Layout from "./components/Layout";

import { useScroll } from "framer-motion";
// import Appcontainer from "./components/Appcontainer";

import "./app.scss";

const App = () => {
  const { scrollY } = useScroll();
  const offsetY = [0, 500];

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout offsetY={offsetY} scrollY={scrollY} />}>
          <Route path="/" element={<SpeechPage />} />
          <Route path="/actress" element={<ActressPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
