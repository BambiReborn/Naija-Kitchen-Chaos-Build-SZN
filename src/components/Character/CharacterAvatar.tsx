import "../../styles/Character/CharacterAvatar.css";
import type { Character } from "../../data/characters";

interface CharacterAvatarProps {
  character: Character;
  onNext: () => void;
  onPrevious: () => void;
}

export default function CharacterAvatar({
  character,
  onNext,
  onPrevious,
}: CharacterAvatarProps) {
  return (
    <section className="avatar-wrapper">

      {/* Previous Character */}
      <button
        type="button"
        className="avatar-arrow left-arrow"
        onClick={onPrevious}
        aria-label="Previous Character"
      >
        <i className="fa-solid fa-angles-left"></i>
      </button>

      {/* Character */}
      <div className="avatar-container">
        <img
          src={character.image}
          alt={character.name}
          className="avatar-image"
        />
      </div>

      {/* Next Character */}
      <button
        type="button"
        className="avatar-arrow right-arrow"
        onClick={onNext}
        aria-label="Next Character"
      >
        <i className="fa-solid fa-angles-right"></i>
      </button>

    </section>
  );
}