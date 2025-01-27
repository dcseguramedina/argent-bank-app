// Import styles
import "./Banner.css";

// Create Banner component
export default function Banner({ image, alt, ariaLabel, description }) {
  if (!image || !alt || !ariaLabel || !description) {
    console.error(
      "Banner component: Image, alt, ariaLabel and description props are required."
    );
    return null;
  }

  return (
    <section className="banner" aria-label={ariaLabel}>
      <img className="banner-image" src={image} alt={alt} />
      <div className="banner-content">
        <h2 className="sr-only">{description.promoted}</h2>
        <p className="subtitle">{description.fees}</p>
        <p className="subtitle">{description.deposit}</p>
        <p className="subtitle">{description.interest}</p>
        <p className="text">{description.savings}</p>
      </div>
    </section>
  );
}
