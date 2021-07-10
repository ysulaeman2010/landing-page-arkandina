import React, { useState } from "react";

import Logo from "../Assets/logo.svg";
import Modal from "../UI/Modal";

import { Link } from "react-router-dom";

import "../Style/navigation.css";

const Navigation = () => {
  const [showModal, setShowModal] = useState(false);

  const modalHandler = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <React.Fragment>
      <header className="header">
        <nav className="flex flex-jc-sp flex-ai-c">
          <Link to="/" className="header__logo ">
            <img src={Logo} alt="Arkandina" />
          </Link>

          <div
            className={
              !showModal
                ? "header__menu flex flex-jc-c flex-ai-c flex-fd-c hide-desktop"
                : "header__menu header__menu__mobile flex flex-jc-c flex-ai-c flex-fd-c hide-desktop"
            }
            onClick={modalHandler}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="header__links flex flex-ai-c hide-mobile hide-tablet">
            <Link to="/">HOME</Link>
            <Link to="/">PRODUCT</Link>
            <Link to="/">BLOG</Link>
            <Link to="/">ABOUT US</Link>
          </div>

          <div className="header__right flex flex-ai-c hide-mobile hide-tablet">
            <Link to="/">SIGN IN</Link>
            <Link to="/" className="header__button flex flex-jc-c flex-ai-c">
              SIGN UP
            </Link>
          </div>
        </nav>
      </header>
      {showModal && <Modal />}
    </React.Fragment>
  );
};

export default Navigation;
