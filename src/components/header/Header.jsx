import { useSelector } from "react-redux";

import logo from "../../assets/img/argentBankLogo.png";

//Import components
import Logo from "../logo/Logo";
import Navigation from "../navigation/Navigation";

//Import styles
import "./Header.css";

//Create Header component
export default function Header() {
  const { isLoggedIn, user } = useSelector((state) => state.auth);

  return (
    <header className="header">
      <Logo image={logo} description="Argent Bank Logo" srOnly="Argent Bank" />
      <div className="header-nav">
        <Navigation
          isLoggedIn={isLoggedIn}
          username={user ? user.username : ""}
          singIn="Sing In"
          singOut="Sing Out"
        />
      </div>
    </header>
  );
}
