// Import styles
import "./FeatureCard.css";

// Create Card component
export default function FeatureCard({ iconSrc, title, description }) {
  return (
    <div className="feature-item">
      <img src={iconSrc} alt={`${title} Icon`} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{description}</p>
    </div>
  );
}
