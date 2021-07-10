import React, { useState } from "react";

import "../Style/sectionthree.css";

const SectionThree = () => {
  const [email, setEmail] = useState(undefined);
  const [error, setError] = useState(false);

  const emailHandler = (e) => {
    e.preventDefault();

    if (email === undefined) {
      setError((prev) => true);
    } else {
      setError((prev) => false);
      console.log(email);
    }
  };

  return (
    <React.Fragment>
      <div className="sectionthree flex flex-fd-c flex-jc-c flex-ai-c">
        <h1>Subscribe Newsletter</h1>
        <p>Don’t miss a news from us</p>
        <div className="sectionthree__form flex flex-jc-c flex-ai-c">
          <input
            type="text"
            name="email"
            placeholder="Enter your email address"
            onChange={(e) => setEmail((prev) => e.target.value)}
          />
          <button onClick={(e) => emailHandler(e)}>Subscribe</button>
        </div>
        {error && (
          <p className="sectionthree__warning">Error! Enter your email!</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default SectionThree;
