export interface CharacterDataStructure {
  name: string;
  family: string;
  age: number;
  imageSource: string;
}

export interface CharacterStructure {
  characterData: CharacterDataStructure;
  isAlive: boolean;
  series: string;
  communicate: () => string;
  die: () => void;
}
