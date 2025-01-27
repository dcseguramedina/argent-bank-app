//Import styles
import "./RememberMe.css";

export default function RememberMe({ textContent }) {
  if (!textContent) {
    console.error("textContent props are required.");
    return null;
  }
  return (
    <div className="input-remember">
      <input type="checkbox" id="remember-me" />
      <label htmlFor="remember-me">{textContent}</label>
    </div>
  );
}
