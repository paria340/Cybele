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
            {/* <li>
              <a href="/">Menu</a>
            </li> */}
            <li>
              <a href="/dashboard">Dashboard</a>
            </li>
          </ul>
        </nav>
      </ul>
    </div>
  );
};

export default MainNav;
