// import { useState } from 'react'
import React from "react";
// import { Link } from "react-router-dom";
// import { BsSearch } from "react-icons/bs"

const MainNav = () => {
  return (
    <div>
      <ul className="wrapper">
        <nav>
          <ul className="left">
            <li>
              <a href="/">Dashboard</a>
            </li>
            <li>
              <a href="/signUp">Sign up</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </nav>
      </ul>
    </div>
  );
};

export default MainNav;
