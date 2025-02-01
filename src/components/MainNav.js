import React from "react";
import {useDispatch, useSelector} from 'react-redux';

const MainNav = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  console.log(isLoggedIn, 'isLoggedIn');
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
              <a href="/logout">Logout</a>
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
