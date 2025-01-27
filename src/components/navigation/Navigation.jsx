import { NavLink } from "react-router-dom";

// Import styles
import "./Navigation.css";

export default function Navigation({ isLoggedIn, signIn, singOut, username }) {
  return (
    <nav className="main-nav">
      {!isLoggedIn ? (
        <NavLink className="main-nav-item" to="/sign-in">
          <i className="fa fa-user-circle"></i>
          {signIn}
        </NavLink>
      ) : (
        <>
          <NavLink className="main-nav-item" to="/user">
            <i className="fa fa-user-circle"></i>
            {username}
          </NavLink>
          <NavLink className="main-nav-item" to="/home">
            <i className="fa fa-sign-out"></i>
            {singOut}
          </NavLink>
        </>
      )}
    </nav>
  );
}
