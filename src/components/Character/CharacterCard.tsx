import "../../styles/Character/CharacterCard.css";
import type { Character } from "../../data/characters.ts";

interface CharacterCardProps {
  character: Character;
  active: boolean;
  onClick: () => void;
}

export default function CharacterCard({
  character,
  active,
  onClick,
}: CharacterCardProps) {
  return (
    <div
      className={`character-card ${active ? "active" : ""}`}
      onClick={onClick}
    >
      <h2>{character.name}</h2>

      <div className="divider"></div>

      <h3>{character.subtitle}</h3>

      <p>{character.attire}</p>
    </div>
  );
}