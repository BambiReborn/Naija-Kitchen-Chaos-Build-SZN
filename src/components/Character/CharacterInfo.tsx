// src/components/CharacterInfo.tsx


import "../../styles/Character/CharacterInfo.css";
import type { Character } from "../../data/characters";

interface CharacterInfoProps {
  character: Character;
}

export default function CharacterInfo({
  character,
}: CharacterInfoProps) {
  return (
    <div className="character-info-panel">

      <div className="level-card">

        {character.level}

      </div>

      <p className="character-description">

        {character.description}

      </p>

    </div>
  );
}