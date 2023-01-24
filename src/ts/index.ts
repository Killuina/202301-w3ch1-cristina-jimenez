import Advisor from "./Advisor/Advisor";
import CardComponent from "./CardComponent/CardComponent";
import { type CharacterDataStructure } from "./Character/types";
import { characters } from "./characters/characters";
import Component from "./Component/Component";
import Fighter from "./Fighter/Fighter";
import King from "./King/King";
import Squire from "./Squire/Squire";

import bronnImage from "../img/bronn.jpg";
import daenerysImage from "../img/daenerys.jpg";
import jaimeImage from "../img/jaime.jpg";
import joffreyImage from "../img/joffrey.jpg";
import tyrionImage from "../img/tyrion.jpg";

const joffreyData: CharacterDataStructure = {
  name: "Joffrey",
  family: "Baratheon",
  age: 16,
  imageSource: String(joffreyImage),
};

const jaimeData: CharacterDataStructure = {
  name: "Jaime",
  family: "Lannister",
  age: 45,
  imageSource: String(jaimeImage),
};

const daeneryseData: CharacterDataStructure = {
  name: "Daenerys",
  family: "Targaryen",
  age: 30,
  imageSource: String(daenerysImage),
};

const tyrionData: CharacterDataStructure = {
  name: "Tyrion",
  family: "Lannister",
  age: 40,
  imageSource: String(tyrionImage),
};

const bronnData: CharacterDataStructure = {
  name: "Bronn",
  family: "Blackwater",
  age: 54,
  imageSource: String(bronnImage),
};

export const joffrey: King = new King(joffreyData, 2);
export const jaime = new Fighter(jaimeData, "sword", 7);
export const daenerys = new Fighter(daeneryseData, "Dragons", 10);
export const tyrion = new Advisor(tyrionData, daenerys);
export const bronn = new Squire(bronnData, 0, jaime);

const appContainer = document.querySelector(".app-container");

const characterList = new Component(
  appContainer!,
  "ul",
  "character-list row list-unstyled"
);
const characterCol = new Component(
  characterList.element,
  "li",
  "character col"
);

const joffreyCard = new CardComponent(characterCol.element, joffrey);

console.log(joffrey);
