//Internal libraries
import image from "../../assets/img/bank-tree.jpeg";

//Import components
import Banner from "../../components/banner/Banner";
import FeatureCard from "../../components/featureCard/FeatureCard";

//Import styles
import "./Home.css";

export default function Home() {
  const bannerDescription = {
    promoted: "Promoted Content",
    fees: "No fees.",
    deposit: "No minimum deposit.",
    interest: "High interest rates.",
    savings: "Open a savings account with Argent Bank today!",
  };

  const features = [
    {
      iconSrc: "src/assets/img/icon-chat.png",
      title: "You are our #1 priority",
      description:
        "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
    },
    {
      iconSrc: "src/assets/img/icon-money.png",
      title: "More savings means higher rates",
      description:
        "The more you save with us, the higher your interest rate will be!",
    },
    {
      iconSrc: "src/assets/img/icon-security.png",
      title: "Security you can trust",
      description:
        "We use top of the line encryption to make sure your data and money is always safe.",
    },
  ];
  return (
    <>
      <main>
        <Banner
          image={image}
          alt="Savings plant"
          ariaLabel="Banner image"
          description={bannerDescription}
        />
        <section className="features">
          <h2 className="sr-only">Features</h2>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              iconSrc={feature.iconSrc}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </section>
      </main>
    </>
  );
}
