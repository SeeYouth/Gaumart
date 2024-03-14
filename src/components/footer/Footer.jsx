import React from "react";

import Year from "../year/Year";

const Footer = () => {
  return (
    <footer>
      <h2>
        - <span>gaumart</span> Traiteur Paris -
      </h2>
      <p>
        <a className="link" href="">
          Mentions légales
        </a>
        | Gaumart project <Year />
        <span className="accessibility"> | Accessibilité non conforme</span>
      </p>
    </footer>
  );
};

export default Footer;
