import "../../styles/Character/CurrencyBar.css";

import gold from "..//../assets/icons/gold.png";
import blue from "..//../assets/icons/blue.png";
import purple from "..//../assets/icons/purple.png";
import energy from "..//../assets/icons/energy.png";

const currencies = [
  { icon: gold, alt: "Gold" },
  { icon: blue, alt: "Blue Diamond" },
  { icon: purple, alt: "Purple Diamond" },
  { icon: energy, alt: "Energy" }
];

export default function CurrencyBar() {
  return (
    <div className="currency-bar">
      {currencies.map((item, index) => (
        <div className="currency-box" key={index}>
          {/* Absolutely positioned icon */}
          <img 
            className="currency-icon" 
            src={item.icon} 
            alt={item.alt} 
          />
          
          {/* Middle text area */}
          <span className="currency-amount">1560</span>
          
          {/* FontAwesome plus icon container */}
          <div className="add-icon-container">
            <i className="fa-solid fa-plus add-icon"></i>
          </div>
        </div>
      ))}
    </div>
  );
}
