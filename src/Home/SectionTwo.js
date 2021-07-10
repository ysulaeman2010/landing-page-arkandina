import React from "react";

import ImageCircle from "../UI/ImageCircle";

import PuzzleImg from "../Assets/puzzle.jpg";
import MobilePhoneImg from "../Assets/mobile_phone.jpg";
import SystemImage from "../Assets/system.jpg";

import "../Style/sectiontwo.css";

const SectionTwo = () => {
  return (
    <React.Fragment>
      <div className="sectiontwo flex flex-fd-c flex-jc-c flex-ai-c">
        <div className="sectiontwo__content flex flex-fd-c flex-jc-c flex-ai-c">
          <h1>Simplifies Like Playing a Game</h1>
          <p>
            We provide Internet of Things solution as simple as you playing a
            game
          </p>
          <div className="sectiontwo__images flex flex-fd-r flex-jc-c">
            <ImageCircle
              imgUrl={PuzzleImg}
              title="Plug & Play"
              content="Imagine technology based on Internet of Things can be used as easy as putting together like puzzle game"
            />
            <ImageCircle
              imgUrl={MobilePhoneImg}
              title="Subscription Plan"
              content="No need to spend big cost and annoying contracts to use better technology, subscribe today and cancel anytime"
            />
            <ImageCircle
              imgUrl={SystemImage}
              title="Modular System"
              content="With our modular system, user no need to know basic knownledge of electronic and programming"
            />
          </div>
        </div>
      </div>
      <div className="breakpoint flex flex-jc-c flex-ai-c">
        <span></span>
      </div>
    </React.Fragment>
  );
};

export default SectionTwo;
