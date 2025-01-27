//Import components
import SignInForm from "../../components/singInForm/SingInForm";

//Import styles
import "./SingIn.css";

export default function SignIn() {
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <SignInForm />
        <a href="./user" class="sign-in-button">
          Sign In
        </a>
      </section>
    </main>
  );
}
