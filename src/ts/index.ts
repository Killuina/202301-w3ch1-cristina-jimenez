import Advisor from "./Advisor/Advisor";
import CardComponent from "./CardComponent/CardComponent";
import { type CharacterDataStructure } from "./Character/types";
import { characters } from "./characters/characters";
import Component from "./Component/Component";
import Fighter from "./Fighter/Fighter";
import King from "./King/King";
import Squire from "./Squire/Squire";

import CardBody from "./CardBody/CardBody";

const joffreyData: CharacterDataStructure = {
  name: "Joffrey",
  family: "Baratheon",
  age: 16,
  imageSource: "../img/joffrey.jpg",
};

const jaimeData: CharacterDataStructure = {
  name: "Jaime",
  family: "Lannister",
  age: 45,
  imageSource: "../img/jaime.jpg",
};

const daeneryseData: CharacterDataStructure = {
  name: "Daenerys",
  family: "Targaryen",
  age: 30,
  imageSource: "../img/daenerys.jpg",
};

const tyrionData: CharacterDataStructure = {
  name: "Tyrion",
  family: "Lannister",
  age: 40,
  imageSource: "../img/tyrion.jpg",
};

const bronnData: CharacterDataStructure = {
  name: "Bronn",
  family: "Blackwater",
  age: 54,
  imageSource: "../img/bronn.jpg",
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
const joffreyCardBody = new CardBody(joffreyCard.element, joffrey);
