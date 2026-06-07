/**
 * Beschreibt einen strukturierten ausfuehrbaren Command mit optionalen Argumenten,
 * Arbeitsverzeichnis und Umgebungsvariablen.
 *
 * @author Frxnklyn
 */
export interface CommandInterface {
  command: string;
  args?: string[];
  cwd?: string;
  env?: Record<string, string>;
}
