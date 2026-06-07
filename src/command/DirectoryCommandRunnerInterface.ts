import type { DirectoryInterface } from "@frxnklyn/directory-contracts";
import type { PathAwareCommandRunnerInterface } from "./PathAwareCommandRunnerInterface.js";

export interface DirectoryCommandRunnerInterface
  extends PathAwareCommandRunnerInterface {
  setDirectory(directory: DirectoryInterface): this;
  getDirectory(): DirectoryInterface;
}
