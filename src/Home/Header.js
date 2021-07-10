import React from "react";

import { Link } from "react-router-dom";
import ArduinoImg from "../Assets/arduino_png.png";
import RaspberryImg from "../Assets/raspberry_pi.png";

import "../Style/header.css";

const Header = () => {
  return (
    <React.Fragment>
      <div className="jumbotron flex flex-jc-c flex-ai-c">
        <div className="jumbotron__content flex flex-jc-c flex-ai-c">
          <div className="jumbotron__left flex flex-fd-c flex-jc-c">
            <h1>Simplifying Internet of Things</h1>
            <p>
              ARKANDINA is located in Indonesia. Focusing on simplifying
              Internet of Things to make better products
            </p>
            <Link to="/" className="flex flex-jc-c flex-ai-c">
              LEARN MORE
            </Link>
          </div>
          <div className="jumbotron__right flex flex-fd-c flex-jc-c hide-mobile hide-tablet">
            <div className="jumbotron__wrapper flex flex-fd-c flex-jc-c flex-ai-c">
              <div className="jumbotron__wrapper__box"></div>
              <img
                src={ArduinoImg}
                alt="arduino"
                className="jumbotron__wrapper__imgone"
              />
              <img
                src={RaspberryImg}
                alt="raspberry"
                className="jumbotron__wrapper__imgtwo"
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
