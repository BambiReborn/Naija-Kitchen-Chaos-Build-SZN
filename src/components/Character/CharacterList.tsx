import CharacterCard from "./CharacterCard";
import type { Character } from "../../data/characters";
import "..//../styles/Character/CharacterList.css";
interface Props{

characters:Character[];

currentIndex:number;

onSelect:(index:number)=>void;

}

export default function CharacterList({

characters,

currentIndex,

onSelect

}:Props){

return(

<div className="character-list">

{

characters.map((character,index)=>(

<CharacterCard

key={character.id}

character={character}

active={currentIndex===index}

onClick={()=>onSelect(index)}

/>

))

}

</div>

);

}