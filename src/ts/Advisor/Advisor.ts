import {
  Character,
  type CharacterDataStructure,
  type CharacterStructure,
} from "../Character/Character";

interface AdvisorStructre extends CharacterStructure {
  advises: Character;
}
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
