import React from "react";

import StudyImg from "../Assets/study.jpg";
import UrbanImg from "../Assets/urban.jpg";
import FarmingImg from "../Assets/farming.jpg";

import { Link } from "react-router-dom";

import "../Style/sectionone.css";

const SectionOne = () => {
  return (
    <React.Fragment>
      <div className="sectionone flex flex-jc-c flex-ai-c">
        <div className="sectionone__left flex flex-jc-c">
          <div className="sectionone__left__content flex flex-fd-c flex-jc-c">
            <img src={StudyImg} alt="study" />
            <img src={UrbanImg} alt="urban" />
            <img src={FarmingImg} alt="farming" />
          </div>
        </div>
        <div className="sectionone__right flex flex-fd-c flex-jc-c">
          <h1>We are ARKANDINA</h1>
          <p>
            Our goal is to simplify Internet of Things and solve big problems
            using technology
          </p>
          <Link to="/" className="flex flex-jc-c flex-ai-c">
            READ MORE
          </Link>
        </div>
      </div>
      <div className="breakpoint flex flex-jc-c flex-ai-c">
        <span></span>
      </div>
    </React.Fragment>
  );
};

export default SectionOne;
