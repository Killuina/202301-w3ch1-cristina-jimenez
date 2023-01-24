import { Character } from "../Character/Character";
import { type CharacterDataStructure } from "../Character/types";
import { type KingStructure } from "./types";

class King extends Character implements KingStructure {
  constructor(
    characterData: CharacterDataStructure,
    public yearsOfReign: number
  ) {
    super(characterData);
  }

  communicate(): string {
    return `${super.communicate()}Everybody will die`;
  }
}

export default King;
