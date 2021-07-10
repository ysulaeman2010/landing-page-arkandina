import React from "react";

import Header from "../Home/Header";
import SectionOne from "../Home/SectionOne";
import SectionThree from "../Home/SectionThree";
import SectionTwo from "../Home/SectionTwo";

import "../Style/home.css";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </React.Fragment>
  );
};

export default Home;
