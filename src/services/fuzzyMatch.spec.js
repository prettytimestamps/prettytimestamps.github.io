import { fuzzyMatch } from "./fuzzyMatch";

it("Fuzzy matches when case match", () => {
  expect(fuzzyMatch("abc", ["abc", "DEF", "ghi"])).toEqual(["abc"]);
});

it("Fuzzy matches when case does not match", () => {
  expect(fuzzyMatch("ABC", ["abc", "DEF", "ghi"])).toEqual(["abc"]);
});

it("Fuzzy match treats underscore like space and underscore like underscore", () => {
  expect(fuzzyMatch("AB_C", ["ab_c", "DEF", "ghi"])).toEqual(["ab_c"]);
  expect(fuzzyMatch("AB C", ["ab_c", "DEF", "ghi"])).toEqual(["ab_c"]);
});
