import React from "react";
import { DiCode } from "react-icons/di";
import { Link } from "react-router-dom";
import '../styles/header.css';

function Header() {
  return (
    <header>
      <div>
        <h1>
          <DiCode />
        </h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="portifolio">
              Portifólio
            </Link>
          </li>
          <li>
            <Link to="about">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
