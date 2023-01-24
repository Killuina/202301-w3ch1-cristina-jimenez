import { type CharacterDataStructure, type CharacterStructure } from "./types";

class Character implements CharacterStructure {
  public isAlive = true;
  public series = "Game of Thrones";

  constructor(public characterData: CharacterDataStructure) {}

  communicate(): string {
    return `${this.characterData.name} says: `;
  }

  die(): void {
    this.isAlive = false;
  }
}

export { Character, type CharacterDataStructure, type CharacterStructure };
