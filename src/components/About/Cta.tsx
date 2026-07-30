import CtaImage from "../../assets/about/CTA-image.png";

export default function CTA() {
  return (
    <section className="cta">

      <div className="cta-container">

        {/* Left illustration */}
        <div className="cta-image">
          <img
            src={CtaImage}
            alt="Naija Kitchen Chaos Bowl"
          />
        </div>

        {/* CTA Content */}
        <div className="cta-content">

          <h2 className="cta-title">
              READY TO
            <br />
            <span className="cta-highlight">
              BRING THE HEAT?
            </span>
          </h2>

          <p className="cta-description">
            Jump in, cook fast and serve before it burns.
          </p>

        </div>

        {/* CTA Button */}
        <div className="cta-action">
          <button className="cta-button">
            JOIN THE KITCHEN
          </button>
        </div>

      </div>

    </section>
  );
}