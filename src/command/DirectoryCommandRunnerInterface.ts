import type { DirectoryInterface } from "@frxnklyn/directory-contracts";
import type { PathAwareCommandRunnerInterface } from "./PathAwareCommandRunnerInterface.js";

/**
 * Definiert einen Command-Runner, der ein DirectoryInterface speichert und dessen
 * aktuellen Pfad bei jeder Ausfuehrung als Standard-CWD verwendet.
 *
 * @author Frxnklyn
 */
export interface DirectoryCommandRunnerInterface
  extends PathAwareCommandRunnerInterface {
  setDirectory(directory: DirectoryInterface): this;
  getDirectory(): DirectoryInterface;
}
