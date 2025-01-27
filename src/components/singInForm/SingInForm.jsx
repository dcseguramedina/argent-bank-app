// Import components
import InputField from "../inputField/InputField";
import RememberMe from "../rememberMe/RememberMe";
import Button from "../button/Button";

//Import styles
import "./SingInForm.css";

function SignInForm() {
  return (
    <form>
      <InputField label="Username" id="username" type="text" />
      <InputField label="Password" id="password" type="password" />
      <RememberMe textContent="Remember me" />
      <Button type="button" variant="sing-in" textContent="Sing In"></Button>
    </form>
  );
}

export default SignInForm;
