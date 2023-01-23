import {
  Character,
  type CharacterStructure,
  type CharacterDataStructure,
} from "../Character/Character";
import Fighter from "../Fighter/Fighter";

interface SquireStructure extends CharacterStructure {
  serves: Fighter;
  kissAssLevel: number;
}

class Squire extends Character implements SquireStructure {
  constructor(
    characterData: CharacterDataStructure,
    public kissAssLevel: number,
    public serves: Fighter
  ) {
    super(characterData);
    this.kissAssLevel = this.kissAssLevelFilter(kissAssLevel);

    if (serves instanceof Fighter) {
      this.serves = serves;
    }
  }

  communicate(): string {
    return `${super.communicate()}I'm a loser`;
  }

  private kissAssLevelFilter(kissAssLevel: number): number {
    if (kissAssLevel < 0) {
      return 0;
    }

    if (kissAssLevel > 10) {
      return 10;
    }

    return kissAssLevel;
  }
}

export default Squire;
