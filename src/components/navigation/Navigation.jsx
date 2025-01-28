import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../../store/actions/authActions";

import "./Navigation.css";

export default function Navigation({ SignIn, SignOut }) {
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogin = () => {
    const userData = { username: "Tony", email: "tony@example.com" };
    dispatch(loginUser(userData));
  };

  return (
    <nav className="main-nav">
      {!isLoggedIn ? (
        <NavLink className="main-nav-item" to="/sign-in">
          <i className="fa fa-user-circle"></i>
          {SignIn}
        </NavLink>
      ) : (
        <>
          <NavLink className="main-nav-item" to="/user">
            <i className="fa fa-user-circle"></i>
            {user.username}
          </NavLink>
          <NavLink className="main-nav-item" to="/home" onClick={handleLogin}>
            <i className="fa fa-sign-out"></i>
            {SignOut}
          </NavLink>
        </>
      )}
    </nav>
  );
}
