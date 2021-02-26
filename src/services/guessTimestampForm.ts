import moment from "moment-timezone";

export interface Guess {
  type: string;
  time: moment.Moment;
}

export const guessTimeStampForm = (timestamp: string) => {
  const parsedStamp = parseInt(timestamp, 10);
  const options = [
    { type: "s", time: moment(parsedStamp * 1000) },
    { type: "ms", time: moment(parsedStamp) },
    { type: "ns", time: moment(parsedStamp / 1000000) },
  ];

  let bestOption = options[0];
  const now = moment();
  options.forEach((option, index) => {
    if (index === 0) return;

    const timeToBest = Math.abs(now.diff(bestOption.time));
    const timeToOption = Math.abs(now.diff(option.time));

    if (timeToOption < timeToBest) {
      bestOption = option;
    }
  });
  return bestOption;
};
