import { DataTable, Text } from "grommet";
import { Guess } from "../services/guessTimestampForm";

interface TimeDisplayProps {
  guessedTime: Guess | null;
  tzs: string[];
}

export const TimeDisplay = ({ guessedTime, tzs }: TimeDisplayProps) => {
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
              guessedTime == null ? "???" : guessedTime.time.tz(d).format("z"),
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
        data={tzs}
      />
    </>
  );
};
