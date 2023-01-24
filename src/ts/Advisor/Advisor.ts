import { Character, type CharacterDataStructure } from "../Character/Character";
import { type AdvisorStructre } from "./types";

class Advisor extends Character implements AdvisorStructre {
  constructor(
    characterData: CharacterDataStructure,
    public advises: Character
  ) {
    super(characterData);
    if (advises instanceof Character) {
      this.advises = advises;
    }
  }

  communicate(): string {
    return `${super.communicate()}I have a funny feeling that I'm going to die`;
  }
}

export default Advisor;
