import type { Character } from "../../data/characters";
import ProgressBar from "../Character/ProgressBar";
import "../../styles/Character/CharacterStats.css";

interface Props{

character:Character;

}

export default function CharacterStats({

character

}:Props){

return(

<div className="stats-panel">

  <h1>

    {character.name}

  </h1>

  <ProgressBar

    label="Speed"

    value={character.stats.speed}

  />

  <ProgressBar

    label="Cooking skill"

    value={character.stats.cooking}

  />

  <ProgressBar

    label="Knife skill"

    value={character.stats.knife}

  />

  <ProgressBar

    label="Stamina"

    value={character.stats.stamina}

  />

  <div className="upgrade-row">
    <button className="upgrade-btn">
        UPGRADE
    </button>
</div>

</div>

);

}