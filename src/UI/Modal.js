import React from "react";

import { Link } from "react-router-dom";

import "../Style/modal.css";

const Modal = () => {
  return (
    <React.Fragment>
      <div className="modal">
        <div className="modal__content flex flex-fd-c flex-jc-sp flex-ai-c">
          <div className="modal__top flex flex-fd-c flex-ai-c">
            <Link to="/">HOME</Link>
            <Link to="/">PRODUCT</Link>
            <Link to="/">BLOG</Link>
            <Link to="/">ABOUT US</Link>
          </div>
          <div className="modal__bottom flex flex-fd-c flex-ai-c">
            <Link to="/">SIGN IN</Link>
            <Link to="/" className="modal__button flex flex-jc-c flex-ai-c">
              SIGN UP
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Modal;
