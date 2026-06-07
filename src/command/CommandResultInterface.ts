/**
 * Beschreibt das strukturierte Ergebnis einer Command-Ausfuehrung.
 *
 * @author Frxnklyn
 */
export interface CommandResultInterface {
  command: string;
  args?: string[];
  cwd?: string;

  stdout: string;
  stderr: string;

  exitCode: number | null;
  success: boolean;

  error?: unknown;
}
