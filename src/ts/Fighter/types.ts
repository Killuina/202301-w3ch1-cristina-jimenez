import { type CharacterStructure } from "../Character/types";

export interface FighterStructure extends CharacterStructure {
  weapon: string;
  dexterity: number;
}
