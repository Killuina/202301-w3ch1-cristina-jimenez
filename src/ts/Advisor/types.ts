import type Character from "../Character/Character";
import { type CharacterStructure } from "../Character/types";

export interface AdvisorStructre extends CharacterStructure {
  advises: Character;
}
