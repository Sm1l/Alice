import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import MainPage from "./pages/MainPage/MainPage";
import SpeechPage from "./pages/SpeechPage";
import ActressPage from "./pages/ActressPage/";
import Layout from "./components/Layout";

import { useScroll } from "framer-motion";

import "./app.scss";

const App = () => {
  const { scrollY } = useScroll();
  const offsetY = [0, 70];
  // const offsetY = ["0rem", "25rem"];

  //*theme
  const theme = useSelector((store) => store.theme.theme);
  const msapplication = document.querySelector('meta[name="msapplication-TileColor"]');
  const themeColor = document.querySelector('meta[name="theme-color"]');
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("LiasTheme", JSON.stringify(theme));
    if (theme === "light") {
      msapplication.setAttribute("content", "#5da9cf");
      themeColor.setAttribute("content", "#5da9cf");
    } else {
      msapplication.setAttribute("content", "#dfa96b");
      themeColor.setAttribute("content", "#dfa96b");
    }
  }, [theme]);

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
