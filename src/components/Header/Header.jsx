import "./Header.css";
import 'animate.css';

import React, { useEffect, useState, useContext } from "react";
import { Container } from "react-bootstrap";

export default function Header(location) {
  const [clicked, setClicked] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    console.log(location.location)
  });

  function handleClick(e) {
    setClicked(!clicked);
  }

  function handleScroll() {
    window.pageYOffset >= 200 ? setScrolled(true) : setScrolled(false);
  }

  return (
    <nav>
      <div
        className={location.location === '/' && !scrolled ? "nav-bg nav-top" : "nav-bg nav-scrolled"}
      ></div>
      <Container className="nav-cont">
        <div className="nav-brand">
          <i className="nav-brand-icon"></i>
          <a href="/" className="negritas nav-brand-text">
            YO-TU Counseling
          </a>
        </div>
        <div className="nav-items-cont">
          <ul className={clicked ? "nav-items active" : "nav-items"}>
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/counseling">Counseling</a>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
            </li>
          </ul>
        </div>
        <div id="mobile">
          <i
            id="bar"
            className={clicked ? "fas fa-times" : "fas fa-bars"}
            onClick={handleClick}
          ></i>
        </div>
      </Container>
    </nav>
  );
}
