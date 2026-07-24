import "../styles/Characters.css";
import logo from '../assets/shared/Logo.svg'

import CurrencyBar from "../components/Character/CurrencyBar";
import CharacterList from "../components/Character/CharacterList";
import CharacterAvatar from "../components/Character/CharacterAvatar";
import CharacterInfo from "../components/Character/CharacterInfo";
import CharacterStats from "../components/Character/CharacterStats";
import GoldFrame from "../components/Character/GoldFrame";

import { useState } from "react";
import { characters } from "../data/characters";

export default function Characters() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentCharacter = characters[currentIndex];

  const nextCharacter = () => {
    setCurrentIndex((prev) =>
      prev === characters.length - 1 ? 0 : prev + 1
    );
  };

  const previousCharacter = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? characters.length - 1 : prev - 1
    );
  };

  return (
    <main className="characters-page">

      {/* ==== HEADER ====== */}

      <header className="characters-header">

        <div className="game-logo">
          <img src={logo} alt="Naija Kitchen Chaos | NKC" />
        </div>

        <CurrencyBar />

      </header>

      {/* ====== CONTENT ===== */}

      <section className="characters-content">

        <CharacterList
          characters={characters}
          currentIndex={currentIndex}
          onSelect={setCurrentIndex}
        />

        <CharacterAvatar
          character={currentCharacter}
          onNext={nextCharacter}
          onPrevious={previousCharacter}
        />

      </section>

      {/* ===== BOTTOM ====== */}

      <section className="characters-bottom">

        {/* Gold decorative frame */}
          <div className="bottom-frame">
            <GoldFrame />

            <CharacterInfo character={currentCharacter} />

            <CharacterStats character={currentCharacter} />

          </div>

        </section>

    </main>
  );
}