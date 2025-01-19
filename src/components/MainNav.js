import React from "react";

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
            <li>
              <a href="/socialize">Socialize</a>
            </li>
          </ul>
        </nav>
      </ul>
    </div>
  );
};

export default MainNav;
