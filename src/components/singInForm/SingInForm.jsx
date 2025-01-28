import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../store/authSlice";

// Import components
import InputField from "../inputField/InputField";
import RememberMe from "../rememberMe/RememberMe";
import Button from "../button/Button";

function SignInForm() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    const userData = { username: "Tony", email: "tony@example.com" };
    dispatch(loginUser(userData));
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        label="Username"
        id="username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <InputField
        label="Password"
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <RememberMe
        textContent="Remember me"
        checked={rememberMe}
        onChange={(e) => setRememberMe(e.target.checked)}
      />

      <Button
        type="submit"
        variant="sign-in"
        textContent="Sign In"
        onClick={handleLogin}
      />
    </form>
  );
}

export default SignInForm;
