import React from "react";

import "../Style/imagecircle.css";

const ImageCircle = ({ imgUrl, title, content }) => {
  return (
    <React.Fragment>
      <div className="imagecircle flex flex-fd-c flex-jc-c flex-ai-c">
        <img src={imgUrl} alt={title} />
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </React.Fragment>
  );
};

export default ImageCircle;
