# @frxnklyn/command-contracts

Reine TypeScript-Interfaces und Types fuer strukturierte Command-Ausfuehrung. Das Package enthaelt keine Prozess- oder Shell-Implementierung.

## Warum strukturierte Commands?

`command`, `args` und `cwd` getrennt zu speichern ist sicherer und leichter weiterzuverarbeiten als ein roher Shell-String. Argumente muessen nicht manuell gequotet werden, Commands koennen als JSON uebertragen werden und Runner koennen das Arbeitsverzeichnis gezielt setzen.

```ts
import type { CommandInterface } from "@frxnklyn/command-contracts";

const command: CommandInterface = {
  command: "git",
  args: ["status", "--short"],
  cwd: "C:/dev/my-repo",
};
```

## CommandRunnerInterface

Implementierungen erhalten einen strukturierten Command und liefern immer ein strukturiertes Ergebnis.

```ts
import type {
  CommandRunnerInterface,
  CommandResultInterface,
} from "@frxnklyn/command-contracts";

declare const runner: CommandRunnerInterface;
const result: CommandResultInterface = await runner.run({
  command: "node",
  args: ["--version"],
});
```

## PathAwareCommandRunnerInterface

Ein path-aware Runner kann ein Standard-CWD speichern. Ein direkt am Command gesetztes `cwd` hat weiterhin Vorrang.

```ts
import type { PathAwareCommandRunnerInterface } from "@frxnklyn/command-contracts";

declare const runner: PathAwareCommandRunnerInterface;
runner.setCwd("C:/dev/my-repo");
await runner.run({ command: "git", args: ["status"] });
runner.clearCwd();
```

## Build

```bash
npm install
npm run build
```
