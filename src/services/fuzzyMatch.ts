export function fuzzyMatch(search: string, options: string[]): string[] {
  return options.filter((x) => {
    return (
      x.toUpperCase().indexOf(search.toUpperCase()) >= 0 ||
      x.toUpperCase().replace("_", " ").indexOf(search.toUpperCase()) >= 0
    );
  });
}
