import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";

const Layout = ({ offsetY, scrollY }) => {
  return (
    <>
      <Header offsetY={offsetY} scrollY={scrollY} />
      <Outlet />
      <Footer />
    </>
  );
};

export { Layout };
