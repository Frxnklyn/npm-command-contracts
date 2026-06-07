import type { CommandRunnerInterface } from "./CommandRunnerInterface.js";

/**
 * Definiert einen Command-Runner, der einen String-Pfad als Standard-CWD speichert.
 *
 * @author Frxnklyn
 */
export interface PathAwareCommandRunnerInterface extends CommandRunnerInterface {
  setPath(path: string): this;
  getPath(): string;
}
