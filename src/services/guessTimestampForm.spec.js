import { guessTimeStampForm } from "./guessTimestampForm";
import moment from "moment-timezone";

it("guesses seconds case correctly", () => {
  const easy = 1614279007;
  const guess = guessTimeStampForm(easy);

  expect(guess).toEqual({
    type: "s",
    time: moment(easy * 1000),
  });
});

it("guesses millis case correctly", () => {
  const easy = 1614279007000;
  const guess = guessTimeStampForm(easy);

  expect(guess).toEqual({
    type: "ms",
    time: moment(easy),
  });
});
