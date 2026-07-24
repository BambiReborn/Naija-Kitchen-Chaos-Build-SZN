// src/data/characters.ts

export interface Character {

    id:number;

    name:string;

    subtitle:string;

    attire:string;

    image:string;

    level:string;

    description:string;

    stats:{

        speed:number;

        cooking:number;

        knife:number;

        stamina:number;

    }

}

// Import Character Images
import MamaNgozi from "../assets/characters/mama-ngozi.png";
import ChefTunde from "../assets/characters/chef-tunde.png";
import ChefChinedu from "../assets/characters/chef-chinedu.png";
import MamaNkechi from "../assets/characters/mama-nkechi.png";

export const characters: Character[] = [
  {
    id: 1,
    name: "Mama Ngozi",
    subtitle:"Ise Agu",
    attire:"Attire for the chief",

    image:MamaNgozi,

    level:"LEVEL 1 CHEF",
    description:"Mama Ngozi is the backbone of the kitchen. She keeps ingredients stocked, stations tidy, and every order flowing ...",

    stats: {
      speed: 20,
      cooking: 20,
      knife: 20,
      stamina: 35,
    },

  },

  {
    id: 2,
    name: "Chef Tunde",
    subtitle:"Ise Agu",
    attire:"Attire for the chief",

    image:ChefTunde,

    level:"LEVEL 1 CHEF",
    description:"Chinedu is the youngest chef on the team, known for his lightning-fast reflexes and unmatched energy. Whether it's...",

    stats: {
      speed: 35,
      cooking: 20,
      knife: 20,
      stamina: 20,
    },

  },

  {
    id: 3,
    name: "Chef Chinedu",
    subtitle:"Ise Agu",
    attire:"Attire for the chief",

    image:ChefChinedu,

    level:"LEVEL 1 CHEF",
    description:"Chinedu is the youngest chef on the team, known for his lightning-fast reflexes and unmatched energy. Whether it's...",

    stats: {
      speed: 35,
      cooking: 20,
      knife: 20,
      stamina: 20,
    },
  },
  {
    id: 4,
    name: "Mama Nkechi",
    subtitle:"Ise Agu",
    attire:"Attire for the chief",

    image:MamaNkechi,

    level:"LEVEL 1 CHEF",
    description:"With over 30 years of experience in Nigerian cuisine, Mama Nkechi has perfected recipes passed down.",

    stats: {
      speed: 20,
      cooking: 35,
      knife: 20,
      stamina: 20,
    },

  },
];