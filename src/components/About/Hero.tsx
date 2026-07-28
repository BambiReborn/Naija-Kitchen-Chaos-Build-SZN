import HeroImage from "../../assets/about/HeroImage.png";

export default function Hero() {
  return (
    <section className="about-hero">
      <div className="hero-container">

        {/* Hero Heading */}
        <div className="hero-text">
          <h1 className="hero-title">
            MADE WITH PASSION.
            <br />
            COOKED WITH{" "}
            <span className="hero-highlight">
              CULTURE.
              <span className="hero-highlight-line"></span>
            </span>
          </h1>
        </div>

        {/* Hero Image */}
        <div className="hero-image">
          <img
            src={HeroImage}
            alt="Naija Kitchen Chaos Characters"
          />
        </div>

      </div>

      {/* Gold Divider */}
      <div className="hero-divider"></div>
    </section>
  );
}