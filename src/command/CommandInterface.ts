export interface CommandInterface {
  command: string;
  args?: string[];
  cwd?: string;
  env?: Record<string, string>;
}
