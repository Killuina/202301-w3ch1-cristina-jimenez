import { type CharacterStructure } from "../Character/types";
import type Fighter from "../Fighter/Fighter";

export interface SquireStructure extends CharacterStructure {
  serves: Fighter;
  kissAssLevel: number;
}
