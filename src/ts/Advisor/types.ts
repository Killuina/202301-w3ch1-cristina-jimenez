import {
  type Character,
  type CharacterStructure,
} from "../Character/Character";

export interface AdvisorStructre extends CharacterStructure {
  advises: Character;
}
