import moment from "moment-timezone";
import { DataTable, Text } from "grommet";
import { useMemo } from "react";
import { Guess } from "../services/guessTimestampForm";

interface TimeDisplayProps {
  guessedTime: Guess | null;
  tzs: string[];
}

export const TimeDisplay = ({ guessedTime, tzs }: TimeDisplayProps) => {
  const sortedTZs = useMemo(
    () =>
      tzs.sort(
        (a, b) =>
          moment(guessedTime?.time).tz(a).utcOffset() -
          moment(guessedTime?.time).tz(b).utcOffset()
      ),
    [tzs]
  );

  return (
    <>
      <DataTable
        columns={[
          {
            property: "name",
            header: <Text>Name</Text>,
            primary: true,
            render: (d) => d,
          },
          {
            property: "offset",
            header: "Offset",
            render: (d) =>
              guessedTime == null ? "???" : guessedTime.time.tz(d).format("Z"),
          },
          {
            property: "time",
            header: "Time",
            render: (d) => (
              <span style={{ fontFamily: "'Roboto Mono', monospace" }}>
                {guessedTime
                  ? guessedTime.time.tz(d).format("YYYY-MM-DD HH:mm:ss")
                  : "0000-00-00 00:00:00"}
              </span>
            ),
          },
        ]}
        data={sortedTZs}
      />
    </>
  );
};
