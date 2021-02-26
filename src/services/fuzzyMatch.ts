export function fuzzyMatch(search: string, options: string[]): string[] {
  return options.filter(
    (x) => x.toUpperCase().indexOf(search.toUpperCase()) >= 0
  );
}
