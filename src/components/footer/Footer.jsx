// Import styles
import "./Footer.css";

// Create Footer component
export default function Footer({ textContent }) {
  return (
    <footer className="footer">
      <p className="footer-text">{textContent}</p>
    </footer>
  );
}
