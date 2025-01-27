//Import components
import Button from "../button/Button";

export default function AccountSection({ title, amount, description }) {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <Button
          type="button"
          variant="transaction"
          textContent="View transactions"
        />
      </div>
    </section>
  );
}
