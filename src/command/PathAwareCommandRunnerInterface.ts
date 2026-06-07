import type { CommandRunnerInterface } from "./CommandRunnerInterface.js";

export interface PathAwareCommandRunnerInterface extends CommandRunnerInterface {
  setPath(path: string): this;
  getPath(): string;
}
