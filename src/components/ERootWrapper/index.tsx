import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

const ERootWrapper: React.FC = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="mx-auto max-w-7xl px-8 sm:px-12 lg:px-14 transition ease-in-out">
        <Outlet />
      </div>
      <Footer />
    </Fragment>
  );
};

export default ERootWrapper;
