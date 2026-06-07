import type { CommandRunnerInterface } from "./CommandRunnerInterface.js";

export interface PathAwareCommandRunnerInterface extends CommandRunnerInterface {
  setCwd(path: string): this;
  getCwd(): string | undefined;
  clearCwd(): this;
}
