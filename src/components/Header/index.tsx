import React from "react";
import "./header.scss";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="header">
      <ul className="header-list">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">Présentation</a>
        </li>
        <li>
          <a href="#projects">Projets</a>
        </li>
        <li>
          <a href="#experience">Parcours</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
