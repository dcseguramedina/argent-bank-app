//Import styles
import "./InputField.css";

export default function InputField({ label, id, type }) {
  if (!label || !id || !type) {
    console.error("label, id and type props are required.");
    return null;
  }
  return (
    <div className="input-wrapper">
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} />
    </div>
  );
}
