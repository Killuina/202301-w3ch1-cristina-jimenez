import {
  Character,
  type CharacterDataStructure,
  type CharacterStructure,
} from "../Character/Character";

interface FighterStructure extends CharacterStructure {
  weapon: string;
  dexterity: number;
}

class Fighter extends Character implements FighterStructure {
  constructor(
    characterData: CharacterDataStructure,
    public weapon: string,
    public dexterity: number
  ) {
    super(characterData);

    this.dexterity = this.filterDexterity(dexterity);
  }

  communicate(): string {
    return `${super.communicate()}First I hit and then I ask`;
  }

  private filterDexterity(dexterity: number): number {
    if (dexterity < 0) {
      return 0;
    }

    if (dexterity > 10) {
      return 10;
    }

    return dexterity;
  }
}

export default Fighter;
