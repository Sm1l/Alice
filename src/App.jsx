import React from "react";
import { Route, Routes } from "react-router-dom";

import MainPage from "./pages/MainPage/MainPage";
import SpeechPage from "./pages/SpeechPage";
import ActressPage from "./pages/ActressPage/";
import Layout from "./components/Layout";

import { useScroll } from "framer-motion";

import "./app.scss";

const App = () => {
  const { scrollY } = useScroll();
  const offsetY = [0, 150];
  // const offsetY = ["0rem", "25rem"];

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<MainPage offsetY={offsetY} scrollY={scrollY} />} />
        <Route path="/" element={<Layout offsetY={offsetY} scrollY={scrollY} />}>
          <Route path="/speech" element={<SpeechPage offsetY={offsetY} scrollY={scrollY} />} />
          <Route path="/actress" element={<ActressPage offsetY={offsetY} scrollY={scrollY} />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
