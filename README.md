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

## Runner-Arten

`CommandRunnerInterface` beschreibt einen Runner ohne gespeicherten Pfad. Das `cwd` kann bei Bedarf direkt am Command gesetzt werden.

`PathAwareCommandRunnerInterface` beschreibt einen Runner mit gespeichertem Pfad. Dadurch kann `run(...)` ohne `cwd` aufgerufen werden. Ein direkt am Command gesetztes `cwd` hat weiterhin Vorrang.

```ts
import type { PathAwareCommandRunnerInterface } from "@frxnklyn/command-contracts";

declare const runner: PathAwareCommandRunnerInterface;
runner.setPath("C:/dev/my-repo");
await runner.run({ command: "git", args: ["status"] });
```

`DirectoryCommandRunnerInterface` erweitert sowohl `CommandRunnerInterface` als auch `DirectoryInterface`. Eine Implementierung ist damit selbst ein Directory und verwendet ihren eigenen aktuellen Pfad bei jeder Ausfuehrung.

```ts
import type { DirectoryCommandRunnerInterface } from "@frxnklyn/command-contracts";

declare const runner: DirectoryCommandRunnerInterface;
runner.moveTo("packages/example");
await runner.run({ command: "git", args: ["status"] });
```

## Build

```bash
npm install
npm run build
```
