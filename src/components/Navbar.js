import React from "react";
import { Navbar } from "react-bootstrap";

import navbar1 from "../assets/navbar/navbar1.jpeg"

const Navigation = () => {

    return (
      <nav className="navigation">
        <Navbar.Brand href="#home">
            <img
              src={navbar1}
              width="130"
              height="50"
              className="logo"
              alt="Logo"
            />
          </Navbar.Brand>
        
        <div
          className="navigation-menu">
          <ul>
            <li>
              <a href="/home">WhatsOn</a>
            </li>
            <li>
              <a href="Program.js">Program</a>
            </li>
            <li>
              <a href="Kampanye.js">Kampanye</a>
            </li>
            <li>
              <a href="Artikel.js">Artikel</a>
            </li>
            <li>
              <a href="/home">Akun</a>
            </li>
            <li>
              <a href="/home">Lainnya</a>
            </li>
            <li>
              <a href="/home">Sign In</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

  export default Navigation;