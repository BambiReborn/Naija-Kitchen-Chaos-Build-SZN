import ValueCard from "./ValueCard";

import teamwork from "../../assets/about/TeamWork.png";
import community from "../../assets/about/Community.png";
import culture from "../../assets/about/Culture.png";
import excitement from "../../assets/about/Excitement.png";

import chefImage from "../../assets/about/Values-Chef.png";

export default function Values() {
  return (
    <section className="values-section">

      {/* Section heading */}
      <div className="values-header">
        <h2 className="values-title">OUR VALUES</h2>
      </div>

      {/* Top row */}
      <div className="values-top-row">

        <ValueCard
          image={teamwork}
          title="TEAMWORK"
          description="Work together, communicate and win as a team."
        />

        <ValueCard
          image={community}
          title="COMMUNITY"
          description="Building a global community of food and game lovers."
        />

      </div>

      {/* Bottom row */}
      <div className="values-bottom-row">

        <ValueCard
          image={culture}
          title="CULTURE"
          description="Authentic Nigerian dishes made with love."
        />

        <div className="values-chef">
          <img src={chefImage} alt="Chef" />
        </div>

        <ValueCard
          image={excitement}
          title="EXCITEMENT"
          description="Fast paced fun that keeps you on your toes."
        />

      </div>

    </section>
  );
}