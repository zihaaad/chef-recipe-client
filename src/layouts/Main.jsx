import React from "react";
import Header from "../pages/shared/Header";
import {Outlet} from "react-router-dom";
import Footer from "../pages/shared/Footer";
import NavigationBar from "../pages/Shared/NavigationBar";

const Main = () => {
  return (
    <div>
      <NavigationBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;