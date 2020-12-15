export function skipSuite(msg: string): void {
  test.only("skip suite", () => {
    console.warn(`[SKIP] ${msg}`);
  });
}
