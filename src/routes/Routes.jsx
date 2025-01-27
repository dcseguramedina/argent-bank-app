// Import internal libraries
import { Routes, Route } from "react-router";

// Import App pages
import Home from "../pages/home/Home";
import SingIn from "../pages/singIn/SingIn";
import User from "../pages/user/User";

// Define routing logic
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sing-in" element={<SingIn />} />
      <Route path="/user" element={<User />} />
    </Routes>
  );
}
