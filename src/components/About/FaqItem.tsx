import { useState } from "react";

interface FaqItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
  highlighted?: boolean;
}

export default function FaqItem({
  question,
  answer,
  defaultOpen = false,
  highlighted = false,
}: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
  <article className="faq-item">

    <div className="faq-question">

      <div className="faq-question-left">
        <i
          className={`fa-solid fa-circle-question faq-icon ${
            highlighted ? "highlighted" : ""
          }`}
        ></i>

        <span className="faq-text">
          {question}
        </span>
      </div>

      <div className="faq-answer">
        {isOpen && <p>{answer}</p>}
      </div>

      <button
        className="faq-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i
          className={`fa-solid ${
            isOpen ? "fa-chevron-up" : "fa-chevron-down"
          } faq-arrow`}
        ></i>
      </button>

    </div>

  </article>
);
}