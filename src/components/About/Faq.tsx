import FaqItem from "./FaqItem";

const faqData = [
  {
    question: "How do I unlock new chefs?",
    answer:
      "You can unlock new chefs by completing levels, earning coins, and achieving special milestones. Some exclusive chefs are available during special events.",
  },
  {
    question: "Can I play without an internet connection?",
    answer:
      "Yes. Most game modes can be played offline. Online features like leaderboards and multiplayer require an internet connection.",
  },
  {
    question: "How do I earn more coins and rewards?",
    answer:
      "Play matches, complete daily challenges, finish missions, and participate in seasonal events to earn rewards.",
  },
  {
    question: "What makes Naija Kitchen Chaos unique?",
    answer:
      "The game combines authentic Nigerian cuisine, fast-paced teamwork, and exciting multiplayer gameplay into one fun experience.",
  },
];

export default function Faq() {
  return (
    <section className="faq">

      {/* Section heading */}
      <div className="faq-header">

        <h2 className="faq-title">
          FREQUENTLY ASKED QUESTIONS
        </h2>

        <p className="faq-subtitle">
          Everything you need to know before stepping into the kitchen.
        </p>

      </div>

      {/* FAQ Items */}
      <div className="faq-list">

        {faqData.map((item, index) => (
          <FaqItem
            key={index}
            question={item.question}
            answer={item.answer}
            defaultOpen={index === 0}
            highlighted={index === 0}
          />
        ))}

      </div>

    </section>
  );
}