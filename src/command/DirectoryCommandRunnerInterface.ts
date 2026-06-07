import type { DirectoryInterface } from "@frxnklyn/directory-contracts";
import type { CommandRunnerInterface } from "./CommandRunnerInterface.js";

/**
 * Kombiniert einen path-aware Command-Runner mit allen Directory-Funktionen.
 * Implementierungen verwalten ihr Directory selbst und verwenden dessen
 * aktuellen Pfad bei jeder Ausfuehrung als Standard-CWD.
 *
 * @author Frxnklyn
 */
export interface DirectoryCommandRunnerInterface<TDirectory = unknown>
  extends CommandRunnerInterface,
    DirectoryInterface<TDirectory> {}
