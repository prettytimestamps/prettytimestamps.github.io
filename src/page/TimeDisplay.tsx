import moment from "moment-timezone";
import { DataTable, Text } from "grommet";
import { useMemo } from "react";
import { Guess } from "../services/guessTimestampForm";
import { Close } from "grommet-icons";

interface TimeDisplayProps {
  guessedTime: Guess | null;
  tzs: string[];
  setTZs: (newTzs: string[]) => void;
}

export const TimeDisplay = ({ guessedTime, tzs, setTZs }: TimeDisplayProps) => {
  const sortedTZs = useMemo(
    () =>
      tzs.sort(
        (a, b) =>
          moment(guessedTime?.time).tz(a).utcOffset() -
          moment(guessedTime?.time).tz(b).utcOffset()
      ),
    [tzs, guessedTime]
  );

  return (
    <>
      <DataTable
        columns={[
          {
            property: "deleteButton",
            header: "",
            render: (d) => {
              return (
                <Close
                  size="16px"
                  color="red"
                  onClick={(e) => {
                    setTZs(sortedTZs.filter((item) => item !== d));
                  }}
                />
              );
            },
          },
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
              guessedTime == null ? (
                "???"
              ) : (
                <span style={{ fontFamily: "'Roboto Mono', monospace" }}>
                  {guessedTime.time.tz(d).format("Z")}
                </span>
              ),
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
