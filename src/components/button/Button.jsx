//Import styles
import "./Button.css";

export default function Button({ type, variant, textContent }) {
  if (!textContent) {
    console.error("textContent props are required.");
    return null;
  }

  const getButtonClass = () => {
    switch (variant) {
      case "sign-in":
        return "sign-in";
      case "edit":
        return "edit";
      case "transaction":
        return "transaction";
      default:
        return "";
    }
  };

  return (
    <button type={type} className={`button ${getButtonClass()}`}>
      {textContent}
    </button>
  );
}
