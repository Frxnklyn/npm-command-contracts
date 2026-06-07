import type { CommandInterface } from "./CommandInterface.js";

/**
 * Beschreibt eine anzeigbare und JSON-kompatible Command-Empfehlung.
 *
 * @author Frxnklyn
 */
export interface CommandSuggestionInterface {
  id: string;
  label: string;
  description?: string;

  command: CommandInterface;

  safeToRunAutomatically: boolean;
}
