import Hero from "../components/About/Hero";
import AboutIntro from "../components/About/AboutIntro";
import Values from "../components/About/Values";
import Story from "../components/About/Story";
import FAQ from "../components/About/Faq";
import CTA from "../components/About/Cta";
// import Footer from "../components/About/Footer";

import "../styles/About.css";

export default function About() {
  return (
    <main className="about-page">

      <Hero />

      <AboutIntro />

      <Values />

      <Story />

      <FAQ />

      <CTA />

      {/* <Footer /> */}

    </main>
  );
}