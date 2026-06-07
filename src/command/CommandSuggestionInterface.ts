import type { CommandInterface } from "./CommandInterface.js";

export interface CommandSuggestionInterface {
  id: string;
  label: string;
  description?: string;

  command: CommandInterface;

  safeToRunAutomatically: boolean;
}
