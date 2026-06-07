import type { CommandInterface } from "./CommandInterface.js";
import type { CommandResultInterface } from "./CommandResultInterface.js";
import type { CommandRunnerOptionsInterface } from "./CommandRunnerOptionsInterface.js";

/**
 * Definiert einen Command-Runner ohne fest gespeichertes Arbeitsverzeichnis.
 *
 * @author Frxnklyn
 */
export interface CommandRunnerInterface {
  run(
    command: CommandInterface,
    options?: CommandRunnerOptionsInterface,
  ): Promise<CommandResultInterface>;
}
