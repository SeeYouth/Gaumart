import React from "react";

import { Link } from "react-router-dom";

import Logo from "../logo/Logo";

const NavBar = () => {
  return (
    <nav className="navBar">
      <Link to="/">
        <Logo />
      </Link>
      <ul>
        <li>
          <a className="link" href="">
            Petit déjeuner
          </a>
        </li>
        <li>
          <a className="link" href="">
            Plateau repas
          </a>
        </li>
        <li>
          <a className="link" href="">
            Buffets
          </a>
        </li>
        <li>
          <a className="link" href="">
            Cocktails
          </a>
        </li>
        <li>
          <a className="link" href="">
            Menus
          </a>
        </li>
        <li>
          <Link className="link" to="/contact">
            Contacter
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
