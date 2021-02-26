import { fuzzyMatch } from "./fuzzyMatch";

it("Fuzzy matches when case match", () => {
  expect(fuzzyMatch("abc", ["abc", "DEF", "ghi"])).toEqual(["abc"]);
});

it("Fuzzy matches when case does not match", () => {
  expect(fuzzyMatch("ABC", ["abc", "DEF", "ghi"])).toEqual(["abc"]);
});
