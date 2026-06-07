/**
 * Konfiguriert das Fehler- und Timeout-Verhalten eines Command-Runners.
 *
 * @author Frxnklyn
 */
export interface CommandRunnerOptionsInterface {
  throwOnError?: boolean;
  timeoutMs?: number;
}
