import { NavLink } from "react-router-dom";

// Import styles
import "./Logo.css";

export default function Logo({ image, description, srOnly }) {
  return (
    <NavLink className="logo" to="/">
      <img className="logo-image" src={image} alt={description} />
      <h1 className="sr-only">{srOnly}</h1>
    </NavLink>
  );
}
